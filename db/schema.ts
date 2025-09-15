import {
    bigint,
    char,
    date,
    datetime,
    decimal,
    mysqlEnum,
    mysqlTable,
    smallint,
    timestamp,
    varchar,
} from "drizzle-orm/mysql-core";

export const userprofiles = mysqlTable("userprofiles", {
    pkUserProfilesId: bigint("PK_UserProfilesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", { mode: "number" }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    bdate: date("BDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    bplace: varchar("BPlace", { length: 100 }).default("").notNull(),
    gender: mysqlEnum("Gender", ["Male", "Female"]).default("Male").notNull(),
    civilStatus: mysqlEnum("CivilStatus", [
        "Single",
        "Married",
        "Separated",
        "Widowed",
    ])
        .default("Single")
        .notNull(),
    chapter: varchar("Chapter", { length: 100 }).default("").notNull(),
    region: varchar("Region", { length: 100 }).default("").notNull(),
    address: varchar("Address", { length: 255 }).default("").notNull(),
    barangay: varchar("Barangay", { length: 100 }).default("").notNull(),
    fkRegionId: bigint("FK_RegionID", { mode: "number" }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", { mode: "number" }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", { mode: "number" }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", { mode: "number" }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress").notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", { mode: "number" }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", { mode: "number" }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
    }).notNull(),
    zipCodeM: varchar("ZipCode_M", { length: 10 }).default("").notNull(),
    telNo: varchar("TelNo", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    faxNo: varchar("FaxNo", { length: 100 }).default("").notNull(),
    celNo: varchar("CelNo", { length: 100 }).default("").notNull(),
    provinceBak: varchar("Province_Bak", { length: 100 })
        .default("0")
        .notNull(),
    cityBak: varchar("City_Bak", { length: 100 }).default("0").notNull(),
    industry: varchar("Industry", { length: 255 }).default("").notNull(),
    designation: varchar("Designation", { length: 100 }).default("").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Practice"),
    profession: varchar("Profession", { length: 255 }).default("").notNull(),
    company: varchar("Company", { length: 255 }).default("").notNull(),
    companyAddr: varchar("CompanyAddr", { length: 255 }).default("").notNull(),
    companyTelNo: varchar("CompanyTelNo", { length: 100 })
        .default("")
        .notNull(),
    companyFaxNo: varchar("CompanyFaxNo", { length: 100 })
        .default("")
        .notNull(),
    companyCelNo: varchar("CompanyCelNo", { length: 100 })
        .default("")
        .notNull(),
    companyEmail: varchar("CompanyEmail", { length: 100 })
        .default("")
        .notNull(),
    companyWebsite: varchar("CompanyWebsite", { length: 100 })
        .default("")
        .notNull(),
    prcRegNo: varchar("PRCRegNo", { length: 50 }).default("").notNull(),
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date(new Date("1000-01-01")))
        .notNull(),
    memberType: mysqlEnum("MemberType", [
        "Auxiliary",
        "Associate",
        "Fellow",
        "Life",
        "Regular",
        "Senior",
        "NewMember",
        "NewBoard",
        "Honorary",
    ])
        .default("Regular")
        .notNull(),
    insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
        .default("Not Available")
        .notNull(),
    membershipNo: varchar("MembershipNo", { length: 50 })
        .default("0")
        .notNull(),
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID").notNull(),
    agreementDpa: smallint("AgreementDPA").notNull(),
    isDeceased: smallint("IsDeceased").notNull(),
    isVip: smallint("IsVIP").notNull(),
    isEligible: smallint("IsEligible").notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT").notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const useraccounts = mysqlTable("useraccounts", {
    pkUserAccountsId: bigint("PK_UserAccountsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
    }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", {
        mode: "number",
    }).notNull(),
    fkUserControlCode: varchar("FK_UserControlCode", { length: 100 })
        .default("")
        .notNull(),
    akUserAccountsType: mysqlEnum("AK_UserAccountsType", [
        "ADMIN",
        "MEMBER",
        "VIEWER",
        "ENCODER",
    ])
        .default("MEMBER")
        .notNull(),
    akUserAccountsFlag: mysqlEnum("AK_UserAccountsFlag", [
        "Approved",
        "Pending",
    ])
        .default("Pending")
        .notNull(),
    isMailSent: smallint("IsMailSent").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).default(
        "1000-01-01 00:00:00"
    ),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});
