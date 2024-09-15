import UpperNav from './UpperNav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const CounterLayout = () => {
  return (
    <>
      <UpperNav />
        <Outlet />
      <Footer/>
    </>
  )
}

export default CounterLayout
