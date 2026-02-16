// "use client";

import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";

// import { UserProfile } from "@/types";
// import {
//     QueryClient,
//     QueryClientProvider,
//     useQuery,
// } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// export default function UserInfo(props: { user_id: number }) {
//     const { isPending, error, data } = useQuery({
//         queryKey: ["user"],
//         queryFn: () =>
//             fetch(`/api/user/get-user-data?user_id=${props.user_id}`).then(
//                 (res) => res.json()
//             ),
//     });

//     const user_info: UserProfile = data?.user;

//     if (isPending) return "Loading...";

//     if (error) return "An error has occurred: " + error.message;
//     return (
//         <>
//             <QueryClientProvider client={queryClient}>
//                 {user_info.fname} {user_info.mname} {user_info.lname}
//             </QueryClientProvider>
//         </>
//     );
// }

export default async function UserInfo(props: { user_id: number }) {
    "use cache";
    // await sleep(1000 + Math.random() * 5000);

    const user_info = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.fkUserAccountsId, props.user_id))
            .limit(1)
    )[0];

    return (
        <div>
            {" "}
            {user_info.fname} {user_info.mname} {user_info.lname}
        </div>
    );
}
