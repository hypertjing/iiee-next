"use server";

import { refresh, updateTag } from "next/cache";

export async function reloadProfilePage(profile_id: number) {
    updateTag(`profile-${profile_id}`);
    refresh();
}
