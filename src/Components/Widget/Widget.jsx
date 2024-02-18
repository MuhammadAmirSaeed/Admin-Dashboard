import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Widget = ({ type }) =>
{
    let data;

    //! temporary data because we don't  have database value
    let amount = 2000;
    let difference = 20


    if (type === 'user')
    {
        data = {
            title: 'USERS',
            value: false,
            link: "see all users",
            icon: <PersonOutlineOutlinedIcon className='text-red-700 bg-red-200 rounded-md p-1' />,
        }
    }
    else if (type === 'order')
    {
        data = {
            title: 'Order',
            value: false,
            link: "view all orders",
            icon: <ShoppingCartOutlinedIcon className='text-blue-700 bg-blue-200 rounded-md p-1 ' />
        }
    }
    else if (type === 'earning')
    {
        data = {
            title: 'Earning',
            value: true,
            link: "view net earning",
            icon: <MonetizationOnOutlinedIcon className='text-green-700 bg-green-200 rounded-md p-1' />,
        }
    }
    else if (type === 'balance')
    {
        data = {
            title: 'Balance',
            value: true,
            link: "see details",
            icon: <AccountBalanceIcon className='text-yellow-700 bg-yellow-200 rounded-md p-1' />
        }
    }
    else
    {
        data = {
            title: 'User',
            value: 32123,
            icon: <PersonOutlineOutlinedIcon />
        }
    }

    return (
        <div className='flex   gap-24 shadow-md px-3 rounded-md  h-36'>

            {/* left */ }
            <div className=' flex flex-col justify-between'>
                <span className='font-bold text-slate-400 uppercase'>{ data.title }</span>
                <span className='text-2xl'>{ data.value && "$" } { amount }</span>
                <span className=' underline text-xs '>{ data.link }</span>


            </div>

            {/* Right */ }
            <div className=' flex flex-col justify-between items-end'>
                <div className='flex items-center text-sm text-green-500'>
                    <KeyboardArrowUpOutlinedIcon />
                    { difference }%
                </div>
                <div className="mb-1">  { data.icon }</div>

            </div>
        </div>
    )
}

export default Widget
