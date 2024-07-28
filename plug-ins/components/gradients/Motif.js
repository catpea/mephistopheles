export default class Motif {

  padding;
  direction;
  angle;
  colors;
  levels;

  constructor(id, direction, padding){

    this.id = new Signal(id);
    this.direction = new Signal(direction);
    this.padding = new Signal(padding);
    this.angle = new Signal(180);
    this.colors = new Signal([]);
    this.levels = new Signal([]);
  }

  get(id){
    console.log(`Seeking ${id}`);
    let response = {};
    if(this.id.get() === id) return this;
    for (const level of this.levels.get()) {
      response = level.get(id);
      if(response){
        console.log(`Found`, response);
        return response;
      }
    }
  }


  get stops(){
    const entries = [];

    for (const [index, {color, length}] of this.colors.get().entries() ) {
      entries.push(['color'+index, color])
      entries.push(['length'+index, length])
    }

    return Object.fromEntries(entries)
  }


  addColor(color, length){
    const stop = new Stop(color, length);
    this.colors.get().push(stop);
    this.colors.notify()
    return this;
  }

  hi(id){
    const level = new Motif(id, 'hi');
    this.levels.get().push(level);
    this.levels.notify()
    return level;
  }
  lo(id){
    const level = new Motif(id, 'lo');
    this.levels.get().push(level);
    this.levels.notify()
    return level;
  }
  bt(id){
    const level = new Motif(id, 'lo', true);
    this.levels.get().push(level);
    this.levels.notify()
    return level;
  }

}

class Stop {
  id = uuid();
  #color;
  #length;

  constructor(color, length){
    this.#color = color;
    this.#length = length;
    this.color = new Signal(this.#color);
    this.length = new Signal(this.#length);
  }



}








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
