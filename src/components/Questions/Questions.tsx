import styles from './Questions.module.scss'
import Container from '../Container/Container'
import QuestionsForm from '../QuestionsForm/QuestionsForm'
import { motion } from 'framer-motion'
import { variants } from '../../helpers/animation/animation'

const Questions = () => {
	return (
		<motion.div
			className={styles.root}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
		>
			<span className={styles.leaves} />
			<span className={styles.have} />
			<Container>
				<div>
					<div className={styles.head}>
						<motion.h1 className={styles.title} variants={variants}>
							остались <span>вопросы?</span>
						</motion.h1>
						<motion.p className={styles.text} variants={variants} custom={1}>
							<span className={styles.line} />
							Отправьте ваш вопрос, заказ, предложение или жалобу через форму
							обратной связи, и наш специалист свяжется с вами в течение 15
							минут.
						</motion.p>
					</div>
					<motion.div variants={variants} custom={2}>
						<QuestionsForm />
					</motion.div>
				</div>
			</Container>
		</motion.div>
	)
}

export default Questions
