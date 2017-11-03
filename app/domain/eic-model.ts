// Generated using typescript-generator version 1.27.339 on 2017-11-03 17:19:28.

export interface Identifiable {
    id: string;
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
    description: string;
    options: string;
    targetUsers: string;
    userValue: string;
    userBase: string;
    symbol: URL;
    multimediaURL: URL;
    provider: string[];
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
    serviceAddenda: ServiceAddenda;
}

export class ServiceAddenda implements Identifiable {
    id: string;
    perfomanceData: Measurement<any>[];
    externalHits: number;
    internalHits: number;
    favouriteCount: number;
    averageRating: number;
    ratings: number;
    published: boolean;
}

export class Vocabulary implements Identifiable {
    id: string;
    name: string;
    type: string;
    parent: string;
}

export class WrappedComparable {
}

export class Access implements Identifiable {
    id: string;
    instant: number;
    type: string;
    userID: string;
    serviceID: string;
}

export class Grant implements Identifiable {
    id: string;
    description: string;
}

export class User implements Identifiable {
    id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    joinDate: string;
    membership: { [index: string]: Grant };
    favourite: Service[];
    iterationCount: number;
    salt: any;
    resetToken: string;
}

export class Indicator implements Identifiable {
    id: string;
    description: string;
}

export class Measurement<T> implements Identifiable {
    id: string;
    indicator: string;
    from: XMLGregorianCalendar;
    to: XMLGregorianCalendar;
    value: T;
}

export class Target {
}

export class URL implements Serializable {
}

export class XMLGregorianCalendar implements Cloneable {
}

export interface Serializable {
}

export interface Cloneable {
}

