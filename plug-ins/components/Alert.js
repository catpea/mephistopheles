import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";
import Interface from '/plug-ins/components/alert/Interface.svelte';
import stopWheel from '/plug-ins/stop-wheel/index.js';

export default class Alert {
  static extends = [Application];

  observables = {
  };


  methods = {
    initialize(){
      this.serializables = 'title context text note'   .split(' ');
      // this.createSocket('out', 1);
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
