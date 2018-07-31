import React, { Fragment, Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Visibility, Image } from 'semantic-ui-react'


const capitalize = {
  textTransform: 'capitalize'
}

class NavBar extends Component {
  state = { activeItem: 'home' }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { fixed } = this.state
    const { currentUser } = this.props
    const { onSubmitClick } = this.props

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}>
        <Fragment>
          <Menu size='large' pointing secondary fixed={fixed ? 'top' : null}>
            <Menu.Item className="logo" as={Link} exact to="/" name='sugarfree gallery' />
            {currentUser
              ? (
                <Fragment>
                  <Menu.Menu position='right'>
                    <Menu.Item onClick={onSubmitClick}>Submit</Menu.Item>
                    <Menu.Item as={NavLink} to="/profile" name='currentuser' style={capitalize}>
                      {currentUser.name}
                    </Menu.Item>
                    <Menu.Item as={NavLink} name='logout' to="/logout" />
                  </Menu.Menu>
                </Fragment>
              )
              : (
                <Fragment>
                  <Menu.Menu position='right'>
                    <Menu.Item as={NavLink} to="/login" name='login' />
                    <Menu.Item as={NavLink} to="/signup" name='signup' />
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

export default NavBar