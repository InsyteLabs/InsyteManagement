'use strict';

import { IAddress, IContact, ICompany, IProject, IProduct }   from '@/interfaces';
import { CONTACTS, COMPANIES, PROJECTS, PRODUCTS } from './mocks';

class EntityService{

    private contacts:  IContact[] = CONTACTS;
    private companies: ICompany[] = COMPANIES;
    private projects:  IProject[] = PROJECTS;
    private products:  IProduct[] = PRODUCTS;

    /*
        ===============
        CONTACT METHODS
        ===============
    */
    getContacts(): Promise<IContact[]>{
        return new Promise((resolve, reject) => {
            resolve(this.contacts);
        });
    }

    getContact(id: number): Promise<IContact>{
        return new Promise((resolve, reject) => {
            resolve(this.contacts.filter(c => c.id === id)[0]);
        });
    }

    createContact(contact: IContact): Promise<IContact>{
        let lastId = this.contacts.reduce((acc:any, c:IContact) => {
            return c.id || 0 > acc ? c.id : acc;
        }, 0);

        return new Promise((resolve, reject) => {
            contact.id = ++lastId;

            this.contacts.push(contact);

            resolve(contact);
        });
    }

    updateContact(contact: IContact): Promise<IContact>{
        const existing = this.contacts.filter(c => c.id === contact.id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) reject('Contact does not exist');

            this.contacts.splice(this.contacts.indexOf(existing), 1, contact);

            resolve(contact);
        });
    }

    deleteContact(id: number): Promise<boolean>{
        const existing = this.contacts.filter(c => c.id === id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) resolve(true);

            this.contacts.splice(this.contacts.indexOf(existing), 1);

            resolve(true);
        });
    }


    /*
        ===============
        COMPANY METHODS
        ===============
    */
    getCompanies(): Promise<ICompany[]>{
        return new Promise((resolve, reject) => {
            resolve(this.companies);
        });
    }
    
    getCompany(id: number): Promise<ICompany>{
        return new Promise((resolve, reject) => {
            resolve(this.companies.filter(c => c.id === id)[0]);
        });
    }

    createCompany(company: ICompany): Promise<ICompany>{
        let lastId = this.companies.reduce((acc:any, c) => {
            return c.id || 0 > acc ? c.id : acc;
        }, 0);

        return new Promise((resolve, reject) => {
            company.id = ++lastId;

            this.companies.push(company);

            resolve(company);
        });
    }

    updateCompany(company: ICompany): Promise<ICompany>{
        const existing = this.companies.filter(c => c.id === company.id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) reject('Company does not exist');

            this.companies.splice(this.companies.indexOf(existing), 1, company);

            resolve(company);
        });
    }

    deleteCompany(id: number): Promise<boolean>{
        const existing = this.companies.filter(c => c.id === id)[0];
        
        return new Promise((resolve, reject) => {
            if(!existing) resolve(true);

            this.companies.splice(this.companies.indexOf(existing), 1);

            resolve(true);
        });
    }


    /*
        ===============
        PROJECT METHODS
        ===============
    */
    getProjects(): Promise<IProject[]>{
        return new Promise((resolve, reject) => {
            resolve(this.projects);
        });
    }

    getProject(id: number): Promise<IProject>{
        return new Promise((resolve, reject) => {
            resolve(this.projects.filter(p => p.id === id)[0]);
        });
    }

    createProject(project: IProject): Promise<IProject>{
        let lastId = this.projects.reduce((acc:any, p:IProject) => {
            return p.id || 0 > acc ? p.id : acc;
        }, 0);

        return new Promise((resolve, reject) => {
            project.id = ++lastId;

            this.projects.push(project);

            resolve(project);
        });
    }

    updateProject(project: IProject): Promise<IProject>{
        const existing = this.projects.filter(p => p.id === project.id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) reject('Project does not exist');

            this.projects.splice(this.projects.indexOf(existing), 1, project);

            resolve(project);
        });
    }

    deleteProject(id: number): Promise<boolean>{
        const existing = this.projects.filter(p => p.id === id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) resolve(true);

            this.projects.splice(this.projects.indexOf(existing), 1);

            resolve(true);
        });
    }


    /*
        ===============
        PRODUCT METHODS
        ===============
    */
    getProducts(): Promise<IProduct[]>{
        return new Promise((resolve, reject) => {
           resolve(this.products);
        });
    }

    getProduct(id: number): Promise<IProduct>{
        return new Promise((resolve, reject) => {
            resolve(this.products.filter(p => p.id === id)[0]);
        });
    }

    createProduct(product: IProduct): Promise<IProduct>{
        let lastId = this.products.reduce((acc:any, p:IProduct) => {
            return p.id || 0 > acc ? p.id : acc;
        }, 0);

        return new Promise((resolve, reject) => {
            product.id = ++ lastId;

            this.products.push(product);

            resolve(product);
        });
    }

    updateProduct(product: IProduct): Promise<IProduct>{
        const existing = this.products.filter(p => p.id === product.id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) reject('Product does not exist');

            this.products.splice(this.products.indexOf(existing), 1, product);

            resolve(product);
        });
    }

    deleteProduct(id: number): Promise<boolean>{
        const existing = this.products.filter(p => p.id === id)[0];

        return new Promise((resolve, reject) => {
            if(!existing) return true;

            this.products.splice(this.products.indexOf(existing), 1);

            resolve(true);
        });
    }
}

export const entityService = new EntityService();