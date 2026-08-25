import { cacheLife, cacheTag } from "next/cache";
import { getMemberSanitizationRemarks } from "../../action-sanitize";
import MemberSanitizationRemarks from "./MemberSanitizationRemarks";

export default async function MemberSanitizationRemarksServer(props: {
    member_id: number;
}) {
    "use cache";
    cacheTag("sanitize-remarks");
    cacheLife("weeks");

    const remarks = await getMemberSanitizationRemarks(props.member_id);

    return (
        <MemberSanitizationRemarks
            remarks={remarks}
            member_id={props.member_id}
        />
    );
}
