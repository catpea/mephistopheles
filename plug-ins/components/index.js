import Workspace from './Workspace.js';
import Group from './Group.js';
import Hello from './Hello.js';
import Fetch from './Fetch.js';
import Terminal from './Terminal.js';
import Editor from './Editor.js';
import Pipe from './Pipe.js';
import Gradients from './Gradients.js';

import Architecture from './Architecture.js';
import Analysis from './Analysis.js';

import Alert from './Alert.js';

// Dependency Injection Pattern

const components = {

  // Core
  Workspace,
  Group,
  Pipe,

  // Configuration
  Gradients,

  // UI
  Alert,

  // Reflection
  Architecture,
  Analysis,

  // Tests
  Hello,

  // Data Services
  Fetch,

  // Applications
  Terminal,
  Editor,


}

export default components;
