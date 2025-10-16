import { ArrowLeft } from "lucide-react";

export default function BackButton(props: { onClick?: () => void }) {
    return (
        <button
            onClick={props.onClick}
            className="ms-[-5px] py-2 pe-4 inline-flex gap-2 items-center justify-start hover:underline text-sm cursor-pointer"
        >
            <ArrowLeft size={16} /> Back
        </button>
    );
}
