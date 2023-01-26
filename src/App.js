// import logo from './logo.svg';
import './App.css';
// Import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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

// Export
export default App;


