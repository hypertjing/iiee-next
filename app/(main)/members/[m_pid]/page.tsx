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
import ReloadButton from "../../profile/components/ReloadButton";
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
            <div className="mb-6 flex items-center justify-between">
                <HistoryBackButton />
                <ReloadButton profile_id={m_pid} />
            </div>
            <div className="space-y-6">
                <Suspense fallback={<ProfileBannerLoader />}>
                    <ProfileBanner profile_id={m_pid} />
                </Suspense>

                <Suspense fallback={<MembershipOverviewLoader />}>
                    <MembershipOverview profile_id={m_pid} />
                </Suspense>

                <Suspense fallback={<MemberLicensesLoader />}>
                    <MemberLicenses profile_id={m_pid} />
                </Suspense>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Suspense fallback={<MemberPersonalInformationLoader />}>
                        <MemberPersonalInformation profile_id={m_pid} />
                    </Suspense>
                    <Suspense fallback={<MemberAddressLoader />}>
                        <MemberAddress profile_id={m_pid} />
                    </Suspense>
                </div>

                <Suspense fallback={<WorkInformationLoader />}>
                    <WorkInformation profile_id={m_pid} />
                </Suspense>
            </div>
        </div>
    );
}
