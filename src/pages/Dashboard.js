import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import Cookies from "js-cookie";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Divide } from "react-feather";
import { format } from "date-fns";

const Dashboard = () => {
  const [listProducts, setListProducts] = useState([]);
  const [saleByDate, setSalesByDate] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [salesToday, setSalesToday] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalInvoices, setTotalInvoices] = useState(0);
  const [avgOrders, setAvgOrders] = useState(0);
  const [avgInvoices, setAvgInvoices] = useState(0);
  const [productStock, setProductsStock] = useState([]);

  useEffect(async () => {
    const arrayProducts = [];
    const arrayProdStock = [];
    const arraySales = [];

    try {
      let response = await axios.get("/popularProds", {
        params: Cookies.get("Company"),
      });
      arrayProducts.push(["name", "Qty"]);
      arrayProdStock.push(["name", "level", "min-stock"]);
      response.data.map(async (item) => {
        arrayProducts.push([item.values[0].name, item.values[0].count]);

        response = await axios.get("/productInfo", {
          params: [Cookies.get("Company"), item.values[0].name],
        });

        arrayProdStock.push([
          response.data.data.name,
          response.data.data.quantity,
          response.data.data.minStock,
        ]);
      });
      setListProducts(arrayProducts);
      setProductsStock(arrayProdStock);

      response = await axios.get("/totalSales", {
        params: Cookies.get("Company"),
      });
      setTotalSales(response.data[0].total);

      response = await axios.get("/salesByDate", {
        params: Cookies.get("Company"),
      });
      arraySales.push(["Date", "Sales"]);
      response.data.map((item) => {
        arraySales.push([item._id, item.total]);
      });
      setSalesByDate(arraySales);

      arraySales[arraySales.length - 1][0] === format(new Date(), "yyyy-MM-dd")
        ? setSalesToday(arraySales[arraySales.length - 1][1])
        : setSalesToday(0);

      response = await axios.get("/totalOrders", {
        params: Cookies.get("Company"),
      });
      setTotalOrders(response.data.totalOrders);

      response = await axios.get("/totalInvoices", {
        params: Cookies.get("Company"),
      });
      setTotalInvoices(response.data.totalInvoices);

      response = await axios.get("/avgOrders", {
        params: Cookies.get("Company"),
      });
      setAvgOrders(response.data[0].avg.toFixed(2));

      response = await axios.get("/avgInvoices", {
        params: Cookies.get("Company"),
      });
      setAvgInvoices(response.data[0].avg.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="rightSection ">
      <h1>Dashboard</h1>
      <Container className="graphStyle">
        <Row>
          <Col sm={6}>
            {listProducts.length > 1 ? (
              <Chart
                height={400}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={listProducts}
                options={{
                  title: "5 TOP SELLING PRODUCTS",
                  chartArea: { width: "60%", height: "70%" },
                  colors: ["ff6e40"],
                  backgroundColor: "#1f1f1f",
                  hAxis: {
                    title: "Qty",
                    minValue: 0,
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  vAxis: {
                    title: "Product Name",
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  titleTextStyle: {
                    color: "white",
                  },
                  legend: "none",
                }}
              />
            ) : (
              <h1>There is not data to show</h1>
            )}
          </Col>
          <Col sm={4}>
            {saleByDate > 0 ? (
              <Chart
                height={400}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={saleByDate}
                options={{
                  title: "Company Performance",
                  colors: ["ff6e40"],
                  backgroundColor: "#1f1f1f",
                  hAxis: {
                    title: "Date",
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  vAxis: {
                    title: "CAD",
                    minValue: 0,
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  chartArea: { width: "80%", height: "70%" },
                  titleTextStyle: {
                    color: "white",
                  },
                  legend: "none",
                }}
              />
            ) : (
              <h1>There is not data to show</h1>
            )}
          </Col>
          <Col sm={2}>
            <Card className="cardStyle">
              <Card.Body>
                <Card.Title>TODAY'S SALES</Card.Title>
                <Card.Text>CAD</Card.Text>
                <Card.Text>${salesToday}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardStyle marginCards">
              <Card.Body>
                <Card.Title>TOTAL SALES</Card.Title>
                <Card.Text>CAD</Card.Text>
                <Card.Text>${totalSales}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {productStock > 1 ? (
              <Chart
                height={400}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={productStock}
                options={{
                  title: "5 TOP STOCK LEVEL PRODUCTS",
                  chartArea: { width: "60%", height: "70%" },
                  colors: ["green", "red"],
                  backgroundColor: "#1f1f1f",
                  hAxis: {
                    title: "Qty",
                    minValue: 0,
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  vAxis: {
                    title: "Product Name",
                    textStyle: {
                      color: "white",
                    },
                    titleTextStyle: { color: "white" },
                  },
                  titleTextStyle: {
                    color: "white",
                  },
                  legend: {
                    textStyle: {
                      color: "white",
                    },
                  },
                }}
              />
            ) : (
              <h1>There is not data to show</h1>
            )}
          </Col>
          <Col sm={6}>
            <ListGroup className="list" variant="flush">
              <ListGroup.Item className="listTitleGroup">ORDERS</ListGroup.Item>
              <ListGroup horizontal>
                <ListGroup.Item className="listTitle">
                  Total Orders
                </ListGroup.Item>
                <ListGroup.Item className="listTitle">
                  Avg. Total
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroup.Item className="listItem">
                  {totalOrders}
                </ListGroup.Item>
                <ListGroup.Item className="listItem">
                  CAD ${avgOrders}
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item className="listTitleGroup">
                INVOICES
              </ListGroup.Item>
              <ListGroup horizontal>
                <ListGroup.Item className="listTitle">
                  Total Invoices
                </ListGroup.Item>
                <ListGroup.Item className="listTitle">
                  Avg. Total
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroup.Item className="listItem">
                  {totalInvoices}
                </ListGroup.Item>
                <ListGroup.Item className="listItem">
                  CAD ${avgInvoices}
                </ListGroup.Item>
              </ListGroup>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
