import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { YesNo } from "../page";

export default function FormQ1(props: {
    defaultValue: YesNo | undefined;
    onAnswer: (ans: YesNo) => void;
}) {
    return (
        <div className="bg-white rounded-xl py-5">
            <div className="mb-3">
                Are you involved in any investigation for unethical practices of
                electrical engineering?
            </div>
            <RadioGroup
                onValueChange={(value: YesNo) => props.onAnswer(value)}
                defaultValue={props.defaultValue}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="q1-option-yes" />
                    <Label htmlFor="q1-option-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="q1-option-no" />
                    <Label htmlFor="q1-option-no">No</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
