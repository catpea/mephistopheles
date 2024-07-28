<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  export let id;
  export let selected;
  export let color;
  export let length;

	let ballSize = 1.2
</script>

	<div class="position-relative pe-none" style="left:0; right:0; height: 0rem;">
	<div class="position-absolute rounded" style="top: {ballSize*0.9/2}rem; left: 0px; right: 0; background-color: {$color}; height: 2px;"></div>
		<div class="position-absolute" style="left:{$length}%;">
			<div class="position-absolute" class:border-primary={selected==id} class:border-dark-subtle={selected!=id} style="left:{-ballSize*(1*($length/100))}rem; width: {ballSize}rem; height:{ballSize}rem; border-radius: 50%; border-style: solid;  border-width: 2px; background-color: {$color};"/>
		</div>
	</div>
	<input type="range" class="form-range m-0 p-0" min="0" max="100" style="opacity: 0.005; height: 1rem;" bind:value={$length}  on:mousedown={() => dispatch('click')}>
