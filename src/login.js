import './css/login.css'
import team2 from './img/team-2.jpg'
import { Link } from 'react-router-dom';
function Login() {
    return (<>
        <div class="signin">
            <div class="back-img">
                <div class="sign-in-text">
                    <h2 class="active">Sign In</h2>
                    <h2 class="nonactive">Sign Up</h2>
                </div>
                <div class="layer">
                </div>
                <p class="point">&#9650;</p>
            </div>
            <div class="form-section">

                <form action="#">

                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label class="mdl-textfield__label" for="sample3">Email</label><br></br>
                        <input class="mdl-textfield__input" type="email" id="sample3" /><br></br><br></br>
                        <span class="mdl-textfield__error">Enter a correct Email</span>
                    </div>
                    <br />
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label class="mdl-textfield__label" for="sample3">Password</label><br />
                        <input pattern=".{8,}" class="mdl-textfield__input" type="password" id="sample3" /><br />
                        <span class="mdl-textfield__error">Minimum 8 characters</span>
                    </div>
                    <br />
                    <p class="forgot-text">Forgot Password ?</p>


                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
                        <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked />
                        <span class="keep-text mdl-checkbox__label">Keep me Signed In</span>
                    </label>
                </form>
            </div>

            <button class="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
                Sign In
            </button>
        </div>
    </>)
}
export default Login;