<script>

  import httpMethod from '/plug-ins/descriptions/http-method.js';

  export let api;
  export let field;
  let value = api.signal( field.id );
  // value={method.name} bind:group={$value}
</script>

<div class="btn-group mb-3" role="group" aria-label="Http Methods">
  {#each httpMethod as method, index}
    <input type="radio" class="btn-check" name="httpMethod" id="httpMethod{method.id}" autocomplete="off" value={method.name} bind:group={$value}>
    <label class="btn btn-outline-secondary" for="httpMethod{method.id}">{method.name}</label>
  {/each}
</div>
