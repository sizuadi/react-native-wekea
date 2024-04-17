/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import CustomSafeAreaView from './src/shared/components/CustomSafeAreaView';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <CustomSafeAreaView>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </CustomSafeAreaView>
  );
}
export default App;
