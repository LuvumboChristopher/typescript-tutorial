"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
// Por ultimo , para conbirar las interfaces is las classes podemos  especificar a las clases como deve ser su estructura
/*En este ejemplo creamos una interface, y la importamos, dicha interface especifica que format() deve devolver un string
en la siguiente clase format() lo hace por lo que no, nos dara un error*/
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
