<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let title: string
  export let description: string

  const dispatch = createEventDispatcher()

  let titleElement: HTMLDivElement
  let interval: number | undefined

  const handleMouseEnter = () => {
    interval = setInterval(() => {
      if (titleElement) {
        titleElement.scrollLeft += 1
      }
    }, 10)
  }

  const handleMouseLeave = () => {
    clearInterval(interval)
    if (titleElement) {
      titleElement.scrollLeft = 0
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="group rounded-md p-4 bg-slate-300 cursor-pointer ease-in-out duration-500 hover:scale-110 hover:bg-slate-600 hover:border-slate-500 hover:border-2"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click
>
  <div
    class="overflow-hidden scrollbar-hide group-hover:overflow-scroll"
    bind:this={titleElement}
  >
    <h3 class="text-black text-2xl whitespace-nowrap group-hover:text-white">
      {title}
    </h3>
  </div>
  <div class="w-1/2 mt-2">
    <p class="text-gray-400 text-sm truncate">
      {description}
    </p>
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
