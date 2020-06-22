import React from 'react';
import {Link} from 'react-router-dom';
import UT from './Util';

function logging() {
    let email = document.getElementById('ipt_email').value;
    let pwd = document.getElementById('ipt_pwd').value;

    if(UT.isEmpty(email) || UT.isEmpty(pwd)) return;

    UT.encrypt(pwd,(result)=>{
        if(pwd === result) return;
        UT.request('/user/login',{email:email, pwd:result},(res)=>{
            if(res.data.result) {
                window.location.replace("/");
            } else {
                alert('아이디 또는 비밀번호를 확인해주세요');
                return;
            }
        })
    })
}

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
                <button className="btn loginBtn" onClick={()=>logging()}>Login</button>
                <p className="text-center mt-3">if you don't have a account? <Link to="/join">JOIN US</Link></p>
            </div>
        </div>
    );
}

export default Login;