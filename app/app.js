// Declaring variable with specific type
var personName = "Boris";
function printCompanyData(company) {
    console.log("Incoming data...  " + company.name + ": <" + company.email + " - " + company.phone + "> ");
}
var Company = (function () {
    function Company(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Company;
}());
var google = new Company("Google", 5551234321, "a@google.com");
printCompanyData(google);
// console.log(company); 
//# sourceMappingURL=app.js.map