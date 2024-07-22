import Direction from '/plug-ins/constants/Direction.js';

export default class Field {
  observables = {
    id: uuid(),
    type: 'String',
    direction: Direction.INPUT,
    label: 'Unlabeled',
    validator: null,
    help: '',
    x:0,
    y:0,
  };

  methods = {

    initialize(){
    },

  };

}
