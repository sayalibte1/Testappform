import logo from './logo.svg';
import React, {useState ,useRef,useEffect} from "react";
import './App.css';
import './style.scss';
import Select from 'react-select';
// import {email,fname,required,regExp} from "./validations";
class App extends React.Component {
  constructor() {
    super();
    this.state = {      
      salutation: '',
      firstname: '',
      middlename: '',
      lastname: '', 
      gerder:"",
      email:'',
      mobileno:'',
      dob:'',
      occupation:'',
      annualincome:'',
      pancard:'',
      maritalstatus:'',
      height:'',
      weight:'',
      isError:{
        salutation: '',
        firstname: '',
        middlename: '',
        lastname: '', 
        gerder:"",
        email:'',
        mobileno:'',
        dob:'',
        occupation:'',
        annualincome:'',
        pancard:'',
        maritalstatus:'',
        height:'',
        weight:'',
      }
     
    }
  };
  
  Salutation = [ {
    label: "Mr"
  },
  {
    label: "Mrs"
  },
  {  
    label: "Ms"
  },
  ];
   Gender = [
    {
      label: "Male"
    },
    {
      label: "Female"
    },
  ];
   Occupation = [
    {
      label: "Salaried"
    },
    {
      label: "Business"
    },
    {
      label: "Student"
    },
  ];
   Maritalstatus = [
    {
      label: "Married"
    },
    {
      label: "Unmarried"
    },
    {
      label: "Divorced"
    },
    {
      label: "Widowed"
    },
  ];
   Relation = [
    {
      label: "Father"
    },
    {
      label: "Mother"
    },
    {
      label: "Spouse"
    },
    {
      label: "Son"
    },
    {
      label: "Daughter"
    },
  ];
 
   emailidtest = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
  pancardregExp = RegExp(
    /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
      )

  
  handleChange = (e) => {
    const inputVal = e.target.value;
    const { name, value } = e.target;
    let isError = { ...this.state.isError };
    switch(e.target.name){
      case 'firstname':
        isError.firstname =
        inputVal.length < 4 ? "Atleast 4 characaters required" : "";
    break;
    case 'lastname':
      isError.lastname =
      inputVal.length < 4 ? "Atleast 4 characaters required" : "";
  break;
  case 'mobileno':
    isError.mobileno =
    inputVal.length < 10 ? "Atleast 10 number required" :
     isError.mobileno=inputVal.length > 10 ? " Please do not enter more than 10 numbers" : "";
        ;
    break;
          case 'email':         
          isError.email = this.emailidtest.test(inputVal)
          ? ""
          : "Email address is invalid";
      break;
      case 'annualincome':
        isError.annualincome =
        inputVal < 500000 ? "Income should be greater that 5 lakhs" :
        isError.annualincome=inputVal > 2500000 ? " Income should be below 25lakhs" : "";
        ;
    break;
    case 'pancard':
      isError.pancard = this.pancardregExp.test(inputVal)
      ? ""
      : "Pan card number is invalid";
     break
          }
      
       
      this.setState({
        isError,
        [name]: inputVal
    })        
    }

  
 render(){
  const { isError } = this.state;
   return(
     <>
     <div className="container rounded">
       <form name="form" className="form-group">
         <div className="row">
         <div className="col-md-3">
           <label for="inputname">Proposer Details</label>
         </div>
         <div className="col-md-9">
           <div className="row">
                <div className="col-md-6">
                    <label for="inputname">Salutation</label>
                    <Select
                    placeholder="Salutation"
                    // value={salutation} // set selected value
                    options={this.Salutation} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />

                  
                </div>
                <div className="col-md-6">
                   <label for="inputname">First Name</label>
                   <input type="text" name="firstname" className={isError.firstname.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="First Name" required
                    onChange={this.handleChange}></input>
                  {isError.firstname.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.firstname}</div>
                    )}
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Middle Name</label>
                    <input type="text" className="form-control" placeholder="Middle Name" required></input>
                </div>
                <div className="col-md-6">
                   <label for="inputname">Last Name</label>
                   <input type="text" name="lastname" className={isError.lastname.length > 0 ? "is-invalid form-control" : "form-control"}
                    placeholder="Last Name"
                   onChange={this.handleChange} required></input>
                   {isError.lastname.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.lastname}</div>
                    )}
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Gender</label>
                    <Select
                    placeholder="Gender"
                    // value={genderOption} // set selected value
                     options={this.Gender} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />
                </div>
                <div className="col-md-6">
                   <label for="inputname">Email ID</label>
                   <input type="email" name="email" className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Email ID"
                    onChange={this.handleChange}  required></input>
                   {isError.email.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.email}</div>
                    )}
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Mobile</label>
                    <input type="number" name="mobileno" className={isError.mobileno.length > 0 ? "is-invalid form-control" : "form-control"} 
                    placeholder="Mobile Number" onChange={this.handleChange} required></input>
                    {isError.mobileno.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.mobileno}</div>
                    )}
                </div>
                <div className="col-md-6">
                   <label for="inputname">Date Of Birth</label>
                   <input type="date" name="dob" className="form-control" 
                   placeholder="DD-MM-YYYY" onChange={this.handleChange} required></input>
                  
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Occupation</label>
                    <Select
                    placeholder="Occupation"
                    // value={occupation} // set selected value
                      options={this.Occupation} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />
                </div>
                <div className="col-md-6">
                   <label for="inputname">Annual Income</label>
                   <input type="number" name="annualincome" className={isError.annualincome.length > 0 ? "is-invalid form-control" : "form-control"}
                   placeholder="Rs." onChange={this.handleChange} required></input>
                   {isError.annualincome.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.annualincome}</div>
                    )}
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Pan Card</label>
                    <input type="text" name="pancard"  className={isError.pancard.length > 0 ? "is-invalid form-control" : "form-control"} 
                      onChange={this.handleChange}  placeholder="Pan card" required></input>
                      {isError.pancard.length > 0 && (
                        <div className="invalid-feedback text-danger">{isError.pancard}</div>
                    )}
                </div>
                <div className="col-md-6">
                   <label for="inputname">Marital status</label>
                   <Select
                    placeholder="Marital Status"
                    // value={maritalstatus} // set selected value
                       options={this.Maritalstatus} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Height</label>
                    <input type="number" className="form-control" placeholder="Height" required></input>
                </div>
                <div className="col-md-6">
                   <label for="inputname">Weight</label>
                   <input type="number" className="form-control" placeholder="Weight" required></input>
                 </div>
           </div>
         </div>
         </div>
         <div className="row">
         <div className="col-md-3">
           <label>Nominee Details</label>
         </div>
         <div className="col-md-9">
         <div className="row">
               <div className="col-md-6">
                    <label for="inputname">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" required></input>
                </div>
                <div className="col-md-6">
                   <label for="inputname">Middle Name</label>
                   <input type="text" className="form-control" placeholder="Middle Name" required></input>
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" required></input>
                </div>
                <div className="col-md-6 dropup">
                   <label for="inputname">Relationship</label>
                   <Select
                  //  className="dropup"
                    placeholder="Relation"
                    // value={relataion} // set selected value
                     options={this.Relation} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />
                 </div>
                 <div className="col-md-6">
                    <label for="inputname">Date of Birth</label>
                    <input type="date" className="form-control" placeholder="DD-MM-YYYY"></input>
                </div>
                <div className="col-md-6">
                   <label for="inputname">Gender</label> 
                   <Select
                    placeholder="Gender"
                    // value={occupation} // set selected value
                      options={this.Gender} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    />
                  
                 </div>
                 </div>
                 <div className="row">
                 <div className="col-md-12 mt-4">
                  
                 <button
                            className="float-right"
                            color="default"
                            href="#pablo"
                            // onClick={e => e.preventDefault()}
                            
                            //  disabled={this.handleButtonState()} 
                            //  onClick= {this.submitAddEmployeeForm}
                          >
                          Submit
                          </button>
                  
                 </div>
                 </div>
            </div>
         </div>
       </form>
     </div>
     </>
   )
 }
}

export default App;
