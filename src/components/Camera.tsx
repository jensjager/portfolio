import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Camera() {
	const cameraRef = useRef<THREE.PerspectiveCamera>(null);
	const { gl } = useThree();
	const mouse = useRef({ x: 0, y: 0 });
	const isOverCanvas = useRef(false);

	useEffect(() => {
		const canvas = gl.domElement;

		const handleMouseMove = (event: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			const withinX =
				event.clientX >= rect.left && event.clientX <= rect.right;
			const withinY =
				event.clientY >= rect.top && event.clientY <= rect.bottom;
			isOverCanvas.current = withinX && withinY;

			if (isOverCanvas.current) {
				mouse.current.x =
					((event.clientX - rect.left) / rect.width) * 2 - 1;
				mouse.current.y =
					-((event.clientY - rect.top) / rect.height) * 2 + 1;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [gl]);

	useEffect(() => {
		const initialRotation = { x: 0, y: 0 };

		const animate = () => {
			requestAnimationFrame(animate);

			if (cameraRef.current) {
				const current = cameraRef.current.rotation;
				if (isOverCanvas.current) {
					const targetX = mouse.current.y * 0.1;
					const targetY = -mouse.current.x * 0.15;

					current.x += (targetX - current.x) * 0.05;
					current.y += (targetY - current.y) * 0.05;
				} else {
					// Smoothly return to the initial rotation
					current.x += (initialRotation.x - current.x) * 0.05;
					current.y += (initialRotation.y - current.y) * 0.05;
				}
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

export default Camera;
