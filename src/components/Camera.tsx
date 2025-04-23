import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Camera() {
	const cameraRef = useRef<THREE.PerspectiveCamera>(null);
	const { camera } = useThree();

	useEffect(() => {
		camera.layers.enable(1);
	}, [camera]);

	return (
		<PerspectiveCamera
			ref={cameraRef}
			fov={75}
			near={0.01}
			far={2.5}
			position={[0, 0, 2.1]}
			makeDefault
		/>
	);
}
