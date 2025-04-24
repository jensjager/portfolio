import { SkillCard } from '../components';

function Skills() {
	const skills = [
		{
			skill: 'Frontend',
			text: 'React, TailwindCSS, TypeScript, JavaScript, WordPress',
		},
		{
			skill: 'Backend',
			text: 'Node.js, Express, Java',
		},
		{
			skill: 'Graphics',
			text: 'PixiJS, Three.js',
		},
		{
			skill: 'Languages',
			text: 'JavaScript, TypeScript, Java, Python, Rust',
		},
		{
			skill: 'Database & APIs',
			text: 'PostgreSQL, REST, PHP',
		},
		{
			skill: 'Tools & Build',
			text: 'Git, Vite, Webpack, Docker, Postman',
		},
	];

	return (
		<section
			id='skills'
			className='text-light relative z-0 flex flex-col justify-between px-8 py-24 text-center'
		>
			<h2 className='font-display text-light mb-12 text-4xl'>
				My Skills
			</h2>

			<div className='grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-6'>
				{skills.map(({ skill, text }, index) => (
					<SkillCard key={index} skill={skill} text={text} />
				))}
			</div>
			<div className='bg-rain'></div>
		</section>
	);
}

export default Skills;
