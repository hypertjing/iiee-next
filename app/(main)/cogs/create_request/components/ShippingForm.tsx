import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShippingType } from "@/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ShippingForm() {
    const { data, error, isLoading } = useSWR<ShippingType[]>(
        "/api/shippings",
        fetcher
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading shipping types.</p>;

    if (!data) {
        return;
    }

    return (
        <div className="bg-white rounded-xl p-5">
            <div className="mb-3">
                Delivery Options <span className="text-lg text-red-500">*</span>
            </div>
            <RadioGroup
                onValueChange={(value) => {}}
                // defaultValue={props.defaultValue}
            >
                {data.map((shippingtype) => (
                    <div
                        className="flex items-center space-x-2"
                        key={shippingtype.pkShippingTypesId}
                    >
                        <RadioGroupItem
                            value={`${shippingtype.pkShippingTypesId}`}
                            id={`stype-${shippingtype.pkShippingTypesId}`}
                        />
                        <Label
                            className="font-normal"
                            htmlFor={`stype-${shippingtype.pkShippingTypesId}`}
                        >
                            {shippingtype.code} - {shippingtype.description}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}
