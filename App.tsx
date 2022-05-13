/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {TasksProvider} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
