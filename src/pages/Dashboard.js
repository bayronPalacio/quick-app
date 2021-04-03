import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import Cookies from "js-cookie";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Divide } from "react-feather";

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
    <div className="rightSection ">
      <h1>Dashboard</h1>
      <Container className="graphStyle">
        <Row>
          <Col sm={6}>
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
          </Col>
          <Col sm={4}>
            <Chart
              height={400}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales"],
                ["2013", 1000],
                ["2014", 1170],
                ["2015", 660],
                ["2016", 1030],
              ]}
              options={{
                title: "Company Performance",
                colors: ["ff6e40"],
                backgroundColor: "#1f1f1f",
                hAxis: {
                  title: "Year",
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
          </Col>
          <Col sm={2}>
            <Card className="cardStyle">
              <Card.Body>
                <Card.Title>TODAY'S SALES</Card.Title>
                <Card.Text>CAD</Card.Text>
                <Card.Text>$2342.34</Card.Text>
              </Card.Body>
            </Card>
            <Card className="cardStyle marginCards">
              <Card.Body>
                <Card.Title>TOTAL SALES</Card.Title>
                <Card.Text>CAD</Card.Text>
                <Card.Text>$2342.34</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Chart
              height={400}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Level", "Min. Stock"],
                ["2014", 1000, 400],
                ["2015", 1170, 460],
                ["2016", 660, 1120],
                ["2017", 1030, 540],
                ["2018", 200, 300],
              ]}
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
                <ListGroup.Item className="listItem">89</ListGroup.Item>
                <ListGroup.Item className="listItem">
                  CAD $4345.2
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item className="listTitleGroup">
                INVOICES
              </ListGroup.Item>
              <ListGroup horizontal>
                <ListGroup.Item className="listTitle">
                  Total Orders
                </ListGroup.Item>
                <ListGroup.Item className="listTitle">
                  Avg. Total
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroup.Item className="listItem">89</ListGroup.Item>
                <ListGroup.Item className="listItem">
                  CAD $4345.2
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
