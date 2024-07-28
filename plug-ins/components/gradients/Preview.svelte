<script>
  import { writable, derived, get } from 'svelte/store';
  import { onDestroy } from 'svelte';

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



  const poke = writable(0);

  const trash = [];

  // $: preview = color2?`linear-gradient(${$angle}deg, ${$color0} ${$length0}, ${$color1} ${$length1}, ${$color2} ${$length2})`: `linear-gradient(${$angle}deg, ${$color0}, ${$color1})`;
  $: preview1 = derived(
          [poke, angle, colors, ...colors.get().map(o => o.color), ...colors.get().map(o => o.length)],
          () => {
              const pairs = get(colors).map( o => [get(o.color), get(o.length)]);
              const stops = pairs.map(o=>`${o[0]} ${o[1]}%`).join(', ');
              return `linear-gradient(${$angle}deg, ${stops})`;
          }
      );



  const knownStops = new Set();
  trash.push(colors.subscribe(v=>{
    for (const stop of v) {
      if(!knownStops.has(stop.id)){
        trash.push(stop.color.subscribe(()=>$poke++))
        trash.push(stop.length.subscribe(()=>$poke++))
        knownStops.add(stop.id)
      }
    }
  }));


  onDestroy(() => {
    trash.map(X=>X());
  });

</script>
<!-- <p>colors: {colors}</p> -->
<!-- <p>preview: {preview}</p> -->
<!-- <p>preview1: {JSON.stringify($preview1)}</p> -->
<div class="px-5 p-3" class:m-3={$padding} style="display: block; background: {$preview1};" on:click|stopPropagation={()=>$selection=$id}>
  {#each $levels as {id, padding, angle, colors, stops, levels}}
    {#key colors}
      <svelte:self {api} {id} {padding} {angle} {colors} {...stops} {levels} bind:selection/>
    {/key}
  {/each}
</div>
