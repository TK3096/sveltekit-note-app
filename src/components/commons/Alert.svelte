<script lang="ts">
  import { scale, fade } from 'svelte/transition'

  export let show: boolean = false
</script>

{#if show}
  <div
    in:scale={{ duration: 800 }}
    out:fade={{ duration: 400 }}
    class="bg-red-700 rounded-md px-3 py-2 my-2 flex justify-between align-middle"
  >
    <slot />
    <button class="hover:text-gray-300" on:click={() => (show = false)}
      >x</button
    >
  </div>
{/if}
