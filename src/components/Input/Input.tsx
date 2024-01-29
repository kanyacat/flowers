import styles from './Input.module.scss'
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	errorMessage?: string
}

const Input = forwardRef(
	(
		{ className, errorMessage, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
	
	return (
		<div className={cn(styles.inputWrapper, className)}>
		<input
			ref={ref}
			className={cn(styles.input, {
				[styles.error]: errorMessage
			})}
			{...props}
		/>
		{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
		</div>
	)
}
)

export default Input
