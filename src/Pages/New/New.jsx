import React, { useState } from 'react'
import SideBar from '../../Components/SideBar'
import NavBar from '../../Components/NavBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({ title, inputs }) =>
{
    const [file, setFile] = useState('')
    console.log(file)
    return (
        <div className='flex'>
            <SideBar />
            <div className='flex-1'>
                <NavBar />
                {/* top */ }
                <div className='p-4 flex max-w-full shadow-lg shadow-slate-700 rounded-lg m-3 '>
                    <h1 className=' font-sans text-lg  font-semibold text-slate-600'>{ title }</h1>
                </div>
                {/* bottom */ }
                <div className='flex max-w-full shadow-lg shadow-slate-700 m-4 p-4 '>

                    {/* left */ }
                    <div className='flex'>
                        <div className=' w-60'>   <img src={ file ? URL.createObjectURL(file) : 'https://img.icons8.com/?size=96&id=8ax09IWlr80n&format=png' } alt='user' className='h-36 w-36 rounded-full    cursor-pointer ' /></div>

                    </div>
                    {/* Right */ }
                    <div className='flex-1'>
                        <form className='flex flex-wrap gap-10'>
                            <div className='w-[40%]'>
                                <label htmlFor='file'>
                                    Image <DriveFolderUploadIcon />
                                </label>
                                <input type='file' id='file' className='hidden' onChange={ e => setFile(e.target.files[0]) } />
                            </div>
                            { inputs.map((input) => (
                                <div className='w-[40%]' key={ input.id }>
                                    <label htmlFor={ input.label }>{ input.label }:</label>
                                    <input
                                        type={ input.type }
                                        id={ input.label }
                                        placeholder={ input.placeholder }
                                        className='border-b border-gray-300 px-3 w-full focus:outline-none focus:border-blue-400'
                                    />
                                </div>
                            )) }
                            <div className='w-full'>
                                <button className='bg-blue-200 px-8 mb-0 rounded-md shadow-md hover:bg-blue-400 text-md font-semibold self-start'>
                                    Send
                                </button>
                            </div>
                        </form>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default New
