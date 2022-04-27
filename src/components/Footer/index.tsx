import GitHub from '../GitHub';

import './index.css'

export default function Footer() {
	return (
		<footer>
			<div className='footer-section'>
				<img src='/android-chrome-192x192.png' alt='App Logo' className='logo' />
				<p>Darwin</p>
			</div>
			<div className='footer-section'>
				<a
					href='/#'
					target='_blank'
					rel='noreferrer'
				>
					Quavo
				</a>
			</div>
			<div className='footer-section'>
				<a
					href='https://github.com/lucky-chap/darwin/issues'
					target='_blank'
					rel='noreferrer'
				>
					Submit an issue
				</a>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='13'
					height='13'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path
						fillRule='evenodd'
						d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z'
					/>
				</svg>
			</div>
			<GitHub />
		</footer>
	)
}



