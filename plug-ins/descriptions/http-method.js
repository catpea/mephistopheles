export default [
  {id:'get', name:'GET', description:'Retrieves data from a server at the specified resource.'},
  {id:'head', name:'HEAD', description:'Similar to GET, but it retrieves only the header information and not the body of the request.'},
  {id:'post', name:'POST', description:'Sends data to the server to create a new resource. Often used when submitting form data.'},
  {id:'put', name:'PUT', description:'Replaces all current representations of the target resource with the uploaded content.'},
  {id:'delete', name:'DELETE', description:'Removes all current representations of the target resource given by a URL.'},
  {id:'connect', name:'CONNECT', description:'Establishes a tunnel to the server identified by the target resource.'},
  {id:'options', name:'OPTIONS', description:'Describes the communication options for the target resource.'},
  {id:'trace', name:'TRACE', description:'Performs a message loop-back test along the path to the target resource.'},
  {id:'patch', name:'PATCH', description:'Applies partial modifications to a resource.'},
];
