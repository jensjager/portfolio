import {
	glowBoxShadowColorAccent,
	getGlowBoxShadow,
} from '../styles/styleConstants';
import React from 'react';

function Projects() {
	const projects = [
		{
			title: 'PixiJS Slot Game',
			description:
				'A interactive video slot machine game developed with PixiJS and TypeScript. Designed with a modular architecture for seamless scalability and smooth animation performance. Includes custom reel logic, symbol evaluation, and responsive UI for both desktop and mobile devices.',
			link: ['https://jensjager.github.io/slots/'],
			image: ['pixiSlots.png'],
		},
		{
			title: 'LTI Integration Tool',
			description:
				'A custom web-based tool built for seamless Moodle integration using the LTI standard. Enables secure student authentication, assignment submissions, automatic grading, and real-time result visualization for university courses. Developed with a focus on usability, extensibility, and academic workflow optimization.',
			image: ['lti.png'],
		},
		{
			title: 'Custom DSL and BPMN Parser',
			description:
				'A Rust-powered parser that transforms domain-specific language (DSL) inputs into BPMN diagrams. Designed for technical users to define business workflows textually and instantly visualize them. Features a robust syntax engine and exports compatible SVG diagrams for integration with workflow tools.',
			link: ['https://github.com/jensjager/bpmn-parser'],
			image: ['bpmnParser.svg'],
		},
		{
			title: 'WordPress Websites for Local Businesses',
			description:
				'Designed and developed custom WordPress websites from scratch, and contributed to ongoing development for others. Focused on user-friendly content management, clean responsive design, and performance. Worked with local businesses to align site functionality with brand goals and client needs.',
			image: ['kvbaltic.png', 'pillehunt.png', 'artharmony.png'],
			link: [
				'https://kvbaltic.ee',
				'https://pillehunt.ee',
				'https://artharmony.ee',
			],
		},
	];

	return (
		<section
			id='projects'
			className='text-light bg-hex flex flex-col items-center justify-center px-6 py-24'
		>
			<h2 className='font-display mb-12 text-center text-4xl'>
				Projects
			</h2>
			<div className='w-fit rounded-md bg-black/40'>
				<div className='mx-auto grid max-w-5xl grid-cols-[1fr_4px_1fr] sm:grid-cols-[2fr_3px_5fr]'>
					{projects.map((project, index) => (
						<React.Fragment key={index}>
							<div className='bg flex w-full flex-col justify-center gap-4 p-6'>
								{project.image.map((img, idx) => (
									<a
										key={idx}
										href={project.link?.[idx] || '#'}
									>
										<img
											src={img}
											className='bg-accent h-auto w-full rounded-lg object-cover grayscale-100 duration-300 hover:grayscale-0'
											alt={project.title}
										/>
									</a>
								))}
							</div>

							<div className='relative flex min-h-48 justify-center'>
								<div
									className='bg-accent h-full w-[3px]'
									style={{
										boxShadow: getGlowBoxShadow(
											glowBoxShadowColorAccent
										),
									}}
								></div>
								<div
									className='bg-accent absolute top-[calc(50%_-_1rem)] h-4 w-4 rounded-full'
									style={{
										boxShadow: getGlowBoxShadow(
											glowBoxShadowColorAccent
										),
									}}
								></div>
							</div>

							<div className='flex w-fit flex-col justify-center px-6'>
								<h3 className='text-xl font-semibold'>
									{project.title}
								</h3>
								<p className='text-light mt-2 hidden md:block'>
									{project.description}
								</p>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
