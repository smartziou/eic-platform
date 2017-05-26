export class Description {
    desc: string;
    label: string;
}
export var sizePerValidationDesc = {
    desc : "Specifies the size of the validated part of a resource",
    label : "Size per validation"
};

export var monthDesc = {
    desc : "Optional month; to be used in two-digit format",
    label : "Month"
};

export var requiresSoftwareDesc = {
    desc : "Additional software required for running a s/w component and/or computational grammar",
    label : "Requires software"
};

export var dataFormatDesc = {
    desc : "Specifies the format that is used since often the mime type will not be sufficient for machine processing; NOTE: normally the format should be represented as a combination of the mimetype (e.g. application/xml) and some name and link to the documentation about the supplementary conventions used (e.g xces, alvisED etc.)",
    label : "Plain text"
};

export var groupInfoTypeDesc = {
    desc : "Base type for groups; group name and affiliations",
    label : "Group name"
};

export var homepageDesc = {
    desc : "A URL used as homepage of a person, group or organization",
    label : "Homepage"
};

export var outputResourceInfoDesc = {
    desc : "Groups together information on the output of a component",
    label : "Information on output"
};

export var metalanguageInfoDesc = {
    desc : "Groups information on the languages used for the description of the resource",
    label : "Metalanguage"
};

export var hasOriginalSourceDesc = {
    desc : "The identifier of the original resources that were at the base of the creation process of the resource",
    label : "Has original source"
};

export var characterEncodingDesc = {
    desc : "The name of the character encoding used in the resource or supported by the component",
    label : "Character encoding set"
};

export var languageDescriptionOperationInfoDesc = {
    desc : "Groups together information on the operation requirements of the Language Descriptions",
    label : "Language description operation"
};

export var fundingCountryDesc = {
    desc : "The name of the funding country, in case of national funding as mentioned in ISO3166",
    label : "Funding country"
};

export var languageIdTypeDesc = {
    desc : "Base type for languages according to ISO 639; the codes are taken from ISO 639-1 and, if not covered, from ISO 639-3, according to the BCP-47 guidlelines",
    label : "languageIdType"
};

export var resourceIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for resources (corpora, lexical/conceptual resources etc.)",
    label : "Resource identifier scheme name"
};

export var validationTypeDesc = {
    desc : "Specifies the type of the validation that have been performed ",
    label : "Validation type"
};

export var variantIdTypeDesc = {
    desc : "Base type for language variants according to the BCP-47 guidlelines",
    label : "variantIdType"
};

export var givenNameDesc = {
    desc : "The given name (first name) of a person; initials can also be used",
    label : "Given name"
};

export var affiliationDesc = {
    desc : "Groups information on the organization to whom a person is affiliated",
    label : "Affiliation"
};

export var compatibleLexiconTypeDesc = {
    desc : "Type of (external) lexicon that can be used with the grammar",
    label : "Compatible lexicon type"
};

export var multiValueDesc = {
    desc : "Specifies whether the parameter takes a list of values; the default value is set to false",
    label : "Multi-value"
};

export var resourceNameDesc = {
    desc : "Specifies the name (full title) by which the resource is known",
    label : "resourceName"
};

export var fundingTypeDesc = {
    desc : "Specifies the type of funding of the project",
    label : "Funding type"
};

export var versionDesc = {
    desc : "Associates a resource with a numeric pattern of the form major_version.minor_version.patch (in accordance to the semantic versioning guidelines, cf. http://semver.org) that identifies its version",
    label : "Version"
};

export var intendedApplicationDesc = {
    desc : "Specifies an application where the resource can be used or is recommended to be used",
    label : "intendedApplication"
};

export var lexicalConceptualResourceTypeDesc = {
    desc : "Specifies the subtype of lexicalConceptualResource",
    label : "Lexical conceptual resource type"
};

export var publicDesc = {
    desc : "Declares whether the resource is meant for private use or can be publicly available through the registry",
    label : "public"
};

export var isValidatedByDesc = {
    desc : "Links a resource to the identifier of the software component that has been used for its validation",
    label : "Is validated by"
};

export var contactPersonDesc = {
    desc : "Groups information on the person(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact person"
};

export var runningTimeDesc = {
    desc : "Gives information on the running time of a component",
    label : "Running time"
};

export var licenceDesc = {
    desc : "The licence of use for the resource",
    label : "Licence"
};

export var addressDesc = {
    desc : "The street and the number of the postal address of a person or organization",
    label : "Address"
};

export var evaluationMeasureDesc = {
    desc : "Defines whether the evaluation measure is human or automatic",
    label : "Evaluation measure"
};

export var publisherDesc = {
    desc : "Information about the publisher",
    label : "Publisher"
};

export var conditionOfUseDesc = {
    desc : "Specifies the conditions and terms of use imposed by the licence. It is an optional element and only to be taken as providing brief human readable information on the fact that the LR is provided under a specific set of conditions. These correspond to the most frequently used conditions imposed by the licensor of the LR (via the specified licence). The proper exposition of all conditions and possible exceptions is to be found inside the licence text. LR depositors should, hence, carefully choose the values of this field to match the licence chosen and users should carefully read that licence before using the LR.",
    label : "Condition of use"
};

export var usageReportDesc = {
    desc : "Reports on the research papers documenting the usage of a resource, either in a structured form or in free text",
    label : "Usage report"
};

export var repositoryInfoTypeDesc = {
    desc : "Base type for repositories",
    label : "Repository name"
};

export var annotatedCorpusInfoTypeDesc = {
    desc : "Groups together all information related to annotated corpora",
    label : "Media type parts of corpus"
};

export var funderDesc = {
    desc : "Funder of the project (e.g. EC for European Commission); preferred format is the registration through fundref",
    label : "Funder"
};

export var annotationResourceDesc = {
    desc : "A name or an identifier (e.g. url reference) to the ancillary resource (e.g. tagset, ontology, term list) used in the annotation of the resource or used by the component",
    label : "Annotation resource"
};

export var evaluationTypeDesc = {
    desc : "Indicates the evaluation type",
    label : "Evaluation type"
};

export var validationModeDetailsDesc = {
    desc : "Textual field for additional information on validation",
    label : "Validation mode details"
};

export var metadataRecordIdentifierDesc = {
    desc : "A persistent identifier for the metadata record itself",
    label : "Metadata record identifier"
};

export var originalDataProviderTypeDesc = {
    desc : "Refers to the type of the original data provider (repository/journal/publisher/aggregator etc.)",
    label : "Original data provider type"
};

export var feeDesc = {
    desc : "Specifies the costs that are required to access the resource, a fragment of the resource or to use a component",
    label : "Fee"
};

export var languageDescriptionEncodingInfoDesc = {
    desc : "Groups together information on the contents of the LanguageDescriptions",
    label : "Language description encoding"
};

export var applicationFunctionDesc = {
    desc : "Specifies the type of an end-user application, in terms of the function/task it performs",
    label : "Type of application"
};

export var parameterNameDesc = {
    desc : "A name used to identify the parameter",
    label : "Parameter name"
};

export var organizationIdentifierTypeDesc = {
    desc : "Base type for identifiers for organizations",
    label : "Organization identifier scheme name"
};

export var parameterTypeDesc = {
    desc : "Classifies the parameter according to a specific (not yet standardised) typing system (e.g. whether it's boolean, string, integer, a document, mapping etc.)",
    label : "Parameter type"
};

export var relationInfoDesc = {
    desc : "Groups together information on relations between resources",
    label : "Annotations"
};

export var relatedResource2Desc = {
    desc : "Reference to a resource participating in a relation; the preferred form of reference is a unique identifier, otherwise the resource name",
    label : "Related resource"
};

export var relatedResource1Desc = {
    desc : "Reference to a resource participating in a relation; the preferred form of reference is a unique identifier, otherwise the resource name",
    label : "Related resource"
};

export var nonStandardLicenceNameDesc = {
    desc : "The name with which a licence is known; to be used for licences not included in the pre-defined list of licences",
    label : "Name (for non-standard licences / terms of use)"
};

export var timeCoverageDesc = {
    desc : "The time period that the content of a resource is about",
    label : "Time coverage"
};

export var modelMediaTypeDesc = {
    desc : "Restriction of mediaType for models",
    label : "Media type component of model"
};

export var runningEnvironmentDetailsDesc = {
    desc : "Provides further information on the running environment",
    label : "Running environment details"
};

export var validationExtentDetailsDesc = {
    desc : "Provides information on size or other details of partially validated data; to be used if only part of the resource has been validated and as an alternative to SizeInfo if the validated part cannot be counted otherwise",
    label : "Validation extent details"
};

export var resourceShortNameDesc = {
    desc : "A short form (e.g. abbreviation, acronym etc.) used to identify the resource.",
    label : "Resource short name"
};

export var tagDesc = {
    desc : "The tag of current code. By default, it's set to HEAD during development.",
    label : "tag"
};

export var validatedDesc = {
    desc : "Specifies the validation status of the resource",
    label : "Validated"
};

export var fundingProjectDesc = {
    desc : "Groups information on the project that has funded the resource; choice between the ID of a project or a project title",
    label : "Funding project"
};

export var mediaTypeDesc = {
    desc : "Specifies the media type of the resource and basically corresponds to the physical medium of the content representation. Each media type is described through a distinctive set of features. A resource may consist of parts attributed to different types of media. A tool/service may take as input/output more than one different media types.",
    label : "Media type"
};

export var nonStandardLicenceTermsURLDesc = {
    desc : "Used to provide a hyperlink to a URL containing the text of a licence not included in the predefined list or describing the terms of use for a language resource or terms of service for web services",
    label : "URL for non-standard licences / terms of use / terms of service"
};

export var languageDescriptionInfoDesc = {
    desc : "Groups together all information related to language descriptions",
    label : "Language description"
};

export var extratextualInformationDesc = {
    desc : "An indication of the extratextual information contained in the lexicalConceptualResouce; can be used as an alternative to audio, image, videos etc. for cases where these are not considered an important part of the lcr",
    label : "Extratextual information"
};

export var webServiceTypeDesc = {
    desc : "A classification of web services based on the protocol used for accessing them",
    label : "web service type"
};

export var characterEncodingInfoDesc = {
    desc : "Groups together information on character encoding of the resource",
    label : "Character encoding"
};

export var organizationAlternativeNameDesc = {
    desc : "An alternative name (e.g. abbreviation, acronym, translation etc.) used for an organization",
    label : "Organization alternative name"
};

export var otherArchiveDesc = {
    desc : "Alternative ULRs where the mailing list messages are archived (for mirrored mailing lists)",
    label : "Other archive"
};

export var descriptionDesc = {
    desc : "A short free-text account that provides information about the resource (e.g. function, contents, technical information etc.)",
    label : "Description"
};

export var mustBeCitedWithDesc = {
    desc : "Specifies one or more publication that must be used for citation purposes as requested by the resource provider (usually a scientific article that describes the resource)",
    label : "Publlication to be used for citation purposes"
};

export var annotationInfoDesc = {
    desc : "Groups information on the annotated part(s) of a resource",
    label : "Annotation"
};

export var attributionTextDesc = {
    desc : "The text that must be quoted for attribution purposes when using a resource - for cases where a resource is provided with a restriction on attribution; you can use a standard text such as \"Resource A by Resource Creator/Owner B used under licence C as accessed at D\"",
    label : "Attribution text"
};

export var runningEnvironmentInfoDesc = {
    desc : "Groups together information on the running environment of a tool or a language description",
    label : "Running environment"
};

export var dateDesc = {
    desc : "Basic format for dates, with optional day and month and obligatory year",
    label : "Date"
};

export var schemeURIDesc = {
    desc : "Specifies the URI of the scheme according to which the resource identifier is assigned by the authority that issues it",
    label : "URI for scheme"
};

export var personIdentifierTypeDesc = {
    desc : "Base type for identifiers for persons",
    label : "Person identifier scheme name"
};

export var modalityInfoDesc = {
    desc : "Groups information on the modalities represented in the resource",
    label : "Modality"
};

export var projectIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the project identifier is assigned by the authority that issues it",
    label : "Project identifier scheme name"
};

export var registerDesc = {
    desc : "For corpora that have already been using register classification",
    label : "Register"
};

export var relatedLexiconTypeDesc = {
    desc : "Indicates the position of the lexica that must or can be used with the grammar",
    label : "Related lexicon type"
};

export var corpusMediaPartsDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type parts of corpus"
};

export var sizePerLanguageDesc = {
    desc : "Provides information on the size per language component",
    label : "Size per language"
};

export var webpageDesc = {
    desc : "A URL used as webpage of a project",
    label : "Webpage"
};

export var contactGroupDesc = {
    desc : "Groups information on the group(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact group"
};

export var componentInfoDesc = {
    desc : "Groups together all information related to software components",
    label : "Component"
};

export var organizationInfoDesc = {
    desc : "Groups information on organizations related to the resource",
    label : "Organization"
};

export var sizeInfoDesc = {
    desc : "Groups information on the size of the resource or of resource parts",
    label : "Size"
};

export var departmentNameDesc = {
    desc : "The name of the department or unit (e.g. specific university faculty/department, department/unit of a research organization or private company etc.)",
    label : "Department name"
};

export var personInfoDesc = {
    desc : "Groups information relevant to persons related to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided",
    label : "Person"
};

export var nonStandaradLicenceTermsTextDesc = {
    desc : "Used for inputting the text of licences (that are not included in the pre-defined list) and terms of use or terms of service (for web services)",
    label : "Text (for non-standard licences / terms of use / terms of service)"
};

export var communicationInfoDesc = {
    desc : "Groups information on the communication details of a person or an organization",
    label : "Communication information"
};

export var geographicCoverageInfoDesc = {
    desc : "Groups information on geographic classification of the resource",
    label : "Geographic coverage"
};

export var userQueryDesc = {
    desc : "The query text that has created the corpus of scholarly publications",
    label : "User query"
};

export var relatedResourceTypeDesc = {
    desc : "Base type for related resources; sequence of resource names and identifiers",
    label : "relatedResourceType"
};

export var modalityTypeDesc = {
    desc : "Specifies the type of the modality represented in the resource or processed by a tool/service",
    label : "Modality type"
};

export var structuralEncodingInfoDesc = {
    desc : "Groups information on the encoding of the structure of the contents of the corpus",
    label : "Structural encoding"
};

export var zipCodeDesc = {
    desc : "The zip code of the postal address of a person or organization",
    label : "Zip code"
};

export var evaluationDetailsDesc = {
    desc : "Provides further information on the evaluation process of a component",
    label : "Evaluation details"
};

export var scriptIdDesc = {
    desc : "The identifier of the script subelement according to the IETF BCP47 guidelines (i.e. ISO 15924 codes)",
    label : "Script identifier"
};

export var inBookDesc = {
    desc : "The title or identifier of a book in which a publication appears (e.g. as a chapter, as article in a collection of articles, conference proceedings etc.)",
    label : "inBook"
};

export var validationModeDesc = {
    desc : "Specifies the validation methodology applied",
    label : "Validation mode"
};

export var creationDateDesc = {
    desc : "The date of creation of the resource, expressed as a range between starting and end date or exact date",
    label : "Creation date"
};

export var dayDesc = {
    desc : "Optional day, always in two-digit format",
    label : "Day"
};

export var requiresLRsDesc = {
    desc : "If for running a s/w component and/or computational grammar, specific LRs (e.g. a grammar, a list of words etc.) are required",
    label : "Requires language resources"
};

export var languageVarietyInfoDesc = {
    desc : "Groups information on language varieties occurred in the resource (e.g. dialects)",
    label : "Language variety"
};

export var organizationNameDesc = {
    desc : "The full name of an organization",
    label : "Organization name"
};

export var nameDesc = {
    desc : "The full name of a person; the preferred format is \"family name, given name\"",
    label : "Name"
};

export var dateRangeDesc = {
    desc : "Basic format for date ranges, allowing combinations of years and full dates",
    label : "Date range"
};

export var domainDesc = {
    desc : "Specifies the application domain of the resource or the tool/service",
    label : "Domain"
};

export var seriesDesc = {
    desc : "The name of a series or set of books. When citing an entire book, the title field gives its title and an optional series field gives the name of a series or multi-volume set in which the book is published",
    label : "series"
};

export var creationModeDesc = {
    desc : "Specifies whether the resource is created automatically or in a manual or interactive mode ",
    label : "Creation mode"
};

export var structuralEncodingDesc = {
    desc : "Information on whether the structure of the corpus documents is formally encoded and the scheme used for this",
    label : "Structural encoding"
};

export var publicationIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for publications",
    label : "Publication identifier scheme name"
};

export var languageVarietyNameDesc = {
    desc : "The name of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety name"
};

export var yearDesc = {
    desc : "for year; to be used with four digits always",
    label : "Year"
};

export var parameterInfoDesc = {
    desc : "Groups together information on each parameter of a component",
    label : "Parameter"
};

export var rawCorpusInfoTypeDesc = {
    desc : "Groups together all information related to raw corpora",
    label : "Media type component of corpus"
};

export var validationInfoDesc = {
    desc : "Groups information on validation of a resource; it can be repeated to allow for different validations (e.g. formal validation of the whole resource; content validation of one part of the resource etc.). ",
    label : "Validation"
};

export var processModeDesc = {
    desc : "Base type for all modes of processing (e.g. annotation, conversion, creation etc.)",
    label : "Manual"
};

export var workflowDesc = {
    desc : "Indicates whether the component is a workflow, i.e. consists of other components in a linear or branching execution",
    label : "Workflow"
};

export var grammaticalPhenomenaCoverageDesc = {
    desc : "An indication of the grammatical phenomena covered by the grammar",
    label : "Grammatical phenomena coverage"
};

export var resourceDocumentationInfoDesc = {
    desc : "Groups together information on any document (publication, report, manual etc.) about the resource",
    label : "Documentation about the resource"
};

export var publicationIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Publication identifier"
};

export var documentUnstructuredDesc = {
    desc : "Used to encode a bibliographic record, preferrably in the form of a bibtex record or as a free text description",
    label : "Unstructured document"
};

export var classificationSchemeNameDesc = {
    desc : "Base type for listing recommended/popular classification schemes",
    label : "Dewey Decimal Classification"
};

export var textGenreDesc = {
    desc : "Genre: The conventionalized discourse or text types of the content of the resource, based on extra-linguistic and internal linguistic criteria",
    label : "Text genre"
};

export var publicationTypeDesc = {
    desc : "Specifies the type of the publication; the list takes values from the COAR Controlled Vocabulary for Resource Type Genres (restricted to concepts under \"text\" that can be used for publications)",
    label : "publicationType"
};

export var lexicalConceptualResourceMediaTypeDesc = {
    desc : "Restriction of mediaType for lexicalConceptualResources",
    label : "Media type component of lexical / conceptual resource"
};

export var languageDesc = {
    desc : "The language that is used in the resource or supported by the component, as specified in the BCP47 guidelines (https://tools.ietf.org/html/bcp47); the language tag is built upon (a) language tag according to ISO 639-1 and for languages not covered by this, the ISO 639-3; (b) the script tag according to ISO 15924; (c) the region tag according to ISO 3166-1;  (d) the variant subtag",
    label : "Language"
};

export var journalIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Journal Identifier"
};

export var startDateDesc = {
    desc : "Basic format for start dates, with optional day and month and obligatory year",
    label : "Start date"
};

export var faxNumberDesc = {
    desc : "The fax number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Fax number"
};

export var dataFormatInfoDesc = {
    desc : "Groups the information for the data format; at least mimetype and, if required, a description and documentation url should be provided",
    label : "Data format information"
};

export var sizeDesc = {
    desc : "Specifies the size of the resource with regard to the SizeUnit measurement in form of a number",
    label : "Size"
};

export var cityDesc = {
    desc : "The name of the city, town or village as mentioned in the postal address of a person or organization",
    label : "City"
};

export var sizePerCharacterEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different character encoding",
    label : "Size per character encoding"
};

export var publicationDesc = {
    desc : "Groups information on a document in a structured format; it can be used both for published or unpublished documents",
    label : "publication"
};

export var intraannotatorAgreementDesc = {
    desc : "Provides information on the intra-annotator agreement and the methods/metrics applied  ",
    label : "Intraannotator agreement"
};

export var systemDesc = {
    desc : "The name of the issue management system, e.g. Bugzilla",
    label : "system"
};

export var resourceIdentifierDesc = {
    desc : "Associates a resource to an identifier (e.g. PID, DOI, internal to an organization etc.), i.e. a string used to uniquely identify it",
    label : "Identifier"
};

export var relationTypeDesc = {
    desc : "Specifies the type of relation holding between two entities (e.g. two resources that comprise one new resource together, a corpus and the s/w component that has been used for its creation or a corpus and the publication that describes it",
    label : "Relation type"
};

export var myStringDesc = {
    desc : "Base type for multilingual elements",
    label : "myString"
};

export var encodingLevelDesc = {
    desc : "Information on the contents of the lexicalConceptualResource as regards the linguistic level of analysis",
    label : "Encoding level"
};

export var lastDateUpdatedDesc = {
    desc : "Date when the version of the resource being described was last updated",
    label : "Last date updated"
};

export var timeCoverageInfoDesc = {
    desc : "Groups together information on time classification of the resource",
    label : "Time coverage"
};

export var documentInfoTypeDesc = {
    desc : "Base type for documents (single files) mainly intended for publications",
    label : "documentInfoType"
};

export var regionIdTypeDesc = {
    desc : "Base type for countries (regions) according to ISO 3166",
    label : "regionIdType"
};

export var unsubscribeDesc = {
    desc : "The email address to be used for unsubscribing from the mailing list",
    label : "Unsubscribe"
};

export var annotatedDocumentInfoTypeDesc = {
    desc : "Base type for annotated documents (single files); combination of raw publication (with link to it) and the annotated file",
    label : "annotatedDocumentInfoType"
};

export var theoreticModelDesc = {
    desc : "Name of the theoretic model applied for the creation or enrichment of the resource, and/or a reference (URL or bibliographic reference) to informative material about the theoretic model used",
    label : "Theoretic model"
};

export var projectIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for projects",
    label : "Project identifier scheme name"
};

export var keywordDesc = {
    desc : "A word or phrase considered important for the classification of a resource and included as tag in its metadata",
    label : "Keyword"
};

export var rightsInfoDesc = {
    desc : "Groups information on licensing terms for the distribution of a resource; at least a licence (preferred option) or formal rights statement (e.g. open access) must be declared for the resource",
    label : "Information on distribution rights"
};

export var workflowDescriptionDesc = {
    desc : "Reserved for the description of workflow (most probably in Galaxy); provides information on the components that the workflow consists of and how it should be executed",
    label : "Workflow description"
};

export var externalRefDesc = {
    desc : "Another resource to which the lexicalConceptualResource is linked (e.g. link to a wordnet or ontology)",
    label : "External reference"
};

export var languageDescriptionPerformanceInfoDesc = {
    desc : "Groups together information on the performance of the Language Descriptions",
    label : "Language description performance"
};

export var shallownessDesc = {
    desc : "Free text statement on the shallowness of the grammar (how deep the syntactic analysis performed by the grammar can be)",
    label : "Shallowness"
};

export var operatingSystemDesc = {
    desc : "The operating system on which the tool can run",
    label : "Operating system"
};

export var mimeTypeDesc = {
    desc : "The mime-type of the resource which is a formalized specifier for the format included or a mime-type that the tool/service accepts, in conformance with the values of the IANA (Internet Assigned Numbers Authority); you can select one of the pre-defined values or add a value, PREFERABLY FROM THE IANA MEDIA MIMETYPE RECOMMENDED VALUES (http://www.iana.org/assignments/media-types/media-types.xhtml)",
    label : "Mime type"
};

export var rawCorpusInfoDesc = {
    desc : "Groups together information on corpora of all media types",
    label : "Raw corpus"
};

export var surnameDesc = {
    desc : "The surname (family name) of a person",
    label : "Surname"
};

export var httpURIDesc = {
    desc : "Base type to be used for url's, ftp's, secure url's",
    label : "httpURI"
};

export var lexicalConceptualResourceInfoDesc = {
    desc : "Groups together all information related to lexical/conceptual resources",
    label : "Lexical/conceptual resource"
};

export var publicationDateDesc = {
    desc : "The publication date or, for an unpublished work, the date it was written",
    label : "publicationDate"
};

export var resourceIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the resource identifier is assigned by the authority that issues it (e.g. DOI, ISLRN etc.)",
    label : "Resource identifier scheme name"
};

export var fullTextDesc = {
    desc : "The full text of the publication in simple text format",
    label : "Full text"
};

export var languageDescriptionMediaTypeDesc = {
    desc : "Groups information on the media type-specific components for language descriptions",
    label : "Media type component of language description"
};

export var sizePerDomainDesc = {
    desc : "Specifies the size of resource parts per domain",
    label : "Size per domain"
};

export var metadataHeaderInfoTypeDesc = {
    desc : "Base type for metadata header",
    label : "Metadata record identifier"
};

export var isCreatedByDesc = {
    desc : "The identifier or the s/w component used in the creation process",
    label : "Is created by"
};

export var trainingCorpusDetailsDesc = {
    desc : "Detailed description of the training corpus (e.g. size, number of features etc.)",
    label : "trainingCorpusDetails"
};

export var documentDistributionInfoDesc = {
    desc : "Groups information on the distribution of a document (single file)",
    label : "Document distribution"
};

export var linguisticInformationDesc = {
    desc : "A more detailed account of the linguistic information contained in the lexicalConceptualResource",
    label : "Linguistic information"
};

export var lexicalConceptualResourceEncodingInfoDesc = {
    desc : "Groups all information regarding the contents of lexical/conceptual resources",
    label : "Lexical / Conceptual resource encoding"
};

export var isDocumentedInDesc = {
    desc : "Links a resource to publications, research articles, manuals, reports etc. that describe it",
    label : "Is documented in"
};

export var metadataCreationDateDesc = {
    desc : "The date of creation of this metadata description",
    label : "Metadata creation date"
};

export var licenceInfoDesc = {
    desc : "Groups information on licences for the resource; can be repeated to allow for different modes of access and restrictions of use (e.g. free for academic use, on-a-fee basis for commercial use, download of a sample for free use etc.)",
    label : "Licence"
};

export var evaluatorDesc = {
    desc : "Groups information on person or organization that evaluated the component",
    label : "Evaluator"
};

export var pagesDesc = {
    desc : "One or more page numbers or range of page numbers",
    label : "pages"
};

export var sizePerTimeCoverageDesc = {
    desc : "Provides information on size per time period represented in the resource",
    label : "Size per time coverage"
};

export var originalDataProviderJournalDesc = {
    desc : "Information about the journal that has originally provided the metadata record",
    label : "Original data provider (journal)"
};

export var accessURLDesc = {
    desc : "A landing page, feed, SPARQL endpoint etc. that gives access to the resource or where the web service/workflow is executed; please use for resources that are \"accessibleThroughInterface\" or \"webExecutable\"",
    label : "Access URL"
};

export var urlDesc = {
    desc : "URL for the issue management system used by the project.",
    label : "url"
};

export var geographicCoverageDesc = {
    desc : "The geographic region that the content of a resource is about; for countries, recommended use of ISO-3166",
    label : "Geographic coverage"
};

export var jurisdictionDesc = {
    desc : "Authority granted to a formally consittute legal body (e.g. EU for European Union)",
    label : "Funding program"
};

export var relatedLexiconInfoDesc = {
    desc : "Groups together information on requirements for lexica set by the LanguageDescriptions",
    label : "Related lexicon"
};

export var regiontIdDesc = {
    desc : "The identifier of the region subelement according to the IETF BCP47 guidelines (i.e. ISO 3166 codes)",
    label : "Region identifier"
};

export var titleDesc = {
    desc : "The title of the publication",
    label : "title"
};

export var typesystemDesc = {
    desc : "A name or an identifier (e.g. url reference) to the typesystem used in the annotation of the resource or used by the component",
    label : "Tagset"
};

export var metadataIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the metadata record identifier is assigned by the authority that issues it",
    label : "Metadata identifier scheme name"
};

export var annotationDateDesc = {
    desc : "The dates (either date or range of dates) in which the annotation process has taken place",
    label : "Annotation date"
};

export var derivedResourceDesc = {
    desc : "The name, the identifier or the url of the outcome or product of the resource.",
    label : "Derived resource"
};

export var implementationLanguageDesc = {
    desc : "The programming languages needed for allowing user contributions, or for running the tools, in case no executables are available",
    label : "Implementation language"
};

export var modelTextInfoDesc = {
    desc : "Groups together all information related to the textual part of models",
    label : "Model"
};

export var modelInfoDesc = {
    desc : "Groups together all information related to models",
    label : "Model"
};

export var metadataHeaderInfoDesc = {
    desc : "Groups information on the metadata record itself",
    label : "Metadata header"
};

export var emailAddressDesc = {
    desc : "Base type for validating email addresses",
    label : "emailAddress"
};

export var dateCombinationTypeDesc = {
    desc : "Base type to be used for choice betwwen range of dates and exact date",
    label : "dateCombinationType"
};

export var annotationsInfoDesc = {
    desc : "Groups together information on annotations",
    label : "Annotations"
};

export var documentMetadataRecordDesc = {
    desc : "Root element for metadata records of single files (documents); groups metadata header and information about the document itself",
    label : "documentMetadataRecord"
};

export var dateRangeTypeDesc = {
    desc : "Base type to be used for range of dates (time periods)",
    label : "dateRangeType"
};

export var personIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the person identifier is assigned by the authority that issues it (e.g. ORCID, ScopusId, ResearcherID etc.)",
    label : "Person identifier scheme name"
};

export var creationInfoDesc = {
    desc : "Groups together information on the resource creation (e.g. for corpora, selection of texts/audio files/ video files etc.; for lexica, construction of lemma list etc.)",
    label : "Creation"
};

export var hasValidationReportDesc = {
    desc : "Link to a short account (prose description) of the validation details or the identifier of a document with detailed information on the validation process and results",
    label : "Has validation report"
};

export var corpusMediaPartsTypeDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type component of corpus"
};

export var extraTextualInformationUnitDesc = {
    desc : "The unit of the extratextual information contained in the lexical conceptual resource",
    label : "Extratextual information unit"
};

export var sexDesc = {
    desc : "Either of the two main categories (male and female) into which humans and most other living things are divided on the basis of their reproductive functions. (Source:OED)",
    label : "Sex"
};

export var editionDesc = {
    desc : "The edition of a book",
    label : "edition"
};

export var samplesLocationDesc = {
    desc : "Links a resource to a url (or url's) with samples of the resource or, in the case of tools, of samples of input and/or output processes",
    label : "Samples location"
};

export var parameterDescriptionDesc = {
    desc : "Provides a short account of the parameter (function it performs, input / output requirements etc.) in free text",
    label : "Description of the parameter"
};

export var documentTypeDesc = {
    desc : "Specifies whether the record includes direct access to the full text, the abstract in txt format (inside the record) or serves only as a bibliographic record (includes only metadata)",
    label : "documentType"
};

export var subjectDesc = {
    desc : "For resources that are using subject / topic classification",
    label : "Subject"
};

export var weightedGrammarDesc = {
    desc : "Indicates whether the grammar contains numerical weights (incl. probabilities)",
    label : "Weighted grammar"
};

export var corpusInfoDesc = {
    desc : "Groups together all information related to corpora",
    label : "Corpus"
};

export var sourceOfMetadataRecordDesc = {
    desc : "Refers to the catalog or repository from which the metadata record has been originated (for harvested records)",
    label : "Source of metadata record"
};

export var availabilityEndDateDesc = {
    desc : "Specifies the end date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability end date"
};

export var usageProjectDesc = {
    desc : "Groups information on the project in which the resource has been used",
    label : "Usage project"
};

export var fundingProgrammeDesc = {
    desc : "A specific programme (e.g. FP7, H2020)",
    label : "Funding program"
};

export var postalAddressDesc = {
    desc : "The postal address of a person, group or organization",
    label : "Postal address"
};

export var emailDesc = {
    desc : "The email address of a person, group or organization",
    label : "Email address"
};

export var creationModeDetailsDesc = {
    desc : "Provides further information on the creation methods and processes",
    label : "Creation mode details"
};

export var applicationInvolvedDesc = {
    desc : "Specifies an application where the resource has actually been involved and used",
    label : "Application where the resource was used"
};

export var optionalDesc = {
    desc : "Specifies whether the parameter is mandatory or optional; the default value is set to true",
    label : "Optional"
};

export var actualUseInfoDesc = {
    desc : "Groups information on how the resource has already been used",
    label : "Actual use"
};

export var personInfoTypeDesc = {
    desc : "Groups information relevant to persons related to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided",
    label : "Person"
};

export var countryDesc = {
    desc : "The country mentioned in the postal address of a person or organization as defined in the list of values of ISO 3166",
    label : "Country (identifier)"
};

export var regionDesc = {
    desc : "The name of the region, county or department as mentioned in the postal address of a person or organization",
    label : "Region"
};

export var scmInfoDesc = {
    desc : "Information about the SCM (Software Configuration Management, also called Source Code/Control Management or, succinctly, version control)",
    label : "SCM information"
};

export var connectionDesc = {
    desc : "The source control management system URL that describes the repository and how to connect to the repository.",
    label : "connection"
};

export var applicationTypeDesc = {
    desc : "A classification of NLP/TDM applications; please, note that the ontology is under revision",
    label : "Application type"
};

export var collectedFromDesc = {
    desc : "Refers to the entity (repository, aggregator etc.) from which the metadata record has been harvested",
    label : "Source repository"
};

export var dateTypeDesc = {
    desc : "Base type to be used for dates, allowing optional day and month",
    label : "Day"
};

export var nameTypeDesc = {
    desc : "Allows to classify the type of the name of an entity",
    label : "Short name"
};

export var corpusTextPartInfoDesc = {
    desc : "Groups together information on the text component of a resource",
    label : "Corpus text part"
};

export var subscribeDesc = {
    desc : "The email address to be used for subscribing to the mailing list",
    label : "Subscribe"
};

export var annotatedPublicationDesc = {
    desc : "Groups information on annotated documents (publications), with a link to the record of the raw publication and information about the annotation",
    label : "annotatedPublication"
};

export var conferenceDesc = {
    desc : "The name of the conference in which the document has been presented",
    label : "conference"
};

export var onLineHelpURLDesc = {
    desc : "URL link to an online manual or help pages",
    label : "On line help URL"
};

export var groupNameDesc = {
    desc : "The name(s) of the group",
    label : "Group name"
};

export var mailingListNameDesc = {
    desc : "The name of the mailing list",
    label : "Mailing list name"
};

export var organizationIdentifierDesc = {
    desc : "Associates an organizationto an identifier, i.e. a string used to uniquely identify it",
    label : "Organization identifier"
};

export var sizePerTextFormatDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format"
};

export var componentDistributionInfoDesc = {
    desc : "Groups information on the distributable form of a component (e.g. as a software code, an executable programme, a web service etc.)",
    label : "Document distribution"
};

export var componentOperationInfoDesc = {
    desc : "Groups together information on the operation of a component",
    label : "Component operation"
};

export var textClassificationInfoDesc = {
    desc : "Groups together information on text type/genre of the resource",
    label : "Text classification"
};

export var projectNameDesc = {
    desc : "The full name of a project related to the resource",
    label : "Project name"
};

export var journalIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the journal identifier is assigned by the authority that issues it",
    label : "Journal identifier scheme name"
};

export var isAnnotatedByDesc = {
    desc : "The name, the identifier or the url of the tool used for the annotation of the resource",
    label : "Annotation tool"
};

export var variantIdDesc = {
    desc : "The identifier of the variant subelement according to the IETF BCP47 guidelines",
    label : "Variant identifier"
};

export var lexicalConceptualResourceTextInfoDesc = {
    desc : "Groups information on the textual part of the lexical/conceptual resource",
    label : "Lexical / Conceptual resource text"
};

export var landingPageDesc = {
    desc : "A URL used as the landing page of a resource providing general information; for instance, it may present a description of the resource, its creators and possibly include links to the URL where it can be accessed from",
    label : "Landing page"
};

export var evaluationLevelDesc = {
    desc : "Indicates the evaluation level",
    label : "Evaluation level"
};

export var modalityTypeDetailsDesc = {
    desc : "Provides further information on modalities",
    label : "Modality type details"
};

export var resourceTypeDesc = {
    desc : "Description not available",
    label : "Resource type"
};

export var evaluatedDesc = {
    desc : "Indicates whether the component has been evaluated",
    label : "Evaluated"
};

export var documentationURLDesc = {
    desc : "Link to the documentation for the specific data format (explanations and examples)",
    label : "documentationURL"
};

export var languageDescriptionTextInfoDesc = {
    desc : "Groups together all information relevant to the text module of a language description (e.g. format, languages, size etc.); it is obligatory for all language descriptions",
    label : "Language description text component"
};

export var rightsHolderDesc = {
    desc : "Groups information on a person or an organization who holds the Copyright and SGDB rights that subsist in the resource. The rights holder could be different from the creator that may have assigned the rights to another person or organization (e.g. an author as a creator assigns her rights to the publisher who is the rights holder) and the distributor that holds a specific licence (i.e. a permission) to distribute the work.",
    label : "Rights holder"
};

export var contactEmailDesc = {
    desc : "A general email address that can be used as contact point for a resource (e.g. resource@example.com)",
    label : "Contact email"
};

export var userTypeDesc = {
    desc : "The conditions imposed by the user type (for instance, use may be allowed only for academic users or the fee may vary depending on the user type)",
    label : "User type"
};

export var documentLanguageDesc = {
    desc : "The language the document is written in (according to the IETF BCP47 guidelines)",
    label : "documentLanguage"
};

export var issueManagementInfoDesc = {
    desc : "Information about the issue tracking (or bug tracking) system used to manage the resource.",
    label : "issueManagementInfo"
};

export var originalDataProviderPublisherDesc = {
    desc : "Information about the publisher (organization) that has originally provided the metadata record",
    label : "Original data provider (publisher)"
};

export var annotationLevelDesc = {
    desc : "Specifies the annotation level of the resource or what a s/w component consumes or produces as an output",
    label : "Annotation level"
};

export var languageTypeDesc = {
    desc : "The container for the language elements (i.e. identifier according to BCP47 guidelines and all the elements that produce this id)",
    label : "Language"
};

export var formalismDesc = {
    desc : "Reference (name, bibliographic reference or link to url) for the formalism used for the creation/enrichment of the resource (grammar or tool/service)",
    label : "Formalism"
};

export var creationDetailsDesc = {
    desc : "Provides additional information on the creation of a component",
    label : "Creation details"
};

export var authorDesc = {
    desc : "The name(s) of the author(s), preferrably in the format: surname, initials (first name) prefix with optional identifier for persons",
    label : "author"
};

export var usageInfoDesc = {
    desc : "Groups information on usage of the resource (both intended use and cases where it has already been used)",
    label : "Information on usage"
};

export var domainInfoDesc = {
    desc : "Groups together information on domains represented in the resource; can be repeated for parts of the resource with distinct domain",
    label : "Domain"
};

export var archiveDesc = {
    desc : "The URL where the mailing list messages are archived",
    label : "Archive"
};

export var componentEvaluationInfoDesc = {
    desc : "Groups together information on the evaluation status of a component",
    label : "Component evaluation"
};

export var personIdentifierDesc = {
    desc : "Associates a person to an identifier (e.g. ORCID, LinkedIn etc.), i.e. a string used to uniquely identify it",
    label : "Person identifier"
};

export var documentDesc = {
    desc : "Root element for documents (single files); choice among raw publications and annotated publications",
    label : "document"
};

export var datasetDistributionInfoDesc = {
    desc : "Groups information on the distribution of a dataset resource (multiple files)",
    label : "Document distribution"
};

export var annotatorDesc = {
    desc : "Groups information on the annotators of the specific annotation type",
    label : "Annotator"
};

export var variantNameDesc = {
    desc : "variant name used for the model",
    label : "variantName"
};

export var developerConnectionDesc = {
    desc : "Just like connection, but for developers, i.e. this scm connection will not be read only.",
    label : "developerConnection"
};

export var taskDesc = {
    desc : "An indication of the task performed by the grammar",
    label : "Task"
};

export var journalTitleDesc = {
    desc : "The full name of the journal",
    label : "Journal title"
};

export var commandDesc = {
    desc : "A command line used for the execution of a component",
    label : "Command"
};

export var rightsStatementDesc = {
    desc : "The name (identifier) of a formal statement indicative of licensing terms for the use of a resource (e.g. open access, free to read etc.); its semantics should be clear, preferrably formally expressed and stored at a URL",
    label : "Rights statement"
};

export var positionDesc = {
    desc : "The position or the title of a person if affiliated to an organization",
    label : "Position"
};

export var endDateDesc = {
    desc : "Basic format for end dates, with optional day and month and obligatory year",
    label : "End date"
};

export var inputContentResourceInfoDesc = {
    desc : "Groups together information on the requirements set on the input resource of a component",
    label : "Information on input"
};

export var componentDistributionFormDesc = {
    desc : "Specifies the form of distribution of the component (e.g. as source code, executable programme etc.)",
    label : "web service"
};

export var hashkeyDesc = {
    desc : "Specifies the hashkey for indexing and downloading the publication",
    label : "Hashkey"
};

export var sourceMetadataLinkDesc = {
    desc : "A link to the original metadata record, in cases of harvesting",
    label : "Original metadata record link"
};

export var versionInfoDesc = {
    desc : "Groups information on a specific version or release of the resource",
    label : "Information on version"
};

export var textTypeDesc = {
    desc : "Specifies the type of the text according to a text type classification",
    label : "Text type"
};

export var projectShortNameDesc = {
    desc : "A short name, abbreviation or acronym of a project related to the resource",
    label : "Project short name"
};

export var TDMMethodDesc = {
    desc : "Description not available",
    label : "TDM method"
};

export var multilingualityTypeDetailsDesc = {
    desc : "Provides further information on multilinguality of a resource in free text",
    label : "Multilinguality type details"
};

export var copyrightStatementDesc = {
    desc : "A free text statement that may be included with the resource, usually containing the name(s) of copyright holders and licensing terms (intended for resources that already have such a statement); the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Copyright statement"
};

export var languageInfoDesc = {
    desc : "Groups information on the languages represented in the resource",
    label : "Language"
};

export var sizePerAnnotationDesc = {
    desc : "Provides information on size for the annotated parts of the resource",
    label : "Size per annotation"
};

export var metadataLastDateUpdatedDesc = {
    desc : "The date of the last updating of the metadata record",
    label : "Metadata last date updated"
};

export var resourceCreationInfoDesc = {
    desc : "Groups information on the creation procedure and agents of a resource",
    label : "Resource creation"
};

export var componentTypeDesc = {
    desc : "Specifies the type of a component, in terms of the function/task it performs; please, note that the ontology is under revision",
    label : "Type of component"
};

export var parameterLabelDesc = {
    desc : "A label used to show to the user for the parameter",
    label : "Parameter label"
};

export var outputDesc = {
    desc : "Indicates whether the output of the operation of the grammar is a statement of grammaticality (grammatical/ungrammatical) or structures (interpretation of the input)",
    label : "Output"
};

export var algorithmDetailsDesc = {
    desc : "Detailed description of the algorithm, incl. info on whether it's supervised or not",
    label : "algorithmDetails"
};

export var actualUseDetailsDesc = {
    desc : "Reports on the usage of the resource in free text",
    label : "Actual use details"
};

export var originalDataProviderInfoDesc = {
    desc : "Refers to the original data provider, in case the metadata record carries information taken from previous repositories/journals/publishers (e.g. in case the record's last source is an aggregator)",
    label : "Original data provider"
};

export var publicationIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the publication identifier is assigned by the authority that issues it (e.g. DOI, PubMed Central etc.)",
    label : "Publication identifier scheme name"
};

export var sizeUnitDesc = {
    desc : "Specifies the unit that is used when providing information on the size of the resource or of resource parts",
    label : "Size unit"
};

export var languageDescriptionTypeDesc = {
    desc : "The type of the language description",
    label : "Language description type"
};

export var metadataIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for metadata records",
    label : "Metadata identifier scheme name"
};

export var sizePerLanguageVarietyDesc = {
    desc : "Provides information on the size per language variety component",
    label : "Size per language variety"
};

export var languageIdDesc = {
    desc : "The identifier of the language subelement according to the IETF BCP47 guidelines (i.e. ISO 639-3 codes when existing supplemented with ISO 639-3 codes for new entries)",
    label : "Language identifier"
};

export var validationExtentDesc = {
    desc : "The resource coverage in terms of validated data",
    label : "Validation extent"
};

export var textFormatInfoDesc = {
    desc : "Groups information on the text format(s) of a resource",
    label : "Text format"
};

export var repositoryNameDesc = {
    desc : "The name(s) of the repository",
    label : "Repository name"
};

export var mailingListInfoDesc = {
    desc : "Groups information on the mailing list(s) that can be used for further information regarding the resource",
    label : "Mailing list"
};

export var multilingualityTypeDesc = {
    desc : "Indicates whether the corpus is parallel, comparable or mixed",
    label : "Multilinguality type"
};

export var hasEvaluationReportDesc = {
    desc : "A bibliographical record of or link to a report describing the evaluation process, tool, method etc. of the component",
    label : "Evaluation report"
};

export var conformanceToStandardsBestPracticesDesc = {
    desc : "Specifies the standards or the best practices to which the tagset used for the annotation conforms",
    label : "Conformance to standards / best practices"
};

export var repositoryDesc = {
    desc : "Information about the repository where the publication is deposited",
    label : "repository"
};

export var journalDesc = {
    desc : "Information about the journal where the publication has appeared",
    label : "journal"
};

export var originalDataProviderRepositoryDesc = {
    desc : "Information about the repository that has originally provided the metadata record",
    label : "Original data provider (repository)"
};

export var versionTypeDesc = {
    desc : "A type of versioning vocabulary used mainly for works (e.g. scholarly articles, books etc.) that go through a formal review process before final publication, marked with major changes across the versions",
    label : "Version type"
};

export var organizationIdentifierSchemeNameDesc = {
    desc : "Specifies the name of the scheme according to which the organization identifier is assigned by the authority that issues it",
    label : "Organization identifier scheme name"
};

export var journalIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for journals",
    label : "Journal identifier scheme name"
};

export var postDesc = {
    desc : "The email address to be used for posting messages to the mailing list",
    label : "Post"
};

export var repositoryIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for repositories, archives etc.",
    label : "DOI (Digital Object Identifier)"
};

export var sizePerGeographicCoverageDesc = {
    desc : "Provides information on size per geographically distinct section of the resource",
    label : "Size per geographic coverage"
};

export var evaluationCriterionDesc = {
    desc : "Defines the criteria of the evaluation of a tool",
    label : "Evaluation criteria"
};

export var distributionMediumDesc = {
    desc : "Specifies the medium (channel) used for delivery or providing access to the resource",
    label : "Distribution medium"
};

export var availabilityStartDateDesc = {
    desc : "Specifies the start date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability start date"
};

export var contributorDesc = {
    desc : "The identifier of the contributor, preferrably in the format: surname, initials (first name) prefix or the unique identifier of the author",
    label : "contributor"
};

export var projectDatesDesc = {
    desc : "The duration dates the project",
    label : "Project dates"
};

export var defaultValueDesc = {
    desc : "Used for parameters that take a list of values in order to indicate the default value(s)",
    label : "Parameter default value"
};

export var downloadURLDesc = {
    desc : "Any url where the resource can be downloaded from; please, use if the resource is downloadable and you have not uploaded the resource in the repository",
    label : "Download URL"
};

export var isEvaluatedByDesc = {
    desc : "The identifier of the component used for the evaluation of the component being described",
    label : "Is evaluated by"
};

export var sizePerModalityDesc = {
    desc : "Provides information on the size per modality component",
    label : "Size per modality"
};

export var projectIdentifierDesc = {
    desc : "A unique identifier for research projects",
    label : "projectIdentifier"
};

export var updateFrequencyDesc = {
    desc : "Specifies the frequency with which a new updated version of the resource is released (e.g. every 6 months or two years)",
    label : "Update frequency"
};

export var lingualityTypeDesc = {
    desc : "Indicates whether the resource includes one, two or more languages",
    label : "Linguality type"
};

export var relatedMetadataSchemeDesc = {
    desc : "Refers to the metadata schema originally used for the description of the resource",
    label : "Original metadata scheme"
};

export var metadataCreatorDesc = {
    desc : "Groups information on the person that has created the metadata record (for records manually edited)",
    label : "Metadata creator"
};

export var volumeDesc = {
    desc : "Specifies the volume of a journal or multivolume book",
    label : "volume"
};

export var sizePerTextClassificationDesc = {
    desc : "Provides information on size of resource parts with different text classification",
    label : "Size per text classification"
};

export var scriptIdTypeDesc = {
    desc : "Base type for scripts according to ISO 15924",
    label : "scriptIdType"
};

export var actorInfoTypeDesc = {
    desc : "Base type for actors/agents; choice between person and organization",
    label : "actorInfoType"
};

export var annotationModeDesc = {
    desc : "Indicates whether the resource is annotated manually or by automatic processes",
    label : "annotationMode"
};

export var robustnessDesc = {
    desc : "Free text statement on the robustness of the grammar (how well the grammar can cope with misspelt/unknown etc. input, i.e. whether it can produce even partial interpretations of the input)",
    label : "Robustness"
};

export var interannotatorAgreementDesc = {
    desc : "Provides information on the interannotator agreement and the methods/metrics applied ",
    label : "Interannotator agreement"
};

export var sizePerStructuralEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format"
};

export var journalInfoTypeDesc = {
    desc : "Base type for journals",
    label : "Journal title"
};

export var attachedLexiconPositionDesc = {
    desc : "Indicates the position of the lexicon, if attached to the grammar",
    label : "Attached lexicon position"
};

export var identificationInfoDesc = {
    desc : "Groups together information needed to identify and describe at a minimal level the resource",
    label : "Identification"
};

export var abstractDesc = {
    desc : "The abstract of the document in plain text format; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "abstract"
};

export var guidelinesDocumentedInDesc = {
    desc : "A bibliographic reference or ms:httpURI link to the annotation manual",
    label : "Guidelines documented in"
};

export var contactInfoDesc = {
    desc : "Groups information on the possible sources for obtaining further information regarding the resource; at least a general email address or a landing page (website) must be supplied, although the recommended practice is to describe a contact person or group",
    label : "Contact information"
};

export var languageTagDesc = {
    desc : "The identifier of the language that is included in the resource or supported by the component, according to the IETF BCP47 guidelines",
    label : "Language"
};

export var processingResourceTypeDesc = {
    desc : "The type of the resource that a component takes as input or produces as output",
    label : "Processing resource type"
};

export var projectInfoDesc = {
    desc : "Groups information on a project related to the resource(e.g. a project the resource has been used in; a funded project that led to the resource creation etc.)",
    label : "Project"
};

export var applicationDesc = {
    desc : "Indicates whether the component can be used as an integrated end-user application",
    label : "Application"
};

export var lingualityInfoDesc = {
    desc : "Groups information on the number of languages of the resource part and of the way they are combined to each other",
    label : "Linguality"
};

export var affiliatedOrganizationDesc = {
    desc : "The organization to which the group is affiliated",
    label : "Affiliated organization"
};

export var revisionDesc = {
    desc : "A short free-text account of the revisions made to the current version vis-a-vis the previous version or a link to a document reporting these revisions",
    label : "Revision"
};

export var annotationModeDetailsDesc = {
    desc : "Provides further information on annotation process ",
    label : "Annotation mode details"
};

export var repositoryIdentifierDesc = {
    desc : "Reference to the identifier used for repositories, archives etc.",
    label : "Repository identifier"
};

export var resourceCreatorDesc = {
    desc : "Used to provide information on the person or the organization that has created the resource",
    label : "Resource creator"
};

export var telephoneNumberDesc = {
    desc : "The telephone number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Telephone number"
};

export var annotationStandoffDesc = {
    desc : "Indicates whether the annotation is created inline or in a stand-off fashion",
    label : "Annotation standoff"
};

export var algorithmDesc = {
    desc : "Training algorithm used for the model (e.g. maximum entropy, svm etc.)",
    label : "algorithm"
};

export var languageVarietyTypeDesc = {
    desc : "Specifies the type of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety type"
};

export var validatorDesc = {
    desc : "Groups information on the person(s) or the organization(s) that validated the resource",
    label : "Validator"
};

export var annotatedCorpusInfoDesc = {
    desc : "Groups together information on annotated corpora of all media types",
    label : "Annotated corpus"
};

export var componentCreationInfoDesc = {
    desc : "Groups together information on the creation of a component",
    label : "Component creation"
};

