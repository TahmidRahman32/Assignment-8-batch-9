import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Nav from "../../Sheard/Nav";
import { useLoaderData } from "react-router-dom";

const Chart = () => {
   const chartData = useLoaderData();
   console.log(chartData);
   
 

   return (
      <div>
         <Nav></Nav>
         <div className="flex justify-center">
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>

            <BarChart width={800} height={500} data={chartData}>
               <Tooltip />
               <YAxis></YAxis>
               <XAxis></XAxis>
              
               <Bar dataKey="totalPages" fill="#82ca9d"></Bar>
            </BarChart>
         </div>
      </div>
   );
};

export default Chart;
