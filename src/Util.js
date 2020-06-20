
const UT = {
    isEmpty: function(target) {
        if(target===null || target===undefined || target==='') {
            return true;
        }
        return false;
    },
    isNotEmpty: function(target) {
        return !this.isEmpty(target);       
    }
}

export default UT;