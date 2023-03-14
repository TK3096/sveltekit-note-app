<script lang="ts">
  import type { PageServerData } from './$types'

  export let data: PageServerData
</script>

<h1>Todos list</h1>

{#each data.notes as note}
  <div>{note.title} - {note.description}</div>
{/each}
