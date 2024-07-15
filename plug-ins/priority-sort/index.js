
export default function prioritySort(list, priority, field){

  const WILDCARD = priority.indexOf('*')==-1?priority.length-1:priority.indexOf('*');

  const indexer = function(a){
    const value = priority.indexOf(field(a));
    return value === -1?WILDCARD:value;
  }

  const sorter = function(a,b){
    return indexer(a) - indexer(b);
  }

  return [...list].sort(sorter);
}
