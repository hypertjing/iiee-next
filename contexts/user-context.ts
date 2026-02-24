import { User } from "@/types";
import { createContext, useContext } from "react";

export const UserContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(UserContext);

    if (user === undefined) {
        throw new Error("You forgot to use the UserContext.Provider");
    }

    return user;
}
