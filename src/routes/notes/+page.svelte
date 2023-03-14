<script lang="ts">
  import { onMount } from 'svelte'

  const handleList = async () => {
    const response = await fetch('/api/notes', {
      method: 'GET',
    })

    const { data } = await response.json()

    console.log(data)
  }

  onMount(() => {
    handleList()
  })
</script>

<h1>Todos list</h1>
