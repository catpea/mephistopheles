export default function(className){
  let response;

  switch (className) {

    case 'Workspace':
      response = 'box';
      break;

    case 'Window':
      response = 'window-fullscreen';
      break;

    case 'Terminal':
      response = 'terminal';
      break;

    case 'Editor':
      response = 'window-sidebar';
      break;

    case 'Architecture':
      response = 'gem';
      break;

    case 'Analysis':
      response = 'diagram-3';
      break;

    case 'Pipe':
      response = 'share-fill';
      break;

    case 'Realm':
      response = 'globe';
      break;

    case 'Caption':
      response = 'usb';
      break;

    case 'Label':
      response = 'alphabet';
      break;

    case 'Foreign':
      response = 'wrench-adjustable';
      break;

    case 'Sockets':
      response = 'node-plus';
      break;

    case 'Vertical':
      response = 'arrows-vertical';
      break;

    case 'Hortizontal':
      response = 'arrows';
      break;

    case 'Container':
      response = 'box2-heart';
      break;

    case 'Component':
      response = 'heart-pulse';
      break;

    case 'Application':
      response = 'brightness-high';
      break;

    case 'Trait':
      response = 'gear-wide';
      break;

    case 'Method':
      response = 'gear-wide-connected';
      break;

    case 'Group':
      response = 'box';
      break;

    case 'Viewport':
      response = 'binoculars';
      break;

    case 'Gradients':
      response = 'palette2';
      break;

    case 'Hello':
      response = 'telephone';
      break;

    case 'Fetch':
      response = 'download';
      break;

    case 'Alert':
      response = 'exclamation-diamond';
      break;

    default:
      response = 'list';
  }

  return response;
}
