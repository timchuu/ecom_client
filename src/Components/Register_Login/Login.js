import React, { Component } from 'react'
import FormFields from '../../utils/Forms/FormFields'
import { update, generateData, isFormValid } from '../../utils/Forms/FormActions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../store/Actions/user_actions'

 class Login extends Component {

  state ={
    formError:false,
    formSuccess: "",
    formdata: {
        email:{
          element: "input",
          value: "",
          config: {
            name: "email_input",
            type: "email",
            placeholder: "Enter email address"
          },
          validation:{
            required: true,
            email:true
          },
          valid: false,
          touched:false,
          validationMessage:""
        },
        password:{
          element: "input",
          value: "",
          config: {
            name: "password_input",
            type: "password",
            placeholder: "Enter password"
          },
          validation:{
            required: true,
            
          },
          valid: false,
          touched:false,
          validationMessage:""
        },

    }
  }
  

  updateForm = el =>{
    const newformdata = update(el, this.state.formdata, "login");
    this.setState({
      formError:false,
      formdata: newformdata
    })
  }

  submitForm = (event) =>{
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, "login")
    let formIsValid = isFormValid(this.state.formdata, "login") 
    

    if(formIsValid){
      this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
        if(response.payload.loginSuccess && response.payload.token){
            const access_token = response.payload.token
            console.log(response.payload)
            window.localStorage.setItem('token', access_token)
            this.props.history.push('/user/dashboard') 
        } else {
          this.setState({
            formError:true
          })
        }
      })
      
    } else {
      this.setState({
        formError:true
      })
    }

  }
  
  render() {
    
    return (
      <div className="col-md-6 contact-right-content">
      <form onSubmit={(event)=> this.submitForm(event)}>
        <FormFields 
          id={"email"}
          formdata={this.state.formdata.email}
          change={(element) => this.updateForm(element)}
        />
         <FormFields 
          id={"password"}
          formdata={this.state.formdata.password}
          change={(element) => this.updateForm(element)}
        />
        {this.state.formError ? (
          <div className="error_label">Please check your password or email</div>
        ): null}
          <div className="read mt-3">
              <button type="submit" >
              Login
              </button>
          </div>
      </form>
  </div>
    )
  }

  
}
  
  
  

export default connect()(withRouter(Login))
