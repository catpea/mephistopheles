import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";
import Interface from '/plug-ins/components/gradients/Gradients.svelte';
import stopWheel from '/plug-ins/stop-wheel/index.js';
import Direction from '/plug-ins/constants/Direction.js';

import Motif from '/plug-ins/components/gradients/Motif.js';

export default class Gradients {

  static extends = [Application];

  observables = {
    motif: undefined,
  };

  serializables = {
    motif: 'object',
  };

  traits = {

    async refresh(){
      // this.motif = ;
    },

    async execute(){
      const data = JSON.stringify(this.motif, null, '  ');
      this.send('out', data);
    }

  };

  methods = {
    initialize(){



      this.createSocket('out', 1);

    },

    mount(){

      this.w = 400;
      this.h = 700;

      const motif = new Motif('background');
      motif.addColor('#2e3743', 0).addColor('#343a49', 20).addColor('#141d25', 100);

      motif.hi('caption').addColor('#3b4650', 0).addColor('#1a1e29', 100);
      motif.lo('body').addColor('#0f141d', 0).addColor('#2c3645', 45).addColor('#131821', 100);
      motif.hi('footer').addColor('#3b4650', 0).addColor('#1a1e29', 100);
      motif.get('body').bt('btn-1').addColor('#ecb349', 0).addColor('#da5a03', 100);
      motif.get('body').bt('btn-2').addColor('#d443f1', 0).addColor('#3c1968', 100);

      this.motif = motif;



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
