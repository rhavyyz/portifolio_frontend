import Link from "next/link"

export default function TopBar()
{
    return (
        <section className="w-full h-[9%] bg-violet-950 flex flex-row-reverse items-center gap-2 text-gray-50 px-10">
            <Link href="aaa">a</Link>
            <Link href="aaa">a</Link>
        </section>
    )
}