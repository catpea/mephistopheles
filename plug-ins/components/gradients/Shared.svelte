<script>

  export let api;
  export let angle;

</script>

<div class="mb-3 row">
	<label for="inputAngle" class="col-sm-4 col-form-label py-0 text-muted text-end">angle {$angle}</label>
	<div class="col-sm-8">
  	<input id="inputAngle" type="range" class="form-range" min="0" max="360" bind:value={$angle}>
	</div>
</div>
