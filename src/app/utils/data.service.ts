import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class DataService {
    data: any[];

    constructor () {
        this.data = [
            {
                id: 1,
                firstName: 'Bill',
                lastName: 'Gates',
                company: 'Microsoft',
                phone: '054123456',
                email: 'bill@microsoft.com'
            }, {
                id: 2,
                firstName: 'Mark',
                lastName: 'Zuckerberg',
                company: 'Facebook',
                phone: '050123456',
                email: 'mark@facebook.com'
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Page',
                company: 'Google',
                phone: '053123456',
                email: 'larry.page@gmail.com'
            }, {
                id: 4,
                firstName: 'Sergey',
                lastName: 'Brin',
                company: 'Google',
                phone: '053123456',
                email: 'sergey.brin@gmail.com'
            }, {
                id: 5,
                firstName: 'Larry',
                lastName: 'Ellison',
                company: 'Oracle',
                phone: '053123456',
                email: 'larry@oracle.com'
            }, {
                id: 6,
                firstName: 'Jeff',
                lastName: 'Bezoz',
                company: 'Amazon',
                phone: '053123456',
                email: 'jeff@amazon.com'
            }, {
                id: 7,
                firstName: 'Elon',
                lastName: 'Mask',
                company: 'Tesla',
                phone: '053123456',
                email: 'elon@tesla.com'
            }, {
                id: 8,
                firstName: 'Tim',
                lastName: 'Cook',
                company: 'Apple',
                phone: '053123456',
                email: 'tim@apple.com'
            } 
        ];
    }

    public addNewContact(contact) {
        contact.id = Date.now();
        this.data.push(contact);
    }

    public deleteContact(id) {
        _.remove(this.data, {'id': id});
    }
}