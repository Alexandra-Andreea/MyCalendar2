import React from 'react';
import './DashboardStyle.scss';
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';

const TaskChart = () => {
    const chartData = [
        {name: 'In progress', value: 10},
        {name: 'Completed', value: 5},
    ]

    const COLORS = ['#0088FE', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{ width: '50%', height: 300, marginLeft: '5%', marginRight: '4%', backgroundColor:'#d4f2c7'}} className='div-chart'>
            <h4 className='chart-text' style={{marginTop: '4%'}}>
                Your tasks summary
            </h4>
            <ResponsiveContainer>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={chartData}
                        cx={250}
                        cy={120}
                        outerRadius={80}
                        fill='#5161ce'
                        label={renderCustomizedLabel}
                        labelLine={false}
                    />
                        {
                            chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TaskChart;
