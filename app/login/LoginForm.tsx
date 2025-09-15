"use client";

import { login } from "@/app/actions/auth";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";

export default function LoginPage() {
    const [state, action, pending] = useActionState(login, null);

    return (
        <div className="max-w-lg p-5">
            <form action={action} className="space-y-4">
                <div className="text-sm text-red-600">{state?.errors}</div>
                <div className="space-y-2">
                    <Label>Username</Label>
                    <input
                        type="email"
                        defaultValue={state?.data?.username}
                        name="username"
                        className="w-full px-4 py-2 mb-4 border rounded-lg outline-none bg-gray-200 focus:ring-2 focus:ring-amber-400"
                    />
                    <div className="text-sm text-red-600">
                        {state?.properties?.username?.errors}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Password</Label>
                    <input
                        type="password"
                        defaultValue={state?.data?.password}
                        name="password"
                        className="w-full px-4 py-2 mb-6 border rounded-lg outline-none bg-gray-200 focus:ring-2 focus:ring-amber-400"
                    />
                    <div className="text-sm text-red-600">
                        {state?.properties?.password?.errors}
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="cursor-pointer flex justify-center gap-2 w-full bg-[#285987] text-white py-3 rounded-lg font-semibold shadow-md transition"
                >
                    {pending ? (
                        <>
                            <Loader2 className="animate-spin" /> Logging in...
                        </>
                    ) : (
                        "Login"
                    )}
                </motion.button>
            </form>
        </div>
    );
}
