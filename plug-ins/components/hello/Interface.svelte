<script>
  import classIcons from '/plug-ins/class-icons/index.js';

  export let api;

  const context = api.signal('context');
  const caption = api.signal('caption');
  const text = api.signal('text');
  const note = api.signal('note');

  const w = api.signal('w');
  const h = api.signal('h');

  let a = 1;
  let b = 2;
  $: c = a + b;

  $: api.send('out', {a,b,c})
  $: api.send('a', a)
  $: api.send('b', b)
  $: api.send('c', c)


  const x = api.signal('h');
  const selected = api.signal('selected');

</script>

<div class="card alert-{$context} h-100 m-0" class:active={$selected} style="overflow-y: scroll;">
  <div class="card-header user-select-none" class:text-warning={$selected} use:api.makeMovable>
    {$caption} ({parseInt($w)}x{parseInt($h)})
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; top:0; padding: .5rem;" aria-label="Close" on:click={()=>api.removeApplication()}><i class="bi bi-x"></i></button>

  </div>
  <div class="card-body">

  <p>{$text}</p>

  <div class="row">
   <div class="col">
     <input type="text" class="form-control" placeholder="First name" aria-label="First name">
   </div>
   <div class="col">
     <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
   </div>
  </div>

  <label for="exampleDataList" class="form-label">Datalist example</label>
  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
  <datalist id="datalistOptions">
   <option value="San Francisco">
   <option value="New York">
   <option value="Seattle">
   <option value="Los Angeles">
   <option value="Chicago">
  </datalist>
  <hr>

  <label for="exampleColorInput" class="form-label">Color picker</label>
  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
  <hr>

  <label for="customRange2" class="form-label">Example range = {c}</label>
  <input type="range" class="form-range" min="0" max="500" id="customRange2" bind:value={c}>
  <hr>
  <input type="number" bind:value={a}>
  <input type="number" bind:value={b}>
  <p>{c}</p>
  <hr>


  <form>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1">
   </div>
   <div class="mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1">
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
  </form>


  </div>


  <div class="card-footer text-body-secondary">
    {$note}
    <button type="button" class="btn opacity-50" style="position: absolute; right:0; bottom:0; padding: .5rem;" aria-label="Resize" use:api.makeResizable><i class="bi bi-grip-horizontal"></i></button>
  </div>


</div>
