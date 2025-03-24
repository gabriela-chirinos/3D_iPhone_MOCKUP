import {appleImg, bagImg, searchImg} from '../utils';
import {navLists} from '../constants'

export const Navbar = () => {
  return (
    <header className='w-full  mx-auto px-5 py-5 sm:px-10 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width  max-w-screen-xl mx-auto '>
            <img src={appleImg} alt='Apple' width={15}  height={22}  className=' ml-2 sm:ml-0 ' />
            <div className=' flex flex-1 justify-center max-sm:hidden  gap-x-5 '>
                {navLists.map((nav, i) => (
                    <div
                     key={nav}
                     className=' text-sm cursor-pointer  text-gray hover:text-red transition-all'
                     >
                        {nav}
                    </div>
                ))}
            </div>
            <div  id="icons" className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search"  width={18} height={18}/>
                <img src={bagImg} alt="bag"  width={18} height={18}/>
            </div>
        
            </nav>
    </header>
  )
}

