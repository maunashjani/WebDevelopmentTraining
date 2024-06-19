const userdata = {   
    firstname: 'John',   
    lastname: 'Doe',   
    getFullName: function(){ 
        return `${this.firstname} ${this.lastname}` 
    } 
};
module.exports = userdata;