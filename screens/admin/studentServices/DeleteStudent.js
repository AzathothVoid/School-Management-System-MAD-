import React, {useState, useRef} from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  VStack,
  Center,
  Select,
  Box,
  SelectItem,
  SelectTrigger,
  SelectIcon,
  SelectInput,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectPortal,
  Icon,
  ChevronDownIcon,
  ScrollView,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import FormControlCustom from '../../../components/FormControlCustom';
import DatePicker from 'react-native-date-picker';
import ModalCustom from '../../../components/ModalCustom';
import {useFirebase} from '../../../contexts/FirebaseContext';
import ViewCard from '../../../components/ViewCard';
import firestore from '@react-native-firebase/firestore';

const DeleteFees = ({showModal, setShowModal, ref}, props) => {
  const {data} = useFirebase();

  console.log('DATA: ', data);

  const [studentID, setStudentID] = useState(null);
  const [regNo, setRegNo] = useState('');

  const [resultModal, setResultModal] = useState(false);
  const [resultText, setResultText] = useState('');
  const resultRef = useRef(null);

  const [deleteModal, setDeleteModal] = useState(false);
  const [studentDisplayModal, setStudentDisplayModal] = useState(false);

  console.log('REG NO: ', regNo);

  const studentData = data.students.find(student => student.regNo === regNo);

  console.log('Student Data: ', studentData);

  const studentDisplayRef = useRef(null);

  const deleteStudents = async () => {
    try {
      const studentRef = firestore().collection('students').doc(studentID);
      const studentGet = await studentRef.get();

      // const studentClass = await student.admissionClass.get();

      const studentClassRef = studentGet.data().admissionClass;
      const studentClassGet = await studentClassRef.get();

      // return console.log(
      //   (await studentClassGet.data().students[0].student.get()).id,
      // );

      if (!studentRef) throw Error();
      if (!studentClassRef) throw Error();

      await studentRef.delete();

      await studentClassRef.update({
        students: studentClassGet
          .data()
          .students.filter(
            async student => (await student.student.get()).id !== studentID,
          ),
      });

      setDeleteModal(false);

      console.log('Student updated');
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = () => {
    setStudentDisplayModal(true);
  };

  const studentElements = data.students.map(student => {
    return <SelectItem label={student.regNo} value={student.regNo} />;
  });

  console.log('FEES DATA:', studentData);

  return (
    <Box>
      <ModalCustom
        showModal={showModal}
        setShowModal={setShowModal}
        ref={ref}
        action={displayData}
        actionText={'Delete'}
        heading="Delete Student">
        <FormControl isRequired>
          <Select
            selectedValue={regNo.toString()}
            onValueChange={regNo => setRegNo(regNo)}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput
                placeholder={regNo ? ' ' + regNo : 'Select Registratio no'}
              />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <ScrollView>{studentElements}</ScrollView>
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>
      </ModalCustom>

      <ModalCustom
        showModal={studentDisplayModal}
        setShowModal={setStudentDisplayModal}
        ref={studentDisplayRef}
        action={() => setStudentDisplayModal(false)}
        actionText={'Close'}
        size="full"
        heading="Delete Fees">
        {studentData ? (
          <ViewCard
            actionText="Delete"
            action={deleteStudents}
            setState={setStudentID}
            heading={studentData.name}
            itemsData={studentData}
          />
        ) : null}
      </ModalCustom>

      <ModalCustom
        action={() => setResultModal(false)}
        actionText={'OK'}
        heading={'Alert'}
        showModal={resultModal}
        setShowModal={setResultModal}
        ref={resultRef}>
        <Box>
          <Text>{resultText}</Text>
        </Box>
      </ModalCustom>
    </Box>
  );
};

export default DeleteFees;
