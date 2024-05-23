import {React, useState, useEffect} from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {
  Heading,
  Button,
  ButtonText,
  ButtonIcon,
  Box,
  VStack,
  Center,
} from '@gluestack-ui/themed';
import FormControlCustom from '../components/FormControlCustom';
import {LogIn} from 'lucide-react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/login.jpg')} style={styles.image} />
      <Heading>Login Now</Heading>

      <Box>
        <VStack>
          <FormControlCustom
            label="Email"
            type="email"
            placeholder="Email"
            helperText="Must be a Registered Email"
            value={email}
            onChange={setEmail}
          />
          <FormControlCustom
            label="Password"
            type="password"
            placeholder="Password"
            helperText="Must be atleast 6 Characters"
            value={password}
            onChange={setPassword}
          />
          <Button>
            <ButtonIcon as={LogIn} />
            <ButtonText>Login</ButtonText>
          </Button>
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
