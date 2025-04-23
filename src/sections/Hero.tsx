import { ScrollDownIndicator } from '../components';

export function Hero() {
	return (
		<section
			id='hero'
			className='bg-color-lightest text-color-darkest absolute inset-0 z-10 flex h-screen flex-col items-center justify-start px-8 py-24 text-center'
		>
			<h1 className='font-display text-color-primary mb-6 text-5xl md:text-6xl'>
				Hey, I'm Jens
			</h1>
			<p className='text-color-neutral mx-auto mb-8 max-w-2xl text-lg md:text-2xl'>
				I like to design and build software — from interactive frontends
				to robust backends.
			</p>
			<div className='absolute bottom-6'>
				<ScrollDownIndicator />
			</div>
		</section>
	);
}
