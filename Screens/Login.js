import {React, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'} enabled>
      <ScrollView>
        <Center>
          <Image source={require('../assets/login.jpg')} style={styles.image} />
          <Heading style={styles.heading}>Login Now</Heading>
          <VStack style={styles.body}>
            <Box style={styles.margining}>
              <FormControlCustom
                label="Email"
                type="email"
                placeholder="Email"
                helperText="Must be a Registered Email"
                value={email}
                onChange={setEmail}
              />
            </Box>
            <Box style={styles.Lastmargining}>
              <FormControlCustom
                label="Password"
                type="password"
                placeholder="Password"
                helperText="Must be atleast 6 Characters"
                value={password}
                onChange={setPassword}
              />
            </Box>
            <Box style={styles.buttonContainer}>
              <Button style={styles.button} borderRadius={10}>
                <ButtonText>Login</ButtonText>
              </Button>
              <Text style={styles.note}>
                Note: Login details have been provided by school
              </Text>
            </Box>
          </VStack>
        </Center>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginVertical: 10,
    width: 300,
    height: 300,
  },
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#1C588C',
    height: 50,
    marginBottom: 10,
  },
  body: {
    width: '80%',
  },
  heading: {
    color: '#1C588C',
  },
  margining: {
    marginVertical: 20,
  },
  Lastmargining: {
    marginBottom: 22,
  },
  note: {
    fontSize: 10,
  },
});

export default Login;
