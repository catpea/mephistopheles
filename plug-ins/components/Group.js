import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Realm from "/plug-ins/windows/Realm.js";


export default class Group {
  static extends = [Application];

  properties = {
    isGroup: true,
    serializables: 'id x y w h showMenu showStatus zoom library'.split(' ')
  };

  traits = {

  };

  methods = {

    initialize(){
      this.p =3;
      this.showCaption = true;
      this.isResizable = true;

      this.createSocket('in', 0);
      this.createSocket('out', 1);
    },

    mount(){

      this.realm = new Instance(Realm, {library: this.library});

      this.on("node", (node) => {
        node.on("url", url => this.realm.url = url);
        node.on("zoom", zoom => this.realm.zoom = zoom);
        this.realm.on("zoom", zoom => this.zoom = zoom);
      });

      this.createWindowComponent( this.realm );

    },

    clean(){
    },

    destroy(){
    },
  };
}
