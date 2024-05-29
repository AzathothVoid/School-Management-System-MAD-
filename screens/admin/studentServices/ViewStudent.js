import React from 'react';
import {Box, VStack, HStack, ScrollView} from '@gluestack-ui/themed';
import {DataTable} from 'react-native-paper';

import ModalCustom from '../../../components/ModalCustom';

import {useFirebase} from '../../../contexts/FirebaseContext';

const ViewStudent = ({showModal, setShowModal, ref}) => {
  const {data, populateReferences} = useFirebase();

  //   <ModalCustom showModal={showModal} setShowModal={setShowModal} ref={ref}>
  return (
    <DataTable>
      <ScrollView>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Reg No</DataTable.Title>
          <DataTable.Title>Class</DataTable.Title>
          <DataTable.Title>Gender</DataTable.Title>
        </DataTable.Header>
        {data.students.map((student, index) => {
          console.log(student);
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{student.name}</DataTable.Cell>
              <DataTable.Cell>{student.regNo}</DataTable.Cell>
              <DataTable.Cell>{student.residence}</DataTable.Cell>
              <DataTable.Cell>{student.gender}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </ScrollView>
    </DataTable>
  );
  //   </ModalCustom>
};

export default ViewStudent;
