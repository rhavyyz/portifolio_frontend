import Category from "@/app/[user]/projects/category/category"

export default function Projects()
{
    return (
        <section className="h-screen">
            <h1 id="projects">Projects</h1>
            <Category name="Qualquer nome" projects={[{title: "rraaaaa", url: "Poggers"}]}></Category>
        </section>
    )
}