import pkg from '/package.json';

import {Instance} from "/plug-ins/object-oriented-programming/index.js";

import Themes from './Themes.js';
const themes = new Instance(Themes);
themes.theme = 'nostromo';

import System from './System.js';
const system = new Instance(System);

globalThis.system = system;
globalThis.project = system;
globalThis.scene = document.querySelector('#editor-scene');
globalThis.svg = document.querySelector('#editor-svg');

system.name = `${pkg.name} ${pkg.version}`;

system.svg = document.querySelector('#editor-svg');
system.scene = document.querySelector('#editor-scene');
system.background = document.querySelector('#editor-background');
system.url = 'templates/test.xml';

system.start();
