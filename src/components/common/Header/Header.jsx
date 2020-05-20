import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap'

import { Messages, Notifications } from 'components'
import dashboardRoutes from 'routes/university.jsx'
import { connect } from 'react-redux'
import { messages } from 'variables/topbar.jsx'
import { notifications } from 'variables/topbar.jsx'

var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR
// let user = JSON.parse(localStorage.getItem('userv2'))
// var nameUserProfile = user.user_data.user.firstNameUser; Compañero, comente esta parte, ya que en algunmomento puede dar indefinido
//console.log('User..', user.user_data.user.firstNameUser) Ya acomode que muestre el nombre y no el apellido, tener en cuenta que algunos tienes el apellido donde va el nombre
const navStyle = {
  backgroundColor: '#1EAEDF',
}
// const searchIconGray = {
//   color: 'gray',
// }
// const styleBackSearch = {
//   backgroundColor: 'white',
// }
class HeaderR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      userddOpen: false,
      searchOpen: false,
      messagesddOpen: false,
      notificationsddOpen: false,
      color: 'primary',
      profilename: 'Eric Nelson',
      //profileimg: IMGDIR + '/images/profile/profile.jpg',
      profileimg: 'https://image.flaticon.com/icons/svg/566/566985.svg',
    }
    this.toggle = this.toggle.bind(this)
    this.userddToggle = this.userddToggle.bind(this)
    this.messagesddToggle = this.messagesddToggle.bind(this)
    this.notificationsddToggle = this.notificationsddToggle.bind(this)
    this.searchToggle = this.searchToggle.bind(this)
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: 'primary',
      })
    } else {
      this.setState({
        color: 'white',
      })
    }
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  userddToggle(e) {
    this.setState({
      userddOpen: !this.state.userddOpen,
    })
  }
  searchToggle() {
    //this.refs.searchbarToggle.classList.toggle('toggled');
    this.setState({
      searchOpen: !this.state.searchOpen,
    })
    //console.log(this.state.searchOpen);
    //this.refs.searchbarToggle.classList.toggle('opened');
  }
  messagesddToggle(e) {
    this.setState({
      messagesddOpen: !this.state.messagesddOpen,
    })
  }
  notificationsddToggle(e) {
    this.setState({
      notificationsddOpen: !this.state.notificationsddOpen,
    })
  }
  getBrand() {
    var name
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name
          }
          return null
        })
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name
          }
        }
      }
      return null
    })
    return name
  }
  openSidebar() {
    document.documentElement.classList.toggle('nav-toggle')
    this.refs.sidebarToggle.classList.toggle('toggled')

    // close chat bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove('nav-toggle-chat')
      // this.refs.chatToggle.classList.remove('toggled');
    }
  }
  openChat() {
    document.documentElement.classList.toggle('nav-toggle-chat')
    // this.refs.chatToggle.classList.toggle('toggled');

    // close menu bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove('nav-toggle')
      this.refs.sidebarToggle.classList.remove('toggled')
    }
  }
  toggle_grid() {
    document.documentElement.classList.toggle('toggle-grid')
  }

  openStyle() {
    document.documentElement.classList.toggle('nav-toggle-style')
    // this.refs.chatToggle.classList.toggle('toggled');

    // close menu bar if open on smaller screens
    /*if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }*/
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: 'primary',
      })
    } else {
      this.setState({
        color: 'primary',
      })
    }
  }
  componentDidMount() {
    if (this.props.navtype === 'mini') {
      document.documentElement.classList.add('nav-toggle')
      this.refs.sidebarToggle.classList.add('toggled')
    } else {
      document.documentElement.classList.remove('nav-toggle')
      this.refs.sidebarToggle.classList.remove('toggled')
    }
    window.addEventListener('resize', this.updateColor.bind(this))

    if (this.props.admintype === 'general') {
      this.setState({
        profileimg: IMGDIR + '/images/profile/profile-general.jpg',
        profilename: 'Nancy Spencer',
      })
    } else if (this.props.admintype === 'hospital') {
      this.setState({
        profileimg: IMGDIR + '/images/profile/profile-hospital.jpg',
        profilename: 'Dianna Austin',
      })
    } else if (this.props.admintype === 'university') {
      this.setState({
        // profilename: 'Henry Gibson',
        profilename: this.props.user
          ? this.props.user.firstNameUser ||
            this.props.user.lastNameUser ||
            'Henry Gibson'
          : 'Henry Gibson',
        profileimg: IMGDIR + '/images/profile/profile-university.jpg',
      })
    } else if (this.props.admintype === 'crm') {
      this.setState({
        profilename: 'Rick  Woods',
        profileimg: IMGDIR + '/images/profile/profile-crm.jpg',
      })
    } else if (this.props.admintype === 'music') {
      this.setState({
        profilename: 'Kerry Flores',
        profileimg: IMGDIR + '/images/profile/profile-music.jpg',
      })
    } else if (this.props.admintype === 'blog') {
      this.setState({
        profilename: 'Alice Gross',
        profileimg: IMGDIR + '/images/profile/profile-blog.jpg',
      })
    } else if (this.props.admintype === 'ecommerce') {
      this.setState({
        profilename: 'Jake  Daniel',
        profileimg: IMGDIR + '/images/profile/profile-ecommerce.jpg',
      })
    } else if (this.props.admintype === 'freelance') {
      this.setState({
        profilename: 'Eric Nelson',
        profileimg: IMGDIR + '/images/profile/profile-freelance.jpg',
      })
    } else if (this.props.admintype === 'social') {
      this.setState({
        profilename: 'Penny Taylor',
        profileimg: IMGDIR + '/images/profile/profile-social.jpg',
      })
    } else {
      this.setState({
        profilename: 'Nancy Spencer',
        profileimg: IMGDIR + '/images/profile/profile-general.jpg',
      })
    }
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-toggle') !== -1
    ) {
      document.documentElement.classList.toggle('nav-toggle')
      this.refs.sidebarToggle.classList.toggle('toggled')
    }
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-toggle-chat') !== -1
    ) {
      document.documentElement.classList.toggle('nav-toggle-chat')
      // this.refs.chatToggle.classList.toggle('toggled');
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        expand="lg"
        className={
          this.props.location.pathname.indexOf('full-screen-maps') !== -1
            ? 'navbar-absolute fixed-top'
            : 'navbar-absolute fixed-top '
        }
      >
        <Container fluid style={navStyle}>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <i className="i-menu"></i>
              </button>
            </div>

            <form className="topbar-search-form">
              <InputGroup
                className={
                  'topbar-search ' +
                  (this.state.searchOpen === true ? 'open' : '')
                }
              >
                <InputGroupAddon
                  addonType="append"
                  onClick={() => this.searchToggle()}
                >
                  <i className="i-magnifier"></i>
                </InputGroupAddon>
                <Input placeholder="Buscar..." />
              </InputGroup>
            </form>

            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>

          <Collapse isOpen={this.state.isOpen} navbar className="navbar-right">
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.userddOpen}
                toggle={(e) => this.userddToggle(e)}
                className="userdd"
              >
                <DropdownToggle caret nav className="joyride-welcome-1">
                  <img
                    src="https://image.flaticon.com/icons/svg/2089/2089828.svg"
                    alt="react-logo"
                    className="avatar-image"
                  />{' '}
                  {/* <span>{nameUserProfile}</span> */}
                  <span>{this.state.profilename}</span>
                  {/* {console.log('this.state', this.state)} */}
                </DropdownToggle>
                <DropdownMenu right>
                  {/* <DropdownItem tag="a">
                    <i className="i-wrench" href="#!"></i> Configuracion
                  </DropdownItem> */}
                  {/* <DropdownItem
                    tag="a"
                    onClick={() => {
                      // eslint-disable-next-line
                      this.props.history.push(
                        BASEDIR + '/university/add-professors'
                      )
                    }}
                  >
                    <i className="i-user" href="#!"></i> Perfil
                  </DropdownItem> */}
                  {/* <DropdownItem tag="a">
                    <i className="i-info" href="#!"></i> Ayuda
                  </DropdownItem> */}
                  <DropdownItem
                    onClick={() => {
                      localStorage.removeItem('userv2')
                    }}
                    tag="a"
                    className=""
                    href="#!"
                  >
                    <i className="i-lock"></i> Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* <NavItem>
                <div className="navbar-toggle chat-toggle">
                  <button
                    type="button"
                    ref="chatToggle"
                    className="navbar-toggler mr-2"
                    onClick={() => this.openChat()}
                  >
                    <i className="i-bubbles"></i>
                    <span className="badge badge-pill badge-primary">9</span>
                  </button>
                </div>
              </NavItem> */}
              {/* <Dropdown
                nav
                isOpen={this.state.messagesddOpen}
                toggle={(e) => this.messagesddToggle(e)}
                className="navbardd ml-0 mr-2"
              >
                <DropdownToggle caret nav>
                  <i className="i-envelope"></i>
                  <span className="badge badge-pill badge-primary">3</span>
                </DropdownToggle>
                <Messages messages={messages} />
              </Dropdown> */}
              {/* <Dropdown
                nav
                isOpen={this.state.notificationsddOpen}
                toggle={(e) => this.notificationsddToggle(e)}
                className="navbardd mr-3"
              >
                <DropdownToggle caret nav>
                  <i className="i-bell"></i>
                  <span className="badge badge-pill badge-primary">7</span>
                </DropdownToggle>
                <Notifications notifications={notifications} />
              </Dropdown */}
              >
            </Nav>
            <div
              className="screensize"
              onClick={() => this.toggle_grid()}
            ></div>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

// export default Header

function mapState(state) {
  const { user } = state.authentication.user.user_data
  return { user }
}

const Header = connect(mapState, {})(HeaderR)
export default Header
