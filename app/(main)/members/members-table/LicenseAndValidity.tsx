import { isExpired, isValidDateString } from "@/lib/utils";
import { UserLicense } from "@/types";

export default function LicenseAndValidity(props: {
    index: number;
    userlicense: UserLicense;
    number_of_licenses: number | undefined;
}) {
    if (!props.number_of_licenses) {
        return;
    }

    const is_first = props.index == 1 ? "rounded-tr-md rounded-tl-md" : "";
    const is_mid =
        props.index != 1 && props.index != props.number_of_licenses
            ? "rounded-none"
            : "";
    const is_last =
        props.index == props.number_of_licenses
            ? "rounded-br-md rounded-bl-md"
            : "";

    return (
        <div
            key={props.userlicense.pkUserLicenseId}
            className={`${is_first} ${is_mid} ${is_last} ${
                isExpired(new Date(props.userlicense.validityDate)) ||
                !isValidDateString(props.userlicense.validityDate)
                    ? "text-white bg-red-600 text-center"
                    : "text-white bg-green-600 text-center"
            } px-2 py-1 flex justify-between gap-1`}
        >
            <div>
                {props.userlicense.licenseType} {props.userlicense.licenseNo}
            </div>
            <div>
                {isValidDateString(props.userlicense.validityDate) ? (
                    Intl.DateTimeFormat(undefined, {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }).format(new Date(props.userlicense.validityDate))
                ) : (
                    <span>
                        {/* Invalid
                                                                            Expiry
                                                                            Date */}
                        {props.userlicense.validityDate}
                    </span>
                )}
            </div>
        </div>
    );
}
