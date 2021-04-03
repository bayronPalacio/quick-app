import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(async () => {
    const arrayProducts = [];
    try {
      const response = await axios.get("/popularProds", {
        params: Cookies.get("Company"),
      });
      arrayProducts.push(["name", "Qty"]);
      response.data.map((item, index) => {
        arrayProducts.push([item.values[0].name, item.values[0].count]);
      });
      setListProducts(arrayProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="rightSection">
      <h1>Dashboard</h1>

      <div style={{ display: "flex", maxWidth: 900 }}>
        <Chart
          width={500}
          height={400}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={listProducts}
          options={{
            title: "Trending Products",
            chartArea: { width: "50%" },
            hAxis: {
              title: "Product Name",
              minValue: 0,
            },
            vAxis: {
              title: "Qty",
            },
          }}
          legendToggle
        />
        <Chart
          width={400}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses"],
            ["2013", 1000, 400],
            ["2014", 1170, 460],
            ["2015", 660, 1120],
            ["2016", 1030, 540],
          ]}
          options={{
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "50%", height: "70%" },
            // lineWidth: 25
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Chart
          width={400}
          height={"300px"}
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
            ["CAN", 80.66, 1.67, "North America", 33739900],
            ["DEU", 79.84, 1.36, "Europe", 81902307],
            ["DNK", 78.6, 1.84, "Europe", 5523095],
            ["EGY", 72.73, 2.78, "Middle East", 79716203],
            ["GBR", 80.05, 2, "Europe", 61801570],
            ["IRN", 72.49, 1.7, "Middle East", 73137148],
            ["IRQ", 68.09, 4.77, "Middle East", 31090763],
            ["ISR", 81.55, 2.96, "Middle East", 7485600],
            ["RUS", 68.6, 1.54, "Europe", 141850000],
            ["USA", 78.09, 2.05, "North America", 307007000],
          ]}
          options={{
            title:
              "Correlation between life expectancy, fertility rate " +
              "and population of some world countries (2010)",
            hAxis: { title: "Life Expectancy" },
            vAxis: { title: "Fertility Rate" },
            bubble: { textStyle: { fontSize: 11 } },
          }}
        />
        <Chart
          width={400}
          height={300}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "number", label: "x" },
              { type: "number", label: "values" },
              { id: "i0", type: "number", role: "interval" },
              { id: "i1", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
            ],
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110],
          ]}
          options={{
            intervals: { style: "sticks" },
            legend: "none",
          }}
        />
      </div>
    </div>
  );

  // return (
  // <Router>
  //     <Sidebar />
  //     <Switch>
  //         <Route path='/inventory' component={Inventory} />
  //         <Route path='/addProduct' component={AddProduct} />
  //         <Route path='/orders' component={Orders} />
  //     </Switch>
  // </Router>
  // );
};

export default Dashboard;

{
  /* <Chart
width={"500px"}
height={"300px"}
chartType="Bar"
loader={<div>Loading Chart</div>}
data={[
  ["Name", "Products"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
]}
options={{
  // Material design options
  chart: {
    title: "Trending Products",
    subtitle: "Most popular products sold",
  },
}}
// For tests
rootProps={{ "data-testid": "2" }}
/> */
}
