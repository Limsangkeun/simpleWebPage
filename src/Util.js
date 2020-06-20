import Axios from 'axios';

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
    request: function(location, method, type, param, result) {
        switch (method) {
            case 'POST':
                Axios.post(location, param, {responseType:type, baseURL:"http://localhost:8080/"})
                    .then((data)=>{result=data}).catch((error)=>{result=error});
                break;
            case 'GET':
                break;
        }
    }
}

export default UT;