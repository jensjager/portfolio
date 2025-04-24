function Footer() {
	return (
		<footer className='bg-dark text-light px-8 py-12'>
			<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row'>
				<p className='text-light text-sm'>
					&copy; {new Date().getFullYear()} Jens Jaagup Jäger. All
					rights reserved.
				</p>
				<div className='flex gap-6'>
					<a
						href='https://github.com/jensjager'
						className='hover:text-accent transition'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/jensjager/'
						className='hover:text-accent transition'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
					<a
						href='https://www.facebook.com/jens.j.jager'
						className='hover:text-accent transition'
						target='_blank'
						rel='noopener noreferrer'
					>
						Facebook
					</a>
					<a
						href='mailto:jens.j.jager@gmail.com'
						className='hover:text-accent transition'
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
