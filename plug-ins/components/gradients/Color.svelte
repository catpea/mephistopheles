<script>
	import { onMount } from 'svelte';
  import chroma from 'chroma-js';

  export let api;

  export let color;
  export let length;

  let l = 0;
  let c = 0;
  let h = 0;
  let a = 1;

	$: {
		const converted = chroma($color).lch()
		const alpha = chroma($color).alpha()
		console.log('XXX, converted', converted);
	  l = converted[0];
    c = converted[1];
    h = converted[2];
    a = alpha;
	};

	$: {
		const updated = chroma.lch(l,c,h).alpha(a).hex();
		console.log({updated});
		if($color != updated){
			color.set(updated);
			    color.notify()
		};
	};


</script>
{#if color}
  <div class="row m-0">
	  <div class="col-8">
	    <input type="range" class="form-range" min="0" max="100" bind:value={l}>
	    <input type="range" class="form-range" min="0" max="132" bind:value={c}>
	    <input type="range" class="form-range" min="0" max="360" bind:value={h}>
	    <input type="range" class="form-range" min="0" max="1" step="0.1" bind:value={a}>
	  </div>
	  <div class="col-2" style="background-color: {$color};"></div>
	  <div class="col-2" style="background-color: lch({l} {c} {h} / {a});"></div>
  </div>
{/if}
