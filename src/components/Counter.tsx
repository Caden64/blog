import {createSignal, For, Show} from "solid-js";

export default function Counter(props: any) {
    const [count, setCount] = createSignal(1);
    const add = () => {
        if (props.wow.length > count() + 2) {
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
            <div class="flex items-center justify-center">
                <Show when={count() > 1} fallback={<div class="px-1">*</div>}>
                    <button onClick={subtract} class="px-1">-</button>
                </Show>
                <For each={props.wow} fallback={<div>loading...</div>}>
                    {(item) => <div>
                        <Show when={item.data.id >= count() && item.data.id < count() + 3}>
                            <a href={`blog/${item.slug}`} class="px-4">
                                {item.slug}
                            </a>
                        </Show>
                    </div>}
                </For>
                <Show when={props.wow.length > count() + 2} fallback={<div class="px-1">*</div>}>
                    <button onClick={add} class="px-1">+</button>
                </Show>
            </div>
        </>
    )
}