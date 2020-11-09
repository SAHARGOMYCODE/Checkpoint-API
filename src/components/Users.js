import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import imgUser from "./users.png";

const Users = ({ ListUsers }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {ListUsers.map((user, i) => (
        <Card
          style={{
            width: "18rem",
            height: "20rem",
            marginRight: "30px",
            marginBottom: "15px",
            marginTop: "30px",
            backgroundColor: "#FFF8DC",
            borderRadius: "8px",
            border: "transparent",
            boxShadow: "0 10px 10px 10px 0 rgba(0,0,0,0.2)",
          }}
        >
          <Col>
            <Image
              src={imgUser}
              roundedCircle
              style={{
                height: "150px",
                width: "150px",
                position: "relative",
                bottom: "80px",
                border: "10px solid white",
                backgroundColor: "red",
              }}
            />
          </Col>
          <Card.Body style={{ position: "relative", bottom: "80px" }}>
            <Card.Title style={{ margin: "0", color: "#505151" }}>
              {user.name}
            </Card.Title>
            <Card.Text style={{ fontSize: "small", color: "red" }}>
              {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Users;
