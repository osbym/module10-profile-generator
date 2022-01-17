// TODO: Write code to define and export the Manager class.  


const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return parseInt(this.officeNumber);
    }

    getRole() {
        return "Manager";
    };
};

// const manager1 = new Manager("Jared", "js12345", "email@fakemail.com", "555-555-5555", "Manager");

// manager1.getName();
// manager1.getID();
// manager1.getEmail()
// manager1.getOfficeNumber();
// manager1.getRole()

module.exports = Manager;