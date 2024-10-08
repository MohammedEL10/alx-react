import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
        <div className={css(styles.footer)}></div>
      </div> 
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create ({
  BodySectionWithMargin: {
    width: '100%',
  },
});
export default BodySectionWithMarginBottom;
