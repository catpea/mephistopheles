import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import stopWheel from '/plug-ins/stop-wheel/index.js';
import Field from '/plug-ins/windows/framework/svelte/Field.js';


export default class Svelte {
  static extends = [];

  observables = {
    fields: [],
  };

  traits = {

    stopWheel(el){
      this.addDisposable( stopWheel(el) );
    },

    createField(options){
      const { id, direction, label, validator } = options;
      this.createSocket(id, direction);
      const field = new Instance(Field, options )
      this.fields.create(field);
      field.start()
    },

    removeField(id){
      this.fields.get(id).stop();
      this.fields.remove(id);
    },

  };

  methods = {

    initialize(){
    },


  };
}
