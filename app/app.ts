// Declaring variable with specific type
var personName:string = "Boris";

// This example will work in ECMAScript 6 but fail in TypeScript
// Error TS2322: Type 'number' is not assignable to type 'string'.
// personName = 123;

interface ICompanyTester {
    name: string,
    phone: number,
    email: string
}

function printCompanyData( company: ICompanyTester ) {
    console.log( `Incoming data...  ${company.name}: <${company.email} - ${company.phone}> `);
}

class Company implements ICompanyTester {

    phone;
    name;
    email;

    constructor ( name: string, phone, email: string ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

var google = new Company("Google", 5551234321, "a@google.com");
printCompanyData( google );

// console.log(company);