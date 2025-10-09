ALTER TABLE `cogsrequest` MODIFY COLUMN `certificate_gmm_file_url` varchar(500);--> statement-breakpoint
ALTER TABLE `cogsrequest` MODIFY COLUMN `certificate_activity_file_url` varchar(500);--> statement-breakpoint
ALTER TABLE `cogsrequest` MODIFY COLUMN `or_number` varchar(100);--> statement-breakpoint
ALTER TABLE `cogsrequest` MODIFY COLUMN `or_date` timestamp;