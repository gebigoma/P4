import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Input, Menu, Responsive, Visibility, Segment, Button } from 'semantic-ui-react'

  const capitalize = {
    textTransform: 'capitalize'
  }

class NavBar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state
    const { currentUser } = this.props
    const { onSubmitClick } = this.props

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            // inverted
            textAlign='center'
            // style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                <Menu.Item as='a' active><Link to="/">Home</Link></Menu.Item>
                {currentUser
                  ? (
                    <Fragment>
                      <Menu.Item as='a'><Link to="/profile" style={capitalize}>{currentUser.name}</Link></Menu.Item>
                      <Menu.Item as='a'><a onClick={onSubmitClick}>Submit</a></Menu.Item>
                      <Menu.Item as='a'> <Link to="/logout">Log Out</Link></Menu.Item>
                    </Fragment>
                  )
                  : (
                    <Fragment>
                    <Menu.Item as='a'><Link className="item" to="/login">Submit</Link></Menu.Item>
                    <Menu.Item as='a'><Link className="item" to="/login">Log In</Link></Menu.Item>
                    <Menu.Item as='a'> <Link className="item" to="/signup">Sign Up</Link></Menu.Item>  
                    </Fragment>
                  )
                }
                <Menu.Item position='right'>
                  <Button as='a' /*inverted={!fixed}*/>
                    Log in
                  </Button>
                  <Button as='a' /*inverted={!fixed}*/ primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

// const capitalize = {
//   textTransform: 'capitalize'
// }

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