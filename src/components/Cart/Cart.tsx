import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from './cart.svg'
import { CartProps } from './Cart.props'
import cn from 'classnames'

const Cart = (props: CartProps): JSX.Element => {
	const { className } = props
	return (
		<div className={cn(styles.wrapper, className)}>
			<Link to={'/'} className={styles.cart}>
				<CartIcon />
				<span className={styles.count}>0</span>
			</Link>
		</div>
	)
}

export default Cart
