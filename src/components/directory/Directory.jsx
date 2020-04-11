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
					this.state.sections.map(({id, ...otherSectionProps})=>{
						return <MenuItem key={id} {...otherSectionProps}/>
					})
				}
			</div>
		)
	}
}

export default Directory
