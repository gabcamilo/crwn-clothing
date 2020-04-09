import React from 'react'
import './MenuItem.scss'


export const MenuItem = ({imageUrl, title, size}) => {
	return (
		<div style={{
			backgroundImage: `url(${imageUrl})`
			}} className={`${size} menu-item`}>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
}
export default MenuItem;
