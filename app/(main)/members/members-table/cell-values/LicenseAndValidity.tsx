import { isExpired, isValidDateString } from "@/lib/utils";
import { UserLicense } from "@/types";

export default function LicenseAndValidity(props: {
    index: number;
    userlicense: UserLicense;
    number_of_licenses: number | undefined;
}) {
    if (!props.number_of_licenses) {
        return null;
    }

    const isValidDate = isValidDateString(props.userlicense.validityDate);

    const expired =
        !isValidDate || isExpired(new Date(props.userlicense.validityDate));

    const isFirst = props.index === 1;
    const isLast = props.index === props.number_of_licenses;

    const validityDate = isValidDate
        ? Intl.DateTimeFormat(undefined, {
              month: "short",
              day: "2-digit",
              year: "numeric",
          }).format(new Date(props.userlicense.validityDate))
        : props.userlicense.validityDate;

    return (
        <div
            className={[
                "flex min-w-[220px] items-center justify-between border ps-3 pe-2 py-1",
                "bg-background transition-colors",
                `${expired ? "bg-red-50 hover:bg-red-100" : "bg-green-50 hover:bg-green-100"}`,

                isFirst
                    ? `rounded-t-lg ${expired ? "border-red-100" : "border-green-200"}`
                    : "",
                !isFirst
                    ? `border-t-0 ${expired ? "border-red-100" : "border-green-200"}`
                    : "",
                isLast
                    ? `rounded-b-lg ${expired ? "border-red-100" : "border-green-200"}`
                    : "",
            ].join(" ")}
        >
            {/* License Information */}
            <div className="flex min-w-0 items-center gap-3">
                <span
                    className={`size-2 shrink-0 rounded-full ${
                        expired ? "bg-red-500" : "bg-green-500"
                    }`}
                />

                <div className="flex min-w-0 flex-col">
                    <span className="text-sm font-semibold text-foreground">
                        {props.userlicense.licenseType}
                    </span>

                    <span className="text-xs text-muted-foreground font-mono">
                        {props.userlicense.licenseNo}
                    </span>
                </div>
            </div>

            {/* Validity */}
            <div className="flex shrink-0 flex-col items-end">
                <span
                    className={`text-xs font-semibold ${
                        expired
                            ? "text-red-600 dark:text-red-400"
                            : "text-green-600 dark:text-green-400"
                    }`}
                >
                    {validityDate}
                </span>

                <span className="text-[11px] text-muted-foreground">
                    Valid until
                </span>
            </div>
        </div>
    );
}
