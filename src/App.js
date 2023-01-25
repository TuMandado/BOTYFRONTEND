// import logo from './logo.svg';
import './App.css';
// Import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import PAGES from './pages';
const { everyUserList, loggedUserList, notLoggedUserList, adminUserList } = PAGES;

// Create a function App to render the pages with the logic of the login status
function App(props) {
  // Rewrite using routes
  return (
    <Router>
      <Routes>
        {everyUserList.map((page) => (
          <Route path={page.path} element={<page.component />} />
        ))}
        {props.isLoggedIn ? (
          <>
            {loggedUserList.map((page) => (
              <Route path={page.path} element={<page.component />} />
            ))}
          </>
        ) : (
          <>
            {notLoggedUserList.map((page) => (
              <Route path={page.path} element={<page.component />} />
            ))}
          </>
        )}
        {props.isAdmin ? (
          <>
            {adminUserList.map((page) => (
              <Route path={page.path} element={<page.component />} />
            ))}
          </>
        ) : (
          <>
          </>
        )}
      </Routes>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    // userType: state.auth.userType
  };
};

export default connect(mapStateToProps)(App);

