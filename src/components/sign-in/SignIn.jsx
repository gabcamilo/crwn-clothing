import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

export class SignIn extends Component {
	constructor(props){
		super(props);

		this.state={
			email: '',
			password: ''
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const {email, password} = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
		}catch(error){
			console.log(error);
		}

		this.setState({email:'', password:''})
	}

	handleChange = event => {
		const {value, name} = event.target;
		this.setState({[name]:value})
	}

	render() {
		return (
			<div className="sign-in">
				<h2>Already have an account</h2>
				<span>Sign in with your email and password</span>	

				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
					<FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>

					<div className="buttons">
						<CustomButton customclass="left-button" type="submit">Sign in</CustomButton>
						<CustomButton type="button" customclass="right-button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn
