import RequestForm, { RequestFormType } from "./components/RequestForm";

export type YesNo = "yes" | "no";

export default async function CogsPage() {
    async function submitRequest(data: RequestFormType) {
        "use server";
        console.log(data);
    }

    const user_has_voted = true;

    return (
        <div>
            {/* <div>CogsPage</div> */}
            <RequestForm
                user_has_voted={user_has_voted}
                onSubmitAction={submitRequest}
            />
            {/* <DateExpired /> */}
        </div>
    );
}
