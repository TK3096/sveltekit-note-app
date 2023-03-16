<script lang="ts">
  import type { INote } from '$lib/server/database'

  import { goto } from '$app/navigation'

  import Card from './Card.svelte'

  export let data: INote[] = []
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
  {#each data as item (item.id)}
    <li>
      <Card
        title={item.title}
        description={item.description}
        on:click={() => goto(`/notes/${item.slug}`)}
      />
    </li>
  {:else}
    <p class="font-bold text-center col-span-1 md:col-span-2">Empty notes</p>
  {/each}
</ul>
