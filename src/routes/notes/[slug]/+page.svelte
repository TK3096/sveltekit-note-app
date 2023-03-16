<script lang="ts">
  import type { LayoutServerData } from './$types'

  export let data: LayoutServerData
</script>

<p>{@html data.note?.description}</p>
