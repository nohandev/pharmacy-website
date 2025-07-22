import Logo from './ui/Logo'
import Navigation from './ui/Navigation'
import { User } from 'lucide-react'

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between items-center bg-white px-6 py-4'>
        <Logo/>
        <Navigation/>
        <button className='flex gap-2 items-center bg-primary p-5 rounded-full text-white'>
          <div>
            <User/>
          </div>
          <p>Get In Touch</p>
        </button>
      </nav>
    </header>
  )
}

export default Navbar