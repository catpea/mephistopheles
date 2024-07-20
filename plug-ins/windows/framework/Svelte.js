import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import stopWheel from '/plug-ins/stop-wheel/index.js';

export default class Svelte {
  static extends = [];

  observables = {
  };

  traits = {

    stopWheel(el){
      this.addDisposable( stopWheel(el) );
    }
  };

  methods = {

    initialize(){
    },

    clean(){
    },

  };
}
