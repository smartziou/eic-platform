// Generated using typescript-generator version 1.27.339 on 2017-08-09 13:31:49.

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
    brandName: string;
    tagline: string;
    fullName: string;
    description: string;
    options: string;
    targetUsers: string;
    userValue: string;
    userBase: string;
    provider: string;
    fundingSources: string;
    webpage: URL;
    logo: URL;
    multimediaURL: URL;
    version: string;
    revisionDate: XMLGregorianCalendar;
    versionHistory: string;
    phase: string;
    technologyReadinessLevel: string;
    category: string;
    subcategory: string;
    country: string[];
    region: string[];
    language: string[];
    tag: string[];
    relatedService: string[];
    request: URL;
    helpdesk: URL;
    documentation: URL;
    trainingInformation: URL;
    feedback: URL;
    pricingModel: URL;
    serviceLevelAgreement: string;
    termOfUse: URL[];
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
    username: string;
    email: string;
    password: string;
    join_date: string;
    affiliation: string;
    isServiceProvider: boolean;
    role: Role[];
    favourite: Service[];
    confirmPassword: string;
    providerAdministrator: string;
    provider: string;
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
