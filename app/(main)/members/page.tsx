import { getAllRegions } from "@/app/lib/dal";
import { Metadata } from "next";
import {
    getRegionChapters,
    getUserProfilesAction,
    LicenseType,
    MemberStatusType,
} from "./actions";
import MembersServer from "./members-table/MembersServer";

export const metadata: Metadata = {
    title: "Members",
};

type SearchParams = Promise<{
    keyword?: string;
    region?: string;
    chapter?: string;
    member_type?: string;
    license_type?: LicenseType;
    offset?: string;
    limit?: string;
    status?: MemberStatusType;
}>;

export default async function MembersPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const params = await searchParams;

    const regions_list = await getAllRegions();

    const res_chapters = await getRegionChapters(params.region ?? "all");

    const users = await getUserProfilesAction({
        keyword: params.keyword ?? "",
        region: params.region ?? "all",
        chapter: params.chapter ?? "all",
        member_type: params.member_type ?? "all",
        license_type: params.license_type ?? "all",
        offset: Number(params.offset ?? 0),
        limit: Number(params.limit ?? 5),
        status: params.status ?? "all",
    });

    return (
        <div>
            <MembersServer
                member_chapters_select={res_chapters}
                regions_list={regions_list}
                table_user_profiles={users}
            />
        </div>
    );
}
