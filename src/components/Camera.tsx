import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Camera() {
	const cameraRef = useRef<THREE.PerspectiveCamera>(null);
	const { camera, size } = useThree();
	const mouse = useRef({ x: 0, y: 0 });

	useEffect(() => {
		camera.layers.enable(1);

		const handleMouseMove = (event: MouseEvent) => {
			mouse.current.x = (event.clientX / size.width) * 2 - 1;
			mouse.current.y = -(event.clientY / size.height) * 2 + 1;
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [camera, size]);

	useEffect(() => {
		const animate = () => {
			requestAnimationFrame(animate);

			if (cameraRef.current) {
				const targetRotationX = mouse.current.y * 0.1;
				const targetRotationY = -mouse.current.x * 0.15;

				cameraRef.current.rotation.x +=
					(targetRotationX - cameraRef.current.rotation.x) * 0.05;
				cameraRef.current.rotation.y +=
					(targetRotationY - cameraRef.current.rotation.y) * 0.05;
			}
		};

		animate();
	}, []);

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
