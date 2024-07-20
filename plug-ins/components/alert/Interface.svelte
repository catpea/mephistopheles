<script>
  import classIcons from '/plug-ins/class-icons/index.js';

  export let api;

  const caption = api.signal('caption');
  const context = api.signal('context');
  const text = api.signal('text');
  const status = api.signal('status');1

  const selected = api.signal('selected');

</script>

<div class="alert alert-{$context} alert-dismissible h-100 m-0" class:active={$selected} role="alert">
  <button type="button" class="btn-close" aria-label="Close" on:click={()=>api.removeApplication()} ></button>
  <button type="button" class="btn opacity-50" style="position: absolute; right:0; bottom:0; padding: .5rem;" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>

  <!-- <button type="button" class="btn btn-lg" style="position: absolute; right:0; top:0; padding: 1.25rem 1rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-power"></i></button> -->
  <h4 class="alert-heading user-select-none" class:text-warning={$selected} use:api.makeMovable>{$caption}</h4>
  <p class="overflow-auto" use:api.stopWheel>{$text}</p>
  <hr>
  <p class="mb-0">{$status}</p>

</div>
