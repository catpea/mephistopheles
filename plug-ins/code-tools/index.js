import {parseScript} from 'esprima';

export function getFunctionSignature(src){


  try{

  const response = [];
  src = src.replace(/\?\./g, '.')
  src = src.replace(/\.{3}/g, 'spreadOperator:')
  src = src.replace(/ async /g, ' ')
  const ast = parseScript(src, { tolerant: true });

  for (const param of ast.body[0].params) {
    switch (param.type) {

      case 'Identifier':
        response.push(param.name)
        break;

      case 'AssignmentPattern':
        response.push(param.left.name)
        break;

      case 'ArrayPattern':
        response.push(...param.elements.map(o=>o.name))
        break;

      case 'ObjectPattern':
        response.push('{...}')
        break;

      default:
        response.push(JSON.stringify(param))

    }
  }

  // BUG: esbuild renames variables by assing a number at the end, I do that to with x x1 x2 n1 so there is no esay fix
  // response = response.map(name=>name.replace(/\d+$/,''));

  return response;

  } catch(e){
    console.error(src);
    console.error(e);
    return ['?'];
  }

}
