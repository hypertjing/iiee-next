export default function FileUploaderImagePreview(props: { file: File }) {
    const image_url = URL.createObjectURL(props.file);
    return (
        <>
            {props.file && (
                <div className="rounded-md text-gray-700">
                    {props.file.name}
                </div>
            )}
            <div className="text-end w-[300px] bg-red-100">
                <img src={image_url} className="w-full" alt="hello" />
            </div>
        </>
    );
}
