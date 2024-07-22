import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";
import Interface from '/plug-ins/components/hello/Interface.svelte';
import stopWheel from '/plug-ins/stop-wheel/index.js';

export default class Hello {
  static extends = [Application];

  observables = {
  };


  methods = {
    initialize(){
      this.w = 888;
      this.h = 888;
      this.createSocket('out', 1);
      this.createSocket('a', 1);
      this.createSocket('b', 1);
      this.createSocket('c', 1);

    },
    mount(){

      this.foreign = new Instance(Foreign);
      this.createWindowComponent( this.foreign );

      this.component = new Interface({
          target: this.foreign.body,
          props: {
            api: this,
            // context: this.context,
            // caption: this.caption,
            // text: this.text,
            // note: this.note,
            send: this.send.bind(this),
          }
      });

      // this.on('name', title=>this.component.$set({title}))
      // this.on('text', text=>this.component.$set({text}))
      // this.on('note', note=>this.component.$set({note}))
      // this.on('context', context=>this.component.$set({context}))

      this.addDisposable( stopWheel(this.foreign.body) );

    },

    destroy(){
      this.component.$destroy();
    },

  };
}
