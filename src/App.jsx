import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DictionaryComp from './components/DictionaryComp';
// import './App.css'
import "@lowlighter/matcha/dist/matcha.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World, Iam App</h1>
      <DictionaryComp />
    </>
  )
}

export default App
