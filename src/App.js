// import logo from './logo.svg';
import './App.css';
// Import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
// Import pages
import LandingPage from './pages/LandingPage';
import Catalogo from './pages/Catalogo';
import CompanyRegistration from './pages/CompanyRegistration';
import Competencia from './pages/Competencia';
import General from './pages/General';
import Home from './pages/Home';
import Projects from './pages/Projects';
import UserRegistration from './pages/UserRegistration';
import UserLogin from './pages/UserLogin';

// Define the links to the pages and the logic to render them because of the login status
// Unregistered users can only access the landing page, home page, registration page and the login page
// Registered users can access to all the pages except the registration page and the login page


// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {props.isLoggedIn ? <p>Logged In</p> : <p>Not logged in</p>}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// Create a function App to render the pages with the logic of the login status
function App(props) {
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/" component={LandingPage} />
  //       <Route exact path="/home" component={Home} />
  //       {props.isLoggedIn ? (
  //         <><Route exact path="/catalogo" component={Catalogo} />
  //         <Route exact path="/companyregistration" component={CompanyRegistration} />
  //         <Route exact path="/competencia" component={Competencia} /><Route exact path="/general" component={General} />
  //         <Route exact path="/projects" component={Projects} /></>
  //       ) : (
  //         <Route exact path="/userregistration" component={UserRegistration} />
  //       )}
  //     </Switch>
  //   </Router>
  // );

  // Rewrite using routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {props.isLoggedIn ? (
          <>
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/companyregistration" element={<CompanyRegistration />} />
            <Route path="/competencia" element={<Competencia />} />
            <Route path="/general" element={<General />} />
            <Route path="/projects" element={<Projects />} />
          </>
        ) : (
          <>
          <Route path="/userregistration" element={<UserRegistration />} />
          <Route path="/userlogin" element={<UserLogin />} />
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

