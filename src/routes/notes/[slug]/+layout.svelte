<script lang="ts">
  import type { LayoutServerData } from './$types'

  export let data: LayoutServerData
</script>

<section class="grid grid-cols-3 gap-5">
  <div class="col-span-2 py-3 px-6 bg-slate-100/10 rounded-md h-[85vh]">
    <h2 class="font-bold text-3xl">{data?.note?.title}</h2>
    <hr class="mt-2 mb-5" />
    <div class="overflow-y-scroll h-[90%]">
      <slot />
    </div>
  </div>
  <div class="py-3 bg-slate-100/10 rounded-md h-full">
    <h2 class="text-lg text-center font-bold">Latest</h2>
    <div class="overflow-y-scroll px-6">
      <ul class="mt-4">
        {#each data.notes as note (note.id)}
          <li
            class="truncate hover:text-sky-600 ease-in-out duration-300 hover:scale-110 my-2"
          >
            <a href={`/notes/${note.slug}`}>{note.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
