<script lang="ts">
  interface Item {
    name: string
    url: string
  }

  export let items: Item[] = []
</script>

<div
  class="text-xs sm:text-base text-right fixed top-2 sm:top-auto sm:bottom-4 right-0 p-2 z-10 text-emerald-800 dark:text-emerald-200"
>
  {#each items as { name, url }}
    <a href={url} class="select-none p-2" target="_blank" rel="noreferrer">{name}</a>
  {/each}
</div>
