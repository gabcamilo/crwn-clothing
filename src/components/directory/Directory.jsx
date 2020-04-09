import React, { Component } from 'react'
import sections  from "./sections.json";
import MenuItem from '../menu-item/MenuItem'
import "./Directory.scss";

export class Directory extends Component {
	constructor(){
		super();

		this.state={
			sections: sections
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{
					this.state.sections.map(({title, imageUrl, id, size})=>{
						return <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>
					})
				}
			</div>
		)
	}
}

export default Directory
