<script>
  import { onMount } from 'svelte';
  import classIcons from '/plug-ins/class-icons/index.js';
  import Preview from '/plug-ins/components/gradients/Preview.svelte';
  import Color from '/plug-ins/components/gradients/Color.svelte';
  import Inkwell from '/plug-ins/components/gradients/Inkwell.svelte';
  import Range from '/plug-ins/components/gradients/Range.svelte';
  import Shared from '/plug-ins/components/gradients/Shared.svelte';
  import { writable, derived, get } from 'svelte/store';

  import library from './library.js';

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

  const composition = api.composition;

  onMount(() => {
	});

</script>

<div class="card alert-{$context} h-100 m-0 tx-bg" class:active={$selected}>

  <div class="card-header user-select-none tx-hi" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto m-0 p-0 tx-lo" use:api.stopWheel>

    {#each $composition as {id, type, name, components, tables, reports}, index}
       <svelte:component this={library[type]} {api} composition={components} {tables} {reports} {id} {name}/>
    {/each}

  </div>

  <div class="card-footer text-body-secondary tx-hi py-0 px-1">
    {$status}
    <button type="button" class="btn opacity-50 outline-none float-end p-0" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>

</div>
