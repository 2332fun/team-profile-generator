module.exports = function(name) {
    this.name = name;

    if (this.name === 'Charley') {
        this.id = Math.floor(Math.random() * 10 + 30);
        this.email = name + "@Gmail.com";
    } else {
        this.name = "Bob";
        this.id = Math.floor(Math.random() * 5 + 7);
        this.email = name + "@Gmail.com";
    }
};