
export default function GraphComponent({title, message, children}: {title: string; message:string; children?: React.ReactNode}){

    return (
        <div className="flex flex-col gap-3 p-4 rounded-2xl border-2 border-gray-300 pb-10">
            <div className="flex flex-col gap-2">
                <p className="font-semibold">{title}</p>
                <p className="text-sm md:text-base">{message}</p>
            </div>
            {children}
        </div>
            
    )
}