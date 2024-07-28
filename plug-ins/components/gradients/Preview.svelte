<script>
  import { writable, derived, get } from 'svelte/store';

  export let api;
  export let id;
  export let padding;
  export let angle;
  export let levels;
  export let selection;

  export let colors;

  export let color0;
  export let color1;
  export let color2;

  export let length0;
  export let length1;
  export let length2;

  $: preview = color2?`linear-gradient(${$angle}deg, ${$color0} ${$length0}, ${$color1} ${$length1}, ${$color2} ${$length2})`: `linear-gradient(${$angle}deg, ${$color0}, ${$color1})`;
  $: preview1 = derived(
          [angle, colors, ...colors.get().map(o => o.color), ...colors.get().map(o => o.length)],
          // `get` is not reactive, but `derived` is
          () => `linear-gradient(${$angle}deg, ` + get(colors).map( o => [get(o.color), get(o.length)]).map(o=>`${o[0]} ${o[1]}%`).join(', ') + ')',
      );

</script>
<!-- <p>colors: {colors}</p> -->
<!-- <p>preview: {preview}</p> -->
<!-- <p>preview1: {JSON.stringify($preview1)}</p> -->
<div class="px-5 p-3" class:m-3={$padding} style="display: block; background: {$preview1};" on:click|stopPropagation={()=>selection=$id}>
  {#each $levels as {id, padding, angle, colors, stops, levels}}
    <svelte:self {api} {id} {padding} {angle} {colors} {...stops} {levels} bind:selection/>
  {/each}
</div>
