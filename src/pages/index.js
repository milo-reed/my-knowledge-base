import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Personal Knowledge Network</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/advanced-math">
              进入高等数学
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              查看知识总览
            </Link>
          </div>
        </div>
        <div className={styles.networkPanel} aria-label="知识网络示意图">
          <div className={clsx(styles.node, styles.nodeMain)}>知识库</div>
          <div className={clsx(styles.node, styles.nodeMath)}>高数</div>
          <div className={clsx(styles.node, styles.nodeChemistry)}>无机</div>
          <div className={clsx(styles.node, styles.nodePhysical)}>物化</div>
          <span className={clsx(styles.line, styles.lineOne)} />
          <span className={clsx(styles.line, styles.lineTwo)} />
          <span className={clsx(styles.line, styles.lineThree)} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="辉少的个人学习笔记与知识网络">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
