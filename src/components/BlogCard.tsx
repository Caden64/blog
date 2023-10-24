export default function BlogCard(props: any) {
    return (
        <>
            <a href={`blog/${props.post.slug}`} class="px-4">
                <div class="px-4 flex flex-col py-4 my-8">
                    <div class="flex justify-center rounded bg-gray-200 border-gray-300 border">
                        <img src="/favicon.png" alt="whoa" width="125" height="125" />
                    </div>
                    <div class="bg-gray-300 p-2 rounded flex justify-center items-center flex-col text-lg">
                        <div class="text-xl">
                            {props.post.data.title}
                        </div>
                        {props.post.data.description}
                    </div>
                </div>
            </a>
        </>
    )
}