<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let disabled: boolean = false
  export let varient: 'primary' | 'error' | 'success' = 'primary'

  let bg: string
  let bg2: string
  let hover: string
  let disable: string

  switch (varient) {
    case 'success': {
      bg = 'bg-lime-600'
      bg2 = 'bg-lime-700'
      hover = 'hover:bg-lime-500 hover:translate-y-[-4px] hover:text-slate-50'
      disable =
        'disabled:bg-zinc-500 disabled:cursor-not-allowed disabled:text-gray-400'
      break
    }
    case 'error': {
      bg = 'bg-red-600'
      bg2 = 'bg-red-700'
      hover = 'hover:bg-red-500 hover:translate-y-[-4px] hover:text-slate-50'
      disable =
        'disabled:bg-zinc-500 disabled:cursor-not-allowed disabled:text-gray-400'
      break
    }
    default: {
      bg = 'bg-sky-600'
      bg2 = 'bg-sky-700'
      hover = 'hover:bg-sky-500 hover:translate-y-[-4px] hover:text-slate-50'
      disable =
        'disabled:bg-zinc-500 disabled:cursor-not-allowed disabled:text-gray-400'
      break
    }
  }
</script>

<div class="{bg2} inline-block rounded-md">
  <button
    {disabled}
    {type}
    on:click
    class="px-4 py-1 rounded-md {bg} {!disabled &&
      hover} {disable} ease-in-out duration-300"><slot /></button
  >
</div>
