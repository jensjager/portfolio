function HorizontalDivider({ reverse }: { reverse?: boolean }) {
	const opacity = (i: number) => (20 * (i + 1)) / 100;

	return (
		<div className='bottom-0 flex w-full flex-col'>
			{Array.from({ length: 4 }, (_, i) => (
				<span
					key={i}
					className='bg-accent inline-block h-4 w-full'
					style={{
						opacity: `${reverse ? 1 - opacity(i) : opacity(i)}`,
					}}
				></span>
			))}
		</div>
	);
}

export default HorizontalDivider;
