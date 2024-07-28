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

<!-- <div class="col-2" style="background-color: lch({l} {c} {h} / {a});"></div> -->

			<div class="mb-3 row p-2" style="background-color: lch({l} {c} {h} / {a});">
			</div>

			<div class="mb-3 row">
				<label for="inputLength" class="col-sm-4 col-form-label text-muted">length {$length}%</label>
				<div class="col-sm-8">
				<input id="inputLength" type="range" class="form-range" min="0" max="100" bind:value={$length}>
				</div>
			</div>

			<div class="mb-3 row">
				<label for="inputPerceivedLightness" class="col-sm-4 col-form-label text-muted">perceived lightness</label>
				<div class="col-sm-8">
				<input id="inputPerceivedLightness" type="range" class="form-range" min="0" max="100" bind:value={l}>
				</div>
			</div>

			<div class="mb-3 row">
				<label for="inputAmountOfColor" class="col-sm-4 col-form-label text-muted">amount of color</label>
				<div class="col-sm-8">
				<input id="inputAmountOfColor" type="range" class="form-range" min="0" max="132" bind:value={c}>
				</div>
			</div>

			<div class="mb-3 row">
				<label for="inputHueAngle" class="col-sm-4 col-form-label text-muted">hue angle</label>
				<div class="col-sm-8">
				<input id="inputHueAngle" type="range" class="form-range" min="0" max="360" bind:value={h}>
				</div>
			</div>

			<div class="mb-3 row">
				<label for="inputAlpha" class="col-sm-4 col-form-label text-muted">alpha</label>
				<div class="col-sm-8">
				<input id="inputAlpha" type="range" class="form-range" min="0" max="1" step="0.01" bind:value={a}>
				</div>
			</div>

{/if}
