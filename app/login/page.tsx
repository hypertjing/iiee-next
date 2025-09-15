"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-yellow-100/10">
            <motion.div
                className="absolute z-[-10]  w-100 h-100 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [10, 200, 300, 10], x: [10, 100, 50, 10] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute z-[-10] top-40 -right-32 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute z-[-10] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [0, 50, 0], x: [400, 400, 400] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
                style={{ top: "15%", left: "10%" }}
            />
            <motion.div
                className="absolute z-[-10] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{ y: [0, 300, 0], x: [0, -300, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "15%" }}
            />
            <div className="text-[#285987] fixed w-full p-4 font-bold backdrop-blur-2xl shadow-lg flex items-center gap-4">
                <Image
                    src={
                        "https://membership.iiee.org.ph/ee/assets/img/client-logo.png"
                    }
                    className="h-15 w-15"
                    height={100}
                    width={100}
                    alt={"logo"}
                />
                <div className="text-xl uppercase">
                    Institute of Integrated Electrical Engineers of the
                    Philippines, Inc.
                </div>
            </div>
            <div className="flex h-full">
                <div className="flex w-1/2 items-center justify-end text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-end px-10 text-black"
                    >
                        <h1 className="text-9xl font-bold mb-4 text-[#285987]">
                            Welcome Back!
                        </h1>
                        <p className="text-lg opacity-90">
                            Please login to continue to your dashboard.
                        </p>
                    </motion.div>
                </div>

                {/* Right side (Login Form) */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-transparent backdrop-blur-[100px] rounded-2xl shadow-xl p-10 w-full max-w-md z-100"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                            Login to your account
                        </h2>
                        <LoginForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div>Login to your account</div>
            <LoginForm />
        </div>
    );
}
