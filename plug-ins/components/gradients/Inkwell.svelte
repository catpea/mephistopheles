<script>
	import { onMount } from 'svelte';
  import chroma from 'chroma-js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  export let api;

  export let color;
  export let selection;

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
	<div class="p-2 border-bottom border-secondary" style="background-color: lch({l} {c} {h} / {a});" on:click={() => dispatch('click', selection)}>
	</div>
{/if}
