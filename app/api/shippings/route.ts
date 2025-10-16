// import "server-only";

import { db_old } from "@/db/old";
import { shippingtypes } from "@/db/old/drizzle/schema";

export async function GET() {
    try {
        const result = await db_old.select().from(shippingtypes);
        return Response.json(result);
    } catch (error) {
        console.error("Error fetching shipping types:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
        });
    }
}
