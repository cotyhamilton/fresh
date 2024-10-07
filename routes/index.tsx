import { useSignal } from "@preact/signals";
import { define } from "@/utils.ts";
import Counter from "@/islands/counter.tsx";

export default define.page(function Home() {
  const count = useSignal(3);

  return (
    <div class="mx-auto px-4 py-8">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
});
