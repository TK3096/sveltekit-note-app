<script lang="ts">
  import { scale, fade } from 'svelte/transition'

  export let open: boolean = false
  export let type: 'error' | 'success' | 'info' = 'info'
</script>

{#if open}
  <div
    class="rounded-md px-3 py-2 my-2 flex justify-between align-middle"
    class:success={type === 'success'}
    class:error={type === 'error'}
    class:info={type === 'info'}
    in:scale={{ duration: 800 }}
  >
    <slot />
    <button class="hover:text-gray-300" on:click={() => (open = false)}
      >x</button
    >
  </div>
{/if}

<style lang="postcss">
  .error {
    background-color: theme(colors.red.700);
  }

  .success {
    background-color: theme(colors.lime.700);
  }

  .info {
    background-color: theme(colors.sky.700);
  }
</style>
