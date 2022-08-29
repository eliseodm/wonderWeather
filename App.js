/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import MainWeatherCard from './components/MainWeatherCard/MainWeatherCard';
import { mock_cityInfo } from './__mockData__/index';

const App = () => {
   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MainWeatherCard current={mock_cityInfo} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
