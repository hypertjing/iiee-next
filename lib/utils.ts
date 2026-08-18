import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isExpired(expirationDate: Date): boolean | "dormant" {
    const today = new Date(Date.now());
    const expDate = new Date(expirationDate);

    if (expDate < new Date("2016-01-01")) {
        return "dormant";
    }

    return expDate < today ? true : false;
}

export function getInitials(name: string) {
    const names = name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isValidDateString(dateString: string) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateString)) return false;

    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

// type MapLicenseTypeReturnType =
//     | "Registered Master Electrician"
//     | "Registered Electrical Engineer"
//     | "Professional Electrical Engineer"
//     | "Bachelor of Science in Electrical Engineering";

// export function mapLicenseType(
//     type: "RME" | "REE" | "PEE" | "BSEE",
// ): MapLicenseTypeReturnType {
//     if (type === "RME") {
//         return "Registered Master Electrician";
//     } else if (type === "REE") {
//         return "Registered Electrical Engineer";
//     } else if (type === "PEE") {
//         return "Professional Electrical Engineer";
//     } else {
//         return "Bachelor of Science in Electrical Engineering";
//     }
// }
