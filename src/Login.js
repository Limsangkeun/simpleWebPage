import React from 'react';
import {Link} from 'react-router-dom';
function Login() {
    return (
        <div className="loginBox m-auto card">
            <h6 className="card-header">Login to SNA</h6>
            <div className="card-body">
                <div className="form-group">
                    <label for="ipt_email">Email</label>
                    <input id="ipt_email" className="form-control" type="text" placeholder="email"></input>
                </div>
                <div className="form-group">
                    <label for="ipt_pwd">password</label>
                    <input id="ipt_pwd" className="form-control" type="password" placeholder="password"></input>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn loginBtn">Login</button>
                <p className="text-center mt-3">if you don't have a account? <Link to="/join">JOIN US</Link></p>
            </div>
        </div>
    );
}

export default Login;