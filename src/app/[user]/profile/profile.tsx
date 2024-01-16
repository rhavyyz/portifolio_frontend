import Image from "next/image"

export default function Profile()
{
    return (
        <section className="h-[91%] flex flex-row">
            <div className="w-1/2">
                <Image width={50} height={50} src="/../../../../public/dummy.png" alt="dummy"/>
            </div>
            <div className=" w-1/2 bg-violet-950 text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, porro reprehenderit blanditiis sint quos, facere dignissimos deserunt explicabo provident perferendis quibusdam magni, commodi ipsam consectetur voluptas dolorum veritatis non officiis molestias est maiores ea esse ex tenetur! Ad dolorem praesentium natus tempora, enim iste sed cum sint ea beatae quasi recusandae facilis nihil eum a. Sit, reiciendis ex. Pariatur minus facilis accusamus ea vero rerum, aliquid odit amet ut deleniti fugit illum neque mollitia, totam nesciunt ex sint expedita dolorum sunt eos animi. Illo minima voluptate iste corrupti illum expedita ipsam ullam quasi officiis. Dolor iure, accusamus aliquid eius vel saepe ex, distinctio expedita eveniet iste mollitia quam doloribus laborum, quo in voluptatem rem minus ab libero nostrum cupiditate error repudiandae voluptatibus? Sint eaque tempore nesciunt quasi esse vitae, nisi libero accusantium voluptas animi incidunt itaque nulla dolorum inventore sapiente at perferendis repellat ducimus saepe in. Consequatur dolor blanditiis eaque qui expedita officiis placeat mollitia optio ratione, culpa animi aliquid ipsa beatae necessitatibus, itaque illum dicta numquam reprehenderit eligendi, explicabo eos autem. Eum culpa tenetur unde quae voluptatum nam laboriosam voluptatem architecto dolore sint minima itaque perspiciatis, tempore laborum quos nesciunt amet? Minus autem saepe non soluta iusto, temporibus sunt!
            </div>
        </section>
    )
}