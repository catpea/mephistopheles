import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";

import Interface from '/plug-ins/components/alert/Interface.svelte';

import stopWheel from '/plug-ins/stop-wheel/index.js';

export default class Alert {
  static extends = [Application];

  observables = {
    context: 'primary',
    text: undefined,
  };

  methods = {
    initialize(){
      this.createSocket('out', 1);
    },
    mount(){

      this.foreign = new Instance(Foreign);
      this.createWindowComponent( this.foreign );

      this.component = new Interface({
          target: this.foreign.body,
          props: {
            title: this.title,
            context: this.context,
            text: this.text,
            note: this.note,
            send: this.send.bind(this),
          }
      });


      this.on('name', title=>this.component.$set({title}))
      this.on('text', text=>this.component.$set({text}))
      this.on('note', note=>this.component.$set({note}))
      this.on('context', context=>this.component.$set({context}))

    this.addDisposable( stopWheel(this.foreign.body) );

    },

    destroy(){
      this.component.$destroy();
    },

  };
}
