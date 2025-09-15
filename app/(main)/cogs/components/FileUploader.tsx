import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File, Paperclip } from "lucide-react";

export default function FileUploader(props: {
    file: File | undefined;
    onUpload: (file: File | undefined) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="relative bg-white w-min h-min overflow-hidden ">
                <Input
                    id="picture"
                    type="file"
                    name="file"
                    className="w-full z-10 absolute opacity-0"
                    onChange={(e) => props.onUpload(e.target.files?.[0])}
                    accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .png, .jpg, .jpeg"
                />
                <Button
                    className="z-0 text-[#4b6cb3]"
                    // size={"icon"}
                    variant={"outline"}
                >
                    <Paperclip className="" /> Upload
                </Button>
            </div>
            {props.file && (
                <div className="flex gap-2 p-2 rounded-md bg-amber-100 text-amber-700">
                    <File /> {props.file.name}
                </div>
            )}
        </div>
    );
}
