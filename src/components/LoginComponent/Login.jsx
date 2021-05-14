import { connect } from 'react-redux';
import { onLogin } from '../../redux/user/user.actions';

const Login = ({ profile : { name, email}, onLogin}) => {
    return (
      <div className="App"> {name}
        <button onClick={onLogin}>Login</button>
      </div>
    );
}

const mapStateToProps = (state) => ({
    profile : state.user.profile
});

const mapDispatchToProps = (dispatch) => ({
    onLogin : (data) => dispatch(onLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);