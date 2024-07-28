<script>

  import fetchResponse from '/plug-ins/descriptions/fetch-response.js';
  export let api;
  export let field;
  let value = api.signal( field.id );
  // value={method.name} bind:group={$value}
</script>

<div class="btn-group mb-3" role="group" aria-label="Http Methods">
  {#each fetchResponse as response, index}
    <input type="radio" class="btn-check" name="fetchResponse" id="fetchResponse{response.id}" autocomplete="off" value={response.id} bind:group={$value}>
    <label class="btn btn-outline-secondary" for="fetchResponse{response.id}">{response.name}</label>
  {/each}
</div>
