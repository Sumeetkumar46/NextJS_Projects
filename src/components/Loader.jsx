import { Html, useProgress } from '@react-three/drei';


const Loader = () => {
  const {progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 21,
          color: '#D7E9F7',
          fontWeight: 800,
          marginTop: 40
        }}>
        {progress.toFixed(2)}%</p>     
    </Html>
  )
}

export default Loader