import Link from "next/link"

export default function TopBar()
{
    return (
        <section className="w-full h-[7%] bg-violet-950 flex flex-row-reverse items-center gap-2 text-gray-50 px-10">
            <Link href="aaa">Contact</Link>
            <Link href="#projects">Projects</Link>
        </section>
    )
}