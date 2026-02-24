"use client";

import { UserContext } from "@/contexts/user-context";
import { User } from "@/types";

export default function UserContextProvider(props: {
    children: React.ReactNode;
    user: User;
}) {
    return (
        <UserContext.Provider value={props.user}>
            {props.children}
        </UserContext.Provider>
    );
}
