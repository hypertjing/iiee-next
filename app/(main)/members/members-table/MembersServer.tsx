import { MemberChapters, MemberRegionChapter, MemberRegions } from "@/types";
import { Users } from "lucide-react";
import MemberStatusDashboard from "../dashboard/MemberStatusDashboard";
import MembersSearchFilters from "./MembersSearchFilters";
import { MembersTable } from "./MembersTable";
import { ScrollToTop } from "./ScrollToTop";

export default async function MembersServer(props: {
    regions_list: MemberRegions[];
    member_chapters_select: MemberChapters[];
    table_user_profiles: {
        members: MemberRegionChapter[];
        max_page: number;
        active_member: number;
        inactive_member: number;
        dormant_member: number;
    };
}) {
    return (
        <>
            <div className="mb-4 flex gap-2">
                <div className="w-full">
                    <div className="text-lg font-semibold flex items-center gap-2 mb-5">
                        <Users className="w-5 h-5 text-blue-500" />
                        Member Overview
                    </div>
                    <div className="">
                        <MemberStatusDashboard
                            totalMembers={props.table_user_profiles.max_page}
                            activeCount={
                                props.table_user_profiles.active_member
                            }
                            inactiveCount={
                                props.table_user_profiles.inactive_member
                            }
                            dormantCount={
                                props.table_user_profiles.dormant_member
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="mb-30">
                <MembersSearchFilters
                    total_members={props.table_user_profiles.max_page}
                    regions_list={props.regions_list}
                    member_chapters_select={props.member_chapters_select}
                >
                    <MembersTable data={props.table_user_profiles.members} />
                </MembersSearchFilters>
            </div>
            <ScrollToTop />
        </>
    );
}
