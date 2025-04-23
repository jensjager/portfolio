import { useEffect, useRef, useState } from 'react';

function ScrollDownIndicator() {
	const [visible, setVisible] = useState(true);
	const indicatorRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const hero = document.getElementById('hero');
		if (!hero) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting);
			},
			{
				root: null,
				threshold: 0.75,
			}
		);

		observer.observe(hero);

		return () => {
			if (hero) observer.unobserve(hero);
		};
	}, []);

	return (
		<div
			ref={indicatorRef}
			className={`transition-opacity duration-300 ease-in-out ${
				visible ? 'opacity-100' : 'pointer-events-none opacity-0'
			}`}
		>
			<a href='#about' className='group flex flex-col items-center'>
				<svg
					className='text-color-primary h-6 w-6 animate-bounce transition-transform group-hover:scale-110'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 10l-7 7-7-7'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 1l-7 7-7-7'
					/>
				</svg>
			</a>
		</div>
	);
}

export default ScrollDownIndicator;
