import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";
import { Suspense } from "react";
import MemberAddress, {
    MemberAddressLoader,
} from "../../profile/components/MemberAddress";
import MemberLicenses, {
    MemberLicensesLoader,
} from "../../profile/components/MemberLicenses";
import MemberPersonalInformation, {
    MemberPersonalInformationLoader,
} from "../../profile/components/MemberPersonalInformation";
import MembershipOverview, {
    MembershipOverviewLoader,
} from "../../profile/components/MembershipOverview";
import ProfileBanner, {
    ProfileBannerLoader,
} from "../../profile/components/ProfileBanner";
import WorkInformation, {
    WorkInformationLoader,
} from "../../profile/components/WorkInformation";
import HistoryBackButton from "./HistoryBackButton";

// Example user (replace with API/db fetch)

export default async function ProfilePage({
    params,
}: {
    params: Promise<{ m_pid: number }>;
}) {
    const { m_pid } = await params;

    const profile = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.pkUserProfilesId, m_pid))
            .limit(1)
    )[0];

    function calculateAge(birthDate: Date, referenceDate = new Date()) {
        const dob = new Date(birthDate);
        const ref = new Date(referenceDate);

        let age = ref.getFullYear() - dob.getFullYear();

        const monthDifference = ref.getMonth() - dob.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && ref.getDate() < dob.getDate())
        ) {
            age--;
        }

        return age;
    }

    return (
        <div className="min-h-screen mb-20 max-w-6xl">
            <div className="mb-6">
                <HistoryBackButton />
            </div>
            <div className="space-y-6">
                <Suspense fallback={<ProfileBannerLoader />}>
                    <ProfileBanner profile_id={profile.pkUserProfilesId} />
                </Suspense>

                <Suspense fallback={<MembershipOverviewLoader />}>
                    <MembershipOverview profile_id={profile.pkUserProfilesId} />
                </Suspense>

                <Suspense fallback={<MemberLicensesLoader />}>
                    <MemberLicenses profile_id={profile.pkUserProfilesId} />
                </Suspense>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Suspense fallback={<MemberPersonalInformationLoader />}>
                        <MemberPersonalInformation
                            profile_id={profile.pkUserProfilesId}
                        />
                    </Suspense>
                    <Suspense fallback={<MemberAddressLoader />}>
                        <MemberAddress profile_id={profile.pkUserProfilesId} />
                    </Suspense>
                </div>

                <Suspense fallback={<WorkInformationLoader />}>
                    <WorkInformation profile_id={profile.pkUserProfilesId} />
                </Suspense>
            </div>
        </div>
    );
}
