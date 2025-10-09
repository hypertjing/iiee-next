import {
    bigint,
    boolean,
    decimal,
    mysqlEnum,
    mysqlTable,
    timestamp,
    varchar,
} from "drizzle-orm/mysql-core";

export const cogsrequest = mysqlTable("cogsrequest", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    user_id: bigint("user_id", { mode: "number" }).notNull(),
    certificate_gmm_file_url: varchar("certificate_gmm_file_url", {
        length: 500,
    }),
    certificate_activity_file_url: varchar("certificate_activity_file_url", {
        length: 500,
    }),
    question1: boolean("question1"),
    question2: boolean("question2"),
    question3: boolean("question3"),
    shipping_type_id: bigint("shipping_type_id", { mode: "number" }),
    or_number: varchar("or_number", { length: 100 }),
    or_date: timestamp("or_date"),
    fee_id: bigint("fee_id", { mode: "number" }).notNull(),
    amount_due: decimal("amount_due", { precision: 12, scale: 2 })
        .notNull()
        .default("0.00"),
    status: mysqlEnum("status", [
        "Pending",
        "On Process",
        "For Payment",
        "Paid",
        "For Printing",
        "For Delivery",
        "Delivered",
        "Approved",
        "Denied",
        "Not Required",
    ])
        .notNull()
        .default("Pending"),
    viewed: boolean("viewed").default(false).notNull(),
    approved_by: bigint("approved_by", { mode: "number" }), // chapter president
    approved_at: timestamp("approved_at"),
    remarks: varchar("remarks", { length: 255 }),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
