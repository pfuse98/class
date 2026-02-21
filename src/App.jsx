import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import NewsApp from './NewsApp'
import WeatherApp from './WeatherApp'
import TextConverter from './TextConverter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/news' element={<NewsApp />} />
          <Route path='/weather' element={<WeatherApp />} />
          <Route path='/text-converter' element={<TextConverter/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
