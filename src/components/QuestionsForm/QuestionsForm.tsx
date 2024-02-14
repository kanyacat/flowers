import styles from './QuestionsForm.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Input from '../Input/Input'
import { Button } from '../Button/Button'
import InputMask from 'react-input-mask'
import cn from 'classnames'

interface IFormData {
	name?: string
	phone?: number
	comment?: string
}

const QuestionsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()

	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const onSubmit = (formData: IFormData) => {
		try {
			console.log(formData)
			if (formData) {
				setIsSuccess(true)
				reset()
			}
		} catch (err: any) {
			setError(`${err.message}`)
		}
	}

	return (
		<div className={styles.form}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					placeholder={'Ваше имя'}
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					errorMessage={errors?.name?.message?.toString()}
					className={styles.input}
				/>
				<div className={cn(styles.input, styles.phone)}>
					<InputMask
						mask='+7 (999) 999-99-99'
						type='tel'
						placeholder={'+7 (977) 777-77-77'}
						{...register('phone', {
							required: { value: true, message: 'Заполните номер телефона' }
						})}
						className={cn(styles.input, {
							[styles.error]: errors?.phone?.message?.toString()
						})}
					/>
					{errors?.phone?.message?.toString() && (
						<div className={styles.errorMessage}>
							{errors?.phone?.message?.toString()}
						</div>
					)}
				</div>

				<Input
					type='text'
					placeholder={'Ваш комментарий'}
					{...register('comment', {
						required: { value: true, message: 'Заполните комментарий' }
					})}
					errorMessage={errors?.comment?.message?.toString()}
					className={styles.input}
				/>
				<Button type={'submit'}>отправить</Button>
				<p>
					Нажимая на кнопку «Отправить», я даю свое согласие на обработку
					персональных данных, в соответствии с{' '}
					<Link to={'/'}>Политикой конфиденциальности</Link>
				</p>
			</form>
		</div>
	)
}

export default QuestionsForm
