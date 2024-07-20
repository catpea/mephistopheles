import {Instance} from "/plug-ins/object-oriented-programming/index.js";
import Application from "/plug-ins/windows/Application.js";
import Foreign from "/plug-ins/windows/Foreign.js";

const {basicSetup, EditorView} = bundle['codemirror'];
const {javascript} = bundle['@codemirror/lang-javascript']
const { keymap} = bundle["@codemirror/view"];
const { indentWithTab } = bundle["@codemirror/commands"];
const { EditorState } = bundle["@codemirror/state"];
const { oneDark } = bundle['@codemirror/theme-one-dark']; // NOTE: "Dark Backgroung And Light Text" Firefox Extension Mangles The Theme

import {  svg, html, update, click } from "/plug-ins/domek/index.js"


export default class Editor {
  static extends = [Application];

  properties = {
  };

  methods = {

    initialize(){
      this.showCaption = true;
      this.isResizable = true;
      this.b = 5;
      this.createSocket('in', 0);
      this.createSocket('out', 1);
    },

    mount(){

      this.foreign = new Instance(Foreign);
      this.createWindowComponent( this.foreign );

      const extensions = [
        basicSetup,
        javascript(),
        EditorView.lineWrapping, //NOTE: EditorView.lineWrapping does/did not honor code indents
        keymap.of([indentWithTab]),
        EditorView.updateListener.of((update) => {
          if (update.docChanged){
             //this.send('out', update.state.doc.toString()) ;
          }
        }),
        oneDark,
        EditorView.theme({

          '&': { maxHeight: this.h + 'px' },
          '.cm-gutter,.cm-content': { minHeight: '100px' },
          ".cm-scroller": {
            overflow: "auto",
            borderTopLeftRadius: '0px',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
         },
        })
      ];

      this.editorView = new EditorView({
        doc: ("// Hello!\njavaScript.go('Brrrrr...');\n"),
        extensions,
        parent: this.foreign.body
      });


      this.pipe.on('in', (packet)=>{

        const descriptor = {changes: {from: 0, to: this.editorView.state.doc.length, insert: new String(packet).toString() }};
        const transaction = this.editorView.state.update(descriptor);
        const update = this.editorView.state.update(transaction);
        this.editorView.update([update]);
      })


      // HACK: code mirror inside a foreign element does not correctly receive focus - we monitor for its parent's click and manually set focus
      this.addDisposableFromEvent( this.foreign.body, 'click', ()=>this.editorView.focus() );
      this.addDisposable(this.editorView); // Clean up this editor view, removing its element from the document, unregistering event handlers, and notifying plugins. The view instance can no longer be used after calling this. (https://codemirror.net/docs/ref/#view.EditorView.destroy)
    },

  };
}
