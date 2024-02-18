import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () =>
{
    const data = [
        { name: "Jan", uv: 1200 },
        { name: "Feb", uv: 1548 },
        { name: "March", uv: 1398 },
        { name: "April", uv: 9800 },
        { name: "May", uv: 3908 },
        { name: "June", uv: 4800 },
        { name: "July", uv: 3800 },
        { name: "Aug", uv: 4300 },
        { name: "Sep", uv: 2400 },
        { name: "Oct", uv: 1398 },
        { name: "Nov", uv: 9800 },
        { name: "Dec", uv: 3908 }
    ];

    return (
        <div className='flex-1 rounded-md h-full  shadow-md p-2'>
            <h4 className='font-bold text-slate-500'>A Revenue of Last 12 months</h4>
            <ResponsiveContainer width="100%" height={ 200 }>
                <AreaChart
                    width={ 500 }
                    height={ 200 }
                    data={ data }
                    syncId="anyId"
                    margin={ {
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    } }
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#00b4d8" fill="#00b4d8" />
                </AreaChart>
            </ResponsiveContainer>



        </div>
    );
};

export default Chart;
