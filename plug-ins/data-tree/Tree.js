

class Signal {
  constructor(initialValue = null) {
    this.value = initialValue;
    this.subscribers = [];
  }
  subscribe(subscriber) {
    if (typeof subscriber !== 'function') {
      throw new Error('Subscriber must be a function');
    }
    this.subscribers.push(subscriber);
    // Notify the subscriber immediately with the current value
    subscriber(this.value);
    // Return an unsubscribe function
    return () => this.unsubscribe(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }
  set(value) {
    if (this.value !== value) {
      this.value = value;
      this.notify();
    }
  }
  get() {
    return this.value;
  }
  notify() {
    this.subscribers.forEach(subscriber => subscriber(this.value));
  }
}

export class List {
  #subscribers = [];

  #value = [];

  subscribe(subscriber) {
    if (typeof subscriber !== 'function') throw new Error('Subscriber must be a function');
    this.#subscribers.push(subscriber);
    // Notify the subscriber immediately with the current value
    subscriber(this.#value);
    // Return an unsubscribe function
    return () => this.unsubscribe(subscriber);
  }

  unsubscribe(subscriber) {
    this.#subscribers = this.#subscribers.filter(sub => sub !== subscriber);
  }

  notify() {
    this.#subscribers.forEach(subscriber => subscriber(this.#value));
  }

  // ---


  upsert(...items) {
    for(const item of items) {
      if (item.id === undefined) throw new Error('item must have a unique id');
      const index = this.#value.findIndex(o => o.id === item.id);
      const exists = index !== -1;
      if(exists) {
        this.#value[index] = {...this.#value[index], ...item};
      } else {
        this.#value.push(item);
      }
      this.notify();

    }
  }

  update(id, name, value){
    const item = this.#value.find(o => o.id.get() === id);
    item[name].set(value);
    this.notify();
  }

  remove(id){
    const item = this.#value.find(o => o.id.get() === id);
    this.#value = this.#value.filter(o => o !== item);
    this.notify();
  }

  // Data Reading Functions
  // [Symbol.iterator]() {
  //   return this.#value[Symbol.iterator]();
  // }

  get() {
    console.log('GET HIT', this.#value);
    return this.#value;
  }

}


















export default class Component {

  id = uuid();
  type = 'Container';
  name = 'Untitled';

  components = new List();
  tables  = new List();
  // reports  = new List();

  constructor(id,type,name){
    if(id!==undefined) this.id = id;
    if(type!==undefined) this.type = type;
    if(name!==undefined) this.name = name;
  }

  component({id,type,name}){
    const component = new Component(id,type,name)
    this.components.upsert(component);
    return component;
  }

  get(){
    return super.get();
  }
  //
  table({id, columns}){
    const table = new Table(id, columns)
    this.tables.upsert(table);
    return table;
  }
  //
  // report({id,type,name}){
  //   const report = new Report(id,type,name)
  //   this.reports.upsert(report);
  //   return report;
  // }
}







//
//
//
//
//
// export class Report extends Subscribable  {
//   id = uuid();
//   filter = (item=>item);
// }
//
export class Table  {
  id = uuid();
  list = new List();
  #columns = ['id', 'value'];
  constructor(id, columns){
    if(id!==undefined) this.id = id;
    if(columns!==undefined) this.#columns = columns;

  }
  data(...rows){
    for (const row of rows) {
      const entries = [];
      for (const [index, name] of this.#columns.entries()) {
        entries.push([name, new Signal(row[index])])
      }
      const obj = Object.fromEntries(entries);
      this.list.upsert(obj)
    }
  }
}
