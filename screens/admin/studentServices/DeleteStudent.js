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
} from '@gluestack-ui/themed';
import FormControlCustom from '../../../components/FormControlCustom';
import DatePicker from 'react-native-date-picker';
import ModalCustom from '../../../components/ModalCustom';
import {useFirebase} from '../../../contexts/FirebaseContext';
import firestore from '@react-native-firebase/firestore';

const DeleteStudent = ({showModal, setShowModal, ref}, props) => {
  const {data} = useFirebase();

  const [regNo, setRegNo] = useState('');

  const [deleteModal, setDeleteModal] = useState(false);
  const [resultModal, setResultModal] = useState(false);

  const deleteRef = useRef(null);
  const resultRef = useRef(null);

  const studentElements = data.students.map(student => {
    return <SelectItem label={student.regNo} value={student.regNo} />;
  });

  const studentData = data.students.find(student => student.regNo === regNo);

  const deleteStudent = async () => {
    try {
      const doc = firestore().collection('students').doc(studentData._id);

      if (!doc) {
        throw Error();
      }

      doc.delete();
      setResultModal(true);

      console.log('Student Deleted');
    } catch (error) {
      console.log('Errors: ', error);
    }
  };

  const loadData = () => {
    console.log('Updating: ', regNo);
    setDeleteModal(true);
  };

  return (
    <Box>
      {!deleteModal ? (
        <ModalCustom
          showModal={showModal}
          setShowModal={setShowModal}
          ref={ref}
          action={loadData}
          actionText={'Show'}
          heading="Delete Student">
          <FormControl isRequired>
            <Select onValueChange={regNo => setRegNo(regNo)}>
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
      ) : !resultModal ? (
        <ModalCustom
          action={deleteStudent}
          actionText={'Delete'}
          heading="Delete Student"
          showModal={deleteModal}
          setShowModal={setDeleteModal}
          ref={deleteRef}>
          <VStack space="lg">
            <FormControlCustom
              type={'number'}
              value={'' + regNo}
              keyboardType="numeric"
              label="Registration No"
              required={true}
              readOnly={true}
            />

            <FormControlCustom
              type={'text'}
              value={new Date(studentData.dateOfReg).toDateString()}
              label="Date of Admission"
              required={true}
              readOnly={true}
            />

            <FormControlCustom
              type={'text'}
              value={studentData.name}
              label={'Student Name'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={new Date(studentData.DOB).toDateString()}
              label="Date of Birth"
              required={true}
              readOnly={true}
            />

            <FormControlCustom
              type={'text'}
              value={studentData.gender}
              label={'Gender'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.fatherName}
              label={'Father Name'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.caste}
              label={'Caste'}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.occupation}
              label={'Occupation'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.residence}
              label={'Residence'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.admissionClass}
              label={'Admission Class'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'email'}
              value={studentData.email}
              label={'Email'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.password}
              label={'Password'}
              required={true}
              readOnly={true}
            />
            <FormControlCustom
              type={'text'}
              value={studentData.remarks}
              label={'Remarks'}
              readOnly={true}
            />
          </VStack>
        </ModalCustom>
      ) : (
        <ModalCustom
          action={setResultModal}
          actionText={'OK'}
          heading="Success"
          showModal={resultModal}
          setShowModal={setResultModal}
          ref={resultRef}>
          >
          <Center>
            <Box>
              <Text>Student Deleted</Text>
            </Box>
          </Center>
        </ModalCustom>
      )}
    </Box>
  );
};

export default DeleteStudent;
