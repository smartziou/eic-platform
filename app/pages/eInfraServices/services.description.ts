export class Description {
    desc : string;
    label : string;
    mandatory? : boolean;
    recommended? : boolean;
};
export var countriesDesc = {
    desc : "List of countries within which the service is available",
    label : "countries",
    mandatory : false,
    recommended : false
};
export var regionsDesc = {
    desc : "List of regions within which the service is available",
    label : "regions",
    mandatory : false,
    recommended : false
};
export var languagesDesc = {
    desc : "List of languages in which the service is available",
    label : "languages",
    mandatory : false,
    recommended : false
};
export var tagsDesc = {
    desc : "Field to facilitate searching based on keywords",
    label : "tags",
    mandatory : false,
    recommended : false
};
export var relatedServicesDesc = {
    desc : "Other services that are either required or commonly used with this service",
    label : "relatedServices",
    mandatory : false,
    recommended : false
};
export var termsOfUseDesc = {
    desc : "Document containing the rules, service conditions and usage policy which one must agree to abide by in order to use the service",
    label : "termsOfUse",
    mandatory : false,
    recommended : false
};