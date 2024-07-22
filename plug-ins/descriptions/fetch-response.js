export default [
  {id: 'json', name: 'JSON', description: 'Parses the response body text as JSON, converting the JSON-encoded content into JavaScript objects.'},
  {id: 'text', name: 'Text', description: 'Returns the response body as plain text, useful for reading text or other types of structured data that are not in JSON format.'},
  {id: 'formData', name: 'Form Data', description: 'Transforms the response body into a FormData object, making it easy to inspect and manipulate form data returned from the server.'},
  {id: 'arrayBuffer', name: 'Array Buffer', description: 'Reads the response body and returns it as an ArrayBuffer, which represents a generic, fixed-length raw binary data buffer.'},
  {id: 'blob', name: 'Blob', description: 'Retrieves the response body as a Blob object, which can handle binary data such as images and sounds directly.'},
];
