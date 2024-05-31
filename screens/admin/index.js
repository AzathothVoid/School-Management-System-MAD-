import React, {useLayoutEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Index from '..';
import Header from '../../components/Header';
import {LogOut, Home} from 'lucide-react-native';
import {AuthContext} from '../../auth/AuthContext';

const Tab = createBottomTabNavigator();

const AdminDashboard = ({navigation}) => {
  const {setUser} = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Index"
        options={{
          title: 'Logout',
          tabBarIcon: ({color, size}) => <LogOut color={color} size={size} />,
        }}
        component={({navigation}) => {
          setUser(null);
          navigation.popToTop();
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminDashboard;
