<script lang="ts">
  export let href: string
  export let label: string
</script>

<li class="group">
  <div
    class="relative group-hover:text-sky-600 group-hover:ease-in-out duration-300 px-3 cursor-pointer"
  >
    <a {href}>{label}</a>
    <span
      class="
            invisible absolute bottom-[-0.25rem] left-0 border w-full opacity-0 scale-x-0 transition-all duration-300 origin-center ease-in-out 
            group-hover:visible group-hover:opacity-100 group-hover:scale-x-100 group-hover: border-sky-700
            "
    />
  </div>
</li>
