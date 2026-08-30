import { getAuthId, getUserProfileIdByAccountId } from "@/app/lib/dal";
import { Suspense } from "react";
import MemberAddress, { MemberAddressLoader } from "./components/MemberAddress";
import MemberLicenses, {
    MemberLicensesLoader,
} from "./components/MemberLicenses";
import MemberPersonalInformation, {
    MemberPersonalInformationLoader,
} from "./components/MemberPersonalInformation";
import MembershipOverview, {
    MembershipOverviewLoader,
} from "./components/MembershipOverview";
import ProfileBanner, { ProfileBannerLoader } from "./components/ProfileBanner";
import ReloadButton from "./components/ReloadButton";
export default async function ProfilePage() {
    const auth_id = await getAuthId();
    const profile_id = await getUserProfileIdByAccountId(auth_id);

    if (!profile_id) {
        return (
            <div className="max-w-6xl space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        My Profile
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        View your membership and personal information.
                    </p>
                </div>
                <div>
                    This user have no profile information. The user maybe an
                    admin.
                </div>
            </div>
        );
    }

    return (
        <main className="">
            <div className="max-w-6xl space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        My Profile
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        View your membership and personal information.
                    </p>
                </div>
                <div className="text-end">
                    <ReloadButton profile_id={profile_id} />
                </div>
                <Suspense fallback={<ProfileBannerLoader />}>
                    <ProfileBanner profile_id={profile_id} />
                </Suspense>

                <Suspense fallback={<MembershipOverviewLoader />}>
                    <MembershipOverview profile_id={profile_id} />
                </Suspense>

                <Suspense fallback={<MemberLicensesLoader />}>
                    <MemberLicenses profile_id={profile_id} />
                </Suspense>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Suspense fallback={<MemberPersonalInformationLoader />}>
                        <MemberPersonalInformation profile_id={profile_id} />
                    </Suspense>
                    <Suspense fallback={<MemberAddressLoader />}>
                        <MemberAddress profile_id={profile_id} />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
