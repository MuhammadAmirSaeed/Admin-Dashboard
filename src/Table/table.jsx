import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = () =>
{

    const getStatusColor = (status) =>
    {
        switch (status)
        {
            case 'Delivered':
                return { textColor: 'text-green-800', bgColor: 'bg-green-200' };
            case 'Processing':
                return { textColor: 'text-red-800', bgColor: 'bg-red-200' };
            case 'Shipped':
                return { textColor: 'text-blue-800', bgColor: 'bg-blue-200' };
            default:
                return { textColor: 'text-gray-800', bgColor: 'bg-gray-200' };
        }
    };

    const rows = [
        {
            id: 1,
            product: "Camera",
            img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D                ",
            customer: "John Doe",
            date: "2024-02-18",
            amount: 599.99,
            method: "Credit Card",
            status: "Shipped"
        },
        {
            id: 2,
            product: "Headphones",
            img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D  ",
            customer: "Jane Smith",
            date: "2024-02-17",
            amount: 899.99,
            method: "PayPal",
            status: "Delivered"
        },
        {
            id: 3,
            product: "Laptop",
            img: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D   ",
            customer: "Michael Johnson",
            date: "2024-02-16",
            amount: 129.99,
            method: "Credit Card",
            status: "Processing"
        },
        {
            id: 4,
            product: "Smart Phone",
            img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ",
            customer: "Emily Brown",
            date: "2024-02-15",
            amount: 349.99,
            method: "PayPal",
            status: "Shipped"
        },
        {
            id: 5,
            product: "Table",
            img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhYmxlfGVufDB8fDB8fHww  ",
            customer: "David Wilson",
            date: "2024-02-14",
            amount: 499.99,
            method: "Credit Card",
            status: "Delivered"
        },
        {
            id: 6,
            product: "Smartwatch",
            img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb- 4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D  ",
            customer: "Sophia Martinez",
            date: "2024-02-13",
            amount: 199.99,
            method: "PayPal",
            status: "Processing"
        },
        {
            id: 7,
            product: "Printer",
            img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D ",
            customer: "Daniel Thompson",
            date: "2024-02-12",
            amount: 299.99,
            method: "Credit Card",
            status: "Shipped"
        },
        {
            id: 8,
            product: " Gaming Console",
            img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D",
            customer: "Olivia Garcia",
            date: "2024-02-11",
            amount: 79.99,
            method: "PayPal",
            status: "Delivered"
        },
        {
            id: 9,
            product: "Wireless Earbuds",
            img: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWxlc3MlMjBhaXJidWRzfGVufDB8fDB8fHww    ",
            customer: "Noah Hernandez",
            date: "2024-02-10",
            amount: 399.99,
            method: "Credit Card",
            status: "Processing"
        },
        {
            id: 10,
            product: "Monitor",
            img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D   ",
            customer: "Isabella Lopez",
            date: "2024-02-09",
            amount: 249.99,
            method: "PayPal",
            status: "Shipped"
        }
    ];


    return (
        <div className=' font-mono font-semibold'>
            <TableContainer component={ Paper }>
                <Table sx={ { minWidth: 650 } } aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tracking ID</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Image</TableCell>

                            <TableCell>Customer</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell>Payment Method</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows.map((row) => (
                            <TableRow key={ row.id }>
                                <TableCell component="th" scope="row">{ row.id }</TableCell>
                                <TableCell>{ row.product }</TableCell>
                                <TableCell>
                                    <div>
                                        <img src={ row.img } alt="" className='w-15 h-20 rounded-md' />
                                    </div>
                                </TableCell>

                                <TableCell>{ row.customer }</TableCell>
                                <TableCell>{ row.date }</TableCell>
                                <TableCell align="right">{ row.amount }</TableCell>
                                <TableCell>{ row.method }</TableCell>
                                <TableCell className={ ` rounded-md p-2 ${ getStatusColor(row.status).bgColor }` }>
                                    <span className={ `font-bold ${ getStatusColor(row.status).textColor }` }>{ row.status }</span>
                                </TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableComponent;
