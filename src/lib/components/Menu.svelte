<script lang="ts">
  import { modalViewed } from '$lib/store'
  import { handleModalClass } from '$lib/handleModal'
  interface Item {
    name: string
    url: string
  }

  export let items: Item[] = []
</script>

<div
  class="flex flex-row text-xs sm:text-base text-right fixed top-2 sm:top-auto sm:bottom-4 right-0 p-2 z-10 text-emerald-800 dark:text-emerald-200"
>
  {#each items as { name, url }}
    <a href={url} class="select-none p-2 mr-2" target="_blank" rel="noreferrer">{name}</a>
  {/each}
  <p
    class="bg-sky-800 dark:bg-sky-200 rounded-full w-6 h-6 sm:w-8 sm:h-8 p-2 text-white dark:text-black text-center my-1 py-1 cursor-pointer"
    on:click={(e) => handleModalClass(e, $modalViewed)}
  >
    ?
  </p>
</div>
