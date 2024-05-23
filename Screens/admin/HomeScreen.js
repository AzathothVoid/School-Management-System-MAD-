import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {useHeaderHeight} from '@react-navigation/native-stack';

const headerHeight = useHeaderHeight();

const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => <Header {...props} />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Hello Admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1C588C',
    height: headerHeight,
  },
  headerTitleStyle: {
    color: '#fff',
  },
});

export default HomeScreen;
