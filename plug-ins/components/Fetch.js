import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";
import Interface from '/plug-ins/components/fetch/Fetch.svelte';
import stopWheel from '/plug-ins/stop-wheel/index.js';

import Direction from '/plug-ins/constants/Direction.js';

export default class Fetch {

  static extends = [Application];

  observables = {
    url:'wwww',
    method:'GET',
    headers:undefined,
    format:'json',
    body:undefined,
  };

  serializables = {
    url: 'string',
    method: 'string',
    format: 'string',
    headers: 'object',
    body: 'object',
  };

  traits = {
    async execute(){
      const response = await fetch(this.url, {
        headers: this.headers,
        method: this.method,
        body: JSON.stringify(this.body),
      });
      const data = await response[this.format]();
      this.send('out', data);
    }

  };

  methods = {
    initialize(){

      this.w = 800;
      this.h = 400;

      this.createSocket('out', 1);

      this.createField({ id:'url',    type: 'WebUrl', label: 'Web Address' });
      this.createField({ id:'method', type: 'HttpMethod'});
      this.createField({ id:'format',   type: 'FetchResponse'});
      // this.createField({ id:'headers',   type: 'HttpMethod'});

      this.createSocket('b', 1);
      this.createSocket('c', 1);

    },
    mount(){

      this.foreign = new Instance(Foreign);
      this.createWindowComponent( this.foreign );

      this.component = new Interface({
          target: this.foreign.body,
          props: { api: this }
      });

      this.addDisposable( stopWheel(this.foreign.body) );

    },

    destroy(){
      this.component.$destroy();
    },

  };
}
