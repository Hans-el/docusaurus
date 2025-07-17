import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Instalar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <strong>Pedidos Ya</strong> es un proyecto deque puedes instalarlo fácilmente y comenzar a usarlo en tu propio sitio web.  
      </>
    ),
  },
  {
    title: 'Documentación Enfocada',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        La documentación de <strong>Pedidos Ya</strong> está diseñada para ser clara y concisa, facilitando la comprensión de sus características y funcionalidades.
      </>
    ),
  },
  {
    title: 'Reutilizable Componentes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Puedes reutilizar los componentes de <strong>Pedidos Ya</strong> en diferentes partes de tu sitio web, lo que te permite mantener una consistencia visual y funcional.
        Además, puedes personalizarlos según tus necesidades.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
