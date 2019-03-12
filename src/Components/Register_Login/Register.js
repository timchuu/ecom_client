import React, { Component } from 'react'
import FormFields from '../../utils/Forms/FormFields'
import { update, generateData, isFormValid } from '../../utils/Forms/FormActions'
import { connect } from 'react-redux'
import { registerUser } from '../../store/Actions/user_actions'

 class Register extends Component {

  state = {
    formError: false,
    formSuccess:false,
    formdata:{
        name: {
            element: 'input',
            value: '',
            config:{
                name: 'name_input',
                type: 'text',
                placeholder: 'Enter your name'
            },
            validation:{
                required: true
            },
            valid: false,
            touched: false,
            validationMessage:''
        },
        lastname: {
            element: 'input',
            value: '',
            config:{
                name: 'lastname_input',
                type: 'text',
                placeholder: 'Enter your lastname'
            },
            validation:{
                required: true
            },
            valid: false,
            touched: false,
            validationMessage:''
        },
        email: {
            element: 'input',
            value: '',
            config:{
                name: 'email_input',
                type: 'email',
                placeholder: 'Enter your email'
            },
            validation:{
                required: true,
                email: true
            },
            valid: false,
            touched: false,
            validationMessage:''
        },
        password: {
            element: 'input',
            value: '',
            config:{
                name: 'password_input',
                type: 'password',
                placeholder: 'Enter your password'
            },
            validation:{
                required: true
            },
            valid: false,
            touched: false,
            validationMessage:''
        },
        confirmPassword: {
            element: 'input',
            value: '',
            config:{
                name: 'confirm_password_input',
                type: 'password',
                placeholder: 'Confirm your password'
            },
            validation:{
                required: true,
                confirm: 'password'
            },
            valid: false,
            touched: false,
            validationMessage:''
        }
    }
}

submitForm = (event) =>{
 event.preventDefault();

 let dataToSubmit = generateData(this.state.formdata, 'register');
 let formIsValid = isFormValid(this.state.formdata, 'register');
  
  if(formIsValid){
    this.props.dispatch(registerUser(dataToSubmit)).then(response =>{
      if(response.payload.success){
        this.setState({
          formError:false,
          formSuccess:true
        });
        setTimeout(()=>{
          this.props.history.push('/register_login')
        }, 3000);
      } else {
        this.setState({
          formError:true
        });
      }
    }).catch(error =>{
      this.setState({
        formError:true
      })
    })
  } else {
    this.setState({
      formError:true
    })
  }
}

updateForm = (element) =>{
 const newFormData = update(element, this.state.formdata, 'register');
  this.setState({
    formError:false,
    formdata:newFormData
  });
}
  render() {
    return (

      <section className="ab-info-main py-md-5">
         <div className="container py-md-3">
         <div className="single-form-left">
         <div className="contact-single">
                        <h3><span className="sub-tittle">01</span> Create an account</h3>
                        <form onSubmit={(event)=> this.submitForm(event)} className="mt-4">
                        
                            <div className="form-group">
                                <label htmlFor="name">Your name *</label>
                                <FormFields
                                  
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                         <label htmlFor="lastname">Your lastname *</label>
                                        <FormFields
                                  
                                            id={'lastname'}
                                            formdata={this.state.formdata.lastname}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                        <label htmlFor="email">Your email *</label>
                                        <FormFields
                                  
                                            id={'email'}
                                            formdata={this.state.formdata.email}
                                            change={(element)=> this.updateForm(element)}
                                        />
                            </div>
                            <div className="d-sm-flex">
                                <div className="col-sm-6 form-group p-0">
                                    <label htmlFor="password">Password *</label>
                                    <FormFields
                                  
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                </div>
                                <div className="col-sm-6 form-group ml-sm-3">
                                    <label htmlFor="confirmPassword">Confirm Password *</label>
                                    <FormFields
                                  
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                </div>
                            </div>
                            <button type="submit" className="mt-3 btn btn-success btn-block py-3">Register</button>
                        </form>
                    </div>
         </div>
         </div>
      </section>
    )
  }
}

export default connect()(Register)