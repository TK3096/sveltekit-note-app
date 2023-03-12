<script lang="ts">
  import Input from '$components/commons/Input.svelte'
</script>

<form method="POST" action="?/create">
  <div>
    <Input />
    <!-- <label for="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Note title" /> -->
  </div>
  <div>
    <label for="description">Description</label>
    <textarea
      id="description"
      name="description"
      placeholder="Say something..."
      rows={4}
      class="text-black"
    />
  </div>
  <button type="submit">Submit</button>
</form>
