import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
   const chartData = useLoaderData();
   console.log(chartData);
   return (
      <div>
         <div>
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
      </div>
   );
};

export default PagesToRead;
