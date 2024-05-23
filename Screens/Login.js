import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {
  Heading,
  Button,
  ButtonText,
  ButtonIcon,
  Box,
  VStack,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/login.jpg')} style={styles.image} />
      <Heading>Login Now</Heading>

      <Box>
        <VStack>
          <Box>
            <FormControl></FormControl>
          </Box>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
  },
  image: {},
});

export default Login;
