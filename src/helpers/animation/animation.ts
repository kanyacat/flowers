export const variants = {
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			ease: 'linear',
			duration: 0.5,
			delay: custom * 0.2
		}
	}),
	hidden: {
		opacity: 0
	}
}

export const buttonVariants = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: { type: 'spring', stiffness: 100 }
	},
	hidden: {
		opacity: 0,
		scale: 0.5
	}
}
