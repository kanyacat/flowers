import styles from './Questions.module.scss'
import Container from '../Container/Container'
import QuestionsForm from '../QuestionsForm/QuestionsForm'

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
						<QuestionsForm />
		</div>
			</Container>
		</div>
	)
}

export default Questions
