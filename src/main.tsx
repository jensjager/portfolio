import { createRoot } from 'react-dom/client';
import GridScene from './scenes/GridScene.tsx';
import { Hero, About, Skills, Projects } from './sections/';
import { HeroDivider, HorizontalDivider, Footer } from './components/';

export default function App() {
	return (
		<div className='from-dark to-secondary relative h-dvh w-dvw overflow-x-hidden bg-gradient-to-br text-white'>
			<GridScene />
			<Hero />
			<HeroDivider />
			<About />
			<HorizontalDivider />
			<Skills />
			<HorizontalDivider reverse />
			<Projects />
			<Footer />
		</div>
	);
}

createRoot(document.getElementById('root')!).render(<App />);
