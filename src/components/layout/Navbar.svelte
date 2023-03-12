<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount, onDestroy } from 'svelte'

  import NavbarItem from './NavbarItem.svelte'

  let background = 'bg-gray-300/5'

  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 0) {
      background = 'bg-slate-900'
    } else {
      background = 'bg-gray-300/5'
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', handleScroll)
    }
  })

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<nav
  class="fixed top-0 bottom-0 {background} w-screen h-16 ease-in-out duration-300"
>
  <ul class="flex justify-center items-center flex-nowrap gap-12 h-full">
    <NavbarItem label="Create" href="/create" />
    <NavbarItem label="Notes" href="/notes" />
  </ul>
</nav>
