import {createSignal, For} from "solid-js";

export default function Counter(props: any) {
    const [count, setCount] = createSignal(0);
    const add = () => setCount(count() + 1);
    const subtract = () => setCount(count() - 1);

    return (
        <>
            <div class="flex p-4">
                <button onClick={subtract} class="px-1">-</button>
                <pre class="px-4">{count()}</pre>
                <button onClick={add}>+</button>
            </div>
            <div>
                <For each={props.wow} fallback={<div>loading...</div>}>
                    {(item) => <div>{item.slug}</div>}
                </For>
            </div>
        </>
    )
}
// Use a sliding window algorithm to get the 3 blog posts and use the slugs