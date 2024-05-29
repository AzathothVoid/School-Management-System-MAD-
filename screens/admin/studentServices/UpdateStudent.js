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

const UpdateStudent = ({showModal, setShowModal, ref}, props) => {
  const {data} = useFirebase();

  console.log('Inside');

  console.log('STUDENT DATA: ', data.students);

  console.log('Clicked');
  const [regNo, setRegNo] = useState('');
  const [dateOfReg, setDateOfReg] = useState(new Date());
  const [studentName, setStudentName] = useState('');
  const [DOB, setDOB] = useState(new Date());
  const [gender, setGender] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [caste, setCaste] = useState('');
  const [occupation, setOccupation] = useState('');
  const [residence, setResidence] = useState('');
  const [admissionClass, setAdmissionClass] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remarks, setRemarks] = useState('');

  const [updateModal, setUpdateModal] = useState(false);
  const updateRef = useRef(null);

  const studentElements = data.students.map(student => {
    return <SelectItem label={student.regNo} value={student.regNo} />;
  });

  const studentData = data.students.find(student => student.regNo === regNo);

  console.log('Student data: ', studentData);
  console.log('DOB:', DOB.toDateString());
  console.log('Testing: ', new Date(DOB.toDateString()));

  const updateStudent = () => {
    console.log('Student added');
  };

  const loadData = () => {
    console.log('Updating: ', regNo);
    setDateOfReg(new Date(studentData.dateOfReg));
    setStudentName(studentData.name);
    setDOB(new Date(studentData.DOB));
    setGender(studentData.gender);
    setFatherName(studentData.fatherName);
    setCaste(studentData.caste);
    setOccupation(studentData.occupation);
    setResidence(studentData.residence);
    setAdmissionClass(studentData.class);
    setEmail(studentData.email);
    setPassword(studentData.password);
    setRemarks(studentData.remarks);
    setUpdateModal(true);
  };

  return (
    <Box>
      {!updateModal ? (
        <ModalCustom
          showModal={showModal}
          setShowModal={setShowModal}
          ref={ref}
          action={loadData}
          actionText={'Update'}
          heading="Update Student">
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
      ) : (
        <ModalCustom
          action={updateStudent}
          actionText={'Update'}
          heading="Update Student"
          showModal={updateModal}
          setShowModal={setUpdateModal}
          ref={updateRef}>
          <VStack space="lg">
            <FormControlCustom
              type={'number'}
              value={'' + regNo}
              onChange={setRegNo}
              keyboardType="numeric"
              label="Registration No"
              required={true}
            />

            <FormControl isRequired={true}>
              <FormControlLabel>
                <FormControlLabelText>Date of Admission</FormControlLabelText>
              </FormControlLabel>
              <Center>
                <DatePicker
                  date={dateOfReg}
                  mode="date"
                  onDateChange={date => setDateOfReg(date)}
                  onConfirm={date => {
                    setDateOfReg(date);
                  }}
                />
              </Center>
            </FormControl>

            <FormControlCustom
              type={'text'}
              value={studentName}
              onChange={setStudentName}
              label={'Student Name'}
              required={true}
            />
            <FormControl isRequired={true}>
              <FormControlLabel>
                <FormControlLabelText>Date of Birth</FormControlLabelText>
              </FormControlLabel>
              <Center>
                <DatePicker
                  date={DOB}
                  mode="date"
                  onDateChange={date => setDOB(date)}
                  onConfirm={date => {
                    setDOB(date);
                  }}
                />
              </Center>
            </FormControl>
            <FormControlCustom
              type={'text'}
              value={gender}
              onChange={setGender}
              label={'Gender'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={fatherName}
              onChange={setFatherName}
              label={'Father Name'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={caste}
              onChange={setCaste}
              label={'Caste'}
            />
            <FormControlCustom
              type={'text'}
              value={occupation}
              onChange={setOccupation}
              label={'Occupation'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={residence}
              onChange={setResidence}
              label={'Residence'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={admissionClass}
              onChange={setAdmissionClass}
              label={'Admission Class'}
              required={true}
            />
            <FormControlCustom
              type={'email'}
              value={email}
              onChange={setEmail}
              label={'Email'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={password}
              onChange={setPassword}
              label={'Password'}
              required={true}
            />
            <FormControlCustom
              type={'text'}
              value={remarks}
              onChange={setRemarks}
              label={'Remarks'}
            />
          </VStack>
        </ModalCustom>
      )}
    </Box>
  );
};

export default UpdateStudent;
