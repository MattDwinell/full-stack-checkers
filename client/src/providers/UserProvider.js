import { createContext, Component } from "react";
import { auth } from "../auth/firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    // console.log('mounted');
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth.uid);
      this.setState({ user: userAuth.uid});
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;