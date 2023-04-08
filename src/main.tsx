import { createSignal } from "solid-js";
import { render } from "solid-js/web";
function Counter(props){
    console.log("Counter");
    return (
        <>
            <h1>Count is (props.children)</h1>
            <button onClick={props.onClick}>Click me</button>
        </>
    );
}
render(() => {
    const [count, setCount] = createSignal(0);
    console.log("App")
    return (<>
        <Counter onClick={() => setCount(count() + 1)}>{count() + 1}</Counter>
        <Counter onClick={() => setCount(count() + 2)}>{count() * 2}</Counter>
    </>)
}, document.getElementById("app")!);
