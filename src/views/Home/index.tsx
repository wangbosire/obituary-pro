import React from "react";
import { Col, Row } from "antd";
import IndicatorCard from "./IndicatorCard";
import FunctionalNavigation from "./FunctionalNavigation";
import Backlog from "./Backlog";
import PeopleCounting from "./PeopleCounting";
import PeopleCountingClassify from "./PeopleCountingClassify";

const HomePage: React.FC = () => {
  return (
    <div>
      <IndicatorCard/>
      <Row style={{ marginTop: 20 }}>
        <Col span={16}>
          <FunctionalNavigation/>
        </Col>
        <Col span={8} style={{ paddingLeft: 20 }}>
          <Backlog/>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={16}>
          <PeopleCounting/>
        </Col>
        <Col span={8} style={{ paddingLeft: 20 }}>
          <PeopleCountingClassify/>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
