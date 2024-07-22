export default function(CONSTANTS){

  // const constants = Object.fromEntries( CONSTANTS.split(' ').map(o=>o.trim()).filter(o=>o).entries().map(a=>a.reverse() ) );
  const constants = Object.fromEntries( [...CONSTANTS.split(' ').map(o=>o.trim()).filter(o=>o).entries()].map(a=>a.reverse())  );
  return new Proxy(constants, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error(`Attempt to access undefined constant '${prop}'. Check for typos!`);
    }
  }
  });
}
