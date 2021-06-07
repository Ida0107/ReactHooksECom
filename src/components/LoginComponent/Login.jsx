import { connect } from 'react-redux';
import { onLogin } from '../../redux/user/user.actions';
import {useState} from 'react';

const Login = ({onLogin}) => {

  const [ user, setUser] = useState(null);

  const onInputChange = (event)=> {
    const field = event.target.name;
    setUser({
      ...user,
      [field]: event.target.value
    });
  }

  return (
    <div className="App">
      <label>UserName</label>
      <input name="username" type="text" onChange={onInputChange} />
      <label>Password</label>
      <input name="password" type="password" onChange={onInputChange} />
      <button onClick={() =>onLogin(user)}>Login</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    onLogin : (data) => dispatch(onLogin(data))
})

export default connect(null, mapDispatchToProps)(Login);