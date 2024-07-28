<script>
  import { onMount } from 'svelte';
  import classIcons from '/plug-ins/class-icons/index.js';
  import Preview from '/plug-ins/components/gradients/Preview.svelte';
  import Color from '/plug-ins/components/gradients/Color.svelte';
  import Inkwell from '/plug-ins/components/gradients/Inkwell.svelte';
  import Range from '/plug-ins/components/gradients/Range.svelte';
  import Shared from '/plug-ins/components/gradients/Shared.svelte';
  import { writable, derived, get } from 'svelte/store';


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
  let selection = writable(null);
  $: angle = $selection?$motif.get($selection).angle:0;
  $: selectedMotif = $selection?$motif.get($selection):{};
  // $: colors = selection?$motif.get(selection).colors:[];
  let selectedColorId = -1;
  $: selectedColor = $selection?$motif.get($selection).colors.get().find(o=>o.id==selectedColorId):null;
  $: colors = $selection?$motif.get($selection).colors:writable([]);

  // $: colors = derived(
  //         [selection, motif],
  //         () =>  {
  //           let response;
  //
  //           console.log('CCC', $selection, $motif);
  //
  //           if($selection){
  //             response = $motif.get($selection).colors;
  //           }else{
  //             response = [];
  //           }
  //
  //           console.log('CCC response', response);
  //
  //           return response;
  //         }
  //     );

  onMount(() => {
	});

</script>

<div class="card alert-{$context} h-100 m-0 tx-bg" class:active={$selected}>

  <div class="card-header user-select-none tx-hi" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>
  </div>

  <div class="card-body overflow-auto m-0 p-0 tx-lo" use:api.stopWheel>

    {#each [$motif] as {id, padding, angle, colors, stops, levels}, index}
      <Preview {api} {id} {padding} {angle} {colors} {...stops} {levels} bind:selection/>
    {/each}
    {#if selection}
      <div class="p-3">

      <div class="row mb-3">
        <div class="col-12 bg-body-tertiary user-select-none p-2">
          {#each $colors as {id, color, length}}
            <Range {id} {color} {length} selected={selectedColorId} on:click={(e)=>selectedColorId=id}/>
          {/each}
        </div>
      </div>

        <div class="row m-0">

          <!-- <div class="col-3 text-center">

            <div class="mb-3">
            {#each $colors as color}
               <Inkwell id={color.id} color={color.color} on:click={(e)=>selectedColorId=color.id}/>
            {/each}
            </div>



          </div> -->
          <div class="col">
            {#if selectedColor}
              <Shared {api} {angle} />
              <Color {api} {angle}  color={selectedColor.color} length={selectedColor.length} />
            {/if}
            <!-- <Shared {api} {angle} />
            {#each colors as {color, length}}
               <Color {api} {angle} {color} {length} />
            {/each} -->
          </div>
        </div>

        <div class="mb-3">
          <button type="button" class="btn btn-sm btn-secondary" on:click={selectedMotif.addColor('#2e3743', 0)}><i class="bi bi-plus-circle"></i></button>
        </div>


      </div>
    {/if}

    <!-- <input class="btn btn-primary tx-hi" type="button" value="Export" on:click={api.execute()}> -->
  </div>


  <div class="card-footer text-body-secondary tx-hi py-0 px-1">
    {$status}
    <button type="button" class="btn opacity-50 outline-none float-end p-0" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>

</div>
