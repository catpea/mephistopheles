import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Window from "/plug-ins/windows/Window.js";
import Connector from "/plug-ins/windows/Connector.js";
import Select from "/plug-ins/mouse-services/Select.js";

export default class Pipe {
  static extends = [Window];

  properties = {
    serializables: 'id from to out in'.split(' ')
  };



  methods = {
    initialize(){

      this.showCaption = false;
      this.isResizable = false;

      console.log(this);

    },
    mount(){

      this.connector = new Instance(Connector, {
        scene: this.scene,
        parent: this,
        from: this.node.from,
        to: this.node.to,
        out: this.node.out,
        in: this.node.in,
      });

      const select = new Select({
        component: this,
        handle: this.connector.handle,
      });

      this.addDisposable(select);

      // this.connector.on('selected', v=>this.selected=v)
      this.on('selected', v=>this.connector.selected=v)

      // this.parent.node.on("from", v => this.pipe.from = v);

      this.node.on("from", v => this.pipe.from = v);
      this.node.on("to", v => this.pipe.to = v);
      this.node.on("out", v => this.pipe.out = v);
      this.node.on("in", v => this.pipe.in = v);

      this.connector.start();

    },

    clean(){
      this.connector.stop();
    },

    destroy(){

    },

  };
}
