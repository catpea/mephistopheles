<script>

  export let api;
  export let field;

  let value = api.signal( field.id );

</script>

<div class="mb-3">
  <label for="field{field.id}" class="form-label">{field.label} ({$value} {field.id})</label>
  <input type="string" class="form-control" id="field{field.id}" aria-describedby="{field.id}Help" bind:value={$value}>
  <div id="{field.id}Help" class="form-text">{field.help}</div>
</div>
