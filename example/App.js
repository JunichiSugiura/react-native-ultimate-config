/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import UltimateConfig from 'react-native-ultimate-config';
console.log('mm?', UltimateConfig);

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--',
  };
  // componentDidMount() {
  //   UltimateConfig.sampleMethod('Testing', 123, (message) => {
  //     this.setState({
  //       status: 'native callback received',
  //       message
  //     });
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(UltimateConfig)}</Text>
        <Text testID="my_value">{UltimateConfig.MY_VALUE}</Text>
        <Text testID="string_value">
          {UltimateConfig.STRING_VALUE} {typeof UltimateConfig.STRING_VALUE}
        </Text>
        <Text testID="boolean_value">
          {String(UltimateConfig.BOOLEAN_VALUE)}{' '}
          {typeof UltimateConfig.BOOLEAN_VALUE}
        </Text>
        <Text testID="number_value">
          {UltimateConfig.NUMBER_VALUE} {typeof UltimateConfig.NUMBER_VALUE}
        </Text>
        <Text testID="per_platform_value">{UltimateConfig.PER_PLATFORM}</Text>
        <Text style={styles.welcome}>☆UltimateConfig example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
