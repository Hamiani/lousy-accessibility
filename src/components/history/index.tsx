import { Col, Row, Steps } from "antd";
import { CiCircleCheck } from "react-icons/ci";

import "./history.css";
import { handleCases } from "../../helper";
import { ThemeContext } from "../../context";
import { useContext } from "react";
const History = () => {
  const commonStyle = (
    textColor: string,
    size: string,
    typography: string
  ) => ({
    color: textColor,
    fontSize: size,
    fontFamily: typography,
  });
  const context = useContext(ThemeContext);
  const { state } = context;
  const { blurValue, textCase, typography, size, textColor } = state;
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={24} lg={18} xl={20} xxl={20}>
        <div
          id="history"
          className="content history"
          style={{ filter: `blur(${blurValue}px)` }}
        >
          <h1
            style={{
              ...commonStyle(textColor, size.h1, typography),
              textAlign: "center",
            }}
          >
            {handleCases(textCase, "Notre Histoire")}
          </h1>
          <Steps
            direction="vertical"
            responsive
            size="default"
            items={[
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(textCase, "Fondation de Wemanity")}
                  </h3>
                ),
                status: "process",
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Jean-Christophe Conticello crée Wemanity à Paris autour d’une
                  ambition forte : changer le monde du travail pour le rendre
                  plus harmonieux,responsable et durable.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        ` Lancement de notre activité Transformation agile des
                    organisations`
                      )}
                    </h3>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Création en quelques années de la plus grande communauté Agile
                    d’Europe.`
                      )}
                    </p>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      {" "}
                      2013
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(
                      textCase,
                      `Lancement de nos activités Tech et de nos dispositifs de squads
                techniques`
                    )}
                  </h3>
                ),
                status: "process",
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Nous adressons le scope historique de l’agilité, la DSI, et
                  impactons réellement le delivery.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        `Ouverture de nos bureaux à Bruxelles, Belgique`
                      )}
                    </h3>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2014
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    Ouverture de nos bureaux aux Pays-Bas
                  </h3>
                ),
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      Avec Arie van Bennekum, co-auteur du manifeste agile et
                      thought leader du groupe.
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      Lancement de notre activité Expérience Utilisateur et
                      Digital Delivery sous la marque Wemanity Digital
                    </h3>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      Objectif : concevoir des produits et services digitaux
                      innovants.
                    </p>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2016
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(
                      textCase,
                      `Lancement de notre programme RSE Weimpact`
                    )}
                  </h3>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2017
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(
                      textCase,
                      `Lancement de notre activité Data sous la marque Wewyse`
                    )}
                  </h3>
                ),
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Un des piliers clés pour développer une organisation centrée
                  client.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        `Lancement de notre Learning Center sous la marque Wemanity
                  Learning Center`
                      )}
                    </h3>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Objectif : accompagner et former le capital humain des
                  organisations.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        `Ouverture de nos bureaux au Maroc`
                      )}
                    </h3>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        ` Ouverture de nos bureaux à Lille, France`
                      )}
                    </h3>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2019
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(textCase, `Intégration de Management 3.0`)}
                  </h3>
                ),
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Wemanity devient majoritaire dans la société Management 3.0
                  développée depuis 2018 avec Jurgen Appelo qui apporte des
                  assets précieux pour aider le management à se
                  transformer.iliers clés pour développer une organisation
                  centrée client.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        `Lancement de nos premières transformations en Asie et en
                  Amérique avec Arie van Bennekum`
                      )}
                    </h3>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2019
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(textCase, ` Acquisition de DigitalScaler`)}
                  </h3>
                ),
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Société flamande spécialiste de la transformation agile et
                  digitale, créée par Sonja Noben.`
                      )}
                    </p>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2020
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(
                      textCase,
                      `Ouverture de nos bureaux à Anvers, Belgique`
                    )}
                  </h3>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2021
                    </span>
                  </>
                ),
              },
              {
                title: (
                  <h3 style={commonStyle(textColor, size.h3, typography)}>
                    {handleCases(
                      textCase,
                      ` Wemanity rejoint Reply et son réseau d’entreprises`
                    )}
                  </h3>
                ),
                description: (
                  <>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `Reply est un groupe italien fonctionnant en réseau, composé
                  d’entreprises et de startups spécialisées dans l’innovation
                  technologique, le design et l'implémentation de solutions
                  digitales.`
                      )}
                    </p>
                    <h3 style={commonStyle(textColor, size.h3, typography)}>
                      {handleCases(
                        textCase,
                        `Wemanity France devient membre de la French Tech Corporate
                  Community`
                      )}
                    </h3>
                    <p style={commonStyle(textColor, size.text, typography)}>
                      {handleCases(
                        textCase,
                        `La French Tech Corporate Community est l’un des 120 grands
                  groupes français et européens qui œuvrent sur neuf grandes
                  thématiques clés pour la compétitivité de l'économie
                  française.`
                      )}
                    </p>
                  </>
                ),
                icon: (
                  <>
                    <CiCircleCheck size={60} color={textColor} />
                    <span style={commonStyle(textColor, size.text, typography)}>
                      2022
                    </span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Col>
    </Row>
  );
};

export default History;
