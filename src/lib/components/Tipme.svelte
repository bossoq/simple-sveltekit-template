<script lang="ts">
  export let name: string
  export let label = '☕️ Buy me a coffee'
  const baseUrl = 'https://tipme.in.th/'
</script>

<div class="flex flex-row text-sm sm:text-base font-medium fixed top-auto bottom-4 left-0 p-2 z-10">
  <a href={baseUrl + name} target="_blank" rel="noreferrer">
    <button class="select-none rounded-2xl p-2 bg-red-600 text-white">{label}</button>
  </a>
</div>
