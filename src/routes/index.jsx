import HospitalLayout from 'layouts/Hospital.jsx'
// import MusicLayout from 'layouts/Music.jsx';
// import SocialLayout from 'layouts/Social.jsx';
import CrmLayout from 'layouts/Crm.jsx'
// import FreelanceLayout from 'layouts/Freelance.jsx';
// import GeneralLayout from 'layouts/General.jsx';
import UniversityLayout from 'layouts/University.jsx'
// import EcommerceLayout from 'layouts/Ecommerce.jsx';
// import BlogLayout from 'layouts/Blog.jsx';
import BlankPage from 'layouts/BlankPage.jsx'
import LoginPage from 'layouts/LoginPage.jsx'
import Home from 'views/general/Pages/Home.jsx'

// import DefaultLayout from "layouts/PageLayouts/DefaultLayout.jsx";
// import FoldedMenu from "layouts/PageLayouts/FoldedMenu.jsx";
// import TransparentLayout from "layouts/PageLayouts/TransparentLayout.jsx";
// import LightMenu from "layouts/PageLayouts/LightMenu.jsx";
// import ChatOpen from "layouts/PageLayouts/ChatOpen.jsx";
// import Layout1 from "layouts/PageLayouts/Layout1.jsx";
// import Layout2 from "layouts/PageLayouts/Layout2.jsx";
// import Layout3 from "layouts/PageLayouts/Layout3.jsx";
// import Layout4 from "layouts/PageLayouts/Layout4.jsx";
// import Layout5 from "layouts/PageLayouts/Layout5.jsx";
// import Layout6 from "layouts/PageLayouts/Layout6.jsx";
// import Layout7 from "layouts/PageLayouts/Layout7.jsx";
// import Layout8 from "layouts/PageLayouts/Layout8.jsx";
// import Layout9 from "layouts/PageLayouts/Layout9.jsx";
// import Layout10 from "layouts/PageLayouts/Layout10.jsx";
// import Layout11 from "layouts/PageLayouts/Layout11.jsx";
// import Layout12 from "layouts/PageLayouts/Layout12.jsx";
// import Layout13 from "layouts/PageLayouts/Layout13.jsx";
// import Layout14 from "layouts/PageLayouts/Layout14.jsx";
// import Layout15 from "layouts/PageLayouts/Layout15.jsx";

var BASEDIR = process.env.REACT_APP_BASEDIR

var indexRoutes = [
  { path: BASEDIR + '/home', name: 'HomePage', component: Home, _public: true },

  {
    path: BASEDIR + '/university',
    name: 'University Dashboard',
    component: UniversityLayout,
    _public: false,
  },
]

export default indexRoutes
