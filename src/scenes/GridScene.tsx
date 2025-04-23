import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Camera } from '../components/Camera';
import { InfiniteGrid } from '../components/InfiniteGrid';

export default function GridScene() {
	return (
		<Canvas
			gl={{ antialias: false }}
			dpr={[1, 1.5]}
			performance={{ min: 0.1, max: 0.9 }}
		>
			<color attach="background" args={['#0f0911']} />
			<fog attach="fog" args={['#000000', 1, 2.5]} />
			<ambientLight intensity={10} />

			<InfiniteGrid pos={0} />
			<InfiniteGrid pos={1} />

			<Camera />

			<EffectComposer>
				<Bloom
					mipmapBlur
					intensity={1}
					luminanceThreshold={0.2}
					luminanceSmoothing={0.9}
				/>
			</EffectComposer>
		</Canvas>
	);
}
