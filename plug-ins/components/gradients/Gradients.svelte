<script>
  import { onMount } from 'svelte';
  import classIcons from '/plug-ins/class-icons/index.js';
  import Preview from '/plug-ins/components/gradients/Preview.svelte';
  import Color from '/plug-ins/components/gradients/Color.svelte';


  export let api;

  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const status = api.signal('status');

  const motif = api.signal('motif');

  const w = api.signal('w');
  const h = api.signal('h');

  let a = 1;
  let b = 2;
  $: c = a + b;

  $: api.send('out', {a,b,c})

  let selection = null;

  const x = api.signal('h');
  const selected = api.signal('selected');

  $:{
    console.log('XXX', $motif);
    console.log('XXX', motif );
  }

  onMount(() => {
		console.log('XXX the component has mounted', $motif);
	});

  function refresh(){
    motif.notify()
  }

</script>

<div class="card alert-{$context} h-100 m-0 tx-bg" class:active={$selected}>

  <div class="card-header user-select-none tx-hi" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto m-0 p-0" style="background-color: black;" use:api.stopWheel>
    <!-- <p>{$text}</p> -->
    {#each [$motif] as motif, index}
      <Preview {api} {motif} bind:selection/>
    {/each}
    <!-- <input class="btn btn-primary tx-hi" type="button" value="Export" on:click={api.execute()}> -->
  </div>

  {#if selection}

    {selection.id}

    {#key selection}
    {#each selection.colors as stop, index}
        <Color {api} {stop} {refresh}/>
    {/each}
    {/key}

  {/if}

  <div class="card-footer text-body-secondary tx-hi py-0 px-1">
    {$status}
    <button type="button" class="btn opacity-50 outline-none float-end p-0" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>

</div>
