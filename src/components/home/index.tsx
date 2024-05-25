import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";

import { handleCases } from "../../helper";
import "./home.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const comonStyle = (typography: string, size: string) => ({
  fontFamily: typography,
  fontSize: size,
});

const Body = () => {
  const context = useContext(ThemeContext);
  const { state } = context;
  const { blurValue, textCase, typography, size } = state;
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div style={{ filter: `blur(${blurValue}px)` }} className="content home">
      <Row justify={"start"} align={"middle"}>
        <Col xs={24} sm={24} md={8} lg={6} xl={8} xxl={8}>
          <img
            width={isMobile ? 200 : 400}
            height={isMobile ? 200 : 400}
            src="https://wemanity.com/img/technological-capabilities/TechCapabilities-header-desktop.svg"
            alt="Illustration graphique représentant des personnes qui développent des programmes informatique"
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={15} xl={13} xxl={14}>
          <section>
            <h1 style={comonStyle(typography, size.h1)}>
              {handleCases(textCase, "Bienvenue sur notre page !")}
            </h1>
            <article
              className="article"
              style={comonStyle(typography, size.text)}
            >
              {handleCases(
                textCase,
                "Nous sommes fiers d’être partenariat Gold pour le DevFest cette année. En tant qu'entreprise dédiée à l'innovation et à l'inclusion, Wemanity a préparé une animation spéciale sur notre stand pour cet événement incontournable"
              )}
            </article>
            <h1 style={comonStyle(typography, size.h1)}>
              {handleCases(
                textCase,
                "Découvrez notre Animation sur l'Accessibilité"
              )}
            </h1>
            <article
              className="article"
              style={comonStyle(typography, size.text)}
            >
              {handleCases(
                textCase,
                "L'accessibilité numérique est au cœur de nos préoccupations. Pour cette occasion, nous avons conçu une démonstration interactive visant à illustrer l'importance d'une conception web accessible. Venez découvrir par vous-même les différences entre une page web accessible et une page qui ne l'est pas"
              )}
            </article>
            <h3 style={comonStyle(typography, size.h3)}>
              {handleCases(textCase, "Qu'allez-vous apprendre ?")}
            </h3>
            <ul>
              <li style={comonStyle(typography, size.text)}>
                {handleCases(
                  textCase,
                  "Les principes de base de l'accessibilité numérique"
                )}
              </li>
              <li style={comonStyle(typography, size.text)}>
                {handleCases(
                  textCase,
                  "Les bonnes pratiques pour rendre une page web utilisable par tous, y compris les personnes en situation de handicap"
                )}
              </li>
              <li style={comonStyle(typography, size.text)}>
                {handleCases(
                  textCase,
                  "L'impact positif qu'une page web accessible peut avoir sur l'expérience utilisateur"
                )}
              </li>
            </ul>
            <h1 style={comonStyle(typography, size.h1)}>
              {handleCases(textCase, "Pourquoi est-ce important ?")}
            </h1>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(
                textCase,
                "Une page web accessible ne bénéficie pas seulement aux utilisateurs ayant des besoins spécifiques, mais améliore aussi l'expérience de tous les visiteurs. Nous vous montrerons comment des ajustements simples peuvent faire une grande différence."
              )}
            </p>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(
                textCase,
                "Nous vous invitons à visiter notre stand pour en savoir plus et participer à cette expérience éducative et enrichissante. Ensemble, construisons un web plus inclusif et accessible pour tous."
              )}
            </p>
          </section>
        </Col>
      </Row>
      <Row justify={"start"} align={"middle"}>
        <Col xs={24} sm={24} md={8} lg={6} xl={8} xxl={8}>
          <iframe
            allowFullScreen
            height={isMobile ? 300 : 400}
            width={isMobile ? 300 : 400}
            src="https://www.youtube.com/embed/gOcsgyZXQlE"
            title="La Table ronde Décathlon x Wemanity "
          ></iframe>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={13} xxl={14}>
          <section>
            <h1 style={comonStyle(typography, size.h1)}>
              {handleCases(textCase, "La Table ronde Décathlon x Wemanity ")}
            </h1>
            <h3 className="article" style={comonStyle(typography, size.h3)}>
              {handleCases(
                textCase,
                "Plongez au cœur de notre récente table ronde sur le Product Marketing Management à Lille !"
              )}
            </h3>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(
                textCase,
                "Nous avons pu vivre une journée exceptionnelle au Nù Lille, réunissant des esprits brillants autour du Product Marketing Management."
              )}
            </p>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(
                textCase,
                "Marion Joffre, Group Product Marketing Manager chez Decathlon, a captivée l'audience en partageant son expertise et son expérience sur le Product Marketing Management chez Decathlon Digital, tout en offrant un aperçu exclusif de sa collaboration fructueuse avec Wemanity."
              )}
            </p>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(textCase, "Au programme de cette table ronde :")}
            </p>
            <ul>
              <li className="article" style={comonStyle(typography, size.text)}>
                {handleCases(
                  textCase,
                  "Des discussions stimulantes sur le déploiement du Product Marketing Management chez Decathlon, les résultats concrets, l’importance du PMM, la mise en place du PMM dans les organisations et les retours de Marion sur sa collaboration avec Wemanity."
                )}
              </li>
              <li className="article" style={comonStyle(typography, size.text)}>
                {handleCases(
                  textCase,
                  "Le déjeuner, ponctuant notre table ronde, a offert l'occasion idéale de prolonger les échanges dans une atmosphère conviviale, renforçant les liens et créant des opportunités de synergies futures."
                )}
              </li>
            </ul>
            <p className="article" style={comonStyle(typography, size.text)}>
              {handleCases(
                textCase,
                "Nous souhaitons remercier tous les participants pour avoir fait de cette table ronde un événement exceptionnel."
              )}
            </p>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Body;
