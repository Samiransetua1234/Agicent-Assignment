import { useState } from 'react'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import TopSearchBar from './components/TopSearchBar'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import DropDown from './components/DropDown'

function App() {
  
  const[topbar, setTopbar] = useState(true)
  
  const[showDropDown, setShowDropDown] = useState(false)
  
  return (
    <>
      <main className='h-screen w-screen relative overflow-y-auto scrollbar'>
      <header className='inline-block fixed w-full bg-white z-10'>
      {topbar?<TopBar setTopbar= {setTopbar}/>:''}
        <TopSearchBar/>
        <div className='hidden lg:block'>
        <TopNav data={{setShowDropDown,showDropDown}}/>
        </div>
      </header>
      <section className={`hidden lg:${showDropDown && 'inline-block'} md:fixed z-10 top-[11rem] left-[16rem] xl:left-[22rem] 2xl:left-[30rem] text-center`}>
        <DropDown setShowDropDown={setShowDropDown}/>
      </section>
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
