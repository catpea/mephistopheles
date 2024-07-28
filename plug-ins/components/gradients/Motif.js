export default class Motif {
  id;
  direction;
  padding = false;
  angle = 180;
  colors = [];
  levels = [];

  constructor(id, direction, padding){
    this.id = id;
    this.direction = direction;
    this.padding = padding;
  }

  get(id){
    let response = null;
    console.log('XXX', this.id, id);
    if(this.id === id) return this;
    for (const level of this.levels) {
      response = level.get(id);
      if(response) return response;
    }
  }

  get background(){
    const colors = this.colors.map(o=>`${o.color} ${o.length}`).join(', ');
    const response = `linear-gradient(${this.angle}deg, ${colors})`
    console.log(response);
    return response;
  }

  addColor(color, length){
    const stop = new Stop(color, length);
    this.colors.push(stop);
    return this;
  }

  hi(id){
    const level = new Motif(id, 'hi');
    this.levels.push(level);
    return level;
  }
  lo(id){
    const level = new Motif(id, 'lo');
    this.levels.push(level);
    return level;
  }
  bt(id){
    const level = new Motif(id, 'lo', true);
    this.levels.push(level);
    return level;
  }

}

class Stop {
  color;
  length;

  constructor(color, length){
    this.color = color;
    this.length = length;
  }
  
}
