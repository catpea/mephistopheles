# :brain: data-signal
Data Signal Framework

## TODO

Keep eveything in a singel class
Eliminate Standalone Renderer
verbose ragbage collection functions

```HTML
<script type="module">
  globalThis.signalArray = new Signal([
    new Signal( {key:0, color:new Signal('primary'), name:new Signal('Alice')} ),
    new Signal( {key:1, color:new Signal('secondary'), name:new Signal('Bob')} ),
    new Signal( {key:2, color:new Signal('success'), name:new Signal('Carol')} ),
  ]);
</script>

<data-signal context="signalArray">
    <div class="card text-bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Hello, <data-signal property="name"></data-signal></h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</data-signal>

```
