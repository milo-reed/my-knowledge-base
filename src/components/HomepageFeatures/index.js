import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CategoryList = [
  {
    title: '高等数学',
    tag: '4 个 PDF',
    href: '/docs/advanced-math',
    description: '积分学、级数与高研班作业资料先放在这里，后续可以继续补充章节笔记。',
  },
  {
    title: '无机化学',
    tag: '待整理',
    href: '/docs/inorganic-chemistry',
    description: '用于沉淀反应、配位化学、元素化学等知识块的长期整理。',
  },
  {
    title: '物理化学',
    tag: '待整理',
    href: '/docs/physical-chemistry',
    description: '用于热力学、电化学、动力学等内容归档，方便和数学工具相互连接。',
  },
];

function CategoryCard({title, tag, href, description}) {
  return (
    <div className={clsx('col col--4', styles.categoryColumn)}>
      <Link className={styles.categoryCard} to={href}>
        <span className={styles.cardTag}>{tag}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span className={styles.cardAction}>打开目录</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">学习目录</Heading>
          <p>先从三个核心板块开始，把资料、练习和复盘逐步连接成自己的知识网络。</p>
        </div>
        <div className="row">
          {CategoryList.map((props) => (
            <CategoryCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
