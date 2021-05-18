import React from "react";
import {Card, Col, Row} from "antd";

interface PurchasesListProps {
    purchasesList: Array<{
        name: string;
        description: string;
        createdAt: string;
    }>;
}

export const PurchasesList = (props: PurchasesListProps) => {
    const rows = [];
    for (let i = 0; i <= props.purchasesList.length / 3; i++) {
        const cols = [];
        for (let j = 0; j < 3 && (i * 3) + j < props.purchasesList.length; j++) {
            cols.push(
                <Col span={8} key={j}>
                    <Card title={props.purchasesList[i * 3 + j].name} bordered={false}>
                        {props.purchasesList[i * 3 + j].description}
                    </Card>
                </Col>
            );
        }
        rows.push(
            <Row gutter={16} key={i}>
                {cols}
            </Row>
        );
    }
    return <div className="site-card-wrapper">
        {rows}
    </div>
}