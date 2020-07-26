/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import StackNavigation from './Src/Config/Navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './Src/Store/index.js';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;
