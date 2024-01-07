import { useState } from 'react'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import TopSearchBar from './components/TopSearchBar'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

function App() {
  
  const[topbar, setTopbar] = useState(true)
  return (
    <>
      <main className='h-screen w-screen relative overflow-auto scrollbar'>
      <header className='fixed w-full bg-white z-10'>
      {topbar?<TopBar setTopbar= {setTopbar}/>:''}
        <TopSearchBar/>
        <TopNav/>
      </header>
      <section className='relative top-40'>
      <Home/>
      <footer>
        <Footer/>
      </footer>
      </section>
      
      </main>
    </>
  )
}

export default App
