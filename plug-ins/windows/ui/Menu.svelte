<script>
  import classIcons from '/plug-ins/class-icons/index.js';


  export let api;
  export let control;

  export let options = {data:[]};

</script>

<div class="card h-100 m-0">
  <div class="card-header">
    Operations
  </div>
  <div class="list-group list-group-flush overflow-auto h-100" use:api.stopWheel>
    {#each options.data as { text, value, action, icon }, i}
      <li class="list-group-item" style="cursor: pointer;" on:click={action}><i class="bi bi-{classIcons(icon)} text-light pe-2"></i>{text}</li>
    {/each}
  </div>

  <div class="card-footer text-body-secondary">
    Create new application.
  </div>
</div>
