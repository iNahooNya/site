import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile } = this.props;
    return (
      <section className={`${className}-wrapper page`}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={`${assets}/image/home/intro-landscape.svg`} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">让数据栩栩如生</h1>
            <p className="main-info" key="p">
              AntV 是蚂蚁金服可视化团队提供的一套完整、可靠、高质量、易扩展的数据可视化最佳实践，主要面对的用户是程序员和图表设计人员。
            </p>
            <a target="_blank" href={'/zh-cn/g2/3.x/index.html'} key="a">
              <button className="btn-round-link btn btn-primary btn-lg">
                开始使用
              </button>
            </a>
          </QueueAnim>
        </div>
      </section>
    );
  }
}

export default Banner;
