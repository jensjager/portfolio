import { createRoot } from 'react-dom/client';
import GridScene from './scenes/GridScene.tsx';
import { Hero } from './sections/Hero.tsx';
import { HeroDivider } from './components/';

export default function App() {
	return (
		<div className='bg-dark relative h-dvh w-dvw overflow-x-hidden text-white'>
			<GridScene />
			<Hero />
			<HeroDivider />
		</div>
	);
}

createRoot(document.getElementById('root')!).render(<App />);
