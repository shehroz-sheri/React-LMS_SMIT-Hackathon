import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth, database } from '../../config/FirebaseConfig';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [val, setVal] = useState([]);
  const value = collection(database, 'student')


  const navigate = useNavigate()

  const signOff = () => {
    localStorage.clear();
    signOut(auth).then(val => {
      navigate('/registration')
    });
  }
  const handleDelete = async (id) => {
    const deleteVal = doc(database, 'student', id);
    await deleteDoc(deleteVal)
  }
  const [drop, setDrop] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleEdit = async (id, name, contact, courseId) => {
    setId(id)
    setContact(contact)
    setName(name)
    setCourseId(courseId);

  }

  const handleSubmit = async () => {
    const updateData = doc(database, 'info', id)
    await updateDoc(updateData, { studentId: id, studentContact: contact, studentCourseId: courseId, studentName: name })
    setId('')
    setContact('')
    setName('')
    setCourseId('')
  }

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    getData()
  });



  return (
    <>
      <div className='text-center'>
        <h1>Dashboard</h1>
        <div className=''>
          <button onClick={signOff} className="btn btn-danger btn-sm my-2">Sign Out</button><br />
          <Link to={'/addstudent'} className="btn btn-primary btn-sm mx-2">Add student</Link>
          <Link to={'/addcourse'} className="btn btn-primary btn-sm mx-2">Add Course</Link>
          <Link to={'/attendance'} className="btn btn-primary btn-sm mx-2">Attendance</Link>
        </div>
      </div>

      {
        val.map(values =>
          <div className='border py-1 d-flex border justify-content-around my-3'>
            <p className='p-0 m-0'><b>Student Id: </b>{values.studentId}</p>
            <p className='p-0 m-0'><b>Student Name: </b>{values.studentName}</p>
            <p className='p-0 m-0'><b>Student Contact: </b>{values.studentContact}</p>
            <p className='p-0 m-0'><b>Student Course: </b>{values.studentCourseId}</p>
            <div className="btn-group" role="group" data-bs-toggle="buttons">
              <label htmlFor="att">Attendance :</label>
              <input type="text" className="mx-2" name="att" id="" autocomplete="off" placeholder='Present / Absent' />

            </div>

            <button onClick={() => handleDelete(values.id)} className="btn btn-danger btn-sm">Delete</button>

          </div>
        )
      }






















    </>

  )
}

export default Dashboard