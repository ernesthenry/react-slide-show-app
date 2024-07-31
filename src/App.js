import React from 'react'
import './App.css'
import 'h8k-components'

import Slides from './components/Slides'
const title = 'Slideshow App'

function App() {
  // Sample slides data
  const slides = [
    { title: 'Slide 1', text: 'This is the text for slide 1.' },
    { title: 'Slide 2', text: 'This is the text for slide 2.' },
    { title: 'Slide 3', text: 'This is the text for slide 3.' },
    { title: 'Slide 4', text: 'This is the text for slide 4.' },
    { title: 'Slide 5', text: 'This is the text for slide 5.' },
  ];
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='App'>
        <Slides slides={slides} />
      </div>
    </div>
  )
}

export default App
