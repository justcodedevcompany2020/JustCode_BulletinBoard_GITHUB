import './App.css'
import Context from './components/context/context'
import { MyRouter } from './MyRouter'
import { useEffect, useState } from 'react'

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const value = {
    windowSize, setWindowSize
  }

  return (
    <Context.Provider value={value}>
      <MyRouter />
    </Context.Provider>
  )
}

export default App