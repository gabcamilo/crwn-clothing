import { createSelector} from 'reselect'

//input selector
const selectCart = state => state.cart;

//output selector
/**Takes two arguments
 * 1- a collection (array) of input selectors
 * 2- a function that will return the actual value we want.
*/
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
		accumulatedQuantity + cartItem.quantity,
		0
	)
)