import styles from './Inst.module.scss'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

const Inst = () => {
	return (
		<div className={styles.root}>
			<span className={styles.backtext}>instagram</span>
			<span className={styles.blur} />
			<Container>
				<div className={styles.inst}>
					<div className={styles.photo}>
						<img
							src={
								'https://i.ibb.co/vQNLTyR/c7eed136e8c838ca0db681afa5ec7d37.png'
							}
							srcSet={'https://i.ibb.co/L1hcf9C/Rectangle-44-1.png 2x'}
							loading={'lazy'}
							alt='ёлочка'
						/>
						<img
							src={
								'https://i.ibb.co/ygKLj5G/737e506895fbf964ca1c64eb32bf7a3d.png'
							}
							srcSet={'https://i.ibb.co/JFMHJpD/Rectangle-45-1.png 2x'}
							loading={'lazy'}
							alt='букет-ёлка'
						/>
						<img
							src={
								'https://i.ibb.co/MZkgg4g/1c8914cae6d460c6ba629167278304dd.png'
							}
							srcSet={'https://i.ibb.co/zhRBDhW/Rectangle-46-1.png 2x'}
							loading={'lazy'}
							alt='свечки'
						/>
						<img
							src={
								'https://i.ibb.co/KD26phZ/00379419340f32647c4044263a074534.png'
							}
							srcSet={'https://i.ibb.co/k3GbdHC/Rectangle-47-1.png 2x'}
							loading={'lazy'}
							alt='золотой букет'
						/>
					</div>
					<span className={styles.social}>
						<img
							src='https://i.ibb.co/R6S3hd5/Component-1-1.png'
							alt='our social'
							loading={'lazy'}
						/>
						<div className={styles.socialBtn}>
							<Link to={'/'} className={styles.socialLink}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='25'
									height='25'
									viewBox='0 0 25 25'
									fill='none'
								>
									<path
										d='M12.4884 8.32593C10.1947 8.32593 8.3228 10.1978 8.3228 12.4916C8.3228 14.7853 10.1947 16.6572 12.4884 16.6572C14.7822 16.6572 16.6541 14.7853 16.6541 12.4916C16.6541 10.1978 14.7822 8.32593 12.4884 8.32593ZM24.9822 12.4916C24.9822 10.7666 24.9978 9.05718 24.9009 7.3353C24.8041 5.3353 24.951 2.95371 23.4885 1.49121C22.0229 0.0255859 19.6478 0.179054 17.6478 0.0821795C15.9228 -0.0146955 14.2134 0.000929513 12.4916 0.000929513C10.7666 0.000929513 9.05718 -0.0146955 7.3353 0.0821795C5.3353 0.179054 2.95103 0.028711 1.48853 1.49121C0.0229003 2.95684 0.179054 5.3353 0.0821795 7.3353C-0.0146955 9.0603 0.000929513 10.7697 0.000929513 12.4916C0.000929513 14.2134 -0.0146955 15.9259 0.0821795 17.6478C0.179054 19.6478 0.0260254 22.0287 1.48853 23.4912C2.95415 24.9568 5.3353 24.8041 7.3353 24.9009C9.0603 24.9978 10.7697 24.9822 12.4916 24.9822C14.2166 24.9822 15.9259 24.9978 17.6478 24.9009C19.6478 24.8041 22.026 24.9537 23.4885 23.4912C24.9542 22.0256 24.8041 19.6478 24.9009 17.6478C25.0009 15.9259 24.9822 14.2166 24.9822 12.4916ZM12.4884 18.9009C8.94155 18.9009 6.07905 16.0384 6.07905 12.4916C6.07905 8.94468 8.94155 6.08218 12.4884 6.08218C16.0353 6.08218 18.8978 8.94468 18.8978 12.4916C18.8978 16.0384 16.0353 18.9009 12.4884 18.9009ZM19.1603 7.31655C18.3322 7.31655 17.6634 6.6478 17.6634 5.81968C17.6634 4.99155 18.3322 4.3228 19.1603 4.3228C19.9884 4.3228 20.6572 4.99155 20.6572 5.81968C20.6574 6.01632 20.6189 6.21108 20.5437 6.3928C20.4686 6.57452 20.3584 6.73963 20.2193 6.87868C20.0803 7.01773 19.9151 7.12798 19.7334 7.20311C19.5517 7.27825 19.3569 7.3168 19.1603 7.31655Z'
										fill='#43FFD2'
									/>
								</svg>
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='25'
									height='25'
									viewBox='0 0 25 25'
									fill='none'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M24.4471 4.3622C24.52 4.87556 24.5615 5.39288 24.5716 5.91128C24.58 6.13241 24.5837 6.41878 24.5837 6.5517L24.5825 18.4502C24.5825 18.5831 24.5776 18.8694 24.5704 19.0906C24.5598 19.6131 24.517 20.1345 24.4423 20.6517C24.3553 21.1055 24.2082 21.5455 24.0049 21.9604C23.5567 22.8432 22.8389 23.5602 21.9555 24.0073C21.538 24.2115 21.0951 24.359 20.6385 24.4459C20.1251 24.5188 19.6078 24.5603 19.0894 24.5704C18.8682 24.5788 18.5819 24.5824 18.449 24.5824L6.54928 24.58C6.41637 24.58 6.12999 24.5764 5.90887 24.5679C5.38637 24.5578 4.86499 24.5154 4.3477 24.4411C3.894 24.354 3.45393 24.2069 3.03908 24.0037C2.15646 23.5558 1.43948 22.8384 0.992159 21.9555C0.787871 21.538 0.640354 21.0951 0.553534 20.6385C0.480627 20.1251 0.439064 19.6078 0.429076 19.0894C0.420617 18.8682 0.416992 18.5819 0.416992 18.4489L0.419409 6.54928C0.419409 6.41637 0.424242 6.12999 0.431492 5.90887C0.442129 5.38634 0.484904 4.86497 0.559576 4.3477C0.646598 3.894 0.793698 3.45391 0.996992 3.03908C1.44484 2.15646 2.16224 1.43948 3.04512 0.992159C3.46262 0.787858 3.90557 0.64034 4.3622 0.553534C4.87556 0.480627 5.39287 0.439064 5.91128 0.429076C6.13241 0.420617 6.41879 0.416992 6.5517 0.416992L18.4514 0.420617C18.5843 0.420617 18.8707 0.424242 19.0918 0.432701C19.6143 0.44287 20.1357 0.485242 20.653 0.559576C21.1067 0.646542 21.5468 0.793645 21.9616 0.996992C22.8442 1.44477 23.5612 2.16219 24.0085 3.04512C24.2128 3.46262 24.3603 3.90557 24.4471 4.3622ZM12.7589 20.9067H12.7625C14.6588 20.9066 16.502 20.2809 18.0064 19.1267C19.5109 17.9724 20.5925 16.354 21.0836 14.5225C21.5747 12.691 21.4478 10.7486 20.7226 8.99647C19.9974 7.24439 18.7145 5.78049 17.0727 4.83175C15.4308 3.88301 13.5219 3.50243 11.6417 3.74903C9.7616 3.99562 8.01535 4.8556 6.67371 6.19564C5.33208 7.53568 4.47002 9.28091 4.22119 11.1607C3.97236 13.0406 4.35067 14.95 5.29745 16.5929L4.07462 21.0553L8.64212 19.8579C9.90524 20.5458 11.3206 20.9064 12.7589 20.9067ZM9.12829 6.12178C10.2306 5.47217 11.4869 5.12974 12.7664 5.13011L12.7652 5.12891C14.6645 5.12923 16.4858 5.88401 17.8286 7.22722C19.1713 8.57043 19.9255 10.392 19.9252 12.2913C19.9249 14.1906 19.1701 16.0119 17.8269 17.3547C16.4837 18.6974 14.6621 19.4516 12.7628 19.4513H12.7592C11.4769 19.4514 10.2182 19.1066 9.11484 18.4532L8.85384 18.2985L6.14355 19.009L6.86734 16.3676L6.69697 16.0969C6.01716 15.013 5.64017 13.7666 5.60521 12.4876C5.57025 11.2085 5.87859 9.94349 6.49817 8.82398C7.11775 7.70447 8.02594 6.77139 9.12829 6.12178ZM16.3571 16.0284C16.6071 15.8522 16.8179 15.6263 16.9763 15.3647C17.1172 15.0431 17.1609 14.6873 17.1019 14.3412C17.0602 14.2711 16.9628 14.224 16.8189 14.1545C16.7793 14.1354 16.7363 14.1146 16.6899 14.0911C16.4748 13.9824 15.4151 13.4616 15.2181 13.3903C15.0212 13.319 14.8786 13.2827 14.7348 13.4978C14.591 13.7129 14.179 14.1974 14.0533 14.3412C13.9276 14.485 13.802 14.5044 13.5869 14.3956C12.952 14.1429 12.366 13.7815 11.8553 13.3274C11.3847 12.8923 10.9811 12.3898 10.6579 11.8364C10.5334 11.6213 10.6446 11.5053 10.7533 11.3977C10.815 11.336 10.8851 11.2507 10.956 11.1644C10.9962 11.1155 11.0366 11.0662 11.076 11.0207C11.1644 10.912 11.2368 10.7911 11.291 10.6619C11.3196 10.6025 11.3329 10.5369 11.3297 10.4711C11.3266 10.4052 11.3071 10.3412 11.2729 10.2849C11.2414 10.221 11.0769 9.82142 10.9105 9.41726C10.7967 9.14079 10.682 8.86218 10.6083 8.68745C10.4545 8.3156 10.2987 8.31699 10.1728 8.31811C10.1563 8.31825 10.1404 8.3184 10.125 8.3177C9.99935 8.31045 9.85557 8.31045 9.71299 8.31045H9.71297C9.60389 8.31337 9.4966 8.33882 9.39782 8.38519C9.29905 8.43156 9.21094 8.49785 9.13901 8.57991C8.89562 8.81025 8.70288 9.08876 8.57307 9.3977C8.44325 9.70664 8.3792 10.0392 8.38501 10.3743C8.45528 11.186 8.76101 11.9596 9.26467 12.6C10.188 13.9835 11.4551 15.1032 12.9416 15.8492C13.3422 16.0221 13.7516 16.1738 14.1681 16.3036C14.6073 16.4368 15.0715 16.4657 15.5238 16.3882C15.8234 16.327 16.1072 16.2045 16.3571 16.0284Z'
										fill='#43FFD2'
									/>
								</svg>
							</Link>
							<Link to={'/'} className={styles.socialLink}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M19.9902 24H3.99023C1.99023 24 1.46365 23.707 0.878289 23.1211C0.292923 22.5352 -0.00976562 22 0.000240437 20V4C0.000240437 2 0.292923 1.46484 0.878289 0.878906C1.46365 0.292969 1.99023 0 3.99023 0H19.9902C20.8175 0 22.0036 0.0124413 22.9902 1C23.9768 1.98756 23.9768 3.17188 23.9768 4V20C23.9902 22 23.6841 22.5352 23.0988 23.1211C22.5134 23.707 21.9902 24 19.9902 24ZM7.49292 9V6.75C7.49292 6.32812 7.36414 5.91406 7.10658 5.50781C6.84902 5.10156 6.56414 4.8125 6.25195 4.64062C5.93975 4.46875 5.6978 4.46094 5.52609 4.61719L3.81683 6.35156C3.34853 6.82031 3.08317 7.44922 3.02073 8.23828C2.95829 9.02734 3.07926 9.88672 3.38366 10.8164C3.68805 11.7461 4.17585 12.7305 4.84707 13.7695C5.51829 14.8086 6.32219 15.7969 7.25878 16.7344C8.19536 17.6719 9.18268 18.4766 10.2207 19.1484C11.2588 19.8203 12.2422 20.3125 13.171 20.625C14.0998 20.9375 14.9583 21.0625 15.7466 21C16.5349 20.9375 17.1632 20.6719 17.6315 20.2031L19.3641 18.4688C19.5202 18.3125 19.5124 18.0742 19.3407 17.7539C19.169 17.4336 18.8802 17.1445 18.4744 16.8867C18.0685 16.6289 17.6549 16.5 17.2334 16.5H14.9856L13.4637 17.4375C12.7612 17.25 11.8949 16.7422 10.8646 15.9141C9.83439 15.0859 8.90561 14.1562 8.07829 13.125C7.25097 12.0938 6.74365 11.2266 6.55634 10.5234L7.49292 9ZM16.4373 12.75L17.9593 13.0078C17.8344 11.1328 17.1085 9.53125 15.7817 8.20312C14.4549 6.875 12.8627 6.14844 11.0051 6.02344L11.2393 7.54688C12.5973 7.71875 13.7602 8.28906 14.728 9.25781C15.6959 10.2266 16.2656 11.3906 16.4373 12.75ZM11.5202 9.11719L11.8012 10.8047C12.41 11.1016 12.8705 11.5625 13.1827 12.1875L14.8685 12.4688C14.6656 11.6406 14.2637 10.9258 13.6627 10.3242C13.0617 9.72266 12.3476 9.32031 11.5202 9.11719ZM10.49 3L10.7476 4.52344C12.3085 4.55469 13.7485 4.96484 15.0676 5.75391C16.3866 6.54297 17.4402 7.59766 18.2285 8.91797C19.0168 10.2383 19.4266 11.6797 19.4578 13.2422L20.9798 13.5C20.9798 12.0781 20.7027 10.7188 20.1485 9.42188C19.5944 8.125 18.849 7.00781 17.9124 6.07031C16.9759 5.13281 15.8598 4.38672 14.5641 3.83203C13.2685 3.27734 11.9105 3 10.49 3Z'
										fill='#43FFD2'
									/>
								</svg>
							</Link>
						</div>
					</span>
				</div>
			</Container>
		</div>
	)
}

export default Inst
