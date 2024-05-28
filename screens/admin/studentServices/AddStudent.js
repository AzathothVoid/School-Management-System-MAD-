import React, {useState, useRef} from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  VStack,
  Center,
} from '@gluestack-ui/themed';
import {CloseIcon} from '@gluestack-ui/themed';
import FormControlCustom from '../../../components/FormControlCustom';
import DatePicker from 'react-native-date-picker';
import ModalCustom from '../../../components/ModalCustom';
import {RefreshCcwDotIcon} from 'lucide-react-native';

const AddStudent = ({showModal, setShowModal, ref}) => {
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

  const addStudent = () => {
    console.log('Student added');
  };

  return (
    <ModalCustom
      action={addStudent}
      actionText={'Add'}
      heading="Add Student"
      showModal={showModal}
      setShowModal={setShowModal}
      ref={ref}>
      <VStack space="lg">
        <FormControlCustom
          type={'numeric'}
          value={regNo}
          onChange={setRegNo}
          keyboardType="numeric"
          label="Registration No"
          required={true}
        />
        <FormControlCustom
          type={'date'}
          value={dateOfReg}
          onChange={setDateOfReg}
          label="Date of Admission"
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
          type={'password'}
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
  );
};

export default AddStudent;
