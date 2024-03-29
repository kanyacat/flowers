import styles from './Container.module.scss'

interface ContainerProps {
	children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: ContainerProps) => {
	return <div className={styles.root}>{children}</div>
}

export default Container
