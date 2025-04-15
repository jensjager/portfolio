import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './styles.css'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
