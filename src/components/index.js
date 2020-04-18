/*--------------- Common Components ------------------*/
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Sidebar from "./common/Sidebar/Sidebar";
import ChatSidebar from "./common/ChatSidebar/ChatSidebar";
import Stylebar from "./common/Stylebar/Stylebar";
import StyleSettings from "./common/StyleSettings/StyleSettings";
import Favcontacts from "./common/Chatbar/Favcontacts";
import Allcontacts from "./common/Chatbar/Allcontacts";
import Chatgroups from "./common/Chatbar/Chatgroups";
import Notifications from "./common/Notifications/Notifications";
import Messages from "./common/Messages/Messages";
import Mailbox from "./common/Mailbox/Mailbox";
import Navmenudropdown from "./common/Navmenudropdown/Navmenudropdown";
import Navmenugroup from "./common/Navmenugroup/Navmenugroup";

/*--------------- University Admin Components ------------------*/
import Professorslist from "./university/Professorslist/Professorslist";
import Studentslist from "./university/Studentslist/Studentslist";
import UniStaffslist from "./university/UniStaffslist/UniStaffslist";
import Courseslist from "./university/Courseslist/Courseslist";

/*--------------- Home Page Components ------------------*/
import Carousel from "./home_page/Carousel";
import ClientCarouselItem from "./home_page/ClientCarouselItem";
import ContactIcon from "./home_page/ContactIcon";
import NewsCarouselItem from "./home_page/NewsCarouselItem";
import NavBarLogout from "./home_page/NavBarLogout";
import LoginForm from "./home_page/LoginForm";

export {
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
};
