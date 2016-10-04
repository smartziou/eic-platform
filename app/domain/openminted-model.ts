// Generated using typescript-generator version 1.10-SNAPSHOT on 2016-09-07 14:56:17.

export interface OMTDComponent {
    metadataHeaderInfo: MetadataHeaderInfo;
    resourceType: string;
    resourceIdentificationInfo: ResourceIdentificationInfo;
    contactInfo: ContactInfo;
    versionInfo: VersionInfo;
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    componentTypes: string[];
    distributionInfos: ComponentDistributionInfo[];
    inputContentResourceInfo: ProcessingResourceInfo;
    outputResourceInfo: ProcessingResourceInfo;
    componentDependencies: ComponentDependencies;
    componentCreationInfo: ComponentCreationInfo;
    componentEvaluationInfo: ComponentEvaluationInfo;
    componentDocumentationInfo: ComponentDocumentationInfo;
}

export interface OMTDCorpus {
    metadataHeaderInfo: MetadataHeaderInfo;
    resourceType: string;
    resourceIdentificationInfo: ResourceIdentificationInfo;
    contactInfo: ContactInfo;
    versionInfo: VersionInfo;
    validationInfos: ValidationInfo[];
    usageInfo: UsageInfo;
    resourceDocumentationInfo: ResourceDocumentationInfo;
    resourceCreationInfo: ResourceCreationInfo;
    distributionInfos: DatasetDistributionInfo[];
    corpusSubTypeSpecificInfo: CorpusSubTypeSpecificInfo;
}

export interface MetadataHeaderInfo {
    metadataRecordIdentifier: Identifier<MetadataIdentifierSchema>;
    metadataCreationDate: Date;
    metadataCreators: RelatedPerson[];
    sourceOfMetadataRecord: SourceOfMetadataRecord;
    languages: Language[];
    metadataLastUpdated: Date;
    revision: string;
}

export interface ResourceIdentificationInfo {
    resourceNames: string[];
    descriptions: string[];
    resourceShortNames: string[];
    resourceIdentifiers: Identifier<ResourceIdentifierSchema>[];
}

export interface ContactInfo {
    contactEmail: string;
    landingPage: string;
    contactPersons: RelatedPerson[];
    contactGroups: RelatedGroup[];
    mailingLists: MailingListInfo[];
}

export interface VersionInfo {
    version: string;
    revision: string;
    lastDateUpdated: DateType;
    updateFrequency: string;
}

export interface ValidationInfo {
    validated: boolean;
    validationType: ValidationType;
    validationMode: ValidationMode;
    validationModeDetails: string;
    validationExtent: ValidationExtent;
    validationExtentDetails: string;
    sizePerValidation: SizeInfo;
    validationReports: RelatedDocument[];
    validationSwComponents: RelatedResource[];
    validators: ActorInfo[];
}

export interface UsageInfo {
    foreseenUseInfos: ForeseenUseInfo[];
    actualUseInfos: ActualUseInfo[];
}

export interface ResourceDocumentationInfo {
    mustBeCitedWith: RelatedDocument;
    documentationPublications: RelatedDocument[];
    samplesLocations: string[];
}

export interface ResourceCreationInfo {
    resourceCreators: ActorInfo[];
    fundingProjects: RelatedProject[];
    creationDate: DateCombinationType;
}

export interface ComponentDistributionInfo {
    componentDistributionMedium: ComponentDistributionMedium;
    downloadURLs: string[];
    accessURLs: string[];
    mavenId: string;
    webServiceType: WebServiceType;
    operatingSystem: OperatingSystem;
    rightsInfo: RightsInfo;
    copyrightStatements: string[];
    attributionTexts: string[];
    rightsHolders: ActorInfo[];
    availabilityStartDate: Date;
    availabilityEndDate: Date;
    fee: string;
    userTypes: UserType[];
}

export interface ProcessingResourceInfo {
    resourceTypes: ResourceType[];
    mediaType: MediaType;
    languages: Language[];
    characterEncodings: CharacterEncoding[];
    dataFormats: DataFormat[];
    typeSystem: RelatedResource;
    tagSet: RelatedResource;
    annotationLevels: AnnotationLevel[];
    modalityTypes: ModalityType[];
    domains: Identifier<ClassificationScheme>[];
    textGenres: Identifier<ClassificationScheme>[];
    textTypes: Identifier<ClassificationScheme>[];
    registers: Identifier<ClassificationScheme>[];
    subjects: Identifier<ClassificationScheme>[];
    keywords: string[];
}

export interface ComponentDependencies {
    typeSystem: RelatedResource;
    tagSets: RelatedResource[];
    annotationResources: RelatedResource[];
    softwareLibraries: string[];
    requiresHardwareList: RequiresHardware[];
}

export interface ComponentCreationInfo {
    framework: Framework;
    implementationLanguages: string[];
    formalisms: string[];
    hasOriginalSources: Identifier<ResourceIdentifierSchema>[];
    creationDetails: string;
}

export interface ComponentEvaluationInfo {
    evaluated: boolean;
    evaluationLevels: EvaluationLevel[];
    evaluationTypes: EvaluationType[];
    evaluationCriteria: EvaluationCriterion[];
    evaluationMeasures: EvaluationMeasure[];
    evaluationReports: RelatedDocument[];
    evaluationSwComponents: RelatedResource[];
    evaluationDetails: string;
    evaluators: ActorInfo[];
}

export interface ComponentDocumentationInfo {
    onLineHelpURL: string;
    hasManual: RelatedDocument;
    issueTracker: string;
}

export interface DatasetDistributionInfo {
    distributionMediums: DistributionMedium[];
    downloadURLs: string[];
    accessURLs: string[];
    textFormats: TextFormatInfo[];
    characterEncodings: CharacterEncodingInfo[];
    sizes: SizeInfo[];
    rightsInfo: RightsInfo;
    copyrightStatements: string[];
    attributionTexts: string[];
    rightsHolders: ActorInfo[];
    availabilityStartDate: Date;
    availabilityEndDate: Date;
    fee: string;
    userTypes: UserType[];
}

export interface CorpusSubTypeSpecificInfo {
    corpusSubtype: string;
}

export interface Identifier<T> {
    schema: T;
    id: string;
    url: string;
}

export interface RelatedPerson {
    personNames: string[];
    personIdentifiers: Identifier<PersonIdentifierSchema>[];
}

export interface SourceOfMetadataRecord {
    collectedFrom: RelatedRepository;
    sourceMetadataLink: string;
    relatedMetadataScheme: string;
    originalDataProviderInfo: OriginalDataProviderInfo;
}

export interface Language {
    languageTag: string;
    languageId: string;
    scriptId: string;
    regionId: string;
    variantId: string;
}

export interface RelatedGroup {
    groupNames: string[];
    relatedOrganization: RelatedOrganization;
}

export interface MailingListInfo {
    mailingListName: string;
    subscribe: string;
    unSubscribe: string;
    post: string;
    archive: string;
    otherArchives: string[];
}

export interface DateType {
    day: number;
    month: number;
    year: number;
}

export interface SizeInfo {
    size: string;
    sizeUnit: SizeUnit;
}

export interface RelatedDocument {
    documentUnstructured: string;
    publicationIdentifiers: Identifier<PublicationIdentifierSchema>[];
}

export interface RelatedResource {
    resourceIdentifiers: Identifier<ResourceIdentifierSchema>[];
    resourceNames: string[];
}

export interface ActorInfo {
    relatedPerson: RelatedPerson;
    relatedOrganization: RelatedOrganization;
}

export interface ForeseenUseInfo {
    foreseenUse: ForeseenUse;
    useNlpApplications: string[];
}

export interface ActualUseInfo {
    actualUse: ActualUse;
    useNlpApplications: string[];
    usageReports: RelatedDocument[];
    derivedResources: RelatedResource[];
    usageProjects: RelatedProject[];
    actualUseDetails: string;
}

export interface RelatedProject {
    projectNames: string[];
    projectIdentifiers: ProjectIdentifier[];
}

export interface DateCombinationType {
    date: DateType;
    dateRangeType: DateRangeType;
}

export interface RightsInfo {
    licenseInfos: LicenseInfo[];
    rightsStatementInfo: RightsStatementInfo;
}

export interface CharacterEncoding {
    characterEncoding: string;
}

export interface DataFormat {
    mimeType: MimeType;
    dataFormatSpecific: string;
    documentationURL: string;
}

export interface AnnotationLevel {
    annotationLevel: string;
}

export interface TextFormatInfo {
    mimeType: MimeType;
    sizeInfo: SizeInfo;
}

export interface CharacterEncodingInfo {
    characterEncoding: CharacterEncoding;
    sizePerCharacterEncoding: SizeInfo;
}

export interface RelatedRepository {
    repositoryNames: string[];
    repositoryIdentifiers: Identifier<RepositoryIdentifierSchema>[];
}

export interface OriginalDataProviderInfo {
    originalDataProviderType: OriginalDataProviderType;
    relatedRepository: RelatedRepository;
    relatedJournal: RelatedJournal;
    relatedOrganization: RelatedOrganization;
}

export interface RelatedOrganization {
    organizationNames: string[];
    organizationIdentifiers: Identifier<OrganizationIdentifierSchema>[];
}

export interface ProjectIdentifier {
    id: string;
    schema: string;
    url: string;
}

export interface DateRangeType {
    startDate: DateType;
    endDate: DateType;
}

export interface LicenseInfo {
    license: License;
    version: Version;
    nonStandardLicenceNames: string[];
    nonStandardLicenceTermsURL: string;
    nonStandaradLicenceTermsTexts: string[];
    conditionsOfUseList: ConditionsOfUse[];
}

export interface RightsStatementInfo {
    rightsStatementName: RightsStatementName;
    rightsStatementURL: string;
}

export interface MimeType {
    mimeType: string;
}

export interface RelatedJournal {
    journalTitles: string[];
    journalIdentifiers: Identifier<JournalIdentifierSchema>[];
}

export type MetadataIdentifierSchema = "HDL" | "PURL" | "URL" | "URN" | "OTHER";

export type ResourceIdentifierSchema = "DOI" | "ISLRN" | "HDL" | "ARK" | "ARXIV" | "BIBCODE" | "EAN13" | "EISSN" | "ISBN" | "ISSN" | "ISTC" | "LISSN" | "LSID" | "PURL" | "UPC" | "URL" | "URN" | "FCT" | "OAI" | "PMC" | "PMID" | "OTHER";

export type ValidationType = "FORMAL" | "CONTENT";

export type ValidationMode = "MANUAL" | "AUTOMATIC" | "MIXED" | "INTERACTIVE";

export type ValidationExtent = "FORMAL" | "CONTENT";

export type ComponentDistributionMedium = "WEB_SERVICE" | "SOURCE_CODE" | "EXECUTABLE_CODE";

export type WebServiceType = "SOAP" | "REST" | "OTHER";

export type OperatingSystem = "OS_INDEPENDENT" | "WINDOWS" | "LINUX" | "UNIX" | "MAC_OS" | "GOOGLE_CHROME_OS" | "IOS" | "ANDROID" | "OTHER";

export type UserType = "ACADEMIC" | "COMMERCIAL" | "MEMBERS_OF_GROUP";

export type ResourceType = "CORPUS" | "DOCUMENT" | "USER_INPUT_TEXT" | "LEXICAL_CONCEPTUAL_RESOURCE" | "LANGUAGE_DESCRIPTION";

export type MediaType = "TEXT" | "AUDIO" | "VIDEO" | "IMAGE" | "TEXT_NUMERICAL";

export type ModalityType = "BODY_GESTURE" | "FACIAL_EXPRESSION" | "VOICE" | "COMBINATION_OF_MODALITIES" | "SIGN_LANGUAGE" | "SPOKEN_LANGUAGE" | "WRITTEN_LANGUAGE" | "OTHER";

export type ClassificationScheme = "DDC" | "UDC" | "EURO_VOC" | "LCSH" | "DK_5" | "MESH" | "ANC_CLASSIFICATION" | "BNC_CLASSIFICATION" | "NLK_CLASSIFICATION" | "PAROLE_TOPIC_CLASSIFICATION" | "PAROLE_GENRE_CLASSIFICATION" | "OTHER";

export type RequiresHardware = "GRAPHIC_CARD" | "MICROPHONE" | "ORC_SYSTEM" | "SPECIAL_HARDWARE_EQUIPMENT" | "NONE" | "OTHER";

export type Framework = "UIMA" | "GATE" | "OTHER";

export type EvaluationLevel = "TECHNOLOGICAL" | "USAGE" | "IMPACT" | "DIAGNOSTIC";

export type EvaluationType = "GLASS_BOX" | "BLACK_BOX";

export type EvaluationCriterion = "EXTRINSIC" | "INTRINSIC";

export type EvaluationMeasure = "HUMAN" | "AUTOMATIC";

export type DistributionMedium = "WEB_EXECUTABLE" | "PAPER_COPY" | "HARD_DISK" | "BLU_RAY" | "DVD_R" | "CD_ROM" | "DOWNLOADABLE" | "ACCESSIBLE_THROUGH_INTERFACE" | "OTHER";

export type PersonIdentifierSchema = "ORCID" | "ISNI" | "RESEARCHER_ID" | "SCOPUS_ID" | "OTHER";

export type SizeUnit = "TERMS" | "ENTRIES" | "TURNS" | "UTTERANCES" | "ARTICLES" | "FILES" | "ITEMS" | "SECONDS" | "ELEMENTS" | "UNITS" | "MINUTES" | "HOURS" | "TEXTS" | "SENTENCES" | "BYTES" | "TOKENS" | "WORDS" | "KEYWORDS" | "IDIOMATIC_EXPRESSIONS" | "TRIPLES" | "NEOLOGISMS" | "MULTI_WORD_UNITS" | "EXPRESSIONS" | "SYNSETS" | "CLASSES" | "CONCEPTS" | "LEXICAL_TYPES" | "PHONETIC_UNITS" | "SYNTACTIC_UNITS" | "SEMANTIC_UNITS" | "PREDICATES" | "PHONEMES" | "DIPHONES" | "T_H_PAIRS" | "SYLLABLES" | "FRAMES" | "IMAGES" | "KB" | "MB" | "GB" | "RB" | "SHOTS" | "UNIGRAMS" | "BIGRAMS" | "TRIGRAMS" | "FOUR_GRAMS" | "FIVE_GRAMS" | "RULES" | "QUESTIONS" | "OTHER";

export type PublicationIdentifierSchema = "DOI" | "HDL" | "ARK" | "ARXIV" | "BIBCODE" | "EAN13" | "EISSN" | "ISBN" | "ISSN" | "ISTC" | "LISSN" | "LSID" | "PURL" | "UPC" | "URL" | "URN" | "FCT" | "OAI" | "PMC" | "PMID" | "OTHER";

export type ForeseenUse = "HUMAN_USE" | "NLP_APPLICATIONS";

export type ActualUse = "HUMAN_USE" | "NLP_APPLICATIONS";

export type RepositoryIdentifierSchema = "DOI" | "HDL" | "URL" | "OAI" | "OPENDOAR" | "RE3D" | "ROAR" | "OTHER";

export type OriginalDataProviderType = "REPOSITORY" | "JOURNAL" | "PUBLISHER";

export type OrganizationIdentifierSchema = "ISNI" | "FUNDREF" | "OTHER";

export type License = "CC_BY" | "CC_BY_NC" | "CC_BY_NC_ND" | "CC_BY_NC_SA" | "CC_BY_ND" | "CC_BY_SA" | "CC_ZERO" | "PDDL" | "ODC_BY" | "ODBL" | "MS_NORED" | "MS_NORED_FF" | "MS_NORED_ND" | "MS_NORED_ND_FF" | "MS_NC_NORED" | "MS_NC_NORED_FF" | "MS_NC_NORED_ND" | "MS_NC_NORED_ND_FF" | "ELRA_END_USER" | "ELRA_EVALUATION" | "ELRA_VAR" | "CLARIN_PUB" | "CLARIN_ACA" | "CLARIN_ACA_NC" | "CLARIN_RES" | "AGPL" | "APACHE_LICENSE_2_0" | "BSD_4_CLAUSE" | "BSD_3_CLAUSE" | "FREE_BSD" | "GFDL" | "GPL" | "LGPL" | "MIT" | "PRONCETON_WORDNET" | "PROPRIETARY" | "UNDER_NEGOTIATION" | "NON_STANDARD_LICENSE_TERMS";

export type Version = "ONE" | "TWO" | "THREE" | "FOUR";

export type ConditionsOfUse = "ATTRIBUTION" | "NON_COMMERCIAL_USE" | "COMMERCIAL_USE" | "SHARE_ALIKE" | "NO_DERIVATIVE" | "NO_REDISTRIBUTION" | "EVALUATION_USE" | "RESEARCH" | "LANGUAGE_ENGINEERING_RESEARCH" | "EDUCATION" | "INFORM_LICENSOR" | "REDEPOSIT" | "COMPENSATE" | "PERSONAL_DATA_INCLUDED" | "SENSITIVE_DATA_INCLUDED" | "REQUEST_PLAN" | "SPATIAL_CONSTRAINT" | "USER_IDENTIFIED" | "ACADEMIC_USERS" | "COMMERCIAL_USERS" | "MEMBERS_OF_GROUP" | "OTHER";

export type RightsStatementName = "OPEN_ACCESS" | "CLOSED_ACCESS" | "EMBARGOED_ACCESS" | "RESTRICTED_ACCESS";

export type JournalIdentifierSchema = "DOI" | "HDL" | "ISSN" | "OTHER";
