CREATE TABLE `001_2024_national_election` (
	`PK_TmpID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EmailAuthID` bigint NOT NULL,
	`TokenUsed` varchar(32) NOT NULL DEFAULT '',
	`SentTo` varchar(100) NOT NULL DEFAULT '',
	`Votes` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `accessgroups` (
	`PK_AccessGroupsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`FK_UsersAccountsID` bigint NOT NULL,
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `areas` (
	`PK_AreasID` int AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `ballots` (
	`PK_BallotsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`Name` varchar(100) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `booths` (
	`PK_BoothsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`FK_VenuesID` bigint NOT NULL,
	`FK_PackageID` bigint NOT NULL,
	`BoothNo` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Size` varchar(100) NOT NULL DEFAULT '',
	`Amount` int NOT NULL DEFAULT 0,
	`Abscissa` smallint NOT NULL,
	`Ordinate` smallint NOT NULL,
	`FK_ExhibitorAccountsID` bigint NOT NULL,
	`DateReserved` date NOT NULL DEFAULT '0000-00-00',
	`DaysValid` int NOT NULL DEFAULT 0,
	`DatePaid` date NOT NULL DEFAULT '0000-00-00',
	`Status` enum('NoReservation','Reserved','Extended','Approved') NOT NULL DEFAULT 'NoReservation',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `candidates` (
	`PK_CandidatesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`FK_ElectionPositionsID` bigint NOT NULL,
	`FK_UserImagesID` bigint NOT NULL,
	`Image` varchar(100) NOT NULL DEFAULT '',
	`Name` varchar(255) NOT NULL DEFAULT '',
	`FK_ChaptersID` bigint NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`IsWinner` smallint NOT NULL,
	`IsElected` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `charges` (
	`PK_ChargesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `cities` (
	`PK_CitiesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`FK_RegionID` bigint NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `cities_region` (
	`PK_RegionsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '0',
	`Description` varchar(100) NOT NULL DEFAULT '0',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `competenceareas` (
	`PK_CompetenceAreasID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`PK_CountriesID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(2) NOT NULL DEFAULT '',
	`Description` varchar(100) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `currencies` (
	`PK_CurrenciesID` int AUTO_INCREMENT NOT NULL,
	`Name` varchar(20) DEFAULT 'NULL',
	`Code` varchar(3) DEFAULT 'NULL',
	`Symbol` varchar(5) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `dragonpay` (
	`PK_DragonPayID` bigint AUTO_INCREMENT NOT NULL,
	`MerchantID` varchar(100) NOT NULL DEFAULT '',
	`MerchantPassword` varchar(255) NOT NULL DEFAULT '',
	`Envr` smallint NOT NULL,
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `duplicatethis` (
	`PK_DuplicateThisID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `election` (
	`PK_ElectionID` bigint AUTO_INCREMENT NOT NULL,
	`IsChapter` smallint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`DateFrom` date NOT NULL,
	`DateTo` date NOT NULL,
	`EndTime` time NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electionimages` (
	`PK_ElectionImagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electioninternal` (
	`PK_ElectionInternalID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`FK_CandidatesID` bigint NOT NULL,
	`FK_PositionsID` bigint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electioninternaltally` (
	`PK_ElectionInternalTallyID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`FK_CandidatesID` bigint NOT NULL,
	`FK_PositionsID` bigint NOT NULL,
	`Votes` bigint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electionpositions` (
	`PK_ElectionPositionsID` bigint AUTO_INCREMENT NOT NULL,
	`Position` varchar(100) NOT NULL DEFAULT '',
	`IsChapter` smallint NOT NULL,
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`Counter` int NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electiontally` (
	`PK_ElectionTallyID` bigint AUTO_INCREMENT NOT NULL,
	`FK_CandidatesID` bigint NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`Votes` bigint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth` (
	`PK_EmailAuthID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '',
	`SentFrom` varchar(100) NOT NULL DEFAULT '',
	`SentTo` varchar(100) NOT NULL DEFAULT '',
	`Name` varchar(100) NOT NULL DEFAULT '',
	`Subject` varchar(100) NOT NULL DEFAULT '',
	`Message` varchar(255) NOT NULL DEFAULT '',
	`Predefined` varchar(100) NOT NULL DEFAULT '',
	`Token` varchar(32) NOT NULL DEFAULT '',
	`IsSent` smallint NOT NULL,
	`IsAccessed` smallint NOT NULL,
	`IsOpened` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth_111224` (
	`PK_EmailAuthID` bigint NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '',
	`SentFrom` varchar(100) NOT NULL DEFAULT '',
	`SentTo` varchar(100) NOT NULL DEFAULT '',
	`Name` varchar(100) NOT NULL DEFAULT '',
	`Subject` varchar(100) NOT NULL DEFAULT '',
	`Message` varchar(255) NOT NULL DEFAULT '',
	`Predefined` varchar(100) NOT NULL DEFAULT '',
	`Token` varchar(32) NOT NULL DEFAULT '',
	`IsSent` smallint NOT NULL,
	`IsAccessed` smallint NOT NULL,
	`IsOpened` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth_112324` (
	`PK_EmailAuthID` bigint NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '',
	`SentFrom` varchar(100) NOT NULL DEFAULT '',
	`SentTo` varchar(100) NOT NULL DEFAULT '',
	`Name` varchar(100) NOT NULL DEFAULT '',
	`Subject` varchar(100) NOT NULL DEFAULT '',
	`Message` varchar(255) NOT NULL DEFAULT '',
	`Predefined` varchar(100) NOT NULL DEFAULT '',
	`Token` varchar(32) NOT NULL DEFAULT '',
	`IsSent` smallint NOT NULL,
	`IsAccessed` smallint NOT NULL,
	`IsOpened` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `employment` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint NOT NULL,
	`companyName` varchar(100) DEFAULT 'NULL',
	`companyAddress` text DEFAULT ('NULL'),
	`position` varchar(100) DEFAULT 'NULL',
	`specialization` text DEFAULT ('NULL'),
	`companyFax` varchar(100) DEFAULT 'NULL',
	`companyTelNumber` varchar(100) DEFAULT 'NULL',
	`companyMobileNumber` varchar(100) DEFAULT 'NULL',
	`companyEmail` varchar(100) DEFAULT 'NULL',
	`websiteUrl` varchar(100) DEFAULT 'NULL',
	`dateCreated` datetime NOT NULL,
	`dateUpdated` datetime DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`),
	CONSTRAINT `memberNumber` UNIQUE(`memberNumber`)
);
--> statement-breakpoint
CREATE TABLE `evalcategories` (
	`PK_EvalCategoriesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EvalTypeID` bigint NOT NULL,
	`MemType` enum('exhibitor','comitee','member','finance','committee'),
	`Description` varchar(255) NOT NULL DEFAULT '',
	`SeqNo` int NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `evaldetails` (
	`PK_EvalDetailsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EvalCategoriesID` bigint NOT NULL,
	`Description` varchar(255) NOT NULL DEFAULT '',
	`SeqNo` int NOT NULL DEFAULT 0,
	`IsEssay` smallint NOT NULL,
	`Percentage` char(10) DEFAULT '0',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `evaltype` (
	`PK_EvalTypeID` bigint AUTO_INCREMENT NOT NULL,
	`Type` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `events` (
	`PK_EventsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_DragonPayID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`DateFrom` date NOT NULL DEFAULT '1000-01-01',
	`DateTo` date NOT NULL DEFAULT '1000-01-01',
	`Email` varchar(255) NOT NULL DEFAULT '',
	`RegEmail` varchar(255) NOT NULL DEFAULT '',
	`AccountNo` varchar(255) NOT NULL DEFAULT '',
	`AccountName` varchar(255) NOT NULL DEFAULT '',
	`ContactInfo` varchar(255) DEFAULT '',
	`AvRsvn` smallint NOT NULL,
	`ZoomURL` varchar(100) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`IsDeleted` smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `eventsimages` (
	`PK_EventsImagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `eventstags` (
	`PK_EventsTagsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitoraccounts` (
	`PK_ExhibitorAccountsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorProfilesID` bigint NOT NULL,
	`Username` varchar(100) NOT NULL DEFAULT '',
	`Password` char(128) NOT NULL DEFAULT '',
	`Salt` char(128) NOT NULL DEFAULT '',
	`FK_UserControlID` bigint NOT NULL,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '',
	`AK_UserAccountsType` enum('ADMIN','EXHIBITOR') NOT NULL DEFAULT 'EXHIBITOR',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
	`IsMailSent` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`Username`,`PK_ExhibitorAccountsID`)
);
--> statement-breakpoint
CREATE TABLE `exhibitorevents` (
	`PK_ExhibitorEventsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`FK_PackagesID` bigint NOT NULL,
	`FK_BoothsID` bigint NOT NULL,
	`NoAttendees` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TxnType` enum('CASH','CHECK') NOT NULL DEFAULT 'CASH',
	`Status` enum('S','P','F') NOT NULL DEFAULT 'P',
	`IsPaid` smallint NOT NULL,
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CCY` enum('PHP') NOT NULL DEFAULT 'PHP',
	`Flag` enum('Approved','Pending','Declined') NOT NULL DEFAULT 'Pending',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorfollowers` (
	`PK_ExhibitorFollowersID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`DateLogged` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorimages` (
	`PK_ExhibitorImagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorprofiles` (
	`PK_ExhibitorProfilesID` bigint AUTO_INCREMENT NOT NULL,
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`CompanyName` varchar(255) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`FK_CitiesID` int NOT NULL DEFAULT 0,
	`State` varchar(100) NOT NULL DEFAULT '',
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`ContactPerson` varchar(255) NOT NULL DEFAULT '',
	`Website` varchar(255) NOT NULL DEFAULT '',
	`Description` text NOT NULL,
	`FK_ProductTypeID` bigint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `fees` (
	`PK_FeesID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`IsCurrentYear` smallint NOT NULL,
	`ChargeOnce` smallint NOT NULL,
	`LicenseType` char(10) NOT NULL,
	`MemberType` varchar(255) NOT NULL DEFAULT '',
	`EffectivityDate` date NOT NULL DEFAULT '1000-01-01',
	`IsCPApproval` smallint NOT NULL,
	`EXP` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `groupings` (
	`PK_GroupingsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `guestaccounts` (
	`PK_GuestAccountsID` bigint AUTO_INCREMENT NOT NULL,
	`Username` varchar(30) NOT NULL DEFAULT '',
	`Password` char(128) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(50) NOT NULL DEFAULT '',
	`Salt` char(128) NOT NULL DEFAULT '',
	`Flag` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
	`Token` varchar(32) NOT NULL DEFAULT '',
	`IsMailSent` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`Username`,`PK_GuestAccountsID`)
);
--> statement-breakpoint
CREATE TABLE `licensetype` (
	`PK_LicenseTypeID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`SeqNo` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `loginattempts` (
	`PK_LoginAttemptsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`MachineNo` varchar(255) NOT NULL DEFAULT '',
	`PrivateIP` varchar(15) NOT NULL DEFAULT '000.000.000.000',
	`PublicIP` varchar(15) NOT NULL DEFAULT '000.000.000.000',
	`BroadcastedIP` varchar(15) NOT NULL DEFAULT '000.000.000.000',
	`Hostname` varchar(100) NOT NULL DEFAULT '',
	`City` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Country` varchar(10) NOT NULL DEFAULT 'PH',
	`Loc` varchar(100) NOT NULL DEFAULT '',
	`Postal` varchar(10) NOT NULL DEFAULT '',
	`Org` varchar(255) NOT NULL DEFAULT '',
	`Bogon` smallint NOT NULL,
	`AK_LoginAttemptsStatus` enum('fail','success') NOT NULL DEFAULT 'fail',
	`AcctType` enum('GENERAL','EXHIBITOR') NOT NULL DEFAULT 'GENERAL',
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `members` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`middleName` varchar(100) DEFAULT 'NULL',
	`lastName` varchar(100) NOT NULL,
	`suffixName` varchar(100) DEFAULT 'NULL',
	`birthdate` date DEFAULT 'NULL',
	`gender` varchar(100) DEFAULT 'NULL',
	`maritalStatusId` varchar(100) DEFAULT 'NULL',
	`nationalityId` varchar(100) DEFAULT 'NULL',
	`houseNumber` text DEFAULT ('NULL'),
	`streetName` text DEFAULT ('NULL'),
	`barangay` text DEFAULT ('NULL'),
	`province` text DEFAULT ('NULL'),
	`city` text DEFAULT ('NULL'),
	`zipCode` varchar(100) DEFAULT 'NULL',
	`countryCode` varchar(2) DEFAULT 'PH',
	`mobileNumber` varchar(100) DEFAULT 'NULL',
	`email` varchar(100) DEFAULT 'NULL',
	`password` varchar(100) DEFAULT 'NULL',
	`dateCreated` datetime NOT NULL,
	`dateUpdated` datetime DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`),
	CONSTRAINT `memberNumber` UNIQUE(`memberNumber`)
);
--> statement-breakpoint
CREATE TABLE `members_0618` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`middleName` varchar(100) DEFAULT 'NULL',
	`lastName` varchar(100) NOT NULL,
	`suffixName` varchar(100) DEFAULT 'NULL',
	`birthdate` date DEFAULT 'NULL',
	`gender` varchar(100) DEFAULT 'NULL',
	`maritalStatusId` varchar(100) DEFAULT 'NULL',
	`nationalityId` varchar(100) DEFAULT 'NULL',
	`houseNumber` text DEFAULT ('NULL'),
	`streetName` text DEFAULT ('NULL'),
	`barangay` text DEFAULT ('NULL'),
	`province` text DEFAULT ('NULL'),
	`city` text DEFAULT ('NULL'),
	`zipCode` varchar(100) DEFAULT 'NULL',
	`countryCode` varchar(2) DEFAULT 'PH',
	`mobileNumber` varchar(100) DEFAULT 'NULL',
	`email` varchar(100) DEFAULT 'NULL',
	`password` varchar(100) DEFAULT 'NULL',
	`dateCreated` datetime NOT NULL,
	`dateUpdated` datetime DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`),
	CONSTRAINT `memberNumber` UNIQUE(`memberNumber`)
);
--> statement-breakpoint
CREATE TABLE `membership` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint NOT NULL,
	`licenseTypeId` varchar(100) DEFAULT 'NULL',
	`licenseNumber` varchar(100) DEFAULT 'NULL',
	`membershipTypeId` varchar(100) DEFAULT 'NULL',
	`membershipNumber` varchar(100) DEFAULT 'NULL',
	`regionId` varchar(100) DEFAULT 'NULL',
	`chapterId` varchar(100) DEFAULT 'NULL',
	`reckey` varchar(100) DEFAULT 'NULL',
	`statusId` varchar(1) DEFAULT '1',
	`insuranceTypeId` varchar(1) DEFAULT '1',
	`remarks` text DEFAULT ('NULL'),
	`dateRegistered` date DEFAULT 'NULL',
	`dateExpired` date DEFAULT 'NULL',
	`dateCreated` datetime DEFAULT 'NULL',
	`dateUpdated` datetime DEFAULT 'NULL',
	`cloneDate09142018` datetime DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`),
	CONSTRAINT `memberNumber` UNIQUE(`memberNumber`)
);
--> statement-breakpoint
CREATE TABLE `membersseries` (
	`PK_MembersSeriesID` bigint AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint NOT NULL DEFAULT 1,
	`Prefix` char(2) NOT NULL DEFAULT 'RG',
	`SeriesStart` int NOT NULL DEFAULT 0,
	`SeriesEnd` int NOT NULL DEFAULT 0,
	`CurrentNo` int NOT NULL DEFAULT 0,
	`Type` enum('Senior','Regular','Life','Fellow','Auxiliary','Honorary'),
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `officers` (
	`PK_OfficersID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Position` enum('National','Regional','Chapter') NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `orseries` (
	`PK_ORSeriesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_CounterID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`SeqNo` smallint NOT NULL DEFAULT 1,
	`SeriesStart` int NOT NULL DEFAULT 0,
	`SeriesEnd` int NOT NULL DEFAULT 0,
	`CurrentNo` int NOT NULL DEFAULT 0,
	`Type` enum('C','D','CM','DM') NOT NULL DEFAULT 'C',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otchistory` (
	`PK_OTCHistoryID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FullName` varchar(255) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TxnParams` varchar(255) NOT NULL DEFAULT '',
	`TxnType` enum('CASH','CHECK','OTC','PAYPAL','GARMIN') NOT NULL DEFAULT 'CASH',
	`RefNo` varchar(25) NOT NULL DEFAULT '',
	`TxnID` varchar(25) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`CCY` enum('PHP') NOT NULL DEFAULT 'PHP',
	`Email` varchar(50) NOT NULL DEFAULT '',
	`Status` enum('S','P','F') NOT NULL DEFAULT 'P',
	`Digest` varchar(50) NOT NULL DEFAULT '',
	`Envr` smallint NOT NULL,
	`IsRequest` smallint NOT NULL,
	`IsProcessed` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otchistory_copy` (
	`PK_OTCHistoryID` bigint NOT NULL,
	`FK_UserRequestsID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FullName` varchar(255) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TxnParams` varchar(255) NOT NULL DEFAULT '',
	`TxnType` enum('CASH','CHECK','OTC','PAYPAL','GARMIN') NOT NULL DEFAULT 'CASH',
	`RefNo` varchar(25) NOT NULL DEFAULT '',
	`TxnID` varchar(25) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`CCY` enum('PHP') NOT NULL DEFAULT 'PHP',
	`Email` varchar(50) NOT NULL DEFAULT '',
	`Status` enum('S','P','F') NOT NULL DEFAULT 'P',
	`Digest` varchar(50) NOT NULL DEFAULT '',
	`Envr` smallint NOT NULL,
	`IsRequest` smallint NOT NULL,
	`IsProcessed` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otcresponse` (
	`PK_OTCResponseID` bigint AUTO_INCREMENT NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TxnType` varchar(50) NOT NULL DEFAULT '',
	`RefNo` varchar(25) NOT NULL DEFAULT '',
	`TxnID` varchar(50) NOT NULL DEFAULT '',
	`Status` enum('S','P','F') NOT NULL DEFAULT 'P',
	`Digest` varchar(50) NOT NULL DEFAULT '',
	`Envr` smallint NOT NULL,
	`Action` enum('NEW','UPDATE') NOT NULL DEFAULT 'NEW',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otcseries` (
	`PK_OTCSeriesID` bigint AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint NOT NULL DEFAULT 1,
	`SeriesStart` int NOT NULL DEFAULT 0,
	`SeriesEnd` int NOT NULL DEFAULT 0,
	`CurrentNo` int NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `packages` (
	`PK_PackagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymentcopy` (
	`PK_PaymentCopyID` bigint AUTO_INCREMENT NOT NULL,
	`FK_PaymentTrailID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`PayType` smallint NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT 'CASH',
	`ORSeqNo` smallint NOT NULL,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORType` varchar(25) NOT NULL DEFAULT '',
	`DatePaid` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`CheckNo` varchar(50) NOT NULL DEFAULT '',
	`CheckDate` date NOT NULL DEFAULT '1000-01-01',
	`BankName` varchar(50) NOT NULL DEFAULT '',
	`BankBranch` varchar(100) NOT NULL DEFAULT '',
	`FK_TxnVenueID` bigint NOT NULL,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymententries` (
	`PK_PaymentEntriesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_PaymentTrailID` bigint NOT NULL,
	`Code` int NOT NULL DEFAULT 0,
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Quantity` int NOT NULL DEFAULT 1,
	`PerPiece` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`SubTotal` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymenttrail` (
	`PK_PaymentTrailID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`PayType` smallint NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT 'CASH',
	`ORSeqNo` smallint NOT NULL,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORType` varchar(25) NOT NULL DEFAULT '',
	`DatePaid` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`TransactionNo` varchar(50) NOT NULL DEFAULT '',
	`CheckNo` varchar(50) NOT NULL DEFAULT '',
	`CheckDate` date NOT NULL DEFAULT '1000-01-01',
	`BankName` varchar(50) NOT NULL DEFAULT '',
	`BankBranch` varchar(100) NOT NULL DEFAULT '',
	`FK_TxnVenueID` bigint NOT NULL,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymenttrail_copy` (
	`PK_PaymentTrailID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`PayType` smallint NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT 'CASH',
	`ORSeqNo` smallint NOT NULL,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORType` varchar(25) NOT NULL DEFAULT '',
	`DatePaid` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`TransactionNo` varchar(50) NOT NULL DEFAULT '',
	`CheckNo` varchar(50) NOT NULL DEFAULT '',
	`CheckDate` date NOT NULL DEFAULT '1000-01-01',
	`BankName` varchar(50) NOT NULL DEFAULT '',
	`BankBranch` varchar(100) NOT NULL DEFAULT '',
	`FK_TxnVenueID` bigint NOT NULL,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `positions` (
	`PK_PositionsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Category` enum('officers','governors','presidents','commitee') NOT NULL DEFAULT 'officers',
	`SeqNo` smallint NOT NULL,
	`IsOccupied` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `producttype` (
	`PK_ProductTypeID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `providers` (
	`PK_ProvidersID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `provinces` (
	`PK_Provinces` bigint AUTO_INCREMENT NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL,
	`Description` varchar(100) NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `reportsqr` (
	`PK_ReportsQRID` bigint AUTO_INCREMENT NOT NULL,
	`ReportNo` varchar(100) NOT NULL DEFAULT '',
	`Digest` char(128) NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `reportsseries` (
	`PK_ReportsSeriesID` bigint AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint NOT NULL DEFAULT 1,
	`SeriesStart` int NOT NULL DEFAULT 0,
	`SeriesEnd` int NOT NULL DEFAULT 0,
	`CurrentNo` int NOT NULL DEFAULT 0,
	`Type` enum('COGS','EPART') NOT NULL DEFAULT 'COGS',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `requests` (
	`PK_RequestsID` bigint AUTO_INCREMENT NOT NULL,
	`RequestNo` varchar(100) NOT NULL DEFAULT '',
	`Digest` char(128) NOT NULL,
	`Category` enum('Password') NOT NULL DEFAULT 'Password',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `schools` (
	`PK_SchoolsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminars` (
	`PK_SeminarsID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Activity` varchar(255) NOT NULL DEFAULT '',
	`TntvPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CPDPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EarlyBirdDate` date NOT NULL DEFAULT '1000-01-01',
	`EarlyBird` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`NonMember` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Incharge` varchar(100) NOT NULL DEFAULT '',
	`InchargeDesc` varchar(255) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`Slots` int NOT NULL DEFAULT 0,
	`SlotsTaken` int NOT NULL DEFAULT 0,
	`FK_ChaptersID` int NOT NULL DEFAULT 0,
	`FK_ProvidersID` int NOT NULL DEFAULT 0,
	`FK_EventsID` int NOT NULL DEFAULT 0,
	`FK_EventsTagsID` int NOT NULL DEFAULT 0,
	`FK_CompetenceID` int NOT NULL DEFAULT 0,
	`DateReceived` date NOT NULL DEFAULT '1000-01-01',
	`DateForwarded` date NOT NULL DEFAULT '1000-01-01',
	`DateApproved` date NOT NULL DEFAULT '1000-01-01',
	`PRCORNo` varchar(25) NOT NULL DEFAULT '',
	`FK_CurrenciesID` int NOT NULL DEFAULT 83,
	`IsCompulsory` smallint NOT NULL,
	`SeqNo` int NOT NULL DEFAULT 0,
	`BypassRegd` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminarsdetails` (
	`PK_SeminarsDetailsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint NOT NULL,
	`FK_GroupingsID` bigint NOT NULL,
	`Venue` varchar(255) NOT NULL DEFAULT '',
	`DateFrom` date NOT NULL DEFAULT '1000-01-01',
	`DateTo` date NOT NULL DEFAULT '1000-01-01',
	`StartTime` time NOT NULL DEFAULT '00:00:00',
	`EndTime` time NOT NULL DEFAULT '00:00:00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminarssignatory` (
	`PK_SeminarsSignatoryID` bigint AUTO_INCREMENT NOT NULL,
	`FK_SeminarsSummaryID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`DESIGNATION` varchar(150) NOT NULL DEFAULT '0',
	`SeqNo` char(1) NOT NULL DEFAULT '1',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`qrcode` varchar(20) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `seminarssummary` (
	`PK_SeminarsSummaryID` bigint AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint NOT NULL,
	`FK_SeminarsDetailsID` bigint NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Activity` varchar(255) NOT NULL DEFAULT '',
	`TntvPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CPDPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EarlyBirdDate` date NOT NULL DEFAULT '1000-01-01',
	`EarlyBird` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`NonMember` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Incharge` varchar(100) NOT NULL DEFAULT '',
	`InchargeDesc` varchar(255) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`Slots` int NOT NULL DEFAULT 0,
	`SlotsTaken` int NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint NOT NULL,
	`FK_ProvidersID` bigint NOT NULL,
	`FK_EventsID` bigint NOT NULL,
	`EventsCode` varchar(100) NOT NULL DEFAULT '',
	`EventsDesc` varchar(255) NOT NULL DEFAULT '',
	`EventsAmnt` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EventsDateFrom` date NOT NULL DEFAULT '1000-01-01',
	`EventsDateTo` date NOT NULL DEFAULT '1000-01-01',
	`FK_DragonPayID` bigint NOT NULL,
	`FK_EventsTagsID` bigint NOT NULL,
	`FK_CompetenceID` bigint NOT NULL,
	`DateReceived` date NOT NULL DEFAULT '1000-01-01',
	`DateForwarded` date NOT NULL DEFAULT '1000-01-01',
	`DateApproved` date NOT NULL DEFAULT '1000-01-01',
	`PRCORNo` varchar(25) NOT NULL DEFAULT '',
	`FK_CurrenciesID` int NOT NULL DEFAULT 83,
	`IsCompulsory` smallint NOT NULL,
	`SeqNo` int NOT NULL DEFAULT 0,
	`BypassRegd` smallint NOT NULL,
	`FK_GroupingsID` bigint NOT NULL,
	`Venue` varchar(255) NOT NULL DEFAULT '',
	`DateFrom` date NOT NULL DEFAULT '1000-01-01',
	`DateTo` date NOT NULL DEFAULT '1000-01-01',
	`StartTime` time NOT NULL DEFAULT '00:00:00',
	`EndTime` time NOT NULL DEFAULT '00:00:00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `shippingtypes` (
	`PK_ShippingTypesID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`IsCurrentYear` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `specialization` (
	`PK_SpecializationID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`SeqNo` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `sqlmapfile` (

);
--> statement-breakpoint
CREATE TABLE `sqlmapoutput` (
	`data` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `txnvenue` (
	`PK_TxnVenueID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '',
	`Description` varchar(255) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts_111822` (
	`PK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Username` varchar(100) NOT NULL DEFAULT '',
	`Password` char(128) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`Salt` char(128) NOT NULL DEFAULT '',
	`FK_UserControlID` bigint NOT NULL,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT 'MEMBER',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
	`IsMailSent` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts_copy` (
	`PK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Username` varchar(100) NOT NULL DEFAULT '',
	`Password` char(128) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`Salt` char(128) NOT NULL DEFAULT '',
	`FK_UserControlID` bigint NOT NULL,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT 'MEMBER',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
	`IsMailSent` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts_copy040421` (
	`PK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Username` varchar(100) NOT NULL DEFAULT '',
	`Password` char(128) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`Salt` char(128) NOT NULL DEFAULT '',
	`FK_UserControlID` bigint NOT NULL,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT 'MEMBER',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
	`IsMailSent` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userattendance` (
	`PK_UserAttendanceID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_SeminarsSummaryID` bigint NOT NULL,
	`Tag` enum('IN','OUT') NOT NULL DEFAULT 'IN',
	`DateLogged` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`ltype` varchar(150) NOT NULL,
	`email` varchar(150) NOT NULL,
	`name` varchar(255) NOT NULL,
	`prcno` varchar(15) NOT NULL,
	`company` varchar(150) NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(50) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usercertificates` (
	`PK_UserCertificatesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`CertType` varchar(100) NOT NULL DEFAULT '',
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userchangechapter` (
	`PK_UserChangeChapterID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`CurrRegion` varchar(100) NOT NULL DEFAULT '0',
	`CurrChapter` varchar(100) NOT NULL DEFAULT '0',
	`Region` varchar(100) NOT NULL DEFAULT '0',
	`Chapter` varchar(100) NOT NULL DEFAULT '0',
	`Reason` varchar(255) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`IsApproved` smallint NOT NULL,
	`Status` enum('Pending','Approved','Declined','On Process') NOT NULL DEFAULT 'Pending',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userchangechapteratch` (
	`PK_UserChangeChapterAtchID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserChangeChapterID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usercontrol` (
	`PK_UserControlID` bigint AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '',
	`IsChapter` smallint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`IsDefault` smallint NOT NULL,
	`IsExclusive` smallint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`FK_UsersAccountsID` bigint NOT NULL,
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usereducation` (
	`PK_UserEducationID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`School` varchar(255) NOT NULL DEFAULT '',
	`Degree` varchar(255) NOT NULL DEFAULT '',
	`DateGraduated` date NOT NULL,
	`Awards` varchar(255) NOT NULL DEFAULT '',
	`Level` varchar(10) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useremails` (
	`PK_UserEmailsID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_ElectionID` bigint NOT NULL,
	`FK_EmailAuthID` bigint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userexpertise` (
	`PK_UserExpertiseID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Expertise` varchar(255) NOT NULL DEFAULT '',
	`Years` varchar(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userfees` (
	`PK_UserFeesID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_FeesID` bigint NOT NULL,
	`IsPaid` smallint NOT NULL,
	`Status` enum('P','F','S') NOT NULL DEFAULT 'P',
	`ValFrom` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`ValTo` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userimages` (
	`PK_UserImagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`Category` enum('Profile','Senior','PWD') NOT NULL DEFAULT 'Profile',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userimages_copy` (
	`PK_UserImagesID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`Category` enum('Profile','Senior','PWD') NOT NULL DEFAULT 'Profile',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userlicense` (
	`PK_UserLicenseID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FK_LicenseTypeID` bigint NOT NULL DEFAULT 1,
	`RegistrationDate` date NOT NULL DEFAULT '1000-01-01',
	`ValidityDate` date NOT NULL DEFAULT '1000-01-01',
	`LicenseType` enum('RME','REE','PEE','BSEE') NOT NULL DEFAULT 'BSEE',
	`LicenseNo` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`Fname` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`IsMainID` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userlicense_copy` (
	`PK_UserLicenseID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`LicenseType` enum('RME','REE','PEE','BSEE') NOT NULL,
	`LicenseNo` varchar(50) NOT NULL DEFAULT '',
	`RegistrationDate` date NOT NULL,
	`lname` varchar(100) NOT NULL,
	`fname` varchar(150) NOT NULL,
	`mname` varchar(100) NOT NULL,
	`ValidityDate` date NOT NULL DEFAULT '1000-01-01',
	`FileLocation` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usermodules` (
	`PK_UserModulesID` bigint AUTO_INCREMENT NOT NULL,
	`ModulesGrp` int NOT NULL DEFAULT 0,
	`FK_UserModulesID` int NOT NULL DEFAULT 0,
	`Description` varchar(50) NOT NULL DEFAULT '',
	`Abbreviation` varchar(15) NOT NULL DEFAULT '',
	`Link` varchar(50) NOT NULL DEFAULT '',
	`Icon` varchar(25) NOT NULL DEFAULT '',
	`SeqNo` int NOT NULL DEFAULT 0,
	`SeqNoGrp` int NOT NULL DEFAULT 0,
	`AK_UserModulesType` enum('heading','link','separator') NOT NULL DEFAULT 'link',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userpositions` (
	`PK_UserPositionsID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FK_PositionsID` bigint NOT NULL,
	`FK_RegionsID` bigint NOT NULL,
	`FK_ChaptersID` bigint NOT NULL,
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_090723` (
	`PK_UserProfilesID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT 'For Verification',
	`FK_EventsTagsID` bigint NOT NULL,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '',
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Suffix` varchar(100) NOT NULL DEFAULT '',
	`BDate` date NOT NULL DEFAULT '1000-01-01',
	`BPlace` varchar(100) NOT NULL DEFAULT '',
	`Gender` enum('Male','Female') NOT NULL DEFAULT 'Male',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT 'Single',
	`Chapter` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`Barangay` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID` bigint NOT NULL,
	`FK_CitiesID` bigint NOT NULL,
	`FK_ProvincesID` bigint NOT NULL,
	`FK_CountriesID` bigint NOT NULL,
	`FK_CityID` bigint NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`DupAddress` smallint NOT NULL,
	`Address_M` varchar(255) NOT NULL DEFAULT '',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID_M` bigint NOT NULL,
	`FK_CitiesID_M` bigint NOT NULL,
	`FK_ProvincesID_M` bigint NOT NULL,
	`FK_CountriesID_M` bigint NOT NULL,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`FaxNo` varchar(100) NOT NULL DEFAULT '',
	`CelNo` varchar(100) NOT NULL DEFAULT '',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '0',
	`City_Bak` varchar(100) NOT NULL DEFAULT '0',
	`Industry` varchar(255) NOT NULL DEFAULT '',
	`Designation` varchar(100) NOT NULL DEFAULT '',
	`Profession` varchar(255) NOT NULL DEFAULT '',
	`Company` varchar(255) NOT NULL DEFAULT '',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '',
	`PRCDateIssued` date NOT NULL DEFAULT '1000-01-01',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT 'Regular',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT 'Not Available',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '0',
	`MembershipDateReg` date NOT NULL DEFAULT '1000-01-01',
	`MembershipValidity` date NOT NULL DEFAULT '1000-01-01',
	`MembershipDateUpdated` date NOT NULL DEFAULT '1000-01-01',
	`FK_TxnVenueID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint NOT NULL,
	`PRCNo` varchar(50) NOT NULL DEFAULT '',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '1000-01-01',
	`PRCExpDate` date NOT NULL DEFAULT '1000-01-01',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint NOT NULL,
	`AgreementDPA` smallint NOT NULL,
	`IsDeceased` smallint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`IsEligible` smallint NOT NULL,
	`IsGMM` smallint NOT NULL,
	`IsKIT` smallint NOT NULL,
	`AppType` varchar(100) NOT NULL DEFAULT '',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '',
	`Area` char(50) NOT NULL DEFAULT '',
	`UAPNo` char(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_111822` (
	`PK_UserProfilesID` bigint NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT 'For Verification',
	`FK_EventsTagsID` bigint NOT NULL,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '',
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Suffix` varchar(100) NOT NULL DEFAULT '',
	`BDate` date NOT NULL DEFAULT '1000-01-01',
	`BPlace` varchar(100) NOT NULL DEFAULT '',
	`Gender` enum('Male','Female') NOT NULL DEFAULT 'Male',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT 'Single',
	`Chapter` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`Barangay` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID` bigint NOT NULL,
	`FK_CitiesID` bigint NOT NULL,
	`FK_ProvincesID` bigint NOT NULL,
	`FK_CountriesID` bigint NOT NULL,
	`FK_CityID` bigint NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`DupAddress` smallint NOT NULL,
	`Address_M` varchar(255) NOT NULL DEFAULT '',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID_M` bigint NOT NULL,
	`FK_CitiesID_M` bigint NOT NULL,
	`FK_ProvincesID_M` bigint NOT NULL,
	`FK_CountriesID_M` bigint NOT NULL,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`FaxNo` varchar(100) NOT NULL DEFAULT '',
	`CelNo` varchar(100) NOT NULL DEFAULT '',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '0',
	`City_Bak` varchar(100) NOT NULL DEFAULT '0',
	`Industry` varchar(255) NOT NULL DEFAULT '',
	`Designation` varchar(100) NOT NULL DEFAULT '',
	`Profession` varchar(255) NOT NULL DEFAULT '',
	`Company` varchar(255) NOT NULL DEFAULT '',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '',
	`PRCDateIssued` date NOT NULL DEFAULT '1000-01-01',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT 'Regular',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT 'Not Available',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '0',
	`MembershipDateReg` date NOT NULL DEFAULT '1000-01-01',
	`MembershipValidity` date NOT NULL DEFAULT '1000-01-01',
	`MembershipDateUpdated` date NOT NULL DEFAULT '1000-01-01',
	`FK_TxnVenueID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint NOT NULL,
	`PRCNo` varchar(50) NOT NULL DEFAULT '',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '1000-01-01',
	`PRCExpDate` date NOT NULL DEFAULT '1000-01-01',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint NOT NULL,
	`AgreementDPA` smallint NOT NULL,
	`IsDeceased` smallint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`IsEligible` smallint NOT NULL,
	`IsGMM` smallint NOT NULL,
	`IsKIT` smallint NOT NULL,
	`AppType` varchar(100) NOT NULL DEFAULT '',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '',
	`Area` char(50) NOT NULL DEFAULT '',
	`UAPNo` char(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_112824` (
	`PK_UserProfilesID` bigint NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT 'For Verification',
	`FK_EventsTagsID` bigint NOT NULL,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '',
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Suffix` varchar(100) NOT NULL DEFAULT '',
	`BDate` date NOT NULL DEFAULT '1000-01-01',
	`BPlace` varchar(100) NOT NULL DEFAULT '',
	`Gender` enum('Male','Female') NOT NULL DEFAULT 'Male',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT 'Single',
	`Chapter` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`Barangay` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID` bigint NOT NULL,
	`FK_CitiesID` bigint NOT NULL,
	`FK_ProvincesID` bigint NOT NULL,
	`FK_CountriesID` bigint NOT NULL,
	`FK_CityID` bigint NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`DupAddress` smallint NOT NULL,
	`Address_M` varchar(255) NOT NULL DEFAULT '',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID_M` bigint NOT NULL,
	`FK_CitiesID_M` bigint NOT NULL,
	`FK_ProvincesID_M` bigint NOT NULL,
	`FK_CountriesID_M` bigint NOT NULL,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`FaxNo` varchar(100) NOT NULL DEFAULT '',
	`CelNo` varchar(100) NOT NULL DEFAULT '',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '0',
	`City_Bak` varchar(100) NOT NULL DEFAULT '0',
	`Industry` varchar(255) NOT NULL DEFAULT '',
	`Designation` varchar(100) NOT NULL DEFAULT '',
	`Profession` varchar(255) NOT NULL DEFAULT '',
	`Company` varchar(255) NOT NULL DEFAULT '',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '',
	`PRCDateIssued` date NOT NULL DEFAULT '1000-01-01',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT 'Regular',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT 'Not Available',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '0',
	`MembershipDateReg` date NOT NULL DEFAULT '1000-01-01',
	`MembershipValidity` date NOT NULL DEFAULT '1000-01-01',
	`MembershipDateUpdated` date NOT NULL DEFAULT '1000-01-01',
	`FK_TxnVenueID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint NOT NULL,
	`PRCNo` varchar(50) NOT NULL DEFAULT '',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '1000-01-01',
	`PRCExpDate` date NOT NULL DEFAULT '1000-01-01',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint NOT NULL,
	`AgreementDPA` smallint NOT NULL,
	`IsDeceased` smallint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`IsEligible` smallint NOT NULL,
	`IsGMM` smallint NOT NULL,
	`IsKIT` smallint NOT NULL,
	`AppType` varchar(100) NOT NULL DEFAULT '',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '',
	`Area` char(50) NOT NULL DEFAULT '',
	`UAPNo` char(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_copy` (
	`PK_UserProfilesID` bigint NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT 'Pending',
	`FK_EventsTagsID` bigint NOT NULL,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '',
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Suffix` varchar(100) NOT NULL DEFAULT '',
	`BDate` date NOT NULL DEFAULT '1000-01-01',
	`BPlace` varchar(100) NOT NULL DEFAULT '',
	`Gender` enum('Male','Female') NOT NULL DEFAULT 'Male',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT 'Single',
	`Chapter` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`Barangay` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID` bigint NOT NULL,
	`FK_CitiesID` bigint NOT NULL,
	`FK_ProvincesID` bigint NOT NULL,
	`FK_CountriesID` bigint NOT NULL,
	`FK_CityID` bigint NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`DupAddress` smallint NOT NULL,
	`Address_M` varchar(255) NOT NULL DEFAULT '',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID_M` bigint NOT NULL,
	`FK_CitiesID_M` bigint NOT NULL,
	`FK_ProvincesID_M` bigint NOT NULL,
	`FK_CountriesID_M` bigint NOT NULL,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`FaxNo` varchar(100) NOT NULL DEFAULT '',
	`CelNo` varchar(100) NOT NULL DEFAULT '',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '0',
	`City_Bak` varchar(100) NOT NULL DEFAULT '0',
	`Industry` varchar(255) NOT NULL DEFAULT '',
	`Designation` varchar(100) NOT NULL DEFAULT '',
	`Profession` varchar(255) NOT NULL DEFAULT '',
	`Company` varchar(255) NOT NULL DEFAULT '',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '',
	`PRCDateIssued` date NOT NULL DEFAULT '1000-01-01',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT 'Regular',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT 'Not Available',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '0',
	`MembershipDateReg` date NOT NULL DEFAULT '1000-01-01',
	`MembershipValidity` date NOT NULL DEFAULT '1000-01-01',
	`MembershipDateUpdated` date NOT NULL DEFAULT '1000-01-01',
	`FK_TxnVenueID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint NOT NULL,
	`PRCNo` varchar(50) NOT NULL DEFAULT '',
	`PRCRegDate` date NOT NULL DEFAULT '1000-01-01',
	`PRCExpDate` date NOT NULL DEFAULT '1000-01-01',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint NOT NULL,
	`AgreementDPA` smallint NOT NULL,
	`IsDeceased` smallint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`IsEligible` smallint NOT NULL,
	`IsKIT` smallint NOT NULL,
	`AppType` varchar(100) NOT NULL DEFAULT '',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '',
	`Area` char(50) NOT NULL DEFAULT '',
	`UAPNo` char(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_copy0728` (
	`PK_UserProfilesID` bigint NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT 'For Verification',
	`FK_EventsTagsID` bigint NOT NULL,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '',
	`QRCode` varchar(25) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`FName` varchar(100) NOT NULL DEFAULT '',
	`MName` varchar(100) NOT NULL DEFAULT '',
	`Suffix` varchar(100) NOT NULL DEFAULT '',
	`BDate` date NOT NULL DEFAULT '1000-01-01',
	`BPlace` varchar(100) NOT NULL DEFAULT '',
	`Gender` enum('Male','Female') NOT NULL DEFAULT 'Male',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT 'Single',
	`Chapter` varchar(100) NOT NULL DEFAULT '',
	`Region` varchar(100) NOT NULL DEFAULT '',
	`Address` varchar(255) NOT NULL DEFAULT '',
	`Barangay` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID` bigint NOT NULL,
	`FK_CitiesID` bigint NOT NULL,
	`FK_ProvincesID` bigint NOT NULL,
	`FK_CountriesID` bigint NOT NULL,
	`FK_CityID` bigint NOT NULL,
	`FK_ProvID` bigint NOT NULL,
	`ZipCode` varchar(10) NOT NULL DEFAULT '',
	`DupAddress` smallint NOT NULL,
	`Address_M` varchar(255) NOT NULL DEFAULT '',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '',
	`FK_RegionID_M` bigint NOT NULL,
	`FK_CitiesID_M` bigint NOT NULL,
	`FK_ProvincesID_M` bigint NOT NULL,
	`FK_CountriesID_M` bigint NOT NULL,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '',
	`TelNo` varchar(100) NOT NULL DEFAULT '',
	`Email` varchar(100) NOT NULL DEFAULT '',
	`FaxNo` varchar(100) NOT NULL DEFAULT '',
	`CelNo` varchar(100) NOT NULL DEFAULT '',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '0',
	`City_Bak` varchar(100) NOT NULL DEFAULT '0',
	`Industry` varchar(255) NOT NULL DEFAULT '',
	`Designation` varchar(100) NOT NULL DEFAULT '',
	`Profession` varchar(255) NOT NULL DEFAULT '',
	`Company` varchar(255) NOT NULL DEFAULT '',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '',
	`PRCDateIssued` date NOT NULL DEFAULT '1000-01-01',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT 'Regular',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT 'Not Available',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '0',
	`MembershipDateReg` date NOT NULL DEFAULT '1000-01-01',
	`MembershipValidity` date NOT NULL DEFAULT '1000-01-01',
	`MembershipDateUpdated` date NOT NULL DEFAULT '1000-01-01',
	`FK_TxnVenueID` bigint NOT NULL,
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint NOT NULL,
	`PRCNo` varchar(50) NOT NULL DEFAULT '',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '1000-01-01',
	`PRCExpDate` date NOT NULL DEFAULT '1000-01-01',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint NOT NULL,
	`AgreementDPA` smallint NOT NULL,
	`IsDeceased` smallint NOT NULL,
	`IsVIP` smallint NOT NULL,
	`IsEligible` smallint NOT NULL,
	`IsKIT` smallint NOT NULL,
	`AppType` varchar(100) NOT NULL DEFAULT '',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '',
	`Area` char(50) NOT NULL DEFAULT '',
	`UAPNo` char(50) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequests` (
	`PK_UserRequestsID` bigint AUTO_INCREMENT NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FullName` varchar(255) NOT NULL DEFAULT '',
	`FK_FeesID` bigint NOT NULL,
	`HasCPDCert` smallint NOT NULL,
	`FK_ShippingTypesID` bigint NOT NULL,
	`EncodedName` varchar(255) NOT NULL DEFAULT '',
	`AmountDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`CPApproval` enum('Approved','Denied','Pending','Not Required') NOT NULL DEFAULT 'Pending',
	`Status` enum('Pending','On Process','For Payment','Paid','For Printing','For Delivery','Delivered') NOT NULL DEFAULT 'Pending',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TransactionStatus` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequestsatch` (
	`PK_UserRequestsAtchID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequeststrail` (
	`PK_UserRequestsTrailID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint NOT NULL,
	`FK_OTCHistoryID` bigint NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FullName` varchar(255) NOT NULL DEFAULT '',
	`FK_FeesID` bigint NOT NULL,
	`HasCPDCert` smallint NOT NULL,
	`FK_ShippingTypesID` bigint NOT NULL,
	`EncodedName` varchar(255) NOT NULL DEFAULT '',
	`AmountDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`CPApproval` enum('Approved','Denied','Pending','Not Required') NOT NULL DEFAULT 'Pending',
	`Status` enum('Pending','On Process','For Payment','For Delivery','Delivered','For Printing','Paid') NOT NULL DEFAULT 'Pending',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`ORNo` varchar(25) NOT NULL DEFAULT '',
	`ORDate` date NOT NULL DEFAULT '1000-01-01',
	`TransactionStatus` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userseminars` (
	`PK_UserSeminarsID` bigint AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_SeminarsSummaryID` bigint NOT NULL,
	`IsPaid` smallint NOT NULL,
	`IsVip` smallint NOT NULL,
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(50) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`qrcode` varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `usersignatures` (
	`PK_UserImagesID` bigint AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '',
	`NameORIF` varchar(255) NOT NULL DEFAULT '',
	`SizeORIF` int NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '',
	`Remarks` varchar(255) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL DEFAULT 1,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime NOT NULL DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL DEFAULT 1,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `vip` (
	`AK_UserAccountsID` bigint NOT NULL,
	`FK_UserProfilesID` bigint NOT NULL,
	`FName` varchar(100) NOT NULL DEFAULT '',
	`LName` varchar(100) NOT NULL DEFAULT '',
	`POSITION` varchar(100) NOT NULL DEFAULT '',
	`FK_UserAccountsID` bigint NOT NULL,
	`EditedBy` bigint NOT NULL,
	`EditedWhen` datetime DEFAULT '1000-01-01 00:00:00',
	`IsRestricted` smallint NOT NULL,
	`IsActive` smallint NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE INDEX `memberNumber_2` ON `employment` (`memberNumber`);--> statement-breakpoint
CREATE INDEX `firstName` ON `members` (`firstName`);--> statement-breakpoint
CREATE INDEX `middleName` ON `members` (`middleName`);--> statement-breakpoint
CREATE INDEX `lastName` ON `members` (`lastName`);--> statement-breakpoint
CREATE INDEX `firstName` ON `members_0618` (`firstName`);--> statement-breakpoint
CREATE INDEX `middleName` ON `members_0618` (`middleName`);--> statement-breakpoint
CREATE INDEX `lastName` ON `members_0618` (`lastName`);--> statement-breakpoint
CREATE INDEX `memberNumber_2` ON `membership` (`memberNumber`);--> statement-breakpoint
CREATE INDEX `licenseTypeId` ON `membership` (`licenseTypeId`);--> statement-breakpoint
CREATE INDEX `licenseNumber` ON `membership` (`licenseNumber`);--> statement-breakpoint
CREATE INDEX `membershipNumber` ON `membership` (`membershipNumber`);--> statement-breakpoint
CREATE INDEX `regionId` ON `membership` (`regionId`);--> statement-breakpoint
CREATE INDEX `chapterId` ON `membership` (`chapterId`);--> statement-breakpoint
CREATE INDEX `requestid` ON `otchistory` (`FK_UserRequestsID`);--> statement-breakpoint
CREATE INDEX `useraccounts` ON `otchistory` (`AK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `txnparams` ON `otchistory` (`TxnParams`);--> statement-breakpoint
CREATE INDEX `otchistory` ON `paymenttrail` (`FK_OTCHistoryID`);--> statement-breakpoint
CREATE INDEX `eventsid` ON `seminars` (`FK_EventsID`);--> statement-breakpoint
CREATE INDEX `eventsid` ON `seminarssummary` (`FK_EventsID`);--> statement-breakpoint
CREATE INDEX `prcno` ON `userattendance` (`prcno`);--> statement-breakpoint
CREATE INDEX `ltype` ON `userattendance` (`ltype`);--> statement-breakpoint
CREATE INDEX `email` ON `userattendance` (`email`);--> statement-breakpoint
CREATE INDEX `useraccounts` ON `userattendance` (`AK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `seminar` ON `userattendance` (`AK_UserAccountsID`,`FK_SeminarsSummaryID`);--> statement-breakpoint
CREATE INDEX `email` ON `useremails` (`FK_EmailAuthID`);--> statement-breakpoint
CREATE INDEX `user` ON `useremails` (`AK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `emails` ON `useremails` (`PK_UserEmailsID`);--> statement-breakpoint
CREATE INDEX `elect` ON `useremails` (`FK_ElectionID`);--> statement-breakpoint
CREATE INDEX `profileid` ON `userlicense` (`FK_UserProfilesID`);--> statement-breakpoint
CREATE INDEX `lictype` ON `userlicense` (`FK_LicenseTypeID`);--> statement-breakpoint
CREATE INDEX `UserProfileiid` ON `userlicense` (`FK_UserProfilesID`);--> statement-breakpoint
CREATE INDEX `ltype` ON `userlicense` (`FK_LicenseTypeID`);--> statement-breakpoint
CREATE INDEX `id` ON `userprofiles_090723` (`PK_UserProfilesID`);--> statement-breakpoint
CREATE INDEX `qrcode` ON `userprofiles_090723` (`QRCode`);--> statement-breakpoint
CREATE INDEX `email` ON `userprofiles_090723` (`Email`);--> statement-breakpoint
CREATE INDEX `prcno` ON `userprofiles_090723` (`PRCNo`);--> statement-breakpoint
CREATE INDEX `ltype` ON `userprofiles_090723` (`FK_LicenseTypeID`);--> statement-breakpoint
CREATE INDEX `chapter` ON `userprofiles_090723` (`Chapter`);--> statement-breakpoint
CREATE INDEX `useraccunt` ON `userprofiles_090723` (`FK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `otchistory` ON `userrequests` (`FK_OTCHistoryID`);--> statement-breakpoint
CREATE INDEX `accountid` ON `userrequests` (`AK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `name` ON `userrequests` (`FullName`);--> statement-breakpoint
CREATE INDEX `feeid` ON `userrequests` (`FK_FeesID`);--> statement-breakpoint
CREATE INDEX `userrequestsid` ON `userrequeststrail` (`FK_UserRequestsID`);--> statement-breakpoint
CREATE INDEX `otchistory` ON `userrequeststrail` (`FK_OTCHistoryID`);--> statement-breakpoint
CREATE INDEX `requestsid` ON `userrequeststrail` (`FK_UserRequestsID`);--> statement-breakpoint
CREATE INDEX `history` ON `userrequeststrail` (`FK_OTCHistoryID`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `view_otc_details` AS (select `c`.`PK_OTCHistoryID` AS `PK_OTCHistoryID`,`c`.`AK_UserAccountsID` AS `AK_UserAccountsID`,`c`.`FullName` AS `FullName`,`c`.`ORNo` AS `ORNo`,`c`.`ORDate` AS `ORDate`,`c`.`TxnParams` AS `TxnParams`,`c`.`TxnType` AS `TxnType`,`c`.`RefNo` AS `RefNo`,`c`.`TxnID` AS `TxnID`,`c`.`Amount` AS `Amount`,`c`.`Description` AS `Description`,`c`.`CCY` AS `CCY`,`c`.`Email` AS `Email`,`c`.`Status` AS `Status`,`c`.`Digest` AS `Digest`,`c`.`Envr` AS `Envr`,`c`.`EditedWhen` AS `EditedWhen`,`c`.`IsRestricted` AS `IsRestricted`,`c`.`IsActive` AS `IsActive`,`c`.`Stamp` AS `Stamp`,`c`.`Timestamp` AS `Timestamp` from `events-ci`.`otchistory` `c`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `view_otc_history` AS (select ifnull(`vol`.`LastInsertedID`,0) AS `LastInsertedID`,`up`.`PRCNo` AS `PRCNo`,`up`.`Chapter` AS `Chapter`,ifnull(`vol`.`LastInsertedID`,0) AS `PK_OTCHistoryID`,`us`.`AK_UserAccountsID` AS `AK_UserAccountsID`,concat(trim(`up`.`LName`),', ',trim(`up`.`FName`),' ',trim(`up`.`MName`)) AS `FullName`,ifnull(`vod`.`ORNo`,'') AS `ORNo`,ifnull(`vod`.`ORDate`,'') AS `ORDate`,group_concat(`us`.`FK_SeminarsSummaryID` order by `us`.`FK_SeminarsSummaryID` ASC separator ',') AS `TxnParams`,ifnull(`ss`.`FK_EventsID`,0) AS `FK_EventsID`,ifnull(`vod`.`TxnType`,'CASH') AS `TxnType`,ifnull(`vod`.`RefNo`,'') AS `RefNo`,ifnull(`vod`.`TxnID`,'') AS `TxnID`,ifnull(`vod`.`Amount`,sum(`ss`.`Amount`)) AS `Amount`,ifnull(`vod`.`Description`,concat('CASH - ',`up`.`PRCNo`,' - ',trim(`up`.`LName`),', ',trim(`up`.`FName`),' ',trim(`up`.`MName`),' - ',ifnull(`c`.`Description`,''))) AS `Description`,ifnull(`vod`.`CCY`,'PHP') AS `CCY`,`ua`.`Email` AS `Email`,ifnull(`vod`.`Status`,'P') AS `Status`,ifnull(`vod`.`Digest`,'0') AS `Digest`,ifnull(`vod`.`Envr`,'1') AS `Envr`,ifnull(`vod`.`EditedWhen`,current_timestamp()) AS `EditedWhen`,`us`.`IsRestricted` AS `IsRestricted`,`us`.`IsActive` AS `IsActive`,ifnull(`vod`.`Stamp`,unix_timestamp()) AS `Stamp`,ifnull(`vod`.`Timestamp`,current_timestamp()) AS `Timestamp`,`up`.`IsVIP` AS `IsVIP` from (((((((`events-ci`.`userseminars` `us` join `events-ci`.`seminarssummary` `ss` on(`ss`.`PK_SeminarsSummaryID` = `us`.`FK_SeminarsSummaryID`)) left join `events-ci`.`view_otc_lastinsertedid` `vol` on(`vol`.`AK_UserAccountsID` = `us`.`AK_UserAccountsID` and `vol`.`FK_EventsID` = ifnull(`ss`.`FK_EventsID`,0))) left join `events-ci`.`view_otc_details` `vod` on(`vod`.`AK_UserAccountsID` = `us`.`AK_UserAccountsID` and `vod`.`PK_OTCHistoryID` = `vol`.`LastInsertedID`)) left join `events-ci`.`events` `ev` on(`ev`.`PK_EventsID` = `ss`.`FK_EventsID` and `ev`.`IsActive` = 1)) join `events-ci`.`useraccounts` `ua` on(`ua`.`PK_UserAccountsID` = `us`.`AK_UserAccountsID`)) join `events-ci`.`userprofiles` `up` on(`up`.`PK_UserProfilesID` = `ua`.`FK_UserProfilesID`)) left join `events-ci`.`chapters` `c` on(`c`.`PK_ChaptersID` = `up`.`Chapter`)) where `ev`.`IsActive` = '1' group by `vol`.`LastInsertedID`,`up`.`PRCNo`,`up`.`Chapter`,`us`.`AK_UserAccountsID`,`up`.`LName`,`up`.`FName`,`up`.`MName`,`ss`.`FK_EventsID`,`ua`.`Email`,`us`.`IsRestricted`,`us`.`IsActive`,`up`.`IsVIP`);--> statement-breakpoint
CREATE ALGORITHM = undefined
SQL SECURITY definer
VIEW `view_otc_lastinsertedid` AS (select `oh`.`AK_UserAccountsID` AS `AK_UserAccountsID`,max(`oh`.`PK_OTCHistoryID`) AS `LastInsertedID`,ifnull((select `s`.`FK_EventsID` from `events-ci`.`seminars` `s` where find_in_set(`s`.`PK_SeminarsID`,`oh`.`TxnParams`) limit 1),0) AS `FK_EventsID` from `events-ci`.`otchistory` `oh` where ifnull(`oh`.`TxnParams`,'') <> '' group by `oh`.`AK_UserAccountsID`,ifnull((select `s`.`FK_EventsID` from `events-ci`.`seminars` `s` where find_in_set(`s`.`PK_SeminarsID`,`oh`.`TxnParams`) limit 1),0));