import { UserProfile } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function UserInfo(props: { user_id: number }) {
    const { isPending, error, data } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            fetch(`/api/user/get-user-data?user_id=${props.user_id}`).then(
                (res) => res.json()
            ),
    });

    const user_info: UserProfile = data?.user;

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    return (
        <>
            {user_info.fname} {user_info.mname} {user_info.lname}
        </>
    );
}
