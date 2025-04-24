import {
	glowBoxShadowColor,
	getGlowBoxShadow,
	getGlowBoxShadowInset,
} from '../styles/styleConstants';

function About() {
	return (
		<section
			id='about'
			className='text-light relative flex min-h-screen items-center justify-center px-8 py-24 text-center'
		>
			<div
				className='bg-dark border-accent flex flex-col items-center justify-around gap-4 rounded-lg border-2 p-8 md:flex-row'
				style={{
					boxShadow: getGlowBoxShadow(glowBoxShadowColor),
				}}
			>
				<div
					className='bg-accent mb-6 max-h-60 max-w-60 basis-2/5 overflow-hidden rounded-full'
					style={{
						boxShadow: getGlowBoxShadow(glowBoxShadowColor),
					}}
				>
					<img
						src='/portrait.png'
						alt='Jens Jäger'
						className='h-full w-full -translate-x-1 object-cover'
					/>
				</div>
				<div className='flex flex-1 flex-col gap-4 md:max-w-[50%]'>
					<h2 className='font-display mb-4 text-4xl'>About Me</h2>

					<p className='mx-auto max-w-3xl text-justify text-lg'>
						I'm Jens Jäger, a passionate developer from Tallinn,
						Estonia, studying computer science at the University of
						Tartu. I have a deep interest in creating both front-end
						and back-end solutions, with a strong focus on building
						seamless user experiences and solving complex problems.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
