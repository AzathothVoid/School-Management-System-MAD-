import React, {createContext, useContext, useState, useEffect} from 'react';

import firestore from '@react-native-firebase/firestore';

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const populateReferences = async (doc, references) => {
  const populatedDoc = {...doc.data(), id: doc.id};

  for (const [key, ref] of Object.entries(references)) {
    if (doc.get(key)) {
      const refDoc = await doc.get(key).get();
      populatedDoc[ref] = refDoc.exists
        ? {...refDoc.data(), id: refDoc.id}
        : null;
    }
  }

  return populatedDoc;
};

export const FirebaseProvider = ({children}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const usersRef = firestore().collection('users');
    const classesRef = firestore().collection('classes');
    const studentsRef = firestore().collection('students');
    const teachersRef = firestore().collection('teachers');
    const feesRef = firestore().collection('fees');

    const unsubscribeUsers = usersRef.onSnapshot(snapshot => {
      const usersData = snapshot.docs.map(doc => {
        return {...doc.data(), _id: doc.id};
      });

      setData(prevData => ({...prevData, users: usersData}));
    });

    const unsubscribeClasses = classesRef.onSnapshot(snapshot => {
      const classesData = snapshot.docs.map(doc => {
        return {...doc.data(), _id: doc.id};
      });
      setData(prevData => ({...prevData, classes: classesData}));
    });

    const unsubscribeStudents = studentsRef.onSnapshot(snapshot => {
      const studentsData = snapshot.docs.map(doc => {
        return {...doc.data(), _id: doc.id};
      });

      setData(prevData => ({...prevData, students: studentsData}));
    });

    const unsubscribeTeachers = teachersRef.onSnapshot(snapshot => {
      const teachersData = snapshot.docs.map(doc => {
        return {...doc.data(), _id: doc.id};
      });
      setData(prevData => ({...prevData, teachers: teachersData}));
    });

    const unsubscribeFees = feesRef.onSnapshot(snapshot => {
      const feesData = snapshot.docs.map(doc => {
        return {...doc.data(), _id: doc.id};
      });

      setData(prevData => ({...prevData, fees: feesData}));
    });

    return () => {
      unsubscribeUsers();
      unsubscribeClasses();
      unsubscribeStudents();
      unsubscribeTeachers();
      unsubscribeFees();
    };
  }, []);

  return (
    <FirebaseContext.Provider value={{data, populateReferences}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
