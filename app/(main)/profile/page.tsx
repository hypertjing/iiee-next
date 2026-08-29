import { getUser } from "@/app/lib/dal";
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
    const user = await getUser();

    if (!user) {
        return <>Cannot find user</>;
    }

    if (!user.userprofile) {
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
                <div>
                    <ReloadButton
                        profile_id={user.userprofile.pkUserProfilesId}
                    />
                </div>
                <Suspense fallback={<ProfileBannerLoader />}>
                    <ProfileBanner />
                </Suspense>

                <Suspense fallback={<MembershipOverviewLoader />}>
                    <MembershipOverview />
                </Suspense>

                <Suspense fallback={<MemberLicensesLoader />}>
                    <MemberLicenses />
                </Suspense>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Suspense fallback={<MemberPersonalInformationLoader />}>
                        <MemberPersonalInformation />
                    </Suspense>
                    <Suspense fallback={<MemberAddressLoader />}>
                        <MemberAddress />
                    </Suspense>
                </div>
                {/* <UserInfosSection userPromise={user} /> */}
            </div>
        </main>
    );
}
