// Interface that tests incoming company data types.
// such as name, phone & email.
interface ICompanyTester {
    name: string,
    phone: number,
    email: string
}

// Company class. Nothing more, nothing less.
class Company implements ICompanyTester {
    constructor ( public name: string, public phone:number, public email: string ) {}
}

// Prints company data and tests it within ICompanyTester interface
function printCompanyData( company: ICompanyTester ) {
    console.log( `Incoming data...  ${company.name}: <${company.email} - ${company.phone}> `);
}

// Creating new instance of Company class and filling it with correct data.
var google = new Company("Google", 5551234321, "a@google.com");

printCompanyData( google );
