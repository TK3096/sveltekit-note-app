<script lang="ts">
  export let value: string = ''
  export let label: string = ''
  export let placeholder: string | undefined = undefined
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let rows: number = 4

  let isFocus = false

  const handleFocus = () => {
    isFocus = true
  }

  const handleBlur = () => {
    isFocus = false
  }
</script>

<div class="flex flex-col group">
  <label
    for={id}
    class="mb-1 group-hover:text-sky-500 ease-in-out duration-300 {isFocus
      ? 'text-sky-500'
      : 'text-white'} font-bold">{label}</label
  >
  <textarea
    {id}
    {name}
    {placeholder}
    {rows}
    bind:value
    on:focus={handleFocus}
    on:blur={handleBlur}
    style="resize:none"
    class="py-2 px-3 rounded-md outline-none outline-offset-0 group-hover:outline-sky-600 focus:outline-sky-600 bg-zinc-200/10 ease-in-out duration-300"
  />
</div>
