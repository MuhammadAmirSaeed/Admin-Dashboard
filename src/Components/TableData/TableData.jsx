import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TableData = ({ columns, rows }) =>
{

    // Function to handle view button click
    const handleViewClick = (id) =>
    {
        // Implement view action here
        console.log(`View item with ID ${ id }`);
    };

    // Function to handle delete button click
    const handleDeleteClick = (id) =>
    {
        // Implement delete action here
        console.log(`Delete item with ID ${ id }`);
    };

    // Define columns including view and delete actions
    const columnsWithActions = [
        ...columns, // Keep existing columns
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div className="flex justify-around">
                    <button onClick={ () => handleViewClick(params.row.id) } className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">View</button>
                    <button onClick={ () => handleDeleteClick(params.row.id) } className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div style={ { height: 400, width: '100%', marginTop: '1rem' } }>
                <DataGrid className='h-full w-full'
                    rows={ rows }
                    columns={ columnsWithActions } // Use columns with actions
                    initialState={ {
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    } }
                    pageSizeOptions={ [5, 10] }
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default TableData;
