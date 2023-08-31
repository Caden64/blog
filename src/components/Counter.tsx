import {Accessor, createSignal, For, Show} from "solid-js";

export default function Counter(props: any) {
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
                    <Show when={count() > 1} fallback={<div class="px-1 opacity-50">{`<`}</div>}>
                        <button onClick={subtract} class="px-1"> {`<`} </button>
                    </Show>
                    <For each={props.blogs} fallback={<div>loading...</div>}>
                        {(item) => <div>
                            <Show when={item.data.id >= count() && item.data.id < count() + 3}>
                                <a href={`blog/${item.slug}`} class="px-4">
                                    {item.slug}
                                </a>
                            </Show>
                        </div>}
                    </For>
                    <Show when={props.blogs.length > count() + 2} fallback={<div class="px-1 opacity-50">{`>`}</div>}>
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