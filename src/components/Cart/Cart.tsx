import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from './cart.svg'

const Cart = () => {
	return (
		<div className={styles.wrapper}>
			<Link to={'/'} className={styles.cart}>
				<CartIcon />
				<span className={styles.count}>0</span>
			</Link>
		</div>
	)
}

export default Cart
