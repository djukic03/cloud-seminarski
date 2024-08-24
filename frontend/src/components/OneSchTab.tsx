import React from 'react'
import { Col } from 'react-bootstrap'
import { SchTab } from '../models/schtab'

interface OneSchTabProps {
    tab: SchTab;
}

const OneSchTab: React.FC<OneSchTabProps> = ({tab}) => {
  return (
    <Col className="single-box">
        <div className="single-caption text-center">
            <div className="caption">
                <span>{tab.time}</span>
                <h3>{tab.title}</h3>
                <p><span>by</span> {tab.coach}</p>
            </div>
        </div>
    </Col>
  )
}

export default OneSchTab