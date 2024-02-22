import { ControlDarkModeProvider } from './context/context'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Tabbar from './components/Tabbar'
import './App.css'

function App() {
  

  return (
    <ControlDarkModeProvider>
      <Navbar />
      <Section />
      <Tabbar />  
    </ControlDarkModeProvider>
  )
}

export default App
