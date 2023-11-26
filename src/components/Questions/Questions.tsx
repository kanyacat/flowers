import styles from './Questions.module.scss'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

const Questions = () => {
	return (
		<div className={styles.root}>
			<span className={styles.leaves} />
			<span className={styles.have} />
			<Container>
				<div>
					<div className={styles.head}>
						<h1 className={styles.title}>
							остались <span>вопросы?</span>
						</h1>
						<p className={styles.text}>
							<span className={styles.line} />
							Отправьте ваш вопрос, заказ, предложение или жалобу через форму
							обратной связи, и наш специалист свяжется с вами в течение 15
							минут.
						</p>
					</div>
					<div className={styles.form}>
						<form action='submit'>
							<input type='text' placeholder={'Ваше имя'} />
							<input type='tel' placeholder={'+7 (977) 777-77-77'} />
							<input type='text' placeholder={'Ваш комментарий'} />
							<button type={'submit'}>отправить</button>
							<p>
								Нажимая на кнопку «Отправить», я даю свое согласие на обработку
								персональных данных, в соответствии с{' '}
								<Link to={'/'}>Политикой конфиденциальности</Link>
							</p>
						</form>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Questions
