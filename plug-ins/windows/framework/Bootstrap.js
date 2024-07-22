import {Instance} from "/plug-ins/object-oriented-programming/index.js";

export default class Bootstrap {
  static extends = [];

  observables = {
    context: 'dark',
    text: '',
    status: '',
  };

  serializables = {
    context: {type: 'string', enum: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'], default:'dark'},
    text:    'string',
    note:    'string',
  };

  traits = {

  };

  methods = {

    initialize(){
    },

    clean(){
    },

  };
}
