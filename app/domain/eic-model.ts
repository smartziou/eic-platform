// Generated using typescript-generator version 1.27.339 on 2017-09-26 17:14:53.

export class Access implements Identifiable {
    id: string;
    instant: number;
    type: string;
    userID: string;
    serviceID: string;
}

export interface Identifiable {
    id: string;
}

export class JAXBComparable {
}

export class Provider implements Identifiable {
    id: string;
    name: string;
    contactInformation: string;
    user: User[];
    service: User[];
}

export class Service implements Identifiable {
    id: string;
    url: URL;
    name: string;
    tagline: string;
    fullName: string;
    description: string;
    options: string;
    targetUsers: string;
    userValue: string;
    userBase: string;
    symbol: URL;
    multimediaURL: URL;
    provider: string;
    providerDescription: string;
    version: string;
    lastUpdate: XMLGregorianCalendar;
    changeLog: string;
    validFor: XMLGregorianCalendar;
    lifeCycleStatus: string;
    trl: string;
    category: string;
    subcategory: string;
    place: string[];
    language: string[];
    tag: string[];
    requiredService: string[];
    relatedService: string[];
    request: URL;
    helpdesk: URL;
    userManual: URL;
    trainingInformation: URL;
    feedback: URL;
    price: URL;
    serviceLevelAgreement: URL;
    termOfUse: URL[];
    funding: string;
    externalHits: number;
    internalHits: number;
    favouriteCount: number;
    averageRating: number;
    ratings: number;
    isPublic: boolean;
}

export class Vocabulary implements Identifiable {
    id: string;
    name: string;
    type: string;
    parent: string;
}

export class User implements Identifiable {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    joinDate: string;
    affiliation: string;
    isServiceProvider: boolean;
    role: Role[];
    favourite: Service[];
    providerAdministrator: boolean;
    provider: string;
    iterationCount: number;
    salt: any;
    resetToken: string;
}

export class URL implements Serializable {
}

export class XMLGregorianCalendar implements Cloneable {
}

export class Role {
    id: number;
    description: string;
}

export interface Serializable {
}

export interface Cloneable {
}
