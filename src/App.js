// import logo from './logo.svg';
import './App.css';
// Import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
// import LandingPage from './LandingPage';
// import Catalogo from './Catalogo';
// import CompanyRegistration from './CompanyRegistration';
// import Competencia from './Competencia';
// import General from './General';
// import Home from './Home';
// import Projects from './Projects';
// import UserRegistration from './UserRegistration';
// import UserLogin from './UserLogin';
// import Admin from './Admin';
// import Contact from './Contact';
import PAGES from './pages';


// Create a function App to render the pages with the logic of the login status
function App(props) {
  const pages = PAGES();
  const {
    everyUserList,
    loggedUserList,
    notLoggedUserList,
    adminUserList,
  } = pages;
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

