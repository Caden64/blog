import {createSignal, For, Show} from "solid-js";

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
                        <button onClick={subtract} class="px-1"> {`<`} </button>
                    </Show>
                    <For each={props.blogs} fallback={<div>loading...</div>}>
                        {(item) => <div>
                            <Show when={item.data.id >= count() && item.data.id < count() + 3}>
                                <a href={`blog/${item.slug}`} class="px-4">
                                    <div class="px-4 flex flex-col py-4 my-8">
                                        <div class="flex justify-center rounded bg-gray-200 border-gray-300 border">
                                            <img src="/favicon.png" alt="whoa" width="125" height="125" />
                                        </div>
                                        <div class="bg-gray-300 p-2 rounded flex justify-center items-center flex-col text-lg">
                                            <div class="text-xl">
                                                {item.data.title}
                                            </div>
                                            {item.data.description}
                                        </div>
                                    </div>
                                </a>
                            </Show>
                        </div>}
                    </For>
                    <Show when={props.blogs.length > count() + 2} fallback={<button class="px-1 opacity-50">{`>`}</button>}>
                        <button onClick={add} class="px-1">{`>`}</button>
                    </Show>
                </div>
                <div class="flex">
                    <For each={props.blogs.slice(1, props.blogs.length - 1)} fallback={<div>loading...</div>}>
                        {(_, index) => <button class="m-0.5 p-1 px-6 bg-orange-500" onClick={() => {setCount(index() + 1) } } /> }
                    </For>
                </div>
            </div>
        </>
    )
}