
// THIS FILE IS JUST STRUCTURE OF API INTEGRATION 
// submitAddEmployeeForm WILL CALL ON BUTTON OF FORM i.e onClick= {this.submitAddEmployeeForm} 


import React from "react";

function ProductList(props) {
submitAddEmployeeForm = (e) => {
    e.preventDefault();
    apiRequest({
      url: '/api/employee/addEmployee', 
      method: 'post',
      data:{ 
        salutation: this.state.salutation,
        firstname: this.state.firstname,
        middlename: this.state.middlename,
        lastname: this.state.lastname, 
        gerder:this.state.gerder,
        email:this.state.email,
        mobileno:this.state.mobileno,
        dob:this.state.dob,
        occupation:this.state.occupation,
        annualincome:this.state.annualincome,
        pancard:this.state.pancard,
        maritalstatus:this.state.maritalstatus,
        height:this.state.height,
        weight:this.state.weight,

      }
    }).then(response => {
      var data = response.data; 
      this.clearState();
      this.props.onEmployeeAdded();
      this.setState({ isVisible: true, alertMsg: 'Employee added Successfully' });
    })
    .catch(error => {
      this.setState({ isVisible: true, alertMsg: error.data.error, alertMsgColor:'danger' });
    })
  }
};


/*TO ADD handleButtonState CREATE FUNCTION ADD ALL FIELDS IN FUNCTION IF IT IS > 0 THEN RETURN FALSE 
THEN IT WILL SHOW EMPTY FIELDS REQUIRED TO ENABLE THAT BUTTON AFTER FILLED WITH ALL VALUES*/
handleButtonState=()=>{
    if(this.state.isError.salutation === ''
      && this.state.isError.firstname === '' 
      && this.state.isError.middlename === ''
      && this.state.isError.lastname === ''
      && this.state.errorEmailid === '' 
      && this.state.errorPhone === '' 
      && this.state.errorDesignation === '' 
      && this.state.errorEmployeeId === '' 
      && this.state.firstname.length > 0
      && this.state.lastname.length > 0
      && this.state.email.length > 0
      && this.state.phone.length > 0
       ){
      return false
    }
    else {
      return true
    }
  }
  
 