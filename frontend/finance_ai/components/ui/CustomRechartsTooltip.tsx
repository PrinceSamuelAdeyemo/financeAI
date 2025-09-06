import { TooltipProps } from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

export default function CustomRechartsTooltip({active, payload, label}: TooltipProps<ValueType, NameType>){
    if (active && payload && label){
        return (
            <div>
                {payload[0]}
            </div>
        )
    }
}