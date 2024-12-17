import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded mb-4'>Tailwind Test</h1>
      <Card userName="Abdul" btnText="Explore"/>
      <Card userName="Araka" btnText="Explore more"/>
      <Card userName="Ahsan" />


    </>
  )
}

export default App
