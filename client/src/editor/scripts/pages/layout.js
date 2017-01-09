
import React, {Component} from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import IconLoader from './../../../_shared/scripts/components/iconLoader';
import {onNextFrame} from './../utils/DOM';
import {scrollToY} from './../utils/scrollPosition';


class Layout extends Component {

  componentDidUpdate() {
    onNextFrame(() => {
      scrollToY(0);
    });
  }

  render() {
    return (
      <div className="app-scene">
        <IconLoader />
        <TransitionGroup
          transitionAppear={false}
          transitionName={{
            enter:'fadeIn',
            leave:'fadeOut'
          }}
          transitionEnterTimeout={400}  // total time
          transitionLeaveTimeout={200}  // total time
          component="div"
          className="app-page-parent">
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
        </TransitionGroup>
      </div>
    )
  }
}

export default Layout;
