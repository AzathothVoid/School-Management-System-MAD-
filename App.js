import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
  },
});

export default App;
