import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/nightmare_simple_api.svg').default,
    description: (
      <>
        提供了一套简单的 API 用于模拟用户的操作行为，在开发过程中可以很方便的使用这些 API
      </>
    ),
  },
  {
    title: '运行速度快',
    Svg: require('@site/static/img/nightmare_run_fast.svg').default,
    description: (
      <>
        底层基于 Electron 实现，运行速度较快，是 PhantomJS 的两倍
      </>
    ),
  },
  {
    title: '自动执行',
    Svg: require('@site/static/img/nightmare_use_case.svg').default,
    description: (
      <>
        可用于 E2E 测试，网络爬虫，以及基于页面的自动化任务等场景
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
        <h3>{title}</h3>
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
