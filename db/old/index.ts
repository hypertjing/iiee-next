import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

export const db_old = drizzle(process.env.DATABASE_URL_OLD!);
