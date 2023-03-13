<script lang="ts">
  import Input from '$components/commons/Input.svelte'
  import Textarea from '$components/commons/Textarea.svelte'
  import Button from '$components/commons/Button.svelte'
</script>

<form
  method="POST"
  on:submit|preventDefault={(event) => {
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
  }}
>
  <Input placeholder="Note title" label="Title" name="title" id="title" />
  <Textarea
    label="Description"
    name="description"
    id="description"
    placeholder="Note content"
  />
  <Button disabled>Submit</Button>
  <Button varient="error">Submit 2</Button>
  <Button varient="success">Submit 3</Button>
</form>
