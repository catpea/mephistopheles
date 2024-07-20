import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Window from "/plug-ins/windows/Window.js";
import prioritySort from "/plug-ins/priority-sort/index.js";
import EventEmitter from "/plug-ins/event-emitter/EventEmitter.js";

import Move from "/plug-ins/mouse-services/Move.js";
import Focus from "/plug-ins/mouse-services/Focus.js";
import Resize from "/plug-ins/mouse-services/Resize.js";
import Select from "/plug-ins/mouse-services/Select.js";

export default class Application {
  static extends = [Window];

  properties = {
    isApplication: true,
  };

  observables = {
    origins: [],
    applications: [],
    url: null,
  };

  traits = {

    makeResizable(el){
      const resize = new Resize({
        area: window,
        minimumX:128,
        minimumY:128,
        handle: el,
        scale: ()=>this.getScale(this),
        box:  this.getApplication(this),
        before: ()=>{},
        movement: ({x,y})=>{},
        after: ()=>{},
      });

      this.addDisposable(resize);
    },

    makeMovable(el){
      const move = new Move({
        area: window,
        handle: el,
        scale: ()=>this.getScale(this),
        before: ()=>{},
        movement: ({x,y})=>{
          this.node.x -= x;
          this.node.y -= y;
        },
        after: ()=>{},
      });
      this.addDisposable(move);
      const select = new Select({
        component: this,
        handle: el,
      });
      this.addDisposable(select);
      const focus = new Focus({
        handle: this.scene, // TIP: set to caption above to react to window captions only
        component: this,
        element: ()=> this.scene,
      });
      this.addDisposable(focus);
    },


      removeApplication(){

        const item = this;
        const realm = item.getGroup().realm;

        if(item.oo.name == 'Pipe'){
          realm.elements.remove(item.id);
        }else{ //
          for (const relatedPipe of realm.applications.filter(x=>x.oo.name == 'Pipe').filter(x=>(x.to==item.id||x.from==item.id))) {
            realm.elements.remove(relatedPipe.id);
          }
          realm.elements.remove(item.id);
        }

      },

      removeApplications(realm){
        const selected = [...realm.applications.filter(o=>o.selected)];
        const ordered = prioritySort( selected, ['Pipe', 'Something', '*'], application=>application.oo.name );
        for (const item of ordered ) {
          if(item.oo.name == 'Pipe'){
            realm.elements.remove(item.id);
          }else{ //
            for (const relatedPipe of realm.applications.filter(x=>x.oo.name == 'Pipe').filter(x=>(x.to==item.id||x.from==item.id))) {
              realm.elements.remove(relatedPipe.id);
            }
            realm.elements.remove(item.id);
          }
        }
      },

    /**
    connectObservableToWritable USAGE:
    this.xWritable = writable(0);
    this.yWritable = writable(0);
    this.component = new Interface({
        target: this.foreign.body,
        props: {
          x: this.xWritable,
          y: this.yWritable,
          object: null,
          paneItems: stores.getPaneItems( this.getRoot() )
        }
    });
    this.connectObservableToWritable( object, 'x', this, 'xWritable', (v)=>v.toFixed(2))
    this.connectObservableToWritable( object, 'y', this, 'yWritable', (v)=>v.toFixed(2))

    **/
    connectObservableToWritable(fromObject /* CUSTOM OPP NOT A STANDARD OBJECT */, observableName, toObject, writableName, transform){
      if(!this.oo.scratch.couplers){
        this.oo.scratch.couplers = {};
        this.addDisposable({
          description: `clean any remaining couplers when component is shut down`,
          destroy(){Object.values(this.oo.scratch.couplers).map(f=>f())}
        });
      }
      let id = observableName;
      if(this.oo.scratch.couplers[id]) this.oo.scratch.couplers[id](); // execute destructable
      const disposable = fromObject.on(observableName, (v)=>toObject[writableName].set(transform?transform(v):v),{autorun:true},{manualDispose:true});
      this.oo.scratch.couplers[id] = disposable;

    },
  };

  methods = {

    initialize(){
      this.controller = new EventEmitter();
      this.getRoot().applications.create(this);
    },
    mount(){
      this.addDisposableFromSmartEmitter( this.getRoot().keyboard, 'Remove', ()=>this.removeApplications(this.getGroup(this, true).realm) );
    }


  };
}
