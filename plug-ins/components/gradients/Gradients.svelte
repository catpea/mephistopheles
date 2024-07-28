<script>
  import { onMount } from 'svelte';
  import classIcons from '/plug-ins/class-icons/index.js';
  import Preview from '/plug-ins/components/gradients/Preview.svelte';
  import Color from '/plug-ins/components/gradients/Color.svelte';


  export let api;

  const selected = api.signal('selected');
  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const status = api.signal('status');


  const w = api.signal('w');
  const h = api.signal('h');

  // $: api.send('out', {a,b,c})


  // ---

  const motif = api.signal('motif');
  let selection = null;
  $: colors = selection?$motif.get(selection).colors.get():[];

  onMount(() => {
	});

</script>

<div class="card alert-{$context} h-100 m-0 tx-bg" class:active={$selected}>

  <div class="card-header user-select-none tx-hi" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto m-0 p-0 tx-lo" use:api.stopWheel>
    {#each [$motif] as {id, padding, angle, stops, levels}, index}
      <Preview {api} {id} {padding} {angle} {...stops} {levels} bind:selection/>
    {/each}
    {#if selection}
      {#each colors as {color, length}}
         <Color {api} {color} {length} />
      {/each}
    {/if}
    <!-- <input class="btn btn-primary tx-hi" type="button" value="Export" on:click={api.execute()}> -->
  </div>


  <div class="card-footer text-body-secondary tx-hi py-0 px-1">
    {$status}
    <button type="button" class="btn opacity-50 outline-none float-end p-0" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>

</div>
