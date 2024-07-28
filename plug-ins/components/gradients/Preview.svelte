<script>
  export let api;
  export let motif;
  export let selection;
</script>

<div class="px-5 p-3" class:m-3={motif.padding} style="display: block; background: {motif.background};" on:click|stopPropagation={()=>selection=motif}>
  {#each motif.levels as motif, index}
    <svelte:self {api} {motif} bind:selection/>
  {/each}
</div>
