import { Separator } from "@/components/ui/separator";
import type { CogsRequest, UserProfile } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import NationalOffiers from "./NationalOffiers";

export default function CertificateOld({
    requestor,
    request,
}: {
    requestor: UserProfile;
    request: CogsRequest;
}) {
    if (request.cogs_exp_date === null) {
        return;
    }

    return (
        <div
            id="certificate"
            className="w-full max-w-4xl"
            style={{
                width: "210mm",
                height: "297mm",
                padding: "10mm",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
        >
            <div className="flex justify-between gap-5 items-center">
                <div className="text-right">
                    <Image
                        src={
                            "https://membership.iiee.org.ph/ee/assets/img/client-logo.png"
                        }
                        className="w-[150px]"
                        height={100}
                        width={100}
                        alt={"logo"}
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-700 uppercase">
                        Institute of Integrated Electrical Engineers of the
                        Philippines, Inc.
                    </h2>
                    <div className="text-xs">
                        <p className="text-gray-600">PRC Cert. No. I-APO-016</p>
                        <p className="text-gray-600">
                            41 Monte de Piedad Street, Cubao, Quezon City, Metro
                            Manila 1111
                        </p>
                        <p className="text-gray-600">
                            Tel Nos.: 8477-4408, 8477-4074, 8477-4098, 8477-2561
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <img
                        src={"/images/aniv50.jpg"}
                        className="w-[220px]"
                        alt={"logo"}
                    />
                    {/* <Image
                                src={"images/aniv50.jpg"}
                                className="w-[150px]"
                                height={100}
                                width={100}
                                alt={"logo"}
                            /> */}
                </div>
            </div>

            <Separator className="my-4" />
            <div className="flex gap-7">
                <div className="w-[25%]">
                    <NationalOffiers />
                </div>
                <div className="w-[75%]">
                    <p className="text-sm font-semibold text-gray-700">
                        OCTOBER 29, 2025
                    </p>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-widest mt-2">
                            CERTIFICATE OF GOOD STANDING
                        </h1>
                    </div>

                    <div className="mt-6 text-justify text-gray-700 text-sm leading-relaxed">
                        <p>To Whom It May Concern:</p>
                        <p className="mt-3">
                            This is to certify that{" "}
                            <span className="font-bold underline">
                                ENGR.{" "}
                                {`${requestor.fname} ${requestor.mname} ${requestor.lname}`.toUpperCase()}
                            </span>{" "}
                            is a
                            <span className="font-bold underline ml-1">
                                {requestor.memberType.toUpperCase()} MEMBER
                            </span>{" "}
                            of the Institute of Integrated Electrical Engineers
                            of the Philippines, Inc. (IIEE).
                        </p>

                        <p className="mt-3">
                            This certification, which attests the membership in
                            good standing, shall remain valid until{" "}
                            {format(
                                new Date(request.cogs_exp_date),
                                "MMMM d, yyyy",
                            )}{" "}
                            or the same is ordered suspended or revoked by
                            competent authority.
                        </p>

                        <p className="mt-3">
                            IIEE is the only Professional Organization of
                            electrical practitioners in the Philippines
                            accredited by the Professional Regulation Commission
                            (PRC).
                        </p>

                        <p className="mt-3">
                            This certification is issued upon the request of{" "}
                            <span className="font-bold underline">
                                ENGR. {requestor.lname.toUpperCase()}
                            </span>{" "}
                            for the purpose of the{" "}
                            <span className="font-bold underline">
                                ASEAN Engineer Register
                            </span>{" "}
                            application.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-10 text-start">
                        <div>Certified by:</div>
                        <div>
                            <p className="font-bold underline">ALMA C. LARCE</p>
                            <p className="text-sm">
                                Head of the National Secretariat
                            </p>
                        </div>
                        <div>Noted by:</div>
                        <div>
                            <p className="font-bold underline">
                                ENGR. ALBERTO R. HERRERA JR.
                            </p>
                            <p className="text-sm">National President</p>
                        </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="text-sm text-gray-600 text-center">
                        <p>
                            INSTITUTE OF INTEGRATED ELECTRICAL ENGINEERS OF THE
                            PHILIPPINES, INC.
                        </p>
                        <p>www.iiee.org.ph</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
