import {createSignal, For, Show} from "solid-js";
import BlogCard from "@components/BlogCard";

export default function BlogCarousel(props: any) {
    const [count, setCount] = createSignal(1);
    const add = () => {
        if (props.amount > count() + 2) {
            setCount(count() + 1)
        }
    }
    const subtract = () => {
        if (count() > 1) {
            setCount(count() - 1)
        }
    }

    return (
        <>
            <div class="flex items-center justify-center flex-col">
                <div class="flex flex-row">
                    <Show when={count() > 1} fallback={<button class="px-1 opacity-50">{`<`}</button>}>
                        <button onClick={subtract} class="px-1 font-bold text-xl"> {`<`} </button>
                    </Show>
                    <For each={props.blogs} fallback={<div>loading...</div>}>
                        {(item) => <div>
                            <Show when={item.data.id >= count() && item.data.id < count() + 3}>
                                <BlogCard post={item} />
                            </Show>
                        </div>}
                    </For>
                    <Show when={props.blogs.length > count() + 2} fallback={<button class="px-1 opacity-50">{`>`}</button>}>
                        <button onClick={add} class="px-1 font-bold text-xl">{`>`}</button>
                    </Show>
                </div>
                <div class="flex">
                    <For each={props.blogs.slice(1, props.blogs.length - 1)} fallback={<div>loading...</div>}>
                        {(_, index) => (
                            <>
                                <Show when={ index() + 1 === count()} fallback={<button class="m-0.5 p-1 px-6 bg-orange-500" onClick={() => {setCount(index() + 1)}}/>}>
                                    <button class="m-0.5 p-1 px-6 bg-blue-500" onClick={() => {setCount(index() + 1)}}/>
                                </Show>
                            </>
                        )}
                    </For>
                </div>
            </div>
        </>
    )
}