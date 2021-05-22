import React from "react";
import "../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
const BaseContainer = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <LeftPanel />
        </Col>
        <Col sm={8}>
          <RightPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default BaseContainer;
