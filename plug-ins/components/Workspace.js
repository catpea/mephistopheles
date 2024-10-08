import pkg from "/package.json";

const uuid = bundle['uuid'];
const cheerio = bundle['cheerio'];

import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Group from "/plug-ins/components/Group.js";
import KeyboardMonitor from "/plug-ins/keyboard-monitor/KeyboardMonitor.js";

import Menu from "/plug-ins/windows/Menu.js";


import Overlay from "/plug-ins/windows/Overlay.js";

import { svg, click } from "/plug-ins/domek/index.js"

export default class Workspace {
  static extends = [Group];


  traits = {

    // TODO: menu should be destroyed/recreated each time

    closeMenu(){
      this.overlay.show = false;
      this.menu.show = false;
      this.container.style.display = 'none';
    },

    openMenu({x,y,options, w=250, h=280}){

      if(this.menu) {
        this.menu.options = options;
        this.menu.x = x;
        this.menu.y = y;

        this.container.style.display = 'block';
        this.overlay.show = true;
        this.menu.show = true;

        return;
      }

      // if(this.menu) this.menu.destroy();

      this.container = svg.g({ name: 'menu' });

      this.scene.appendChild(this.container);

      this.overlay = new Instance(Overlay, {parent:this, scene:this.container});
      this.overlay.start();
      this.overlay.show = true;

      this.menu = new Instance(Menu, {parent:this, scene:this.container, x,y,w,h, options});
      this.menu.start();
      this.menu.show = true;

    },


  };

  methods = {

    initialize(){
      this.p = 0;
      this.r = 0;
      this.s = 0;
      // NOTE: this is the main keyboard handler that components may subscribe to via getRoot()
      this.keyboard = new KeyboardMonitor();
      this.addDisposable(this.keyboard);
    },

    saveXml(){

      const attributes = this.oo.serializables
        .filter(o=>this[o.name]) // remove empty
        .filter(o=>this[o.name]!==o.value.default) // remove empty
        .map(o=>`${o.name}=${JSON.stringify(this[o.name])}`).join(' ') // create xml string

      const $ = cheerio.load(`<?xml version="1.0"?><${this.oo.name} name="${pkg.name}" description="${pkg.description}" version="${pkg.version}" ${attributes}></${this.oo.name}>`, { xmlMode: true, decodeEntities: true, withStartIndices: true, withEndIndices: true });
      if (this.realm) {
        $(this.oo.name).append(this.realm.getXml());
      }
      const xml = $.root().html();
      console.info(xml);
      return xml;
    },

  };
}
