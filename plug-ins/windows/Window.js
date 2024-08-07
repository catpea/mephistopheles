import { svg, update } from "/plug-ins/domek/index.js"

import Sockets from "/plug-ins/windows/api/Sockets.js";

import {Instance} from "/plug-ins/object-oriented-programming/index.js";



import Vertical from "/plug-ins/windows/Vertical.js";
import Control from "/plug-ins/windows/Control.js";
import Caption from "/plug-ins/windows/Caption.js";

import Move from "/plug-ins/mouse-services/Move.js";
import Focus from "/plug-ins/mouse-services/Focus.js";
import Resize from "/plug-ins/mouse-services/Resize.js";
import Select from "/plug-ins/mouse-services/Select.js";


export default class Window {

  static extends = [Sockets, Vertical];

  observables = {
    caption: '',

    showCaption: false,
    isResizable: false,
    showMenu: false,
    showStatus: false,

    // selected: false,
  };

  properties = {
    contain:true,
  };

  traits = {

    createWindowComponent(component){
      component.parent = this;
      this.children.create(component);
    },
  };

  methods = {




    initialize(){


      if(this.isRootWindow) return;
      if(this.oo.name == 'Pipe') return;

        this.r = 5;
        this.b = 0;
        this.s = 3;



    },

    mount(){

      if(this.isResizable){
        let width = 32;
        let height = 32;

        this.el.ResizeHandle = svg.rect({
          class: 'window-resize-handle',
          'stroke-width': 0,
          'fill': 'magenta',
          width,
          height,
        });

        this.any('w h x y', ({w,h,x,y})=>{
          update(this.el.ResizeHandle,{x:(this.x+this.w)-(width*.8), y:(this.y+this.h)-(height*.8)})
        });
        this.on('r',     ry=>update(this.el.ResizeHandle,{ry}),     );

        const resize = new Resize({
          area: window,
          minimumX:128,
          minimumY:128,
          handle: this.el.ResizeHandle,
          scale: ()=>this.getScale(this.parent), // BUG WARNING, it should say this not this.parent
          box:  this.getApplication(this),
          before: ()=>{},
          movement: ({x,y})=>{},
          after: ()=>{},
        });

        this.addDisposable(resize);

      }

      // ADD DRAGGABLE CAPTION (aka handle)
      this.draw(); // WARNING: you must draw the window before drawing the caption, so that the caption is on top

      if(this.isRootWindow) return;


      if(this.showCaption){

        this.captionComponent = new Instance(Caption, {h: 24, text: this.caption});

        this.on('caption', v=>this.captionComponent.text=v)
        this.createWindowComponent(this.captionComponent);
        this.on("node", (node) => {
          if(node.caption) node.on("caption", caption => this.caption = caption);
        });
        const move = new Move({
          area: window,
          handle: this.captionComponent.handle,
          scale: ()=>this.getScale(this.parent),
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
          handle: this.captionComponent.handle,
        });
        this.addDisposable(select);

        this.on('selected', v=>this.captionComponent.selected=v)

      }

      const focus = new Focus({
        handle: this.scene, // TIP: set to caption above to react to window captions only
        component: this,
        element: ()=> this.scene,
      });
      this.addDisposable(focus);

    },


  };


}
