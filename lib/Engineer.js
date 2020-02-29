const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super("Foo", 1, "test@test.com", github);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "Engineer"
    };

    getGithub() {
        return this.github
    };
}

module.exports = Engineer;