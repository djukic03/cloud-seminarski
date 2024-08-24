import React from 'react';
import { Tab, Nav, Row } from 'react-bootstrap';
import OneSchTab from './OneSchTab';
import { SchTab } from '../models/schtab';

interface ScheduleProps {
    title: string;
    tabs: SchTab[];
}

const Schedule: React.FC<ScheduleProps> = ({title, tabs}) => {
  return (
    <section className="date-tabs" style={{padding: '5%'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="section-tittle text-center mb-100">
                        <span>WORKOUT PLAN</span>
                        <h2>PREVIEW OF OUR {title} WORKOUT PROGRAM</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-10">
                <div className="col-lg-11">
                    <div className="properties__button">
                        <Tab.Container defaultActiveKey="monday">
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="monday">Monday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tuesday">Tuesday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="wednesday">Wednesday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="thursday">Thursday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="friday">Friday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="saturday">Saturday</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sunday">Sunday</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="monday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[1]}></OneSchTab>
                                        <OneSchTab tab={tabs[2]}></OneSchTab>
                                        <OneSchTab tab={tabs[3]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tuesday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[1]}></OneSchTab>
                                        <OneSchTab tab={tabs[2]}></OneSchTab>
                                        <OneSchTab tab={tabs[5]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="wednesday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[0]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thursday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[1]}></OneSchTab>
                                        <OneSchTab tab={tabs[2]}></OneSchTab>
                                        <OneSchTab tab={tabs[4]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="friday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[1]}></OneSchTab>
                                        <OneSchTab tab={tabs[2]}></OneSchTab>
                                        <OneSchTab tab={tabs[5]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="saturday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[1]}></OneSchTab>
                                        <OneSchTab tab={tabs[2]}></OneSchTab>
                                        <OneSchTab tab={tabs[3]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sunday">
                                    <Row className="tab-wrapper">
                                        <OneSchTab tab={tabs[0]}></OneSchTab>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Schedule;
