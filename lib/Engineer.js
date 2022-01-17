const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
        // console.log(this.github); 
    }

    getRole() {
        return "Engineer";
        // console.log(this.role);
    }
}

// const engineer1 = new Engineer("Marcus", "mo12345", "email@someemail.com", "marcusosby757", "Engineer");
// engineer1.getName();
// engineer1.getID();
// engineer1.getEmail();
// engineer1.getGithub();
// engineer1.getRole();

module.exports = Engineer;