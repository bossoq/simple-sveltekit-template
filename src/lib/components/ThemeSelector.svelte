<script lang="ts">
  import { darkTheme } from '$lib/store'
  export let themeIcons: string[]
</script>

<div class="text-xs sm:text-base fixed top-0 left-0 p-2 z-10 text-white dark:text-black">
  <p
    on:click={() => ($darkTheme = !$darkTheme)}
    class="cursor-pointer select-none p-2 bg-sky-800 dark:bg-sky-200 rounded"
  >
    {$darkTheme ? themeIcons[0] : themeIcons[1]}
  </p>
</div>
