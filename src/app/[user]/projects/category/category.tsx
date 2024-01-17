
export default function Category(props : {
    name : string, 
    projects : Array<{url : string, title : string}>
})
{
    return (
        <div>
            <h1>{props.name}</h1>
            <ul>
            {
                props.projects.map(e => {
                    return (
                       <li>
                        <a href={e.url}>{e.title}</a>
                       </li> 
                    )
                })
            }
            </ul>
        </div>
    )
}