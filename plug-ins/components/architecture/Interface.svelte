<script>
  import Entry from './Entry.svelte';
  import classIcons from '/plug-ins/class-icons/index.js';

  export let tree;

  export let api;

  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const status = api.signal('status');

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
</script>

<div class="card alert-{$context} h-100 m-0" class:active={$selected} style="overflow-y: scroll;">
  <div class="card-header user-select-none" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto" use:api.stopWheel>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="btn-group btn-group-sm float-end">
        <button type="button" class="btn btn-outline-secondary"> <i class="bi bi-vignette me-2"></i> Squelch </button>
          <button type="button" class="btn btn-outline-secondary" on:click={()=>tree.snapshot()}> <i class="bi bi-camera me-2"></i> Refresh Snapshot </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
      <ul class="list-unstyled my-3">
        <Entry {api} item={$tree}/>
      </ul>
      </div>
    </div>
  </div>

  </div>
  <div class="card-footer text-body-secondary">
    {$status}
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; bottom:0; padding: .5rem;" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>
</div>
