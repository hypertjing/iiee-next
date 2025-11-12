"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { Download, Loader } from "lucide-react";
import { useState } from "react";

export default function DownloadButton() {
    const [generating, setGenerating] = useState(false);
    async function downloadCOGS() {
        setGenerating(true);
        const certificate = document.getElementById("certificate");
        if (!certificate) return;

        // Capture certificate as image
        const canvas = await html2canvas(certificate, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // Create A4 PDF
        const pdf = new jsPDF("portrait", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Adjust image to fit PDF
        pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);

        // Save file
        pdf.save("certificate.pdf");
        setGenerating(false);
    }

    return (
        <>
            {generating && (
                <div className="text-white bg-black/90 fixed w-full h-screen top-0 left-0 z-10 flex flex-col gap-3 justify-center items-center">
                    <div>
                        <Loader size={50} className="animate-spin" />
                    </div>
                    <div className="text-xl">
                        Generating PDF, please wait...
                    </div>
                </div>
            )}
            <Button
                disabled={generating}
                variant={"iieeblue"}
                onClick={downloadCOGS}
            >
                <Download /> Download
            </Button>
        </>
    );
}
