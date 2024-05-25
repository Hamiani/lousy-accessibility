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
  whiteSpace: "pre-line",
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
            alt="Illustration graphique représentant les membres d'une équipe qui analysent des données et qui résolvent des problèmes"
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
            alt="Pinte de bière bleue"
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
            alt="Poids pour la musculation bleus"
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
            alt="Signalétique bleue parking vélo"
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
            alt="Cuisinière bleue"
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
            alt="Fenêtre bleue avec un soleil"
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
            alt="Groupe de personnes assis autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_1.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <img
            className="office-picture"
            alt="Deux personnes assises autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_2.jpg"
          />
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <img
            className="office-picture"
            alt="Groupe de personnes assis autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_3.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          <img
            className="office-picture"
            alt="Groupe de personnes assis autour d'un bureau des locaux de Wemanity Lille"
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
        justify={"space-between"}
        gutter={[16, 16]}
        align={"middle"}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(1, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(1)}
          >
            <Meta
              title={
                <h3
                  style={{
                    ...commonStyle(textColor, size.h3, typography),
                  }}
                >
                  {handleCases(textCase, `quality analyst`)}
                </h3>
              }
              description={
                <p
                  style={{
                    ...commonStyle(textColor, size.text, typography),
                    textAlign: "justify",
                  }}
                >
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p
              style={{
                ...commonStyle(textColor, size.text, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(textCase, `Tech & DevOps / Lille / CDI`)}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(2, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(2)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `développeur java jee`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(textCase, `Tech & DevOps / Lille / CDI`)}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(3, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(3)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `développeur node js`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(textCase, `Tech & DevOps / Lille / CDI`)}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(4, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(4)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(
                    textCase,
                    `développeur mobile (Android et/ou IOS)`
                  )}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(textCase, `Tech & DevOps / Lille / CDI`)}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(5, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(5)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `designer ux/ui`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(textCase, `Experience design (UX/UI) / Lille / CDI`)}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(6, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(6)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `scrum master`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(
                textCase,
                `Scrum Mastering / Facilitaion / Lille/ CDI`
              )}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(7, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(7)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `product owner`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(
                textCase,
                `product management & Innovation / Lille/ CDI`
              )}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card
            hoverable
            onMouseEnter={() => onMouseEnter(8, 8)}
            onMouseLeave={() => onMouseLeave()}
            style={cardStyle(8)}
          >
            <Meta
              title={
                <h3 style={commonStyle(textColor, size.h3, typography)}>
                  {handleCases(textCase, `ingénieur devops`)}
                </h3>
              }
              description={
                <p style={commonStyle(textColor, size.text, typography)}>
                  {handleCases(textCase, `Lille, France`)}
                </p>
              }
            />
            <Divider />
            <p style={commonStyle(textColor, size.text, typography)}>
              {handleCases(textCase, `tech & DevOps/ Lille/ CDI`)}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Career;
