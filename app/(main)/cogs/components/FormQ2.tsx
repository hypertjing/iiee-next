import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { YesNo } from "../page";

export default function FormQ2(props: {
    defaultValue: YesNo | undefined;
    onAnswer: (ans: YesNo) => void;
}) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-5">
            <div className="mb-3">
                Are you involved in any form of sanction, suspension, or
                disciplinary censure from your respective chapter and/or the
                institute?
            </div>
            <RadioGroup
                onValueChange={(value: YesNo) => props.onAnswer(value)}
                defaultValue={props.defaultValue}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="q2-option-yes" />
                    <Label htmlFor="q2-option-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="q2-option-no" />
                    <Label htmlFor="q2-option-no">No</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
