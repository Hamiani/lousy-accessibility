/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from "react";
import { Card, Col, Row } from "antd";

import {
  createDynamicObject,
  decreaseBrightness,
  handleCases,
} from "../../helper";
import { ThemeContext } from "../../context";

import "./services.css";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const commonStyle = (
    textColor: string,
    size: string,
    typography: string
  ) => ({
    color: textColor,
    fontSize: size,
    fontFamily: typography,
  });
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const context = useContext(ThemeContext);
  const [hover, setHovered] = useState(createDynamicObject());

  const { state } = context;
  const { blurValue, textCase, typography, size, textColor, background } =
    state;

  const cardStyle = (id: number) => ({
    backgroundColor: hover[id]
      ? decreaseBrightness(background, 10)
      : background,
    borderColor: hover[id] ? decreaseBrightness(background, 10) : background,
    boxShadow: `8px 5px 5px ${decreaseBrightness(background, 10)}`,
  });

  const onMouseEnter = (id: number) => setHovered(createDynamicObject(id));
  const onMouseLeave = () => setHovered(createDynamicObject());
  return (
    <div
      className="content services"
      style={{ filter: `blur(${blurValue}px)` }}
    >
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <h1
            style={{
              ...commonStyle(textColor, size.h1, typography),
              textAlign: "center",
            }}
          >
            {handleCases(textCase, "Nos Offres")}
          </h1>
          <p
            style={{
              ...commonStyle(textColor, size.text, typography),
              textAlign: "justify",
            }}
          >
            {handleCases(
              textCase,
              `Dans un contexte de changement permanent, nous vous aidons à vous
        adapter et à maximiser la valeur apportée à vos clients. Véritables
        artisans de la transformation, nous vous aidons à tous les niveaux de
        l’entreprise à faire de la coopération, de l’innovation et de l’agilité
        vos armes de demain.`
            )}
          </p>
          <h3 style={{ ...commonStyle(textColor, size.h3, typography) }}>
            {handleCases(
              textCase,
              `découvrez nos expertises clés pour mener votre transformation de bout en bout`
            )}
          </h3>
          <p
            style={{
              ...commonStyle(textColor, size.text, typography),
              textAlign: "justify",
            }}
          >
            {handleCases(
              textCase,
              ` Wemanity est un écosystème d’innovation, spécialiste de la
        transformation des organisations.`
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
              `Notre mission ? Défiez les limites de la performance ! Accélérer votre
        progression de manière durable et créer de la valeur pour vos clients.`
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
              `Nous vous accompagnons à chaque étape de votre chaîne de valeur et à
        différents niveaux de votre organisation : ExCo, management et équipes.`
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
              `Pour ce faire, nous rassemblons des expertises complémentaires au sein
        d’une même équipe, coopérant efficacement grâce à une culture, des
        outils et des méthodes partagés.`
            )}
          </p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
          <img
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 500}
            src="https://wemanity.com/img/activities/illustration-header-our-activities.svg"
          />
        </Col>
      </Row>
      <Row justify={"space-between"} gutter={[48, 16]} align={"middle"}>
        {services.map((card, index) => (
          <Col
            style={{ display: "inline-flex", alignSelf: "stretch" }}
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={8}
            xxl={8}
          >
            <Card
              hoverable
              onMouseEnter={() => onMouseEnter(index + 1)}
              onMouseLeave={() => onMouseLeave()}
              style={cardStyle(index + 1)}
              cover={<img height={150} width={150} src={card.imgSrc} />}
            >
              <h3
                style={{
                  ...commonStyle(textColor, size.h3, typography),
                  textAlign: "center",
                }}
              >
                {handleCases(textCase, card.title)}
              </h3>
              <p
                style={{
                  ...commonStyle(textColor, size.text, typography),
                  textAlign: "justify",
                }}
              >
                {handleCases(textCase, card.description)}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;

const services = [
  {
    title: `Transformation, stratégie & change`,
    description: `Cadrer et accompagner votre transformation agile grâce à des équipes pluridisciplinaires et à notre approche globale, associant des assets à une expertise inégalée en agilité.`,
    imgSrc:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-01.svg",
  },
  {
    title: `Agile IT, architecture & API`,
    description: `Faire de la technologie un puissant moteur de votre stratégie business et construire un système d’information composable, ouvert, solide et frugal.`,
    imgSrc:
      "https://wemanity.com/img/activities/how-we-can-help-you-agil-IT.svg",
  },
  {
    title: `Data & IA`,
    description: `Booster votre business à travers une utilisation stratégique et pérenne de vos données, axée sur l’approche client.`,
    imgSrc:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-04.svg",
  },
  {
    title: `Digital delivery & expérience utilisateur`,
    description: `Concevoir et délivrer des produits digitaux innovants, adaptés aux usages de vos clients grâce à nos équipes pluridisciplinaires.`,
    imgSrc:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-05.svg",
  },
  {
    title: `Centre de formation`,
    description: `Soutenir votre transformation par une expérience de formation sur-mesure pour ancrer les nouvelles compétences et les nouvelles formes de leadership.`,
    imgSrc:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-07.svg",
  },
  {
    title: `Sustainable shift`,
    description: `Les entreprises ne peuvent plus se contenter de se transformer ; elles doivent élargir leurs critères de performance afin d’innover de manière durable. Nous les accompagnons dans l’accélération de cette démarche vers la durabilité à travers l’engagement, la techforgood et l’Agile.`,
    imgSrc: "https://wemanity.com/img/activities/sustainable-shift.svg",
  },
];
