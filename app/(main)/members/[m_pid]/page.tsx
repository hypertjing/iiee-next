import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { userprofiles } from "@/db/schema";
import { eq } from "drizzle-orm";

// Example user (replace with API/db fetch)

export default async function ProfilePage({
    params,
}: {
    params: Promise<{ m_pid: number }>;
}) {
    const { m_pid } = await params;

    const profile = (
        await db
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.pkUserProfilesId, m_pid))
            .limit(1)
    )[0];

    // const user: UserAccount = member_data[0] as unknown as UserAccount;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-6">
                {profile.fname} {profile.mname} {profile.lname} {profile.suffix}
            </h1>

            {/* Status */}
            <div className="mb-6">
                <Badge
                    variant={
                        profile.akUserProfilesFlag === "Verified"
                            ? "default"
                            : "secondary"
                    }
                >
                    {profile.akUserProfilesFlag}
                </Badge>
            </div>

            <Separator />

            {/* Personal Info */}
            <section className="mt-6 space-y-2">
                <h2 className="text-xl font-semibold mb-2">
                    Personal Information
                </h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="font-medium">Birthday</p>
                        <p>{profile.bdate.toDateString()}</p>
                    </div>
                    <div>
                        <p className="font-medium">Birthplace</p>
                        <p>{profile.bplace}</p>
                    </div>
                    <div>
                        <p className="font-medium">Gender</p>
                        <p>{profile.gender}</p>
                    </div>
                    <div>
                        <p className="font-medium">Civil Status</p>
                        <p>{profile.civilStatus}</p>
                    </div>
                </div>
            </section>

            <Separator className="my-6" />

            {/* Contact Info */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">
                    Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="font-medium">Email</p>
                        <p>{profile.email}</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p>{profile.celNo}</p>
                    </div>
                    <div>
                        <p className="font-medium">Telephone</p>
                        <p>{profile.telNo}</p>
                    </div>
                    <div>
                        <p className="font-medium">Fax</p>
                        <p>{profile.faxNo}</p>
                    </div>
                </div>
            </section>

            <Separator className="my-6" />

            {/* Work Info */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Work Information</h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="font-medium">Company</p>
                        <p>{profile.company}</p>
                    </div>
                    <div>
                        <p className="font-medium">Designation</p>
                        <p>{profile.designation}</p>
                    </div>
                    <div>
                        <p className="font-medium">Industry</p>
                        <p>{profile.industry}</p>
                    </div>
                    <div>
                        <p className="font-medium">Sector</p>
                        <p>{profile.sector}</p>
                    </div>
                </div>
            </section>

            <Separator className="my-6" />

            {/* Membership Info */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Membership</h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="font-medium">Membership No.</p>
                        <p>{profile.membershipNo}</p>
                    </div>
                    <div>
                        <p className="font-medium">Type</p>
                        <p>{profile.memberType}</p>
                    </div>
                    <div>
                        <p className="font-medium">Registered</p>
                        <p>{profile.membershipDateReg.toDateString()}</p>
                    </div>
                    <div>
                        <p className="font-medium">Validity</p>
                        <p>{profile.membershipValidity.toDateString()}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
