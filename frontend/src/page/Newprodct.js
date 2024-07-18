import React, { useState } from 'react'
import { MdDriveFolderUpload } from "react-icons/md";
import { ImagetoBase64 } from '../utility/ImagetoBase64';
const Newprodct = () => {
const [data, setData] =useState({
  name :"",
  category: "",
  image :"",
  price :"",
  discription: ""

})
const handleOnchange =(e)=>{
 const {name, value} = e.target

 setData((preve)=>{
  return{
    ...preve,
    [name] : value
  }
 })
}
const uploadImage= async(e)=>{
  const data = await ImagetoBase64(e.target.file[0])
  console.log(data)
 setData((preve)=>{
    return{
      ...preve,
      image : data
    }
 }
 )}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(data)
}
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={data}>
      <label htmlFor='name'></label>
      <input  type={"text"} name="name" className='bg-slate-200 p-1 my-1'onChange={handleOnchange}/>

      <label htmlFor='category'>Category</label>
      <select name="category" className='bg-slate-200 p-1 my-1'onChange={handleOnchange}>
        <option>Fruits</option>
        <option>Vegetable</option>
        <option>Icream</option>
        <option>Dosa</option>
        <option>Pizza</option>
        <option>Cake</option>
        {/* <option></option>
        <option></option>
        <option></option>
        <option></option> */}
      </select>
      <label htmlFor='image'>Image
      <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
      {
        data.image ?<img src={data.image} className='h-full' /> : <span className='text-5xl '><MdDriveFolderUpload /></span>
      }
      
      
      <input type={"file"} accept='image/*' id="image" onChange={uploadImage} className='hidden '/>
      </div></label>
      
      <label htmlFor='price' className='my-1'>Price</label>
      <input type={"text"} name="price" className='bg-slate-200 p-1 my-1'onChange={handleOnchange}/>
      
      <label htmlFor='description'>description</label>
      <textarea rows={2} name="description" className='bg-slate-200 p-1 my-1 resize-none'onChange={handleOnchange}></textarea>

      <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium drop-shadow'>Save</button>
      </form>
      </div> 
   
  )
}

export default Newprodct;