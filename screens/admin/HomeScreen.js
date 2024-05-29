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
import ViewStudent from './studentServices/ViewStudent';
import UpdateStudent from './studentServices/UpdateStudent';
import DeleteStudent from './studentServices/DeleteStudent';

const HomeScreen = ({navigation, route}, props) => {
  const [addStudentModal, setAddStudent] = useState(false);
  const [viewStudentModal, setViewStudent] = useState(false);
  const [updateStudentModal, setUpdateStudent] = useState(false);
  const [deleteStudentModal, setDeleteStudent] = useState(false);

  const addStudentRef = useRef(null);
  const viewStudentRef = useRef(null);
  const UpdateStudentRef = useRef(null);
  const deleteStudentRef = useRef(null);

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

      <Box>
        <Box mt="$2">
          <Heading mb="$2">Student Services</Heading>
          <HStack alignItems="center">
            <Pressable onPress={() => setAddStudent(true)}>
              <ServiceBox
                text="Add"
                Icon={
                  <Landmark size={25} color="#000000" style={{margin: 10}} />
                }
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ViewStudent')}>
              <ServiceBox
                text="View"
                Icon={
                  <BookOpenText
                    size={25}
                    color="#000000"
                    style={{margin: 10}}
                  />
                }
              />
            </Pressable>
            <Pressable onPress={() => setUpdateStudent(true)}>
              <ServiceBox
                text="Update"
                Icon={
                  <CalendarClock
                    size={25}
                    color="#000000"
                    style={{margin: 10}}
                  />
                }
              />
            </Pressable>
            <Pressable onPress={() => setDeleteStudent(true)}>
              <ServiceBox
                text="Delete"
                Icon={
                  <CalendarClock
                    size={25}
                    color="#000000"
                    style={{margin: 10}}
                  />
                }
              />
            </Pressable>
          </HStack>
        </Box>
        <Box mt="$2">
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
        <Box mt="$2">
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
        <Box mt="$2">
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
      {addStudentModal ? (
        <AddStudent
          showModal={addStudentModal}
          setShowModal={setAddStudent}
          ref={addStudentRef}
        />
      ) : null}
      {viewStudentModal ? (
        <ViewStudent
          showModal={viewStudentModal}
          setShowModal={setViewStudent}
          ref={viewStudentRef}
        />
      ) : null}
      {updateStudentModal ? (
        <UpdateStudent
          showModal={updateStudentModal}
          setShowModal={setUpdateStudent}
          ref={UpdateStudentRef}
        />
      ) : null}
      {deleteStudentModal ? (
        <DeleteStudent
          Student
          showModal={deleteStudentModal}
          setShowModal={setDeleteStudent}
          ref={deleteStudentRef}
        />
      ) : null}
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
