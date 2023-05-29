import { useState } from 'react'
import Tooltip from './Tooltip'

function App() {
  const [hovering, setHovering] = useState(true);

  function handleMouseOver() {
    setHovering(true)
  }

  function handleMouseLeave() {
    setHovering(false);
  }

  return (
    <>
      <div className='container'>
        {hovering && <Tooltip position='top' />}
        <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          Hover over me!
        </button>
      </div>
    </>
  )
}

export default App
