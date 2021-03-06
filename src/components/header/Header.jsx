import React from 'react'
import './Header.scss'
import {ReactComponent as Logo} from '../../assets/icon.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selectors'

const Header = ({currentUser, hidden}) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo"/>
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				) : (
					<Link className='option' to='/signin'>SIGN IN</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? '' : <CartDropdown />}
		</div>
	)
}

const mapStateToProps = createStructuredSelector ({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);