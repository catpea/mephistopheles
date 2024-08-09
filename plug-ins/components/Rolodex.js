import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";
import Interface from '/plug-ins/components/rolodex/Rolodex.svelte';
import stopWheel from '/plug-ins/stop-wheel/index.js';
import Direction from '/plug-ins/constants/Direction.js';

import Component from '/plug-ins/data-tree/Tree.js';

export default class Rolodex {

  static extends = [Application];

  observables = {
    composition: undefined,
  };

  serializables = {
    // composition: 'object',
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

      const rng = function(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      };


      const root = new Component('application', 'Container', 'Application');
      const window = root.component({id:'window', type:'Container', name:'Window'});
      const container = window.component({id:'hbox', type:'Row', name:'Horizontal Box'});
      const menu = container.component({id:'side', type:'Column', name:'Side Menu'});
      const main = container.component({id:'main', type:'Column', name:'Main Content'});
      const list = main.component({id:'list', type:'List', name:'List Of Users'});
      const users = list.table({id:'users', columns:['id', 'first','last','age']});
      users.data(
        [0, 'Alice', 'Smith', 101],
        [1, 'Bob', 'Smith', 99],
        [2, 'Carol', 'Smith', 50]
      );
      setTimeout(()=>{
        users.data([3, 'Dana', 'Smith', 51]);
      }, 3_000)
      setTimeout(()=>{
        users.list.remove(3);
      }, 5_000)

      setInterval(()=>{

      if(rng(0,1)==1) users.list.update(rng(0,2), 'age', rng(18,164) );

      }, 500)
      //
      // const contact = list.table({id:'contact', columns:['id', 'phone']});
      // contact.data(
      //   [0, '555-1210'],
      //   [1, '555-1211'],
      //   [2, '555-1212']
      // );
      //
      // const centenarians = list.report({id:'centenarians', tables:[users, contact], join:['id'], filter:(user)=>user.age > 100});



      this.composition = root.components;
      // console.log('this.folders', this.folders);
      // console.log('this.folders', this.folders.get());



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
