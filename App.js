import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {config} from '@gluestack-ui/config';

//importing screens
import Welcome from './Screens/Welcome';
import Admin from './Screens/Admin';
import Student from './Screens/Student';
import Teacher from './Screens/Teacher';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={<Welcome />} />
          <Stack.Screen name="Admin" component={<Admin />} />
          <Stack.Screen name="Student" component={<Student />} />
          <Stack.Screen name="Teacher" component={<Teacher />} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
  },
});

export default App;
