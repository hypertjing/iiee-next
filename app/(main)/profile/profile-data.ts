export type LicenseStatus = "active" | "expiring" | "expired";

export interface License {
    id: string;
    credential: string;
    number: string;
    issuingState: string;
    issued: string; // ISO date
    expires: string; // ISO date
    status: LicenseStatus;
}

export interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
}

export interface MemberProfile {
    name: string;
    title: string;
    memberId: string;
    memberSince: string; // ISO date
    email: string;
    phone: string;
    initials: string;
    chapter: string;
    chapterCode: string;
    region: string;
    address: Address;
    licenses: License[];
}

// Swap this for a real fetch (DB / API route / server action) in production.
export const memberProfile: MemberProfile = {
    name: "Dana Whitfield",
    title: "Senior Property Consultant",
    memberId: "MB-04871",
    memberSince: "2016-03-11",
    email: "dana.whitfield@example.com",
    phone: "(415) 555-0148",
    initials: "DW",
    chapter: "Bay Area Chapter",
    chapterCode: "CH-07",
    region: "Pacific West Region",
    address: {
        line1: "228 Marlow Terrace",
        line2: "Suite 4B",
        city: "Oakland",
        state: "CA",
        zip: "94612",
    },
    licenses: [
        {
            id: "lic-1",
            credential: "Real Estate Broker License",
            number: "RB-119245",
            issuingState: "CA",
            issued: "2015-06-01",
            expires: "2027-06-01",
            status: "active",
        },
        {
            id: "lic-2",
            credential: "Property Management Certification",
            number: "PM-338210",
            issuingState: "CA",
            issued: "2019-09-14",
            expires: "2026-11-01",
            status: "expiring",
        },
        {
            id: "lic-3",
            credential: "Notary Public Commission",
            number: "NP-005587",
            issuingState: "CA",
            issued: "2014-01-20",
            expires: "2025-01-20",
            status: "expired",
        },
    ],
};
