<script>
	import { onMount } from 'svelte';
  import chroma from 'chroma-js';

  export let api;
  export let stop;
  export let refresh;

  let l = 0;
  let c = 0;
  let h = 0;
  let a = 1;

  let mounted = false;

  

  onMount(() => {

    const converted = chroma(stop.color).lch()
    const alpha = chroma(stop.color).alpha()

    console.log('XXX, converted', converted);

    l = converted[0];
    c = converted[1];
    h = converted[2];

    a = alpha;

    mounted = true;
	});

  $: {
    if(mounted){
    const updated = chroma.lch(l,c,h).alpha(a).hex();
      console.log('XXX Update', l,c,h, updated);
      stop.color = updated;
      refresh()
    }
  }

</script>


{#if stop}
{stop.color}
  <div class="row">
  <div class="col-8">

    <input type="range" class="form-range" min="0" max="100" bind:value={l}>
    <input type="range" class="form-range" min="0" max="132" bind:value={c}>
    <input type="range" class="form-range" min="0" max="360" bind:value={h}>
    <input type="range" class="form-range" min="0" max="1" step="0.1" bind:value={a}>

  </div>
  <div class="col-2" style="background-color: {stop.color};">

  </div>
  <div class="col-2" style="background-color: lch({l} {c} {h} / {a});">

  </div>
  </div>
{/if}
