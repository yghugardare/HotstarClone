import logo from './../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import { useState } from 'react';
function Header() {
    const [toggle,setToggle] = useState(false)
    const menu = [
        {
            name : 'HOME',
            icon : HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <header className='flex  items-center justify-between p-3'>
        <div className='flex items-center gap-8 '>
            <img src={logo} alt="logo" 
            className='w-[80px] md:w-[115px] cursor-pointer object-contain' />
            <div className='hidden md:flex mt-3 gap-10 duration-2000 ease-in'>
                {menu.map((items,index)=>(
                    <HeaderItems key={index} name={items.name} Icon={items.icon}/>
                ))}
            </div>
            <div className='mt-3 flex items-center gap-1 md:hidden'>
                {
                    menu.map((item,index)=>(
                        index<3 && <HeaderItems key={index} name="" Icon={item.icon}/>
                    ))
                }
                <div className="md:hidden" onClick={()=> setToggle(!toggle)}>
                    <HeaderItems name={''} Icon={HiDotsVertical} />
                    {toggle?
                        <div className='absolute bg-[#121212] right-10 top-12 px-3 pt-2 border-[1.5px] border-gray-600' >
                        {
                            menu.map((item,index)=>(
                                index>=3 && <HeaderItems name={item.name} Icon={item.icon} key={index}/>
                            ))
                        }
                    </div> :null
                    }
                </div>
            </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="userlogo" 
        className="w-[40px] rounded-full cursor-pointer" />
    </header>
  )
}

export default Header