// external imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Body } from './layout/body'
import { Footer } from './layout/footer'
import { Header } from './layout/header'

// internal imports

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Routes>
        <Route path="/"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
