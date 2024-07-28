<script>
  export let api;
  export let id;
  export let padding;
  export let angle;
  export let levels;
  export let selection;
  export let color0;
  export let color1;
  export let color2;
  $: preview = color2?`linear-gradient(${$angle}deg, ${$color0}, ${$color1}, ${$color2})`: `linear-gradient(${$angle}deg, ${$color0}, ${$color1})`;
</script>
<div class="px-5 p-3" class:m-3={$padding} style="display: block; background: {preview};" on:click|stopPropagation={()=>selection=$id}>
  {#each $levels as {id, padding, angle, stops, levels}}
    <svelte:self {api} {id} {padding} {angle} {...stops} {levels} bind:selection/>
  {/each}
</div>
