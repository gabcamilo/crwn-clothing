import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
	const {customclass} = otherProps
	return (
		<button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${customclass ? customclass : ''}`  }
		{...otherProps}>
			{children}
		</button>
	)
}
export default CustomButton
