-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `001_2024_national_election` (
	`PK_TmpID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EmailAuthID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`TokenUsed` varchar(32) NOT NULL DEFAULT '''''',
	`SentTo` varchar(100) NOT NULL DEFAULT '''''',
	`Votes` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `accessgroups` (
	`PK_AccessGroupsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_ModulesID` blob NOT NULL,
	`FK_PermissionsID` blob NOT NULL,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''0000-00-00 00:00:00''',
	`FK_UsersAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `areas` (
	`PK_AreasID` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `ballots` (
	`PK_BallotsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Name` varchar(100) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `booths` (
	`PK_BoothsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_VenuesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_PackageID` bigint(20) NOT NULL DEFAULT 0,
	`BoothNo` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Size` varchar(100) NOT NULL DEFAULT '''''',
	`Amount` int(10) NOT NULL DEFAULT 0,
	`Abscissa` smallint(3) NOT NULL DEFAULT 0,
	`Ordinate` smallint(3) NOT NULL DEFAULT 0,
	`FK_ExhibitorAccountsID` bigint(10) NOT NULL,
	`DateReserved` date NOT NULL DEFAULT '''0000-00-00''',
	`DaysValid` int(10) NOT NULL DEFAULT 0,
	`DatePaid` date NOT NULL DEFAULT '''0000-00-00''',
	`Status` enum('NoReservation','Reserved','Extended','Approved') NOT NULL DEFAULT '''NoReservation''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `candidates` (
	`PK_CandidatesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ElectionPositionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserImagesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Image` varchar(100) NOT NULL DEFAULT '''''',
	`Name` varchar(255) NOT NULL DEFAULT '''''',
	`Description` blob NOT NULL,
	`Remarks` blob NOT NULL,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsWinner` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsElected` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `chapters` (
	`PK_ChaptersID` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`FK_RegionsID` int(11) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''0000-00-00 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `charges` (
	`PK_ChargesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `cities` (
	`PK_CitiesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ProvID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `cities_region` (
	`PK_RegionsID` bigint(20) AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''0''',
	`Description` varchar(100) NOT NULL DEFAULT '''0''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `competenceareas` (
	`PK_CompetenceAreasID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`PK_CountriesID` bigint(20) AUTO_INCREMENT NOT NULL,
	`Code` varchar(2) NOT NULL DEFAULT '''''',
	`Description` varchar(100) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `currencies` (
	`PK_CurrenciesID` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`Name` varchar(20) DEFAULT 'NULL',
	`Code` varchar(3) DEFAULT 'NULL',
	`Symbol` varchar(5) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `dragonpay` (
	`PK_DragonPayID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`MerchantID` varchar(100) NOT NULL DEFAULT '''''',
	`MerchantPassword` varchar(255) NOT NULL DEFAULT '''''',
	`Envr` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `duplicatethis` (
	`PK_DuplicateThisID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `election` (
	`PK_ElectionID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`IsChapter` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`DateFrom` date NOT NULL,
	`DateTo` date NOT NULL,
	`EndTime` time NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electionimages` (
	`PK_ElectionImagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electioninternal` (
	`PK_ElectionInternalID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CandidatesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_PositionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electioninternaltally` (
	`PK_ElectionInternalTallyID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CandidatesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_PositionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Votes` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electionpositions` (
	`PK_ElectionPositionsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Position` varchar(100) NOT NULL DEFAULT '''''',
	`IsChapter` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`Counter` int(3) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `electiontally` (
	`PK_ElectionTallyID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_CandidatesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Votes` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth` (
	`PK_EmailAuthID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '''''',
	`SentFrom` varchar(100) NOT NULL DEFAULT '''''',
	`SentTo` varchar(100) NOT NULL DEFAULT '''''',
	`Name` varchar(100) NOT NULL DEFAULT '''''',
	`Subject` varchar(100) NOT NULL DEFAULT '''''',
	`Message` varchar(255) NOT NULL DEFAULT '''''',
	`Predefined` varchar(100) NOT NULL DEFAULT '''''',
	`Token` varchar(32) NOT NULL DEFAULT '''''',
	`IsSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsAccessed` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsOpened` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth_111224` (
	`PK_EmailAuthID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '''''',
	`SentFrom` varchar(100) NOT NULL DEFAULT '''''',
	`SentTo` varchar(100) NOT NULL DEFAULT '''''',
	`Name` varchar(100) NOT NULL DEFAULT '''''',
	`Subject` varchar(100) NOT NULL DEFAULT '''''',
	`Message` varchar(255) NOT NULL DEFAULT '''''',
	`Predefined` varchar(100) NOT NULL DEFAULT '''''',
	`Token` varchar(32) NOT NULL DEFAULT '''''',
	`IsSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsAccessed` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsOpened` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `emailauth_112324` (
	`PK_EmailAuthID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_RFIDNo` char(30) NOT NULL DEFAULT '''''',
	`SentFrom` varchar(100) NOT NULL DEFAULT '''''',
	`SentTo` varchar(100) NOT NULL DEFAULT '''''',
	`Name` varchar(100) NOT NULL DEFAULT '''''',
	`Subject` varchar(100) NOT NULL DEFAULT '''''',
	`Message` varchar(255) NOT NULL DEFAULT '''''',
	`Predefined` varchar(100) NOT NULL DEFAULT '''''',
	`Token` varchar(32) NOT NULL DEFAULT '''''',
	`IsSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsAccessed` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsOpened` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT 'NULL',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `employment` (
	`id` bigint(20) AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint(20) NOT NULL,
	`companyName` varchar(100) DEFAULT 'NULL',
	`companyAddress` text DEFAULT 'NULL',
	`position` varchar(100) DEFAULT 'NULL',
	`specialization` text DEFAULT 'NULL',
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
	`PK_EvalCategoriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EvalTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`MemType` enum('exhibitor','comitee','member','finance','committee') DEFAULT 'NULL',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`SeqNo` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `evaldetails` (
	`PK_EvalDetailsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EvalCategoriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`SeqNo` int(11) unsigned NOT NULL DEFAULT 0,
	`IsEssay` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Percentage` char(10) DEFAULT '''0''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `evaltype` (
	`PK_EvalTypeID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Type` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `events` (
	`PK_EventsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_DragonPayID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`DateFrom` date NOT NULL DEFAULT '''1000-01-01''',
	`DateTo` date NOT NULL DEFAULT '''1000-01-01''',
	`Email` varchar(255) NOT NULL DEFAULT '''''',
	`RegEmail` varchar(255) NOT NULL DEFAULT '''''',
	`AccountNo` varchar(255) NOT NULL DEFAULT '''''',
	`AccountName` varchar(255) NOT NULL DEFAULT '''''',
	`ContactInfo` varchar(255) DEFAULT '''''',
	`AvRsvn` smallint(1) unsigned NOT NULL DEFAULT 0,
	`ZoomURL` varchar(100) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`IsDeleted` smallint(1) unsigned NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `eventsimages` (
	`PK_EventsImagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `eventstags` (
	`PK_EventsTagsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitoraccounts` (
	`PK_ExhibitorAccountsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Username` varchar(100) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`FK_UserControlID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '''''',
	`AK_UserAccountsType` enum('ADMIN','EXHIBITOR') NOT NULL DEFAULT '''EXHIBITOR''',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`Username`,`PK_ExhibitorAccountsID`)
);
--> statement-breakpoint
CREATE TABLE `exhibitorevents` (
	`PK_ExhibitorEventsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_PackagesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_BoothsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`NoAttendees` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TxnType` enum('CASH','CHECK') NOT NULL DEFAULT '''CASH''',
	`Status` enum('S','P','F') NOT NULL DEFAULT '''P''',
	`IsPaid` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CCY` enum('PHP') NOT NULL DEFAULT '''PHP''',
	`Flag` enum('Approved','Pending','Declined') NOT NULL DEFAULT '''Pending''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorfollowers` (
	`PK_ExhibitorFollowersID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`DateLogged` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorimages` (
	`PK_ExhibitorImagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_ExhibitorAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `exhibitorprofiles` (
	`PK_ExhibitorProfilesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`CompanyName` varchar(255) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`FK_CitiesID` int(11) unsigned NOT NULL DEFAULT 0,
	`State` varchar(100) NOT NULL DEFAULT '''''',
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`ContactPerson` varchar(255) NOT NULL DEFAULT '''''',
	`Website` varchar(255) NOT NULL DEFAULT '''''',
	`Description` text NOT NULL,
	`FK_ProductTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `fees` (
	`PK_FeesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`IsCurrentYear` smallint(1) unsigned NOT NULL DEFAULT 0,
	`ChargeOnce` smallint(1) unsigned NOT NULL DEFAULT 0,
	`LicenseType` char(10) NOT NULL,
	`MemberType` varchar(255) NOT NULL DEFAULT '''''',
	`EffectivityDate` date NOT NULL DEFAULT '''1000-01-01''',
	`IsCPApproval` smallint(1) NOT NULL DEFAULT 0,
	`EXP` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `groupings` (
	`PK_GroupingsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `guestaccounts` (
	`PK_GuestAccountsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Username` varchar(30) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(50) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`Flag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`Token` varchar(32) NOT NULL DEFAULT '''''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`Username`,`PK_GuestAccountsID`)
);
--> statement-breakpoint
CREATE TABLE `licensetype` (
	`PK_LicenseTypeID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`SeqNo` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `loginattempts` (
	`PK_LoginAttemptsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`MachineNo` varchar(255) NOT NULL DEFAULT '''''',
	`PrivateIP` varchar(15) NOT NULL DEFAULT '''000.000.000.000''',
	`PublicIP` varchar(15) NOT NULL DEFAULT '''000.000.000.000''',
	`BroadcastedIP` varchar(15) NOT NULL DEFAULT '''000.000.000.000''',
	`Hostname` varchar(100) NOT NULL DEFAULT '''''',
	`City` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Country` varchar(10) NOT NULL DEFAULT '''PH''',
	`Loc` varchar(100) NOT NULL DEFAULT '''''',
	`Postal` varchar(10) NOT NULL DEFAULT '''''',
	`Org` varchar(255) NOT NULL DEFAULT '''''',
	`Bogon` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AK_LoginAttemptsStatus` enum('fail','success') NOT NULL DEFAULT '''fail''',
	`AcctType` enum('GENERAL','EXHIBITOR') NOT NULL DEFAULT '''GENERAL''',
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `members` (
	`id` bigint(20) AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint(20) NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`middleName` varchar(100) DEFAULT 'NULL',
	`lastName` varchar(100) NOT NULL,
	`suffixName` varchar(100) DEFAULT 'NULL',
	`birthdate` date DEFAULT 'NULL',
	`gender` varchar(100) DEFAULT 'NULL',
	`maritalStatusId` varchar(100) DEFAULT 'NULL',
	`nationalityId` varchar(100) DEFAULT 'NULL',
	`houseNumber` text DEFAULT 'NULL',
	`streetName` text DEFAULT 'NULL',
	`barangay` text DEFAULT 'NULL',
	`province` text DEFAULT 'NULL',
	`city` text DEFAULT 'NULL',
	`zipCode` varchar(100) DEFAULT 'NULL',
	`countryCode` varchar(2) DEFAULT '''PH''',
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
	`id` bigint(20) AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint(20) NOT NULL,
	`licenseTypeId` varchar(100) DEFAULT 'NULL',
	`licenseNumber` varchar(100) DEFAULT 'NULL',
	`membershipTypeId` varchar(100) DEFAULT 'NULL',
	`membershipNumber` varchar(100) DEFAULT 'NULL',
	`regionId` varchar(100) DEFAULT 'NULL',
	`chapterId` varchar(100) DEFAULT 'NULL',
	`reckey` varchar(100) DEFAULT 'NULL',
	`statusId` varchar(1) DEFAULT '''1''',
	`insuranceTypeId` varchar(1) DEFAULT '''1''',
	`remarks` text DEFAULT 'NULL',
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
	`PK_MembersSeriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint(3) unsigned NOT NULL DEFAULT 1,
	`Prefix` char(2) NOT NULL DEFAULT '''RG''',
	`SeriesStart` int(11) unsigned NOT NULL DEFAULT 0,
	`SeriesEnd` int(11) unsigned NOT NULL DEFAULT 0,
	`CurrentNo` int(11) unsigned NOT NULL DEFAULT 0,
	`Type` enum('Senior','Regular','Life','Fellow','Auxiliary','Honorary') DEFAULT 'NULL',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `members_0618` (
	`id` bigint(20) AUTO_INCREMENT NOT NULL,
	`memberNumber` bigint(20) NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`middleName` varchar(100) DEFAULT 'NULL',
	`lastName` varchar(100) NOT NULL,
	`suffixName` varchar(100) DEFAULT 'NULL',
	`birthdate` date DEFAULT 'NULL',
	`gender` varchar(100) DEFAULT 'NULL',
	`maritalStatusId` varchar(100) DEFAULT 'NULL',
	`nationalityId` varchar(100) DEFAULT 'NULL',
	`houseNumber` text DEFAULT 'NULL',
	`streetName` text DEFAULT 'NULL',
	`barangay` text DEFAULT 'NULL',
	`province` text DEFAULT 'NULL',
	`city` text DEFAULT 'NULL',
	`zipCode` varchar(100) DEFAULT 'NULL',
	`countryCode` varchar(2) DEFAULT '''PH''',
	`mobileNumber` varchar(100) DEFAULT 'NULL',
	`email` varchar(100) DEFAULT 'NULL',
	`password` varchar(100) DEFAULT 'NULL',
	`dateCreated` datetime NOT NULL,
	`dateUpdated` datetime DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`),
	CONSTRAINT `memberNumber` UNIQUE(`memberNumber`)
);
--> statement-breakpoint
CREATE TABLE `officers` (
	`PK_OfficersID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Position` enum('National','Regional','Chapter') NOT NULL,
	`Term` year(4) NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `orseries` (
	`PK_ORSeriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_CounterID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`SeqNo` smallint(3) unsigned NOT NULL DEFAULT 1,
	`SeriesStart` int(11) unsigned NOT NULL DEFAULT 0,
	`SeriesEnd` int(11) unsigned NOT NULL DEFAULT 0,
	`CurrentNo` int(11) unsigned NOT NULL DEFAULT 0,
	`Type` enum('C','D','CM','DM') NOT NULL DEFAULT '''C''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otchistory` (
	`PK_OTCHistoryID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FullName` varchar(255) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TxnParams` varchar(255) NOT NULL DEFAULT '''''',
	`TxnType` enum('CASH','CHECK','OTC','PAYPAL','GARMIN') NOT NULL DEFAULT '''CASH''',
	`RefNo` varchar(25) NOT NULL DEFAULT '''''',
	`TxnID` varchar(25) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`CCY` enum('PHP') NOT NULL DEFAULT '''PHP''',
	`Email` varchar(50) NOT NULL DEFAULT '''''',
	`Status` enum('S','P','F') NOT NULL DEFAULT '''P''',
	`Digest` varchar(50) NOT NULL DEFAULT '''''',
	`Envr` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsRequest` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsProcessed` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otchistory_copy` (
	`PK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserRequestsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FullName` varchar(255) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TxnParams` varchar(255) NOT NULL DEFAULT '''''',
	`TxnType` enum('CASH','CHECK','OTC','PAYPAL','GARMIN') NOT NULL DEFAULT '''CASH''',
	`RefNo` varchar(25) NOT NULL DEFAULT '''''',
	`TxnID` varchar(25) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`CCY` enum('PHP') NOT NULL DEFAULT '''PHP''',
	`Email` varchar(50) NOT NULL DEFAULT '''''',
	`Status` enum('S','P','F') NOT NULL DEFAULT '''P''',
	`Digest` varchar(50) NOT NULL DEFAULT '''''',
	`Envr` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsRequest` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsProcessed` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otcresponse` (
	`PK_OTCResponseID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TxnType` varchar(50) NOT NULL DEFAULT '''''',
	`RefNo` varchar(25) NOT NULL DEFAULT '''''',
	`TxnID` varchar(50) NOT NULL DEFAULT '''''',
	`Status` enum('S','P','F') NOT NULL DEFAULT '''P''',
	`Digest` varchar(50) NOT NULL DEFAULT '''''',
	`Envr` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Message` blob NOT NULL,
	`Action` enum('NEW','UPDATE') NOT NULL DEFAULT '''NEW''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `otcseries` (
	`PK_OTCSeriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint(3) unsigned NOT NULL DEFAULT 1,
	`SeriesStart` int(11) unsigned NOT NULL DEFAULT 0,
	`SeriesEnd` int(11) unsigned NOT NULL DEFAULT 0,
	`CurrentNo` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `packages` (
	`PK_PackagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` blob NOT NULL,
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymentcopy` (
	`PK_PaymentCopyID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_PaymentTrailID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PayType` smallint(3) unsigned NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT '''CASH''',
	`ORSeqNo` smallint(3) unsigned NOT NULL DEFAULT 0,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORType` varchar(25) NOT NULL DEFAULT '''''',
	`DatePaid` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`CheckNo` varchar(50) NOT NULL DEFAULT '''''',
	`CheckDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BankName` varchar(50) NOT NULL DEFAULT '''''',
	`BankBranch` varchar(100) NOT NULL DEFAULT '''''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymententries` (
	`PK_PaymentEntriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_PaymentTrailID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` int(11) unsigned NOT NULL DEFAULT 0,
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Quantity` int(11) unsigned NOT NULL DEFAULT 1,
	`PerPiece` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`SubTotal` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''0000-00-00 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymenttrail` (
	`PK_PaymentTrailID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PayType` smallint(3) unsigned NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT '''CASH''',
	`ORSeqNo` smallint(3) unsigned NOT NULL DEFAULT 0,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORType` varchar(25) NOT NULL DEFAULT '''''',
	`DatePaid` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`TransactionNo` varchar(50) NOT NULL DEFAULT '''''',
	`CheckNo` varchar(50) NOT NULL DEFAULT '''''',
	`CheckDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BankName` varchar(50) NOT NULL DEFAULT '''''',
	`BankBranch` varchar(100) NOT NULL DEFAULT '''''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `paymenttrail_copy` (
	`PK_PaymentTrailID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PayType` smallint(3) unsigned NOT NULL DEFAULT 1,
	`PayDesc` varchar(25) NOT NULL DEFAULT '''CASH''',
	`ORSeqNo` smallint(3) unsigned NOT NULL DEFAULT 0,
	`ORCtrNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORType` varchar(25) NOT NULL DEFAULT '''''',
	`DatePaid` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`TransactionNo` varchar(50) NOT NULL DEFAULT '''''',
	`CheckNo` varchar(50) NOT NULL DEFAULT '''''',
	`CheckDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BankName` varchar(50) NOT NULL DEFAULT '''''',
	`BankBranch` varchar(100) NOT NULL DEFAULT '''''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`SubTotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`Penalty` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`TotalDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`AmountTendered` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Adjustment` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `positions` (
	`PK_PositionsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Category` enum('officers','governors','presidents','commitee') NOT NULL DEFAULT '''officers''',
	`SeqNo` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsOccupied` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `producttype` (
	`PK_ProductTypeID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `providers` (
	`PK_ProvidersID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `provinces` (
	`PK_Provinces` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL,
	`Description` varchar(100) NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `regions` (
	`PK_RegionsID` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`FK_AreasID` int(11) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''0000-00-00 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `reportsqr` (
	`PK_ReportsQRID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`ReportNo` varchar(100) NOT NULL DEFAULT '''''',
	`Digest` char(128) NOT NULL,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`Details` blob NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `reportsseries` (
	`PK_ReportsSeriesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`SeqNo` smallint(3) unsigned NOT NULL DEFAULT 1,
	`SeriesStart` int(11) unsigned NOT NULL DEFAULT 0,
	`SeriesEnd` int(11) unsigned NOT NULL DEFAULT 0,
	`CurrentNo` int(11) unsigned NOT NULL DEFAULT 0,
	`Type` enum('COGS','EPART') NOT NULL DEFAULT '''COGS''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `requests` (
	`PK_RequestsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`RequestNo` varchar(100) NOT NULL DEFAULT '''''',
	`Digest` char(128) NOT NULL,
	`Category` enum('Password') NOT NULL DEFAULT '''Password''',
	`Details` blob NOT NULL,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `schools` (
	`PK_SchoolsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''0000-00-00 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminars` (
	`PK_SeminarsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Activity` varchar(255) NOT NULL DEFAULT '''''',
	`TntvPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CPDPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EarlyBirdDate` date NOT NULL DEFAULT '''1000-01-01''',
	`EarlyBird` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`NonMember` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Incharge` varchar(100) NOT NULL DEFAULT '''''',
	`InchargeDesc` varchar(255) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`Slots` int(11) unsigned NOT NULL DEFAULT 0,
	`SlotsTaken` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_ProvidersID` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_EventsID` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_EventsTagsID` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_CompetenceID` int(11) unsigned NOT NULL DEFAULT 0,
	`DateReceived` date NOT NULL DEFAULT '''1000-01-01''',
	`DateForwarded` date NOT NULL DEFAULT '''1000-01-01''',
	`DateApproved` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCORNo` varchar(25) NOT NULL DEFAULT '''''',
	`FK_CurrenciesID` int(11) unsigned NOT NULL DEFAULT 83,
	`IsCompulsory` smallint(1) unsigned NOT NULL DEFAULT 0,
	`SeqNo` int(11) unsigned NOT NULL DEFAULT 0,
	`BypassRegd` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminarsdetails` (
	`PK_SeminarsDetailsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_GroupingsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Venue` varchar(255) NOT NULL DEFAULT '''''',
	`DateFrom` date NOT NULL DEFAULT '''1000-01-01''',
	`DateTo` date NOT NULL DEFAULT '''1000-01-01''',
	`StartTime` time NOT NULL DEFAULT '''00:00:00''',
	`EndTime` time NOT NULL DEFAULT '''00:00:00''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `seminarssignatory` (
	`PK_SeminarsSignatoryID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_SeminarsSummaryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`DESIGNATION` varchar(150) NOT NULL DEFAULT '''0''',
	`SeqNo` char(1) NOT NULL DEFAULT '''1''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`qrcode` varchar(20) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `seminarssummary` (
	`PK_SeminarsSummaryID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_SeminarsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_SeminarsDetailsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Activity` varchar(255) NOT NULL DEFAULT '''''',
	`TntvPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`CPDPoints` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EarlyBirdDate` date NOT NULL DEFAULT '''1000-01-01''',
	`EarlyBird` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`NonMember` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`Incharge` varchar(100) NOT NULL DEFAULT '''''',
	`InchargeDesc` varchar(255) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`Slots` int(11) unsigned NOT NULL DEFAULT 0,
	`SlotsTaken` int(11) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvidersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_EventsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EventsCode` varchar(100) NOT NULL DEFAULT '''''',
	`EventsDesc` varchar(255) NOT NULL DEFAULT '''''',
	`EventsAmnt` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`EventsDateFrom` date NOT NULL DEFAULT '''1000-01-01''',
	`EventsDateTo` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_DragonPayID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CompetenceID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`DateReceived` date NOT NULL DEFAULT '''1000-01-01''',
	`DateForwarded` date NOT NULL DEFAULT '''1000-01-01''',
	`DateApproved` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCORNo` varchar(25) NOT NULL DEFAULT '''''',
	`FK_CurrenciesID` int(11) unsigned NOT NULL DEFAULT 83,
	`IsCompulsory` smallint(1) unsigned NOT NULL DEFAULT 0,
	`SeqNo` int(11) unsigned NOT NULL DEFAULT 0,
	`BypassRegd` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_GroupingsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Venue` varchar(255) NOT NULL DEFAULT '''''',
	`DateFrom` date NOT NULL DEFAULT '''1000-01-01''',
	`DateTo` date NOT NULL DEFAULT '''1000-01-01''',
	`StartTime` time NOT NULL DEFAULT '''00:00:00''',
	`EndTime` time NOT NULL DEFAULT '''00:00:00''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `shippingtypes` (
	`PK_ShippingTypesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
	`IsCurrentYear` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `specialization` (
	`PK_SpecializationID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(50) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`SeqNo` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `sqlmapfile` (
	`data` longblob DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `sqlmapoutput` (
	`data` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `txnvenue` (
	`PK_TxnVenueID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(25) NOT NULL DEFAULT '''''',
	`Description` varchar(255) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts` (
	`PK_UserAccountsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Username` varchar(100) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`FK_UserControlID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '''''',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT '''MEMBER''',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `username` UNIQUE(`Username`,`PK_UserAccountsID`)
);
--> statement-breakpoint
CREATE TABLE `useraccounts_111822` (
	`PK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Username` varchar(100) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`FK_UserControlID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '''''',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT '''MEMBER''',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts_copy` (
	`PK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Username` varchar(100) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`FK_UserControlID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '''''',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT '''MEMBER''',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useraccounts_copy040421` (
	`PK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Username` varchar(100) NOT NULL DEFAULT '''''',
	`Password` char(128) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`Salt` char(128) NOT NULL DEFAULT '''''',
	`FK_UserControlID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserControlCode` varchar(100) NOT NULL DEFAULT '''''',
	`AK_UserAccountsType` enum('ADMIN','MEMBER','VIEWER','ENCODER') NOT NULL DEFAULT '''MEMBER''',
	`AK_UserAccountsFlag` enum('Approved','Pending') NOT NULL DEFAULT '''Pending''',
	`IsMailSent` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userattendance` (
	`PK_UserAttendanceID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_SeminarsSummaryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Tag` enum('IN','OUT') NOT NULL DEFAULT '''IN''',
	`DateLogged` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`ltype` varchar(150) NOT NULL,
	`email` varchar(150) NOT NULL,
	`name` varchar(255) NOT NULL,
	`prcno` varchar(15) NOT NULL,
	`company` varchar(150) NOT NULL,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(50) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usercertificates` (
	`PK_UserCertificatesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`CertType` varchar(100) NOT NULL DEFAULT '''''',
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) unsigned NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userchangechapter` (
	`PK_UserChangeChapterID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`CurrRegion` varchar(100) NOT NULL DEFAULT '''0''',
	`CurrChapter` varchar(100) NOT NULL DEFAULT '''0''',
	`Region` varchar(100) NOT NULL DEFAULT '''0''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''0''',
	`Reason` varchar(255) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`IsApproved` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Status` enum('Pending','Approved','Declined','On Process') NOT NULL DEFAULT '''Pending''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userchangechapteratch` (
	`PK_UserChangeChapterAtchID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserChangeChapterID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usercontrol` (
	`PK_UserControlID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`Code` varchar(100) NOT NULL DEFAULT '''''',
	`IsChapter` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`IsDefault` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsExclusive` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserModulesID` blob NOT NULL,
	`FK_PermissionsID` blob NOT NULL,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`FK_UsersAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usereducation` (
	`PK_UserEducationID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`School` varchar(255) NOT NULL DEFAULT '''''',
	`Degree` varchar(255) NOT NULL DEFAULT '''''',
	`DateGraduated` date NOT NULL,
	`Awards` varchar(255) NOT NULL DEFAULT '''''',
	`Level` varchar(10) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `useremails` (
	`PK_UserEmailsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ElectionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_EmailAuthID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userexpertise` (
	`PK_UserExpertiseID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Expertise` varchar(255) NOT NULL DEFAULT '''''',
	`Years` varchar(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL,
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userfees` (
	`PK_UserFeesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_FeesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsPaid` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Status` enum('P','F','S') NOT NULL DEFAULT '''P''',
	`ValFrom` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`ValTo` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userimages` (
	`PK_UserImagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`Category` enum('Profile','Senior','PWD') NOT NULL DEFAULT '''Profile''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userimages_copy` (
	`PK_UserImagesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`Category` enum('Profile','Senior','PWD') NOT NULL DEFAULT '''Profile''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userlicense` (
	`PK_UserLicenseID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`RegistrationDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ValidityDate` date NOT NULL DEFAULT '''1000-01-01''',
	`LicenseType` enum('RME','REE','PEE','BSEE') NOT NULL DEFAULT '''BSEE''',
	`LicenseNo` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`Fname` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) unsigned NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`IsMainID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userlicense_copy` (
	`PK_UserLicenseID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`LicenseType` enum('RME','REE','PEE','BSEE') NOT NULL,
	`LicenseNo` varchar(50) NOT NULL DEFAULT '''''',
	`RegistrationDate` date NOT NULL,
	`lname` varchar(100) NOT NULL,
	`fname` varchar(150) NOT NULL,
	`mname` varchar(100) NOT NULL,
	`ValidityDate` date NOT NULL DEFAULT '''1000-01-01''',
	`FileLocation` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `usermodules` (
	`PK_UserModulesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`ModulesGrp` int(2) unsigned NOT NULL DEFAULT 0,
	`FK_UserModulesID` int(11) unsigned NOT NULL DEFAULT 0,
	`Description` varchar(50) NOT NULL DEFAULT '''''',
	`Abbreviation` varchar(15) NOT NULL DEFAULT '''''',
	`Link` varchar(50) NOT NULL DEFAULT '''''',
	`Icon` varchar(25) NOT NULL DEFAULT '''''',
	`SeqNo` int(2) unsigned NOT NULL DEFAULT 0,
	`SeqNoGrp` int(2) unsigned NOT NULL DEFAULT 0,
	`AK_UserModulesType` enum('heading','link','separator') NOT NULL DEFAULT '''link''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userpositions` (
	`PK_UserPositionsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_PositionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_RegionsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ChaptersID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles` (
	`PK_UserProfilesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''For Verification''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard','Honorary') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsGMM` smallint(1) NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_090723` (
	`PK_UserProfilesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''For Verification''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsGMM` smallint(1) NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_111822` (
	`PK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''For Verification''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsGMM` smallint(1) NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_112824` (
	`PK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''For Verification''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsGMM` smallint(1) NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_copy` (
	`PK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''Pending''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userprofiles_copy0728` (
	`PK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserProfilesFlag` enum('Deceased','Deleted','For Verification','Pending','Verified') NOT NULL DEFAULT '''For Verification''',
	`FK_EventsTagsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`RFIDNo` varchar(25) NOT NULL DEFAULT '''''',
	`QRCode` varchar(25) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`MName` varchar(100) NOT NULL DEFAULT '''''',
	`Suffix` varchar(100) NOT NULL DEFAULT '''''',
	`BDate` date NOT NULL DEFAULT '''1000-01-01''',
	`BPlace` varchar(100) NOT NULL DEFAULT '''''',
	`Gender` enum('Male','Female') NOT NULL DEFAULT '''Male''',
	`CivilStatus` enum('Single','Married','Separated','Widowed') NOT NULL DEFAULT '''Single''',
	`Chapter` varchar(100) NOT NULL DEFAULT '''''',
	`Region` varchar(100) NOT NULL DEFAULT '''''',
	`Address` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CityID` bigint(20) NOT NULL DEFAULT 0,
	`FK_ProvID` bigint(20) NOT NULL DEFAULT 0,
	`ZipCode` varchar(10) NOT NULL DEFAULT '''''',
	`DupAddress` smallint(1) unsigned NOT NULL DEFAULT 0,
	`Address_M` varchar(255) NOT NULL DEFAULT '''''',
	`Barangay_M` varchar(100) NOT NULL DEFAULT '''''',
	`FK_RegionID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CitiesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_ProvincesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_CountriesID_M` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ZipCode_M` varchar(10) NOT NULL DEFAULT '''''',
	`TelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Email` varchar(100) NOT NULL DEFAULT '''''',
	`FaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CelNo` varchar(100) NOT NULL DEFAULT '''''',
	`Province_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`City_Bak` varchar(100) NOT NULL DEFAULT '''0''',
	`Industry` varchar(255) NOT NULL DEFAULT '''''',
	`Designation` varchar(100) NOT NULL DEFAULT '''''',
	`Practice` blob DEFAULT 'NULL',
	`Profession` varchar(255) NOT NULL DEFAULT '''''',
	`Company` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyAddr` varchar(255) NOT NULL DEFAULT '''''',
	`CompanyTelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyFaxNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyCelNo` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyEmail` varchar(100) NOT NULL DEFAULT '''''',
	`CompanyWebsite` varchar(100) NOT NULL DEFAULT '''''',
	`PRCRegNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCDateIssued` date NOT NULL DEFAULT '''1000-01-01''',
	`MemberType` enum('Auxiliary','Associate','Fellow','Life','Regular','Senior','NewMember','NewBoard') NOT NULL DEFAULT '''Regular''',
	`InsuranceType` enum('Insured','Not Available') NOT NULL DEFAULT '''Not Available''',
	`MembershipNo` varchar(50) NOT NULL DEFAULT '''0''',
	`MembershipDateReg` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipValidity` date NOT NULL DEFAULT '''1000-01-01''',
	`MembershipDateUpdated` date NOT NULL DEFAULT '''1000-01-01''',
	`FK_TxnVenueID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`ORAmount` decimal(10,2) NOT NULL DEFAULT '0.00',
	`FK_LicenseTypeID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`PRCNo` varchar(50) NOT NULL DEFAULT '''''',
	`PRCSeqNo` varchar(50) NOT NULL,
	`PRCRegDate` date NOT NULL DEFAULT '''1000-01-01''',
	`PRCExpDate` date NOT NULL DEFAULT '''1000-01-01''',
	`Sector` enum('Academe','Government','Private Practice','Private Corporation') NOT NULL,
	`AgreementRFID` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AgreementDPA` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsDeceased` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVIP` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsEligible` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsKIT` smallint(1) unsigned NOT NULL DEFAULT 0,
	`AppType` varchar(100) NOT NULL DEFAULT '''''',
	`SRCTZN_ID` varchar(50) NOT NULL DEFAULT '''''',
	`PWD_ID` varchar(50) NOT NULL DEFAULT '''''',
	`Area` char(50) NOT NULL DEFAULT '''''',
	`UAPNo` char(50) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequests` (
	`PK_UserRequestsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FullName` varchar(255) NOT NULL DEFAULT '''''',
	`FK_FeesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`HasCPDCert` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_ShippingTypesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EncodedName` varchar(255) NOT NULL DEFAULT '''''',
	`AmountDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`CPApproval` enum('Approved','Denied','Pending','Not Required') NOT NULL DEFAULT '''Pending''',
	`Status` enum('Pending','On Process','For Payment','Paid','For Printing','For Delivery','Delivered') NOT NULL DEFAULT '''Pending''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TransactionStatus` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequestsatch` (
	`PK_UserRequestsAtchID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userrequeststrail` (
	`PK_UserRequestsTrailID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserRequestsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_OTCHistoryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FullName` varchar(255) NOT NULL DEFAULT '''''',
	`FK_FeesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`HasCPDCert` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_ShippingTypesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EncodedName` varchar(255) NOT NULL DEFAULT '''''',
	`AmountDue` decimal(10,2) NOT NULL DEFAULT '0.00',
	`CPApproval` enum('Approved','Denied','Pending','Not Required') NOT NULL DEFAULT '''Pending''',
	`Status` enum('Pending','On Process','For Payment','For Delivery','Delivered','For Printing','Paid') NOT NULL DEFAULT '''Pending''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`ORNo` varchar(25) NOT NULL DEFAULT '''''',
	`ORDate` date NOT NULL DEFAULT '''1000-01-01''',
	`TransactionStatus` smallint(1) unsigned NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `userseminars` (
	`PK_UserSeminarsID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_SeminarsSummaryID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`IsPaid` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsVip` smallint(1) NOT NULL DEFAULT 0,
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(50) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`qrcode` varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `usersignatures` (
	`PK_UserImagesID` bigint(20) unsigned AUTO_INCREMENT NOT NULL,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`Path` varchar(255) NOT NULL DEFAULT '''''',
	`NameORIF` varchar(255) NOT NULL DEFAULT '''''',
	`SizeORIF` int(11) NOT NULL DEFAULT 0,
	`ContentType` varchar(15) NOT NULL DEFAULT '''''',
	`Remarks` varchar(255) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 1,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime NOT NULL DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 1,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `vip` (
	`AK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FK_UserProfilesID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`FName` varchar(100) NOT NULL DEFAULT '''''',
	`LName` varchar(100) NOT NULL DEFAULT '''''',
	`POSITION` varchar(100) NOT NULL DEFAULT '''''',
	`FK_UserAccountsID` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedBy` bigint(20) unsigned NOT NULL DEFAULT 0,
	`EditedWhen` datetime DEFAULT '''1000-01-01 00:00:00''',
	`IsRestricted` smallint(1) unsigned NOT NULL DEFAULT 0,
	`IsActive` smallint(1) unsigned NOT NULL DEFAULT 1,
	`Stamp` varchar(10) NOT NULL DEFAULT '''''',
	`Timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE INDEX `memberNumber_2` ON `employment` (`memberNumber`);--> statement-breakpoint
CREATE INDEX `firstName` ON `members` (`firstName`);--> statement-breakpoint
CREATE INDEX `middleName` ON `members` (`middleName`);--> statement-breakpoint
CREATE INDEX `lastName` ON `members` (`lastName`);--> statement-breakpoint
CREATE INDEX `memberNumber_2` ON `membership` (`memberNumber`);--> statement-breakpoint
CREATE INDEX `licenseTypeId` ON `membership` (`licenseTypeId`);--> statement-breakpoint
CREATE INDEX `licenseNumber` ON `membership` (`licenseNumber`);--> statement-breakpoint
CREATE INDEX `membershipNumber` ON `membership` (`membershipNumber`);--> statement-breakpoint
CREATE INDEX `regionId` ON `membership` (`regionId`);--> statement-breakpoint
CREATE INDEX `chapterId` ON `membership` (`chapterId`);--> statement-breakpoint
CREATE INDEX `firstName` ON `members_0618` (`firstName`);--> statement-breakpoint
CREATE INDEX `middleName` ON `members_0618` (`middleName`);--> statement-breakpoint
CREATE INDEX `lastName` ON `members_0618` (`lastName`);--> statement-breakpoint
CREATE INDEX `requestid` ON `otchistory` (`FK_UserRequestsID`);--> statement-breakpoint
CREATE INDEX `useraccounts` ON `otchistory` (`AK_UserAccountsID`);--> statement-breakpoint
CREATE INDEX `txnparams` ON `otchistory` (`TxnParams`);--> statement-breakpoint
CREATE INDEX `otchistory` ON `paymenttrail` (`FK_OTCHistoryID`);--> statement-breakpoint
CREATE INDEX `eventsid` ON `seminars` (`FK_EventsID`);--> statement-breakpoint
CREATE INDEX `eventsid` ON `seminarssummary` (`FK_EventsID`);--> statement-breakpoint
CREATE INDEX `email` ON `useraccounts` (`Email`);--> statement-breakpoint
CREATE INDEX `id` ON `useraccounts` (`FK_UserProfilesID`);--> statement-breakpoint
CREATE INDEX `emailsent` ON `useraccounts` (`IsMailSent`);--> statement-breakpoint
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
CREATE INDEX `id` ON `userprofiles` (`PK_UserProfilesID`);--> statement-breakpoint
CREATE INDEX `qrcode` ON `userprofiles` (`QRCode`);--> statement-breakpoint
CREATE INDEX `email` ON `userprofiles` (`Email`);--> statement-breakpoint
CREATE INDEX `prcno` ON `userprofiles` (`PRCNo`);--> statement-breakpoint
CREATE INDEX `ltype` ON `userprofiles` (`FK_LicenseTypeID`);--> statement-breakpoint
CREATE INDEX `chapter` ON `userprofiles` (`Chapter`);--> statement-breakpoint
CREATE INDEX `useraccunt` ON `userprofiles` (`FK_UserAccountsID`);--> statement-breakpoint
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
*/