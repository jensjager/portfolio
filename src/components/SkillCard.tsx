function SkillCard({ skill, text }: { skill: string; text: string }) {
	return (
		<div className='bg-secondary border-tertiary :hover:scale-125 hover:border-accent hover:shadow-accent/75 relative h-full overflow-visible rounded-lg border-2 p-4 duration-500 ease-out hover:shadow-md'>
			<div className='text-light flex h-full flex-col items-stretch justify-start gap-4'>
				<p className='text-2xl'>{skill}</p>
				<p className='text-light'>{text}</p>
			</div>
		</div>
	);
}

export default SkillCard;
