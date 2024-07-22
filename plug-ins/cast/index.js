export default function cast(value, type){
  if(type === 'string'){
    return new String(value).toString();
  } else if(type === 'object'){
    if(typeof value === 'string'){
        JSON.parse(value)
    }else{
      return value;
    }
  } else if(type === 'float'){
    return parseFloat(value);
  }else if(type === 'integer'){
    return parseInt(value);
  }else if(type === 'boolean'){
    return String(value).toLowerCase() == "true"
  }else{
    throw new TypeError(`Unknown type "${type}", no cast procedure`)
  }
}
