<script>

  export let motif;

</script>

<div>
  <div class="col-md-4" style="min-height: 3rem; background: {motif.background||'black'};">
  </div>
</div>

<div class="ps-3">





<!--
  <div class="card m-0">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          {#each motif.colors as {color, length}, index}
          {color} {length}
          {/each}
        </div>
      </div>
      <div class="col-md-4" style="min-height: 3rem; background: {motif.background};">
      </div>
    </div>
    </div> -->


  {#each motif.levels as motif, index}
     <svelte:self {motif} />
  {/each}

</div>
