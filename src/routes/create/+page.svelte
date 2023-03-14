<script lang="ts">
  import Input from '$components/commons/Input.svelte'
  import Textarea from '$components/commons/Textarea.svelte'
  import Button from '$components/commons/Button.svelte'
  import Alert from '$components/commons/Alert.svelte'

  let message: string = ''

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
    }
  }
</script>

<Alert show={!!message}>{message}</Alert>

<form
  method="POST"
  class="flex flex-col gap-2"
  on:submit|preventDefault={handleSubmit}
>
  <Input placeholder="Note title" label="Title" name="title" id="title" />
  <Textarea
    label="Description"
    name="description"
    id="description"
    placeholder="Note content"
  />
  <div class="flex justify-center">
    <Button type="submit">Submit</Button>
  </div>
</form>
