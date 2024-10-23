import BlogStaticPage_61 from './pages/BlogStaticPage_61'
import BlogNodePage_61 from './pages/BlogNodePage_61'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogSupaPage_61 from './pages/BlogSupaPage_61'
import './index.css'
const App_61 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_61' element={<BlogStaticPage_61 />} />
        <Route path='/node_61' element={<BlogNodePage_61 />} />
        <Route path='/supa_61' element={<BlogSupaPage_61 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App_61
