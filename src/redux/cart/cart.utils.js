export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	if(existingCartItem){
		return cartItems.map(cartItem =>
		cartItem.id === cartItemToAdd.id
		? {...cartItem, quantity: cartItem.quantity + 1}
		: cartItem)
	}

	return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const cartItem = cartItems.find(item => item.id === cartItemToRemove.id);

	if(cartItem.quantity === 1) {
		return (
			cartItems.filter(item => item.id !== cartItemToRemove.id)
		)
	}
	else {
		return	cartItems.map(
			item => 
			item.id === cartItemToRemove.id ?
			{...item, quantity: item.quantity - 1}
			: item
		)
		
	}

}