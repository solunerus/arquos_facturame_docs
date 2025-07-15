import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fácil de usar",
    Svg: require("@site/static/img/undraw_mountain.svg").default,
    description: (
      <>
        Arquos Facturame es un sistema de facturación electrónica fácil de usar,
        diseñado para que puedas generar tus facturas de manera rápida y
        eficiente.
      </>
    ),
  },
  {
    title: "Focalizado",
    Svg: require("@site/static/img/undraw_tree.svg").default,
    description: (
      <>
        Arquos Facturame está enfocado en la facturación electrónica, lo que
        significa que todas sus funcionalidades están diseñadas para facilitar
        este proceso, sin distracciones innecesarias.
      </>
    ),
  },
  {
    title: "Potenciado por Phoenix Framework",
    Svg: require("@site/static/img/undraw_phoenix.svg").default,
    description: (
      <>
        Arquos Facturame está construido sobre Phoenix Framework, lo que
        garantiza un rendimiento óptimo y una experiencia de usuario fluida.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
