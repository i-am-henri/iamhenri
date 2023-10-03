interface Props {
    title: string
}
export default function Ueberschrift({title} : Props) {
    return (
        <div className="mt-4 w-6/12 p-3 rounded-md bg-gray-200 dark:text-white dark:bg-slate-700">
            <h1 className="font-bold text-4xl">{title}</h1>
        </div>
    )
}