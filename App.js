import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {config} from '@gluestack-ui/config';

//firestore
import firestore from '@react-native-firebase/firestore';

//importing screens
import Welcome from './Screens/Welcome';
import Admin from './Screens/Admin';
import Student from './Screens/Student';
import Teacher from './Screens/Teacher';
import ViewSyllabus from './screens/student/ViewSyllabus';
import ViewFees from './screens/student/ViewFees';
import ViewMarks from './screens/student/ViewMarks';

function App() {
  //pass to ViewSyllabus
  var subjects = [
    'English',
    'Urdu',
    'Math',
    'General Knowledge',
    'Social Studies',
    'Islamiyat',
    'Computer Part 1',
    'Computer Part 2',
    'Quran',
  ];

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName="ViewFees">
          <Stack.Screen name="Welcome" component={Welcome} />
          {/* <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="Student" component={Student} />
          <Stack.Screen name="Teacher" component={Teacher} /> */}
          <Stack.Screen name="ViewFees" component={ViewFees} />
          <Stack.Screen name="ViewSyllabus" component={ViewSyllabus} />
          <Stack.Screen name="ViewMarks" component={ViewMarks} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
});

export default App;
