import React from 'react';
import "./form.css";
import  "./buttons.css";
import  "../app.css";

import logo from "./assets/logo.jpeg";
import { Link } from 'react-router-dom';



const booking = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    option: []
  },
  {
    id: 3,
    label: 'date of birth',
    type: 'date',
    option: []
  },
  {
    id: 4,
    label: 'Gender',
    type: 'select',
    option: ['Male', 'Female', 'Other']
  },
  {
    id: 5,
    label: 'Postal Address',
    type: 'text',
    option: []
  },
  {
    id: 6,
    label: 'Phone',
    type: 'number',
    option: []
  },
  {
    id: 7,
    label: 'Mobile(Alternate)',
    type: 'number',
    option: []
  },
  {
    id: 8,
    label: 'email',
    type: 'email',
    option: []
  },
  {
    id: 9,
    label: 'Profession',
    type: 'text',
    option: []
  },
  {
    id: 10,
    label: 'Qualification',
    type: 'text',
    option: []
  },

]


const BookingForm = (prop) => {
  const title = { prop };
  const declaration = 'I declare that the above information is true to the best of my knowledge and belief. I agree to abide by the rules and regulation of meritorious liberary.'

  return (
    <div className='form' >
      <h1><img src={logo} alt='logo'></img>Meritorious Library</h1>
      <p>The Self study point</p>
      <form id='bookingform'>
        <h2>Library Membership form</h2>
        {booking.map((item) => {
          if (item.type === 'select') {
            return (
              <div class="form__group field formItem" key={item.id + title}>

                <label for={item.label} class="form__label">{item.label}</label>

                <select name={item.label} required={true} className="form__field" id={item.label} form="booking" placeholder={item.label}>

                  {item.option.map((i) => {
                    return <option value={i}>{i}</option>
                  })}
                </select>
              </div>
            )
          }
          else if (item.type === 'tel') {
            <div class="form__group field formItem" key={item.id + title}>
              <input type={item.type} class="form__field" placeholder={item.label} name={item.label} id={item.label}  required />
              <label for={item.label} class="form__label">{item.label}</label>
            </div>
          }
          return (

            <div class="form__group field formItem" key={item.id + title}>
              <input type={item.type} class="form__field" placeholder={item.label} name={item.label} id={item.label} pattern={item.pattern || undefined} required={true} />
              <label for={item.label} class="form__label">{item.label}</label>
            </div>
          )
        })
        }

         <div class="form__group field formItem">
                <input type="checkbox" id="declaration" name="declaration" value='declaration' />
                <label for="declaration">{declaration}</label><br></br>
                </div>
        
                <p id='Note' style={{marginTop: "20px"}}>Submit the Hardcopy of this form, student's passport size photograph and Rs.1200 as registration fee in the office of meritorious library.</p>
        
                <div className="buttons">
                <button type='submit' id='printButton' onClick={(event) => check(event, 'bookingform')} value='download the Form' >download the Form</button>
        
                  <Link to='/'> <button type='submit' id='HomeButton' value='login'>Home</button></Link> 
           </div>
        
      </form>
    </div>
  )
}



export default BookingForm;

function check(event,Params) {
  {

    event.preventDefault();
    let form = document.getElementById(Params)
    let children = form.querySelectorAll('input, textarea, select');
    let findEmpty = Array.from(children).find((element) => {
      if (element.value.length < 1) { return true }
      return false
    });

    if (findEmpty) {
      alert("please fill all the fields");
    } 
    else {
       
      const printButton = document.getElementById("printButton");
      const HomeButton = document.getElementById("HomeButton");
      const Note = document.getElementById("Note");
      printButton.style.visibility = 'hidden'
      HomeButton.style.visibility = 'hidden'
      Note.style.visibility = 'hidden'

      window.print();
      printButton.style.visibility = 'visible';
      HomeButton.style.visibility = 'visible';
      Note.style.visibility = 'visible';

    }
  };
};




