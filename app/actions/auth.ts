"use server";

import { db_old } from "@/db/old";
import { useraccounts } from "@/db/old/drizzle/schema";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import z from "zod";
import { LoginFormSchema } from "../lib/definitions";
import { createSession, deleteSession } from "../lib/session";

function hashPassword(password: string) {
    return crypto.createHash("sha512").update(password).digest("hex");
}

// type ReturnType = Promise<
//     | {
//           success: true;
//           error: null;
//       }
//     | {
//           success: false;
//           error: {
//               username: string | null;
//               password: string | null;
//           };
//       }
// >;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prev: unknown, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        const errors = z.treeifyError(validatedFields.error);
        return {
            ...errors,
            data: {
                username: formData.get("username") as string,
                password: formData.get("password") as string,
            },
        };
    }

    const { username, password } = validatedFields.data;

    const user_db = await db_old
        .select()
        .from(useraccounts)
        .where(eq(useraccounts.username, username));

    if (user_db.length <= 0) {
        return {
            errors: ["Account not found"],
            data: null,
            properties: null,
        };
    }

    const user = user_db[0];

    const hashedInput = hashPassword(hashPassword(password) + user.salt);

    if (hashedInput != user.password) {
        return {
            errors: ["Incorrect username or password"],
            data: { username },
            properties: null,
        };
    }

    await createSession(user.pkUserAccountsId, user.fkUserProfilesId);
    redirect("/cogs");
}

export async function logout() {
    await deleteSession();
    redirect("/login");
}
