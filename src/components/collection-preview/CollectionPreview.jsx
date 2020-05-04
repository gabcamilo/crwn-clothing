import React from 'react'
import './CollectionPreview.scss'
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({title, items}) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
				.filter((item, i) => i<4)
				.map((item)=>(
					<CollectionItem key={`collection-item-${item.id}`} item={item}/>
				))}
			</div>
		</div>
	)
}

export default CollectionPreview;
