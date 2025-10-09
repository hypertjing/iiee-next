import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./db/old/drizzle",
    schema: "./db/old/schema.ts",
    dialect: "mysql",
    dbCredentials: {
        url: process.env.DATABASE_URL_OLD!,
    },
});
