import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Input, Menu, Responsive, Visibility, Segment, Button } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap'


// const capitalize = {
//   textTransform: 'capitalize'
// }

// class NavBar extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   hideFixedMenu = () => this.setState({ fixed: false })
//   showFixedMenu = () => this.setState({ fixed: true })

//   render() {
//     const { fixed } = this.state
//     const { currentUser } = this.props
//     const { onSubmitClick } = this.props
//     const { activeItem } = this.state

//     return (
//       <Responsive minWidth={Responsive.onlyTablet.minWidth}>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}>
//           <Segment
//             // inverted
//             textAlign='center'
//             // style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical>
//             <Menu
//               fixed={fixed ? 'top' : null}
//               // inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='large'>
//               <Container>
//                 <LinkContainer to="/" >
//                 <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
            
//                   {/* <Link to="/">Home</Link> */}
               
//                 </LinkContainer>
//                 {currentUser
//                   ? (
//                     <Fragment>
//                       <Menu.Item position='right'>
//                       <LinkContainer to="/profile"style={capitalize}>
//                         <Menu.Item
//                           name='username'
//                           active={activeItem === 'username'}
//                           onClick={this.handleItemClick}
//                           >{currentUser.name}
//                         </Menu.Item>
//                       </LinkContainer>

//                           {/* <Link to="/profile" style={capitalize}>{currentUser.name}</Link> */}


//                         <Menu.Item onClick={onSubmitClick}>Submit</Menu.Item>

//                         {/* <Link to="/logout">Log Out</Link> */}

//                         <LinkContainer to="/logout">
//                         <Menu.Item>Log Out</Menu.Item>
//                         </LinkContainer>

//                       </Menu.Item>
//                     </Fragment>
//                       )
//                       : (
//                     <Fragment>
//                         {/* <Menu.Item as='a'><Link className="item" to="/login">Submit</Link></Menu.Item>
//                         <Menu.Item as='a'><Link className="item" to="/login">Log In</Link></Menu.Item>
//                         <Menu.Item as='a'> <Link className="item" to="/signup">Sign Up</Link></Menu.Item> */}
//                       </Fragment>
//                       )
//                     }
//                 {/* <Menu.Item position='right'>
//                         <Link className="ui button" to="/login">Log In</Link>
//                         <Link className="ui button" to="/signup" style={{ marginLeft: '0.5em' }}>Sign Up</Link>
//                       </Menu.Item> */}
//               </Container>
//             </Menu>
//           </Segment>
//         </Visibility>
//       </Responsive>
//           )
//         }
//       }

const capitalize = {
  textTransform: 'capitalize'
}

class NavBar extends Component {
  state = { activeItem: 'home' }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { fixed } = this.state
    const { currentUser } = this.props
    const { onSubmitClick } = this.props

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}>
        <Fragment>
          <Menu pointing secondary fixed={fixed ? 'top' : null}>
            <LinkContainer to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            </LinkContainer>
            {currentUser
            ? (
              <Fragment>
                <LinkContainer to="/profile" style={capitalize}>
                  <Menu.Item
                    name='currentuser'
                    active={activeItem === 'currentuser'}
                    onClick={this.handleItemClick}
                  >{currentUser.name}
                  </Menu.Item>
                </LinkContainer>
                  <Menu.Item onClick={onSubmitClick}>Submit</Menu.Item>
                <Menu.Menu position='right'>
                  <LinkContainer to="/logout">
                    <Menu.Item
                      name='logout'
                      active={activeItem === 'logout'}
                      onClick={this.handleItemClick}
                    />
                  </LinkContainer>
                </Menu.Menu> 
              </Fragment>
            )
            : (
              <Fragment>
                <Menu.Menu position='right'>
                <LinkContainer to="/login">
                  <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                  />
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Menu.Item
                      name='signup'
                      active={activeItem === 'signup'}
                      onClick={this.handleItemClick}
                    />
                </LinkContainer>
                </Menu.Menu> 
              </Fragment>
            )
            }
          </Menu>
        </Fragment>
      </Visibility>
    )
  }
}

// const NavBar = (props) => {
//   return (
//     <Container fluid >
//     <div className="NavBar ui three item menu">
//       <div className="container">
//       <Link className="item" to="/">Home</Link>
//       {props.currentUser
//         ? (
//           <Fragment>
//             <Link className="item" to="/profile" style={capitalize}>{props.currentUser.name}</Link>
//             <a className="item" onClick={props.onSubmitClick}>Submit</a>
//             <Link className="item" to="/vip">VIP</Link>
//             <Link className="item" to="/logout">Log Out</Link>
//           </Fragment>
//         )
//         : (
//           <Fragment>
//           <Link className="item" to="/login">Submit</Link>
//           <Link className="item" to="/login">Log In</Link>
//           <Link className="item" to="/signup">Sign Up</Link>
//         </Fragment>
//         )
//       }
//       </div>
//     </div>
//     </ Container>
//   )
// }

export default NavBar