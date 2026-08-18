import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { LicenseStatus, MemberProfile } from "../profile-data";

const STATUS_COPY: Record<LicenseStatus, string> = {
    active: "Active",
    expiring: "Renew soon",
    expired: "Expired",
};

const STATUS_BADGE: Record<LicenseStatus, string> = {
    active: "border-[#3E6259]/30 bg-[#3E6259]/10 text-[#3E6259]",
    expiring: "border-[#A6752C]/30 bg-[#A6752C]/10 text-[#A6752C]",
    expired: "border-[#B4472B]/30 bg-[#B4472B]/10 text-[#B4472B]",
};

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function SectionCard({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Card id={id} className="border-[#D8D2C4] bg-white/40 shadow-none">
            <CardHeader className="pb-3">
                <CardTitle className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#8A8272]">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div>
            <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A8272] mb-1">
                {label}
            </dt>
            <dd className="text-[15px] text-[#1B2A2F]">{value}</dd>
        </div>
    );
}

function LicensePlate({ number }: { number: string }) {
    return (
        <span className="inline-block font-mono text-[13px] tracking-[0.1em] text-[#1B2A2F] border border-[#1B2A2F]/25 rounded-[3px] px-2.5 py-1 bg-[#F7F5EF]">
            {number}
        </span>
    );
}

export default function ProfileView({ profile }: { profile: MemberProfile }) {
    const { address, licenses } = profile;

    return (
        <div className="min-h-screen bg-[#F7F5EF]">
            {/* Membership card header */}
            <header className="bg-[#1B2A2F] text-[#F7F5EF]">
                <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-14">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="flex items-center gap-5">
                            <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#A6752C]">
                                <AvatarFallback className="bg-transparent font-serif text-xl md:text-2xl text-[#A6752C]">
                                    {profile.initials}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-serif text-3xl md:text-4xl leading-tight">
                                    {profile.name}
                                </h1>
                                <p className="text-[#F7F5EF]/70 text-sm md:text-base mt-1">
                                    {profile.title}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 md:flex-col md:items-end md:gap-2">
                            <div className="text-left md:text-right">
                                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#F7F5EF]/50">
                                    Member ID
                                </p>
                                <p className="font-mono text-base tracking-[0.08em]">
                                    {profile.memberId}
                                </p>
                            </div>
                            <Badge
                                variant="outline"
                                className="border-[#A6752C]/60 text-[#A6752C] -rotate-2 font-mono text-[10px] tracking-[0.2em] uppercase"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#A6752C]" />
                                Verified Member
                            </Badge>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16">
                <div className="grid md:grid-cols-[160px_1fr] gap-10 md:gap-16">
                    {/* Section index rail */}
                    <nav
                        aria-label="Profile sections"
                        className="hidden md:block sticky top-12 self-start"
                    >
                        <ul className="space-y-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[#8A8272]">
                            <li>
                                <a
                                    href="#profile"
                                    className="hover:text-[#1B2A2F]"
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#licenses"
                                    className="hover:text-[#1B2A2F]"
                                >
                                    Licenses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#address"
                                    className="hover:text-[#1B2A2F]"
                                >
                                    Address
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#chapter"
                                    className="hover:text-[#1B2A2F]"
                                >
                                    Chapter &amp; Region
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="space-y-6">
                        {/* Profile */}
                        <SectionCard id="profile" title="Profile">
                            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6">
                                <Field label="Email" value={profile.email} />
                                <Field label="Phone" value={profile.phone} />
                                <Field
                                    label="Member since"
                                    value={formatDate(profile.memberSince)}
                                />
                            </dl>
                        </SectionCard>

                        {/* Licenses */}
                        <SectionCard
                            id="licenses"
                            title="Licenses & Certifications"
                        >
                            <ul>
                                {licenses.map((license, i) => (
                                    <li key={license.id}>
                                        {i > 0 && (
                                            <Separator className="bg-[#D8D2C4]" />
                                        )}
                                        <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <div>
                                                <p className="text-[15px] text-[#1B2A2F]">
                                                    {license.credential}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                    <LicensePlate
                                                        number={license.number}
                                                    />
                                                    <span className="text-[12px] text-[#8A8272]">
                                                        {license.issuingState} ·
                                                        expires{" "}
                                                        {formatDate(
                                                            license.expires,
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <Badge
                                                variant="outline"
                                                className={cn(
                                                    "shrink-0 font-mono text-[11px] tracking-[0.1em] uppercase",
                                                    STATUS_BADGE[
                                                        license.status
                                                    ],
                                                )}
                                            >
                                                {STATUS_COPY[license.status]}
                                            </Badge>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>

                        {/* Address */}
                        <SectionCard id="address" title="Address on File">
                            <address className="not-italic text-[15px] text-[#1B2A2F] leading-relaxed border-l-2 border-[#A6752C]/50 pl-4">
                                {address.line1}
                                {address.line2 && (
                                    <>
                                        <br />
                                        {address.line2}
                                    </>
                                )}
                                <br />
                                {address.city}, {address.state} {address.zip}
                            </address>
                        </SectionCard>

                        {/* Chapter & Region */}
                        <SectionCard id="chapter" title="Chapter & Region">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="border border-[#D8D2C4] rounded-sm p-5 bg-white/60">
                                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A8272] mb-1">
                                        Chapter
                                    </p>
                                    <p className="font-serif text-lg text-[#1B2A2F]">
                                        {profile.chapter}
                                    </p>
                                    <p className="font-mono text-[12px] text-[#8A8272] mt-1">
                                        {profile.chapterCode}
                                    </p>
                                </div>
                                <div className="border border-[#D8D2C4] rounded-sm p-5 bg-white/60">
                                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A8272] mb-1">
                                        Region
                                    </p>
                                    <p className="font-serif text-lg text-[#1B2A2F]">
                                        {profile.region}
                                    </p>
                                </div>
                            </div>
                        </SectionCard>
                    </div>
                </div>
            </main>
        </div>
    );
}
