import { sql } from "drizzle-orm";
import {
    bigint,
    char,
    date,
    datetime,
    decimal,
    index,
    int,
    longtext,
    mediumtext,
    mysqlEnum,
    mysqlTable,
    mysqlView,
    smallint,
    text,
    time,
    timestamp,
    unique,
    varchar,
} from "drizzle-orm/mysql-core";

export const NationalElection0012024 = mysqlTable(
    "001_2024_national_election",
    {
        pkTmpId: bigint("PK_TmpID", { mode: "number" })
            .autoincrement()
            .notNull(),
        fkEmailAuthId: bigint("FK_EmailAuthID", { mode: "number" }).notNull(),
        tokenUsed: varchar("TokenUsed", { length: 32 }).default("").notNull(),
        sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
        votes: varchar("Votes", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        isRestricted: smallint("IsRestricted").default(1).notNull(),
        isActive: smallint("IsActive").default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "string" })
            .default("current_timestamp()")
            .notNull(),
    }
);

export const accessgroups = mysqlTable("accessgroups", {
    pkAccessGroupsId: bigint("PK_AccessGroupsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("FK_ModulesID").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("FK_PermissionsID").notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    fkUsersAccountsId: bigint("FK_UsersAccountsID", {
        mode: "number",
    }).notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const areas = mysqlTable("areas", {
    pkAreasId: int("PK_AreasID").autoincrement().notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const ballots = mysqlTable("ballots", {
    pkBallotsId: bigint("PK_BallotsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const booths = mysqlTable("booths", {
    pkBoothsId: bigint("PK_BoothsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    fkVenuesId: bigint("FK_VenuesID", { mode: "number" }).notNull(),
    fkPackageId: bigint("FK_PackageID", { mode: "number" }).notNull(),
    boothNo: varchar("BoothNo", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    size: varchar("Size", { length: 100 }).default("").notNull(),
    amount: int("Amount").default(0).notNull(),
    abscissa: smallint("Abscissa").notNull(),
    ordinate: smallint("Ordinate").notNull(),
    fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
        mode: "number",
    }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateReserved: date("DateReserved", { mode: "string" })
        .default("0000-00-00")
        .notNull(),
    daysValid: int("DaysValid").default(0).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    datePaid: date("DatePaid", { mode: "string" })
        .default("0000-00-00")
        .notNull(),
    status: mysqlEnum("Status", [
        "NoReservation",
        "Reserved",
        "Extended",
        "Approved",
    ])
        .default("NoReservation")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const candidates = mysqlTable("candidates", {
    pkCandidatesId: bigint("PK_CandidatesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    fkElectionPositionsId: bigint("FK_ElectionPositionsID", {
        mode: "number",
    }).notNull(),
    fkUserImagesId: bigint("FK_UserImagesID", { mode: "number" }).notNull(),
    image: varchar("Image", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 255 }).default("").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Description").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Remarks").notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    isWinner: smallint("IsWinner").notNull(),
    isElected: smallint("IsElected").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const chapters = mysqlTable("chapters", {
    pkChaptersId: int("PK_ChaptersID").autoincrement().notNull(),
    fkRegionsId: int("FK_RegionsID").default(0).notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const charges = mysqlTable("charges", {
    pkChargesId: bigint("PK_ChargesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkSeminarsId: bigint("FK_SeminarsID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const cities = mysqlTable("cities", {
    pkCitiesId: bigint("PK_CitiesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    fkRegionId: bigint("FK_RegionID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const citiesRegion = mysqlTable("cities_region", {
    pkRegionsId: bigint("PK_RegionsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("0").notNull(),
    description: varchar("Description", { length: 100 }).default("0").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const competenceareas = mysqlTable("competenceareas", {
    pkCompetenceAreasId: bigint("PK_CompetenceAreasID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const countries = mysqlTable("countries", {
    pkCountriesId: bigint("PK_CountriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 2 }).default("").notNull(),
    description: varchar("Description", { length: 100 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const currencies = mysqlTable("currencies", {
    pkCurrenciesId: int("PK_CurrenciesID").autoincrement().notNull(),
    name: varchar("Name", { length: 20 }).default("NULL"),
    code: varchar("Code", { length: 3 }).default("NULL"),
    symbol: varchar("Symbol", { length: 5 }).default("NULL"),
});

export const dragonpay = mysqlTable("dragonpay", {
    pkDragonPayId: bigint("PK_DragonPayID", { mode: "number" })
        .autoincrement()
        .notNull(),
    merchantId: varchar("MerchantID", { length: 100 }).default("").notNull(),
    merchantPassword: varchar("MerchantPassword", { length: 255 })
        .default("")
        .notNull(),
    envr: smallint("Envr").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const duplicatethis = mysqlTable("duplicatethis", {
    pkDuplicateThisId: bigint("PK_DuplicateThisID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const election = mysqlTable("election", {
    pkElectionId: bigint("PK_ElectionID", { mode: "number" })
        .autoincrement()
        .notNull(),
    isChapter: smallint("IsChapter").notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateFrom: date("DateFrom", { mode: "string" }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateTo: date("DateTo", { mode: "string" }).notNull(),
    endTime: time("EndTime").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted"),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const electionimages = mysqlTable("electionimages", {
    pkElectionImagesId: bigint("PK_ElectionImagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const electioninternal = mysqlTable("electioninternal", {
    pkElectionInternalId: bigint("PK_ElectionInternalID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    fkCandidatesId: bigint("FK_CandidatesID", { mode: "number" }).notNull(),
    fkPositionsId: bigint("FK_PositionsID", { mode: "number" }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const electioninternaltally = mysqlTable("electioninternaltally", {
    pkElectionInternalTallyId: bigint("PK_ElectionInternalTallyID", {
        mode: "number",
    })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    fkCandidatesId: bigint("FK_CandidatesID", { mode: "number" }).notNull(),
    fkPositionsId: bigint("FK_PositionsID", { mode: "number" }).notNull(),
    votes: bigint("Votes", { mode: "number" }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const electionpositions = mysqlTable("electionpositions", {
    pkElectionPositionsId: bigint("PK_ElectionPositionsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    position: varchar("Position", { length: 100 }).default("").notNull(),
    isChapter: smallint("IsChapter").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    counter: int("Counter").default(0).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const electiontally = mysqlTable("electiontally", {
    pkElectionTallyId: bigint("PK_ElectionTallyID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkCandidatesId: bigint("FK_CandidatesID", { mode: "number" }).notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    votes: bigint("Votes", { mode: "number" }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const emailauth = mysqlTable("emailauth", {
    pkEmailAuthId: bigint("PK_EmailAuthID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
    sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
    sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    subject: varchar("Subject", { length: 100 }).default("").notNull(),
    message: varchar("Message", { length: 255 }).default("").notNull(),
    predefined: varchar("Predefined", { length: 100 }).default("").notNull(),
    token: varchar("Token", { length: 32 }).default("").notNull(),
    isSent: smallint("IsSent").notNull(),
    isAccessed: smallint("IsAccessed").notNull(),
    isOpened: smallint("IsOpened").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).default("NULL"),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const emailauth111224 = mysqlTable("emailauth_111224", {
    pkEmailAuthId: bigint("PK_EmailAuthID", { mode: "number" }).notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
    sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
    sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    subject: varchar("Subject", { length: 100 }).default("").notNull(),
    message: varchar("Message", { length: 255 }).default("").notNull(),
    predefined: varchar("Predefined", { length: 100 }).default("").notNull(),
    token: varchar("Token", { length: 32 }).default("").notNull(),
    isSent: smallint("IsSent").notNull(),
    isAccessed: smallint("IsAccessed").notNull(),
    isOpened: smallint("IsOpened").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).default("NULL"),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const emailauth112324 = mysqlTable("emailauth_112324", {
    pkEmailAuthId: bigint("PK_EmailAuthID", { mode: "number" }).notNull(),
    fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
    sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
    sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    subject: varchar("Subject", { length: 100 }).default("").notNull(),
    message: varchar("Message", { length: 255 }).default("").notNull(),
    predefined: varchar("Predefined", { length: 100 }).default("").notNull(),
    token: varchar("Token", { length: 32 }).default("").notNull(),
    isSent: smallint("IsSent").notNull(),
    isAccessed: smallint("IsAccessed").notNull(),
    isOpened: smallint("IsOpened").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).default("NULL"),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const employment = mysqlTable(
    "employment",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        companyName: varchar({ length: 100 }).default("NULL"),
        companyAddress: text().default("NULL"),
        position: varchar({ length: 100 }).default("NULL"),
        specialization: text().default("NULL"),
        companyFax: varchar({ length: 100 }).default("NULL"),
        companyTelNumber: varchar({ length: 100 }).default("NULL"),
        companyMobileNumber: varchar({ length: 100 }).default("NULL"),
        companyEmail: varchar({ length: 100 }).default("NULL"),
        websiteUrl: varchar({ length: 100 }).default("NULL"),
        dateCreated: datetime({ mode: "string" }).notNull(),
        dateUpdated: datetime({ mode: "string" }).default("NULL"),
    },
    (table) => [
        index("memberNumber_2").on(table.memberNumber),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ]
);

export const evalcategories = mysqlTable("evalcategories", {
    pkEvalCategoriesId: bigint("PK_EvalCategoriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEvalTypeId: bigint("FK_EvalTypeID", { mode: "number" }).notNull(),
    memType: mysqlEnum("MemType", [
        "exhibitor",
        "comitee",
        "member",
        "finance",
        "committee",
    ]),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    seqNo: int("SeqNo").default(0).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const evaldetails = mysqlTable("evaldetails", {
    pkEvalDetailsId: bigint("PK_EvalDetailsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEvalCategoriesId: bigint("FK_EvalCategoriesID", {
        mode: "number",
    }).notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    seqNo: int("SeqNo").default(0).notNull(),
    isEssay: smallint("IsEssay").notNull(),
    percentage: char("Percentage", { length: 10 }).default("0"),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const evaltype = mysqlTable("evaltype", {
    pkEvalTypeId: bigint("PK_EvalTypeID", { mode: "number" })
        .autoincrement()
        .notNull(),
    type: varchar("Type", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const events = mysqlTable("events", {
    pkEventsId: bigint("PK_EventsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkDragonPayId: bigint("FK_DragonPayID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateFrom: date("DateFrom", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateTo: date("DateTo", { mode: "string" }).default("1000-01-01").notNull(),
    email: varchar("Email", { length: 255 }).default("").notNull(),
    regEmail: varchar("RegEmail", { length: 255 }).default("").notNull(),
    accountNo: varchar("AccountNo", { length: 255 }).default("").notNull(),
    accountName: varchar("AccountName", { length: 255 }).default("").notNull(),
    contactInfo: varchar("ContactInfo", { length: 255 }).default(""),
    avRsvn: smallint("AvRsvn").notNull(),
    zoomUrl: varchar("ZoomURL", { length: 100 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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
    isDeleted: smallint("IsDeleted").notNull(),
});

export const eventsimages = mysqlTable("eventsimages", {
    pkEventsImagesId: bigint("PK_EventsImagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const eventstags = mysqlTable("eventstags", {
    pkEventsTagsId: bigint("PK_EventsTagsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const exhibitoraccounts = mysqlTable(
    "exhibitoraccounts",
    {
        pkExhibitorAccountsId: bigint("PK_ExhibitorAccountsID", {
            mode: "number",
        })
            .autoincrement()
            .notNull(),
        fkExhibitorProfilesId: bigint("FK_ExhibitorProfilesID", {
            mode: "number",
        }).notNull(),
        username: varchar("Username", { length: 100 }).default("").notNull(),
        password: char("Password", { length: 128 }).default("").notNull(),
        salt: char("Salt", { length: 128 }).default("").notNull(),
        fkUserControlId: bigint("FK_UserControlID", {
            mode: "number",
        }).notNull(),
        fkUserControlCode: varchar("FK_UserControlCode", { length: 100 })
            .default("")
            .notNull(),
        akUserAccountsType: mysqlEnum("AK_UserAccountsType", [
            "ADMIN",
            "EXHIBITOR",
        ])
            .default("EXHIBITOR")
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
    },
    (table) => [
        unique("username").on(table.username, table.pkExhibitorAccountsId),
    ]
);

export const exhibitorevents = mysqlTable("exhibitorevents", {
    pkExhibitorEventsId: bigint("PK_ExhibitorEventsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
        mode: "number",
    }).notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    fkPackagesId: bigint("FK_PackagesID", { mode: "number" }).notNull(),
    fkBoothsId: bigint("FK_BoothsID", { mode: "number" }).notNull(),
    noAttendees: bigint("NoAttendees", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    txnType: mysqlEnum("TxnType", ["CASH", "CHECK"]).default("CASH").notNull(),
    status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
    isPaid: smallint("IsPaid").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    ccy: mysqlEnum("CCY", ["PHP"]).default("PHP").notNull(),
    flag: mysqlEnum("Flag", ["Approved", "Pending", "Declined"])
        .default("Pending")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const exhibitorfollowers = mysqlTable("exhibitorfollowers", {
    pkExhibitorFollowersId: bigint("PK_ExhibitorFollowersID", {
        mode: "number",
    })
        .autoincrement()
        .notNull(),
    fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
        mode: "number",
    }).notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    dateLogged: datetime("DateLogged", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const exhibitorimages = mysqlTable("exhibitorimages", {
    pkExhibitorImagesId: bigint("PK_ExhibitorImagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
        mode: "number",
    }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const exhibitorprofiles = mysqlTable("exhibitorprofiles", {
    pkExhibitorProfilesId: bigint("PK_ExhibitorProfilesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    companyName: varchar("CompanyName", { length: 255 }).default("").notNull(),
    address: varchar("Address", { length: 255 }).default("").notNull(),
    fkCitiesId: int("FK_CitiesID").default(0).notNull(),
    state: varchar("State", { length: 100 }).default("").notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    telNo: varchar("TelNo", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    contactPerson: varchar("ContactPerson", { length: 255 })
        .default("")
        .notNull(),
    website: varchar("Website", { length: 255 }).default("").notNull(),
    description: text("Description").notNull(),
    fkProductTypeId: bigint("FK_ProductTypeID", { mode: "number" }).notNull(),
    isVip: smallint("IsVIP").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const fees = mysqlTable("fees", {
    pkFeesId: bigint("PK_FeesID", { mode: "number" }).autoincrement().notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    isCurrentYear: smallint("IsCurrentYear").notNull(),
    chargeOnce: smallint("ChargeOnce").notNull(),
    licenseType: char("LicenseType", { length: 10 }).notNull(),
    memberType: varchar("MemberType", { length: 255 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    effectivityDate: date("EffectivityDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    isCpApproval: smallint("IsCPApproval").notNull(),
    exp: decimal("EXP", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const groupings = mysqlTable("groupings", {
    pkGroupingsId: bigint("PK_GroupingsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const guestaccounts = mysqlTable(
    "guestaccounts",
    {
        pkGuestAccountsId: bigint("PK_GuestAccountsID", { mode: "number" })
            .autoincrement()
            .notNull(),
        username: varchar("Username", { length: 30 }).default("").notNull(),
        password: char("Password", { length: 128 }).default("").notNull(),
        fname: varchar("FName", { length: 100 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        email: varchar("Email", { length: 50 }).default("").notNull(),
        salt: char("Salt", { length: 128 }).default("").notNull(),
        flag: mysqlEnum("Flag", ["Approved", "Pending"])
            .default("Pending")
            .notNull(),
        token: varchar("Token", { length: 32 }).default("").notNull(),
        isMailSent: smallint("IsMailSent").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
        isRestricted: smallint("IsRestricted").notNull(),
        isActive: smallint("IsActive").default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "string" })
            .default("current_timestamp()")
            .notNull(),
    },
    (table) => [unique("username").on(table.username, table.pkGuestAccountsId)]
);

export const licensetype = mysqlTable("licensetype", {
    pkLicenseTypeId: bigint("PK_LicenseTypeID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    seqNo: smallint("SeqNo").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const loginattempts = mysqlTable("loginattempts", {
    pkLoginAttemptsId: bigint("PK_LoginAttemptsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
    machineNo: varchar("MachineNo", { length: 255 }).default("").notNull(),
    privateIp: varchar("PrivateIP", { length: 15 })
        .default("000.000.000.000")
        .notNull(),
    publicIp: varchar("PublicIP", { length: 15 })
        .default("000.000.000.000")
        .notNull(),
    broadcastedIp: varchar("BroadcastedIP", { length: 15 })
        .default("000.000.000.000")
        .notNull(),
    hostname: varchar("Hostname", { length: 100 }).default("").notNull(),
    city: varchar("City", { length: 100 }).default("").notNull(),
    region: varchar("Region", { length: 100 }).default("").notNull(),
    country: varchar("Country", { length: 10 }).default("PH").notNull(),
    loc: varchar("Loc", { length: 100 }).default("").notNull(),
    postal: varchar("Postal", { length: 10 }).default("").notNull(),
    org: varchar("Org", { length: 255 }).default("").notNull(),
    bogon: smallint("Bogon").notNull(),
    akLoginAttemptsStatus: mysqlEnum("AK_LoginAttemptsStatus", [
        "fail",
        "success",
    ])
        .default("fail")
        .notNull(),
    acctType: mysqlEnum("AcctType", ["GENERAL", "EXHIBITOR"])
        .default("GENERAL")
        .notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const members = mysqlTable(
    "members",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        firstName: varchar({ length: 100 }).notNull(),
        middleName: varchar({ length: 100 }).default("NULL"),
        lastName: varchar({ length: 100 }).notNull(),
        suffixName: varchar({ length: 100 }).default("NULL"),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        birthdate: date({ mode: "string" }).default("NULL"),
        gender: varchar({ length: 100 }).default("NULL"),
        maritalStatusId: varchar({ length: 100 }).default("NULL"),
        nationalityId: varchar({ length: 100 }).default("NULL"),
        houseNumber: text().default("NULL"),
        streetName: text().default("NULL"),
        barangay: text().default("NULL"),
        province: text().default("NULL"),
        city: text().default("NULL"),
        zipCode: varchar({ length: 100 }).default("NULL"),
        countryCode: varchar({ length: 2 }).default("PH"),
        mobileNumber: varchar({ length: 100 }).default("NULL"),
        email: varchar({ length: 100 }).default("NULL"),
        password: varchar({ length: 100 }).default("NULL"),
        dateCreated: datetime({ mode: "string" }).notNull(),
        dateUpdated: datetime({ mode: "string" }).default("NULL"),
    },
    (table) => [
        index("firstName").on(table.firstName),
        index("middleName").on(table.middleName),
        index("lastName").on(table.lastName),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ]
);

export const membership = mysqlTable(
    "membership",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        licenseTypeId: varchar({ length: 100 }).default("NULL"),
        licenseNumber: varchar({ length: 100 }).default("NULL"),
        membershipTypeId: varchar({ length: 100 }).default("NULL"),
        membershipNumber: varchar({ length: 100 }).default("NULL"),
        regionId: varchar({ length: 100 }).default("NULL"),
        chapterId: varchar({ length: 100 }).default("NULL"),
        reckey: varchar({ length: 100 }).default("NULL"),
        statusId: varchar({ length: 1 }).default("1"),
        insuranceTypeId: varchar({ length: 1 }).default("1"),
        remarks: text().default("NULL"),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateRegistered: date({ mode: "string" }).default("NULL"),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateExpired: date({ mode: "string" }).default("NULL"),
        dateCreated: datetime({ mode: "string" }).default("NULL"),
        dateUpdated: datetime({ mode: "string" }).default("NULL"),
        cloneDate09142018: datetime({ mode: "string" }).default("NULL"),
    },
    (table) => [
        index("memberNumber_2").on(table.memberNumber),
        index("licenseTypeId").on(table.licenseTypeId),
        index("licenseNumber").on(table.licenseNumber),
        index("membershipNumber").on(table.membershipNumber),
        index("regionId").on(table.regionId),
        index("chapterId").on(table.chapterId),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ]
);

export const membersseries = mysqlTable("membersseries", {
    pkMembersSeriesId: bigint("PK_MembersSeriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    seqNo: smallint("SeqNo").default(1).notNull(),
    prefix: char("Prefix", { length: 2 }).default("RG").notNull(),
    seriesStart: int("SeriesStart").default(0).notNull(),
    seriesEnd: int("SeriesEnd").default(0).notNull(),
    currentNo: int("CurrentNo").default(0).notNull(),
    type: mysqlEnum("Type", [
        "Senior",
        "Regular",
        "Life",
        "Fellow",
        "Auxiliary",
        "Honorary",
    ]),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const members0618 = mysqlTable(
    "members_0618",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        firstName: varchar({ length: 100 }).notNull(),
        middleName: varchar({ length: 100 }).default("NULL"),
        lastName: varchar({ length: 100 }).notNull(),
        suffixName: varchar({ length: 100 }).default("NULL"),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        birthdate: date({ mode: "string" }).default("NULL"),
        gender: varchar({ length: 100 }).default("NULL"),
        maritalStatusId: varchar({ length: 100 }).default("NULL"),
        nationalityId: varchar({ length: 100 }).default("NULL"),
        houseNumber: text().default("NULL"),
        streetName: text().default("NULL"),
        barangay: text().default("NULL"),
        province: text().default("NULL"),
        city: text().default("NULL"),
        zipCode: varchar({ length: 100 }).default("NULL"),
        countryCode: varchar({ length: 2 }).default("PH"),
        mobileNumber: varchar({ length: 100 }).default("NULL"),
        email: varchar({ length: 100 }).default("NULL"),
        password: varchar({ length: 100 }).default("NULL"),
        dateCreated: datetime({ mode: "string" }).notNull(),
        dateUpdated: datetime({ mode: "string" }).default("NULL"),
    },
    (table) => [
        index("firstName").on(table.firstName),
        index("middleName").on(table.middleName),
        index("lastName").on(table.lastName),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ]
);

export const officers = mysqlTable("officers", {
    pkOfficersId: bigint("PK_OfficersID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    position: mysqlEnum("Position", [
        "National",
        "Regional",
        "Chapter",
    ]).notNull(),
    // Warning: Can't parse year(4) from database
    // year(4)Type: year(4)("Term").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const orseries = mysqlTable("orseries", {
    pkOrSeriesId: bigint("PK_ORSeriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkCounterId: bigint("FK_CounterID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    seqNo: smallint("SeqNo").default(1).notNull(),
    seriesStart: int("SeriesStart").default(0).notNull(),
    seriesEnd: int("SeriesEnd").default(0).notNull(),
    currentNo: int("CurrentNo").default(0).notNull(),
    type: mysqlEnum("Type", ["C", "D", "CM", "DM"]).default("C").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const otchistory = mysqlTable(
    "otchistory",
    {
        pkOtcHistoryId: bigint("PK_OTCHistoryID", { mode: "number" })
            .autoincrement()
            .notNull(),
        fkUserRequestsId: bigint("FK_UserRequestsID", {
            mode: "number",
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        txnParams: varchar("TxnParams", { length: 255 }).default("").notNull(),
        txnType: mysqlEnum("TxnType", [
            "CASH",
            "CHECK",
            "OTC",
            "PAYPAL",
            "GARMIN",
        ])
            .default("CASH")
            .notNull(),
        refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
        txnId: varchar("TxnID", { length: 25 }).default("").notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        ccy: mysqlEnum("CCY", ["PHP"]).default("PHP").notNull(),
        email: varchar("Email", { length: 50 }).default("").notNull(),
        status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
        digest: varchar("Digest", { length: 50 }).default("").notNull(),
        envr: smallint("Envr").notNull(),
        isRequest: smallint("IsRequest").notNull(),
        isProcessed: smallint("IsProcessed").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [
        index("requestid").on(table.fkUserRequestsId),
        index("useraccounts").on(table.akUserAccountsId),
        index("txnparams").on(table.txnParams),
    ]
);

export const otchistoryCopy = mysqlTable("otchistory_copy", {
    pkOtcHistoryId: bigint("PK_OTCHistoryID", { mode: "number" }).notNull(),
    fkUserRequestsId: bigint("FK_UserRequestsID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fullName: varchar("FullName", { length: 255 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    txnParams: varchar("TxnParams", { length: 255 }).default("").notNull(),
    txnType: mysqlEnum("TxnType", ["CASH", "CHECK", "OTC", "PAYPAL", "GARMIN"])
        .default("CASH")
        .notNull(),
    refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
    txnId: varchar("TxnID", { length: 25 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    ccy: mysqlEnum("CCY", ["PHP"]).default("PHP").notNull(),
    email: varchar("Email", { length: 50 }).default("").notNull(),
    status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
    digest: varchar("Digest", { length: 50 }).default("").notNull(),
    envr: smallint("Envr").notNull(),
    isRequest: smallint("IsRequest").notNull(),
    isProcessed: smallint("IsProcessed").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const otcresponse = mysqlTable("otcresponse", {
    pkOtcResponseId: bigint("PK_OTCResponseID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    txnType: varchar("TxnType", { length: 50 }).default("").notNull(),
    refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
    txnId: varchar("TxnID", { length: 50 }).default("").notNull(),
    status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
    digest: varchar("Digest", { length: 50 }).default("").notNull(),
    envr: smallint("Envr").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Message").notNull(),
    action: mysqlEnum("Action", ["NEW", "UPDATE"]).default("NEW").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const otcseries = mysqlTable("otcseries", {
    pkOtcSeriesId: bigint("PK_OTCSeriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    seqNo: smallint("SeqNo").default(1).notNull(),
    seriesStart: int("SeriesStart").default(0).notNull(),
    seriesEnd: int("SeriesEnd").default(0).notNull(),
    currentNo: int("CurrentNo").default(0).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const packages = mysqlTable("packages", {
    pkPackagesId: bigint("PK_PackagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Description").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const paymentcopy = mysqlTable("paymentcopy", {
    pkPaymentCopyId: bigint("PK_PaymentCopyID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkPaymentTrailId: bigint("FK_PaymentTrailID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
    payType: smallint("PayType").default(1).notNull(),
    payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
    orSeqNo: smallint("ORSeqNo").notNull(),
    orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orType: varchar("ORType", { length: 25 }).default("").notNull(),
    datePaid: datetime("DatePaid", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    checkDate: date("CheckDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    bankName: varchar("BankName", { length: 50 }).default("").notNull(),
    bankBranch: varchar("BankBranch", { length: 100 }).default("").notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    subTotal: decimal("SubTotal", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    penalty: decimal("Penalty", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    totalDue: decimal("TotalDue", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    amountTendered: decimal("AmountTendered", {
        precision: 10,
        scale: 2,
        unsigned: true,
    })
        .default("0.00")
        .notNull(),
    adjustment: decimal("Adjustment", {
        precision: 10,
        scale: 2,
        unsigned: true,
    })
        .default("0.00")
        .notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const paymententries = mysqlTable("paymententries", {
    pkPaymentEntriesId: bigint("PK_PaymentEntriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkPaymentTrailId: bigint("FK_PaymentTrailID", { mode: "number" }).notNull(),
    code: int("Code").default(0).notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    quantity: int("Quantity").default(1).notNull(),
    perPiece: decimal("PerPiece", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    penalty: decimal("Penalty", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    subTotal: decimal("SubTotal", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const paymenttrail = mysqlTable(
    "paymenttrail",
    {
        pkPaymentTrailId: bigint("PK_PaymentTrailID", { mode: "number" })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
        }).notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
        payType: smallint("PayType").default(1).notNull(),
        payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
        orSeqNo: smallint("ORSeqNo").notNull(),
        orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        orType: varchar("ORType", { length: 25 }).default("").notNull(),
        datePaid: datetime("DatePaid", { mode: "string" })
            .default("1000-01-01 00:00:00")
            .notNull(),
        transactionNo: varchar("TransactionNo", { length: 50 })
            .default("")
            .notNull(),
        checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        checkDate: date("CheckDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        bankName: varchar("BankName", { length: 50 }).default("").notNull(),
        bankBranch: varchar("BankBranch", { length: 100 })
            .default("")
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
        subTotal: decimal("SubTotal", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        penalty: decimal("Penalty", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        totalDue: decimal("TotalDue", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        amountTendered: decimal("AmountTendered", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        adjustment: decimal("Adjustment", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "string" })
            .default("1000-01-01 00:00:00")
            .notNull(),
        isRestricted: smallint("IsRestricted").default(1).notNull(),
        isActive: smallint("IsActive").default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "string" })
            .default("current_timestamp()")
            .notNull(),
    },
    (table) => [index("otchistory").on(table.fkOtcHistoryId)]
);

export const paymenttrailCopy = mysqlTable("paymenttrail_copy", {
    pkPaymentTrailId: bigint("PK_PaymentTrailID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
    payType: smallint("PayType").default(1).notNull(),
    payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
    orSeqNo: smallint("ORSeqNo").notNull(),
    orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orType: varchar("ORType", { length: 25 }).default("").notNull(),
    datePaid: datetime("DatePaid", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    transactionNo: varchar("TransactionNo", { length: 50 })
        .default("")
        .notNull(),
    checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    checkDate: date("CheckDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    bankName: varchar("BankName", { length: 50 }).default("").notNull(),
    bankBranch: varchar("BankBranch", { length: 100 }).default("").notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    subTotal: decimal("SubTotal", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    penalty: decimal("Penalty", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    totalDue: decimal("TotalDue", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    amountTendered: decimal("AmountTendered", {
        precision: 10,
        scale: 2,
        unsigned: true,
    })
        .default("0.00")
        .notNull(),
    adjustment: decimal("Adjustment", {
        precision: 10,
        scale: 2,
        unsigned: true,
    })
        .default("0.00")
        .notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const positions = mysqlTable("positions", {
    pkPositionsId: bigint("PK_PositionsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 25 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    category: mysqlEnum("Category", [
        "officers",
        "governors",
        "presidents",
        "commitee",
    ])
        .default("officers")
        .notNull(),
    seqNo: smallint("SeqNo").notNull(),
    isOccupied: smallint("IsOccupied").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const producttype = mysqlTable("producttype", {
    pkProductTypeId: bigint("PK_ProductTypeID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const providers = mysqlTable("providers", {
    pkProvidersId: bigint("PK_ProvidersID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const provinces = mysqlTable("provinces", {
    pkProvinces: bigint("PK_Provinces", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    code: varchar("Code", { length: 100 }).notNull(),
    description: varchar("Description", { length: 100 }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const regions = mysqlTable("regions", {
    pkRegionsId: int("PK_RegionsID").autoincrement().notNull(),
    fkAreasId: int("FK_AreasID").default(0).notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const reportsqr = mysqlTable("reportsqr", {
    pkReportsQrid: bigint("PK_ReportsQRID", { mode: "number" })
        .autoincrement()
        .notNull(),
    reportNo: varchar("ReportNo", { length: 100 }).default("").notNull(),
    digest: char("Digest", { length: 128 }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Details").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const reportsseries = mysqlTable("reportsseries", {
    pkReportsSeriesId: bigint("PK_ReportsSeriesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    seqNo: smallint("SeqNo").default(1).notNull(),
    seriesStart: int("SeriesStart").default(0).notNull(),
    seriesEnd: int("SeriesEnd").default(0).notNull(),
    currentNo: int("CurrentNo").default(0).notNull(),
    type: mysqlEnum("Type", ["COGS", "EPART"]).default("COGS").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const requests = mysqlTable("requests", {
    pkRequestsId: bigint("PK_RequestsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    requestNo: varchar("RequestNo", { length: 100 }).default("").notNull(),
    digest: char("Digest", { length: 128 }).notNull(),
    category: mysqlEnum("Category", ["Password"]).default("Password").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("Details").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const schools = mysqlTable("schools", {
    pkSchoolsId: bigint("PK_SchoolsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 25 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const seminars = mysqlTable(
    "seminars",
    {
        pkSeminarsId: bigint("PK_SeminarsID", { mode: "number" })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        activity: varchar("Activity", { length: 255 }).default("").notNull(),
        tntvPoints: decimal("TntvPoints", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        cpdPoints: decimal("CPDPoints", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        earlyBirdDate: date("EarlyBirdDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        earlyBird: decimal("EarlyBird", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        nonMember: decimal("NonMember", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        incharge: varchar("Incharge", { length: 100 }).default("").notNull(),
        inchargeDesc: varchar("InchargeDesc", { length: 255 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        slots: int("Slots").default(0).notNull(),
        slotsTaken: int("SlotsTaken").default(0).notNull(),
        fkChaptersId: int("FK_ChaptersID").default(0).notNull(),
        fkProvidersId: int("FK_ProvidersID").default(0).notNull(),
        fkEventsId: int("FK_EventsID").default(0).notNull(),
        fkEventsTagsId: int("FK_EventsTagsID").default(0).notNull(),
        fkCompetenceId: int("FK_CompetenceID").default(0).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateReceived: date("DateReceived", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateForwarded: date("DateForwarded", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateApproved: date("DateApproved", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        prcorNo: varchar("PRCORNo", { length: 25 }).default("").notNull(),
        fkCurrenciesId: int("FK_CurrenciesID").default(83).notNull(),
        isCompulsory: smallint("IsCompulsory").notNull(),
        seqNo: int("SeqNo").default(0).notNull(),
        bypassRegd: smallint("BypassRegd").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [index("eventsid").on(table.fkEventsId)]
);

export const seminarsdetails = mysqlTable("seminarsdetails", {
    pkSeminarsDetailsId: bigint("PK_SeminarsDetailsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkSeminarsId: bigint("FK_SeminarsID", { mode: "number" }).notNull(),
    fkGroupingsId: bigint("FK_GroupingsID", { mode: "number" }).notNull(),
    venue: varchar("Venue", { length: 255 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateFrom: date("DateFrom", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateTo: date("DateTo", { mode: "string" }).default("1000-01-01").notNull(),
    startTime: time("StartTime").default("00:00:00").notNull(),
    endTime: time("EndTime").default("00:00:00").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const seminarssignatory = mysqlTable("seminarssignatory", {
    pkSeminarsSignatoryId: bigint("PK_SeminarsSignatoryID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
        mode: "number",
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    designation: varchar("DESIGNATION", { length: 150 }).default("0").notNull(),
    seqNo: char("SeqNo", { length: 1 }).default("1").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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
    qrcode: varchar({ length: 20 }).default("NULL"),
});

export const seminarssummary = mysqlTable(
    "seminarssummary",
    {
        pkSeminarsSummaryId: bigint("PK_SeminarsSummaryID", { mode: "number" })
            .autoincrement()
            .notNull(),
        fkSeminarsId: bigint("FK_SeminarsID", { mode: "number" }).notNull(),
        fkSeminarsDetailsId: bigint("FK_SeminarsDetailsID", {
            mode: "number",
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        activity: varchar("Activity", { length: 255 }).default("").notNull(),
        tntvPoints: decimal("TntvPoints", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        cpdPoints: decimal("CPDPoints", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        earlyBirdDate: date("EarlyBirdDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        earlyBird: decimal("EarlyBird", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        nonMember: decimal("NonMember", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        incharge: varchar("Incharge", { length: 100 }).default("").notNull(),
        inchargeDesc: varchar("InchargeDesc", { length: 255 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        slots: int("Slots").default(0).notNull(),
        slotsTaken: int("SlotsTaken").default(0).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
        fkProvidersId: bigint("FK_ProvidersID", { mode: "number" }).notNull(),
        fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
        eventsCode: varchar("EventsCode", { length: 100 })
            .default("")
            .notNull(),
        eventsDesc: varchar("EventsDesc", { length: 255 })
            .default("")
            .notNull(),
        eventsAmnt: decimal("EventsAmnt", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        eventsDateFrom: date("EventsDateFrom", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        eventsDateTo: date("EventsDateTo", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        fkDragonPayId: bigint("FK_DragonPayID", { mode: "number" }).notNull(),
        fkEventsTagsId: bigint("FK_EventsTagsID", { mode: "number" }).notNull(),
        fkCompetenceId: bigint("FK_CompetenceID", { mode: "number" }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateReceived: date("DateReceived", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateForwarded: date("DateForwarded", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateApproved: date("DateApproved", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        prcorNo: varchar("PRCORNo", { length: 25 }).default("").notNull(),
        fkCurrenciesId: int("FK_CurrenciesID").default(83).notNull(),
        isCompulsory: smallint("IsCompulsory").notNull(),
        seqNo: int("SeqNo").default(0).notNull(),
        bypassRegd: smallint("BypassRegd").notNull(),
        fkGroupingsId: bigint("FK_GroupingsID", { mode: "number" }).notNull(),
        venue: varchar("Venue", { length: 255 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateFrom: date("DateFrom", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateTo: date("DateTo", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        startTime: time("StartTime").default("00:00:00").notNull(),
        endTime: time("EndTime").default("00:00:00").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [index("eventsid").on(table.fkEventsId)]
);

export const shippingtypes = mysqlTable("shippingtypes", {
    pkShippingTypesId: bigint("PK_ShippingTypesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    isCurrentYear: smallint("IsCurrentYear").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const specialization = mysqlTable("specialization", {
    pkSpecializationId: bigint("PK_SpecializationID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 50 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    seqNo: smallint("SeqNo").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const sqlmapfile = mysqlTable("sqlmapfile", {
    // Warning: Can't parse longblob from database
    // longblobType: longblob("data"),
});

export const sqlmapoutput = mysqlTable("sqlmapoutput", {
    data: longtext().default("NULL"),
});

export const txnvenue = mysqlTable("txnvenue", {
    pkTxnVenueId: bigint("PK_TxnVenueID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 25 }).default("").notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    address: varchar("Address", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const useraccounts = mysqlTable(
    "useraccounts",
    {
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
    },
    (table) => [
        index("email").on(table.email),
        index("id").on(table.fkUserProfilesId),
        index("emailsent").on(table.isMailSent),
        unique("username").on(table.username, table.pkUserAccountsId),
    ]
);

export const useraccounts111822 = mysqlTable("useraccounts_111822", {
    pkUserAccountsId: bigint("PK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", { mode: "number" }).notNull(),
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
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const useraccountsCopy = mysqlTable("useraccounts_copy", {
    pkUserAccountsId: bigint("PK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", { mode: "number" }).notNull(),
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
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const useraccountsCopy040421 = mysqlTable("useraccounts_copy040421", {
    pkUserAccountsId: bigint("PK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", { mode: "number" }).notNull(),
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
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const userattendance = mysqlTable(
    "userattendance",
    {
        pkUserAttendanceId: bigint("PK_UserAttendanceID", { mode: "number" })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
            mode: "number",
        }).notNull(),
        tag: mysqlEnum("Tag", ["IN", "OUT"]).default("IN").notNull(),
        dateLogged: datetime("DateLogged", { mode: "string" })
            .default("1000-01-01 00:00:00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
        ltype: varchar({ length: 150 }).notNull(),
        email: varchar({ length: 150 }).notNull(),
        name: varchar({ length: 255 }).notNull(),
        prcno: varchar({ length: 15 }).notNull(),
        company: varchar({ length: 150 }).notNull(),
        editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "string" })
            .default("1000-01-01 00:00:00")
            .notNull(),
        isRestricted: smallint("IsRestricted").notNull(),
        isActive: smallint("IsActive").default(1).notNull(),
        stamp: varchar("Stamp", { length: 50 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "string" })
            .default("current_timestamp()")
            .notNull(),
    },
    (table) => [
        index("prcno").on(table.prcno),
        index("ltype").on(table.ltype),
        index("email").on(table.email),
        index("useraccounts").on(table.akUserAccountsId),
        index("seminar").on(table.akUserAccountsId, table.fkSeminarsSummaryId),
    ]
);

export const usercertificates = mysqlTable("usercertificates", {
    pkUserCertificatesId: bigint("PK_UserCertificatesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    certType: varchar("CertType", { length: 100 }).default("").notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const userchangechapter = mysqlTable("userchangechapter", {
    pkUserChangeChapterId: bigint("PK_UserChangeChapterID", { mode: "number" })
        .autoincrement()
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    currRegion: varchar("CurrRegion", { length: 100 }).default("0").notNull(),
    currChapter: varchar("CurrChapter", { length: 100 }).default("0").notNull(),
    region: varchar("Region", { length: 100 }).default("0").notNull(),
    chapter: varchar("Chapter", { length: 100 }).default("0").notNull(),
    reason: varchar("Reason", { length: 255 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    isApproved: smallint("IsApproved").notNull(),
    status: mysqlEnum("Status", [
        "Pending",
        "Approved",
        "Declined",
        "On Process",
    ])
        .default("Pending")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const userchangechapteratch = mysqlTable("userchangechapteratch", {
    pkUserChangeChapterAtchId: bigint("PK_UserChangeChapterAtchID", {
        mode: "number",
    })
        .autoincrement()
        .notNull(),
    fkUserChangeChapterId: bigint("FK_UserChangeChapterID", {
        mode: "number",
    }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const usercontrol = mysqlTable("usercontrol", {
    pkUserControlId: bigint("PK_UserControlID", { mode: "number" })
        .autoincrement()
        .notNull(),
    code: varchar("Code", { length: 100 }).default("").notNull(),
    isChapter: smallint("IsChapter").notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    isDefault: smallint("IsDefault").notNull(),
    isExclusive: smallint("IsExclusive").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("FK_UserModulesID").notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("FK_PermissionsID").notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    fkUsersAccountsId: bigint("FK_UsersAccountsID", {
        mode: "number",
    }).notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const usereducation = mysqlTable("usereducation", {
    pkUserEducationId: bigint("PK_UserEducationID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    school: varchar("School", { length: 255 }).default("").notNull(),
    degree: varchar("Degree", { length: 255 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dateGraduated: date("DateGraduated", { mode: "string" }).notNull(),
    awards: varchar("Awards", { length: 255 }).default("").notNull(),
    level: varchar("Level", { length: 10 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const useremails = mysqlTable(
    "useremails",
    {
        pkUserEmailsId: bigint("PK_UserEmailsID", { mode: "number" })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fkElectionId: bigint("FK_ElectionID", { mode: "number" }).notNull(),
        fkEmailAuthId: bigint("FK_EmailAuthID", { mode: "number" }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [
        index("email").on(table.fkEmailAuthId),
        index("user").on(table.akUserAccountsId),
        index("emails").on(table.pkUserEmailsId),
        index("elect").on(table.fkElectionId),
    ]
);

export const userexpertise = mysqlTable("userexpertise", {
    pkUserExpertiseId: bigint("PK_UserExpertiseID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    expertise: varchar("Expertise", { length: 255 }).default("").notNull(),
    years: varchar("Years", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" }).notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const userfees = mysqlTable("userfees", {
    pkUserFeesId: bigint("PK_UserFeesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkFeesId: bigint("FK_FeesID", { mode: "number" }).notNull(),
    isPaid: smallint("IsPaid").notNull(),
    status: mysqlEnum("Status", ["P", "F", "S"]).default("P").notNull(),
    valFrom: datetime("ValFrom", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    valTo: datetime("ValTo", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const userimages = mysqlTable("userimages", {
    pkUserImagesId: bigint("PK_UserImagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    category: mysqlEnum("Category", ["Profile", "Senior", "PWD"])
        .default("Profile")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const userimagesCopy = mysqlTable("userimages_copy", {
    pkUserImagesId: bigint("PK_UserImagesID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    category: mysqlEnum("Category", ["Profile", "Senior", "PWD"])
        .default("Profile")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const userlicense = mysqlTable(
    "userlicense",
    {
        pkUserLicenseId: bigint("PK_UserLicenseID", { mode: "number" })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
        }).notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", { mode: "number" })
            .default(1)
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        registrationDate: date("RegistrationDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        validityDate: date("ValidityDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        licenseType: mysqlEnum("LicenseType", ["RME", "REE", "PEE", "BSEE"])
            .default("BSEE")
            .notNull(),
        licenseNo: varchar("LicenseNo", { length: 100 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        fname: varchar("Fname", { length: 100 }).default("").notNull(),
        mname: varchar("MName", { length: 100 }).default("").notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        isMainId: smallint("IsMainID").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [
        index("profileid").on(table.fkUserProfilesId),
        index("lictype").on(table.fkLicenseTypeId),
        index("UserProfileiid").on(table.fkUserProfilesId),
        index("ltype").on(table.fkLicenseTypeId),
    ]
);

export const userlicenseCopy = mysqlTable("userlicense_copy", {
    pkUserLicenseId: bigint("PK_UserLicenseID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    licenseType: mysqlEnum("LicenseType", [
        "RME",
        "REE",
        "PEE",
        "BSEE",
    ]).notNull(),
    licenseNo: varchar("LicenseNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    registrationDate: date("RegistrationDate", { mode: "string" }).notNull(),
    lname: varchar({ length: 100 }).notNull(),
    fname: varchar({ length: 150 }).notNull(),
    mname: varchar({ length: 100 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    validityDate: date("ValidityDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    fileLocation: varchar("FileLocation", { length: 255 })
        .default("")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const usermodules = mysqlTable("usermodules", {
    pkUserModulesId: bigint("PK_UserModulesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    modulesGrp: int("ModulesGrp").default(0).notNull(),
    fkUserModulesId: int("FK_UserModulesID").default(0).notNull(),
    description: varchar("Description", { length: 50 }).default("").notNull(),
    abbreviation: varchar("Abbreviation", { length: 15 }).default("").notNull(),
    link: varchar("Link", { length: 50 }).default("").notNull(),
    icon: varchar("Icon", { length: 25 }).default("").notNull(),
    seqNo: int("SeqNo").default(0).notNull(),
    seqNoGrp: int("SeqNoGrp").default(0).notNull(),
    akUserModulesType: mysqlEnum("AK_UserModulesType", [
        "heading",
        "link",
        "separator",
    ])
        .default("link")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const userpositions = mysqlTable("userpositions", {
    pkUserPositionsId: bigint("PK_UserPositionsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    fkPositionsId: bigint("FK_PositionsID", { mode: "number" }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", { mode: "number" }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", { mode: "number" }).notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
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

export const userprofiles = mysqlTable(
    "userprofiles",
    {
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
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        bdate: date("BDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        bplace: varchar("BPlace", { length: 100 }).default("").notNull(),
        gender: mysqlEnum("Gender", ["Male", "Female"])
            .default("Male")
            .notNull(),
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
        designation: varchar("Designation", { length: 100 })
            .default("")
            .notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Practice"),
        profession: varchar("Profession", { length: 255 })
            .default("")
            .notNull(),
        company: varchar("Company", { length: 255 }).default("").notNull(),
        companyAddr: varchar("CompanyAddr", { length: 255 })
            .default("")
            .notNull(),
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
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcDateIssued: date("PRCDateIssued", { mode: "string" })
            .default("1000-01-01")
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
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateReg: date("MembershipDateReg", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcRegDate: date("PRCRegDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcExpDate: date("PRCExpDate", { mode: "string" })
            .default("1000-01-01")
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
    },
    (table) => [
        index("id").on(table.pkUserProfilesId),
        index("qrcode").on(table.qrCode),
        index("email").on(table.email),
        index("prcno").on(table.prcNo),
        index("ltype").on(table.fkLicenseTypeId),
        index("chapter").on(table.chapter),
        index("useraccunt").on(table.fkUserAccountsId),
    ]
);

export const userprofiles090723 = mysqlTable(
    "userprofiles_090723",
    {
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
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        bdate: date("BDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        bplace: varchar("BPlace", { length: 100 }).default("").notNull(),
        gender: mysqlEnum("Gender", ["Male", "Female"])
            .default("Male")
            .notNull(),
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
        designation: varchar("Designation", { length: 100 })
            .default("")
            .notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Practice"),
        profession: varchar("Profession", { length: 255 })
            .default("")
            .notNull(),
        company: varchar("Company", { length: 255 }).default("").notNull(),
        companyAddr: varchar("CompanyAddr", { length: 255 })
            .default("")
            .notNull(),
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
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcDateIssued: date("PRCDateIssued", { mode: "string" })
            .default("1000-01-01")
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
        ])
            .default("Regular")
            .notNull(),
        insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
            .default("Not Available")
            .notNull(),
        membershipNo: varchar("MembershipNo", { length: 50 })
            .default("0")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateReg: date("MembershipDateReg", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcRegDate: date("PRCRegDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcExpDate: date("PRCExpDate", { mode: "string" })
            .default("1000-01-01")
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
    },
    (table) => [
        index("id").on(table.pkUserProfilesId),
        index("qrcode").on(table.qrCode),
        index("email").on(table.email),
        index("prcno").on(table.prcNo),
        index("ltype").on(table.fkLicenseTypeId),
        index("chapter").on(table.chapter),
        index("useraccunt").on(table.fkUserAccountsId),
    ]
);

export const userprofiles111822 = mysqlTable("userprofiles_111822", {
    pkUserProfilesId: bigint("PK_UserProfilesID", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    bdate: date("BDate", { mode: "string" }).default("1000-01-01").notNull(),
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
    fkProvincesIdM: bigint("FK_ProvincesID_M", { mode: "number" }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "string" })
        .default("1000-01-01")
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
    ])
        .default("Regular")
        .notNull(),
    insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
        .default("Not Available")
        .notNull(),
    membershipNo: varchar("MembershipNo", { length: 50 })
        .default("0")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateReg: date("MembershipDateReg", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", { mode: "number" }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "string" })
        .default("1000-01-01")
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
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const userprofiles112824 = mysqlTable("userprofiles_112824", {
    pkUserProfilesId: bigint("PK_UserProfilesID", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    bdate: date("BDate", { mode: "string" }).default("1000-01-01").notNull(),
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
    fkProvincesIdM: bigint("FK_ProvincesID_M", { mode: "number" }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "string" })
        .default("1000-01-01")
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
    ])
        .default("Regular")
        .notNull(),
    insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
        .default("Not Available")
        .notNull(),
    membershipNo: varchar("MembershipNo", { length: 50 })
        .default("0")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateReg: date("MembershipDateReg", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", { mode: "number" }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "string" })
        .default("1000-01-01")
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
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const userprofilesCopy = mysqlTable("userprofiles_copy", {
    pkUserProfilesId: bigint("PK_UserProfilesID", { mode: "number" }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("Pending")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", { mode: "number" }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    bdate: date("BDate", { mode: "string" }).default("1000-01-01").notNull(),
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
    fkProvincesIdM: bigint("FK_ProvincesID_M", { mode: "number" }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "string" })
        .default("1000-01-01")
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
    ])
        .default("Regular")
        .notNull(),
    insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
        .default("Not Available")
        .notNull(),
    membershipNo: varchar("MembershipNo", { length: 50 })
        .default("0")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateReg: date("MembershipDateReg", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", { mode: "number" }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "string" })
        .default("1000-01-01")
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
    isKit: smallint("IsKIT").notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const userprofilesCopy0728 = mysqlTable("userprofiles_copy0728", {
    pkUserProfilesId: bigint("PK_UserProfilesID", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    bdate: date("BDate", { mode: "string" }).default("1000-01-01").notNull(),
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
    fkProvincesIdM: bigint("FK_ProvincesID_M", { mode: "number" }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", { mode: "number" }).notNull(),
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "string" })
        .default("1000-01-01")
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
    ])
        .default("Regular")
        .notNull(),
    insuranceType: mysqlEnum("InsuranceType", ["Insured", "Not Available"])
        .default("Not Available")
        .notNull(),
    membershipNo: varchar("MembershipNo", { length: 50 })
        .default("0")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateReg: date("MembershipDateReg", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", { mode: "number" }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", { mode: "number" }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "string" })
        .default("1000-01-01")
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "string" })
        .default("1000-01-01")
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
    isKit: smallint("IsKIT").notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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

export const userrequests = mysqlTable(
    "userrequests",
    {
        pkUserRequestsId: bigint("PK_UserRequestsID", { mode: "number" })
            .autoincrement()
            .notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        fkFeesId: bigint("FK_FeesID", { mode: "number" }).notNull(),
        hasCpdCert: smallint("HasCPDCert").notNull(),
        fkShippingTypesId: bigint("FK_ShippingTypesID", {
            mode: "number",
        }).notNull(),
        encodedName: varchar("EncodedName", { length: 255 })
            .default("")
            .notNull(),
        amountDue: decimal("AmountDue", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        cpApproval: mysqlEnum("CPApproval", [
            "Approved",
            "Denied",
            "Pending",
            "Not Required",
        ])
            .default("Pending")
            .notNull(),
        status: mysqlEnum("Status", [
            "Pending",
            "On Process",
            "For Payment",
            "Paid",
            "For Printing",
            "For Delivery",
            "Delivered",
        ])
            .default("Pending")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        transactionStatus: smallint("TransactionStatus").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [
        index("otchistory").on(table.fkOtcHistoryId),
        index("accountid").on(table.akUserAccountsId),
        index("name").on(table.fullName),
        index("feeid").on(table.fkFeesId),
    ]
);

export const userrequestsatch = mysqlTable("userrequestsatch", {
    pkUserRequestsAtchId: bigint("PK_UserRequestsAtchID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserRequestsId: bigint("FK_UserRequestsID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const userrequeststrail = mysqlTable(
    "userrequeststrail",
    {
        pkUserRequestsTrailId: bigint("PK_UserRequestsTrailID", {
            mode: "number",
        })
            .autoincrement()
            .notNull(),
        fkUserRequestsId: bigint("FK_UserRequestsID", {
            mode: "number",
        }).notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", { mode: "number" }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        fkFeesId: bigint("FK_FeesID", { mode: "number" }).notNull(),
        hasCpdCert: smallint("HasCPDCert").notNull(),
        fkShippingTypesId: bigint("FK_ShippingTypesID", {
            mode: "number",
        }).notNull(),
        encodedName: varchar("EncodedName", { length: 255 })
            .default("")
            .notNull(),
        amountDue: decimal("AmountDue", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        cpApproval: mysqlEnum("CPApproval", [
            "Approved",
            "Denied",
            "Pending",
            "Not Required",
        ])
            .default("Pending")
            .notNull(),
        status: mysqlEnum("Status", [
            "Pending",
            "On Process",
            "For Payment",
            "For Delivery",
            "Delivered",
            "For Printing",
            "Paid",
        ])
            .default("Pending")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "string" })
            .default("1000-01-01")
            .notNull(),
        transactionStatus: smallint("TransactionStatus").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
            .default(1)
            .notNull(),
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
    },
    (table) => [
        index("userrequestsid").on(table.fkUserRequestsId),
        index("otchistory").on(table.fkOtcHistoryId),
        index("requestsid").on(table.fkUserRequestsId),
        index("history").on(table.fkOtcHistoryId),
    ]
);

export const userseminars = mysqlTable("userseminars", {
    pkUserSeminarsId: bigint("PK_UserSeminarsID", { mode: "number" })
        .autoincrement()
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
        mode: "number",
    }).notNull(),
    isPaid: smallint("IsPaid").notNull(),
    isVip: smallint("IsVip").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 50 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
    qrcode: varchar({ length: 30 }).notNull(),
});

export const usersignatures = mysqlTable("usersignatures", {
    pkUserImagesId: bigint("PK_UserImagesID", { mode: "number" })
        .autoincrement()
        .notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number" }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").default(1).notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
});

export const vip = mysqlTable("vip", {
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", { mode: "number" }).notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    position: varchar("POSITION", { length: 100 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number" }).notNull(),
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
export const viewOtcDetails = mysqlView("view_otc_details", {
    pkOtcHistoryId: bigint("PK_OTCHistoryID", { mode: "number" }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fullName: varchar("FullName", { length: 255 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "string" }).default("1000-01-01").notNull(),
    txnParams: varchar("TxnParams", { length: 255 }).default("").notNull(),
    txnType: mysqlEnum("TxnType", ["CASH", "CHECK", "OTC", "PAYPAL", "GARMIN"])
        .default("CASH")
        .notNull(),
    refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
    txnId: varchar("TxnID", { length: 25 }).default("").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
        .default("0.00")
        .notNull(),
    description: varchar("Description", { length: 255 }).default("").notNull(),
    ccy: mysqlEnum("CCY", ["PHP"]).default("PHP").notNull(),
    email: varchar("Email", { length: 50 }).default("").notNull(),
    status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
    digest: varchar("Digest", { length: 50 }).default("").notNull(),
    envr: smallint("Envr").notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("1000-01-01 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("current_timestamp()")
        .notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select \`c\`.\`PK_OTCHistoryID\` AS \`PK_OTCHistoryID\`,\`c\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,\`c\`.\`FullName\` AS \`FullName\`,\`c\`.\`ORNo\` AS \`ORNo\`,\`c\`.\`ORDate\` AS \`ORDate\`,\`c\`.\`TxnParams\` AS \`TxnParams\`,\`c\`.\`TxnType\` AS \`TxnType\`,\`c\`.\`RefNo\` AS \`RefNo\`,\`c\`.\`TxnID\` AS \`TxnID\`,\`c\`.\`Amount\` AS \`Amount\`,\`c\`.\`Description\` AS \`Description\`,\`c\`.\`CCY\` AS \`CCY\`,\`c\`.\`Email\` AS \`Email\`,\`c\`.\`Status\` AS \`Status\`,\`c\`.\`Digest\` AS \`Digest\`,\`c\`.\`Envr\` AS \`Envr\`,\`c\`.\`EditedWhen\` AS \`EditedWhen\`,\`c\`.\`IsRestricted\` AS \`IsRestricted\`,\`c\`.\`IsActive\` AS \`IsActive\`,\`c\`.\`Stamp\` AS \`Stamp\`,\`c\`.\`Timestamp\` AS \`Timestamp\` from \`events-ci\`.\`otchistory\` \`c\``
    );

export const viewOtcHistory = mysqlView("view_otc_history", {
    lastInsertedId: decimal("LastInsertedID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    chapter: varchar("Chapter", { length: 100 }).default("").notNull(),
    pkOtcHistoryId: decimal("PK_OTCHistoryID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    fullName: varchar("FullName", { length: 303 }).default("NULL"),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orDate: varchar("ORDate", { length: 10 }).default("").notNull(),
    txnParams: mediumtext("TxnParams").default("NULL"),
    fkEventsId: decimal("FK_EventsID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    txnType: varchar("TxnType", { length: 6 }).default("").notNull(),
    refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
    txnId: varchar("TxnID", { length: 25 }).default("").notNull(),
    amount: decimal("Amount", { precision: 32, scale: 2 }).default("NULL"),
    description: text("Description").default("NULL"),
    ccy: varchar("CCY", { length: 3 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    status: varchar("Status", { length: 1 }).default("").notNull(),
    digest: varchar("Digest", { length: 50 }).default("").notNull(),
    envr: varchar("Envr", { length: 5 }).default("").notNull(),
    editedWhen: datetime("EditedWhen", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isRestricted: smallint("IsRestricted").notNull(),
    isActive: smallint("IsActive").default(1).notNull(),
    stamp: varchar("Stamp", { length: 17 }).default("NULL"),
    timestamp: timestamp("Timestamp", { mode: "string" })
        .default("0000-00-00 00:00:00")
        .notNull(),
    isVip: smallint("IsVIP").notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select ifnull(\`vol\`.\`LastInsertedID\`,0) AS \`LastInsertedID\`,\`up\`.\`PRCNo\` AS \`PRCNo\`,\`up\`.\`Chapter\` AS \`Chapter\`,ifnull(\`vol\`.\`LastInsertedID\`,0) AS \`PK_OTCHistoryID\`,\`us\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,concat(trim(\`up\`.\`LName\`),', ',trim(\`up\`.\`FName\`),' ',trim(\`up\`.\`MName\`)) AS \`FullName\`,ifnull(\`vod\`.\`ORNo\`,'') AS \`ORNo\`,ifnull(\`vod\`.\`ORDate\`,'') AS \`ORDate\`,group_concat(\`us\`.\`FK_SeminarsSummaryID\` order by \`us\`.\`FK_SeminarsSummaryID\` ASC separator ',') AS \`TxnParams\`,ifnull(\`ss\`.\`FK_EventsID\`,0) AS \`FK_EventsID\`,ifnull(\`vod\`.\`TxnType\`,'CASH') AS \`TxnType\`,ifnull(\`vod\`.\`RefNo\`,'') AS \`RefNo\`,ifnull(\`vod\`.\`TxnID\`,'') AS \`TxnID\`,ifnull(\`vod\`.\`Amount\`,sum(\`ss\`.\`Amount\`)) AS \`Amount\`,ifnull(\`vod\`.\`Description\`,concat('CASH - ',\`up\`.\`PRCNo\`,' - ',trim(\`up\`.\`LName\`),', ',trim(\`up\`.\`FName\`),' ',trim(\`up\`.\`MName\`),' - ',ifnull(\`c\`.\`Description\`,''))) AS \`Description\`,ifnull(\`vod\`.\`CCY\`,'PHP') AS \`CCY\`,\`ua\`.\`Email\` AS \`Email\`,ifnull(\`vod\`.\`Status\`,'P') AS \`Status\`,ifnull(\`vod\`.\`Digest\`,'0') AS \`Digest\`,ifnull(\`vod\`.\`Envr\`,'1') AS \`Envr\`,ifnull(\`vod\`.\`EditedWhen\`,current_timestamp()) AS \`EditedWhen\`,\`us\`.\`IsRestricted\` AS \`IsRestricted\`,\`us\`.\`IsActive\` AS \`IsActive\`,ifnull(\`vod\`.\`Stamp\`,unix_timestamp()) AS \`Stamp\`,ifnull(\`vod\`.\`Timestamp\`,current_timestamp()) AS \`Timestamp\`,\`up\`.\`IsVIP\` AS \`IsVIP\` from (((((((\`events-ci\`.\`userseminars\` \`us\` join \`events-ci\`.\`seminarssummary\` \`ss\` on(\`ss\`.\`PK_SeminarsSummaryID\` = \`us\`.\`FK_SeminarsSummaryID\`)) left join \`events-ci\`.\`view_otc_lastinsertedid\` \`vol\` on(\`vol\`.\`AK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\` and \`vol\`.\`FK_EventsID\` = ifnull(\`ss\`.\`FK_EventsID\`,0))) left join \`events-ci\`.\`view_otc_details\` \`vod\` on(\`vod\`.\`AK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\` and \`vod\`.\`PK_OTCHistoryID\` = \`vol\`.\`LastInsertedID\`)) left join \`events-ci\`.\`events\` \`ev\` on(\`ev\`.\`PK_EventsID\` = \`ss\`.\`FK_EventsID\` and \`ev\`.\`IsActive\` = 1)) join \`events-ci\`.\`useraccounts\` \`ua\` on(\`ua\`.\`PK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\`)) join \`events-ci\`.\`userprofiles\` \`up\` on(\`up\`.\`PK_UserProfilesID\` = \`ua\`.\`FK_UserProfilesID\`)) left join \`events-ci\`.\`chapters\` \`c\` on(\`c\`.\`PK_ChaptersID\` = \`up\`.\`Chapter\`)) where \`ev\`.\`IsActive\` = '1' group by \`vol\`.\`LastInsertedID\`,\`up\`.\`PRCNo\`,\`up\`.\`Chapter\`,\`us\`.\`AK_UserAccountsID\`,\`up\`.\`LName\`,\`up\`.\`FName\`,\`up\`.\`MName\`,\`ss\`.\`FK_EventsID\`,\`ua\`.\`Email\`,\`us\`.\`IsRestricted\`,\`us\`.\`IsActive\`,\`up\`.\`IsVIP\``
    );

export const viewOtcLastinsertedid = mysqlView("view_otc_lastinsertedid", {
    akUserAccountsId: bigint("AK_UserAccountsID", { mode: "number" }).notNull(),
    lastInsertedId: bigint("LastInsertedID", { mode: "number" }),
    fkEventsId: decimal("FK_EventsID", { precision: 11, scale: 0 })
        .default("0")
        .notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select \`oh\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,max(\`oh\`.\`PK_OTCHistoryID\`) AS \`LastInsertedID\`,ifnull((select \`s\`.\`FK_EventsID\` from \`events-ci\`.\`seminars\` \`s\` where find_in_set(\`s\`.\`PK_SeminarsID\`,\`oh\`.\`TxnParams\`) limit 1),0) AS \`FK_EventsID\` from \`events-ci\`.\`otchistory\` \`oh\` where ifnull(\`oh\`.\`TxnParams\`,'') <> '' group by \`oh\`.\`AK_UserAccountsID\`,ifnull((select \`s\`.\`FK_EventsID\` from \`events-ci\`.\`seminars\` \`s\` where find_in_set(\`s\`.\`PK_SeminarsID\`,\`oh\`.\`TxnParams\`) limit 1),0)`
    );
