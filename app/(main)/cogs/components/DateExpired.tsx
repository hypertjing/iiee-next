"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isExpired } from "@/lib/utils";
import { useState } from "react";

export default function DateExpired() {
    const [date, setDate] = useState("");

    function testDate() {
        console.log(date);

        console.log(isExpired(new Date(date)));
    }

    return (
        <div>
            <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <Button onClick={testDate}>Test</Button>
        </div>
    );
}
