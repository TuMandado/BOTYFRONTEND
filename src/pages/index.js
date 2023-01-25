import LandingPage from './LandingPage';
import Catalogo from './Catalogo';
import CompanyRegistration from './CompanyRegistration';
import Competencia from './Competencia';
import General from './General';
import Home from './Home';
import Projects from './Projects';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import Admin from './Admin';
import Contact from './Contact';

// Create a list of all the pages, and export it
const pages = {
    everyUser: {
        landing: {
            path: '/',
            component: LandingPage,
        },
        home: {
            path: '/home',
            component: Home,
        },
        contact: {
            path: '/contact',
            component: Contact,
        }
    },
    loggedUser: {
        catalogo: {
            path: '/catalogo',
            component: Catalogo,
        },
        companyregistration: {
            path: '/companyregistration',
            component: CompanyRegistration,
        },
        competencia: {
            path: '/competencia',
            component: Competencia,
        },
        general: {
            path: '/general',
            component: General,
        },
        projects: {
            path: '/projects',
            component: Projects,
        },
    },
    notLoggedUser: {
        userregistration: {
            path: '/userregistration',
            component: UserRegistration,
        },
        userlogin: {
            path: '/userlogin',
            component: UserLogin,
        },
    },
    adminUser: {
        admin: {
            path: '/admin',
            component: Admin,
        },
    },
};

const everyUserList = Object.values(pages.everyUser);
const loggedUserList = Object.values(pages.loggedUser);
const notLoggedUserList = Object.values(pages.notLoggedUser);
const adminUserList = Object.values(pages.adminUser);

const pathsDict = Object.values(pages).reduce((acc, page) => {
    return {
        ...acc,
        ...page,
    };
}, {});

// const PAGES = {
//     everyUserList,
//     loggedUserList,
//     notLoggedUserList,
//     adminUserList,
// };

// Change PAGES variable to a function that returns the pages
const PAGES = () => {
    return {
        everyUserList,
        loggedUserList,
        notLoggedUserList,
        adminUserList,
        pathsDict,
    };
};

// Export the function
export default PAGES
