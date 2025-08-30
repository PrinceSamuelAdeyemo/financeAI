'use client'

import { Pie, PieChart, ResponsiveContainer, Sector, SectorProps } from 'recharts';

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F'},
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#0F8042' },
  { name: 'Group E', value: 500, fill: '#F08042' },
];

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function CategorySpendingPieChart() {
  return (
    <div className="w-full h-[40vh] lg:h-[50vh]">
        <ResponsiveContainer width="100%" height="65%">
            <PieChart width={400} height={400}>
                <Pie
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                />
            </PieChart>
        </ResponsiveContainer>

        <div>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <p className='h-2 w-2 rounded-full bg-amber-300'></p>
                    <p>Rent</p>
                </div>
                <p>#300,000</p>
            </div>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <p className='h-2 w-2 rounded-full bg-amber-300'></p>
                    <p>Rent</p>
                </div>
                <p>#300,000</p>
            </div>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <p className='h-2 w-2 rounded-full bg-amber-300'></p>
                    <p>Rent</p>
                </div>
                <p>#300,000</p>
            </div>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <p className='h-2 w-2 rounded-full bg-amber-300'></p>
                    <p>Rent</p>
                </div>
                <p>#300,000</p>
            </div>
            <div className='flex justify-between px-4'>
                <div className='flex items-center gap-2'>
                    <p className='h-2 w-2 rounded-full bg-amber-300'></p>
                    <p>Rent</p>
                </div>
                <p>#300,000</p>
            </div>
        </div>
    </div>
  );
}
