export class MyString  {
    value : string;
    lang : string;
    desc:string;
    label:string;
}

MyString.prototype.desc="Base type for multilingual elements";

export class Abstract extends MyString {
    desc:string;
    label:string;
}

Abstract.prototype.desc="The abstract of the document in plain text format; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
Abstract.prototype.label="Abstract";

export class ActorInfo  {
    relatedPerson : RelatedPerson;
    relatedOrganization : RelatedOrganization;
    desc:string;
    label:string;
}

export class ActualUseInfo  {
    actualUse : ActualUseEnum;
    useNlpApplications : UseNLPSpecificEnum[];
    usageReports : RelatedDocumentInfo[];
    derivedResources : RelatedResource[];
    usageProjects : RelatedProject[];
    actualUseDetails : string;
    desc:string;
    label:string;
}

ActualUseInfo.prototype.desc="Groups information on how the resource has already been used";
ActualUseInfo.prototype.label="Actual use";

export class Affiliation  {
    position : string;
    affiliatedOrganization : RelatedOrganization;
    desc:string;
    label:string;
}

Affiliation.prototype.desc="Groups information on organization to whom the person is affiliated";
Affiliation.prototype.label="Affiliation";

export class AnnotatedCorpusInfo  {
    corpusSubtype : any;
    corpusMediaParts : CorpusMediaParts;
    desc:string;
    label:string;
}

AnnotatedCorpusInfo.prototype.desc="Groups together information on annotated corpora of all media types";
AnnotatedCorpusInfo.prototype.label="Annotated corpus";

export class AnnotatedDocumentInfo  {
    rawPublication : RelatedDocumentInfo;
    annotationInfo : AnnotationInfo;
    desc:string;
    label:string;
}

export class AnnotationInfo  {
    annotationLevel : AnnotationLevelEnum;
    annotationStandoff : boolean;
    dataFormat : DataFormat;
    typesystem : RelatedResource;
    tagset : RelatedResource;
    theoreticModel : string;
    guidelinesDocumentedIn : RelatedDocumentInfo[];
    annotationMode : ProcessMode;
    annotationModeDetails : string;
    isAnnotatedBy : RelatedResource[];
    annotationDate : DateCombination;
    sizePerAnnotation : SizeInfo;
    interannotatorAgreement : string;
    intraannotatorAgreement : string;
    annotators : ActorInfo[];
    desc:string;
    label:string;
}

AnnotationInfo.prototype.desc="Groups information on the annotated part(s) of a resource";
AnnotationInfo.prototype.label="Annotation";

export class AnnotationsInfo  {
    corpusSubtype : any;
    rawCorpus : RelatedResource;
    annotationInfo : AnnotationInfo;
    desc:string;
    label:string;
}

AnnotationsInfo.prototype.desc="Groups together information on annotations";
AnnotationsInfo.prototype.label="Annotations";

export class AttributionText extends MyString {
    desc:string;
    label:string;
}

AttributionText.prototype.desc="The text that must be quoted for attribution purposes when using a resource - for cases where a resource is provided with a restriction on attribution; you can use a standard text such as \"Resource A by Resource Creator/Owner B used under licence C as accessed at D\"";
AttributionText.prototype.label="Attribution text";

export class Browsing  {
    total : number;
    from : number;
    to : number;
    results : Result;
    facets : Facet[];
    desc:string;
    label:string;
}

export class CharacterEncodingInfo  {
    characterEncoding : CharacterEncodingEnum;
    sizePerCharacterEncoding : SizeInfo;
    desc:string;
    label:string;
}

CharacterEncodingInfo.prototype.desc="Groups together information on character encoding of the resource";
CharacterEncodingInfo.prototype.label="Character encoding";

export class CommunicationInfo  {
    emails : string[];
    homepages : string[];
    postalAddress : PostalAddress;
    telephoneNumbers : string[];
    faxNumbers : string[];
    desc:string;
    label:string;
}

CommunicationInfo.prototype.desc="Groups information on communication details of a person or an organization";
CommunicationInfo.prototype.label="Communication";

export class OMTDComponent  {
    metadataHeaderInfo : MetadataHeaderInfo;
    componentInfo : ComponentInfo;
    desc:string;
    label:string;
}

export class ComponentCreationInfo  {
    framework : FrameworkEnum;
    implementationLanguage : string[];
    formalism : string[];
    hasOriginalSource : ResourceIdentifier[];
    creationDetails : string;
    desc:string;
    label:string;
}

ComponentCreationInfo.prototype.desc="Groups together information on the creation of a component";
ComponentCreationInfo.prototype.label="OMTDComponent creation";

export class ComponentDependencies  {
    typesystem : RelatedResource;
    tagsets : RelatedResource[];
    annotationResources : RelatedResource[];
    softwareLibraries : string[];
    requiresHardware : RequiresHardwareEnum[];
    desc:string;
    label:string;
}

export class ComponentDistributionInfo  {
    componentDistributionMedium : ComponentDistributionMediumEnum;
    downloadURLs : string[];
    accessURLs : string[];
    mavenID : any;
    webServiceType : WebServiceTypeEnum;
    operatingSystem : OperatingSystemEnum[];
    rightsInfo : RightsInfo;
    copyrightStatements : CopyrightStatement[];
    attributionTexts : AttributionText[];
    rightsHolders : ActorInfo[];
    availabilityStartDate : Date;
    availabilityEndDate : Date;
    fee : string;
    userTypes : UserTypeEnum[];
    desc:string;
    label:string;
}

ComponentDistributionInfo.prototype.desc="Groups information on the distribution of a component (software code, executable programme, web service/workflow)";
ComponentDistributionInfo.prototype.label="Document distribution";

export class ComponentDocumentationInfo  {
    onLineHelpURL : string;
    hasManual : RelatedDocumentInfo;
    issueTracker : string;
    desc:string;
    label:string;
}

ComponentDocumentationInfo.prototype.desc="Groups together information on the documentation of a component";
ComponentDocumentationInfo.prototype.label="OMTDComponent documentation";

export class ComponentEvaluationInfo  {
    evaluated : boolean;
    evaluationLevels : EvaluationLevelEnum[];
    evaluationTypes : EvaluationTypeEnum[];
    evaluationCriteria : EvaluationCriterionEnum[];
    evaluationMeasures : EvaluationMeasureEnum[];
    evaluationReports : RelatedDocumentInfo[];
    evaluationSwComponents : RelatedResource[];
    evaluationDetails : string;
    evaluators : ActorInfo[];
    desc:string;
    label:string;
}

ComponentEvaluationInfo.prototype.desc="Groups together information on the evaluation status of a component";
ComponentEvaluationInfo.prototype.label="OMTDComponent evaluation";

export class ComponentInfo  {
    resourceType : string;
    identificationInfo : IdentificationInfo;
    contactInfo : ContactInfo;
    versionInfo : VersionInfo;
    validationInfos : ValidationInfo[];
    usageInfo : UsageInfo;
    resourceDocumentationInfo : ResourceDocumentationInfo;
    resourceCreationInfo : ResourceCreationInfo;
    componentTypes : ComponentTypeEnum[];
    distributionInfos : ComponentDistributionInfo[];
    inputContentResourceInfo : ProcessingResourceInfo;
    outputResourceInfo : ProcessingResourceInfo;
    componentDependencies : ComponentDependencies;
    componentCreationInfo : ComponentCreationInfo;
    componentEvaluationInfo : ComponentEvaluationInfo;
    componentDocumentationInfo : ComponentDocumentationInfo;
    desc:string;
    label:string;
}

ComponentInfo.prototype.desc="Groups together all information related to software components";
ComponentInfo.prototype.label="OMTDComponent";

export class ComponentOperationInfo  {
    runningEnvironmentInfo : RunningEnvironmentInfo;
    runningTime : string;
    desc:string;
    label:string;
}

ComponentOperationInfo.prototype.desc="Groups together information on the operation of a component";
ComponentOperationInfo.prototype.label="OMTDComponent operation";

export class ContactInfo  {
    contactEmail : string;
    landingPage : string;
    contactPersons : RelatedPerson[];
    contactGroups : RelatedGroup[];
    mailingLists : MailingListInfo[];
    desc:string;
    label:string;
}

ContactInfo.prototype.desc="Groups information on the possible sources for obtaining further information regarding the resource; at least a general email address or a landing page (website) must be supplied, although the recommended practice is to describe a contact person/group";
ContactInfo.prototype.label="Contact";

export class Contributor  {
    relatedPerson : RelatedPerson;
    relatedOrganization : RelatedOrganization;
    desc:string;
    label:string;
}

Contributor.prototype.desc="The identifier of the contributor, preferrably in the format: surname, initials (first name) prefix or the unique identifier of the author";
Contributor.prototype.label="Contributor";

export class CopyrightStatement extends MyString {
    desc:string;
    label:string;
}

CopyrightStatement.prototype.desc="A free text statement that may be included with the resource, usually containing the name(s) of copyright holders and licensing terms (intended for resources that already have such a statement); the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
CopyrightStatement.prototype.label="Copyright statement";

export class OMTDCorpus  {
    metadataHeaderInfo : MetadataHeaderInfo;
    corpusInfo : CorpusInfo;
    desc:string;
    label:string;
}

export class CorpusInfo  {
    resourceType : string;
    identificationInfo : IdentificationInfo;
    contactInfo : ContactInfo;
    versionInfo : VersionInfo;
    validationInfos : ValidationInfo[];
    usageInfo : UsageInfo;
    resourceDocumentationInfo : ResourceDocumentationInfo;
    resourceCreationInfo : ResourceCreationInfo;
    distributionInfos : DatasetDistributionInfo[];
    corpusSubtypeSpecificInfo : CorpusSubtypeSpecificInfo;
    desc:string;
    label:string;
}

CorpusInfo.prototype.desc="Groups together all information related to corpora";
CorpusInfo.prototype.label="OMTDCorpus";

export class CorpusMediaParts  {
    corpusTextParts : CorpusTextPartInfo[];
    annotations : AnnotationInfo[];
    desc:string;
    label:string;
}

CorpusMediaParts.prototype.desc="Used to specify the media type specific to corpora and group together the relevant information";
CorpusMediaParts.prototype.label="Media type parts of corpus";

export class CorpusMediaPartsType  {
    corpusTextParts : CorpusTextPartInfo[];
    desc:string;
    label:string;
}

CorpusMediaPartsType.prototype.desc="Used to specify the media type specific to corpora and group together the relevant information";
CorpusMediaPartsType.prototype.label="Media type component of corpus";

export class CorpusSubtypeSpecificInfo  {
    annotatedCorpusInfo : AnnotatedCorpusInfo;
    rawCorpusInfo : RawCorpusInfo;
    annotationsInfo : AnnotationsInfo;
    desc:string;
    label:string;
}

export class CorpusTextPartInfo  {
    mediaType : string;
    lingualityInfo : LingualityInfo;
    languages : LanguageInfo[];
    modalities : ModalityInfo[];
    sizes : SizeInfo[];
    textFormats : TextFormatInfo[];
    characterEncodings : CharacterEncodingInfo[];
    domains : DomainInfoType[];
    textClassifications : TextClassificationInfo[];
    timeClassifications : TimeCoverageInfo[];
    geographicClassifications : GeographicCoverageInfo[];
    creationInfo : CreationInfo;
    desc:string;
    label:string;
}

CorpusTextPartInfo.prototype.desc="Groups together information on the text component of a resource";
CorpusTextPartInfo.prototype.label="OMTDCorpus text part";

export class CreationInfo  {
    originalSources : RelatedResource[];
    creationMode : ProcessMode;
    creationModeDetails : string;
    creationSwComponents : RelatedResource[];
    desc:string;
    label:string;
}

CreationInfo.prototype.desc="Groups together information on the resource creation (e.g. for corpora, selection of texts/audio files/ video files etc.; for lexica, construction of lemma list etc.)";
CreationInfo.prototype.label="Creation";

export class DataFormat  {
    mimeType : MimeTypeEnum;
    dataFormatSpecific : DataFormatSpecificEnum;
    documentationURL : string;
    desc:string;
    label:string;
}

DataFormat.prototype.desc="Specifies the format that is used since often the mime type will not be sufficient for machine processing; NOTE: normally the format should be represented as a combination of the mimetype (e.g. application/xml) and some name and link to the documentation about the supplementary conventions used (e.g xces, alvisED etc.)";
DataFormat.prototype.label="Data format";

export class DatasetDistributionInfo  {
    distributionMediums : DistributionMediumEnum[];
    downloadURLs : string[];
    accessURLs : string[];
    textFormats : TextFormatInfo[];
    characterEncodings : CharacterEncodingInfo[];
    sizes : SizeInfo[];
    rightsInfo : RightsInfo;
    copyrightStatements : CopyrightStatement[];
    attributionTexts : AttributionText[];
    rightsHolders : ActorInfo[];
    availabilityStartDate : Date;
    availabilityEndDate : Date;
    fee : string;
    userTypes : UserTypeEnum[];
    desc:string;
    label:string;
}

DatasetDistributionInfo.prototype.desc="Groups information on the distribution of a dataset resource (multiple files)";
DatasetDistributionInfo.prototype.label="Document distribution";

export class Date  {
    day : number;
    month : number;
    year : number;
    desc:string;
    label:string;
}

Date.prototype.desc="Basic format for dates, with optional day and month and obligatory year";
Date.prototype.label="Date";

export class DateCombination  {
    date : Date;
    dateRange : DateRange;
    desc:string;
    label:string;
}

export class DateRange  {
    startDate : Date;
    endDate : Date;
    desc:string;
    label:string;
}

DateRange.prototype.desc="Basic format for date ranges, allowing combinations of years and full dates";
DateRange.prototype.label="Date range";

export class DepartmentName extends MyString {
    nameType : NameTypeEnum;
    desc:string;
    label:string;
}

DepartmentName.prototype.desc="The name of the department or unit (e.g. specific university faculty/department, department/unit of a research organization or private company etc.)";
DepartmentName.prototype.label="Department name";

export class Description extends MyString {
    desc:string;
    label:string;
}

Description.prototype.desc="Provides the description of the resource in prose; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
Description.prototype.label="Description";

export class Document  {
    publication : DocumentInfo;
    annotatedPublication : AnnotatedDocumentInfo;
    desc:string;
    label:string;
}

Document.prototype.desc="Root element for documents (single files); choice among raw publications and annotated publications";
export class DocumentDistributionInfo  {
    distributionMediums : DistributionMediumEnum[];
    downloadURLs : string[];
    accessURLs : string[];
    fullText : FullText;
    mimeTypes : MimeTypeEnum[];
    characterEncodings : CharacterEncodingEnum[];
    sizes : SizeInfo[];
    rightsInfo : any[];
    copyrightStatements : CopyrightStatement[];
    attributionTexts : AttributionText[];
    rightsHolders : ActorInfo[];
    availabilityStartDate : Date;
    availabilityEndDate : Date;
    fee : string;
    userTypes : UserTypeEnum[];
    desc:string;
    label:string;
}

DocumentDistributionInfo.prototype.desc="Groups information on the distribution of a document (single file)";
DocumentDistributionInfo.prototype.label="Document distribution";

export class DocumentInfo  {
    documentType : DocumentTypeEnum;
    publicationType : PublicationTypeEnum;
    identifiers : PublicationIdentifier[];
    titles : Title[];
    authors : RelatedPerson[];
    contributors : Contributor[];
    publicationDate : Date;
    publisher : ActorInfo;
    journal : RelatedJournal;
    inBook : RelatedDocumentInfo;
    volume : string;
    series : string;
    pages : string;
    edition : string;
    conference : string;
    distributions : DocumentDistributionInfo[];
    documentLanguages : Language[];
    subjects : Subject[];
    keywords : string[];
    fundingProjects : RelatedProject[];
    abstracts : Abstract[];
    sizes : SizeInfo[];
    desc:string;
    label:string;
}

export class DocumentMetadataRecord  {
    metadataHeaderInfo : MetadataHeaderInfo;
    document : Document;
    desc:string;
    label:string;
}

DocumentMetadataRecord.prototype.desc="Root element for metadata records of single files (documents); groups metadata header and information about the document itself";
DocumentMetadataRecord.prototype.label="Document metadata record";

export class Domain  {
    value : string;
    classificationSchemeName : ClassificationSchemeName;
    schemeURI : string;
    desc:string;
    label:string;
}

Domain.prototype.desc="Specifies the application domain of the resource or the tool/service";
Domain.prototype.label="Domain";

export class DomainInfoType  {
    domain : Domain;
    sizePerDomain : SizeInfo;
    desc:string;
    label:string;
}

export class Facet  {
    field : string;
    label : string;
    values : Value[];
    desc:string;
    // label:string;
}

export class ForeseenUseInfo  {
    foreseenUse : ForeseenUseEnum;
    useNlpApplications : UseNLPSpecificEnum[];
    desc:string;
    label:string;
}

ForeseenUseInfo.prototype.desc="Groups information on the use for which the resource is created";
ForeseenUseInfo.prototype.label="Foreseen use";

export class Formalisms  {
    formalism : string;
    desc:string;
    label:string;
}

export class FullText extends MyString {
    desc:string;
    label:string;
}

FullText.prototype.desc="The full text of the publication in simple text format";
export class GeographicCoverageInfo  {
    geographicCoverage : string;
    sizePerGeographicCoverage : SizeInfo;
    desc:string;
    label:string;
}

GeographicCoverageInfo.prototype.desc="Groups information on geographic classification of the resource";
GeographicCoverageInfo.prototype.label="Geographic coverage";

export class GivenName extends MyString {
    desc:string;
    label:string;
}

GivenName.prototype.desc="The given name (first name) of a person related to the resource; initials can also be used";
GivenName.prototype.label="Given name";

export class GivenNames  {
    givenName : GivenName[];
    desc:string;
    label:string;
}

export class GrammaticalPhenomenaCoverages  {
    grammaticalPhenomenaCoverage : GrammaticalPhenomenaCoverageEnum[];
    weightedGrammar : boolean;
    desc:string;
    label:string;
}

export class GroupName extends MyString {
    desc:string;
    label:string;
}

GroupName.prototype.desc="The name(s) of the group";
GroupName.prototype.label="Group name";

export class IdentificationInfo  {
    resourceNames : ResourceName[];
    descriptions : Description[];
    resourceShortNames : ResourceShortName[];
    identifiers : ResourceIdentifier[];
    desc:string;
    label:string;
}

IdentificationInfo.prototype.desc="Groups together information needed to identify the resource";
IdentificationInfo.prototype.label="Identification";

export class JournalIdentifier  {
    value : string;
    journalIdentifierSchemeName : JournalIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

JournalIdentifier.prototype.desc="Reference to a DOI (recommended) or any kind of identifier used for the publication";
JournalIdentifier.prototype.label="Journal Identifier";

export class JournalIdentifiers  {
    journalIdentifier : JournalIdentifier[];
    desc:string;
    label:string;
}

export class JournalInfo  {
    identifiers : JournalIdentifier[];
    journalTitles : JournalTitle[];
    publisher : ActorInfo;
    languages : Language[];
    subjects : Subject[];
    rights : RightsInfo[];
    desc:string;
    label:string;
}

export class JournalTitle extends MyString {
    desc:string;
    label:string;
}

JournalTitle.prototype.desc="The title(s) of the journal";
JournalTitle.prototype.label="Journal title";

export class Language  {
    languageTag : string;
    languageId : string;
    scriptId : ScriptIdType;
    regiontId : RegionIdType;
    variantId : VariantIdType;
    desc:string;
    label:string;
}

Language.prototype.desc="A human understandable name of the language that is used in the resource or supported by the tool/service, as specified in the BCP47 guidelines (https://tools.ietf.org/html/bcp47); the guidelines includes (a) language subtag according to ISO 639-1 and for languages not covered by this, the ISO 639-3; (b) the script tag according to ISO 15924; (c) the region tag according to ISO 3166-1;  (d) the variant subtag";
Language.prototype.label="Language";

export class LanguageDescription  {
    metadataHeaderInfo : MetadataHeaderInfo;
    languageDescriptionInfo : LanguageDescriptionInfo;
    desc:string;
    label:string;
}

export class LanguageDescriptionEncodingInfo  {
    encodingLevels : EncodingLevelEnum[];
    standardsBestPractices : ConformanceToStandardsBestPractices[];
    theoreticModels : string[];
    formalisms : Formalisms;
    tasks : TaskEnum[];
    grammaticalPhenomenaCoverages : GrammaticalPhenomenaCoverages;
    desc:string;
    label:string;
}

LanguageDescriptionEncodingInfo.prototype.desc="Groups together information on the contents of the LanguageDescriptions";
LanguageDescriptionEncodingInfo.prototype.label="Language description encoding";

export class LanguageDescriptionInfo  {
    resourceType : string;
    identificationInfo : IdentificationInfo;
    contactInfo : ContactInfo;
    versionInfo : VersionInfo;
    validationInfos : ValidationInfo[];
    usageInfo : UsageInfo;
    resourceDocumentationInfo : ResourceDocumentationInfo;
    resourceCreationInfo : ResourceCreationInfo;
    distributionInfos : DatasetDistributionInfo[];
    languageDescriptionType : LanguageDescriptionTypeEnum;
    languageDescriptionEncodingInfo : LanguageDescriptionEncodingInfo;
    languageDescriptionOperationInfo : LanguageDescriptionOperationInfo;
    languageDescriptionPerformanceInfo : LanguageDescriptionPerformanceInfo;
    languageDescriptionMediaType : LanguageDescriptionMediaType;
    desc:string;
    label:string;
}

LanguageDescriptionInfo.prototype.desc="Groups together all information related to language descriptions";
LanguageDescriptionInfo.prototype.label="Language description";

export class LanguageDescriptionMediaType  {
    languageDescriptionTextInfo : LanguageDescriptionTextInfo;
    desc:string;
    label:string;
}

LanguageDescriptionMediaType.prototype.desc="Groups information on the media type-specific components for language descriptions";
LanguageDescriptionMediaType.prototype.label="Media type component of language description";

export class LanguageDescriptionOperationInfo  {
    runningEnvironmentInfo : RunningEnvironmentInfo;
    relatedLexiconInfo : RelatedLexiconInfo;
    desc:string;
    label:string;
}

LanguageDescriptionOperationInfo.prototype.desc="Groups together information on the operation requirements of the Language Descriptions";
LanguageDescriptionOperationInfo.prototype.label="Language description operation";

export class LanguageDescriptionPerformanceInfo  {
    robustness : string;
    shallowness : string;
    output : string;
    desc:string;
    label:string;
}

LanguageDescriptionPerformanceInfo.prototype.desc="Groups together information on the performance of the Language Descriptions";
LanguageDescriptionPerformanceInfo.prototype.label="Language description performance";

export class LanguageDescriptionTextInfo  {
    mediaType : string;
    lingualityInfo : LingualityInfo;
    languages : LanguageInfo[];
    metalanguages : LanguageInfo[];
    modalities : ModalityInfo[];
    sizes : SizeInfo[];
    domains : DomainInfoType[];
    timeClassifications : TimeCoverageInfo[];
    geographicClassifications : GeographicCoverageInfo[];
    creationInfo : CreationInfo;
    desc:string;
    label:string;
}

LanguageDescriptionTextInfo.prototype.desc="Groups together all information relevant to the text module of a language description (e.g. format, languages, size etc.); it is obligatory for all language descriptions";
LanguageDescriptionTextInfo.prototype.label="Language description text component";

export class LanguageInfo  {
    language : Language;
    sizePerLanguage : SizeInfo;
    languageVarieties : LanguageVarietyInfo[];
    desc:string;
    label:string;
}

LanguageInfo.prototype.desc="Groups information on the languages represented in the resource";
LanguageInfo.prototype.label="Language";

export class LanguageVarietyInfo  {
    languageVarietyType : LanguageVarietyTypeEnum;
    languageVarietyName : string;
    sizePerLanguageVariety : SizeInfo;
    desc:string;
    label:string;
}

LanguageVarietyInfo.prototype.desc="Groups information on language varieties occurred in the resource (e.g. dialects)";
LanguageVarietyInfo.prototype.label="Language variety";

export class Lexical  {
    metadataHeaderInfo : MetadataHeaderInfo;
    lexicalConceptualResourceInfo : LexicalConceptualResourceInfo;
    desc:string;
    label:string;
}

export class LexicalConceptualResourceEncodingInfo  {
    encodingLevel : EncodingLevelEnum[];
    linguisticInformation : LinguisticInformationEnum[];
    conformanceToStandardsBestPractices : ConformanceToStandardsBestPractices[];
    theoreticModel : string[];
    externalRef : string[];
    extratextualInformation : ExtratextualInformationEnum[];
    extraTextualInformationUnit : ExtraTextualInformationUnitEnum[];
    desc:string;
    label:string;
}

LexicalConceptualResourceEncodingInfo.prototype.desc="Groups all information regarding the contents of lexical/conceptual resources";
LexicalConceptualResourceEncodingInfo.prototype.label="Lexical / Conceptual resource encoding";

export class LexicalConceptualResourceInfo  {
    resourceType : string;
    identificationInfo : IdentificationInfo;
    contactInfo : ContactInfo;
    versionInfo : VersionInfo;
    validationInfos : ValidationInfo[];
    usageInfo : UsageInfo;
    resourceDocumentationInfo : ResourceDocumentationInfo;
    resourceCreationInfo : ResourceCreationInfo;
    distributionInfos : DatasetDistributionInfo[];
    lexicalConceptualResourceType : LexicalConceptualResourceTypeEnum;
    lexicalConceptualResourceEncodingInfo : LexicalConceptualResourceEncodingInfo;
    lexicalConceptualResourceMediaType : LexicalConceptualResourceMediaType;
    desc:string;
    label:string;
}

LexicalConceptualResourceInfo.prototype.desc="Groups together all information related to lexical/conceptual resources";
LexicalConceptualResourceInfo.prototype.label="Lexical/conceptual resource";

export class LexicalConceptualResourceMediaType  {
    lexicalConceptualResourceTextInfo : LexicalConceptualResourceTextInfo;
    desc:string;
    label:string;
}

LexicalConceptualResourceMediaType.prototype.desc="Restriction of mediaType for lexicalConceptualResources";
LexicalConceptualResourceMediaType.prototype.label="Media type component of lexical / conceptual resource";

export class LexicalConceptualResourceTextInfo  {
    mediaType : string;
    lingualityInfo : LingualityInfo;
    languages : LanguageInfo[];
    metalanguages : LanguageInfo[];
    modalities : ModalityInfo[];
    sizes : SizeInfo[];
    domains : DomainInfoType[];
    timeClassifications : TimeCoverageInfo[];
    geographicClassifications : GeographicCoverageInfo[];
    creationInfo : CreationInfo;
    desc:string;
    label:string;
}

LexicalConceptualResourceTextInfo.prototype.desc="Groups information on the textual part of the lexical/conceptual resource";
LexicalConceptualResourceTextInfo.prototype.label="Lexical / Conceptual resource text";

export class LicenceInfo  {
    licence : LicenceEnum;
    version : VersionEnum;
    nonStandardLicenceName : NonStandardLicenceName[];
    nonStandardLicenceTermsURL : string;
    nonStandaradLicenceTermsText : NonStandaradLicenceTermsText[];
    conditionsOfUse : ConditionsOfUseEnum[];
    desc:string;
    label:string;
}

LicenceInfo.prototype.desc="Groups information on licences for the resource; can be repeated to allow for different modes of access and restrictions of use (e.g. free for academic use, on-a-fee basis for commercial use, download of a sample for free use etc.)";
LicenceInfo.prototype.label="Licence";

export class LicenceInfos  {
    licenceInfo : LicenceInfo[];
    desc:string;
    label:string;
}

export class LingualityInfo  {
    lingualityType : LingualityTypeEnum;
    multilingualityType : MultilingualityTypeEnum;
    multilingualityTypeDetails : string;
    desc:string;
    label:string;
}

LingualityInfo.prototype.desc="Groups information on the number of languages of the resource part and of the way they are combined to each other";
LingualityInfo.prototype.label="Linguality";

export class MailingListInfo  {
    mailingListName : string;
    subscribe : string;
    unsubscribe : string;
    post : string;
    archive : string;
    otherArchives : string[];
    desc:string;
    label:string;
}

MailingListInfo.prototype.desc="Groups information on the mailing list(s) that can be used for further information regarding the resource";
MailingListInfo.prototype.label="Mailing list";

export class MetadataHeaderInfo  {
    metadataRecordIdentifier : MetadataIdentifier;
    metadataCreationDate : Date;
    metadataCreators : RelatedPerson[];
    sourceOfMetadataRecord : SourceOfMetadataRecord;
    metadataLanguages : Language[];
    metadataLastDateUpdated : Date;
    revision : string;
    desc:string;
    label:string;
}

MetadataHeaderInfo.prototype.desc="Groups information on the metadata record itself";
MetadataHeaderInfo.prototype.label="Metadata header";

export class MetadataIdentifier  {
    value : string;
    metadataIdentifierSchemeName : MetadataIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

export class ModalityInfo  {
    modalityType : ModalityTypeEnum[];
    modalityTypeDetails : string;
    sizePerModality : SizeInfo;
    desc:string;
    label:string;
}

ModalityInfo.prototype.desc="Groups information on the modalities represented in the resource";
ModalityInfo.prototype.label="Modality";

export class Model  {
    metadataHeaderInfo : MetadataHeaderInfo;
    modelInfo : ModelInfo;
    desc:string;
    label:string;
}

export class ModelInfo  {
    resourceType : string;
    identificationInfo : IdentificationInfo;
    contactInfo : ContactInfo;
    versionInfo : VersionInfo;
    validationInfos : ValidationInfo[];
    usageInfo : UsageInfo;
    resourceDocumentationInfo : ResourceDocumentationInfo;
    resourceCreationInfo : ResourceCreationInfo;
    distributionInfos : DatasetDistributionInfo[];
    modelOperationInfo : ModelOperationInfo;
    modelMediaType : ModelMediaType;
    desc:string;
    label:string;
}

ModelInfo.prototype.desc="Groups together all information related to models";
ModelInfo.prototype.label="Model";

export class ModelMediaType  {
    modelTextInfo : ModelTextInfo;
    desc:string;
    label:string;
}

ModelMediaType.prototype.desc="Restriction of mediaType for models";
ModelMediaType.prototype.label="Media type component of model";

export class ModelOperationInfo  {
    variantName : string;
    tagset : RelatedResource;
    typesystem : RelatedResource;
    algorithm : string;
    algorithmDetails : string;
    trainingCorpusDetails : string;
    desc:string;
    label:string;
}

export class ModelTextInfo  {
    mediaType : string;
    lingualityInfo : LingualityInfo;
    languages : LanguageInfo[];
    modalities : ModalityInfo[];
    sizes : SizeInfo[];
    domains : DomainInfoType[];
    timeClassifications : TimeCoverageInfo[];
    geographicClassifications : GeographicCoverageInfo[];
    creationInfo : CreationInfo;
    desc:string;
    label:string;
}

ModelTextInfo.prototype.desc="Groups together all information related to the textual part of models";
ModelTextInfo.prototype.label="Model";

export class Name extends MyString {
    desc:string;
    label:string;
}

Name.prototype.desc="The full name of a person; the preferred format is \"family name, given name\"";
Name.prototype.label="Name";

export class Names  {
    name : Name[];
    desc:string;
    label:string;
}

export class NonStandaradLicenceTermsText extends MyString {
    desc:string;
    label:string;
}

NonStandaradLicenceTermsText.prototype.desc="Used for inputting the text of licences (that are not included in the pre-defined list) and terms of use or terms of service (for web services)";
NonStandaradLicenceTermsText.prototype.label="Text (for non-standard licences / terms of use / terms of service)";

export class NonStandardLicenceName extends MyString {
    desc:string;
    label:string;
}

NonStandardLicenceName.prototype.desc="The name with which a licence is known; to be used for licences not included in the pre-defined list of recommended licences";
NonStandardLicenceName.prototype.label="Name (for non-standard licences)";

export class ObjectFactory  {
    desc:string;
    label:string;
}

export class OrganizationAlternativeName extends MyString {
    nameType : NameTypeEnum;
    desc:string;
    label:string;
}

OrganizationAlternativeName.prototype.desc="An alternative name (e.g. abbreviation, acronym, translation etc.) used for an organization";
OrganizationAlternativeName.prototype.label="Organization alternative name";

export class OrganizationIdentifier  {
    value : string;
    organizationIdentifierSchemeName : OrganizationIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

OrganizationIdentifier.prototype.desc="Reference to any kind of identifier used for an organization; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)";
OrganizationIdentifier.prototype.label="Identifier";

export class OrganizationIdentifiers  {
    organizationIdentifier : OrganizationIdentifier[];
    desc:string;
    label:string;
}

export class OrganizationInfo  {
    organizationNames : OrganizationName[];
    organizationAlternativeNames : OrganizationAlternativeName[];
    organizationIdentifiers : OrganizationIdentifier[];
    departmentNames : DepartmentName[];
    communicationInfo : CommunicationInfo;
    desc:string;
    label:string;
}

OrganizationInfo.prototype.desc="Groups information on organizations related to the resource";
OrganizationInfo.prototype.label="Organization";

export class OrganizationName extends MyString {
    desc:string;
    label:string;
}

OrganizationName.prototype.desc="The name(s) of the organization";
OrganizationName.prototype.label="Organization name";

export class OrganizationNames  {
    organizationName : OrganizationName[];
    desc:string;
    label:string;
}

export class OriginalDataProviderInfo  {
    originalDataProviderType : OriginalDataProviderTypeEnum;
    originalDataProviderRepository : RelatedRepository;
    originalDataProviderJournal : RelatedJournal;
    originalDataProviderPublisher : RelatedOrganization;
    desc:string;
    label:string;
}

OriginalDataProviderInfo.prototype.desc="Refers to the original data provider, in case the metadata record carries information taken from previous repositories/journals/publishers (e.g. in case the record's last source is an aggregator)";
OriginalDataProviderInfo.prototype.label="Original data provider";

export class PersonIdentifier  {
    value : string;
    personIdentifierSchemeName : PersonIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

PersonIdentifier.prototype.desc="Reference to any kind of identifier used for a person; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)";
PersonIdentifier.prototype.label="Identifier";

export class PersonIdentifiers  {
    personIdentifier : PersonIdentifier[];
    desc:string;
    label:string;
}

export class PersonInfo  {
    surnames : Surname[];
    givenNames : GivenName[];
    names : Name[];
    personIdentifiers : PersonIdentifier[];
    sex : SexEnum;
    communicationInfo : CommunicationInfo;
    affiliations : Affiliation[];
    desc:string;
    label:string;
}

PersonInfo.prototype.desc="Groups information relevant to personsrelated to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided";
PersonInfo.prototype.label="Person";

export class PersonName extends MyString {
    desc:string;
    label:string;
}

PersonName.prototype.desc="The name(s) of the person, preferrably in the format: surname, initials (first name) prefix";
PersonName.prototype.label="Person name";

export class PersonNames  {
    personName : PersonName[];
    desc:string;
    label:string;
}

export class Order<T> {
    order: number;
    resource : T;
}

export class PostalAddress  {
    address : string;
    zipCode : string;
    city : string;
    region : string;
    country : RegionIdType;
    desc:string;
    label:string;
}

export class ProcessingResourceInfo  {
    resourceTypes : ResourceTypeEnum[];
    mediaType : MediaTypeEnum;
    languages : Language[];
    characterEncodings : CharacterEncodingEnum[];
    dataFormats : DataFormat[];
    typesystem : RelatedResource;
    tagset : RelatedResource;
    annotationLevels : AnnotationLevelEnum[];
    modalityTypes : ModalityTypeEnum[];
    domains : Domain[];
    textGenres : TextGenre[];
    textTypes : Text[];
    registers : Register[];
    subjects : Subject[];
    keywords : string[];
    desc:string;
    label:string;
}

export class ProjectIdentifier  {
    value : string;
    projectIdentifierSchemeName : string;
    schemeURI : string;
    desc:string;
    label:string;
}

ProjectIdentifier.prototype.desc="A unique identifier for research projects";
export class ProjectIdentifiers  {
    projectIdentifier : ProjectIdentifier[];
    desc:string;
    label:string;
}

export class ProjectInfo  {
    projectNames : ProjectName[];
    projectShortNames : ProjectShortName[];
    projectIdentifiers : ProjectIdentifier[];
    webpages : string[];
    fundingTypes : FundingTypeEnum[];
    funders : RelatedOrganization[];
    fundingProgramme : string;
    jurisdiction : string;
    fundingCountries : RegionIdType[];
    projectDates : DateCombination;
    desc:string;
    label:string;
}

ProjectInfo.prototype.desc="Groups information on a project related to the resource(e.g. a project the resource has been used in; a funded project that led to the resource creation etc.)";
ProjectInfo.prototype.label="Project";

export class ProjectName extends MyString {
    desc:string;
    label:string;
}

ProjectName.prototype.desc="The name(s) of the project";
ProjectName.prototype.label="Project name";

export class ProjectNames  {
    projectName : ProjectName[];
    desc:string;
    label:string;
}

export class ProjectShortName extends MyString {
    desc:string;
    label:string;
}

ProjectShortName.prototype.desc="A short name, abbreviation or acronym of a project related to the resource";
ProjectShortName.prototype.label="Project short name";

export class PublicationIdentifier  {
    value : string;
    publicationIdentifierSchemeName : PublicationIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

PublicationIdentifier.prototype.desc="Reference to a DOI (recommended) or any kind of identifier used for the publication";
PublicationIdentifier.prototype.label="Publication identifier";

export class PublicationIdentifiers  {
    publicationIdentifier : PublicationIdentifier[];
    desc:string;
    label:string;
}

export class RawCorpusInfo  {
    corpusSubtype : any;
    corpusMediaPartsType : CorpusMediaPartsType;
    desc:string;
    label:string;
}

RawCorpusInfo.prototype.desc="Groups together information on corpora of all media types";
RawCorpusInfo.prototype.label="Raw corpus";

export class Register  {
    value : string;
    classificationSchemeName : ClassificationSchemeName;
    schemeURI : string;
    desc:string;
    label:string;
}

Register.prototype.desc="For corpora that have already been using register classification";
Register.prototype.label="Register";

export class RelatedDocumentInfo  {
    documentUnstructured : string;
    publicationIdentifiers : PublicationIdentifier[];
    desc:string;
    label:string;
}

export class RelatedGroup  {
    groupNames : GroupName[];
    relatedOrganization : RelatedOrganization;
    desc:string;
    label:string;
}

export class RelatedJournal  {
    journalTitles : JournalTitle[];
    journalIdentifiers : JournalIdentifier[];
    desc:string;
    label:string;
}

export class RelatedLexiconInfo  {
    relatedLexiconType : RelatedLexiconTypeEnum;
    attachedLexiconPosition : string;
    compatibleLexiconType : CompatibleLexiconTypeEnum[];
    desc:string;
    label:string;
}

RelatedLexiconInfo.prototype.desc="Groups together information on requirements for lexica set by the LanguageDescriptions";
RelatedLexiconInfo.prototype.label="Related lexicon";

export class RelatedOrganization  {
    organizationNames : OrganizationName[];
    organizationIdentifiers : OrganizationIdentifier[];
    desc:string;
    label:string;
}

export class RelatedPerson  {
    personNames : PersonName[];
    personIdentifiers : PersonIdentifier[];
    desc:string;
    label:string;
}

export class RelatedProject  {
    projectNames : ProjectName[];
    projectIdentifiers : ProjectIdentifier[];
    desc:string;
    label:string;
}

export class RelatedRepository  {
    repositoryNames : RepositoryName[];
    repositoryIdentifiers : RepositoryIdentifier[];
    desc:string;
    label:string;
}

export class RelatedResource  {
    resourceIdentifiers : ResourceIdentifier[];
    resourceNames : ResourceName[];
    desc:string;
    label:string;
}

export class RelationInfo  {
    relationType : RelationTypeEnum;
    relatedResource1 : RelatedResource;
    relatedResources : RelatedResource[];
    desc:string;
    label:string;
}

RelationInfo.prototype.desc="Groups together information on relations between resources";
RelationInfo.prototype.label="Annotations";

export class RepositoryIdentifier  {
    value : string;
    repositoryIdentifierSchemeName : RepositoryIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

export class RepositoryIdentifiers  {
    repositoryIdentifier : RepositoryIdentifier[];
    desc:string;
    label:string;
}

export class RepositoryName extends MyString {
    desc:string;
    label:string;
}

RepositoryName.prototype.desc="The name(s) of the repository";
RepositoryName.prototype.label="Repository name";

export class RepositoryNames  {
    repositoryName : RepositoryName[];
    desc:string;
    label:string;
}

export class ResourceCreationInfo  {
    resourceCreators : ActorInfo[];
    fundingProjects : RelatedProject[];
    creationDate : DateCombination;
    desc:string;
    label:string;
}

ResourceCreationInfo.prototype.desc="Groups information on the creation procedure of a resource";
ResourceCreationInfo.prototype.label="Resource creation";

export class ResourceDocumentationInfo  {
    mustBeCitedWith : RelatedDocumentInfo;
    documentationPublications : RelatedDocumentInfo[];
    samplesLocations : string[];
    desc:string;
    label:string;
}

ResourceDocumentationInfo.prototype.desc="Groups together information on any document describing the resource";
ResourceDocumentationInfo.prototype.label="Resource documentation";

export class ResourceIdentifier  {
    value : string;
    resourceIdentifierSchemeName : ResourceIdentifierSchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

export class ResourceIdentifiers  {
    resourceIdentifier : ResourceIdentifier[];
    desc:string;
    label:string;
}

export class ResourceName extends MyString {
    desc:string;
    label:string;
}

ResourceName.prototype.desc="The full name by which the resource is known; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language";
export class ResourceNames  {
    resourceName : ResourceName[];
    desc:string;
    label:string;
}

export class ResourceShortName extends MyString {
    desc:string;
    label:string;
}

ResourceShortName.prototype.desc="The short form (abbreviation, acronym etc.) used to identify the resource; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
ResourceShortName.prototype.label="Resource short name";

export class Result  {
    corpora : OMTDCorpus[];
    components : OMTDComponent[];
    desc:string;
    label:string;
}

export class RightsInfo  {
    licenceInfos : LicenceInfo[];
    rightsStatementInfo : RightsStatementInfo;
    desc:string;
    label:string;
}

export class RightsStatementInfo  {
    rightsStmtName : RightsStmtNameEnum;
    rightsStmtURL : string;
    desc:string;
    label:string;
}

RightsStatementInfo.prototype.desc="Groups information on official statements indicative of licensing terms for the use of a resource (e.g. open access, free to read, all rights reserved etc.); its semantics should be clear, preferrably formally expressed and stored at a url";
RightsStatementInfo.prototype.label="Rights statement";

export class RunningEnvironmentInfo  {
    requiresSoftware : RelatedResource[];
    requiresHardware : RequiresHardwareEnum[];
    requiresLRs : RelatedResource[];
    runningEnvironmentDetails : string;
    desc:string;
    label:string;
}

RunningEnvironmentInfo.prototype.desc="Groups together information on the running environment of a tool or a language description";
RunningEnvironmentInfo.prototype.label="Running environment";

export class SizeInfo  {
    size : string;
    sizeUnit : SizeUnitEnum;
    desc:string;
    label:string;
}

SizeInfo.prototype.desc="Groups information on the size of the resource or of resource parts";
SizeInfo.prototype.label="Size";

export class SourceOfMetadataRecord  {
    collectedFrom : RelatedRepository;
    sourceMetadataLink : string;
    relatedMetadataScheme : string;
    originalDataProviderInfo : OriginalDataProviderInfo;
    desc:string;
    label:string;
}

SourceOfMetadataRecord.prototype.desc="Refers to the catalog or repository from which the metadata record has been originated (for harvested records)";
SourceOfMetadataRecord.prototype.label="Source of metadata record";

export class StructuralEncoding  {
    value : string;
    schemeName : SchemeNameEnum;
    schemeURI : string;
    desc:string;
    label:string;
}

StructuralEncoding.prototype.desc="Information on whether the structure of the corpus documents is formally encoded and the scheme used for this";
StructuralEncoding.prototype.label="Structural encoding";

export class StructuralEncodingInfo  {
    structuralEncoding : StructuralEncoding;
    sizePerStructuralEncoding : SizeInfo;
    desc:string;
    label:string;
}

StructuralEncodingInfo.prototype.desc="Groups information on the encoding of the structure of the contents of the corpus";
StructuralEncodingInfo.prototype.label="Text format";

export class Subject  {
    value : string;
    classificationSchemeName : ClassificationSchemeName;
    schemeURI : string;
    desc:string;
    label:string;
}

Subject.prototype.desc="For resources that are using subject / topic classification";
Subject.prototype.label="Subject";

export class Surname extends MyString {
    desc:string;
    label:string;
}

Surname.prototype.desc="The surname (family name) of a person related to the resource";
Surname.prototype.label="Surname";

export class Surnames  {
    surname : Surname[];
    desc:string;
    label:string;
}

export class Text  {
    value : string;
    classificationSchemeName : ClassificationSchemeName;
    schemeURI : string;
    desc:string;
    label:string;
}

export class TextClassificationInfo  {
    textGenre : TextGenre;
    textType : Text;
    register : Register;
    subject : Subject;
    keywords : string[];
    sizePerTextClassification : SizeInfo;
    desc:string;
    label:string;
}

TextClassificationInfo.prototype.desc="Groups together information on text type/genre of the resource";
TextClassificationInfo.prototype.label="Text classification";

export class TextFormatInfo  {
    mimeType : MimeTypeEnum;
    sizePerTextFormat : SizeInfo;
    desc:string;
    label:string;
}

TextFormatInfo.prototype.desc="Groups information on the text format(s) of a resource";
TextFormatInfo.prototype.label="Text format";

export class TextGenre  {
    value : string;
    classificationSchemeName : ClassificationSchemeName;
    schemeURI : string;
    desc:string;
    label:string;
}

TextGenre.prototype.desc="Genre: The conventionalized discourse or text types of the content of the resource, based on extra-linguistic and internal linguistic criteria";
TextGenre.prototype.label="Text genre";

export class TimeCoverageInfo  {
    timeCoverage : string;
    sizePerTimeCoverage : SizeInfo;
    desc:string;
    label:string;
}

TimeCoverageInfo.prototype.desc="Groups together information on time classification of the resource";
TimeCoverageInfo.prototype.label="Time coverage";

export class Title extends MyString {
    titleType : TitleTypeEnum;
    desc:string;
    label:string;
}

Title.prototype.desc="The title of the publication";
Title.prototype.label="Title";

export class UsageInfo  {
    foreseenUseInfos : ForeseenUseInfo[];
    actualUseInfos : ActualUseInfo[];
    desc:string;
    label:string;
}

UsageInfo.prototype.desc="Groups information on usage of the resource (both intended and actual use)";
UsageInfo.prototype.label="Usage";

export class User  {
    id : number;
    name : string;
    surname : string;
    username : string;
    email : string;
    password : string;
    join_date : string;
    affiliation : string;
    roles : string[];
    desc:string;
    label:string;
}

export class Utils  {
    desc:string;
    label:string;
}

export class ValidationInfo  {
    validated : boolean;
    validationType : ValidationTypeEnum;
    validationMode : ProcessMode;
    validationModeDetails : string;
    validationExtent : ValidationExtentEnum;
    validationExtentDetails : string;
    sizePerValidation : SizeInfo;
    validationReports : RelatedDocumentInfo[];
    validationSwComponents : RelatedResource[];
    validators : ActorInfo[];
    desc:string;
    label:string;
}

ValidationInfo.prototype.desc="Groups information on validation of a resource; it can be repeated to allow for different validations (e.g. formal validation of the whole resource; content validation of one part of the resource etc.). ";
ValidationInfo.prototype.label="Validation";

export class Comparable<T>  {
    desc:string;
    label:string;
}

export class Value extends Comparable<Value> {
    value : string;
    count : number;
    desc:string;
    label:string;
}

export class VersionInfo  {
    version : string;
    revision : string;
    lastDateUpdated : Date;
    updateFrequency : string;
    desc:string;
    label:string;
}

VersionInfo.prototype.desc="Groups information on a specific version or release of the resource";
VersionInfo.prototype.label="Version";

export class Cloneable  {
    desc:string;
    label:string;
}

export enum ActualUseEnum {
    HUMAN_USE,
    NLP_APPLICATIONS
}

export enum AnnotationLevelEnum {
    ALIGNMENT,
    DISCOURSE_ANNOTATION,
    DISCOURSE_ANNOTATION_ARGUMENTATION,
    DISCOURSE_ANNOTATION_AUDIENCE_REACTIONS,
    DISCOURSE_ANNOTATION_COREFERENCE,
    DISCOURSE_ANNOTATION_DIALOGUE_ACTS,
    DISCOURSE_ANNOTATION_DISCOURSE_RELATIONS,
    LEMMATIZATION,
    MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING,
    MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING,
    SEGMENTATION,
    SEMANTIC_ANNOTATION,
    SEMANTIC_ANNOTATION_CERTAINTY_LEVEL,
    SEMANTIC_ANNOTATION_EMOTIONS,
    SEMANTIC_ANNOTATION_EVENTS,
    SEMANTIC_ANNOTATION_NAMED_ENTITIES,
    SEMANTIC_ANNOTATION_POLARITY,
    SEMANTIC_ANNOTATION_QUESTION_TOPICAL_TARGET,
    SEMANTIC_ANNOTATION_READABILTY,
    SEMANTIC_ANNOTATION_SEMANTIC_CLASSES,
    SEMANTIC_ANNOTATION_SEMANTIC_RELATIONS,
    SEMANTIC_ANNOTATION_SEMANTIC_ROLES,
    SEMANTIC_ANNOTATION_SPEECH_ACTS,
    SEMANTIC_ANNOTATION_SUBJECTIVITY,
    SEMANTIC_ANNOTATION_TEMPORAL_EXPRESSIONS,
    SEMANTIC_ANNOTATION_TEXTUAL_ENTAILMENT,
    SEMANTIC_ANNOTATION_WORD_SENSES,
    SYNTACTIC_ANNOTATION_SEMANTIC_FRAMES,
    SPEECH_ANNOTATION,
    SPEECH_ANNOTATION_ORTHOGRAPHIC_TRANSCRIPTION,
    SPEECH_ANNOTATION_PARALANGUAGE_ANNOTATION,
    SPEECH_ANNOTATION_PHONETIC_TRANSCRIPTION,
    SPEECH_ANNOTATION_PROSODIC_ANNOTATION,
    SPEECH_ANNOTATION_SOUND_EVENTS,
    SPEECH_ANNOTATION_SOUND_TO_TEXT_ALIGNMENT,
    SPEECH_ANNOTATION_SPEAKER_IDENTIFICATION,
    SPEECH_ANNOTATION_SPEAKER_TURNS,
    STEMMING,
    STRUCTURAL_ANNOTATION,
    STRUCTURAL_ANNOTATION_DOCUMENT_DIVISIONS,
    STRUCTURAL_ANNOTATION_SENTENCES,
    STRUCTURAL_ANNOTATION_CLAUSES,
    STRUCTURAL_ANNOTATION_PHRASES,
    STRUCTURAL_ANNOTATION_WORDS,
    SYNTACTIC_ANNOTATION_SUBCATEGORIZATION_FRAMES,
    SYNTACTIC_ANNOTATION_DEPENDENCY_TREES,
    SYNTACTIC_ANNOTATION_CONSTITUENCY_TREES,
    SYNTACTIC_ANNOTATION_CHUNKS,
    SYNTACTICOSEMANTIC_ANNOTATION_LINKS,
    TRANSLATION,
    TRANSLITERATION,
    MODALITY_ANNOTATION_BODY_MOVEMENTS,
    MODALITY_ANNOTATION_FACIAL_EXPRESSIONS,
    MODALITY_ANNOTATION_GAZE_EYE_MOVEMENTS,
    MODALITY_ANNOTATION_HAND_ARM_GESTURES,
    MODALITY_ANNOTATION_HAND_MANIPULATION_OF_OBJECTS,
    MODALITY_ANNOTATION_HEAD_MOVEMENTS,
    MODALITY_ANNOTATION_LIP_MOVEMENTS,
    OTHER
}

export enum CharacterEncodingEnum {
    US_ASCII,
    WINDOWS_1250,
    WINDOWS_1251,
    WINDOWS_1252,
    WINDOWS_1253,
    WINDOWS_1254,
    WINDOWS_1257,
    ISO_8859_1,
    ISO_8859_2,
    ISO_8859_4,
    ISO_8859_5,
    ISO_8859_7,
    ISO_8859_9,
    ISO_8859_13,
    ISO_8859_15,
    KOI_8_R,
    UTF_8,
    UTF_16,
    UTF_16_BE,
    UTF_16_LE,
    WINDOWS_1255,
    WINDOWS_1256,
    WINDOWS_1258,
    ISO_8859_3,
    ISO_8859_6,
    ISO_8859_8,
    WINDOWS_31_J,
    EUC_JP,
    X_EUC_JP_LINUX,
    SHIFT_JIS,
    ISO_2022_JP,
    X_MSWIN_936,
    GB_18030,
    X_EUC_CN,
    GBK,
    ISCII_91,
    X_WINDOWS_949,
    EUC_KR,
    ISO_2022_KR,
    X_WINDOWS_950,
    X_MS_950_HKSCS,
    X_EUC_TW,
    BIG_5,
    BIG_5_HKSCS,
    TIS_620,
    BIG_5_SOLARIS,
    CP_037,
    CP_273,
    CP_277,
    CP_278,
    CP_280,
    CP_284,
    CP_285,
    CP_297,
    CP_420,
    CP_424,
    CP_437,
    CP_500,
    CP_737,
    CP_775,
    CP_838,
    CP_850,
    CP_852,
    CP_855,
    CP_856,
    CP_857,
    CP_858,
    CP_860,
    CP_861,
    CP_862,
    CP_863,
    CP_864,
    CP_865,
    CP_866,
    CP_868,
    CP_869,
    CP_870,
    CP_871,
    CP_874,
    CP_875,
    CP_918,
    CP_921,
    CP_922,
    CP_930,
    CP_933,
    CP_935,
    CP_937,
    CP_939,
    CP_942,
    CP_942_C,
    CP_943,
    CP_943_C,
    CP_948,
    CP_949,
    CP_949_C,
    CP_950,
    CP_964,
    CP_970,
    CP_1006,
    CP_1025,
    CP_1026,
    CP_1046,
    CP_1047,
    CP_1097,
    CP_1098,
    CP_1112,
    CP_1122,
    CP_1123,
    CP_1124,
    CP_1140,
    CP_1141,
    CP_1142,
    CP_1143,
    CP_1144,
    CP_1145,
    CP_1146,
    CP_1147,
    CP_1148,
    CP_1149,
    CP_1381,
    CP_1383,
    CP_33722,
    ISO_2022_CN_CNS,
    ISO_2022_CN_GB,
    JIS_AUTO_DETECT,
    MS_874,
    MAC_ARABIC,
    MAC_CENTRAL_EUROPE,
    MAC_CROATIAN,
    MAC_CYRILLIC,
    MAC_DINGBAT,
    MAC_GREEK,
    MAC_HEBREW,
    MAC_ICELAND,
    MAC_ROMAN,
    MAC_ROMANIA,
    MAC_SYMBOL,
    MAC_THAI,
    MAC_TURKISH,
    MAC_UKRAINE
}

export enum ClassificationSchemeName {
    DDC,
    UDC,
    EURO_VOC,
    LCSH,
    DK_5,
    ME_SH,
    ANC_CLASSIFICATION,
    BNC_CLASSIFICATION,
    NLK_CLASSIFICATION,
    PAROLE_TOPIC_CLASSIFICATION,
    PAROLE_GENRE_CLASSIFICATION,
    OTHER
}

export enum CompatibleLexiconTypeEnum {
    WORDNET,
    WORDLIST,
    MORPHOLOGICAL_LEXICON,
    OTHER
}

export enum ComponentDistributionMediumEnum {
    WEB_SERVICE,
    SOURCE_CODE,
    EXECUTABLE_CODE
}

export enum ComponentTypeEnum {
    ACCESS_COMPONENT,
    READER,
    WRITER,
    SUPPORT_COMPONENT,
    VISUALISER,
    DEBUGGER,
    VALIDATOR,
    VIEWER,
    CORPUS_VIEWER,
    LEXICON_VIEWER,
    EDITOR,
    ML_TRAINER,
    ML_PREDICTOR,
    FEATURE_EXTRACTOR,
    DATA_SPLITTER,
    DATA_MERGER,
    CONVERTER,
    EVALUATOR,
    FLOW_CONTROLLER,
    SCRIPT_BASED_ANALYSER,
    MATCHER,
    GAZETEER_BASED_MATCHER,
    CROWD_SOURCING_COMPONENT,
    DATA_COLLECTOR,
    CRAWLER,
    PROCESSOR,
    ANNOTATOR,
    SEGMENTER,
    STEMMER,
    LEMMATIZER,
    MORPHOLOGICAL_TAGGER,
    CHUNKER,
    PARSER,
    COREFERENCE_ANNOTATOR,
    NAMED_ENTITY_RECOGNIZER,
    SEMANTICS_ANNOTATOR,
    SRL_ANNOTATOR,
    READABILITY_ANNOTATOR,
    ALIGNER,
    GENERATOR,
    SUMMARIZER,
    SIMPLIFIER,
    PRE_OR_POST_PROCESSING_COMPONENT,
    SPELLING_CHECKER,
    GRAMMAR_CHECKER,
    NORMALIZER,
    FILTERS,
    ANALYZER,
    TOPIC_EXTRACTOR,
    DOCUMENT_CLASSIFIER,
    LANGUAGE_IDENTIFIER,
    SENTIMENT_ANALYZER,
    KEYWORDS_EXTRACTOR,
    TERM_EXTRACTOR,
    CONTRADICTION_DETECTOR,
    EVENT_EXTRACTOR,
    PERSUASIVE_EXPRESSION_MINER,
    INFORMATION_EXTRACTOR,
    LEXICON_EXTRACTOR_FROM_CORPORA,
    LEXICON_EXTRACTOR_FROM_LEXICA,
    WORD_SENSE_DISAMBIGUATOR,
    QUALITATIVE_ANALYZER,
    PLATFORM,
    INFRASTRUCTURE,
    ARCHITECTURE,
    NLP_DEVELOPMENT_ENVIRONMENT,
    OTHER
}

export enum ConditionsOfUseEnum {
    ATTRIBUTION,
    NON_COMMERCIAL_USE,
    COMMERCIAL_USE,
    SHARE_ALIKE,
    NO_DERIVATIVES,
    NO_REDISTRIBUTION,
    EVALUATION_USE,
    RESEARCH,
    LANGUAGE_ENGINEERING_RESEARCH,
    EDUCATION,
    INFORM_LICENSOR,
    REDEPOSIT,
    COMPENSATE,
    PERSONAL_DATA_INCLUDED,
    SENSITIVE_DATA_INCLUDED,
    REQUEST_PLAN,
    SPATIAL_CONSTRAINT,
    USER_IDENTIFIED,
    ACADEMIC_USERS,
    COMMERCIAL_USERS,
    MEMBERS_OF_GROUP,
    OTHER
}

export enum ConformanceToStandardsBestPractices {
    AGRO_VOC,
    ALVIS,
    ARGO,
    BML,
    CES,
    DK_PRO_CORE,
    EAGLES,
    EDA_MONTOLOGY,
    ELSST,
    EML,
    EMMA,
    GATE,
    GESIS,
    GMX,
    GR_AF,
    HAM_NO_SYS,
    HASSET,
    INK_ML,
    ILSP_NLP,
    ISO_12620,
    ISO_16642,
    ISO_1987,
    ISO_26162,
    ISO_30042,
    ISO_704,
    JATS,
    LAF,
    LAPPS,
    LEMON,
    LMF,
    MAF,
    MLIF,
    MOSES,
    MULTEXT,
    MUMIN,
    MULTIMODAL_INTERACTION_FRAMEWORK,
    OAXAL,
    OLIA,
    OWL,
    PANACEA,
    PENN_TREE_BANK,
    PRAGUE_TREEBANK,
    RDF,
    SEM_AF,
    SEM_AF_DA,
    SEM_AF_NE,
    SEM_AF_SRL,
    SEM_AF_DS,
    SKOS,
    SRX,
    SYN_AF,
    TBX,
    TMX,
    TEI,
    TEI_P_3,
    TEI_P_4,
    TEI_P_5,
    TIME_ML,
    XCES,
    XLIFF,
    UD,
    WORD_NET,
    OTHER
}

export enum ContributorTypeEnum {
    EDITOR,
    TRANSLATOR,
    OTHER
}

export enum DataFormatSpecificEnum {
    ACL_ANTHOLOGY,
    ALVIS_ENRICHED_DOCUMENT,
    BNC,
    BIO_NLP,
    BIONLP_FORMAT_VARIANT_ST2013A1_A2,
    CADIXE_JSON,
    CONLL_2000,
    CONLL_2002,
    CONLL_2006,
    CONLL_2007,
    CONLL_2009,
    CONLL_2012,
    DATA_SIFT,
    FACTORED_TAG_LEM,
    GATE,
    GENIA,
    GRAF,
    HTML_5_MICRODATA,
    I_2_B_2,
    IMS_CWB,
    JDBC,
    KEA_CORPUS,
    LLL,
    NEGRA_EXPORT,
    PTB_FORMAT_VARIANT_CHUNKED,
    PTB_FORMAT_VARIANT_COMBINED,
    PML,
    RELP,
    AIMED_CORPUS,
    TIGER,
    TUPP_DZ,
    TWITTER,
    XCES_FORMAT_VARIANT_ILSP,
    WEB_1_T,
    UIMA_CAS_DUMP,
    UIMA_BINARY_CAS
}

export enum DistributionMediumEnum {
    WEB_EXECUTABLE,
    PAPER_COPY,
    HARD_DISK,
    BLU_RAY,
    DVD_R,
    CD_ROM,
    DOWNLOADABLE,
    ACCESSIBLE_THROUGH_INTERFACE,
    OTHER
}

export enum DocumentTypeEnum {
    BIBLIOGRAPHIC_RECORD_ONLY,
    ABSTRACT,
    FULL_TEXT
}

export enum EncodingLevelEnum {
    PHONETICS,
    PHONOLOGY,
    SEMANTICS,
    MORPHOLOGY,
    SYNTAX,
    PRAGMATICS,
    OTHER
}

export enum EvaluationCriterionEnum {
    EXTRINSIC,
    INTRINSIC
}

export enum EvaluationLevelEnum {
    TECHNOLOGICAL,
    USAGE,
    IMPACT,
    DIAGNOSTIC
}

export enum EvaluationMeasureEnum {
    HUMAN,
    AUTOMATIC
}

export enum EvaluationTypeEnum {
    GLASS_BOX,
    BLACK_BOX
}

export enum ExtraTextualInformationUnitEnum {
    WORD,
    LEMMA,
    SEMANTICS,
    EXAMPLE,
    SYNTAX,
    LEXICAL_UNIT,
    OTHER
}

export enum ExtratextualInformationEnum {
    IMAGES,
    VIDEOS,
    SOUND_RECORDINGS,
    OTHER
}

export enum ForeseenUseEnum {
    HUMAN_USE,
    NLP_APPLICATIONS
}

export enum FrameworkEnum {
    UIMA,
    GATE,
    OTHER
}

export enum FundingTypeEnum {
    OTHER,
    OWN_FUNDS,
    NATIONAL_FUNDS,
    EU_FUNDS
}

export enum GrammaticalPhenomenaCoverageEnum {
    CLAUSE_STRUCTURE,
    PP_ATTACHMENT,
    NP_STRUCTURE,
    COORDINATION,
    ANAPHORA,
    OTHER
}

export enum JournalIdentifierSchemeNameEnum {
    DOI,
    HDL,
    ISSN,
    OTHER
}

export enum LanguageDescriptionTypeEnum {
    GRAMMAR,
    OTHER
}

export enum LanguageVarietyTypeEnum {
    DIALECT,
    JARGON,
    OTHER
}

export enum LexicalConceptualResourceTypeEnum {
    WORD_LIST,
    COMPUTATIONAL_LEXICON,
    ONTOLOGY,
    WORDNET,
    THESAURUS,
    FRAMENET,
    TERMINOLOGICAL_RESOURCE,
    MACHINE_READABLE_DICTIONARY,
    LEXICON,
    TYPESYSTEM,
    TAGSET,
    MAPPING_OF_RESOURCES,
    OTHER
}

export enum LicenceEnum {
    CC_BY,
    CC_BY_NC,
    CC_BY_NC_ND,
    CC_BY_NC_SA,
    CC_BY_ND,
    CC_BY_SA,
    CC_ZERO,
    PDDL,
    ODC_BY,
    O_DB_L,
    MS_NO_RE_D,
    MS_NO_RE_D_FF,
    MS_NO_RE_D_ND,
    MS_NO_RE_D_ND_FF,
    MS_NC_NO_RE_D,
    MS_NC_NO_RE_D_FF,
    MS_NC_NO_RE_D_ND,
    MS_NC_NO_RE_D_ND_FF,
    ELRA_END_USER,
    ELRA_EVALUATION,
    ELRA_VAR,
    CLARIN_PUB,
    CLARIN_ACA,
    CLARIN_ACA_NC,
    CLARIN_RES,
    AGPL,
    APACHELICENCE_2_0,
    BSD_4_CLAUSE,
    BSD_3_CLAUSE,
    FREE_BSD,
    GFDL,
    GPL,
    LGPL,
    MIT,
    PRINCETON_WORDNET,
    PROPRIETARY,
    UNDER_NEGOTIATION,
    NON_STANDARD_LICENCE_TERMS
}

export enum LingualityTypeEnum {
    MONOLINGUAL,
    BILINGUAL,
    MULTILINGUAL
}

export enum LinguisticInformationEnum {
    ACCENTUATION,
    LEMMA,
    LEMMA_MULTI_WORD_UNITS,
    LEMMA_VARIANTS,
    LEMMA_ABBREVIATIONS,
    LEMMA_COMPOUNDS,
    LEMMA_CLITIC_FORMS,
    PART_OF_SPEECH,
    MORPHO_FEATURES,
    MORPHO_CASE,
    MORPHO_GENDER,
    MORPHO_NUMBER,
    MORPHO_DEGREE,
    MORPHO_IRREGULAR_FORMS,
    MORPHO_MOOD,
    MORPHO_TENSE,
    MORPHO_PERSON,
    MORPHO_ASPECT,
    MORPHO_VOICE,
    MORPHO_AUXILIARY,
    MORPHO_INFLECTION,
    MORPHO_REFLEXIVITY,
    SYNTAX_SUBCAT_FRAME,
    SEMANTICS_TRAITS,
    SEMANTICS_SEMANTIC_CLASS,
    SEMANTICS_CROSS_REFERENCES,
    SEMANTICS_RELATIONS,
    SEMANTICS_RELATIONS_HYPONYMS,
    SEMANTICS_RELATIONS_HYPERONYMS,
    SEMANTICS_RELATIONS_SYNONYMS,
    SEMANTICS_RELATIONS_ANTONYMS,
    SEMANTICS_RELATIONS_TROPONYMS,
    SEMANTICS_RELATIONS_MERONYMS,
    USAGE_FREQUENCY,
    USAGE_REGISTER,
    USAGE_COLLOCATIONS,
    USAGE_EXAMPLES,
    USAGE_NOTES,
    DEFINITION_GLOSS,
    TRANSLATION_EQUIVALENT,
    PHONETICS_TRANSCRIPTION,
    SEMANTICS_DOMAIN,
    SEMANTICS_EVENT_TYPE,
    SEMANTICS_SEMANTIC_ROLES,
    STATISTICAL_PROPERTIES,
    MORPHO_DERIVATION,
    SEMANTICS_QUALIA_STRUCTURE,
    SYNTACTICO_SEMANTIC_LINKS,
    OTHER
}

export enum MediaTypeEnum {
    TEXT,
    AUDIO,
    VIDEO,
    IMAGE,
    TEXT_NUMERICAL
}

export enum MetadataIdentifierSchemeNameEnum {
    HDL,
    PURL,
    URL,
    URN,
    OTHER
}

export enum MimeTypeEnum {
    TEXT_PLAIN,
    APPLICATION_VND_XMI_XML,
    TEXT_XML,
    APPLICATION_X_TMX_XML,
    APPLICATION_X_XCES_XML,
    APPLICATION_TEI_XML,
    APPLICATION_RDF_XML,
    APPLICATION_XHTML_XML,
    APPLICATION_EMMA_XML,
    APPLICATION_PLS_XML,
    APPLICATION_POSTSCRIPT,
    APPLICATION_VOICEXML_XML,
    TEXT_SGML,
    TEXT_HTML,
    APPLICATION_X_TEX,
    APPLICATION_RTF,
    APPLICATION_X_LATEX,
    TEXT_CSV,
    TEXT_TAB_SEPARATED_VALUES,
    APPLICATION_PDF,
    APPLICATION_X_MSACCESS,
    AUDIO_MP_4,
    AUDIO_MPEG,
    AUDIO_WAV,
    IMAGE_BMP,
    IMAGE_GIF,
    IMAGE_JPEG,
    IMAGE_PNG,
    IMAGE_SVG_XML,
    IMAGE_TIFF,
    VIDEO_JPEG,
    VIDEO_MP_4,
    VIDEO_MPEG,
    VIDEO_X_FLV,
    VIDEO_X_MSVIDEO,
    VIDEO_X_MS_WMV,
    APPLICATION_MSWORD,
    APPLICATION_VND_MS_EXCEL,
    AUDIO_MPEG_3,
    TEXT_TURTLE,
    OTHER,
    AUDIO_PCMA,
    AUDIO_FLAC,
    AUDIO_SPEEX,
    AUDIO_VORBIS,
    VIDEO_MP_2_T
}

export enum ModalityTypeEnum {
    BODY_GESTURE,
    FACIAL_EXPRESSION,
    VOICE,
    COMBINATION_OF_MODALITIES,
    SIGN_LANGUAGE,
    SPOKEN_LANGUAGE,
    WRITTEN_LANGUAGE,
    OTHER
}

export enum MultilingualityTypeEnum {
    PARALLEL,
    COMPARABLE,
    MULTILINGUAL_SINGLE_TEXT,
    ORIGINAL_TRANSLATIONS_IN_SAME_TEXT,
    OTHER
}

export enum NameTypeEnum {
    SHORT_NAME,
    ALTERNATIVE_NAME,
    TRANSLATED_NAME
}

export enum OperatingSystemEnum {
    OS_INDEPENDENT,
    WINDOWS,
    LINUX,
    UNIX,
    MAC_OS,
    GOOGLE_CHROME_OS,
    I_OS,
    ANDROID,
    OTHER,
    BLANK
}

export enum OrganizationIdentifierSchemeNameEnum {
    ISNI,
    FUNDREF,
    OTHER
}

export enum OriginalDataProviderTypeEnum {
    REPOSITORY,
    JOURNAL,
    PUBLISHER
}

export enum PersonIdentifierSchemeNameEnum {
    ORCID,
    ISNI,
    RESEARCHER_ID,
    SCOPUS_ID,
    OTHER
}

export enum ProcessMode {
    MANUAL,
    AUTOMATIC,
    MIXED,
    INTERACTIVE
}

export enum PublicationIdentifierSchemeNameEnum {
    DOI,
    HDL,
    ARK,
    AR_XIV,
    BIBCODE,
    EAN_13,
    EISSN,
    ISBN,
    ISSN,
    ISTC,
    LISSN,
    LSID,
    PURL,
    UPC,
    URL,
    URN,
    FCT,
    OAI,
    PMC,
    PMID,
    OTHER
}

export enum PublicationTypeEnum {
    ARTICLE,
    BACHELOR_THESIS,
    MASTER_THESIS,
    DOCTORAL_THESIS,
    BOOK,
    BOOK_PART,
    REVIEW,
    CONFERENCE_OBJECT,
    LECTURE,
    WORKING_PAPER,
    PRE_PRINT,
    REPORT,
    ANNOTATION,
    CONTRIBUTION_TO_PERIODICAL,
    PATENT,
    IN_PROCEEDINGS,
    BOOKLET,
    MANUAL,
    TECH_REPORT,
    IN_COLLECTION,
    UNPUBLISHED,
    OTHER
}

export enum RegionIdType {
    AA,
    AC,
    AD,
    AE,
    AF,
    AG,
    AI,
    AL,
    AM,
    AO,
    AQ,
    AR,
    AS,
    AT,
    AU,
    AW,
    AX,
    AZ,
    BA,
    BB,
    BD,
    BE,
    BF,
    BG,
    BH,
    BI,
    BJ,
    BL,
    BM,
    BN,
    BO,
    BQ,
    BR,
    BS,
    BT,
    BV,
    BW,
    BY,
    BZ,
    CA,
    CC,
    CD,
    CF,
    CG,
    CH,
    CI,
    CK,
    CL,
    CM,
    CN,
    CO,
    CP,
    CR,
    CU,
    CV,
    CW,
    CX,
    CY,
    CZ,
    DE,
    DG,
    DJ,
    DK,
    DM,
    DO,
    DZ,
    EA,
    EC,
    EE,
    EG,
    EH,
    ER,
    ES,
    ET,
    EU,
    FI,
    FJ,
    FK,
    FM,
    FO,
    FR,
    GA,
    GB,
    GD,
    GE,
    GF,
    GG,
    GH,
    GI,
    GL,
    GM,
    GN,
    GP,
    GQ,
    GR,
    GS,
    GT,
    GU,
    GW,
    GY,
    HK,
    HM,
    HN,
    HR,
    HT,
    HU,
    IC,
    ID,
    IE,
    IL,
    IM,
    IN,
    IO,
    IQ,
    IR,
    IS,
    IT,
    JE,
    JM,
    JO,
    JP,
    KE,
    KG,
    KH,
    KI,
    KM,
    KN,
    KP,
    KR,
    KW,
    KY,
    KZ,
    LA,
    LB,
    LC,
    LI,
    LK,
    LR,
    LS,
    LT,
    LU,
    LV,
    LY,
    MA,
    MC,
    MD,
    ME,
    MF,
    MG,
    MH,
    MK,
    ML,
    MM,
    MN,
    MO,
    MP,
    MQ,
    MR,
    MS,
    MT,
    MU,
    MV,
    MW,
    MX,
    MY,
    MZ,
    NA,
    NC,
    NE,
    NF,
    NG,
    NI,
    NL,
    NO,
    NP,
    NR,
    NU,
    NZ,
    OM,
    PA,
    PE,
    PF,
    PG,
    PH,
    PK,
    PL,
    PM,
    PN,
    PR,
    PS,
    PT,
    PW,
    PY,
    QA,
    QM__QZ,
    RE,
    RO,
    RS,
    RU,
    RW,
    SA,
    SB,
    SC,
    SD,
    SE,
    SG,
    SH,
    SI,
    SJ,
    SK,
    SL,
    SM,
    SN,
    SO,
    SR,
    SS,
    ST,
    SV,
    SX,
    SY,
    SZ,
    TA,
    TC,
    TD,
    TF,
    TG,
    TH,
    TJ,
    TK,
    TL,
    TM,
    TN,
    TO,
    TR,
    TT,
    TV,
    TW,
    TZ,
    UA,
    UG,
    UM,
    US,
    UY,
    UZ,
    VA,
    VC,
    VE,
    VG,
    VI,
    VN,
    VU,
    WF,
    WS,
    XA__XZ,
    YE,
    YT,
    ZA,
    ZM,
    ZW,
    ZZ,
    V001,
    V002,
    V003,
    V005,
    V009,
    V011,
    V013,
    V014,
    V015,
    V017,
    V018,
    V019,
    V021,
    V029,
    V030,
    V034,
    V035,
    V039,
    V053,
    V054,
    V057,
    V061,
    V142,
    V143,
    V145,
    V150,
    V151,
    V154,
    V155,
    V419
}

export enum RelatedLexiconTypeEnum {
    INCLUDED,
    ATTACHED,
    COMPATIBLE,
    NONE
}

export enum RelationTypeEnum {
    IS_PART_OF,
    IS_PART_WITH,
    HAS_PART,
    HAS_OUTCOME,
    IS_COMBINED_WITH,
    REQUIRES_LR,
    REQUIRES_SOFTWARE,
    ISEXACT_MATCH,
    IS_SIMILAR_TO,
    IS_CONTINUATION_OF,
    IS_VERSION_OF,
    REPLACES,
    IS_REPLACED_WITH,
    IS_CREATED_BY,
    IS_ELICITED_BY,
    IS_RECORDED_BY,
    IS_EDITED_BY,
    IS_ANALYSED_BY,
    IS_EVALUATED_BY,
    IS_QUERIED_BY,
    IS_ACCESSED_BY,
    IS_ARCHIVED_BY,
    IS_DISPLAYED_BY,
    IS_COMPATIBLE_WITH
}

export enum RepositoryIdentifierSchemeNameEnum {
    DOI,
    HDL,
    URL,
    OAI,
    OPENDOAR,
    RE_3_D,
    ROAR,
    OTHER
}

export enum RequiresHardwareEnum {
    GRAPHIC_CARD,
    MICROPHONE,
    OCR_SYSTEM,
    SPECIAL_HARDWARE_EQUIPMENT,
    NONE,
    OTHER
}

export enum ResourceIdentifierSchemeNameEnum {
    DOI,
    ISLRN,
    HDL,
    ARK,
    AR_XIV,
    BIBCODE,
    EAN_13,
    EISSN,
    ISBN,
    ISSN,
    ISTC,
    LISSN,
    LSID,
    PURL,
    UPC,
    URL,
    URN,
    FCT,
    OAI,
    PMC,
    PMID,
    OTHER
}

export enum ResourceTypeEnum {
    CORPUS,
    DOCUMENT,
    USER_INPUT_TEXT,
    LEXICAL_CONCEPTUAL_RESOURCE,
    LANGUAGE_DESCRIPTION
}

export enum RightsStmtNameEnum {
    OPEN_ACCESS,
    CLOSED_ACCESS,
    EMBARGOED_ACCESS,
    RESTRICTED_ACCESS
}

export enum SchemeNameEnum {
    JATS,
    TEI_P_5,
    OTHER
}

export enum ScriptIdType {
    AFAK,
    AGHB,
    AHOM,
    ARAB,
    ARMI,
    ARMN,
    AVST,
    BALI,
    BAMU,
    BASS,
    BATK,
    BENG,
    BLIS,
    BOPO,
    BRAH,
    BRAI,
    BUGI,
    BUHD,
    CAKM,
    CANS,
    CARI,
    CHAM,
    CHER,
    CIRT,
    COPT,
    CPRT,
    CYRL,
    CYRS,
    DEVA,
    DSRT,
    DUPL,
    EGYD,
    EGYH,
    EGYP,
    ELBA,
    ETHI,
    GEOK,
    GEOR,
    GLAG,
    GOTH,
    GRAN,
    GREK,
    GUJR,
    GURU,
    HANG,
    HANI,
    HANO,
    HANS,
    HANT,
    HATR,
    HEBR,
    HIRA,
    HLUW,
    HMNG,
    HRKT,
    HUNG,
    INDS,
    ITAL,
    JAVA,
    JPAN,
    JURC,
    KALI,
    KANA,
    KHAR,
    KHMR,
    KHOJ,
    KNDA,
    KORE,
    KPEL,
    KTHI,
    LANA,
    LAOO,
    LATF,
    LATG,
    LATN,
    LEPC,
    LIMB,
    LINA,
    LINB,
    LISU,
    LOMA,
    LYCI,
    LYDI,
    MAHJ,
    MAND,
    MANI,
    MAYA,
    MEND,
    MERC,
    MERO,
    MLYM,
    MODI,
    MONG,
    MOON,
    MROO,
    MTEI,
    MULT,
    MYMR,
    NARB,
    NBAT,
    NKGB,
    NKOO,
    NSHU,
    OGAM,
    OLCK,
    ORKH,
    ORYA,
    OSMA,
    PALM,
    PAUC,
    PERM,
    PHAG,
    PHLI,
    PHLP,
    PHLV,
    PHNX,
    PLRD,
    PRTI,
    QAAA__QABX,
    RJNG,
    RORO,
    RUNR,
    SAMR,
    SARA,
    SARB,
    SAUR,
    SGNW,
    SHAW,
    SHRD,
    SIDD,
    SIND,
    SINH,
    SORA,
    SUND,
    SYLO,
    SYRC,
    SYRE,
    SYRJ,
    SYRN,
    TAGB,
    TAKR,
    TALE,
    TALU,
    TAML,
    TANG,
    TAVT,
    TELU,
    TENG,
    TFNG,
    TGLG,
    THAA,
    THAI,
    TIBT,
    TIRH,
    UGAR,
    VAII,
    VISP,
    WARA,
    WOLE,
    XPEO,
    XSUX,
    YIII,
    ZINH,
    ZMTH,
    ZSYM,
    ZXXX,
    ZYYY,
    ZZZZ
}

export enum SexEnum {
    MALE,
    FEMALE,
    UNKNOWN
}

export enum SizeUnitEnum {
    TERMS,
    ENTRIES,
    TURNS,
    UTTERANCES,
    ARTICLES,
    FILES,
    ITEMS,
    SECONDS,
    ELEMENTS,
    UNITS,
    MINUTES,
    HOURS,
    TEXTS,
    SENTENCES,
    BYTES,
    TOKENS,
    WORDS,
    KEYWORDS,
    IDIOMATIC_EXPRESSIONS,
    TRIPLES,
    NEOLOGISMS,
    MULTI_WORD_UNITS,
    EXPRESSIONS,
    SYNSETS,
    CLASSES,
    CONCEPTS,
    LEXICAL_TYPES,
    PHONETIC_UNITS,
    SYNTACTIC_UNITS,
    SEMANTIC_UNITS,
    PREDICATES,
    PHONEMES,
    DIPHONES,
    T_H_PAIRS,
    SYLLABLES,
    FRAMES,
    IMAGES,
    KB,
    MB,
    GB,
    RB,
    SHOTS,
    UNIGRAMS,
    BIGRAMS,
    TRIGRAMS,
    V4_GRAMS,
    V5_GRAMS,
    RULES,
    QUESTIONS,
    OTHER
}

export enum TaskEnum {
    ANAPHORA_RESOLUTION,
    CHUNKING,
    PARSING,
    NP_RECOGNITION,
    TITLES_PARSING,
    DEFINITIONS_PARSING,
    ANALYSIS,
    GENERATION,
    OTHER
}

export enum TitleTypeEnum {
    ALTERNATIVE_TITLE,
    SUBTITLE,
    TRANSLATED_TITLE,
    OTHER
}

export enum UseNLPSpecificEnum {
    ALIGNMENT,
    ANNOTATION,
    AVATAR_SYNTHESIS,
    BILINGUAL_LEXICON_INDUCTION,
    CONTRADICTION_DETECTION,
    COREFERENCE_RESOLUTION,
    DEPENDENCY_PARSING,
    DERIVATIONAL_MORPHOLOGICAL_ANALYSIS,
    DISCOURSE_ANALYSIS,
    DOCUMENT_CLASSIFICATION,
    EMOTION_GENERATION,
    EMOTION_RECOGNITION,
    ENTITY_MENTION_RECOGNITION,
    EVENT_EXTRACTION,
    EXPRESSION_RECOGNITION,
    FACE_RECOGNITION,
    FACE_VERIFICATION,
    HUMANOID_AGENT_SYNTHESIS,
    INFORMATION_EXTRACTION,
    INFORMATION_RETRIEVAL,
    INTRA_DOCUMENT_COREFERENCE_RESOLUTION,
    KNOWLEDGE_DISCOVERY,
    KNOWLEDGE_REPRESENTATION,
    LANGUAGE_IDENTIFICATION,
    LANGUAGE_MODELLING,
    LANGUAGE_MODELS_TRAINING,
    LEMMATIZATION,
    LEXICON_ACCESS,
    LEXICON_ACQUISITION_FROM_CORPORA,
    LEXICON_ENHANCEMENT,
    LEXICON_EXTRACTION_FROM_LEXICA,
    LEXICON_FORMAT_CONVERSION,
    LEXICON_MERGING,
    LEXICON_VISUALIZATION,
    LINGUISTIC_RESEARCH,
    LIP_TRACKING_ANALYSIS,
    MACHINE_TRANSLATION,
    MORPHOLOGICAL_ANALYSIS,
    MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING,
    MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING,
    MULTIMEDIA_DEVELOPMENT,
    MULTIMEDIA_DOCUMENT_PROCESSING,
    NAMED_ENTITY_RECOGNITION,
    NATURAL_LANGUAGE_GENERATION,
    NATURAL_LANGUAGE_UNDERSTANDING,
    OPINION_MINING,
    OTHER,
    PERSON_IDENTIFICATION,
    PERSON_RECOGNITION,
    PERSUASIVE_EXPRESSION_MINING,
    PHRASE_ALIGNMENT,
    QUALITATIVE_ANALYSIS,
    QUESTION_ANSWERING,
    READING_AND_WRITING_AID_APPLICATIONS,
    SEMANTIC_ROLE_LABELLING,
    SEMANTIC_WEB,
    SENTENCE_ALIGNMENT,
    SENTENCE_SPLITTING,
    SENTIMENT_ANALYSIS,
    SHALLOW_PARSING,
    SIGN_LANGUAGE_GENERATION,
    SIGN_LANGUAGE_RECOGNITION,
    SPEAKER_IDENTIFICATION,
    SPEAKER_VERIFICATION,
    SPEECH_ANALYSIS,
    SPEECH_ASSISTED_VIDEO_CONTROL,
    SPEECH_LIPS_CORRELATION_ANALYSIS,
    SPEECH_RECOGNITION,
    SPEECH_SYNTHESIS,
    SPEECH_TO_SPEECH_TRANSLATION,
    SPEECH_UNDERSTANDING,
    SPEECH_VERIFICATION,
    SPELL_CHECKING,
    SPOKEN_DIALOGUE_SYSTEMS,
    SUMMARIZATION,
    TALKING_HEAD_SYNTHESIS,
    TEMPORAL_EXPRESSION_RECOGNITION,
    TERMINOLOGY_EXTRACTION,
    TEXT_CATEGORISATION,
    TEXT_GENERATION,
    TEXT_MINING,
    TEXT_TO_SPEECH_SYNTHESIS,
    TEXTUAL_ENTAILMENT,
    TOKENIZATION,
    TOKENIZATION_AND_SENTENCE_SPLITTING,
    TOPIC_DETECTION_TRACKING,
    USER_AUTHENTICATION,
    VISUAL_SCENE_UNDERSTANDING,
    VOICE_CONTROL,
    WORD_ALIGNMENT,
    WORD_SENSE_DISAMBIGUATION
}

export enum UserTypeEnum {
    ACADEMIC,
    COMMERCIAL,
    MEMBERS_OF_GROUP
}

export enum ValidationExtentEnum {
    FULL,
    PARTIAL
}

export enum ValidationTypeEnum {
    FORMAL,
    CONTENT
}

export enum VariantIdType {
    V1606NICT,
    ALALC_97,
    FONIPA,
    FONUPA,
    FONXSAMP,
    V1694ACAD,
    V1901,
    V1959ACAD,
    V1994,
    V1996,
    ALUKU,
    AREVELA,
    AREVMDA,
    BAKU_1926,
    BALANKA,
    BARLA,
    BAUDDHA,
    BISCAYAN,
    BISKE,
    BOHORIC,
    BOONT,
    DAJNKO,
    EKAVSK,
    EMODENG,
    HEPBURN,
    HOGNORSK,
    IJEKAVSK,
    ITIHASA,
    JAUER,
    JYUTPING,
    KKCOR,
    KSCOR,
    LAUKIKA,
    LIPAW,
    LUNA_1918,
    METELKO,
    MONOTON,
    NDYUKA,
    NEDIS,
    NJIVA,
    NULIK,
    OSOJS,
    PAMAKA,
    PETR_1708,
    PINYIN,
    POLYTON,
    PUTER,
    RIGIK,
    ROZAJ,
    RUMGR,
    SCOTLAND,
    SCOUSE,
    SOLBA,
    SOTAV,
    SURMIRAN,
    SURSILV,
    SUTSILV,
    TARASK,
    UCCOR,
    UCRCOR,
    ULSTER,
    UNIFON,
    VAIDIKA,
    VALENCIA,
    VALLADER,
    WADEGILE
}

export enum VersionEnum {
    V1_0_0,
    V2_0,
    V3_0,
    V4_0
}

export enum WebServiceTypeEnum {
    SOAP,
    REST,
    OTHER
}
