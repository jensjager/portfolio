import { createRoot } from 'react-dom/client';
import GridScene from './scenes/GridScene.tsx';

export default function App() {
	return (
		<div className="w-dvw h-dvh">
			<GridScene />
		</div>
	);
}

createRoot(document.getElementById('root')!).render(<App />);
