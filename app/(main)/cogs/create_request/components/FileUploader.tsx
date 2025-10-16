import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, RotateCcw } from "lucide-react";
import FileUploaderImagePreview from "./FileUploaderImagePreview";

export default function FileUploader(props: {
    file: File | undefined;
    onUpload: (file: File | undefined) => void;
}) {
    return (
        <>
            <div className="relative bg-white w-min h-min overflow-hidden ">
                <Input
                    id="picture"
                    type="file"
                    name="file"
                    className="w-full z-10 absolute opacity-0"
                    onChange={(e) => props.onUpload(e.target.files?.[0])}
                    accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .png, .jpg, .jpeg"
                />
                {props.file ? (
                    <Button className="z-0" variant={"iieeyellow"}>
                        <RotateCcw /> Change
                    </Button>
                ) : (
                    <Button className="z-0 text-[#4b6cb3]" variant={"outline"}>
                        <Paperclip className="" /> Upload
                    </Button>
                )}
            </div>
            <div className="flex flex-col gap-2">
                {props.file && <FileUploaderImagePreview file={props.file} />}
            </div>
        </>
    );
}
