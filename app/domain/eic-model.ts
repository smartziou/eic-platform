export class JAXBComparable {
}

export class Provider {
    id: number;
    name: string;
    contactInformation: string;
    user: User[];
    service: User[];
}

export class Service {
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
    symbol: URL;
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
    termsOfUse: string;
}

export class Vocabulary {
    id: number;
    name: string;
    type: string;
    parent: string;
}

export class User {
    id: number;
    organization: Provider;
    role: Role;
    grant: Grant[];
}

export class URL implements Serializable {
}

export class XMLGregorianCalendar implements Cloneable {
}

export class Role {
    id: number;
    description: string;
}

export class Grant {
    id: number;
    description: string;
}

export interface Serializable {
}

export interface Cloneable {
}