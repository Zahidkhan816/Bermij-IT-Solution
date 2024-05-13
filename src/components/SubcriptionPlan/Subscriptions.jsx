import React, { useState } from "react";
import { Button, Modal, Row, Col, Card } from "antd";
import { CheckCircleFilled, MailOutlined } from "@ant-design/icons";
import "./Subscriptions.scss"; // Include your CSS file here
const Subscriptions = () => {
    const [planType, setPlanType] = useState("initial");
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem("planspace_user_obj"));
    const subscriptionPlans = [
        {
            type: "initial",
            title: "Personal",
            description: "Perfect Plan for starter",
            amount: "Free",
            duration: "For a lifetime",
            features: ["2 Locations", "Share with 5 team members", "Sync across devices"],
        },
        {
            type: "professional",
            title: "Professional",
            description: "For users who want to do more",
            amount: "$99",
            duration: "/year",
            features: [
                "Everything in free plan",
                "10 Locations",
                "Share with 5 team members",
                "Sync across devices",
                "2 website integrations",
            ],
        },
        {
            type: "premium",
            title: "Premium",
            description: "For users who want to do more",
            amount: "$199",
            duration: "/year",
            features: [
                "Everything in free plan",
                "50 Locations",
                "Share with 50 team members",
                "Sync across devices",
                "2 website integrations",
            ],
        },
        {
            type: "enterprise",
            title: "Enterprise",
            description: "Run your entire business on us",
            amount: "Custom",
            duration: "Reach out for a quote",
            features: [
                "wkaxali@gmail.com"
            ],
        },
    ];

    return (
        <>
            {/* <div className="subscription-header">
                <div className="subscription-info">
                    <span style={{ color: "#003399" }}>
                        Hi {userInfo?.first_name} {userInfo?.last_name}, Your Saved Payment method for PlanSpace Subscription is <b>Stripe</b>
                    </span>
                </div>
                <Button type="primary"
                    onClick={() => {
                        setOpenPaymentModal(true);
                    }}
                    className="change-payment-button"
                >
                    Change Payment Method
                </Button>
            </div> */}
            <div className="notify-section">
                <Row gutter={[16, 16]}>
                    {subscriptionPlans.map((plan) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={plan.type}>
                            <Card
                                className={`subscription-plan ${planType === plan.type ? "selected" : ""}`}
                                onClick={() => setPlanType(plan.type)}
                                title={plan.title}
                            >
                                <div className="plan-description">{plan.description}</div>
                                <div className="plan-price">
                                    <span className="plan-amount">{plan.amount}</span>
                                    <p className="plan-duration">{plan.duration}</p>
                                </div>
                                {plan.type === "initial" && (
                                    <Button type="primary" shape="round" className="plan-button">
                                        Current Plan
                                    </Button>
                                )}
                                {(plan.type === "professional" || plan.type === "premium") && (
                                    <Button type="primary" shape="round" className="plan-button">
                                        Try for Free
                                    </Button>
                                )}
                                {plan.type === "enterprise" && (
                                    <a href="mailto:wkaxali@gmail.com">
                                        <Button type="primary" shape="round" className="plan-button">
                                            Contact Us
                                        </Button>
                                    </a>
                                )}
                                {/* plans features */}
                                <div className="plan-features">

                                    {plan.features.map((feature, index) => (
                                        <p key={index}>
                                            {plan.type === 'enterprise' ? (
                                                <MailOutlined className="feature-icon" />
                                            ) : (
                                                <CheckCircleFilled className="feature-icon" />
                                            )}
                                            {feature}
                                        </p>
                                    ))}
                                </div>

                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal
                    title="Change Payment Method"
                    visible={openPaymentModal}
                    onCancel={() => setOpenPaymentModal(false)}
                    footer={null}
                >
                    {/* Add your payment form JSX here */}
                </Modal>
            </div >
        </>
    );
};

export default Subscriptions;
