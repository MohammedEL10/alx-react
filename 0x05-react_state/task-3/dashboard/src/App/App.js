import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { displayDrawer: False };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer  = this.handleHideDrawer.bind(this);
  }
  handleDisplayDrawer () {
    this.setState({displayDrawer: true});
  }
  handleHideDrawer () {
    this.setState({displayDrawer: False});
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }
  handleLogout(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications
        displayDrawer = {displayDrawer}
        handleDisplayDrawer = {this.handleDisplayDrawer}
        handleHideDrawer = {this.handleHideDrawer}
        />
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title='News from the School'>
          <p className={css(styles.p)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            ullam? Quisquam eos temporibus, voluptate error, sunt consectetur
            ducimus eaque dolorum sit excepturi doloribus officiis reprehenderit
            distinctio dignissimos adipisci a aspernatur.
          </p>
        </BodySection>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: 'thick solid #e0344a',
  },
  p: {
    marginTop: 0,
  },
});

export default App;
