import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider, PerspectiveCamera } from '@theatre/r3f'

// https://www.theatrejs.com/docs/0.5/getting-started/with-react-three-fiber

studio.initialize()
studio.extend(extension)

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

const App = () => {
  // useEffect(() => {
  //   demoSheet.project.ready.then(() =>
  //     demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] })
  //   )
  // }, [])

  return (
    <Canvas>
      {/* Provide sheet created earlier with `const demoSheet = getProject('Demo Project').sheet('Demo Sheet')` */}
      <SheetProvider sheet={demoSheet}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <PerspectiveCamera
          theatreKey='Camera5'
          makeDefault
          position={[1.2, 1.5, 4]}
          fov={75}
        />
        <ambientLight />
        <e.pointLight theatreKey='Light' position={[5, 5, 5]} />
        <e.mesh theatreKey='Cube'>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </e.mesh>
      </SheetProvider>
    </Canvas>
  )
}

export default App
