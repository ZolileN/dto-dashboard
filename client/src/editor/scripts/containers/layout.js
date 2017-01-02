import React, { Component } from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { connect } from 'react-redux';

import IconLoader from './../../../_shared/scripts/components/iconLoader';
import { scrollToY } from './../utils/scrollPosition';
import { onNextFrame } from './../utils/DOM';


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
        <Toast />
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

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  null
)(Layout);
