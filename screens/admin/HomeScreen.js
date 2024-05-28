import React, {useLayoutEffect, useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  Pressable,
  HStack,
  Image,
  VStack,
  Divider,
  Text,
  Heading,
} from '@gluestack-ui/themed';
import {
  User,
  ClipboardMinus,
  Landmark,
  BookOpenText,
  CalendarClock,
} from 'lucide-react-native';
import {ScrollView} from '@gluestack-ui/themed';
import Header from '../../components/Header';
import ServiceBox from '../../components/ServiceBox';
import AddStudent from './studentServices/AddStudent';

const HomeScreen = ({navigation, route}, props) => {
  const [addStudentModal, setAddStudent] = useState(false);

  const addStudentRef = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
      // headerTitle: props => <Header {...props} />,
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView m="$5">
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

      <Box marginVertical="$4">
        <Box>
          <Heading mb="$2">Student Services</Heading>
          <HStack alignItems="center">
            <Pressable onPress={() => setAddStudent(true)}>
              <ServiceBox
                action={AddStudent}
                text="Add"
                Icon={
                  <Landmark size={25} color="#000000" style={{margin: 10}} />
                }
              />
            </Pressable>
            <ServiceBox
              text="View"
              Icon={
                <BookOpenText size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Update"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Delete"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
          </HStack>
        </Box>
        <Box>
          <Heading mb="$2">Fee Services</Heading>
          <HStack>
            <ServiceBox
              text="Add"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="View"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Update"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Delete"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
          </HStack>
        </Box>
        <Box>
          <Heading mb="$2">Teacher Services</Heading>
          <HStack alignItems="center">
            <ServiceBox
              text="Class"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
          </HStack>
        </Box>
        <Box>
          <Heading>Other Services</Heading>
          <HStack>
            <ServiceBox
              text="Reports"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Timetable"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
            <ServiceBox
              text="Syllabus"
              Icon={
                <CalendarClock size={25} color="#000000" style={{margin: 10}} />
              }
            />
          </HStack>
        </Box>
      </Box>
      <AddStudent
        showModal={addStudentModal}
        setShowModal={setAddStudent}
        ref={addStudentRef}
      />
    </ScrollView>
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
