import Image from "next/image"

export default function Profile()
{
    return (
        <section className="bg-violet-950 h-[93%] flex flex-row">
            <div className=" rounded-tr-[3.9vw] w-1/2 h-[100%] flex flex-col items-center justify-center bg-red-950 gap-[6rem] ">
                <div className="relative overflow-hidden w-[15vw] h-[15vw] rounded-[50%]">
                    <Image fill={true} src="/dummy.png" alt="dummy"/>
                </div>
                <div className="flex flex-raw gap-2 items-center justify-center text-gray-50">
                    <a href="">github</a>
                    <a href="">facebook</a>
                    <a href="">linkedin</a>
                </div>
            </div>
            <div className="scrollbar scrollbar-thin overflow-y-scroll overflow-x-hidden scroll-smooth focus:scroll-auto w-[44vw] bg-none text-gray-50 mx-[3vw] my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus sed quia harum sint quam quasi, fugit alias architecto deleniti deserunt nulla perferendis, sunt optio repudiandae? Dolore porro exercitationem deserunt! Repellat voluptatem obcaecati est minus minima sunt aliquid nemo voluptatum odio magni. Ullam voluptatibus voluptate quae beatae aut eligendi temporibus in. Quis nam laboriosam laborum, facilis, fugit asperiores tempore cumque labore voluptatum blanditiis amet mollitia necessitatibus cum! Aliquid nobis ea id ipsam illo, ipsa asperiores necessitatibus aspernatur omnis minima facere laudantium tenetur dolorem magnam libero illum blanditiis cupiditate, possimus itaque beatae. Molestias magni repudiandae porro itaque. Reiciendis dolore minima eum perspiciatis quos, voluptatibus ea consequuntur est numquam recusandae consequatur aperiam doloremque facere tempora illo beatae quas sunt nemo sit voluptatem harum tempore similique. Laboriosam aspernatur nulla quae alias iusto obcaecati a sit ab cum veritatis, illo nemo rem eligendi dolorem rerum odio repellendus minima placeat nisi error modi maiores reprehenderit! Perspiciatis qui molestias illum temporibus. Cum odit soluta vero accusamus architecto consectetur? Architecto unde quasi rem earum, doloribus ut perferendis consequuntur aliquid reprehenderit obcaecati omnis sequi magni fugiat beatae corrupti neque nisi. Placeat similique deleniti autem atque laborum dicta aliquam itaque iure? Optio ducimus eaque nam reprehenderit commodi eligendi consectetur!
            </div>
        </section>
    )
}