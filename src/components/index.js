/*--------------- Common Components ------------------*/
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import Sidebar from './common/Sidebar/Sidebar'
import ChatSidebar from './common/ChatSidebar/ChatSidebar'
import Stylebar from './common/Stylebar/Stylebar'
import StyleSettings from './common/StyleSettings/StyleSettings'
import Favcontacts from './common/Chatbar/Favcontacts'
import Allcontacts from './common/Chatbar/Allcontacts'
import Chatgroups from './common/Chatbar/Chatgroups'
import Notifications from './common/Notifications/Notifications'
import Messages from './common/Messages/Messages'
import Mailbox from './common/Mailbox/Mailbox'
import Modal from './common/Modal/Modal'
import CreatePost from './common/Post/Form/CreatePost'
import Post from './common/Post/Post'
/*--------------- General Admin Components ------------------*/
import Messagewidget from './common/Messagewidget/Messagewidget'
import Navmenudropdown from './common/Navmenudropdown/Navmenudropdown'
import Navmenugroup from './common/Navmenugroup/Navmenugroup'
/*--------------- Custom Components ------------------*/
import PrivateRoute from './common/PrivateRoute/PrivateRoute'

/*--------------- University Admin Components ------------------*/
import Professorslist from './university/Professorslist/Professorslist'
import ProfessorslistStaff from './university/Professorslist/ProfessorslistStaff'
import CardTeacher from './university/Professorslist/CardTeacher'
import Studentslist from './university/Studentslist/Studentslist'
import UniStaffslist from './university/UniStaffslist/UniStaffslist'
import Courseslist from './university/Courseslist/Courseslist'
import SubjectList from './university/Courseslist/SubjectList'
import ActivityItem from './university/Activities/ActivityItem'
import Activity from './university/Activities/Activity'
import ActivityCarouselItem from './university/Activities/ActivityCarouselItem'
import AddActivity from './university/Activities/Form/AddActivity'
import AddResponseSection from './university/Sectionstudents/Form/AddResponseSection'

import ShowActivity from './university/Activities/Form/ShowActivity'

/*--------------- Hospital Admin Components ------------------*/
import CoursesStudentList from './hospital/Doctorslist/CoursesStudentList'
import Patientslist from './hospital/Patientslist/Patientslist'
import Staffslist from './hospital/Staffslist/Staffslist'

/*--------------- Home Page Components ------------------*/
import Carousel from './home_page/Carousel'
import ClientCarouselItem from './home_page/ClientCarouselItem'
import ContactIcon from './home_page/ContactIcon'
import NewsCarouselItem from './home_page/NewsCarouselItem'
import CarouselCoursesStudent from './home_page/CarouselCoursesStudent'
import NavBarLogout from './home_page/NavBarLogout'
import LoginForm from './home_page/LoginForm'
import LoginFormNew from './home_page/LoginFormNew'

export {
  //Common component
  Messagewidget,
  Modal,
  //Post Component
  Post,
  CreatePost,
  //PrivateRoute
  PrivateRoute,
  // CardElements
  Navmenudropdown,
  // CustomButton
  Navmenugroup,
  // CustomCheckbox
  // CustomRadio
  // Footer
  Footer,
  // FormInputs
  // Header
  Header,
  // PanelHeader
  //PanelHeader,
  // Sidebar
  Sidebar,
  // ChatSidebar
  ChatSidebar,
  Stylebar,
  // Stats
  //Stats,
  // Tasks
  //Tasks,
  // topbar messages
  Messages,
  // topbar notifications
  Notifications,
  // chatbar Favourite contacts
  Favcontacts,
  // chatbar All contacts
  Allcontacts,
  // chatbar Groups
  Chatgroups,
  // dropdown links in navigation side menu
  Mailbox,
  StyleSettings,
  Professorslist,
  ProfessorslistStaff,
  CardTeacher,
  Studentslist,
  UniStaffslist,
  Courseslist,
  //home page components
  Carousel,
  ClientCarouselItem,
  ContactIcon,
  NewsCarouselItem,
  NavBarLogout,
  LoginForm,
  LoginFormNew,
  //Hospital components
  CoursesStudentList,
  Patientslist,
  Staffslist,
  SubjectList,
  //item de actividad
  ActivityItem,
  ActivityCarouselItem,
  Activity,
  AddActivity,
  ShowActivity,
  AddResponseSection,
}
