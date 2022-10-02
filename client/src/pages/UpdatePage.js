import React from 'react'
import { useParams } from 'react-router';
import UpdateForm from '../components/update/UpdateForm';

export default function UpdatePage() {
  let param = useParams()
  return (
    <>
        <UpdateForm id={param.id}/>
    </>
  )
}
