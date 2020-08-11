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
import EditPost from './common/Post/Form/EditPost'
import Post from './common/Post/Post'
import UsersTable from './common/UsersTable/UsersTable'
import GlobalLoader from './common/Loader/GlobalLoader'
import NotFoundInfo from './common/NotFoundInfo/NotFoundInfo'
import CustomTabs from './common/CustomTabs/CustomTabs'

/*--------------- General Admin Components ------------------*/
import Messagewidget from './common/Messagewidget/Messagewidget'
import Navmenudropdown from './common/Navmenudropdown/Navmenudropdown'
import Navmenugroup from './common/Navmenugroup/Navmenugroup'
/*--------------- Custom Components ------------------*/
import PrivateRoute from './common/PrivateRoute/PrivateRoute'
import ChangePassword from './common/ChangePassword/ChangePassword'
import DescriptionComponent from './common/DescriptionComponent/DescriptionComponent.jsx'

/*--------------- University Admin Components ------------------*/
import Professorslist from './university/Professorslist/Professorslist'
import ProfessorslistStaff from './university/Professorslist/ProfessorslistStaff'
import CardTeacher from './university/Professorslist/CardTeacher'
import Studentslist from './university/Studentslist/Studentslist'
import UniStaffslist from './university/UniStaffslist/UniStaffslist'
import VideosYoutube from '../components/youtube_card/VideosYoutube'
import YoutubeLiveClassroom from '../components/youtube_card/YoutubeLiveClassroom'
import Courseslist from './university/Courseslist/Courseslist'
import SubjectList from './university/Courseslist/SubjectList'
import Activities from './university/Activities/Activities'
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
import SubjectCard from './hospital/Subjects/SubjectCard'
import SubjectActivity from './hospital/SubjectActivity/SubjectActivity'

/*--------------- Home Page Components ------------------*/
import Carousel from './home_page/Carousel'
import ClientCarouselItem from './home_page/ClientCarouselItem'
import ContactIcon from './home_page/ContactIcon'
import NewsCarouselItem from './home_page/NewsCarouselItem'
import CarouselCoursesStudent from './home_page/CarouselCoursesStudent'
import NavBarLogout from './home_page/NavBarLogout'
import LoginForm from './home_page/LoginForm'
import LoginFormNew from './home_page/LoginFormNew'

//
import AvatarProfile from '../components/common/Avatar/AvatarProfile'
import UpdateImgUser from '../components/hospital/Doctorslist/UpdateImgUser'
import FormProfileUser from '../components/common/Forms/FormProfileUser'

export {
  //Common component
  Messagewidget,
  Modal,
  DescriptionComponent,
  UsersTable,
  GlobalLoader,
  NotFoundInfo,
  CustomTabs,
  //Post Component
  Post,
  CreatePost,
  EditPost,
  //PrivateRoute
  PrivateRoute,
  ChangePassword,
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
  Activities,
  ActivityItem,
  ActivityCarouselItem,
  Activity,
  AddActivity,
  ShowActivity,
  AddResponseSection,
  VideosYoutube,
  YoutubeLiveClassroom,
  AvatarProfile,
  UpdateImgUser,
  FormProfileUser,
  //Students
  SubjectCard,
  SubjectActivity,
}
