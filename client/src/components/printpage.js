import "./form.css";
import "./printpage.css";
import logo from './assets/logo.jpeg'
import { useLocation } from "react-router-dom";






const PrintPage = () => {
    const { state } = useLocation();
    console.log(state)
    window.onload = function () {
        // Trigger the print dialog
        window.print();
  
        // After print dialog is closed
        window.onafterprint = function () {
          // Redirect to the home page
          window.location.href = "/";
        };
      };
    

   
    return(<div className="printpage">
          <div className=' form form-container' >
               <h1><img src={logo} alt='logo'></img>Meritorious Library</h1>
               <p>The Self study point</p>
                 <h2>Library Membership form</h2> 
                 

        <form id="bookingform" >
        <div className="photo-placeholder">Photo</div>

            <div className="form__group field  formItem  forn-group">
                <label  className="form__label">Name:</label>
                <input   type="text" className="form__field" name="name" value={state.name}/>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Date of Birth:</label>
                <input className="form__field"  type="date" name="dob" value={state.dob}/>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Gender:</label>
                <input className="form__field"  name="gender" value={state.gender}>
                  
                </input>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Postal Address:</label>
                <textarea name="address" rows="3" value={state.address}></textarea>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Phone Number:</label>
                <input className="form__field"  type="tel" name="phone" value={state.phone}/>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Alternate Phone Number:</label>
                <input className="form__field"  type="tel" name="phoneAlternate" value={state.phoneAlternate}/>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Email:</label>
                <input className="form__field"  type="email" name="email" value={state.email} />
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Profession:</label>
                <input className="form__field"  type="text" name="profession" value={state.proffession}/>
            </div>

            <div className="form__group field  formItem  forn-group">
                <label className="form__label">Qualification:</label>
                <input className="form__field"  type="text" name="qualification" value={state.qualification}/>
            </div>

            <div className="form__group field  formItem  forn-group declaration" >
                <input className="form__field"  type="checkbox" name="declaration" checked />
                <label>'I declare that the above information is true to the best of my knowledge and belief. I agree to abide by the rules and regulation of meritorious liberary.'</label>
            </div>

            <div >

           <div> <div class="signature-placeholder"></div>Applicant's signature</div>
           </div>


                 </form>
                 
                
                 </div>

                 </div>   
    )


};

export default PrintPage;

    
    
