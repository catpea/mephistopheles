<script>
  import { onMount } from 'svelte';
  import classIcons from '/plug-ins/class-icons/index.js';

  import WebUrl from '/plug-ins/fields/WebUrl.svelte';
  import HttpMethod from '/plug-ins/fields/HttpMethod.svelte';
  import FetchResponse from '/plug-ins/fields/FetchResponse.svelte';
  const components = {
    WebUrl,
    HttpMethod,
    FetchResponse,
  };

  export let api;

  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const status = api.signal('status');

  const fields = api.signal('fields');

  const w = api.signal('w');
  const h = api.signal('h');

  let a = 1;
  let b = 2;
  $: c = a + b;

  $: api.send('out', {a,b,c})
  $: api.send('a', a)
  $: api.send('b', b)
  $: api.send('c', c)


  const x = api.signal('h');
  const selected = api.signal('selected');

  $:{
    console.log('FFF', $fields);

  }

  onMount(() => {
		console.log('the component has mounted', $fields);
	});

</script>

<div class="card alert-{$context} h-100 m-0" class:active={$selected}>

  <div class="card-header user-select-none" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto" use:api.stopWheel>
    <p>{$text}</p>
    {#each $fields as field, index}
      <svelte:component this={components[field.type]} {field} {api}/>
    {/each}
    <div class="mb-3">
      <input class="btn btn-primary" type="button" value="Run" on:click={api.execute()}>
    </div>
  </div>

  <div class="card-footer text-body-secondary">
    {$status}
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; bottom:0; padding: .5rem;" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>

</div>
