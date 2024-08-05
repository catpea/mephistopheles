<script>
import library from './library.js';
export let api;
export let id;
export let name;
export let composition;
</script>

<div class="row">

  {#each $composition as {id, type, name, components, tables, reports}, index}
     <svelte:component this={library[type]} {api} composition={components} {tables} {reports} {id} {name}/>
  {/each}
  <slot>

  </slot>
</div>
