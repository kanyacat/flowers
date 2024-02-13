import { ReactComponent as inst } from './SocialIcons/inst.svg'
import { ReactComponent as whatsapp } from './SocialIcons/wats.svg'
import { ReactComponent as mobile } from './SocialIcons/mobile.svg'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export const icons = {
	inst,
	whatsapp,
	mobile
}

export type IconName = keyof typeof icons

export interface SocialIconProps
	extends Omit<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
	> {
	icon: IconName
}
