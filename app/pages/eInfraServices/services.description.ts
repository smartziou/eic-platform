export class Description {
    desc: string;
    label: string;
    mandatory?: boolean;
    recommended?: boolean;
}
export const placesDesc = {
    desc: "List of countries within which the service is available",
    label: "places",
    mandatory: true,
    recommended: false
};
// export const regionsDesc = {
//     desc: "List of regions within which the service is available",
//     label: "regions",
//     mandatory: false,
//     recommended: false
// };
export const languagesDesc = {
    desc: "List of languages in which the service is available",
    label: "languages",
    mandatory: true,
    recommended: false
};
export const tagsDesc = {
    desc: "Field to facilitate searching based on keywords",
    label: "tags",
    mandatory: true,
    recommended: false
};
export const relatedServicesDesc = {
    desc: "Other services that are either required or commonly used with this service",
    label: "related Services",
    mandatory: false,
    recommended: false
};
export const termsOfUseDesc = {
    desc: "Document containing the rules, service conditions and usage policy which one must agree to abide by in order to use the service",
    label: "terms Of Use",
    mandatory: false,
    recommended: false
};
export const nameDesc = {
    desc: "Brief marketing name of service as assigned by the service provider. Should be descriptive from a customer point of view, and should be quite simple, such that someone non-technical is able to understand what the service is about",
    label: "name",
    mandatory: true,
    recommended: false
};
export const fullNameDesc = {
    desc: "Extended name of service as assigned by the service provider",
    label: "full Name",
    mandatory: false,
    recommended: false
};
export const descriptionDesc = {
    desc: "High-level description of what the service does in terms of functionality it provides and the resources it enables access to. Should be similar to the name described above, and should cover the value provided by the service, in fairly non-technical terms. These descriptions may seem obvious but help everyone within the organization understand the service, and also will be needed for the Service Catalogue, which will be shown to users and customers. It may provide also information related to the offered capacity, number of installations, underlying data that is offered",
    label: "description",
    mandatory: true,
    recommended: false
};
export const optionsDesc = {
    desc: "A choice of utility and warranty that the customer can/should specify when commissioning the service",
    label: "options",
    mandatory: false,
    recommended: false
};
export const targetUsersDesc = {
    desc: "Type of users or end-users allowed to commission/benefit from the service",
    label: "target Users",
    mandatory: false,
    recommended: false
};
export const userValueDesc = {
    desc: "The benefit to a customer and their users delivered by the service. Benefits are usually related to alleviating pains (e.g., eliminate undesired outcomes, obstacles or risks) or producing gains (e.g. increased performance, social gains, positive emotions or cost saving)",
    label: "user Value",
    mandatory: false,
    recommended: false
};
export const userBaseDesc = {
    desc: "List of customers, communities, etc using the service",
    label: "user Base",
    mandatory: false,
    recommended: false
};
export const providerDesc = {
    desc: "Organisation that manages and delivers the service and with whom the customer signs the SLA",
    label: "provider",
    mandatory: true,
    recommended: false
};
export const fundingSourcesDesc = {
    desc: "Sources of funding for the development and operation of the service",
    label: "funding Sources",
    mandatory: false,
    recommended: false
};
export const urlDesc = {
    desc: "Link to a url providing information about the service. This url is usually hosted and maintained by the service provider. It contains fresh and additional information, such as what APIs are supported or links to the documentation",
    label: "url",
    mandatory: false,
    recommended: false
};
export const symbolDesc = {
    desc: "Link to a visual representation for the service. If none exists, providers are urged to use the organization's symbol",
    label: "symbol",
    mandatory: false,
    recommended: false
};
export const multimediaURLDesc = {
    desc: "Link to a page containing multimedia regarding the service",
    label: "multimedia URL",
    mandatory: false,
    recommended: false
};
export const versionDesc = {
    desc: "Informs about the implementation of the service that is in force as well as about its previous implementations, if any",
    label: "version",
    mandatory: false,
    recommended: false
};
export const lastUpdateDesc = {
    desc: "The date of the latest update",
    label: "revision Date",
    mandatory: false,
    recommended: false
};
export const changeLogDesc = {
    desc: "A list of the service features added in the latest version",
    label: "version History",
    mandatory: false,
    recommended: false
};
export const lifeCycleStatusDesc = {
    desc: "Is used to tag the service to the full service cycle: e.g., discovery, alpha (prototype available for closed set of users), beta (service being developed while available for testing publicly), production, retired (not anymore offered)",
    label: "lifeCycleStatus",
    mandatory: true,
    recommended: false
};
export const trlDesc = {
    desc: "Is used to tag the service to the Technology Readiness Level",
    label: "trl",
    mandatory: true,
    recommended: false
};
export const categoryDesc = {
    desc: "A named group of services that offer access to the same type of resource. These are external ones that are of interest to a customer",
    label: "category",
    mandatory: true,
    recommended: false
};
export const subcategoryDesc = {
    desc: "Type of service within a category",
    label: "subcategory",
    mandatory: true,
    recommended: false
};
export const requestDesc = {
    desc: "Link to request the service from the service provider",
    label: "request",
    mandatory: true,
    recommended: false
};
export const helpdeskDesc = {
    desc: "Link with contact to ask more information from the service provider about this service. A contact person or helpdesk within the organization must be assigned for communications, questions and issues relating to the service",
    label: "helpdesk",
    mandatory: false,
    recommended: false
};
export const userManualDesc = {
    desc: "Link to user manual and documentation",
    label: "user Manual",
    mandatory: false,
    recommended: false
};
export const trainingInformationDesc = {
    desc: "Link to training information",
    label: "Training",
    mandatory: false,
    recommended: false
};
export const feedbackDesc = {
    desc: "Link to page where customers can provide feedback on the service",
    label: "feedback",
    mandatory: false,
    recommended: false
};
export const priceDesc = {
    desc: "Supported payment models that apply. List of sentences each of them stating the type of payment model and the restriction that applies to it",
    label: "price",
    mandatory: true,
    recommended: false
};
export const serviceLevelAgreementDesc = {
    desc: "Document containing information about the levels of performance that a service provider is expected to achieve. Current service agreements (SLAs) available for the service or basis for a new SLA. These should be agreements with users (not providers)",
    label: "SLA",
    mandatory: false,
    recommended: false
};