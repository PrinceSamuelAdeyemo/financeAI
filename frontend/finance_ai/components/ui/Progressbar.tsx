import { ProgressbarType } from "@/Types/allTypes";

export default function Progressbar({position, color}: ProgressbarType){
    const progress_position = `w-[${position}%]`
    console.log(progress_position);
    console.log(`${position}%`)

    return (
        <div className="w-full relative rounded-2xl bg-white h-5 border-1 border-gray-400">
            <div style={{width: `${position}%`}} className={`absolute top-0 left-0 h-full rounded-2xl bg-${color}`}>
            </div>
        </div>
    )
}