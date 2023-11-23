import {For} from "solid-js";

export default function BlogCard(props: any) {
    return (
        <>
            <a href={`blog/${props.post.slug}`} class="px-4">
                <div class="px-4 flex flex-col py-4 my-8 rounded">
                    <div class="rounded border-gray-300 border">
                        <div class="flex justify-center bg-gray-200">
                            <img src="/favicon.png" alt="whoa" width="125" height="125" />
                        </div>
                        <div class="bg-gray-300 p-2 flex justify-center items-center flex-col text-lg">
                            <div class="text-xl">
                                {props.post.data.title}
                            </div>
                            {props.post.data.description}
                            <div class="grid grid-rows-2 grid-cols-3">
                                <For each={props.post.data.tags}>
                                    {(item) => <div class="p-0.5 px-1 m-0.5 rounded-xl bg-stone-100">
                                        {item}
                                    </div>}
                                </For>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}