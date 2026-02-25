import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { db_old } from "@/db/old";
import {
    cities,
    countries,
    provinces,
    userprofiles,
} from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";

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

    const city = (
        await db_old
            .select()
            .from(cities)
            .where(eq(cities.pkCitiesId, profile.fkCitiesId))
    )[0];

    const province = (
        await db_old
            .select()
            .from(provinces)
            .where(eq(provinces.pkProvinces, profile.fkProvincesId))
    )[0];

    const country = (
        await db_old
            .select()
            .from(countries)
            .where(eq(countries.pkCountriesId, profile.fkCountriesId))
    )[0];

    // const user: UserAccount = member_data[0] as unknown as UserAccount;

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
        <div className="min-h-screen">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-6">
                {profile.fname} {profile.mname} {profile.lname} {profile.suffix}
            </h1>

            {/* Status */}
            <div className="mb-6">
                <Badge
                    className={`${profile.akUserProfilesFlag === "Verified" ? "bg-green-600" : "bg-red-600"}`}
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
                        <p className="font-medium">Age</p>
                        <p>
                            {calculateAge(profile.bdate, new Date(Date.now()))}
                        </p>
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

            <div className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        {profile.barangay}, {city && `${city.description},`}{" "}
                        {province && `${province.description},`}{" "}
                        {country && country.description}{" "}
                    </div>
                </div>
            </div>

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
                        <p className="flex gap-2">
                            {profile.industry
                                .split("|")
                                .filter((item) => {
                                    return item != "";
                                })
                                .map((item) => (
                                    <div className="bg-gray-100 px-3 py-1 rounded-md">
                                        {item}
                                    </div>
                                ))}
                        </p>
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
