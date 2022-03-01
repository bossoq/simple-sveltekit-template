<script lang="ts">
  // Based on code from https://stackoverflow.com/questions/59629947/how-do-i-load-an-external-js-library-in-svelte-sapper
  import { onMount, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let src: string
  export let libraryDetectionObject: string
  let script: HTMLScriptElement
  onMount(() => {
    if (libraryDetectionObject && window && typeof window[libraryDetectionObject] !== 'undefined') {
      return dispatch('load')
    }
    script.addEventListener('load', () => {
      dispatch('load')
    })
    script.addEventListener('error', (event) => {
      dispatch('error')
    })
  })
</script>

<svelte:head>
  <script bind:this={script} {src}></script>
</svelte:head>
