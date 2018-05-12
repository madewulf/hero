import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './Question'
export default class App extends React.Component {
  render() {
    return (
        <Question style={styles.container}>
        </Question>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
