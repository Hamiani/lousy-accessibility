/* eslint-disable jsx-a11y/alt-text */
import { Card, Col, Divider, Row } from "antd";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import {
  createDynamicObject,
  decreaseBrightness,
  handleCases,
} from "../../helper";
import { useMediaQuery } from "react-responsive";

import "./career.css";
import Meta from "antd/es/card/Meta";
const commonStyle = (textColor: string, size: string, typography: string) => ({
  color: textColor,
  fontSize: size,
  fontFamily: typography,
});

const Career = () => {
  const context = useContext(ThemeContext);
  const { state } = context;
  const { blurValue, textCase, typography, size, textColor, background } =
    state;
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [hover, setHovered] = useState(createDynamicObject(undefined, 8));
  const cardStyle = (id: number) => ({
    backgroundColor: hover[id]
      ? decreaseBrightness(background, 10)
      : background,
    borderColor: hover[id] ? decreaseBrightness(background, 10) : background,
    boxShadow: `8px 5px 5px ${decreaseBrightness(background, 10)}`,
  });

  const onMouseEnter = (id: number, length?: number) =>
    setHovered(createDynamicObject(id, length));
  const onMouseLeave = () => setHovered(createDynamicObject());
  return (
    <div className="content career" style={{ filter: `blur(${blurValue}px)` }}>
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={10} lg={10} xl={8} xxl={8}>
          <h1 style={commonStyle(textColor, size.h1, typography)}>
            {handleCases(textCase, `lille`)}
          </h1>
          <p
            style={{
              ...commonStyle(textColor, size.text, typography),
              textAlign: "justify",
            }}
          >
            {handleCases(
              textCase,
              `Surnommée la capitale des Flandres, où se côtoient intempéries et
            amateurs de bières, on ne présente plus Lille ! Notre équipe
            lilloise, jeune et motivée, est basée à la Madeleine à 5 minutes du
            centre ville.`
            )}
          </p>
          <p
            style={{
              ...commonStyle(textColor, size.text, typography),
              textAlign: "justify",
            }}
          >
            {handleCases(
              textCase,
              ` Nous sommes situés au 1er étage d’un immeuble. Vous y trouverez un
            open-space et une cuisine partagée dont vous pouvez profiter.`
            )}
          </p>
        </Col>

        <Col xs={24} sm={24} md={14} lg={12} xl={10} xxl={12}>
          <img
            width={isMobile ? 400 : 700}
            height={isMobile ? 400 : 500}
            src="https://careers.wemanity.com/img/offices/header-office-lille.svg"
          />
        </Col>
      </Row>
      <h2
        style={{
          ...commonStyle(textColor, size.h2, typography),
          textAlign: "center",
        }}
      >
        {handleCases(textCase, `Les à-côtés sympas de nos locaux`)}
      </h2>
      <Row justify={"space-between"} className="pt-2">
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-afterwork.svg"
          />
          <p style={commonStyle(textColor, size.text, typography)}>
            {handleCases(textCase, `Afterwork bi-mensuel`)}
          </p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-sport.svg"
          />
          <p style={commonStyle(textColor, size.text, typography)}>
            {handleCases(textCase, `Salle de sport dans le bâtiment`)}
          </p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-bike-parking.svg"
          />
          <p style={commonStyle(textColor, size.text, typography)}>
            {handleCases(textCase, `Parking à vélo`)}
          </p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-kitchen.svg"
          />
          <p style={commonStyle(textColor, size.text, typography)}>
            {handleCases(textCase, `Cuisine partagée`)}
          </p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-luminous.svg"
          />
          <p style={commonStyle(textColor, size.text, typography)}>
            {handleCases(textCase, `Bureau lumineux`)}
          </p>
        </Col>
      </Row>
      <Row className="pt-2" justify={"space-between"} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
          <img
            className="office-picture"
            src="https://careers.wemanity.com/img/offices/bureau_lille_1.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <img
            className="office-picture"
            src="https://careers.wemanity.com/img/offices/bureau_lille_2.jpg"
          />
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <img
            className="office-picture"
            src="https://careers.wemanity.com/img/offices/bureau_lille_3.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          <img
            className="office-picture"
            src="https://careers.wemanity.com/img/offices/bureau_lille_4.jpg"
          />
        </Col>
      </Row>
      <h1
        className="pt-2"
        style={{
          ...commonStyle(textColor, size.h1, typography),
          textAlign: "center",
        }}
      >
        {handleCases(textCase, `offres d'emploi à lille`)}
      </h1>

      <Row
        className="pt-2"
        justify="space-between"
        gutter={[16, 16]}
        align="middle"
      >
        {jobOffers.map((job, index) => (
          <Col
            key={`job-${index}`}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
            style={{
              display: "inline-flex",
              alignSelf: "stretch",
            }}
          >
            <Card
              hoverable
              onMouseEnter={() => onMouseEnter(index + 1)}
              onMouseLeave={() => onMouseLeave()}
              style={cardStyle(index + 1)}
            >
              <Meta
                title={
                  <h3
                    style={{
                      ...commonStyle(textColor, size.h3, typography),
                      whiteSpace: "normal",
                    }}
                  >
                    {job.title.toUpperCase()}
                  </h3>
                }
                description={<p>{job.location}</p>}
              />
              <Divider />
              <p
                style={{
                  ...commonStyle(textColor, size.text, typography),
                  textAlign: "justify",
                }}
              >
                {job.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
const jobOffers = [
  {
    title: "quality analyst",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
  },
  {
    title: "développeur java jee",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
  },
  {
    title: "développeur node js",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
  },
  {
    title: "développeur mobile (Android et/ou IOS)",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
  },
  {
    title: "designer ux/ui",
    location: "Lille, France",
    description: "Experience Design (UX/UI) / Lille / CDI",
  },
  {
    title: "scrum master",
    location: "Lille, France",
    description: "Scrum Mastering / Facilitation / Lille/ CDI",
  },
  {
    title: "product owner",
    location: "Lille, France",
    description: "Product Management & Innovation / Lille/ CDI",
  },
  {
    title: "ingénieur devops",
    location: "Lille, France",
    description: "Tech & DevOps/ Lille/ CDI",
  },
];

export default Career;
