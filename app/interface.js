// Company class. Nothing more, nothing less.
var Company = (function () {
    function Company(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Company;
}());
// Prints company data and tests it within ICompanyTester interface
function printCompanyData(company) {
    console.log("Incoming data...  " + company.name + ": <" + company.email + " - " + company.phone + "> ");
}
// Creating new instance of Company class and filling it with correct data.
var google = new Company("Google", 5551234321, "a@google.com");
printCompanyData(google);
//# sourceMappingURL=interface.js.map