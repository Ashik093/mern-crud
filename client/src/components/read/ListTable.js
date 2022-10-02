import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Delete, Read } from '../../apiServices/ProductService'
import Validation from '../../helper/Validation';
import FullScreenLoader from './../common/FullScreenLoader';

export default function ListTable(props) {
  let navigate = useNavigate()
  let [data,setData] = useState([])
  useEffect(()=>{
    Read().then((res)=>{
      const dataList = res
      setData(dataList)
    })
  },[])
  const deleteItem=(id)=>{
    Delete(id).then((res)=>{
      if(res){
        Validation.successToast('Success')
        Read().then((res)=>{
          const dataList = res
          setData(dataList)
        })
      }else{
        Validation.successToast('Something wrong')

      }
    })
  }
  const updateItem=(id)=>{
    navigate('/update/'+id)
  }
  
  if(data.length>0){
    console.log(data)
    return (
      <div className='container mt-5'>
        <table className='table table-bordered'>
            <thead>
                <th className='col'>Product name</th>
                <th className='col'>Product code</th>
                <th className='col'>Product image</th>
                <th className='col'>Product unit price</th>
                <th className='col'>Product qty</th>
                <th className='col'>Product total price</th>
                <th className='col'>Action</th>
            </thead>
            <tbody>
              {
                data.map((item,i)=>{
                  return (
                    <tr>
                      <td>{item.ProductName}</td>
                      <td>{item.ProductCode}</td>
                      <td><img src={item.Img} className='img' /></td>
                      <td>{item.UnitPrice}</td>
                      <td>{item.Qty}</td>
                      <td>{item.TotalPrice}</td>
                      <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-primary btn-sm" onClick={updateItem.bind(this,item._id)}>Edit</button>
                          <button type="button" class="btn btn-danger btn-sm" onClick={deleteItem.bind(this,item._id)}>Delete</button>
                        </div>
                    </td>
                    </tr>
                    
                  )
                })
              }
            </tbody>
        </table>
      </div>
    )
  }else{
    return(
      <FullScreenLoader/>
    )
    
  }
}
