import React from 'react'
import SideBar from '../../Components/SideBar'
import NavBar from '../../Components/NavBar'

const New = () =>
{
    return (
        <div className='flex'>
            <SideBar />
            <div className='flex-1'>
                <NavBar />
                {/* top */ }
                <div className='p-4 flex max-w-full shadow-lg shadow-slate-700 rounded-lg m-3 '>
                    <h1>New user</h1>
                </div>
                {/* bottom */ }
                <div className='flex max-w-full shadow-lg shadow-slate-700 m-4 p-4 '>

                    {/* left */ }
                    <div className='flex'>
                        <div className=' w-44'>   <img src='https://img.icons8.com/?size=90&id=8ax09IWlr80n&format=png' alt='user' className='h-20 w-20 border  text-slate-500 ' /></div>

                    </div>
                    {/* Right */ }
                    <div className='flex-1'>
                        <form>
                            <div>
                                <label>
                                    User
                                </label>
                                <input type='text' placeholder='enter your name' className='border w-full p-2 rounded-md' />
                            </div>
                            <div>
                                <label>
                                    Name and surname
                                </label>
                                <input type='text' placeholder='enter your surname' className='border w-full p-2 rounded-md' />
                            </div>
                            <div>
                                <label>
                                    Email
                                </label>
                                <input type='email' placeholder='example@gmail.com' className='border w-full p-2 rounded-md' />
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <input type='Password' placeholder='enter your password' className='border w-full p-2 rounded-md' />

                            </div>
                            <div>
                                <label>
                                    Phone
                                </label>
                                <input type='text' placeholder='+92 394023242' className='border w-full p-2 rounded-md' />

                            </div>
                            <div>
                                <label>
                                    Address
                                </label>
                                <input type='text' placeholder='Block A Johar Town Lahore' className='border w-full p-2 rounded-md' />

                            </div>
                            <div>
                                <label>
                                    Country
                                </label>
                                <input type='text' placeholder='Pakistan' className='border w-full p-2 rounded-md' />

                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default New
