import { redirect } from "next/navigation"

interface Props {
    titleOne: string,
    titleTwo: string,
    linkOne: string,
    linkTwo: string
}
export default function Sidebar(props: Props) {
    return (
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 flex justify-between mt-3 dark:text-white">
            <div onClick={() => location.href= props.linkOne} className="rounded-md  p-3 w-sidebar cursor-pointer bg-gray-200 dark:bg-slate-700">
                <h2 className="text-2xl ">{props.titleOne}</h2>
            </div>
            <div onClick={() => location.href = props.linkTwo}  className="rounded-md  p-3 w-sidebar cursor-pointer bg-gray-200 dark:bg-slate-700">
                <h2 className="text-2xl ">{props.titleTwo}</h2>
            </div>
        </div>
    )
}