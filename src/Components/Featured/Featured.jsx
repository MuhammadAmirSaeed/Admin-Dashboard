import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () =>
{
    return (
        <div className=' shadow-md rounded-md  p-2 w-80 h-full'>
            {/* top */ }
            <div className=' flex justify-between text-slate-500'>
                <div className='text-xl text-slate-500 font-bold'>
                    Total Revenue
                </div>
                <MoreVertOutlinedIcon className='font-xs' />

            </div>
            {/* bottom */ }
            <div className=' flex flex-col items-center justify-center'>

                <div className=' text-[20px] text-xs'>
                    <CircularProgressbar value={ 70 } text={ "70%" } strokeWidth={ 4 } className=' w-[100px] h-[100px] pt-3 font-semibold' />
                </div>
                <p className=' font-semibold text-xs pt-4 text-slate-500'>Total sale made today</p>
                <p className='font-semibold font-mono text-xl text-slate-800 '>$420</p>
                <p className='flex items-center font-semibold  text-xs text-slate-400'>Description</p>
            </div>

            {/* summary */ }

            <div className='flex flex-row justify-between items-center mt-4 p-2 '>
                <div className=''>
                    <div className=' text-xs text-slate-400 font-mono pl-2'>Target</div>
                    <div className='flex flex-row text-sm text-green-400'>
                        <KeyboardArrowUpOutlinedIcon className='h-1 w-1' />
                        <div>$12.4</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text-xs text-slate-400 font-mono'>Last Week</div>
                    <div className=' flex flex-row text-sm text-red-400'>
                        <KeyboardArrowDownOutlinedIcon className='h-1 w-1' />
                        <div>$12.4</div>
                    </div>
                </div>
                <div className=''>
                    <div className='text-xs text-slate-400 font-mono'>Last Month</div>
                    <div className='flex flex-row text-sm text-green-400'>
                        <KeyboardArrowUpOutlinedIcon className='h-1 w-1' />
                        <div>$12.4</div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Featured
