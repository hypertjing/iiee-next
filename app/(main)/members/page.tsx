import { Suspense } from "react";
import Members from "./members-table/Members";
import RegisteMemberForm from "./RegisteMemberForm";

export default async function MembersPage() {
    return (
        <div>
            {/* <div className="mb-4">Members</div> */}
            <RegisteMemberForm />
            <Suspense fallback={<div>Loading...</div>}>
                <Members />
            </Suspense>
        </div>
    );
}
