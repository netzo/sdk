import { IS_BROWSER } from "@fresh/core/runtime";
import { Signal } from "@preact/signals";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter({ count }: CounterProps) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => count.value -= 1} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={() => count.value += 1} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
