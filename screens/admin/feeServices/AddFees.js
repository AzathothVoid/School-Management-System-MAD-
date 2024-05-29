import React, {useState, useRef} from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  VStack,
  Center,
  Box,
  Select,
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
import {CloseIcon} from '@gluestack-ui/themed';
import FormControlCustom from '../../../components/FormControlCustom';
import DatePicker from 'react-native-date-picker';
import ModalCustom from '../../../components/ModalCustom';
import firestore from '@react-native-firebase/firestore';
import {useFirebase} from '../../../contexts/FirebaseContext';

const AddFees = ({showModal, setShowModal, ref}) => {
  const {data} = useFirebase();

  console.log('DATA: ', data);

  console.log('Clicked');
  const [regNo, setRegNo] = useState('');
  const [amountDue, setAmoundDue] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [lateFees, setLateFees] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date());
  const [studentName, setStudentName] = useState('');
  const [remarks, setRemarks] = useState('');

  const [resultModal, setResultModal] = useState(false);
  const resultRef = useRef(null);

  const studentData = data.students.find(student => student.regNo === regNo);

  const addFees = () => {
    try {
      if (!studentData) return;
      const student = firestore().collection('students').doc(studentData._id);
      const doc = firestore()
        .collection('fees')
        .add({
          amountDue: parsenInt(amountDue),
          amountPaid: parseInt(amountPaid),
          lateFees: boolean(lateFees),
          payableAmount: parseInt(payableAmount),
          paymentDate: paymentDate.toDateString(),
          student: student,
          studentName: studentName,
          regNo: parseInt(regNo),
          remarks: remarks,
        });

      if (!doc) {
        throw Error();
      }
      setResultModal(true);
      console.log('Student Added');
    } catch (error) {
      console.log('Errors: ', error);
    }
  };

  return (
    <Box>
      {!resultModal ? (
        <ModalCustom
          action={addFees}
          actionText={'Add'}
          heading="Add Fees"
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
              type={'text'}
              value={studentName}
              onChange={setStudentName}
              label="Student Name"
              required={true}
            />
            <FormControlCustom
              type={'numeric'}
              value={amountDue}
              onChange={setAmoundDue}
              keyboardType="numeric"
              label="Amount Due"
              required={true}
            />
            <FormControlCustom
              type={'numeric'}
              value={amountPaid}
              onChange={setAmountPaid}
              keyboardType="numeric"
              label="Amount Paid"
              required={true}
            />
            <FormControlCustom
              type={'numeric'}
              value={payableAmount}
              onChange={setPayableAmount}
              keyboardType="numeric"
              label="Payable Amount"
              required={true}
            />

            <FormControl isRequired={true}>
              <FormControlLabel>
                <FormControlLabelText>Payment Date</FormControlLabelText>
              </FormControlLabel>
              <Center>
                <DatePicker
                  date={paymentDate}
                  mode="date"
                  onDateChange={date => setPaymentDate(date)}
                  onConfirm={date => {
                    setPaymentDate(date);
                  }}
                />
              </Center>
            </FormControl>

            <FormControl isRequired>
              <FormControlLabel mb="$2">
                <FormControlLabelText>Late Fees</FormControlLabelText>
              </FormControlLabel>
              <Select onValueChange={feeStatus => setLateFees(feeStatus)}>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput
                    placeholder={lateFees ? lateFees : 'Fee Status'}
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
                    <ScrollView>
                      <SelectItem label="True" value={true} />
                      <SelectItem label="False" value={false} />
                    </ScrollView>
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>

            <FormControlCustom
              type={'text'}
              value={remarks}
              onChange={setRemarks}
              label={'Remarks'}
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
              <Text>Fees Added</Text>
            </Box>
          </Center>
        </ModalCustom>
      )}
    </Box>
  );
};

export default AddFees;
