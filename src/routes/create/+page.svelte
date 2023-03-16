<script lang="ts">
  import type { ActionData } from './$types'

  import { goto } from '$app/navigation'
  import { enhance } from '$app/forms'

  import delay from '$lib/delay'

  import Input from '$components/commons/Input.svelte'
  import Textarea from '$components/commons/Textarea.svelte'
  import Button from '$components/commons/Button.svelte'
  import Alert from '$components/commons/Alert.svelte'

  export let form: ActionData

  let title: string = ''
  let description: string = ''
  let slug: string = ''
  let isAlert: boolean = false

  $: isDirty = title && description && slug
  $: open = !!form?.message && isAlert

  const handleClear = () => {
    isAlert = false
    title = ''
    description = ''
    slug = ''
  }
</script>

<Alert {open} type={form?.success ? 'success' : 'error'}>{form?.message}</Alert>

<form
  method="POST"
  class="flex flex-col gap-2"
  use:enhance={() => {
    isAlert = true
    return async ({ update, result }) => {
      await update()

      if (result.type === 'success') {
        await delay(() => {
          goto('/notes')
        }, 800)
      }
    }
  }}
  action="?/create"
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
  <Input
    placeholder="slug"
    label="Slug"
    name="slug"
    id="slug"
    bind:value={slug}
    required
  />
  <div class="flex justify-center gap-3 mt-3">
    <Button varient="error" on:click={handleClear}>Clear</Button>
    <Button type="submit" disabled={!isDirty}>Submit</Button>
  </div>
</form>
