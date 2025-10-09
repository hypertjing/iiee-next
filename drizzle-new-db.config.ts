import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./db/new/drizzle",
    schema: "./db/new/schema.ts",
    dialect: "mysql",
    dbCredentials: {
        url: process.env.DATABASE_URL_NEW!,
    },
});
