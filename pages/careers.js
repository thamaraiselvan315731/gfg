import { ProfileCard } from "../components/cardComponents/profilecard"
import { CompanyCard } from "../components/cardComponents/companycard"
import { UserFeed } from "../components/cardComponents/userFeed"

import { Users } from "../components/users"

import { AreaChart, ResponsiveContainer, YAxis, Area, Tooltip, CartesianGrid, XAxis } from 'recharts';


const careers = () => {
    return <>
        <div className="flex justify-between gap-4 grid-cols-2 ml-2 mr-3">
            {/* <div><ProfileCard />

                <CompanyCard /></div> */}
            {/* <div class="lg:w-3/4 xl:w-3/4 sm:w-1/2 xxl:w-3/4"><UserFeed /></div> */}
            {/* <div>03</div> */}




        </div>
        {/*  */}
    </>
}





const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]


const AreaCharts = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveContainer >
            < AreaChart width={"200px"} height={"300px"} data={data}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#de965d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#de965d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#de965d" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart ></ResponsiveContainer>
    );
};



export default careers;