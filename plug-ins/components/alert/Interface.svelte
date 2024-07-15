<script>
  import classIcons from '/plug-ins/class-icons/index.js';

  export let api;

  export let title;
  export let context;
  export let text;
  export let note;

</script>

<div class="alert alert-{context} alert-dismissible h-100 m-0" role="alert">
  <button type="button" class="btn-close" aria-label="Close" on:click={()=>api.removeApplication()} ></button>
  <h4 class="alert-heading">{title}</h4>
  <p>{text}</p>
  <hr>
  <p class="mb-0">{note}</p>
</div>
