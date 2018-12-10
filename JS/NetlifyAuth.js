import * as React from 'react';
import * as Scrivito from 'scrivito';
import netlifyIdentity from 'netlify-identity-widget';

class NetlifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.state = { loggedIn: false };
  }

  handleLogInClick() {
    netlifyIdentity.open();
  }

  handleLogOutClick() {
    netlifyIdentity.logout();
  }

  afterLogIn() {
    netlifyIdentity.close();
    this.setState({ loggedIn: true });
  }

  componentDidMount() {
    netlifyIdentity.on("login", () => this.afterLogIn());
    netlifyIdentity.on("logout", () => this.setState({ loggedIn: false }));
  }

  render() {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      return (
        <a href="#" onClick={ this.handleLogInClick }>Sign up | Log in</a>
      );
    }
    return (
      <a href="#" onClick={ this.handleLogOutClick }>Log out { user.email }</a>
    );
  }
}

export default NetlifyAuth;
