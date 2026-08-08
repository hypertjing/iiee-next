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
    mysqlEnum,
    mysqlTable,
    mysqlView,
    primaryKey,
    serial,
    smallint,
    text,
    time,
    timestamp,
    unique,
    varchar,
    year,
} from "drizzle-orm/mysql-core";

// export const "0012024NationalElection" = mysqlTable("001_2024_NATIONAL_ELECTION", {
// 	pkTmpId: bigint("PK_TmpID", { mode: "number", unsigned: true }).autoincrement().notNull(),
// 	fkEmailAuthId: bigint("FK_EmailAuthID", { mode: "number", unsigned: true }).notNull(),
// 	tokenUsed: varchar("TokenUsed", { length: 32 }).default('').notNull(),
// 	sentTo: varchar("SentTo", { length: 100 }).default('').notNull(),
// 	votes: varchar("Votes", { length: 255 }).default('').notNull(),
// 	fkUserAccountsId: bigint("FK_UserAccountsID", { mode: "number", unsigned: true }).notNull(),
// 	isRestricted: smallint("IsRestricted", { unsigned: true }).default(1).notNull(),
// 	isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
// 	stamp: varchar("Stamp", { length: 10 }).default('').notNull(),
// 	timestamp: timestamp("Timestamp", { mode: 'string' }).defaultNow().notNull(),
// },
// (table) => [
// 	primaryKey({ columns: [table.pkTmpId], name: "001_2024_NATIONAL_ELECTION_PK_TmpID"}),
// ]);

export const accessGroups = mysqlTable(
    "AccessGroups",
    {
        pkAccessGroupsId: bigint("PK_AccessGroupsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("FK_ModulesID").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("FK_PermissionsID").notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        fkUsersAccountsId: bigint("FK_UsersAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkAccessGroupsId],
            name: "AccessGroups_PK_AccessGroupsID",
        }),
    ],
);

export const areas = mysqlTable(
    "Areas",
    {
        pkAreasId: int("PK_AreasID", { unsigned: true })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.pkAreasId], name: "Areas_PK_AreasID" }),
    ],
);

export const audittrails = mysqlTable(
    "Audittrails",
    {
        id: int("ID").autoincrement().notNull(),
        query: longtext("QUERY"),
        loggedAt: timestamp("LOGGED_AT", { mode: "date" })
            .defaultNow()
            .onUpdateNow()
            .notNull(),
        user: varchar("User", { length: 255 }),
    },
    (table) => [primaryKey({ columns: [table.id], name: "Audittrails_ID" })],
);

export const ballots = mysqlTable(
    "Ballots",
    {
        pkBallotsId: bigint("PK_BallotsID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        name: varchar("Name", { length: 100 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkBallotsId],
            name: "Ballots_PK_BallotsID",
        }),
    ],
);

export const booths = mysqlTable(
    "Booths",
    {
        pkBoothsId: bigint("PK_BoothsID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkVenuesId: bigint("FK_VenuesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkPackageId: bigint("FK_PackageID", { mode: "number" }).notNull(),
        boothNo: varchar("BoothNo", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        size: varchar("Size", { length: 100 }).default("").notNull(),
        amount: int("Amount").default(0).notNull(),
        abscissa: smallint("Abscissa").notNull(),
        ordinate: smallint("Ordinate").notNull(),
        fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
            mode: "number",
        }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateReserved: date("DateReserved", { mode: "date" })
            .default(new Date("0000-00-00"))
            .notNull(),
        daysValid: int("DaysValid").default(0).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        datePaid: date("DatePaid", { mode: "date" })
            .default(new Date("0000-00-00"))
            .notNull(),
        status: mysqlEnum("Status", [
            "NoReservation",
            "Reserved",
            "Extended",
            "Approved",
        ])
            .default("NoReservation")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.pkBoothsId], name: "Booths_PK_BoothsID" }),
    ],
);

export const candidates = mysqlTable(
    "Candidates",
    {
        pkCandidatesId: bigint("PK_CandidatesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkElectionPositionsId: bigint("FK_ElectionPositionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserImagesId: bigint("FK_UserImagesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        image: varchar("Image", { length: 100 }).default("").notNull(),
        name: varchar("Name", { length: 255 }).default("").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Description").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Remarks").notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkRegionsId: bigint("FK_RegionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isWinner: smallint("IsWinner", { unsigned: true }).notNull(),
        isElected: smallint("IsElected", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkCandidatesId],
            name: "Candidates_PK_CandidatesID",
        }),
    ],
);

export const chapters = mysqlTable(
    "Chapters",
    {
        pkChaptersId: int("PK_ChaptersID", { unsigned: true })
            .autoincrement()
            .notNull(),
        fkRegionsId: int("FK_RegionsID", { unsigned: true })
            .default(0)
            .notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkChaptersId],
            name: "Chapters_PK_ChaptersID",
        }),
    ],
);

export const chaptersCopy = mysqlTable(
    "Chapters_copy",
    {
        pkChaptersId: int("PK_ChaptersID", { unsigned: true })
            .autoincrement()
            .notNull(),
        fkRegionsId: int("FK_RegionsID", { unsigned: true })
            .default(0)
            .notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkChaptersId],
            name: "Chapters_copy_PK_ChaptersID",
        }),
    ],
);

export const charges = mysqlTable(
    "Charges",
    {
        pkChargesId: bigint("PK_ChargesID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkSeminarsId: bigint("FK_SeminarsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkChargesId],
            name: "Charges_PK_ChargesID",
        }),
    ],
);

export const cities = mysqlTable(
    "Cities",
    {
        pkCitiesId: bigint("PK_CitiesID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkProvId: bigint("FK_ProvID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkRegionId: bigint("FK_RegionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.pkCitiesId], name: "Cities_PK_CitiesID" }),
    ],
);

export const citiesRegion = mysqlTable(
    "Cities_Region",
    {
        pkRegionsId: bigint("PK_RegionsID", { mode: "number" })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("0").notNull(),
        description: varchar("Description", { length: 100 })
            .default("0")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkRegionsId],
            name: "Cities_Region_PK_RegionsID",
        }),
    ],
);

export const competenceAreas = mysqlTable(
    "CompetenceAreas",
    {
        pkCompetenceAreasId: bigint("PK_CompetenceAreasID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkCompetenceAreasId],
            name: "CompetenceAreas_PK_CompetenceAreasID",
        }),
    ],
);

export const countries = mysqlTable(
    "Countries",
    {
        pkCountriesId: bigint("PK_CountriesID", { mode: "number" })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 2 }).default("").notNull(),
        description: varchar("Description", { length: 100 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkCountriesId],
            name: "Countries_PK_CountriesID",
        }),
    ],
);

export const currencies = mysqlTable(
    "Currencies",
    {
        pkCurrenciesId: int("PK_CurrenciesID", { unsigned: true })
            .autoincrement()
            .notNull(),
        name: varchar("Name", { length: 20 }),
        code: varchar("Code", { length: 3 }),
        symbol: varchar("Symbol", { length: 5 }),
    },
    (table) => [
        primaryKey({
            columns: [table.pkCurrenciesId],
            name: "Currencies_PK_CurrenciesID",
        }),
    ],
);

export const dragonPay = mysqlTable(
    "DragonPay",
    {
        pkDragonPayId: bigint("PK_DragonPayID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        merchantId: varchar("MerchantID", { length: 100 })
            .default("")
            .notNull(),
        merchantPassword: varchar("MerchantPassword", { length: 255 })
            .default("")
            .notNull(),
        envr: smallint("Envr", { unsigned: true }).notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkDragonPayId],
            name: "DragonPay_PK_DragonPayID",
        }),
    ],
);

export const duplicateThis = mysqlTable(
    "DuplicateThis",
    {
        pkDuplicateThisId: bigint("PK_DuplicateThisID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkDuplicateThisId],
            name: "DuplicateThis_PK_DuplicateThisID",
        }),
    ],
);

export const election = mysqlTable(
    "Election",
    {
        pkElectionId: bigint("PK_ElectionID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        isChapter: smallint("IsChapter", { unsigned: true }).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateFrom: date("DateFrom", { mode: "date" }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateTo: date("DateTo", { mode: "date" }).notNull(),
        endTime: time("EndTime").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionId],
            name: "Election_PK_ElectionID",
        }),
    ],
);

export const electionImages = mysqlTable(
    "ElectionImages",
    {
        pkElectionImagesId: bigint("PK_ElectionImagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionImagesId],
            name: "ElectionImages_PK_ElectionImagesID",
        }),
    ],
);

export const electionInternal = mysqlTable(
    "ElectionInternal",
    {
        pkElectionInternalId: bigint("PK_ElectionInternalID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCandidatesId: bigint("FK_CandidatesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkPositionsId: bigint("FK_PositionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionInternalId],
            name: "ElectionInternal_PK_ElectionInternalID",
        }),
    ],
);

export const electionInternalTally = mysqlTable(
    "ElectionInternalTally",
    {
        pkElectionInternalTallyId: bigint("PK_ElectionInternalTallyID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCandidatesId: bigint("FK_CandidatesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkPositionsId: bigint("FK_PositionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        votes: bigint("Votes", { mode: "number", unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionInternalTallyId],
            name: "ElectionInternalTally_PK_ElectionInternalTallyID",
        }),
    ],
);

export const electionPositions = mysqlTable(
    "ElectionPositions",
    {
        pkElectionPositionsId: bigint("PK_ElectionPositionsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        position: varchar("Position", { length: 100 }).default("").notNull(),
        isChapter: smallint("IsChapter", { unsigned: true }).notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        counter: int("Counter", { unsigned: true }).default(0).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionPositionsId],
            name: "ElectionPositions_PK_ElectionPositionsID",
        }),
    ],
);

export const electionTally = mysqlTable(
    "ElectionTally",
    {
        pkElectionTallyId: bigint("PK_ElectionTallyID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkCandidatesId: bigint("FK_CandidatesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        votes: bigint("Votes", { mode: "number", unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkElectionTallyId],
            name: "ElectionTally_PK_ElectionTallyID",
        }),
    ],
);

export const emailAuth = mysqlTable(
    "EmailAuth",
    {
        pkEmailAuthId: bigint("PK_EmailAuthID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkRegionsId: bigint("FK_RegionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
        sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
        sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
        name: varchar("Name", { length: 100 }).default("").notNull(),
        subject: varchar("Subject", { length: 100 }).default("").notNull(),
        message: varchar("Message", { length: 255 }).default("").notNull(),
        predefined: varchar("Predefined", { length: 100 })
            .default("")
            .notNull(),
        token: varchar("Token", { length: 32 }).default("").notNull(),
        isSent: smallint("IsSent", { unsigned: true }).notNull(),
        isAccessed: smallint("IsAccessed", { unsigned: true }).notNull(),
        isOpened: smallint("IsOpened", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEmailAuthId],
            name: "EmailAuth_PK_EmailAuthID",
        }),
    ],
);

export const emailAuth111224 = mysqlTable("EmailAuth_111224", {
    pkEmailAuthId: bigint("PK_EmailAuthID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkElectionId: bigint("FK_ElectionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
    sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
    sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    subject: varchar("Subject", { length: 100 }).default("").notNull(),
    message: varchar("Message", { length: 255 }).default("").notNull(),
    predefined: varchar("Predefined", { length: 100 }).default("").notNull(),
    token: varchar("Token", { length: 32 }).default("").notNull(),
    isSent: smallint("IsSent", { unsigned: true }).notNull(),
    isAccessed: smallint("IsAccessed", { unsigned: true }).notNull(),
    isOpened: smallint("IsOpened", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }),
    isRestricted: smallint("IsRestricted", { unsigned: true })
        .default(1)
        .notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const emailAuth112324 = mysqlTable("EmailAuth_112324", {
    pkEmailAuthId: bigint("PK_EmailAuthID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkElectionId: bigint("FK_ElectionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkRegionsId: bigint("FK_RegionsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkChaptersId: bigint("FK_ChaptersID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akRfidNo: char("AK_RFIDNo", { length: 30 }).default("").notNull(),
    sentFrom: varchar("SentFrom", { length: 100 }).default("").notNull(),
    sentTo: varchar("SentTo", { length: 100 }).default("").notNull(),
    name: varchar("Name", { length: 100 }).default("").notNull(),
    subject: varchar("Subject", { length: 100 }).default("").notNull(),
    message: varchar("Message", { length: 255 }).default("").notNull(),
    predefined: varchar("Predefined", { length: 100 }).default("").notNull(),
    token: varchar("Token", { length: 32 }).default("").notNull(),
    isSent: smallint("IsSent", { unsigned: true }).notNull(),
    isAccessed: smallint("IsAccessed", { unsigned: true }).notNull(),
    isOpened: smallint("IsOpened", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }),
    isRestricted: smallint("IsRestricted", { unsigned: true })
        .default(1)
        .notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const evalCategories = mysqlTable(
    "EvalCategories",
    {
        pkEvalCategoriesId: bigint("PK_EvalCategoriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkEvalTypeId: bigint("FK_EvalTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        memType: mysqlEnum("MemType", [
            "exhibitor",
            "comitee",
            "member",
            "finance",
            "committee",
        ]),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        seqNo: int("SeqNo", { unsigned: true }).default(0).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEvalCategoriesId],
            name: "EvalCategories_PK_EvalCategoriesID",
        }),
    ],
);

export const evalDetails = mysqlTable(
    "EvalDetails",
    {
        pkEvalDetailsId: bigint("PK_EvalDetailsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkEvalCategoriesId: bigint("FK_EvalCategoriesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        seqNo: int("SeqNo", { unsigned: true }).default(0).notNull(),
        isEssay: smallint("IsEssay", { unsigned: true }).notNull(),
        percentage: char("Percentage", { length: 10 }).default("0"),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEvalDetailsId],
            name: "EvalDetails_PK_EvalDetailsID",
        }),
    ],
);

export const evalType = mysqlTable(
    "EvalType",
    {
        pkEvalTypeId: bigint("PK_EvalTypeID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        type: varchar("Type", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEvalTypeId],
            name: "EvalType_PK_EvalTypeID",
        }),
    ],
);

export const events = mysqlTable(
    "Events",
    {
        pkEventsId: bigint("PK_EventsID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkDragonPayId: bigint("FK_DragonPayID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateFrom: date("DateFrom", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateTo: date("DateTo", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        email: varchar("Email", { length: 255 }).default("").notNull(),
        regEmail: varchar("RegEmail", { length: 255 }).default("").notNull(),
        accountNo: varchar("AccountNo", { length: 255 }).default("").notNull(),
        accountName: varchar("AccountName", { length: 255 })
            .default("")
            .notNull(),
        contactInfo: varchar("ContactInfo", { length: 255 }).default(""),
        avRsvn: smallint("AvRsvn", { unsigned: true }).notNull(),
        zoomUrl: varchar("ZoomURL", { length: 100 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
        isDeleted: smallint("IsDeleted", { unsigned: true }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.pkEventsId], name: "Events_PK_EventsID" }),
    ],
);

export const eventsImages = mysqlTable(
    "EventsImages",
    {
        pkEventsImagesId: bigint("PK_EventsImagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEventsImagesId],
            name: "EventsImages_PK_EventsImagesID",
        }),
    ],
);

export const eventsTags = mysqlTable(
    "EventsTags",
    {
        pkEventsTagsId: bigint("PK_EventsTagsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkEventsTagsId],
            name: "EventsTags_PK_EventsTagsID",
        }),
    ],
);

export const exhibitorAccounts = mysqlTable(
    "ExhibitorAccounts",
    {
        pkExhibitorAccountsId: serial("PK_ExhibitorAccountsID").notNull(),
        fkExhibitorProfilesId: bigint("FK_ExhibitorProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        username: varchar("Username", { length: 100 }).default("").notNull(),
        password: char("Password", { length: 128 }).default("").notNull(),
        salt: char("Salt", { length: 128 }).default("").notNull(),
        fkUserControlId: bigint("FK_UserControlID", {
            mode: "number",
            unsigned: true,
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
        isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).default(
            new Date("1000-01-01 00:00:00"),
        ),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkExhibitorAccountsId, table.fkUserControlCode],
            name: "ExhibitorAccounts_PK_ExhibitorAccountsID_FK_UserControlCode",
        }),
        unique("username").on(table.username, table.pkExhibitorAccountsId),
    ],
);

export const exhibitorEvents = mysqlTable(
    "ExhibitorEvents",
    {
        pkExhibitorEventsId: bigint("PK_ExhibitorEventsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkPackagesId: bigint("FK_PackagesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkBoothsId: bigint("FK_BoothsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        noAttendees: bigint("NoAttendees", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        txnType: mysqlEnum("TxnType", ["CASH", "CHECK"])
            .default("CASH")
            .notNull(),
        status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
        isPaid: smallint("IsPaid", { unsigned: true }).notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        ccy: mysqlEnum("CCY", ["PHP"]).default("PHP").notNull(),
        flag: mysqlEnum("Flag", ["Approved", "Pending", "Declined"])
            .default("Pending")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkExhibitorEventsId],
            name: "ExhibitorEvents_PK_ExhibitorEventsID",
        }),
    ],
);

export const exhibitorFollowers = mysqlTable(
    "ExhibitorFollowers",
    {
        pkExhibitorFollowersId: bigint("PK_ExhibitorFollowersID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        dateLogged: datetime("DateLogged", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkExhibitorFollowersId],
            name: "ExhibitorFollowers_PK_ExhibitorFollowersID",
        }),
    ],
);

export const exhibitorImages = mysqlTable(
    "ExhibitorImages",
    {
        pkExhibitorImagesId: bigint("PK_ExhibitorImagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkExhibitorAccountsId: bigint("FK_ExhibitorAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkExhibitorImagesId],
            name: "ExhibitorImages_PK_ExhibitorImagesID",
        }),
    ],
);

export const exhibitorProfiles = mysqlTable(
    "ExhibitorProfiles",
    {
        pkExhibitorProfilesId: bigint("PK_ExhibitorProfilesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
        companyName: varchar("CompanyName", { length: 255 })
            .default("")
            .notNull(),
        address: varchar("Address", { length: 255 }).default("").notNull(),
        fkCitiesId: int("FK_CitiesID", { unsigned: true }).default(0).notNull(),
        state: varchar("State", { length: 100 }).default("").notNull(),
        zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
        telNo: varchar("TelNo", { length: 100 }).default("").notNull(),
        email: varchar("Email", { length: 100 }).default("").notNull(),
        contactPerson: varchar("ContactPerson", { length: 255 })
            .default("")
            .notNull(),
        website: varchar("Website", { length: 255 }).default("").notNull(),
        description: text("Description").notNull(),
        fkProductTypeId: bigint("FK_ProductTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isVip: smallint("IsVIP", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkExhibitorProfilesId],
            name: "ExhibitorProfiles_PK_ExhibitorProfilesID",
        }),
    ],
);

export const fees = mysqlTable(
    "Fees",
    {
        pkFeesId: bigint("PK_FeesID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        isCurrentYear: smallint("IsCurrentYear", { unsigned: true }).notNull(),
        chargeOnce: smallint("ChargeOnce", { unsigned: true }).notNull(),
        licenseType: char("LicenseType", { length: 10 }).notNull(),
        memberType: varchar("MemberType", { length: 255 })
            .default("")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        effectivityDate: date("EffectivityDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        isCpApproval: smallint("IsCPApproval").notNull(),
        exp: decimal("EXP", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.pkFeesId], name: "Fees_PK_FeesID" }),
    ],
);

export const groupings = mysqlTable(
    "Groupings",
    {
        pkGroupingsId: bigint("PK_GroupingsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkGroupingsId],
            name: "Groupings_PK_GroupingsID",
        }),
    ],
);

export const guestAccounts = mysqlTable(
    "GuestAccounts",
    {
        pkGuestAccountsId: serial("PK_GuestAccountsID").notNull(),
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
        isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkGuestAccountsId],
            name: "GuestAccounts_PK_GuestAccountsID",
        }),
        unique("username").on(table.username, table.pkGuestAccountsId),
    ],
);

export const licenseType = mysqlTable(
    "LicenseType",
    {
        pkLicenseTypeId: bigint("PK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkLicenseTypeId],
            name: "LicenseType_PK_LicenseTypeID",
        }),
    ],
);

export const loginAttempts = mysqlTable(
    "LoginAttempts",
    {
        pkLoginAttemptsId: bigint("PK_LoginAttemptsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
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
        bogon: smallint("Bogon", { unsigned: true }).notNull(),
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
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkLoginAttemptsId],
            name: "LoginAttempts_PK_LoginAttemptsID",
        }),
    ],
);

export const membersSeries = mysqlTable(
    "MembersSeries",
    {
        pkMembersSeriesId: bigint("PK_MembersSeriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).default(1).notNull(),
        prefix: char("Prefix", { length: 2 }).default("RG").notNull(),
        seriesStart: int("SeriesStart", { unsigned: true })
            .default(0)
            .notNull(),
        seriesEnd: int("SeriesEnd", { unsigned: true }).default(0).notNull(),
        currentNo: int("CurrentNo", { unsigned: true }).default(0).notNull(),
        type: mysqlEnum("Type", [
            "Senior",
            "Regular",
            "Life",
            "Fellow",
            "Auxiliary",
            "Honorary",
        ]),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkMembersSeriesId],
            name: "MembersSeries_PK_MembersSeriesID",
        }),
    ],
);

export const orSeries = mysqlTable(
    "ORSeries",
    {
        pkOrSeriesId: bigint("PK_ORSeriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkCounterId: bigint("FK_CounterID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).default(1).notNull(),
        seriesStart: int("SeriesStart", { unsigned: true })
            .default(0)
            .notNull(),
        seriesEnd: int("SeriesEnd", { unsigned: true }).default(0).notNull(),
        currentNo: int("CurrentNo", { unsigned: true }).default(0).notNull(),
        type: mysqlEnum("Type", ["C", "D", "CM", "DM"]).default("C").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkOrSeriesId],
            name: "ORSeries_PK_ORSeriesID",
        }),
    ],
);

export const otcHistory = mysqlTable(
    "OTCHistory",
    {
        pkOtcHistoryId: bigint("PK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserRequestsId: bigint("FK_UserRequestsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        envr: smallint("Envr", { unsigned: true }).notNull(),
        isRequest: smallint("IsRequest", { unsigned: true }).notNull(),
        isProcessed: smallint("IsProcessed", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("requestid").on(table.fkUserRequestsId),
        index("useraccounts").on(table.akUserAccountsId),
        index("txnparams").on(table.txnParams),
        primaryKey({
            columns: [table.pkOtcHistoryId],
            name: "OTCHistory_PK_OTCHistoryID",
        }),
    ],
);

export const otcHistoryCopy = mysqlTable("OTCHistory_copy", {
    pkOtcHistoryId: bigint("PK_OTCHistoryID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserRequestsId: bigint("FK_UserRequestsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fullName: varchar("FullName", { length: 255 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
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
    envr: smallint("Envr", { unsigned: true }).notNull(),
    isRequest: smallint("IsRequest", { unsigned: true }).notNull(),
    isProcessed: smallint("IsProcessed", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const otcResponse = mysqlTable(
    "OTCResponse",
    {
        pkOtcResponseId: bigint("PK_OTCResponseID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        txnType: varchar("TxnType", { length: 50 }).default("").notNull(),
        refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
        txnId: varchar("TxnID", { length: 50 }).default("").notNull(),
        status: mysqlEnum("Status", ["S", "P", "F"]).default("P").notNull(),
        digest: varchar("Digest", { length: 50 }).default("").notNull(),
        envr: smallint("Envr", { unsigned: true }).notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Message").notNull(),
        action: mysqlEnum("Action", ["NEW", "UPDATE"]).default("NEW").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkOtcResponseId],
            name: "OTCResponse_PK_OTCResponseID",
        }),
    ],
);

export const otcSeries = mysqlTable(
    "OTCSeries",
    {
        pkOtcSeriesId: bigint("PK_OTCSeriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).default(1).notNull(),
        seriesStart: int("SeriesStart", { unsigned: true })
            .default(0)
            .notNull(),
        seriesEnd: int("SeriesEnd", { unsigned: true }).default(0).notNull(),
        currentNo: int("CurrentNo", { unsigned: true }).default(0).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkOtcSeriesId],
            name: "OTCSeries_PK_OTCSeriesID",
        }),
    ],
);

export const officers = mysqlTable(
    "Officers",
    {
        pkOfficersId: bigint("PK_OfficersID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        position: mysqlEnum("Position", [
            "National",
            "Regional",
            "Chapter",
        ]).notNull(),
        term: year("Term").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkOfficersId],
            name: "Officers_PK_OfficersID",
        }),
    ],
);

export const packages = mysqlTable(
    "Packages",
    {
        pkPackagesId: bigint("PK_PackagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Description").notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkPackagesId],
            name: "Packages_PK_PackagesID",
        }),
    ],
);

export const paymentCopy = mysqlTable(
    "PaymentCopy",
    {
        pkPaymentCopyId: bigint("PK_PaymentCopyID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkPaymentTrailId: bigint("FK_PaymentTrailID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        payType: smallint("PayType", { unsigned: true }).default(1).notNull(),
        payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
        orSeqNo: smallint("ORSeqNo", { unsigned: true }).notNull(),
        orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        orType: varchar("ORType", { length: 25 }).default("").notNull(),
        datePaid: datetime("DatePaid", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        checkDate: date("CheckDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        bankName: varchar("BankName", { length: 50 }).default("").notNull(),
        bankBranch: varchar("BankBranch", { length: 100 })
            .default("")
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
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
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkPaymentCopyId],
            name: "PaymentCopy_PK_PaymentCopyID",
        }),
    ],
);

export const paymentEntries = mysqlTable(
    "PaymentEntries",
    {
        pkPaymentEntriesId: bigint("PK_PaymentEntriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkPaymentTrailId: bigint("FK_PaymentTrailID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: int("Code", { unsigned: true }).default(0).notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        quantity: int("Quantity", { unsigned: true }).default(1).notNull(),
        perPiece: decimal("PerPiece", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        penalty: decimal("Penalty", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        subTotal: decimal("SubTotal", {
            precision: 10,
            scale: 2,
            unsigned: true,
        })
            .default("0.00")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkPaymentEntriesId],
            name: "PaymentEntries_PK_PaymentEntriesID",
        }),
    ],
);

export const paymentTrail = mysqlTable(
    "PaymentTrail",
    {
        pkPaymentTrailId: bigint("PK_PaymentTrailID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        payType: smallint("PayType", { unsigned: true }).default(1).notNull(),
        payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
        orSeqNo: smallint("ORSeqNo", { unsigned: true }).notNull(),
        orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        orType: varchar("ORType", { length: 25 }).default("").notNull(),
        datePaid: datetime("DatePaid", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        transactionNo: varchar("TransactionNo", { length: 50 })
            .default("")
            .notNull(),
        checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        checkDate: date("CheckDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        bankName: varchar("BankName", { length: 50 }).default("").notNull(),
        bankBranch: varchar("BankBranch", { length: 100 })
            .default("")
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
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
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("otchistory").on(table.fkOtcHistoryId),
        primaryKey({
            columns: [table.pkPaymentTrailId],
            name: "PaymentTrail_PK_PaymentTrailID",
        }),
    ],
);

export const paymentTrailCopy = mysqlTable("PaymentTrail_copy", {
    pkPaymentTrailId: bigint("PK_PaymentTrailID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkOtcHistoryId: bigint("FK_OTCHistoryID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    payType: smallint("PayType", { unsigned: true }).default(1).notNull(),
    payDesc: varchar("PayDesc", { length: 25 }).default("CASH").notNull(),
    orSeqNo: smallint("ORSeqNo", { unsigned: true }).notNull(),
    orCtrNo: varchar("ORCtrNo", { length: 25 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orType: varchar("ORType", { length: 25 }).default("").notNull(),
    datePaid: datetime("DatePaid", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    transactionNo: varchar("TransactionNo", { length: 50 })
        .default("")
        .notNull(),
    checkNo: varchar("CheckNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    checkDate: date("CheckDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    bankName: varchar("BankName", { length: 50 }).default("").notNull(),
    bankBranch: varchar("BankBranch", { length: 100 }).default("").notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
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
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true })
        .default(1)
        .notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const positions = mysqlTable(
    "Positions",
    {
        pkPositionsId: bigint("PK_PositionsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 25 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        category: mysqlEnum("Category", [
            "officers",
            "governors",
            "presidents",
            "commitee",
        ])
            .default("officers")
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).notNull(),
        isOccupied: smallint("IsOccupied", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkPositionsId],
            name: "Positions_PK_PositionsID",
        }),
    ],
);

export const productType = mysqlTable(
    "ProductType",
    {
        pkProductTypeId: bigint("PK_ProductTypeID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkProductTypeId],
            name: "ProductType_PK_ProductTypeID",
        }),
    ],
);

export const providers = mysqlTable(
    "Providers",
    {
        pkProvidersId: bigint("PK_ProvidersID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkProvidersId],
            name: "Providers_PK_ProvidersID",
        }),
    ],
);

export const provinces = mysqlTable(
    "Provinces",
    {
        pkProvinces: bigint("PK_Provinces", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        fkRegionsId: bigint("FK_RegionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        code: varchar("Code", { length: 100 }).notNull(),
        description: varchar("Description", { length: 100 }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkProvinces],
            name: "Provinces_PK_Provinces",
        }),
    ],
);

export const regions = mysqlTable(
    "Regions",
    {
        pkRegionsId: int("PK_RegionsID", { unsigned: true })
            .autoincrement()
            .notNull(),
        fkAreasId: int("FK_AreasID", { unsigned: true }).default(0).notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkRegionsId],
            name: "Regions_PK_RegionsID",
        }),
    ],
);

export const reportsQr = mysqlTable(
    "ReportsQR",
    {
        pkReportsQrid: bigint("PK_ReportsQRID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        reportNo: varchar("ReportNo", { length: 100 }).default("").notNull(),
        digest: char("Digest", { length: 128 }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Details").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkReportsQrid],
            name: "ReportsQR_PK_ReportsQRID",
        }),
    ],
);

export const reportsSeries = mysqlTable(
    "ReportsSeries",
    {
        pkReportsSeriesId: bigint("PK_ReportsSeriesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).default(1).notNull(),
        seriesStart: int("SeriesStart", { unsigned: true })
            .default(0)
            .notNull(),
        seriesEnd: int("SeriesEnd", { unsigned: true }).default(0).notNull(),
        currentNo: int("CurrentNo", { unsigned: true }).default(0).notNull(),
        type: mysqlEnum("Type", ["COGS", "EPART"]).default("COGS").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkReportsSeriesId],
            name: "ReportsSeries_PK_ReportsSeriesID",
        }),
    ],
);

export const requests = mysqlTable(
    "Requests",
    {
        pkRequestsId: bigint("PK_RequestsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        requestNo: varchar("RequestNo", { length: 100 }).default("").notNull(),
        digest: char("Digest", { length: 128 }).notNull(),
        category: mysqlEnum("Category", ["Password"])
            .default("Password")
            .notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("Details").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkRequestsId],
            name: "Requests_PK_RequestsID",
        }),
    ],
);

export const schools = mysqlTable(
    "Schools",
    {
        pkSchoolsId: bigint("PK_SchoolsID", { mode: "number", unsigned: true })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 25 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkSchoolsId],
            name: "Schools_PK_SchoolsID",
        }),
    ],
);

export const seminars = mysqlTable(
    "Seminars",
    {
        pkSeminarsId: bigint("PK_SeminarsID", {
            mode: "number",
            unsigned: true,
        })
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
        earlyBirdDate: date("EarlyBirdDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        slots: int("Slots", { unsigned: true }).default(0).notNull(),
        slotsTaken: int("SlotsTaken", { unsigned: true }).default(0).notNull(),
        fkChaptersId: int("FK_ChaptersID", { unsigned: true })
            .default(0)
            .notNull(),
        fkProvidersId: int("FK_ProvidersID", { unsigned: true })
            .default(0)
            .notNull(),
        fkEventsId: int("FK_EventsID", { unsigned: true }).default(0).notNull(),
        fkEventsTagsId: int("FK_EventsTagsID", { unsigned: true })
            .default(0)
            .notNull(),
        fkCompetenceId: int("FK_CompetenceID", { unsigned: true })
            .default(0)
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateReceived: date("DateReceived", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateForwarded: date("DateForwarded", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateApproved: date("DateApproved", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        prcorNo: varchar("PRCORNo", { length: 25 }).default("").notNull(),
        fkCurrenciesId: int("FK_CurrenciesID", { unsigned: true })
            .default(83)
            .notNull(),
        isCompulsory: smallint("IsCompulsory", { unsigned: true }).notNull(),
        seqNo: int("SeqNo", { unsigned: true }).default(0).notNull(),
        bypassRegd: smallint("BypassRegd", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("eventsid").on(table.fkEventsId),
        primaryKey({
            columns: [table.pkSeminarsId],
            name: "Seminars_PK_SeminarsID",
        }),
    ],
);

export const seminarsDetails = mysqlTable(
    "SeminarsDetails",
    {
        pkSeminarsDetailsId: bigint("PK_SeminarsDetailsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkSeminarsId: bigint("FK_SeminarsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkGroupingsId: bigint("FK_GroupingsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        venue: varchar("Venue", { length: 255 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateFrom: date("DateFrom", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateTo: date("DateTo", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        startTime: time("StartTime").default("00:00:00").notNull(),
        endTime: time("EndTime").default("00:00:00").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkSeminarsDetailsId],
            name: "SeminarsDetails_PK_SeminarsDetailsID",
        }),
    ],
);

export const seminarsSignatory = mysqlTable(
    "SeminarsSignatory",
    {
        pkSeminarsSignatoryId: bigint("PK_SeminarsSignatoryID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        designation: varchar("DESIGNATION", { length: 150 })
            .default("0")
            .notNull(),
        seqNo: char("SeqNo", { length: 1 }).default("1").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
        qrcode: varchar({ length: 20 }),
    },
    (table) => [
        primaryKey({
            columns: [table.pkSeminarsSignatoryId],
            name: "SeminarsSignatory_PK_SeminarsSignatoryID",
        }),
    ],
);

export const seminarsSummary = mysqlTable(
    "SeminarsSummary",
    {
        pkSeminarsSummaryId: bigint("PK_SeminarsSummaryID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkSeminarsId: bigint("FK_SeminarsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkSeminarsDetailsId: bigint("FK_SeminarsDetailsID", {
            mode: "number",
            unsigned: true,
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
        earlyBirdDate: date("EarlyBirdDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        attendanceType: mysqlEnum("Attendance_type", [
            "ATTENDEE",
            "FACILITATOR",
            "SPEAKER",
            "PANELIST",
            "MODERATOR",
        ])
            .default("ATTENDEE")
            .notNull(),
        incharge: varchar("Incharge", { length: 100 }).default("").notNull(),
        inchargeDesc: varchar("InchargeDesc", { length: 255 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        slots: int("Slots", { unsigned: true }).default(0).notNull(),
        slotsTaken: int("SlotsTaken", { unsigned: true }).default(0).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvidersId: bigint("FK_ProvidersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkEventsId: bigint("FK_EventsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
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
        eventsDateFrom: date("EventsDateFrom", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        eventsDateTo: date("EventsDateTo", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fkDragonPayId: bigint("FK_DragonPayID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkEventsTagsId: bigint("FK_EventsTagsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCompetenceId: bigint("FK_CompetenceID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateReceived: date("DateReceived", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateForwarded: date("DateForwarded", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateApproved: date("DateApproved", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        prcorNo: varchar("PRCORNo", { length: 25 }).default("").notNull(),
        fkCurrenciesId: int("FK_CurrenciesID", { unsigned: true })
            .default(83)
            .notNull(),
        isCompulsory: smallint("IsCompulsory", { unsigned: true }).notNull(),
        seqNo: int("SeqNo", { unsigned: true }).default(0).notNull(),
        bypassRegd: smallint("BypassRegd", { unsigned: true }).notNull(),
        fkGroupingsId: bigint("FK_GroupingsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        venue: varchar("Venue", { length: 255 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateFrom: date("DateFrom", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateTo: date("DateTo", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        startTime: time("StartTime").default("00:00:00").notNull(),
        endTime: time("EndTime").default("00:00:00").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("eventsid").on(table.fkEventsId),
        primaryKey({
            columns: [table.pkSeminarsSummaryId],
            name: "SeminarsSummary_PK_SeminarsSummaryID",
        }),
    ],
);

export const shippingtypes = mysqlTable(
    "ShippingTypes",
    {
        pkShippingTypesId: bigint("PK_ShippingTypesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        amount: decimal("Amount", { precision: 10, scale: 2, unsigned: true })
            .default("0.00")
            .notNull(),
        isCurrentYear: smallint("IsCurrentYear", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkShippingTypesId],
            name: "ShippingTypes_PK_ShippingTypesID",
        }),
    ],
);

export const specialization = mysqlTable(
    "Specialization",
    {
        pkSpecializationId: bigint("PK_SpecializationID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 50 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        seqNo: smallint("SeqNo", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkSpecializationId],
            name: "Specialization_PK_SpecializationID",
        }),
    ],
);

export const txnVenue = mysqlTable(
    "TxnVenue",
    {
        pkTxnVenueId: bigint("PK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 25 }).default("").notNull(),
        description: varchar("Description", { length: 255 })
            .default("")
            .notNull(),
        address: varchar("Address", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkTxnVenueId],
            name: "TxnVenue_PK_TxnVenueID",
        }),
    ],
);

export const useraccounts = mysqlTable(
    "UserAccounts",
    {
        pkUserAccountsId: serial("PK_UserAccountsID").notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        username: varchar("Username", { length: 100 }).default("").notNull(),
        password: char("Password", { length: 128 }).default("").notNull(),
        fname: varchar("FName", { length: 100 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        email: varchar("Email", { length: 100 }).default("").notNull(),
        salt: char("Salt", { length: 128 }).default("").notNull(),
        fkUserControlId: bigint("FK_UserControlID", {
            mode: "number",
            unsigned: true,
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
        isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).default(
            new Date("1000-01-01 00:00:00"),
        ),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("email").on(table.email),
        index("id").on(table.fkUserProfilesId),
        index("emailsent").on(table.isMailSent),
        primaryKey({
            columns: [table.pkUserAccountsId, table.fkUserControlCode],
            name: "UserAccounts_PK_UserAccountsID_FK_UserControlCode",
        }),
        unique("username").on(table.username, table.pkUserAccountsId),
    ],
);

export const userAccounts111822 = mysqlTable("UserAccounts_111822", {
    pkUserAccountsId: bigint("PK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", {
        mode: "number",
        unsigned: true,
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
    isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }).default(
        new Date("1000-01-01 00:00:00"),
    ),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userAccountsCopy = mysqlTable("UserAccounts_copy", {
    pkUserAccountsId: bigint("PK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", {
        mode: "number",
        unsigned: true,
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
    isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }).default(
        new Date("1000-01-01 00:00:00"),
    ),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userAccountsCopy040421 = mysqlTable("UserAccounts_copy040421", {
    pkUserAccountsId: bigint("PK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    username: varchar("Username", { length: 100 }).default("").notNull(),
    password: char("Password", { length: 128 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    salt: char("Salt", { length: 128 }).default("").notNull(),
    fkUserControlId: bigint("FK_UserControlID", {
        mode: "number",
        unsigned: true,
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
    isMailSent: smallint("IsMailSent", { unsigned: true }).notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }).default(
        new Date("1000-01-01 00:00:00"),
    ),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userAttendance = mysqlTable(
    "UserAttendance",
    {
        pkUserAttendanceId: bigint("PK_UserAttendanceID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        tag: mysqlEnum("Tag", ["IN", "OUT"]).default("IN").notNull(),
        dateLogged: datetime("DateLogged", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        ltype: varchar({ length: 150 }).notNull(),
        email: varchar({ length: 150 }).notNull(),
        name: varchar({ length: 255 }).notNull(),
        prcno: varchar({ length: 15 }).notNull(),
        company: varchar({ length: 150 }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 50 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("prcno").on(table.prcno),
        index("ltype").on(table.ltype),
        index("email").on(table.email),
        index("useraccounts").on(table.akUserAccountsId),
        index("seminar").on(table.akUserAccountsId, table.fkSeminarsSummaryId),
        primaryKey({
            columns: [table.pkUserAttendanceId],
            name: "UserAttendance_PK_UserAttendanceID",
        }),
    ],
);

export const userCertificates = mysqlTable(
    "UserCertificates",
    {
        pkUserCertificatesId: bigint("PK_UserCertificatesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        certType: varchar("CertType", { length: 100 }).default("").notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF", { unsigned: true }).default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserCertificatesId],
            name: "UserCertificates_PK_UserCertificatesID",
        }),
    ],
);

export const userChangeChapter = mysqlTable(
    "UserChangeChapter",
    {
        pkUserChangeChapterId: bigint("PK_UserChangeChapterID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        currRegion: varchar("CurrRegion", { length: 100 })
            .default("0")
            .notNull(),
        currChapter: varchar("CurrChapter", { length: 100 })
            .default("0")
            .notNull(),
        region: varchar("Region", { length: 100 }).default("0").notNull(),
        chapter: varchar("Chapter", { length: 100 }).default("0").notNull(),
        reason: varchar("Reason", { length: 255 }).default("").notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        isApproved: smallint("IsApproved", { unsigned: true }).notNull(),
        status: mysqlEnum("Status", [
            "Pending",
            "Approved",
            "Declined",
            "On Process",
        ])
            .default("Pending")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserChangeChapterId],
            name: "UserChangeChapter_PK_UserChangeChapterID",
        }),
    ],
);

export const userChangeChapterAtch = mysqlTable(
    "UserChangeChapterAtch",
    {
        pkUserChangeChapterAtchId: bigint("PK_UserChangeChapterAtchID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserChangeChapterId: bigint("FK_UserChangeChapterID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserChangeChapterAtchId],
            name: "UserChangeChapterAtch_PK_UserChangeChapterAtchID",
        }),
    ],
);

export const userControl = mysqlTable(
    "UserControl",
    {
        pkUserControlId: bigint("PK_UserControlID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        code: varchar("Code", { length: 100 }).default("").notNull(),
        isChapter: smallint("IsChapter", { unsigned: true }).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        isDefault: smallint("IsDefault", { unsigned: true }).notNull(),
        isExclusive: smallint("IsExclusive", { unsigned: true }).notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("FK_UserModulesID").notNull(),
        // Warning: Can't parse blob from database
        // blobType: blob("FK_PermissionsID").notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        fkUsersAccountsId: bigint("FK_UsersAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserControlId],
            name: "UserControl_PK_UserControlID",
        }),
    ],
);

export const userEducation = mysqlTable(
    "UserEducation",
    {
        pkUserEducationId: bigint("PK_UserEducationID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        school: varchar("School", { length: 255 }).default("").notNull(),
        degree: varchar("Degree", { length: 255 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateGraduated: date("DateGraduated", { mode: "date" }).notNull(),
        awards: varchar("Awards", { length: 255 }).default("").notNull(),
        level: varchar("Level", { length: 10 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserEducationId],
            name: "UserEducation_PK_UserEducationID",
        }),
    ],
);

export const userEmails = mysqlTable(
    "UserEmails",
    {
        pkUserEmailsId: bigint("PK_UserEmailsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkElectionId: bigint("FK_ElectionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkEmailAuthId: bigint("FK_EmailAuthID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("email").on(table.fkEmailAuthId),
        index("user").on(table.akUserAccountsId),
        index("emails").on(table.pkUserEmailsId),
        index("elect").on(table.fkElectionId),
        primaryKey({
            columns: [table.pkUserEmailsId],
            name: "UserEmails_PK_UserEmailsID",
        }),
    ],
);

export const userExpertise = mysqlTable(
    "UserExpertise",
    {
        pkUserExpertiseId: bigint("PK_UserExpertiseID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        expertise: varchar("Expertise", { length: 255 }).default("").notNull(),
        years: varchar("Years", { length: 50 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" }).notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserExpertiseId],
            name: "UserExpertise_PK_UserExpertiseID",
        }),
    ],
);

export const userFees = mysqlTable(
    "UserFees",
    {
        pkUserFeesId: bigint("PK_UserFeesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkFeesId: bigint("FK_FeesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isPaid: smallint("IsPaid", { unsigned: true }).notNull(),
        status: mysqlEnum("Status", ["P", "F", "S"]).default("P").notNull(),
        valFrom: datetime("ValFrom", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        valTo: datetime("ValTo", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserFeesId],
            name: "UserFees_PK_UserFeesID",
        }),
    ],
);

export const userImages = mysqlTable(
    "UserImages",
    {
        pkUserImagesId: bigint("PK_UserImagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        category: mysqlEnum("Category", ["Profile", "Senior", "PWD"])
            .default("Profile")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserImagesId],
            name: "UserImages_PK_UserImagesID",
        }),
    ],
);

export const userImagesCopy = mysqlTable("UserImages_copy", {
    pkUserImagesId: bigint("PK_UserImagesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    path: varchar("Path", { length: 255 }).default("").notNull(),
    nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
    sizeOrif: int("SizeORIF").default(0).notNull(),
    contentType: varchar("ContentType", { length: 15 }).default("").notNull(),
    remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
    category: mysqlEnum("Category", ["Profile", "Senior", "PWD"])
        .default("Profile")
        .notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    })
        .default(1)
        .notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true })
        .default(1)
        .notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userlicense = mysqlTable(
    "UserLicense",
    {
        pkUserLicenseId: bigint("PK_UserLicenseID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        })
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
        sizeOrif: int("SizeORIF", { unsigned: true }).default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        isMainId: smallint("IsMainID", { unsigned: true }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "string" })
            .default("1000-01-01 00:00:00")
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("profileid").on(table.fkUserProfilesId),
        index("lictype").on(table.fkLicenseTypeId),
        index("UserProfileiid").on(table.fkUserProfilesId),
        index("ltype").on(table.fkLicenseTypeId),
        primaryKey({
            columns: [table.pkUserLicenseId],
            name: "UserLicense_PK_UserLicenseID",
        }),
    ],
);

export const userLicenseCopy = mysqlTable(
    "UserLicense_copy",
    {
        pkUserLicenseId: bigint("PK_UserLicenseID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        licenseType: mysqlEnum("LicenseType", [
            "RME",
            "REE",
            "PEE",
            "BSEE",
        ]).notNull(),
        licenseNo: varchar("LicenseNo", { length: 50 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        registrationDate: date("RegistrationDate", {
            mode: "string",
        }).notNull(),
        lname: varchar({ length: 100 }).notNull(),
        fname: varchar({ length: 150 }).notNull(),
        mname: varchar({ length: 100 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        validityDate: date("ValidityDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fileLocation: varchar("FileLocation", { length: 255 })
            .default("")
            .notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserLicenseId],
            name: "UserLicense_copy_PK_UserLicenseID",
        }),
    ],
);

export const userModules = mysqlTable(
    "UserModules",
    {
        pkUserModulesId: bigint("PK_UserModulesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        modulesGrp: int("ModulesGrp", { unsigned: true }).default(0).notNull(),
        fkUserModulesId: int("FK_UserModulesID", { unsigned: true })
            .default(0)
            .notNull(),
        description: varchar("Description", { length: 50 })
            .default("")
            .notNull(),
        abbreviation: varchar("Abbreviation", { length: 15 })
            .default("")
            .notNull(),
        link: varchar("Link", { length: 50 }).default("").notNull(),
        icon: varchar("Icon", { length: 25 }).default("").notNull(),
        seqNo: int("SeqNo", { unsigned: true }).default(0).notNull(),
        seqNoGrp: int("SeqNoGrp", { unsigned: true }).default(0).notNull(),
        akUserModulesType: mysqlEnum("AK_UserModulesType", [
            "heading",
            "link",
            "separator",
        ])
            .default("link")
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserModulesId],
            name: "UserModules_PK_UserModulesID",
        }),
    ],
);

export const userpositions = mysqlTable(
    "UserPositions",
    {
        pkUserPositionsId: bigint("PK_UserPositionsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkPositionsId: bigint("FK_PositionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkRegionsId: bigint("FK_RegionsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkChaptersId: bigint("FK_ChaptersID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserPositionsId],
            name: "UserPositions_PK_UserPositionsID",
        }),
    ],
);

export const userprofiles = mysqlTable(
    "UserProfiles",
    {
        pkUserProfilesId: bigint("PK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
            "Deceased",
            "Dormant",
            "Deleted",
            "For Verification",
            "Pending",
            "Verified",
        ])
            .default("For Verification")
            .notNull(),
        fkEventsTagsId: bigint("FK_EventsTagsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
        qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        fname: varchar("FName", { length: 100 }).default("").notNull(),
        mname: varchar("MName", { length: 100 }).default("").notNull(),
        suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        bdate: date("BDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        fkRegionId: bigint("FK_RegionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesId: bigint("FK_CitiesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesId: bigint("FK_ProvincesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesId: bigint("FK_CountriesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
        fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
        zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
        dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
        addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
        barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
        fkRegionIdM: bigint("FK_RegionID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesIdM: bigint("FK_CitiesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesIdM: bigint("FK_ProvincesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesIdM: bigint("FK_CountriesID_M", {
            mode: "number",
            unsigned: true,
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
        prcDateIssued: date("PRCDateIssued", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        membershipDateReg: date("MembershipDateReg", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        controlNo: varchar("ControlNo", { length: 20 }).default(""),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcRegDate: date("PRCRegDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcExpDate: date("PRCExpDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        sector: mysqlEnum("Sector", [
            "Academe",
            "Government",
            "Private Practice",
            "Private Corporation",
        ]).notNull(),
        agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
        agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
        isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
        isVip: smallint("IsVIP", { unsigned: true }).notNull(),
        isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
        isGmm: smallint("IsGMM").notNull(),
        isKit: smallint("IsKIT", { unsigned: true }).notNull(),
        appType: varchar("AppType", { length: 100 }).default("").notNull(),
        srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
        pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
        area: char("Area", { length: 50 }).default("").notNull(),
        uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
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
        primaryKey({
            columns: [table.pkUserProfilesId],
            name: "UserProfiles_PK_UserProfilesID",
        }),
    ],
);

export const userProfiles030326 = mysqlTable("UserProfiles_030326", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    controlNo: varchar("ControlNo", { length: 20 }).default(""),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" })
        .default(new Date("0000-00-00 00:00:00"))
        .notNull(),
});

export const userProfiles040826 = mysqlTable("UserProfiles_040826", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    controlNo: varchar("ControlNo", { length: 20 }).default(""),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" })
        .default(new Date("0000-00-00 00:00:00"))
        .notNull(),
});

export const userProfiles041426 = mysqlTable("UserProfiles_041426", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    controlNo: varchar("ControlNo", { length: 20 }).default(""),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" })
        .default(new Date("0000-00-00 00:00:00"))
        .notNull(),
});

export const userProfiles090723 = mysqlTable(
    "UserProfiles_090723",
    {
        pkUserProfilesId: bigint("PK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        })
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
        fkEventsTagsId: bigint("FK_EventsTagsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
        qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        fname: varchar("FName", { length: 100 }).default("").notNull(),
        mname: varchar("MName", { length: 100 }).default("").notNull(),
        suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        bdate: date("BDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        fkRegionId: bigint("FK_RegionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesId: bigint("FK_CitiesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesId: bigint("FK_ProvincesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesId: bigint("FK_CountriesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
        fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
        zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
        dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
        addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
        barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
        fkRegionIdM: bigint("FK_RegionID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesIdM: bigint("FK_CitiesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesIdM: bigint("FK_ProvincesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesIdM: bigint("FK_CountriesID_M", {
            mode: "number",
            unsigned: true,
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
        prcDateIssued: date("PRCDateIssued", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        membershipDateReg: date("MembershipDateReg", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcRegDate: date("PRCRegDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcExpDate: date("PRCExpDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        sector: mysqlEnum("Sector", [
            "Academe",
            "Government",
            "Private Practice",
            "Private Corporation",
        ]).notNull(),
        agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
        agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
        isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
        isVip: smallint("IsVIP", { unsigned: true }).notNull(),
        isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
        isGmm: smallint("IsGMM").notNull(),
        isKit: smallint("IsKIT", { unsigned: true }).notNull(),
        appType: varchar("AppType", { length: 100 }).default("").notNull(),
        srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
        pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
        area: char("Area", { length: 50 }).default("").notNull(),
        uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
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
        primaryKey({
            columns: [table.pkUserProfilesId],
            name: "UserProfiles_090723_PK_UserProfilesID",
        }),
    ],
);

export const userProfiles111822 = mysqlTable("UserProfiles_111822", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Dormant",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userProfiles112824 = mysqlTable("UserProfiles_112824", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isGmm: smallint("IsGMM").notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userProfilesBackupBeforeEnumChange = mysqlTable(
    "UserProfiles_backup_before_enum_change",
    {
        pkUserProfilesId: bigint("PK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
            "Deceased",
            "Deleted",
            "For Verification",
            "Pending",
            "Verified",
        ])
            .default("For Verification")
            .notNull(),
        fkEventsTagsId: bigint("FK_EventsTagsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
        qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
        lname: varchar("LName", { length: 100 }).default("").notNull(),
        fname: varchar("FName", { length: 100 }).default("").notNull(),
        mname: varchar("MName", { length: 100 }).default("").notNull(),
        suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        bdate: date("BDate", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        fkRegionId: bigint("FK_RegionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesId: bigint("FK_CitiesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesId: bigint("FK_ProvincesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesId: bigint("FK_CountriesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
        fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
        zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
        dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
        addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
        barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
        fkRegionIdM: bigint("FK_RegionID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesIdM: bigint("FK_CitiesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesIdM: bigint("FK_ProvincesID_M", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesIdM: bigint("FK_CountriesID_M", {
            mode: "number",
            unsigned: true,
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
        prcDateIssued: date("PRCDateIssued", { mode: "date" })
            .default(new Date("1000-01-01"))
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
        membershipDateReg: date("MembershipDateReg", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fkTxnVenueId: bigint("FK_TxnVenueID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
            .default("0.00")
            .notNull(),
        controlNo: varchar("ControlNo", { length: 20 }).default(""),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcRegDate: date("PRCRegDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        prcExpDate: date("PRCExpDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        sector: mysqlEnum("Sector", [
            "Academe",
            "Government",
            "Private Practice",
            "Private Corporation",
        ]).notNull(),
        agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
        agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
        isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
        isVip: smallint("IsVIP", { unsigned: true }).notNull(),
        isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
        isGmm: smallint("IsGMM").notNull(),
        isKit: smallint("IsKIT", { unsigned: true }).notNull(),
        appType: varchar("AppType", { length: 100 }).default("").notNull(),
        srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
        pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
        area: char("Area", { length: 50 }).default("").notNull(),
        uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .default(new Date("0000-00-00 00:00:00"))
            .notNull(),
    },
);

export const userProfilesCopy = mysqlTable("UserProfiles_copy", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("Pending")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userProfilesCopy0728 = mysqlTable("UserProfiles_copy0728", {
    pkUserProfilesId: bigint("PK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserProfilesFlag: mysqlEnum("AK_UserProfilesFlag", [
        "Deceased",
        "Deleted",
        "For Verification",
        "Pending",
        "Verified",
    ])
        .default("For Verification")
        .notNull(),
    fkEventsTagsId: bigint("FK_EventsTagsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    rfidNo: varchar("RFIDNo", { length: 25 }).default("").notNull(),
    qrCode: varchar("QRCode", { length: 25 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    mname: varchar("MName", { length: 100 }).default("").notNull(),
    suffix: varchar("Suffix", { length: 100 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
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
    fkRegionId: bigint("FK_RegionID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesId: bigint("FK_CitiesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesId: bigint("FK_ProvincesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesId: bigint("FK_CountriesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCityId: bigint("FK_CityID", { mode: "number" }).notNull(),
    fkProvId: bigint("FK_ProvID", { mode: "number" }).notNull(),
    zipCode: varchar("ZipCode", { length: 10 }).default("").notNull(),
    dupAddress: smallint("DupAddress", { unsigned: true }).notNull(),
    addressM: varchar("Address_M", { length: 255 }).default("").notNull(),
    barangayM: varchar("Barangay_M", { length: 100 }).default("").notNull(),
    fkRegionIdM: bigint("FK_RegionID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCitiesIdM: bigint("FK_CitiesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkProvincesIdM: bigint("FK_ProvincesID_M", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkCountriesIdM: bigint("FK_CountriesID_M", {
        mode: "number",
        unsigned: true,
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
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcDateIssued: date("PRCDateIssued", { mode: "date" })
        .default(new Date("1000-01-01"))
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
    membershipDateReg: date("MembershipDateReg", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipValidity: date("MembershipValidity", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    membershipDateUpdated: date("MembershipDateUpdated", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    fkTxnVenueId: bigint("FK_TxnVenueID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    orAmount: decimal("ORAmount", { precision: 10, scale: 2 })
        .default("0.00")
        .notNull(),
    fkLicenseTypeId: bigint("FK_LicenseTypeID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    prcSeqNo: varchar("PRCSeqNo", { length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcRegDate: date("PRCRegDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    prcExpDate: date("PRCExpDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
    sector: mysqlEnum("Sector", [
        "Academe",
        "Government",
        "Private Practice",
        "Private Corporation",
    ]).notNull(),
    agreementRfid: smallint("AgreementRFID", { unsigned: true }).notNull(),
    agreementDpa: smallint("AgreementDPA", { unsigned: true }).notNull(),
    isDeceased: smallint("IsDeceased", { unsigned: true }).notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
    isEligible: smallint("IsEligible", { unsigned: true }).notNull(),
    isKit: smallint("IsKIT", { unsigned: true }).notNull(),
    appType: varchar("AppType", { length: 100 }).default("").notNull(),
    srctznId: varchar("SRCTZN_ID", { length: 50 }).default("").notNull(),
    pwdId: varchar("PWD_ID", { length: 50 }).default("").notNull(),
    area: char("Area", { length: 50 }).default("").notNull(),
    uapNo: char("UAPNo", { length: 50 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const userRenewHistory = mysqlTable(
    "UserRenewHistory",
    {
        pkUserRenewHistoryId: bigint("PK_UserRenewHistoryID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        pkUserProfilesId: bigint("PK_UserProfilesID", {
            mode: "number",
        }).notNull(),
        chapter: varchar("Chapter", { length: 100 }).default("").notNull(),
        region: varchar("Region", { length: 100 }).default("").notNull(),
        address: varchar("Address", { length: 255 }).default("").notNull(),
        barangay: varchar("Barangay", { length: 100 }).default("").notNull(),
        fkRegionId: bigint("FK_RegionID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCitiesId: bigint("FK_CitiesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkProvincesId: bigint("FK_ProvincesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkCountriesId: bigint("FK_CountriesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        memberType: mysqlEnum("MemberType", [
            "Auxiliary",
            "Associate",
            "Fellow",
            "LIfe",
            "Regular",
            "Senior",
            "NewMember",
            "NewBoard",
        ])
            .default("Regular")
            .notNull(),
        membershipNo: varchar("MembershipNo", { length: 50 })
            .default("0")
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        membershipValidity: date("MembershipValidity", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        fkLicenseTypeId: bigint("FK_LicenseTypeID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("id").on(table.pkUserRenewHistoryId),
        primaryKey({
            columns: [table.pkUserRenewHistoryId],
            name: "UserRenewHistory_PK_UserRenewHistoryID",
        }),
    ],
);

export const userRequests = mysqlTable(
    "UserRequests",
    {
        pkUserRequestsId: bigint("PK_UserRequestsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        fkFeesId: bigint("FK_FeesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        hasCpdCert: smallint("HasCPDCert", { unsigned: true }).notNull(),
        fkShippingTypesId: bigint("FK_ShippingTypesID", {
            mode: "number",
            unsigned: true,
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
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        transactionStatus: smallint("TransactionStatus", {
            unsigned: true,
        }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("otchistory").on(table.fkOtcHistoryId),
        index("accountid").on(table.akUserAccountsId),
        index("name").on(table.fullName),
        index("feeid").on(table.fkFeesId),
        primaryKey({
            columns: [table.pkUserRequestsId],
            name: "UserRequests_PK_UserRequestsID",
        }),
    ],
);

export const userRequestsAtch = mysqlTable(
    "UserRequestsAtch",
    {
        pkUserRequestsAtchId: bigint("PK_UserRequestsAtchID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserRequestsId: bigint("FK_UserRequestsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserRequestsAtchId],
            name: "UserRequestsAtch_PK_UserRequestsAtchID",
        }),
    ],
);

export const userRequestsTrail = mysqlTable(
    "UserRequestsTrail",
    {
        pkUserRequestsTrailId: bigint("PK_UserRequestsTrailID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserRequestsId: bigint("FK_UserRequestsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkOtcHistoryId: bigint("FK_OTCHistoryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fullName: varchar("FullName", { length: 255 }).default("").notNull(),
        fkFeesId: bigint("FK_FeesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        hasCpdCert: smallint("HasCPDCert", { unsigned: true }).notNull(),
        fkShippingTypesId: bigint("FK_ShippingTypesID", {
            mode: "number",
            unsigned: true,
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
        orDate: date("ORDate", { mode: "date" })
            .default(new Date("1000-01-01"))
            .notNull(),
        transactionStatus: smallint("TransactionStatus", {
            unsigned: true,
        }).notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("userrequestsid").on(table.fkUserRequestsId),
        index("otchistory").on(table.fkOtcHistoryId),
        index("requestsid").on(table.fkUserRequestsId),
        index("history").on(table.fkOtcHistoryId),
        primaryKey({
            columns: [table.pkUserRequestsTrailId],
            name: "UserRequestsTrail_PK_UserRequestsTrailID",
        }),
    ],
);

export const userSeminars = mysqlTable(
    "UserSeminars",
    {
        pkUserSeminarsId: bigint("PK_UserSeminarsID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        akUserAccountsId: bigint("AK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        fkSeminarsSummaryId: bigint("FK_SeminarsSummaryID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        isPaid: smallint("IsPaid", { unsigned: true }).notNull(),
        isVip: smallint("IsVip").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 50 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
        qrcode: varchar({ length: 30 }).notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserSeminarsId],
            name: "UserSeminars_PK_UserSeminarsID",
        }),
    ],
);

export const userSignatures = mysqlTable(
    "UserSignatures",
    {
        pkUserImagesId: bigint("PK_UserImagesID", {
            mode: "number",
            unsigned: true,
        })
            .autoincrement()
            .notNull(),
        fkUserProfilesId: bigint("FK_UserProfilesID", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        path: varchar("Path", { length: 255 }).default("").notNull(),
        nameOrif: varchar("NameORIF", { length: 255 }).default("").notNull(),
        sizeOrif: int("SizeORIF").default(0).notNull(),
        contentType: varchar("ContentType", { length: 15 })
            .default("")
            .notNull(),
        remarks: varchar("Remarks", { length: 255 }).default("").notNull(),
        fkUserAccountsId: bigint("FK_UserAccountsID", {
            mode: "number",
            unsigned: true,
        })
            .default(1)
            .notNull(),
        editedBy: bigint("EditedBy", {
            mode: "number",
            unsigned: true,
        }).notNull(),
        editedWhen: datetime("EditedWhen", { mode: "date" })
            .default(new Date("1000-01-01 00:00:00"))
            .notNull(),
        isRestricted: smallint("IsRestricted", { unsigned: true })
            .default(1)
            .notNull(),
        isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
        stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
        timestamp: timestamp("Timestamp", { mode: "date" })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.pkUserImagesId],
            name: "UserSignatures_PK_UserImagesID",
        }),
    ],
);

export const vip = mysqlTable("VIP", {
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fkUserProfilesId: bigint("FK_UserProfilesID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fname: varchar("FName", { length: 100 }).default("").notNull(),
    lname: varchar("LName", { length: 100 }).default("").notNull(),
    position: varchar("POSITION", { length: 100 }).default("").notNull(),
    fkUserAccountsId: bigint("FK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    editedBy: bigint("EditedBy", { mode: "number", unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" }).default(
        new Date("1000-01-01 00:00:00"),
    ),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
});

export const employment = mysqlTable(
    "employment",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        companyName: varchar({ length: 100 }),
        companyAddress: text(),
        position: varchar({ length: 100 }),
        specialization: text(),
        companyFax: varchar({ length: 100 }),
        companyTelNumber: varchar({ length: 100 }),
        companyMobileNumber: varchar({ length: 100 }),
        companyEmail: varchar({ length: 100 }),
        websiteUrl: varchar({ length: 100 }),
        dateCreated: datetime({ mode: "date" }).notNull(),
        dateUpdated: datetime({ mode: "date" }),
    },
    (table) => [
        index("memberNumber_2").on(table.memberNumber),
        primaryKey({ columns: [table.id], name: "employment_id" }),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ],
);

export const members = mysqlTable(
    "members",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        firstName: varchar({ length: 100 }).notNull(),
        middleName: varchar({ length: 100 }),
        lastName: varchar({ length: 100 }).notNull(),
        suffixName: varchar({ length: 100 }),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        birthdate: date({ mode: "date" }),
        gender: varchar({ length: 100 }),
        maritalStatusId: varchar({ length: 100 }),
        nationalityId: varchar({ length: 100 }),
        houseNumber: text(),
        streetName: text(),
        barangay: text(),
        province: text(),
        city: text(),
        zipCode: varchar({ length: 100 }),
        countryCode: varchar({ length: 2 }).default("PH"),
        mobileNumber: varchar({ length: 100 }),
        email: varchar({ length: 100 }),
        password: varchar({ length: 100 }),
        dateCreated: datetime({ mode: "date" }).notNull(),
        dateUpdated: datetime({ mode: "date" }),
    },
    (table) => [
        index("firstName").on(table.firstName),
        index("middleName").on(table.middleName),
        index("lastName").on(table.lastName),
        primaryKey({ columns: [table.id], name: "members_id" }),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ],
);

export const members0618 = mysqlTable(
    "members_0618",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        firstName: varchar({ length: 100 }).notNull(),
        middleName: varchar({ length: 100 }),
        lastName: varchar({ length: 100 }).notNull(),
        suffixName: varchar({ length: 100 }),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        birthdate: date({ mode: "date" }),
        gender: varchar({ length: 100 }),
        maritalStatusId: varchar({ length: 100 }),
        nationalityId: varchar({ length: 100 }),
        houseNumber: text(),
        streetName: text(),
        barangay: text(),
        province: text(),
        city: text(),
        zipCode: varchar({ length: 100 }),
        countryCode: varchar({ length: 2 }).default("PH"),
        mobileNumber: varchar({ length: 100 }),
        email: varchar({ length: 100 }),
        password: varchar({ length: 100 }),
        dateCreated: datetime({ mode: "date" }).notNull(),
        dateUpdated: datetime({ mode: "date" }),
    },
    (table) => [
        index("firstName").on(table.firstName),
        index("middleName").on(table.middleName),
        index("lastName").on(table.lastName),
        primaryKey({ columns: [table.id], name: "members_0618_id" }),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ],
);

export const membership = mysqlTable(
    "membership",
    {
        id: bigint({ mode: "number" }).autoincrement().notNull(),
        memberNumber: bigint({ mode: "number" }).notNull(),
        licenseTypeId: varchar({ length: 100 }),
        licenseNumber: varchar({ length: 100 }),
        membershipTypeId: varchar({ length: 100 }),
        membershipNumber: varchar({ length: 100 }),
        regionId: varchar({ length: 100 }),
        chapterId: varchar({ length: 100 }),
        reckey: varchar({ length: 100 }),
        statusId: varchar({ length: 1 }).default("1"),
        insuranceTypeId: varchar({ length: 1 }).default("1"),
        remarks: text(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateRegistered: date({ mode: "date" }),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        dateExpired: date({ mode: "date" }),
        dateCreated: datetime({ mode: "date" }),
        dateUpdated: datetime({ mode: "date" }),
        cloneDate09142018: datetime({ mode: "date" }),
    },
    (table) => [
        index("memberNumber_2").on(table.memberNumber),
        index("licenseTypeId").on(table.licenseTypeId),
        index("licenseNumber").on(table.licenseNumber),
        index("membershipNumber").on(table.membershipNumber),
        index("regionId").on(table.regionId),
        index("chapterId").on(table.chapterId),
        primaryKey({ columns: [table.id], name: "membership_id" }),
        unique("id").on(table.id),
        unique("memberNumber").on(table.memberNumber),
    ],
);

export const sqlmapfile = mysqlTable("sqlmapfile", {
    // Warning: Can't parse longblob from database
    // longblobType: longblob("data"),
});

export const sqlmapoutput = mysqlTable("sqlmapoutput", {
    data: longtext(),
});
export const viewOtcDetails = mysqlView("View_OTC_Details", {
    pkOtcHistoryId: bigint("PK_OTCHistoryID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fullName: varchar("FullName", { length: 255 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orDate: date("ORDate", { mode: "date" })
        .default(new Date("1000-01-01"))
        .notNull(),
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
    envr: smallint("Envr", { unsigned: true }).notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("1000-01-01 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 10 }).default("").notNull(),
    timestamp: timestamp("Timestamp", { mode: "date" }).defaultNow().notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select \`c\`.\`PK_OTCHistoryID\` AS \`PK_OTCHistoryID\`,\`c\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,\`c\`.\`FullName\` AS \`FullName\`,\`c\`.\`ORNo\` AS \`ORNo\`,\`c\`.\`ORDate\` AS \`ORDate\`,\`c\`.\`TxnParams\` AS \`TxnParams\`,\`c\`.\`TxnType\` AS \`TxnType\`,\`c\`.\`RefNo\` AS \`RefNo\`,\`c\`.\`TxnID\` AS \`TxnID\`,\`c\`.\`Amount\` AS \`Amount\`,\`c\`.\`Description\` AS \`Description\`,\`c\`.\`CCY\` AS \`CCY\`,\`c\`.\`Email\` AS \`Email\`,\`c\`.\`Status\` AS \`Status\`,\`c\`.\`Digest\` AS \`Digest\`,\`c\`.\`Envr\` AS \`Envr\`,\`c\`.\`EditedWhen\` AS \`EditedWhen\`,\`c\`.\`IsRestricted\` AS \`IsRestricted\`,\`c\`.\`IsActive\` AS \`IsActive\`,\`c\`.\`Stamp\` AS \`Stamp\`,\`c\`.\`Timestamp\` AS \`Timestamp\` from \`EVENTS-CI\`.\`OTCHistory\` \`c\``,
    );

export const viewOtcHistory = mysqlView("View_OTC_History", {
    lastInsertedId: decimal("LastInsertedID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    prcNo: varchar("PRCNo", { length: 50 }).default("").notNull(),
    chapter: varchar("Chapter", { length: 100 }).default("").notNull(),
    pkOtcHistoryId: decimal("PK_OTCHistoryID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    fullName: varchar("FullName", { length: 303 }).default("").notNull(),
    orNo: varchar("ORNo", { length: 25 }).default("").notNull(),
    orDate: varchar("ORDate", { length: 10 }).default("").notNull(),
    txnParams: text("TxnParams"),
    fkEventsId: decimal("FK_EventsID", { precision: 20, scale: 0 })
        .default("0")
        .notNull(),
    txnType: varchar("TxnType", { length: 6 }).default("").notNull(),
    refNo: varchar("RefNo", { length: 25 }).default("").notNull(),
    txnId: varchar("TxnID", { length: 25 }).default("").notNull(),
    amount: decimal("Amount", { precision: 32, scale: 2 }),
    description: text("Description").notNull(),
    ccy: varchar("CCY", { length: 3 }).default("").notNull(),
    email: varchar("Email", { length: 100 }).default("").notNull(),
    status: varchar("Status", { length: 1 }).default("").notNull(),
    digest: varchar("Digest", { length: 50 }).default("").notNull(),
    envr: varchar("Envr", { length: 5 }).default("").notNull(),
    editedWhen: datetime("EditedWhen", { mode: "date" })
        .default(new Date("0000-00-00 00:00:00"))
        .notNull(),
    isRestricted: smallint("IsRestricted", { unsigned: true }).notNull(),
    isActive: smallint("IsActive", { unsigned: true }).default(1).notNull(),
    stamp: varchar("Stamp", { length: 21 }).default("").notNull(),
    timestamp: datetime("Timestamp", { mode: "date" })
        .default(new Date("0000-00-00 00:00:00"))
        .notNull(),
    isVip: smallint("IsVIP", { unsigned: true }).notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select ifnull(\`vol\`.\`LastInsertedID\`,0) AS \`LastInsertedID\`,\`up\`.\`PRCNo\` AS \`PRCNo\`,\`up\`.\`Chapter\` AS \`Chapter\`,ifnull(\`vol\`.\`LastInsertedID\`,0) AS \`PK_OTCHistoryID\`,\`us\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,concat(trim(\`up\`.\`LName\`),', ',trim(\`up\`.\`FName\`),' ',trim(\`up\`.\`MName\`)) AS \`FullName\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`ORNo\`,'') AS \`ORNo\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`ORDate\`,'') AS \`ORDate\`,group_concat(\`us\`.\`FK_SeminarsSummaryID\` order by \`us\`.\`FK_SeminarsSummaryID\` ASC separator ',') AS \`TxnParams\`,ifnull(\`ss\`.\`FK_EventsID\`,0) AS \`FK_EventsID\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`TxnType\`,'CASH') AS \`TxnType\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`RefNo\`,'') AS \`RefNo\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`TxnID\`,'') AS \`TxnID\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Amount\`,sum(\`ss\`.\`Amount\`)) AS \`Amount\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Description\`,concat('CASH - ',\`up\`.\`PRCNo\`,' - ',trim(\`up\`.\`LName\`),', ',trim(\`up\`.\`FName\`),' ',trim(\`up\`.\`MName\`),' - ',ifnull(\`c\`.\`Description\`,''))) AS \`Description\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`CCY\`,'PHP') AS \`CCY\`,\`ua\`.\`Email\` AS \`Email\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Status\`,'P') AS \`Status\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Digest\`,'0') AS \`Digest\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Envr\`,'1') AS \`Envr\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`EditedWhen\`,now()) AS \`EditedWhen\`,\`us\`.\`IsRestricted\` AS \`IsRestricted\`,\`us\`.\`IsActive\` AS \`IsActive\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Stamp\`,unix_timestamp()) AS \`Stamp\`,ifnull(\`EVENTS-CI\`.\`vod\`.\`Timestamp\`,now()) AS \`Timestamp\`,\`up\`.\`IsVIP\` AS \`IsVIP\` from (((((((\`EVENTS-CI\`.\`UserSeminars\` \`us\` join \`EVENTS-CI\`.\`SeminarsSummary\` \`ss\` on((\`ss\`.\`PK_SeminarsSummaryID\` = \`us\`.\`FK_SeminarsSummaryID\`))) left join \`EVENTS-CI\`.\`View_OTC_LastInsertedID\` \`vol\` on(((\`vol\`.\`AK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\`) and (\`vol\`.\`FK_EventsID\` = ifnull(\`ss\`.\`FK_EventsID\`,0))))) left join \`EVENTS-CI\`.\`View_OTC_Details\` \`vod\` on(((\`EVENTS-CI\`.\`vod\`.\`AK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\`) and (\`EVENTS-CI\`.\`vod\`.\`PK_OTCHistoryID\` = \`vol\`.\`LastInsertedID\`)))) left join \`EVENTS-CI\`.\`Events\` \`ev\` on(((\`ev\`.\`PK_EventsID\` = \`ss\`.\`FK_EventsID\`) and (\`ev\`.\`IsActive\` = 1)))) join \`EVENTS-CI\`.\`UserAccounts\` \`ua\` on((\`ua\`.\`PK_UserAccountsID\` = \`us\`.\`AK_UserAccountsID\`))) join \`EVENTS-CI\`.\`UserProfiles\` \`up\` on((\`up\`.\`PK_UserProfilesID\` = \`ua\`.\`FK_UserProfilesID\`))) left join \`EVENTS-CI\`.\`Chapters\` \`c\` on((\`c\`.\`PK_ChaptersID\` = \`up\`.\`Chapter\`))) where (\`ev\`.\`IsActive\` = '1') group by \`vol\`.\`LastInsertedID\`,\`up\`.\`PRCNo\`,\`up\`.\`Chapter\`,\`us\`.\`AK_UserAccountsID\`,\`up\`.\`LName\`,\`up\`.\`FName\`,\`up\`.\`MName\`,\`ss\`.\`FK_EventsID\`,\`ua\`.\`Email\`,\`us\`.\`IsRestricted\`,\`us\`.\`IsActive\`,\`up\`.\`IsVIP\``,
    );

export const viewOtcLastInsertedId = mysqlView("View_OTC_LastInsertedID", {
    akUserAccountsId: bigint("AK_UserAccountsID", {
        mode: "number",
        unsigned: true,
    }).notNull(),
    lastInsertedId: bigint("LastInsertedID", {
        mode: "number",
        unsigned: true,
    }),
    fkEventsId: bigint("FK_EventsID", { mode: "number" }).notNull(),
})
    .algorithm("undefined")
    .sqlSecurity("definer")
    .as(
        sql`select \`oh\`.\`AK_UserAccountsID\` AS \`AK_UserAccountsID\`,max(\`oh\`.\`PK_OTCHistoryID\`) AS \`LastInsertedID\`,ifnull((select \`s\`.\`FK_EventsID\` from \`EVENTS-CI\`.\`Seminars\` \`s\` where (0 <> find_in_set(\`s\`.\`PK_SeminarsID\`,\`oh\`.\`TxnParams\`)) limit 1),0) AS \`FK_EventsID\` from \`EVENTS-CI\`.\`OTCHistory\` \`oh\` where (ifnull(\`oh\`.\`TxnParams\`,'') <> '') group by \`oh\`.\`AK_UserAccountsID\`,ifnull((select \`s\`.\`FK_EventsID\` from \`EVENTS-CI\`.\`Seminars\` \`s\` where (0 <> find_in_set(\`s\`.\`PK_SeminarsID\`,\`oh\`.\`TxnParams\`)) limit 1),0)`,
    );
