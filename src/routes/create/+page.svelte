<script lang="ts">
  import { goto } from '$app/navigation'

  import delay from '$lib/delay'

  import Input from '$components/commons/Input.svelte'
  import Textarea from '$components/commons/Textarea.svelte'
  import Button from '$components/commons/Button.svelte'
  import Alert from '$components/commons/Alert.svelte'

  let title: string = ''
  let description: string = ''
  let message: string = ''
  let alertType: 'success' | 'error'

  $: isDirty = title && description

  const handleSubmit = async (event: Event) => {
    message = ''

    const form = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(form.entries())

    const response = await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()

    if (!response.ok) {
      message = result.message
      alertType = 'error'
    } else {
      message = 'Successfully'
      alertType = 'success'

      await delay(() => goto('/notes'), 800)
    }
  }

  const handleClear = () => {
    message = ''
    title = ''
    description = ''
  }
</script>

<Alert open={!!message} type={alertType}>{message}</Alert>

<form
  method="POST"
  class="flex flex-col gap-2"
  on:submit|preventDefault={handleSubmit}
>
  <Input
    placeholder="Note title"
    label="Title"
    name="title"
    id="title"
    bind:value={title}
    required
  />
  <Textarea
    label="Description"
    name="description"
    id="description"
    placeholder="Note content"
    bind:value={description}
    required
  />
  <div class="flex justify-center gap-3">
    <Button type="submit" disabled={!isDirty}>Submit</Button>
    <Button varient="error" on:click={handleClear}>Clear</Button>
  </div>
</form>
