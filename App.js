import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import ViewSyllabus from './screens/student/ViewSyllabus';
import ViewFees from './screens/student/ViewFees';
import ViewMarks from './screens/student/ViewMarks';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {

  //pass to ViewSyllabus
  var subjects = ["English", "Urdu", "Math", "General Knowledge", "Social Studies", "Islamiyat", "Computer Part 1", "Computer Part 2", "Quran"]

  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='ViewMarks'>
            <Stack.Screen name='ViewFees' component={ViewFees} />
            <Stack.Screen name='ViewSyllabus' component={ViewSyllabus} />
            <Stack.Screen name='ViewMarks' component={ViewMarks} />
          </Stack.Navigator>
        </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
});

export default App;
