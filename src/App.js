import './App.css'
import Context from './components/context'
import { MyRouter } from './MyRouter'
import { useEffect, useState } from 'react'
import { DownloadApp } from './components/popup/downloadApp'

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

  // window.scrollY ete es pahi ira arjeqic poqranuma - verevi navbary cuyc tal, ete mecanuma - cuyc chtal
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.querySelector('.littleNavs') && document.querySelector('.navigationShadow')) {
        if (window.scrollY >= 50 && windowSize.innerWidth > 1024) {
          document.querySelector('.littleNavs').style.visibility = 'hidden'
          document.querySelector('.navigationShadow').style.position = 'sticky'
          document.querySelector('.navigationShadow').style.top = '-40px'
          document.querySelector('.navigationShadow').style.zIndex = '3'
        } else if (window.scrollY >= 50 && windowSize.innerWidth < 1024) {
          document.querySelector('.littleNavs').style.visibility = 'hidden'
          document.querySelector('.navigationShadow').style.position = 'sticky'
          document.querySelector('.navigationShadow').style.top = '0px'
          document.querySelector('.navigationShadow').style.zIndex = '3'
        } else if (windowSize.innerWidth <= 1024) {
          document.querySelector('.navigationShadow').style.position = 'sticky'
          document.querySelector('.navigationShadow').style.top = '0px'
          document.querySelector('.navigationShadow').style.zIndex = '3'
        } else {
          document.querySelector('.littleNavs').style.visibility = 'visible'
          document.querySelector('.navigationShadow').style.top = '0px'
          document.querySelector('.navigationShadow').style.position = 'relative'
          document.querySelector('.navigationShadow').style.zIndex = '3'
        }
      }
    })
  }, [windowSize])

  const value = {
    windowSize, setWindowSize
  }



  return (
    <Context.Provider value={value}>
      <DownloadApp />
      <MyRouter />
    </Context.Provider>
  )
}

export default App