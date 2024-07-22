import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Realm from "/plug-ins/windows/Realm.js";


export default class Group {
  static extends = [Application];

  properties = {
    isGroup: true,
  };

  serializables = {
    zoom: 'string',
    panX: 'string',
    panY: 'string',
    library: 'string',
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


      Object.defineProperty(this, 'zoom', { get: function() { return this.realm.zoom; } } );
      Object.defineProperty(this, 'panX', { get: function() { return this.realm.panX; } } );
      Object.defineProperty(this, 'panY', { get: function() { return this.realm.panY; } } );


      this.on("node", (node) => {

        node.on("url", url => this.realm.url = url);

        node.on("zoom", zoom => this.realm.zoom = zoom);
        node.on("panX", panX => this.realm.panX = panX);
        node.on("panY", panY => this.realm.panY = panY);

      });

      this.createWindowComponent( this.realm );

    },

    clean(){
    },

    destroy(){
    },
  };
}
