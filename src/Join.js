import React from 'react';
import UT from './Util.js';

function checkLogin () {
    if(UT.isEmpty(document.getElementById('ipt_email').value) || UT.isEmpty(document.getElementById('ipt_pwd').value)
        || UT.isEmpty(document.getElementById('ipt_rePwd').value) || UT.isEmpty(document.getElementById('ipt_nickName').value)) {
            return;
        }
    
    if(document.getElementById('ipt_pwd').value !== document.getElementById('ipt_rePwd').value) {
        alert('please put a same password');
        return;
    }
    UT.encrypt(document.getElementById('ipt_pwd').value,(result)=>{
        if(result===document.getElementById('ipt_pwd').value) {
            alert('Sorry, We have a some issue...');
            return;
        }
        var param = {
            email : document.getElementById('ipt_email').value,
            pwd : document.getElementById('ipt_pwd').value,
            nickname: document.getElementById('ipt_nickName').value,
            birth: document.getElementById('ipt_birth').value.split('-').join('')
        }
        console.log(param);
        UT.request('/user/join',param);
    });
}

function Join () {
    return (
        <div className="joinBox m-auto card">
            <h6 className="card-header">Welcome to SNA</h6> 
            <div className="card-body">
                <form id="joinForm" method="post" action="/">
                    <div className="form-group">
                        <label htmlFor="ipt_email">Email</label>
                        <input id="ipt_email" className="form-control" type="email" placeholder="email" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipt_pwd">password</label>
                        <input id="ipt_pwd" className="form-control" type="password" placeholder="password" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipt_rePwd">re-password</label>
                        <input id="ipt_rePwd" className="form-control" type="password" placeholder="re-password" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipt_nickName">NICKNAME</label>
                        <input id="ipt_nickName" className="form-control" type="text" placeholder="nickname" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipt_birth">birth</label>
                        <input id="ipt_birth" className="form-control" type="date" placeholder="birthday" required></input>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <button onClick={()=>{checkLogin();}} className="btn loginBtn">Join</button>
            </div>
        </div>
    );
}

export default Join;