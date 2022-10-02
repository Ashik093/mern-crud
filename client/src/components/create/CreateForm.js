import React, { useRef } from "react";
import Validation from "../../helper/Validation";
import FullScreenLoader from "../common/FullScreenLoader";
import { Create } from './../../apiServices/ProductService';
import { useNavigate } from 'react-router';

export default function CreateForm() {
  let navigate = useNavigate()
  let name,code,unitPrice,qty,totalPrice,img,loader,form = useRef()
  const submit=()=>{
    let data={
        ProductName: name.value,
        ProductCode: code.value,
        Img: img.value,
        UnitPrice: unitPrice.value,
        Qty: qty.value,
        TotalPrice: totalPrice.value,
      }
      if(Validation.isEmpty(name.value)){
        Validation.errorToast('Product name is empty')
      }
      else if(Validation.isEmpty(code.value)){
        Validation.errorToast('Product code is empty')
      }
      else if(Validation.isEmpty(img.value)){
        Validation.errorToast('Product image is empty')
      }
      else if(Validation.isEmpty(unitPrice.value)){
        Validation.errorToast('Product unit price is empty')
      }
      else if(Validation.isEmpty(qty.value)){
        Validation.errorToast('Product Qty is empty')
      }
      else if(Validation.isEmpty(totalPrice.value)){
        Validation.errorToast('Product total price is empty')
      }else{
        loader.classList.remove('d-none')
        form.classList.add('d-none')
        Create(data).then((res)=>{
          loader.classList.add('d-none')
          form.classList.remove('d-none')
          if(res){
            name.value=''
            code.value=''
            img.value=''
            unitPrice.value=''
            qty.value=''
            totalPrice.value=''
            Validation.successToast('Success')
            navigate('/')

          }else{
            Validation.errorToast('Something wrong')
          }
        })
      }
  }
  return (
    <>
    <div className="container mt-5"  ref={(div)=>form=div}>
      <div className="row">
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Name</label>
          <input ref={(input)=>name=input} type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Code</label>
          <input ref={(input)=>code=input} type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Unit Price</label>
          <input ref={(input)=>unitPrice=input} type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Qty</label>
          <input ref={(input)=>qty=input} type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Total Price</label>
          <input ref={(input)=>totalPrice=input} type="text" className="form-control" />
        </div>
        <div className="col-md-4 p-3">
          <label htmlFor="">Product Image</label>
          <input ref={(input)=>img=input} type="text" className="form-control" />
        </div>
      </div>
      <div class="row">
        <div className='col-md-4'>
          <button onClick={submit} className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    <div ref={(div)=>loader=div} className="d-none"> 
      <FullScreenLoader/>
    </div>
    </>
  );
}
