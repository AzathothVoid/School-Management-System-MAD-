import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  View,
  HStack,
  Image,
  VStack,
  Divider,
  Text,
  Heading,
} from '@gluestack-ui/themed';
import {User} from 'lucide-react-native';
import Header from '../../components/Header';
import ServiceBox from '../../components/ServiceBox';

const HomeScreen = ({navigation}, props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
      // headerTitle: props => <Header {...props} />,
    });
  }, [navigation]);

  return (
    <View m="$5">
      <Box rounded="$lg" bg="$blue700" px="$4" alignItems="center" py="$6">
        <HStack>
          <Image
            size="md"
            mx="$2"
            borderRadius="$full"
            source={{
              uri: 'https://img.freepik.com/free-photo/serious-pensive-young-student-looking-directly-camera_176532-8154.jpg?size=626&ext=jpg',
            }}
            alt="Student"
          />

          <VStack justifyContent="center" mx="$1">
            <Text size="lg" color="$textLight0" my="$0.5">
              Muhammad Nauman
            </Text>
            <HStack alignItems="center" my="$0.5">
              <Text size="sm" color="$textLight0">
                Admin
              </Text>
              <Divider
                orientation="vertical"
                mx="$1.5"
                h={13}
                bg="$backgroundLight0"
              />
              <Text size="sm" color="$textLight0"></Text>
            </HStack>
            <Text size="sm" color="$textLight0" my="$0.5">
              male
            </Text>
          </VStack>

          <User
            size={25}
            color="#ffffff"
            style={{marginHorizontal: 8}}
            onPress={() => console.log('Icon pressed')}
          />
        </HStack>
      </Box>
      <Heading>Student Services</Heading>
      <Heading>Teacher Services</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1C588C',
  },
  headerTitleStyle: {
    color: '#fff',
  },
});

export default HomeScreen;
