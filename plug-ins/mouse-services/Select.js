import { front } from "/plug-ins/domek/index.js"

export default class Select {

  component;
	handle;

	// handlers
	mouseDownHandler;
	mouseUpHandler;

	constructor({ component, handle }) {

    if(!component) throw new Error('component is required')
    if(!handle) throw new Error('handle is required')

		this.component = component;
		this.handle = handle;
    this.mount();
  }

  select(){
    this.component.selected = true;
  }
  deselect(){
    this.component.selected = false;
  }
  deselectOthers(){
    for (const item of this.component.getGroup().realm.applications) {
      if(this.component.id !== item.id){
        item.selected = false;
      }
    }
  }


  mount(){

		this.mouseDownHandler = (e) => {
      const multiSelect = e.ctrlKey;

      if(multiSelect){
        if(this.component.selected){
          this.deselect();
        }else{
          this.select()
        }
      }else{

        if(this.component.selected){
          const multipleSelection = this.component.getGroup().realm.applications.length > 1;

          if(multipleSelection){
            this.deselectOthers();
          }else{
            this.deselect();
          }

        }else{
          this.select()
          this.deselectOthers();
        }
      }

		};

		this.handle.addEventListener('mousedown', this.mouseDownHandler);
	}

	destroy() {
		this.handle.removeEventListener('mousedown', this.mouseDownHandler);
	}

}
