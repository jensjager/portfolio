import { createRoot } from 'react-dom/client';
import GridScene from './scenes/GridScene.tsx';
import { Hero, About } from './sections/';
import { HeroDivider } from './components/';

export default function App() {
	return (
		<div className='from-dark to-secondary relative h-dvh w-dvw overflow-x-hidden bg-gradient-to-br text-white'>
			<GridScene />
			<Hero />
			<HeroDivider />
			<About />
		</div>
	);
}

createRoot(document.getElementById('root')!).render(<App />);
