import Axios from 'axios';
import Crypto from 'crypto';
const UT = {
    isEmpty: function(target) {
        if(target===null || target===undefined || target==='') {
            return true;
        }
        return false;
    },
    isNotEmpty: function(target) {
        return !this.isEmpty(target);       
    },
    request: function(location, param, callback) {
        Axios.post(location,param, {
            baseURL:'http://localhost:9090/',
            timeout:'3000',
            responseType:'json'
        }).then(res => callback!= undefined ? callback(res) : console.log(res));
    },
    encrypt: function(target, callback) {
        if(typeof target !== 'string') {
            alert('only string object can be encrypt');
            return;
        }
        Crypto.pbkdf2(target,'milito6574',100000, 64, 'sha512', (err,key) => {
            if(this.isNotEmpty(err)) {
                console.log(err);
                callback(target);
            }
            callback(key.toString('base64'));
        });
    }
}

export default UT;