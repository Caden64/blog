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
            <div class="flex p-4">
                <button onClick={subtract} class="px-1">-</button>
                <pre class="px-4">{count()}</pre>
                <button onClick={add}>+</button>
            </div>
            <div>
                <For each={props.wow} fallback={<div>loading...</div>}>
                    {(item) => <div>
                        <Show when={item.data.id >= count() && item.data.id < count() + 3}>
                            {item.data.id}
                        </Show>
                    </div>}
                </For>
            </div>
        </>
    )
}