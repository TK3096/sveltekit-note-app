<script lang="ts">
  import type { PageServerData } from './$types'

  import List from '$components/notes/List.svelte'

  export let data: PageServerData
</script>

<h1 class="text-3xl font-bold mb-10">Latest Notes</h1>

<List data={data.notes} />
