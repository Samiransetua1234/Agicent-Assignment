import { useState } from 'react'
import Home from './pages/Home'
import TopBar from './components/TopBar'
import TopSearchBar from './components/TopSearchBar'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import DropDown from './components/DropDown'
import SideNav from './components/SideNav'
import RatingSystem from './components/RatingSystem'
import ProductDetail from './pages/ProductDetail'
import { Provider } from "react-redux";
import {store} from './redux/Store'
import Products from './pages/Products'

function App() {
  
  const[topbar, setTopbar] = useState(true)
  
  const[showDropDown, setShowDropDown] = useState(false)
  const[showSideNav, setShowSideNav] = useState(false)
  
  return (
    <>
      <main className='h-screen w-screen  overflow-y-auto scrollbar'>
      
      <header className='inline-block fixed w-full bg-white z-10'>
      {topbar&&<TopBar setTopbar= {setTopbar}/>}
        <TopSearchBar setShowSideNav={setShowSideNav}/>
        <div className='hidden lg:block'>
        <TopNav data={{setShowDropDown,showDropDown}}/>
        </div>
        
      </header>
      <section className={`fixed left-[-100%] ${showSideNav ? 'translate-x-full' : 'translate-x-0'} transition-transform duration-300 ease-in-out lg:hidden z-20 w-screen h-screen bg-white bg-opacity-35`}>
        <SideNav data={{setShowSideNav}}/>
        </section>
      <section className={`${showDropDown ? 'inline-block':'hidden'} lg:absolute  z-30 lg:top-[11rem] lg:left-[16rem] xl:left-[22rem] 2xl:left-[30rem] text-center`}>
        <DropDown setShowDropDown={setShowDropDown}/>
      </section>
      <Provider store={store}>
      <section className='flex flex-col justify-center items-center relative top-40 w-screen'>
      {/* <Home/> */}
      <Products/>
      {/* <ProductDetail/> */}
      <footer className='w-full'>
        <Footer/>
      </footer>
      </section>
      </Provider>
      
      </main>
      {/* <RatingSystem/> */}
    </>
  )
}

export default App
