// Generated using typescript-generator version 1.27.339 on 2017-11-14 17:15:27.
export class Access implements Identifiable {
    id: string;
    instant: number;
    serviceID: string;
    type: string;
    userID: string;
}

export class Dimension {
}

export class Grant implements Identifiable {
    description: string;
    id: string;
}

export interface Identifiable {
}

export class Indicator implements Identifiable {
    description: string;
    dimensions: Dimension[];
    id: string;
    unit: Unit;
}

export class Measurement<T> implements Identifiable {
    id: string;
    indicator: Indicator;
    location: string[];
    time: XMLGregorianCalendar;
    value: any;
}

export class Membership implements Identifiable {
    grant: Grant;
    id: string;
    provider: Provider;
    user: User;
}

export class Provider implements Identifiable {
    contactInformation: string;
    id: string;
    name: string;
    service: User[];
    user: User[];
}

export class Service implements Identifiable {
    category: string;
    changeLog: string;
    description: string;
    feedback: URL;
    funding: string;
    helpdesk: URL;
    id: string;
    language: string[];
    lastUpdate: XMLGregorianCalendar;
    lifeCycleStatus: string;
    multimediaURL: URL;
    name: string;
    options: string;
    place: string[];
    price: URL;
    provider: string[];
    relatedService: string[];
    request: URL;
    requiredService: string[];
    serviceAddenda: ServiceAddenda;
    serviceLevelAgreement: URL;
    subcategory: string;
    symbol: URL;
    tag: string[];
    tagline: string;
    targetUsers: string;
    termOfUse: URL[];
    trainingInformation: URL;
    trl: string;
    url: URL;
    userBase: string;
    userManual: URL;
    userValue: string;
    validFor: XMLGregorianCalendar;
    version: string;
}

export class ServiceAddenda implements Identifiable {
    averageRating: number;
    externalHits: number;
    favouriteCount: number;
    id: string;
    internalHits: number;
    perfomanceData: Measurement<any>[];
    published: boolean;
    ratings: number;
}

export class Unit {
}

export class User implements Identifiable {
    email: string;
    favourite: Service[];
    id: string;
    iterationCount: number;
    joinDate: string;
    membership: Membership[];
    name: string;
    password: string;
    resetToken: string;
    salt: any;
    surname: string;
}

export class Vocabulary implements Identifiable {
    id: string;
    name: string;
    parent: string;
    type: string;
}

export class XMLGregorianCalendar implements Cloneable {
}

export class URL implements Serializable {
}

export interface Cloneable {
}

export interface Serializable {
}
