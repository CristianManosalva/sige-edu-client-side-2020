import React, { Component } from "react";
import { useForm } from 'react-hook-form';
import './styles/styleforms.css'


const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach(val => {
    if (val.length > 0) {
      isValid = false
    } else {
      isValid = true
    }
  });

  Object.values(rest).forEach(val => {
    if (val === null) {
      isValid = false
    } else {
      isValid = true
    }
  });

  return isValid;
};

export default class UserForm extends Component {
  

  constructor(props) {
    var nameuser = props.user.firstNameUser;
    var lastUser = props.user.lastNameUser;
    var phoneUser = props.user.phoneUser;
    var emailUser = props.user.emailUser;
    console.log(props);
    
    super(props)
    this.state = {
      name: nameuser,
      email: emailUser,
      phone: phoneUser,
      lastname: lastUser,
      isError: {
        name: '',
        lastname: '',
        email: '',
        phone: ''
      }
    }
  }


  onSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(this.state)
    } else {
      console.log("Form is invalid!");
    }
  };


  formValChange = e => {
    e.preventDefault();
    console.log('e',e.target);
    
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name =
          value.length < 0 ? "Minimo 4 caracteres requeridos" : "";
        break;
      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Dirrección invalida";
        break;
      case "lastname":
        isError.lastname =
          value.length < 0 ? "Minimo 0 caracteres requeridos" : "";
        break;
      case "phone":
        isError.phone =
          value.length < 7 ? "Minimo 7 caracteres requeridos" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value
    })
  };


  render() {
    const { isError } = this.state;


    return (
      <div className="form">
        <form onSubmit={this.onSubmit} noValidate >
          <div className="form-name">
            <label>Nombre: &nbsp; </label>
            <input
              value={this.state.name}
              type="text"
              className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
              name="name"
              onChange={this.formValChange}
              style={{ fontSize: '20px' }}
            />
            {isError.name.length > 0 && (
              <span className="invalid-feedback">{isError.name}</span>
            )}
            <label>Apellido: &nbsp; </label>
            {/* <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    /> */}
            <input
              type="text"
              value={this.state.lastname}
              className={isError.lastname.length > 0 ? "is-invalid form-control" : "form-control"}
              name="lastname"
              onChange={this.formValChange}
              style={{ fontSize: '20px' }}
            />
            {isError.lastname.length > 0 && (
              <span className="invalid-feedback">{isError.lastname}</span>
            )}
          </div>

          <div className="form-email-rh">
            <label>Teléfono: &nbsp; </label>
            {/* <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    /> */}
            <input
              type="text"
              className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
              name="phone"
              onChange={this.formValChange}
              style={{ fontSize: '20px' }}
            />
            {isError.phone.length > 0 && (
              <span className="invalid-feedback">{isError.phone}</span>
            )}
            <label>Email: &nbsp; </label>
            <input
              type="email"
              className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
              name="email"
              onChange={this.formValChange}
              style={{ fontSize: '20px' }}
            />
            {isError.email.length > 0 && (
              <span className="invalid-feedback">{isError.email}</span>
            )}
            {/* <label>Grupo Sanguíneo: &nbsp; </label>
            <select name="rh">
              <option value="-">-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>*/}
          </div> 

          <hr />
          <div className="form-group">
            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
              <input className="button_send" type="submit" defaultValue="Update Profile" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}