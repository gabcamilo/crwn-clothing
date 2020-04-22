import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
	const {customclass} = otherProps
	return (
		<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${customclass ? customclass : ''}`  }
		{...otherProps}>
			{children}
		</button>
	)
}
export default CustomButton
