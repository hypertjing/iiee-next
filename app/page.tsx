import Link from "next/link";

export default function Home() {
    return (
        <div className="h-[500px] flex justify-center items-center text-4xl">
            <Link href={"/cogs"}>Open Portal</Link>
        </div>
    );
}
