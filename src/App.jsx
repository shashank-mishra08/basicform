import 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const[formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    street:"",
    pin:"",
    state:"", 
    city:"",
    comments:false,
    candidates:false,
    offers:false

  });


  function changeHandler(event){
    const {name,value, type, checked}=event.target;
    setFormData((prev)=>{
      return{...prev, [name]: type==="checkbox" ? checked : value };

    });

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the value of form D ata")
    console.log(formData);

  }
  

  return (
    <div className='flex  justify-center items-center'>
      
      <form onSubmit={submitHandler}>
      {/* FIRST NAME */}
      <label htmlFor='firstName'>FIRST NAME :</label>
      <br/>
      <input
        type='text'
        placeholder='Enter your first Name'
        name='firstName'
        id='firstName'
        value={formData.firstName}
        onChange={changeHandler}
        className='border border-solid'
        autoComplete='given-name'

      />
      <br/>

        {/* LAST NAME */}
      <label htmlFor='lastName'>LAST NAME :</label>
      <br/>
      <input
        type='text'
        placeholder='Enter your last Name'
        name='lastName'
        id='lastName'
        value={formData.lastName}
        onChange={changeHandler}
        className='border border-solid'
        autoComplete='family-name'

      />
      <br/>

      {/* EMAIL */}

      <label htmlFor='email'>EMAIL:</label>
      <br/>
      <input
        type='email'
        placeholder='Enter your email id '
        name='email'
        id='email'
        value={formData.email}
        onChange={changeHandler}
        className='border border-solid'
        autoComplete='email'
      />
      <br/>

      <label htmlFor='country'> Select country </label>
      <br/>
       <select
       id='country'
       name='country'
       value={formData.country}
       onChange={changeHandler}
       autoComplete='country'
       >
       <option id='value1'>INDIA</option>
       <option id='value2'>GERMANY</option>
       <option id='value3'>AUSTALIA</option>
       <option id='value4'>AMERICA</option>
       </select>
        <br/>
        <br/>

        <label htmlFor='street'>Street Address</label>
        <br/>
        <input type='text'
         id='street'
        name='street'
        value={formData.street}
        placeholder='Asansol Engineering college side Road'
        onChange={changeHandler}
        autoComplete='address'
        />
        <br/>

        {/* CITY KE LIYE */}

        <label htmlFor='city'>city</label>
        <br/>
        <input type='text'
         id='city'
        name='city'
        value={formData.city}
        placeholder='Asansol'
        className='outline'
        onChange={changeHandler}
        autoComplete='given-area'
        />
        <br/>

        <label htmlFor='state'>State :</label>
        <br/>
        <input type='text'
         id='state'
        name='state'
        value={formData.state}
        placeholder='West Bengal'
        className='outline'
        onChange={changeHandler}
        autoComplete='given-place'
        />
        <br/>

        <label htmlFor='pin'>Zip/Postal Code:</label>
        <br/>
        <input type='number'
         id='pin'
        name='pin'
        value={formData.pin}
        placeholder='848127'
        className='outline'
        onChange={changeHandler}
        autoComplete='pin'
        />
        <br/>

        <fieldset>
          {/* caption wagera ke liye legned ka use krte hain */}
          <legend > By Email</legend>
          {/* creating checkboxes */}
          <div className='flex'>
          <input
            type='checkbox'
            name='comments'
            id='comments'
            checked={formData.comments}
            onChange={changeHandler}
            className=' '

          />
          <div>
            <label htmlFor='comments'>Comments</label>
            <p>Get notified when someone posts a comment on posting</p>
          </div>

          </div>
          <br/>

          <div className='flex'>
          <input
            type='checkbox'
            name='candidates'
            id='candidates'
            checked={formData.candidates}
            onChange={changeHandler}
            className=' '
          />
          <div>
            <label htmlFor='candidates'>Comments</label>
            <p>Get notified when a candidate applies for the job</p>
          </div>

          </div>
          <br/>

          <div className='flex'>
          <input
            type='checkbox'
            name='offers'
            id='offers'
            checked={formData.offers}
            onChange={changeHandler}
            className=' '
          />
          <div>
            <label htmlFor='offers'>Comments</label>
            <p>Get notified when a candidate accepts and Rejects offers</p>
          </div>

          </div>
          <br/>
         

        </fieldset>

        {/* bhtt saare input elements ko jab group karna hota h then we use fieldset  */}
        <fieldset>
          <legend>Push Notification</legend>
          <p>Informations will be shared to your mobile phones and on you email</p>
          <div>
            <input 
              type='radio'
              name='pushnotification'
              id='sameasemail'
              onChange={changeHandler}  
            />
            <label htmlFor='sameasemail'> same as email</label>
            <br/>

            <input 
              type='radio'
              name='pushnotification'
              id='nonotification'
              onChange={changeHandler}  
            />
            <label htmlFor='nonotification'>no push notification</label>
            <br/>

            <input 
              type='radio'
              name='pushnotification'
              id='notification'
              onChange={changeHandler}  
            />
            <label htmlFor='notification'> Everything</label>
            <br/>
          </div>
        </fieldset>

        <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg'>Save</button>
      
    
    



      </form>
    </div>
  )
}

export default App
