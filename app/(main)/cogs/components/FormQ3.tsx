import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { YesNo } from "../page";

export default function FormQ3(props: {
    defaultValue: YesNo | undefined;
    onAnswer: (ans: YesNo) => void;
}) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-5">
            <div className="mb-3">
                Do you abide by the provisions of the Professional Practice
                Manual?
            </div>
            <RadioGroup
                onValueChange={(value: YesNo) => props.onAnswer(value)}
                defaultValue={props.defaultValue}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="q3-option-yes" />
                    <Label htmlFor="q3-option-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="q3-option-no" />
                    <Label htmlFor="q3-option-no">No</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
