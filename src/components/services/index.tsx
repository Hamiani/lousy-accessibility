import { Card, Col, Row } from "antd";
import "./services.css";
import { Size } from "../../App";
import { handleCases } from "../../helper";

const Services = ({
  textColor,
  blurValue,
  typography,
  textCase,
  size,
}: {
  textColor: string;
  blurValue: number;
  textCase: string;
  typography: string;
  size: Size;
}) => {
  const commonStyle = (
    textColor: string,
    size: string,
    typography: string
  ) => ({
    color: textColor,
    fontSize: size,
    fontFamily: typography,
  });

  return (
    <div id="services" style={{ filter: `blur(${blurValue}px)` }}>
      <h1
        style={{
          ...commonStyle(textColor, size.h1, typography),
          textAlign: "center",
        }}
      >
        {handleCases(textCase, "No Offres")}
      </h1>
      <p style={commonStyle(textColor, size.text, typography)}>
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
          `DÉCOUVREZ NOS EXPERTISES CLÉS POUR MENER VOTRE TRANSFORMATION DE BOUT EN
        BOUT`
        )}
      </h3>
      <p style={commonStyle(textColor, size.text, typography)}>
        {handleCases(
          textCase,
          ` Wemanity est un écosystème d’innovation, spécialiste de la
        transformation des organisations.`
        )}
      </p>
      <p style={commonStyle(textColor, size.text, typography)}>
        {handleCases(
          textCase,
          `Notre mission ? Défiez les limites de la performance ! Accélérer votre
        progression de manière durable et créer de la valeur pour vos clients.`
        )}
      </p>
      <p style={commonStyle(textColor, size.text, typography)}>
        {handleCases(
          textCase,
          `Nous vous accompagnons à chaque étape de votre chaîne de valeur et à
        différents niveaux de votre organisation : ExCo, management et équipes.`
        )}
      </p>
      <p style={commonStyle(textColor, size.text, typography)}>
        {handleCases(
          textCase,
          `Pour ce faire, nous rassemblons des expertises complémentaires au sein
        d’une même équipe, coopérant efficacement grâce à une culture, des
        outils et des méthodes partagés.`
        )}
      </p>
      <Row
        justify={"space-between"}
        gutter={[48, 16]}
        style={{
          marginLeft: "8em",
          marginRight: "15em",
        }}
        align={"middle"}
      >
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Transformation, stratégie & change"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-01.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {handleCases(textCase, `Transformation, stratégie & change`)}
            </h1>
            <h3
              style={{
                ...commonStyle(textColor, size.h3, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(
                textCase,
                `Cadrer et accompagner votre transformation agile grâce à des
              équipes pluridisciplinaires et à notre approche globale, associant
              des assets à une expertise inégalée en agilité.`
              )}
            </h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Agile IT, architecture & API"
                src="https://wemanity.com/img/activities/how-we-can-help-you-agil-IT.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {handleCases(textCase, `Agile IT, architecture & API`)}
            </h1>
            <h3
              style={{
                ...commonStyle(textColor, size.h3, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(
                textCase,
                `Faire de la technologie un puissant moteur de votre stratégie
              business et construire un système d’information composable,
              ouvert, solide et frugal.`
              )}
            </h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-04.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {handleCases(textCase, `Data & IA`)}
            </h1>
            <h3 style={{ ...commonStyle(textColor, size.h3, typography) }}>
              {handleCases(
                textCase,
                `Booster votre business à travers une utilisation stratégique et
              pérenne de vos données, axée sur l’approche client.`
              )}
            </h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-05.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {handleCases(
                textCase,
                `Digital delivery & expérience utilisateur`
              )}
            </h1>
            <h3
              style={{
                ...commonStyle(textColor, size.h3, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(
                textCase,
                `Concevoir et délivrer des produits digitaux innovants, adaptés aux
              usages de vos clients grâce à nos équipes pluridisciplinaires.`
              )}
            </h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-07.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {" "}
              Centre de formation
            </h1>
            <h3
              style={{
                ...commonStyle(textColor, size.h3, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(
                textCase,
                `Soutenir votre transformation par une expérience de formation
              sur-mesure pour ancrer les nouvelles compétences et les nouvelles
              formes de leadership.`
              )}
            </h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/sustainable-shift.svg"
              />
            }
          >
            <h1
              style={{
                ...commonStyle(textColor, size.h1, typography),
                textAlign: "center",
              }}
            >
              {handleCases(textCase, `Sustainable shift`)}
            </h1>
            <h3
              style={{
                ...commonStyle(textColor, size.h3, typography),
                textAlign: "justify",
              }}
            >
              {handleCases(
                textCase,
                `Les entreprises ne peuvent plus se contenter de se transformer ;
              elles doivent élargir leurs critères de performance afin d’innover
              de manière durable. Nous les accompagnons dans l’accélération de
              cette démarche vers la durabilité à travers l’engagement, la
              techforgood et l’Agile.`
              )}
            </h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
