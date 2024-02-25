import React from 'react';
import TableData from './TableData';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params) => (
            <img src={ params.row.image } alt="Avatar" className="h-8 w-8 rounded-full" />
        )
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: (params) => (
            <span
                className={ `px-2 py-1 rounded ${ params.row.status === 'active'
                    ? 'text-green-500 bg-green-100'
                    : 'text-red-500 bg-red-100'
                    }` }
            >
                { params.row.status }
            </span>
        )
    },


];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon@example.com', status: 'active', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei@example.com', status: 'inactive', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei@example.com', status: 'inactive', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei@example.com', status: 'inactive', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

];


const UserData = () =>
{
    return (
        <div>
            <h2 className='text-xl font-bold p-3 m-2'>Data Table</h2>
            <TableData columns={ columns } rows={ rows } />
        </div>
    );
};

export default UserData;
