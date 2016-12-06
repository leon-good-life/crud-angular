import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    data: any[];

    constructor () {
        this.data = [
            {
                firstName: 'Bill',
                lastName: 'Gates',
                company: 'Microsoft',
                phone: '054123456',
                email: 'bill@microsoft.com'
            }, {
                firstName: 'Mark',
                lastName: 'Zuckerberg',
                company: 'Facebook',
                phone: '050123456',
                email: 'mark@facebook.com'
            }, {
                firstName: 'Larry',
                lastName: 'Page',
                company: 'Google',
                phone: '053123456',
                email: 'larry.page@gmail.com'
            }, {
                firstName: 'Sergey',
                lastName: 'Brin',
                company: 'Google',
                phone: '053123456',
                email: 'sergey.brin@gmail.com'
            }, {
                firstName: 'Larry',
                lastName: 'Ellison',
                company: 'Oracle',
                phone: '053123456',
                email: 'larry@oracle.com'
            }, {
                firstName: 'Jeff',
                lastName: 'Bezoz',
                company: 'Amazon',
                phone: '053123456',
                email: 'jeff@amazon.com'
            }, {
                firstName: 'Elon',
                lastName: 'Mask',
                company: 'Tesla',
                phone: '053123456',
                email: 'elon@tesla.com'
            }, {
                firstName: 'Tim',
                lastName: 'Cook',
                company: 'Apple',
                phone: '053123456',
                email: 'tim@apple.com'
            } 
        ];
    }
}