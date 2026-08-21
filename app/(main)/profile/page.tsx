import { getUser } from "@/app/lib/dal";
import MemberAddress from "./components/MemberAddress";
import MemberLicenses from "./components/MemberLicenses";
import MemberPersonalInformation from "./components/MemberPersonalInformation";
import MembershipOverview from "./components/MembershipOverview";
import ProfileBanner from "./components/ProfileBanner";

export default async function ProfilePage() {
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    return (
        <main className="">
            <div className="max-w-6xl space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        My Profile
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        View your membership and personal information.
                    </p>
                </div>
                {!user.userprofile && (
                    <div>
                        This user have no profile information. The user maybe an
                        admin.
                    </div>
                )}
                {/* Profile Hero */}
                <ProfileBanner />

                {/* Membership Overview */}
                <MembershipOverview />
                <MemberLicenses />
                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Personal Information */}
                    <MemberPersonalInformation />

                    <MemberAddress />
                </div>

                {/* Licenses */}
            </div>
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */
