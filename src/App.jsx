import { createSignal, createEffect } from "solid-js";
import Header from "./components/Header";
import Counter from "./components/Counter";
function App() {
  const [counter, setCounter] = createSignal(0);
  const doubleCounter = () => counter() * 2;
  // console.log('App component');
  createEffect(() => {
    console.log('Effect- execute because counter updated', counter());
  });

  // fetch()
  // setInterval(() => {
  //   setCounter(counter() +1);
  // }, 1000);
  return (
    <>
      <Header/>
      <Counter value = {counter()}/>
      <p id = "counter">
        {doubleCounter()}
      </p>
      <div id="acctions">
        <button onclick={() => setCounter(counter() -1)} >-</button>
        <button onclick={() => setCounter((prevCounter) => prevCounter +1)}>+</button>
      </div>
    </>
  );
}

export default App;
