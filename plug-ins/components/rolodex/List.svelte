<script>
import { writable, derived, get } from 'svelte/store';

import library from './library.js';
export let api;
export let id;
export let name;
export let composition;
export let tables = writable([]);
export let reports;

let users = $tables.find(table=>table.id=='users').list;

</script>

<div class="">

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
    <tbody>
      {#each $users as {id, first, last, age}, index}
        <tr>
          <th scope="row">{get(id)}</th>
          <td>{get(first)}</td>
          <td>{get(last)}</td>
          <td>{get(age)}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  {#each $composition as {id, type, name, components, tables, reports}, index}
     <svelte:component this={library[type]} {api} composition={components} {tables} {reports} {id} {name}/>
  {/each}

  <slot>

  </slot>
</div>
