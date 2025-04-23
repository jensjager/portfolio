import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

export function InfiniteGrid({ pos }: { pos: number }) {
	const gridRef = useRef<THREE.Mesh>(null!);
	const TEXTURE_PATH = 'src/assets/colorGrid.png';
	const DISPLACEMENT_PATH = 'src/assets/displacementGrid.png';

	const colorMap = useLoader(THREE.TextureLoader, TEXTURE_PATH);
	const displacementMap = useLoader(THREE.TextureLoader, DISPLACEMENT_PATH);

	const geometry = useMemo(() => {
		return new THREE.PlaneGeometry(1, 2, 24, 24);
	}, []);

	useFrame(({ clock }) => {
		const time = clock.getElapsedTime() * 0.1;
		const cycle = Math.floor(time);
		const position = time % 2;
		if (gridRef.current) {
			gridRef.current.position.z =
				pos === 0
					? cycle % 2 === 0
						? position + 1
						: position - 1
					: cycle % 2 === 0
					? position - 1
					: position + 1;
		}
	});

	return (
		<mesh
			ref={gridRef}
			onUpdate={(self) => self.layers.set(1)}
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, -0.1, 0]}
			geometry={geometry}
		>
			<meshStandardMaterial
				map={colorMap}
				emissiveMap={colorMap}
				emissiveIntensity={1.5}
				emissive={'#ffffff'}
				displacementMap={displacementMap}
				displacementScale={0.3}
				metalness={0.96}
				roughness={0.5}
				color={'#ffffff'}
				side={2}
			/>
		</mesh>
	);
}
