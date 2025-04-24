import { useEffect, useState } from 'react';
import {
	glowBoxShadowColor,
	getGlowBoxShadow,
	getGlowBoxShadowInset,
} from '../styles/styleConstants';

function HeroDivider() {
	const itemBaseWidth = 132;
	const rotations = Array.from(
		{ length: window.innerWidth / itemBaseWidth + 1 },
		() => Math.floor(Math.random() * 17) - 8
	);
	const [visibleCount, setVisibleCount] = useState(0);

	const glowBoxShadow = `
		0px 1px 10px rgba(255, 105, 105, 0.5),
		0px 2px 4px rgba(255, 105, 105, 0.5),
		0px 4px 8px rgba(255, 105, 105, 0.5),
		0px 8px 16px rgba(255, 105, 105, 0.5)
  	`;
	useEffect(() => {
		const updateCount = () => {
			const availableWidth = window.innerWidth;
			const fit = Math.floor(availableWidth / itemBaseWidth);
			const maxFit = fit % 2 === 0 ? fit : fit + 1;
			setVisibleCount(maxFit);
		};
		updateCount();
		window.addEventListener('resize', updateCount);
		return () => window.removeEventListener('resize', updateCount);
	}, []);

	return (
		<div className='relative w-full bg-transparent'>
			<div className='relative mx-auto'>
				<div
					className='grid h-16 gap-1 bg-red-300 p-1'
					style={{
						gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
						boxShadow: getGlowBoxShadow(glowBoxShadowColor),
					}}
				>
					{rotations.slice(0, visibleCount).map((_, i) => (
						<div
							key={i}
							className='bg-secondary relative h-full'
							style={{
								boxShadow:
									getGlowBoxShadowInset(glowBoxShadowColor),
							}}
						/>
					))}
				</div>
			</div>

			<div className='relative flex justify-around py-4'>
				{rotations.slice(0, visibleCount - 1).map((rotation, idx) => (
					<GlowingBox key={idx} rotation={rotation} size={20} />
				))}
			</div>

			<div className='relative flex justify-around py-4'>
				{rotations.slice(0, visibleCount - 2).map((rotation, idx) => (
					<GlowingBox key={idx} rotation={rotation} size={10} />
				))}
			</div>
		</div>
	);
}

function GlowingBox({ rotation, size }: { rotation: number; size: number }) {
	return (
		<div
			className='max-w-[${size}] relative aspect-[3/5] w-full border-4 border-red-300'
			style={{
				maxWidth: `${size / 4}rem`,
				boxShadow:
					getGlowBoxShadow(glowBoxShadowColor) +
					', ' +
					getGlowBoxShadowInset(glowBoxShadowColor),
				transform: `rotate(${rotation ?? 0}deg)`,
				marginTop: rotation ? `${Math.abs(rotation) * 2}px` : '0px',
				marginBottom: rotation ? `${-Math.abs(rotation) * 2}px` : '0px',
			}}
		></div>
	);
}

export default HeroDivider;
