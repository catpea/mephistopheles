<script>
  import Entry from './Entry.svelte';
  import classIcons from '/plug-ins/class-icons/index.js';
  import {getFunctionSignature} from '/plug-ins/code-tools/index.js';

  export let stores;
  export let object;

  export let api;

  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const status = api.signal('status');
  const w = api.signal('w');
  const h = api.signal('h');
  const selected = api.signal('selected');

  export let paneItems;

  let opened = {
    children:true,
    Trait: true,
    Method: true,
    Observables: true,
  };

</script>

<!-- <div use:api.stopWheel> -->
<!--

style="height: {h}px;"
style="overflow-y: scroll"
 -->
<div class="card text-bg-{$context} h-100 m-0" class:active={$selected} >

  <div class="card-header user-select-none" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto" use:api.stopWheel>

  {#if object}

    <h3>
      {object.oo.name} Class;
      <small class="text-body-secondary">id:{object.id} <span style="font-size: .92rem;"><span></small>
    </h3>

      <div class="">


      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {#each object.oo.extends as item, i}
            <li class="breadcrumb-item"><i class="bi bi-{classIcons(item.name)} text-light pe-2"></i> {item.name}</li>
          {/each}
        </ol>
      </nav>



      {#if object.children}
        {@const feature = 'children'}
          <div class="card mb-3">
            <div class="card-header" on:click={()=>opened[feature]=!opened[feature]}>
            {#if opened[feature]}
            <i class="bi bi-caret-down-fill"></i>
            {:else}
            <i class="bi bi-caret-right"></i>
            {/if}
              Children
            </div>
            {#if opened[feature] && object.children}
              <ul class="list-group list-group-flush">
                {#each object.children.raw as item, i}
                  <li class="list-group-item"><i class="bi bi-{classIcons(item.oo.name)} text-light pe-2"></i>{item.oo.name}</li>
                  {#if item.oo.name == 'Pane'}
                    {#each object.pane.applications.raw as item, i}
                      <li class="list-group-item ps-5"><small><i class="bi bi-{classIcons(item.oo.name)} text-light pe-2"></i>{item.oo.name}</small></li>

                    {/each}
                  {/if}
                {/each}
              </ul>
            {/if}
          </div>
      {/if}


      {#if object}
        {@const feature = 'Trait'}
          <div class="card mb-3">
            <div class="card-header"  on:click={()=>opened[feature]=!opened[feature]}>
            {#if opened[feature]}
            <i class="bi bi-caret-down-fill"></i>
            {:else}
            <i class="bi bi-caret-right"></i>
            {/if}
              Traits
            </div>
            {#if opened[feature]}
              <ul class="list-group list-group-flush">
                {#each object.oo.getTraits() as item, i}
                  <li class="list-group-item" class:opacity-50={item.data.length==0}><i class="bi bi-{classIcons(item.name)} text-light pe-2"></i>{item.name}</li>
                  {#if item.data}
                    {#each item.data as item, i}
                      <li class="list-group-item ps-5"><small><i class="bi bi-{classIcons(feature)} text-light pe-2"></i>{item.name}({getFunctionSignature(item.code).join(', ')})</small></li>

                    {/each}
                  {/if}
                {/each}
              </ul>
            {/if}
          </div>
      {/if}

      {#if object}
        {@const feature = 'Method'}
          <div class="card mb-3">
            <div class="card-header" on:click={()=>opened[feature]=!opened[feature]}>
            {#if opened[feature]}
            <i class="bi bi-caret-down-fill"></i>
            {:else}
            <i class="bi bi-caret-right"></i>
            {/if}
              Methods
            </div>
            {#if opened[feature]}
              <ul class="list-group list-group-flush">
                {#each object.oo.getMethods() as item, i}
                  <li class="list-group-item"><i class="bi bi-{classIcons(item.name)} text-light pe-2"></i>{item.name}</li>
                  {#if item.data}
                    {#each item.data as item, i}
                      <li class="list-group-item ps-5"><small><i class="bi bi-{classIcons(feature)} text-light pe-2"></i>{item.name}</small></li>

                    {/each}
                  {/if}
                {/each}
              </ul>
            {/if}
          </div>
      {/if}


      {#if object}
        {@const feature = 'Observables'}
          <div class="card mb-3">
            <div class="card-header" on:click={()=>opened[feature]=!opened[feature]}>
            {#if opened[feature]}
            <i class="bi bi-caret-down-fill"></i>
            {:else}
            <i class="bi bi-caret-right"></i>
            {/if}
              Observables
            </div>
            {#if opened[feature]}
              <ul class="list-group list-group-flush">
                {#each object.oo.getObservables() as item, i}
                  <li class="list-group-item"><i class="bi bi-{classIcons(item.name)} text-light pe-2"></i>{item.name}</li>
                  {#if item.data}
                    {#each item.data as item, i}
                      <li class="list-group-item ps-5"><small><i class="bi bi-{classIcons(feature)} text-light pe-2"></i>{item.name}</small></li>

                    {/each}
                  {/if}
                {/each}
              </ul>
            {/if}
          </div>
      {/if}









        </div>



{/if}



</div>
<div class="card-footer text-body-secondary">
  {$status}
  <button type="button" class="btn opacity-50" style="position: absolute; right:0; bottom:0; padding: .5rem;" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
</div>
</div>

<!-- </div> -->
