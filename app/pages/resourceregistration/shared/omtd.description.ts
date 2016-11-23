/**
 * Created by stefanos on 22/11/2016.
 */

export class Description {
    desc : string;
    label: string;
}

export var sizePerValidationDesc = {
    desc : "Specifies the size of the validated part of a resource",
    label : "Size per validation"
}

export var monthDesc = {
    desc : "Optional month; to be used in two-digit format",
    label : "Label not available"
}

export var requiresSoftwareDesc = {
    desc : "Additional software required for running a s/w component and/or computational grammar",
    label : "Requires software"
}

export var dataFormatDesc = {
    desc : "Specifies the format that is used since often the mime type will not be sufficient for machine processing; NOTE: normally the format should be represented as a combination of the mimetype (e.g. application/xml) and some name and link to the documentation about the supplementary conventions used (e.g xces, alvisED etc.)",
    label : "Data format"
}

export var homepageDesc = {
    desc : "A URL used as homepage of a person, group or organization",
    label : "Homepage"
}

export var outputResourceInfoDesc = {
    desc : "Groups together information on the output of a component",
    label : "Output"
}

export var metalanguageInfoDesc = {
    desc : "Groups information on the languages used for the description of the resource",
    label : "Metalanguage"
}

export var hasOriginalSourceDesc = {
    desc : "The identifier of the original resources that were at the base of the creation process of the resource",
    label : "Has original source"
}

export var characterEncodingDesc = {
    desc : "The name of the character encoding used in the resource or accepted by the tool/service",
    label : "Character encoding"
}

export var languageDescriptionOperationInfoDesc = {
    desc : "Groups together information on the operation requirements of the Language Descriptions",
    label : "Language description operation"
}

export var fundingCountryDesc = {
    desc : "The name of the funding country, in case of national funding as mentioned in ISO3166",
    label : "Funding country"
}

export var languageIdTypeDesc = {
    desc : "Base type for languages according to ISO 639; the codes are taken from ISO 639-1 and, if not covered, from ISO 639-3, according to the BCP-47 guidlelines",
    label : "Label not available"
}

export var resourceIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for resources (corpora, lexical/conceptual resources etc.)",
    label : "Label not available"
}

export var validationTypeDesc = {
    desc : "Specifies the type of the validation that have been performed ",
    label : "Validation type"
}

export var variantIdTypeDesc = {
    desc : "Base type for language variants according to the BCP-47 guidlelines",
    label : "Label not available"
}

export var givenNameDesc = {
    desc : "The given name (first name) of a person related to the resource; initials can also be used",
    label : "Given name"
}

export var affiliationDesc = {
    desc : "Groups information on organization to whom the person is affiliated",
    label : "Affiliation"
}

export var externalRefDesc = {
    desc : "Another resource to which the lexicalConceptualResource is linked (e.g. link to a wordnet or ontology)",
    label : "External reference"
}

export var resourceNameDesc = {
    desc : "The full name by which the resource is known; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language",
    label : "Label not available"
}

export var fundingTypeDesc = {
    desc : "Specifies the type of funding of the project",
    label : "Funding type"
}

export var versionDesc = {
    desc : "Any string, usually a number, that identifies the version of a resource; for components, the recommended practice is to follow the semantic versioning (http://semver.org/); it should not be confused with the relation that links together a specific resource with its various versions",
    label : "Version"
}

export var modelInfoDesc = {
    desc : "Groups together all information related to models",
    label : "Model"
}

export var lexicalConceptualResourceTypeDesc = {
    desc : "Specifies the subtype of lexicalConceptualResource",
    label : "Lexical conceptual resource type"
}

export var journalDesc = {
    desc : "Information about the journal where the publication has appeared",
    label : "Journal"
}

export var isValidatedByDesc = {
    desc : "Links a resource to the identifier of the software component that has been used for its validation",
    label : "Is validated by"
}

export var contactPersonDesc = {
    desc : "Groups information on the person(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact person"
}

export var runningTimeDesc = {
    desc : "Gives information on the running time of a component",
    label : "Running time"
}

export var licenceDesc = {
    desc : "The licence of use for the resource; if possible, please use one of the recommended standard licences",
    label : "Licence"
}

export var addressDesc = {
    desc : "The street and the number of the postal address of a person or organization",
    label : "Address"
}

export var evaluationMeasureDesc = {
    desc : "Defines whether the evaluation measure is human or automatic",
    label : "Evaluation measure"
}

export var publisherDesc = {
    desc : "Information about the publisher",
    label : "Publisher"
}

export var usageReportDesc = {
    desc : "Reports on the research papers documenting the usage of a resource, either in a structured form or in free text",
    label : "Usage report"
}

export var annotatedCorpusInfoTypeDesc = {
    desc : "Groups together all information related to annotated corpora",
    label : "Media type parts of corpus"
}

export var funderDesc = {
    desc : "Funder of the project (e.g. EC for European Commission); preferred format is the registration through fundref",
    label : "Funder"
}

export var annotationResourceDesc = {
    desc : "A resource (e.g. ontology, terminological resource) used for annotating a document, corpus, sentence etc.",
    label : "Annotation resource"
}

export var evaluationTypeDesc = {
    desc : "Indicates the evaluation type",
    label : "Evaluation type"
}

export var validationModeDetailsDesc = {
    desc : "Textual field for additional information on validation",
    label : "Validation mode details"
}

export var metadataRecordIdentifierDesc = {
    desc : "A persistent identifier for the metadata record itself",
    label : "Metadata link"
}

export var originalDataProviderTypeDesc = {
    desc : "Refers to the type of the original data provider (repository/journal/publisher/aggregator etc.)",
    label : "Original data provider type"
}

export var feeDesc = {
    desc : "Specifies the costs that are required to access the resource, a fragment of the resource or to use a component",
    label : "Fee"
}

export var languageDescriptionEncodingInfoDesc = {
    desc : "Groups together information on the contents of the LanguageDescriptions",
    label : "Language description encoding"
}

export var sizePerGeographicCoverageDesc = {
    desc : "Provides information on size per geographically distinct section of the resource",
    label : "Size per geographic coverage"
}

export var organizationIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for organizations",
    label : "Label not available"
}

export var relationInfoDesc = {
    desc : "Groups together information on relations between resources",
    label : "Annotations"
}

export var relatedResource2Desc = {
    desc : "Reference to a resource participating in a relation; the preferred form of reference is a unique identifier, otherwise the resource name",
    label : "Related resource"
}

export var relatedResource1Desc = {
    desc : "Reference to a resource participating in a relation; the preferred form of reference is a unique identifier, otherwise the resource name",
    label : "Related resource"
}

export var lexicalConceptualResourceMediaTypeDesc = {
    desc : "Restriction of mediaType for lexicalConceptualResources",
    label : "Media type component of lexical / conceptual resource"
}

export var nonStandardLicenceNameDesc = {
    desc : "The name with which a licence is known; to be used for licences not included in the pre-defined list of recommended licences",
    label : "Name (for non-standard licences)"
}

export var timeCoverageDesc = {
    desc : "The time period that the content of a resource is about",
    label : "Time coverage"
}

export var modelMediaTypeDesc = {
    desc : "Restriction of mediaType for models",
    label : "Media type component of model"
}

export var runningEnvironmentDetailsDesc = {
    desc : "Provides further information on the running environment",
    label : "Running environment details"
}

export var validationExtentDetailsDesc = {
    desc : "Provides information on size or other details of partially validated data; to be used if only part of the resource has been validated and as an alternative to SizeInfo if the validated part cannot be counted otherwise",
    label : "Validation extent details"
}

export var resourceShortNameDesc = {
    desc : "The short form (abbreviation, acronym etc.) used to identify the resource; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Resource short name"
}

export var validatedDesc = {
    desc : "Specifies the validation status of the resource",
    label : "Validated"
}

export var fundingProjectDesc = {
    desc : "Groups information on the project that has funded the resource; choice between the ID of a project or a project title",
    label : "Funding project"
}

export var mediaTypeDesc = {
    desc : "Specifies the media type of the resource and basically corresponds to the physical medium of the content representation. Each media type is described through a distinctive set of features. A resource may consist of parts attributed to different types of media. A tool/service may take as input/output more than one different media types.",
    label : "Media type"
}

export var nonStandardLicenceTermsURLDesc = {
    desc : "Used to provide a hyperlink to a url containing the text of a licence not included in the predefined list or describing the terms of use for a language resource or terms of service for web services",
    label : "URL for non-standard licences / terms of use / terms of service"
}

export var languageDescriptionInfoDesc = {
    desc : "Groups together all information related to language descriptions",
    label : "Language description"
}

export var extratextualInformationDesc = {
    desc : "An indication of the extratextual information contained in the lexicalConceptualResouce; can be used as an alternative to audio, image, videos etc. for cases where these are not considered an important part of the lcr",
    label : "Extratextual information"
}

export var characterEncodingInfoDesc = {
    desc : "Groups together information on character encoding of the resource",
    label : "Character encoding"
}

export var organizationAlternativeNameDesc = {
    desc : "An alternative name (e.g. abbreviation, acronym, translation etc.) used for an organization",
    label : "Organization alternative name"
}

export var otherArchiveDesc = {
    desc : "Alternative url's where the mailing list messages are archived (for mirrored mailing lists)",
    label : "Other archive"
}

export var descriptionDesc = {
    desc : "Provides the description of the resource in prose; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Description"
}

export var mustBeCitedWithDesc = {
    desc : "Publication to be used for citation purposes as requested by resource providers (usually a scientific article that describes the resource)",
    label : "Must be cited with"
}

export var annotationInfoDesc = {
    desc : "Groups information on the annotated part(s) of a resource",
    label : "Annotation"
}

export var attributionTextDesc = {
    desc : "The text that must be quoted for attribution purposes when using a resource - for cases where a resource is provided with a restriction on attribution; you can use a standard text such as \"Resource A by Resource Creator/Owner B used under licence C as accessed at D\"",
    label : "Attribution text"
}

export var dateDesc = {
    desc : "Basic format for dates, with optional day and month and obligatory year",
    label : "Date"
}

export var personIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for persons",
    label : "Label not available"
}

export var modalityInfoDesc = {
    desc : "Groups information on the modalities represented in the resource",
    label : "Modality"
}

export var registerDesc = {
    desc : "For corpora that have already been using register classification",
    label : "Register"
}

export var relatedLexiconTypeDesc = {
    desc : "Indicates the position of the lexica that must or can be used with the grammar",
    label : "Related lexicon type"
}

export var corpusMediaPartsDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type parts of corpus"
}

export var startDateDesc = {
    desc : "Basic format for start dates, with optional day and month and obligatory year",
    label : "Start date"
}

export var webpageDesc = {
    desc : "A URL used as webpage of a project",
    label : "Webpage"
}

export var contactGroupDesc = {
    desc : "Groups information on the group(s) that is/are responsible for providing further information regarding the resource",
    label : "Contact group"
}

export var componentInfoDesc = {
    desc : "Groups together all information related to software components",
    label : "Component"
}

export var organizationInfoDesc = {
    desc : "Groups information on organizations related to the resource",
    label : "Organization"
}

export var sizeInfoDesc = {
    desc : "Groups information on the size of the resource or of resource parts",
    label : "Size"
}

export var departmentNameDesc = {
    desc : "The name of the department or unit (e.g. specific university faculty/department, department/unit of a research organization or private company etc.)",
    label : "Department name"
}

export var personInfoDesc = {
    desc : "Groups information relevant to personsrelated to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided",
    label : "Person"
}

export var nonStandaradLicenceTermsTextDesc = {
    desc : "Used for inputting the text of licences (that are not included in the pre-defined list) and terms of use or terms of service (for web services)",
    label : "Text (for non-standard licences / terms of use / terms of service)"
}

export var communicationInfoDesc = {
    desc : "Groups information on communication details of a person or an organization",
    label : "Communication"
}

export var geographicCoverageInfoDesc = {
    desc : "Groups information on geographic classification of the resource",
    label : "Geographic coverage"
}

export var relatedResourceTypeDesc = {
    desc : "Base type for related resources; choice between resource names and identifiers",
    label : "Resource name"
}

export var modalityTypeDesc = {
    desc : "Specifies the type of the modality represented in the resource or processed by a tool/service",
    label : "Modality type"
}

export var structuralEncodingInfoDesc = {
    desc : "Groups information on the encoding of the structure of the contents of the corpus",
    label : "Text format"
}

export var zipCodeDesc = {
    desc : "The zip code of the postal address of a person or organization ",
    label : "Zip code"
}

export var evaluationDetailsDesc = {
    desc : "Provides further information on the evaluation process of a component",
    label : "Evaluation details"
}

export var scriptIdDesc = {
    desc : "The identifier of the script subelement according to the IETF BCP47 guidelines (i.e. ISO 15924 codes)",
    label : "Script identifier"
}

export var inBookDesc = {
    desc : "The title or identifier of a book in which a publication appears (e.g. as a chapter, as article in a collection of articles, conference proceedings etc.)",
    label : "Label not available"
}

export var metadataLanguageDesc = {
    desc : "The language in which the metadata description is written according to IETF BCP47 (ISO 639-1 or ISO 639-3 for languages not covered by the first standard)",
    label : "Metadata language"
}

export var validationModeDesc = {
    desc : "Specifies the validation methodology applied",
    label : "Validation mode"
}

export var creationDateDesc = {
    desc : "The date of the creation of hte resource, expressed as a range between starting and end date or exact date",
    label : "Creation date"
}

export var dayDesc = {
    desc : "Optional day, always in two-digit format",
    label : "Label not available"
}

export var requiresLRsDesc = {
    desc : "If for running a s/w component and/or computational grammar, specific LRs (e.g. a grammar, a list of words etc.) are required",
    label : "Requires language resources"
}

export var languageVarietyInfoDesc = {
    desc : "Groups information on language varieties occurred in the resource (e.g. dialects)",
    label : "Language variety"
}

export var organizationNameDesc = {
    desc : "The name(s) of the organization",
    label : "Organization name"
}

export var nameDesc = {
    desc : "The full name of a person; the preferred format is \"family name, given name\"",
    label : "Name"
}

export var dateRangeDesc = {
    desc : "Basic format for date ranges, allowing combinations of years and full dates",
    label : "Date range"
}

export var identifierDesc = {
    desc : "Reference to a PID, DOI or any kind of identifier used by the resource provider for the resource; the attribute documents the scheme it adheres to; if the scheme name is not included in the listed values, please use \"other\" and provide a link  to  information about the scheme",
    label : "Identifier"
}

export var domainDesc = {
    desc : "Specifies the application domain of the resource or the tool/service",
    label : "Domain"
}

export var seriesDesc = {
    desc : "The name of a series or set of books. When citing an entire book, the title field gives its title and an optional series field gives the name of a series or multi-volume set in which the book is published",
    label : "Series"
}

export var creationModeDesc = {
    desc : "Specifies whether the resource is created automatically or in a manual or interactive mode ",
    label : "Label not available"
}

export var contributorDesc = {
    desc : "The identifier of the contributor, preferrably in the format: surname, initials (first name) prefix or the unique identifier of the author",
    label : "Contributor"
}

export var publicationIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for publications",
    label : "Label not available"
}

export var languageVarietyNameDesc = {
    desc : "The name of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety name"
}

export var yearDesc = {
    desc : "for year; to be used with four digits always",
    label : "Label not available"
}

export var rawCorpusInfoTypeDesc = {
    desc : "Groups together all information related to raw corpora",
    label : "Media type component of corpus"
}

export var validationInfoDesc = {
    desc : "Groups information on validation of a resource; it can be repeated to allow for different validations (e.g. formal validation of the whole resource; content validation of one part of the resource etc.). ",
    label : "Validation"
}

export var processModeDesc = {
    desc : "Base type for all modes of processing (e.g. annotation, conversion, creation etc.)",
    label : "Manual"
}

export var sizePerStructuralEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format"
}

export var datasetDistributionInfoDesc = {
    desc : "Groups information on the distribution of a dataset resource (multiple files)",
    label : "Document distribution"
}

export var grammaticalPhenomenaCoverageDesc = {
    desc : "An indication of the grammatical phenomena covered by the grammar",
    label : "Grammatical phenomena coverage"
}

export var resourceDocumentationInfoDesc = {
    desc : "Groups together information on any document describing the resource",
    label : "Resource documentation"
}

export var publicationIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Publication identifier"
}

export var documentUnstructuredDesc = {
    desc : "Used either as a free text description or as an unstructured (free form) presentation of a bibliographic record; alternative to the structured presentation of a document (cf. documentInfo)",
    label : "Unstructured document"
}

export var classificationSchemeNameDesc = {
    desc : "Base type for listing recommended/popular classification schemes",
    label : "Dewey Decimal Classification"
}

export var textGenreDesc = {
    desc : "Genre: The conventionalized discourse or text types of the content of the resource, based on extra-linguistic and internal linguistic criteria",
    label : "Text genre"
}

export var publicationTypeDesc = {
    desc : "Specifies the type of the publication",
    label : "Publication type"
}

export var requiresHardwareDesc = {
    desc : "Hardware required for running a s/w component and/or computational grammar",
    label : "Requires hardware"
}

export var languageDesc = {
    desc : "A human understandable name of the language that is used in the resource or supported by the tool/service, as specified in the BCP47 guidelines (https://tools.ietf.org/html/bcp47); the guidelines includes (a) language subtag according to ISO 639-1 and for languages not covered by this, the ISO 639-3; (b) the script tag according to ISO 15924; (c) the region tag according to ISO 3166-1;  (d) the variant subtag",
    label : "Language"
}

export var journalIdentifierDesc = {
    desc : "Reference to a DOI (recommended) or any kind of identifier used for the publication",
    label : "Journal Identifier"
}

export var sizePerLanguageDesc = {
    desc : "Provides information on the size per language component",
    label : "Size per language"
}

export var useNLPSpecificDesc = {
    desc : "Specifies the NLP application for which the resource iscreated or the application in which it has actually been used.",
    label : "Use specific to NLP"
}

export var faxNumberDesc = {
    desc : "The fax number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Fax number"
}

export var sizeDesc = {
    desc : "Specifies the size of the resource with regard to the SizeUnit measurement in form of a number",
    label : "Size"
}

export var cityDesc = {
    desc : "The name of the city, town or village as mentioned in the postal address of a person or organization ",
    label : "City"
}

export var sizePerCharacterEncodingDesc = {
    desc : "Provides information on the size of the resource parts with different character encoding",
    label : "Size per character encoding"
}

export var publicationDesc = {
    desc : "Groups information on a document in a structured format; it can be used both for published or unpublished documents",
    label : "Document"
}

export var intraannotatorAgreementDesc = {
    desc : "Provides information on the intra-annotator agreement and the methods/metrics applied  ",
    label : "Intraannotator agreement"
}

export var relationTypeDesc = {
    desc : "Specifies the type of relation holding between two entities (e.g. two resources that comprise one new resource together, a corpus and the s/w component that has been used for its creation or a corpus and the publication that describes it",
    label : "Relation type"
}

export var myStringDesc = {
    desc : "Base type for multilingual elements",
    label : "Label not available"
}

export var encodingLevelDesc = {
    desc : "Information on the contents of the lexicalConceptualResource as regards the linguistic level of analysis",
    label : "Encoding level"
}

export var lastDateUpdatedDesc = {
    desc : "Date of the last update of the version of the resource",
    label : "Last date updated"
}

export var timeCoverageInfoDesc = {
    desc : "Groups together information on time classification of the resource",
    label : "Time coverage"
}

export var documentInfoTypeDesc = {
    desc : "Base type for documents (single files) mainly intended for publications",
    label : "Publication type"
}

export var regionIdTypeDesc = {
    desc : "Base type for countries (regions) according to ISO 3166",
    label : "Label not available"
}

export var unsubscribeDesc = {
    desc : "The email address to be used for unsubscribing from the mailing list",
    label : "Unsubscribe"
}

export var annotatedDocumentInfoTypeDesc = {
    desc : "Base type for annotated documents (single files); combination of raw publication (with link to it) and the annotated file",
    label : "Label not available"
}

export var sizePerModalityDesc = {
    desc : "Provides information on the size per modality component",
    label : "Size per modality"
}

export var projectIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for projects",
    label : "Label not available"
}

export var keywordDesc = {
    desc : "A word or phrase considered important for the classification of a resource and included as tag in its metadata",
    label : "Keyword"
}

export var creationInfoDesc = {
    desc : "Groups together information on the resource creation (e.g. for corpora, selection of texts/audio files/ video files etc.; for lexica, construction of lemma list etc.)",
    label : "Creation"
}

export var relatedRepositoryTypeDesc = {
    desc : "Base type for related repositories; choice between repository names and identifiers",
    label : "Repository name"
}

export var compatibleLexiconTypeDesc = {
    desc : "Type of (external) lexicon that can be used with the grammar",
    label : "Compatible lexicon type"
}

export var languageDescriptionPerformanceInfoDesc = {
    desc : "Groups together information on the performance of the Language Descriptions",
    label : "Language description performance"
}

export var shallownessDesc = {
    desc : "Free text statement on the shallowness of the grammar (how deep the syntactic analysis performed by the grammar can be)",
    label : "Shallowness"
}

export var relatedGroupTypeDesc = {
    desc : "Base type for related groups; group name and choice between organization names and identifiers",
    label : "Group name"
}

export var operatingSystemDesc = {
    desc : "The operating system on which the tool will be running",
    label : "Operating system"
}

export var mimeTypeDesc = {
    desc : "The mime-type of the resource which is a formalized specifier for the format included or a mime-type that the tool/service accepts, in conformance with the values of the IANA (Internet Assigned Numbers Authority); you can select one of the pre-defined values or add a value, PREFERABLY FROM THE IANA MEDIA MIMETYPE RECOMMENDED VALUES (http://www.iana.org/assignments/media-types/media-types.xhtml)",
    label : "Mime type"
}

export var rawCorpusInfoDesc = {
    desc : "Groups together information on corpora of all media types",
    label : "Raw corpus"
}

export var surnameDesc = {
    desc : "The surname (family name) of a person related to the resource",
    label : "Surname"
}

export var documentMetadataRecordTypeDesc = {
    desc : "Base type for metadata records of single files (documents)",
    label : "Label not available"
}

export var httpURIDesc = {
    desc : "Base type to be used for url's, ftp's, secure url's",
    label : "Label not available"
}

export var lexicalConceptualResourceInfoDesc = {
    desc : "Groups together all information related to lexical/conceptual resources",
    label : "Lexical/conceptual resource"
}

export var publicationDateDesc = {
    desc : "The publication date or, for an unpublished work, the date it was written",
    label : "Publication date"
}

export var fullTextDesc = {
    desc : "The full text of the publication in simple text format",
    label : "Label not available"
}

export var languageDescriptionMediaTypeDesc = {
    desc : "Groups information on the media type-specific components for language descriptions",
    label : "Media type component of language description"
}

export var sizePerDomainDesc = {
    desc : "Specifies the size of resource parts per domain",
    label : "Size per domain"
}

export var metadataHeaderInfoTypeDesc = {
    desc : "Base type for metadata header",
    label : "Metadata link"
}

export var isCreatedByDesc = {
    desc : "The identifier or the s/w component used in the creation process",
    label : "Is created by"
}

export var trainingCorpusDetailsDesc = {
    desc : "Detailed description of the training corpus (e.g. size, number of features etc.)",
    label : "Label not available"
}

export var documentDistributionInfoDesc = {
    desc : "Groups information on the distribution of a document (single file)",
    label : "Document distribution"
}

export var lexicalConceptualResourceEncodingInfoDesc = {
    desc : "Groups all information regarding the contents of lexical/conceptual resources",
    label : "Lexical / Conceptual resource encoding"
}

export var isDocumentedInDesc = {
    desc : "Refers to papers, manuals, reports etc. describing the resource",
    label : "Is documented in"
}

export var metadataCreationDateDesc = {
    desc : "The date of creation of this metadata description (automatically inserted by the software)",
    label : "Metadata creation date"
}

export var licenceInfoDesc = {
    desc : "Groups information on licences for the resource; can be repeated to allow for different modes of access and restrictions of use (e.g. free for academic use, on-a-fee basis for commercial use, download of a sample for free use etc.)",
    label : "Licence"
}

export var evaluatorDesc = {
    desc : "Groups information on person or organization that evaluated the component",
    label : "Evaluator"
}

export var pagesDesc = {
    desc : "One or more page numbers or range of page numbers",
    label : "Pages"
}

export var sizePerTimeCoverageDesc = {
    desc : "Provides information on size per time period represented in the resource",
    label : "Size per time coverage"
}

export var originalDataProviderJournalDesc = {
    desc : "Information about the journal that has originally provided the metadata record",
    label : "Original data provider (journal)"
}

export var accessURLDesc = {
    desc : "A landing page, feed, SPARQL endpoint etc. that gives access to the resource or where the web service/workflow is executed; please use for resources that are \"accessibleThroughInterface\" or \"webExecutable\"",
    label : "Access URL"
}

export var geographicCoverageDesc = {
    desc : "The geographic region that the content of a resource is about; for countries, recommended use of ISO-3166",
    label : "Geographic coverage"
}

export var jurisdictionDesc = {
    desc : "Authority granted to a formally consittute legal body (e.g. EU for European Union)",
    label : "Funding program"
}

export var relatedLexiconInfoDesc = {
    desc : "Groups together information on requirements for lexica set by the LanguageDescriptions",
    label : "Related lexicon"
}

export var regiontIdDesc = {
    desc : "The identifier of the region subelement according to the IETF BCP47 guidelines (i.e. ISO 3166 codes)",
    label : "Region identifier"
}

export var titleDesc = {
    desc : "The title of the publication",
    label : "Title"
}

export var typesystemDesc = {
    desc : "A name or an identifier (e.g. url reference) to the typesystem used in the annotation of the resource or used by the component",
    label : "Tagset"
}

export var annotationDateDesc = {
    desc : "The dates (either date or range of dates) in which the annotation process has taken place",
    label : "Annotation date"
}

export var derivedResourceDesc = {
    desc : "The name, the identifier or the url of the outcome or product of the resource.",
    label : "Derived resource"
}

export var implementationLanguageDesc = {
    desc : "The programming languages needed for allowing user contributions, or for running the tools, in case no executables are available",
    label : "Implementation language"
}

export var modelTextInfoDesc = {
    desc : "Groups together all information related to the textual part of models",
    label : "Model"
}

export var metadataHeaderInfoDesc = {
    desc : "Groups information on the metadata record itself",
    label : "Metadata header"
}

export var relatedPersonTypeDesc = {
    desc : "Base type for related persons; choice between person names and person identifiers",
    label : "Person name"
}

export var emailAddressDesc = {
    desc : "Base type for validating email addresses",
    label : "Label not available"
}

export var corpusMediaPartsTypeDesc = {
    desc : "Used to specify the media type specific to corpora and group together the relevant information",
    label : "Media type component of corpus"
}

export var annotationsInfoDesc = {
    desc : "Groups together information on annotations",
    label : "Annotations"
}

export var documentMetadataRecordDesc = {
    desc : "Root element for metadata records of single files (documents); groups metadata header and information about the document itself",
    label : "Document metadata record"
}

export var dateRangeTypeDesc = {
    desc : "Base type to be used for range of dates (time periods)",
    label : "Label not available"
}

export var hasValidationReportDesc = {
    desc : "Link to a short account (prose description) of the validation details or the identifier of a document with detailed information on the validation process and results",
    label : "Has validation report"
}

export var sexDesc = {
    desc : "The gender of a person",
    label : "Sex"
}

export var editionDesc = {
    desc : "The edition of a book",
    label : "Edition"
}

export var samplesLocationDesc = {
    desc : "A url with samples of the resource or, in the case of tools, of samples of the output",
    label : "Samples location"
}

export var documentTypeDesc = {
    desc : "Specifies whether the record includes direct access to the full text, the abstract in txt format (inside the record) or serves only as a bibliographic record (includes only metadata)",
    label : "Label not available"
}

export var subjectDesc = {
    desc : "For resources that are using subject / topic classification",
    label : "Subject"
}

export var weightedGrammarDesc = {
    desc : "Indicates whether the grammar contains numerical weights (incl. probabilities)",
    label : "Weighted grammar"
}

export var corpusInfoDesc = {
    desc : "Groups together all information related to corpora",
    label : "Corpus"
}

export var sourceOfMetadataRecordDesc = {
    desc : "Refers to the catalog or repository from which the metadata record has been originated (for harvested records)",
    label : "Source of metadata record"
}

export var availabilityEndDateDesc = {
    desc : "Specifies the end date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability end date"
}

export var usageProjectDesc = {
    desc : "Groups information on the project in which the resource has been used",
    label : "Usage project"
}

export var fundingProgrammeDesc = {
    desc : "A specific programme (e.g. FP7, H2020)",
    label : "Funding program"
}

export var dateCombinationTypeDesc = {
    desc : "Base type to be used for choice betwwen range of dates and exact date",
    label : "Label not available"
}

export var emailDesc = {
    desc : "The email address of a person, group or organization",
    label : "Email"
}

export var creationModeDetailsDesc = {
    desc : "Provides further information on the creation methods and processes",
    label : "Creation mode details"
}

export var actualUseDesc = {
    desc : "Classification of the actual use of the resource",
    label : "Actual use"
}

export var actualUseInfoDesc = {
    desc : "Groups information on how the resource has already been used",
    label : "Actual use"
}

export var countryDesc = {
    desc : "The identifier of the country mentioned in the postal address of a person or organization as defined in the list of values of ISO 3166; label is used to show the full name",
    label : "Country identifier"
}

export var regionDesc = {
    desc : "The name of the region, county or department as mentioned in the postal address of a person or organization",
    label : "Region"
}

export var collectedFromDesc = {
    desc : "Refers to the entity (repository, aggregator etc.) from which the metadata record has been harvested",
    label : "Source repository"
}

export var dateTypeDesc = {
    desc : "Base type to be used for dates, allowing optional day and month",
    label : "Label not available"
}

export var corpusTextPartInfoDesc = {
    desc : "Groups together information on the text component of a resource",
    label : "Corpus text part"
}

export var subscribeDesc = {
    desc : "The email address to be used for subscribing to the mailing list",
    label : "Subscribe"
}

export var annotatedPublicationDesc = {
    desc : "Groups information on annotated documents (publications), with a link to the record of the raw publication and information about the annotation",
    label : "Document"
}

export var conferenceDesc = {
    desc : "The name of the conference in which the document has been presented",
    label : "Conference"
}

export var linguisticInformationDesc = {
    desc : "A more detailed account of the linguistic information contained in the lexicalConceptualResource",
    label : "Linguistic information"
}

export var groupNameDesc = {
    desc : "The name(s) of the group",
    label : "Group name"
}

export var mailingListNameDesc = {
    desc : "The name of the mailing list",
    label : "Mailing list name"
}

export var organizationIdentifierDesc = {
    desc : "Reference to any kind of identifier used for an organization; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)",
    label : "Identifier"
}

export var sizePerTextFormatDesc = {
    desc : "Provides information on the size of the resource parts with different format",
    label : "Size per text format"
}

export var componentDistributionInfoDesc = {
    desc : "Groups information on the distribution of a component (software code, executable programme, web service/workflow)",
    label : "Document distribution"
}

export var componentOperationInfoDesc = {
    desc : "Groups together information on the operation of a component",
    label : "Component operation"
}

export var textClassificationInfoDesc = {
    desc : "Groups together information on text type/genre of the resource",
    label : "Text classification"
}

export var projectNameDesc = {
    desc : "The name(s) of the project",
    label : "Project name"
}

export var isAnnotatedByDesc = {
    desc : "The name, the identifier or the url of the tool used for the annotation of the resource",
    label : "Annotation tool"
}

export var variantIdDesc = {
    desc : "The identifier of the variant subelement according to the IETF BCP47 guidelines",
    label : "Variant identifier"
}

export var lexicalConceptualResourceTextInfoDesc = {
    desc : "Groups information on the textual part of the lexical/conceptual resource",
    label : "Lexical / Conceptual resource text"
}

export var landingPageDesc = {
    desc : "A URL used as the landing page of a resource providing general information; for instance, it may present a description of the resource, its creators and possibly include links to the URL where it can be accessed from",
    label : "Landing page"
}

export var evaluationLevelDesc = {
    desc : "Indicates the evaluation level",
    label : "Evaluation level"
}

export var modalityTypeDetailsDesc = {
    desc : "Provides further information on modalities",
    label : "Modality type details"
}

export var resourceTypeDesc = {
    desc : "Description not available",
    label : "Resource type"
}

export var evaluatedDesc = {
    desc : "Indicates whether the component has been evaluated",
    label : "Evaluated"
}

export var documentationURLDesc = {
    desc : "Link to the documentation for the specific data format (explanations and examples)",
    label : "Label not available"
}

export var languageDescriptionTextInfoDesc = {
    desc : "Groups together all information relevant to the text module of a language description (e.g. format, languages, size etc.); it is obligatory for all language descriptions",
    label : "Language description text component"
}

export var rightsHolderDesc = {
    desc : "Groups information on a person or an organization who holds the Copyright and SGDB rights that subsist in the resource. The rights holder could be different from the creator that may have assigned the rights to another person or organization (e.g. an author as a creator assigns her rights to the publisher who is the rights holder) and the distributor that holds a specific licence (i.e. a permission) to distribute the work.",
    label : "Rights holder"
}

export var contactEmailDesc = {
    desc : "A general email address that can be used as contact point for a resource (e.g. resource@example.com); the recommended practice is, however, to indicate a person/group for contact and describe it with the relevant metadata elements",
    label : "Contact email"
}

export var userTypeDesc = {
    desc : "The conditions imposed by the user type (for instance, use may be allowed only for academic users or the fee may vary depending on the user type)",
    label : "User type"
}

export var documentLanguageDesc = {
    desc : "The language the document is written in (according to the IETF BCP47 guidelines)",
    label : "Language of the document"
}

export var originalDataProviderPublisherDesc = {
    desc : "Information about the publisher (organization) that has originally provided the metadata record",
    label : "Original data provider (publisher)"
}

export var annotationLevelDesc = {
    desc : "Specifies the annotation level of the resource or what a s/w component consumes or produces as an output",
    label : "Annotation level"
}

export var languageTypeDesc = {
    desc : "The container for the language elements (i.e. identifier according to BCP47 guidelines and all the elements that produce this id)",
    label : "Language"
}

export var formalismDesc = {
    desc : "Reference (name, bibliographic reference or link to url) for the formalism used for the creation/enrichment of the resource (grammar or tool/service)",
    label : "Formalism"
}

export var creationDetailsDesc = {
    desc : "Provides additional information on the creation of a component",
    label : "Creation details"
}

export var authorDesc = {
    desc : "The name(s) of the author(s), preferrably in the format: surname, initials (first name) prefix with optional identifier for persons",
    label : "Author"
}

export var usageInfoDesc = {
    desc : "Groups information on usage of the resource (both intended and actual use)",
    label : "Usage"
}

export var domainInfoDesc = {
    desc : "Groups together information on domains represented in the resource; can be repeated for parts of the resource with distinct domain",
    label : "Domain"
}

export var archiveDesc = {
    desc : "The url where the mailing list messages are archived",
    label : "Archive"
}

export var componentEvaluationInfoDesc = {
    desc : "Groups together information on the evaluation status of a component",
    label : "Component evaluation"
}

export var personIdentifierDesc = {
    desc : "Reference to any kind of identifier used for a person; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)",
    label : "Identifier"
}

export var documentDesc = {
    desc : "Root element for documents (single files); choice among raw publications and annotated publications",
    label : "Label not available"
}

export var rightsStmtNameDesc = {
    desc : "The name of an official statement indicative of licensing terms for the use of a resource (e.g. open access, free to read etc.); its semantics should be clear, preferrably formally expressed and stored at a url",
    label : "Rights statement name"
}

export var annotatorDesc = {
    desc : "Groups information on the annotators of the specific annotation type",
    label : "Annotator"
}

export var variantNameDesc = {
    desc : "variant name used for the model",
    label : "Label not available"
}

export var taskDesc = {
    desc : "An indication of the task performed by the grammar",
    label : "Task"
}

export var journalTitleDesc = {
    desc : "The title(s) of the journal",
    label : "Journal title"
}

export var positionDesc = {
    desc : "The position or the title of a person if affiliated to an organization ",
    label : "Position"
}

export var endDateDesc = {
    desc : "Basic format for end dates, with optional day and month and obligatory year",
    label : "End date"
}

export var inputContentResourceInfoDesc = {
    desc : "Groups together information on the requirements set on the input resource of a component",
    label : "Input"
}

export var identificationInfoDesc = {
    desc : "Groups together information needed to identify the resource",
    label : "Identification"
}

export var sourceMetadataLinkDesc = {
    desc : "A link to the original metadata record, in cases of harvesting",
    label : "Original metadata record link"
}

export var versionInfoDesc = {
    desc : "Groups information on a specific version or release of the resource",
    label : "Version"
}

export var textTypeDesc = {
    desc : "Specifies the type of the text according to a text type classification",
    label : "Text type"
}

export var projectShortNameDesc = {
    desc : "A short name, abbreviation or acronym of a project related to the resource",
    label : "Project short name"
}

export var multilingualityTypeDetailsDesc = {
    desc : "Provides further information on multilinguality of a resource in free text",
    label : "Multilinguality type details"
}

export var relatedOrganizationTypeDesc = {
    desc : "Base type for related organizations; choice between organization names and identifiers",
    label : "Organization name"
}

export var copyrightStatementDesc = {
    desc : "A free text statement that may be included with the resource, usually containing the name(s) of copyright holders and licensing terms (intended for resources that already have such a statement); the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Copyright statement"
}

export var languageInfoDesc = {
    desc : "Groups information on the languages represented in the resource",
    label : "Language"
}

export var sizePerAnnotationDesc = {
    desc : "Provides information on size for the annotated parts of the resource",
    label : "Size per annotation"
}

export var relatedProjectTypeDesc = {
    desc : "Base type for related projects; choice between project names and identifiers",
    label : "Project name"
}

export var metadataLastDateUpdatedDesc = {
    desc : "The date of the last updating of the metadata record (automatically inserted by the system)",
    label : "Metadata last date updated"
}

export var resourceCreationInfoDesc = {
    desc : "Groups information on the creation procedure of a resource",
    label : "Resource creation"
}

export var componentTypeDesc = {
    desc : "Specifies the type of a component, in terms of the function/task it performs",
    label : "Type of component"
}

export var outputDesc = {
    desc : "Indicates whether the output of the operation of the grammar is a statement of grammaticality (grammatical/ungrammatical) or structures (interpretation of the input)",
    label : "Output"
}

export var algorithmDetailsDesc = {
    desc : "Detailed description of the algorithm, incl. info on whether it's supervised or not",
    label : "Label not available"
}

export var actualUseDetailsDesc = {
    desc : "Reports on the usage of the resource in free text",
    label : "Actual use details"
}

export var originalDataProviderInfoDesc = {
    desc : "Refers to the original data provider, in case the metadata record carries information taken from previous repositories/journals/publishers (e.g. in case the record's last source is an aggregator)",
    label : "Original data provider"
}

export var sizeUnitDesc = {
    desc : "Specifies the unit that is used when providing information on the size of the resource or of resource parts",
    label : "Size unit"
}

export var languageDescriptionTypeDesc = {
    desc : "The type of the language description",
    label : "Language description type"
}

export var metadataIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for metadata records",
    label : "Label not available"
}

export var sizePerLanguageVarietyDesc = {
    desc : "Provides information on the size per language variety component",
    label : "Size per language variety"
}

export var languageIdDesc = {
    desc : "The identifier of the language subelement according to the IETF BCP47 guidelines (i.e. ISO 639-3 codes when existing supplemented with ISO 639-3 codes for new entries)",
    label : "Language identifier"
}

export var validationExtentDesc = {
    desc : "The resource coverage in terms of validated data",
    label : "Validation extent"
}

export var textFormatInfoDesc = {
    desc : "Groups information on the text format(s) of a resource",
    label : "Text format"
}

export var repositoryNameDesc = {
    desc : "The name(s) of the repository",
    label : "Repository name"
}

export var mailingListInfoDesc = {
    desc : "Groups information on the mailing list(s) that can be used for further information regarding the resource",
    label : "Mailing list"
}

export var multilingualityTypeDesc = {
    desc : "Indicates whether the corpus is parallel, comparable or mixed",
    label : "Multilinguality type"
}

export var hasEvaluationReportDesc = {
    desc : "A bibliographical record of or link to a report describing the evaluation process, tool, method etc. of the component",
    label : "Evaluation report"
}

export var conformanceToStandardsBestPracticesDesc = {
    desc : "Specifies the standards or the best practices to which the tagset used for the annotation conforms",
    label : "Conformance to standards / best practices"
}

export var repositoryDesc = {
    desc : "Information about the repository where the publication is deposited",
    label : "Repository"
}

export var runningEnvironmentInfoDesc = {
    desc : "Groups together information on the running environment of a tool or a language description",
    label : "Running environment"
}

export var originalDataProviderRepositoryDesc = {
    desc : "Information about the repository that has originally provided the metadata record",
    label : "Original data provider (repository)"
}

export var journalIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for journals",
    label : "Label not available"
}

export var postDesc = {
    desc : "The email address to be used for posting messages to the mailing list",
    label : "Post"
}

export var repositoryIdentifierTypeDesc = {
    desc : "Base type for identifier schemes for repositories, archives etc.",
    label : "Label not available"
}

export var extraTextualInformationUnitDesc = {
    desc : "The unit of the extratextual information contained in the lexical conceptual resource",
    label : "Extratextual information unit"
}

export var evaluationCriterionDesc = {
    desc : "Defines the criteria of the evaluation of a tool",
    label : "Evaluation criteria"
}

export var distributionMediumDesc = {
    desc : "Specifies the medium (channel) used for delivery or providing access to the resource",
    label : "Distribution medium"
}

export var availabilityStartDateDesc = {
    desc : "Specifies the start date of availability of a resource - only for cases where a resource is available for a restricted time period.",
    label : "Availability start date"
}

export var rightsStatementInfoDesc = {
    desc : "Groups information on official statements indicative of licensing terms for the use of a resource (e.g. open access, free to read, all rights reserved etc.); its semantics should be clear, preferrably formally expressed and stored at a url",
    label : "Rights statement"
}

export var structuralEncodingDesc = {
    desc : "Information on whether the structure of the corpus documents is formally encoded and the scheme used for this",
    label : "Structural encoding"
}

export var projectDatesDesc = {
    desc : "The duration dates the project",
    label : "Project dates"
}

export var downloadURLDesc = {
    desc : "Any url where the resource can be downloaded from; please, use if the resource is \"downloadable\" and you have not uploaded the resource in the repository",
    label : "Download URL"
}

export var tagsetDesc = {
    desc : "A name or an identifier (e.g. url reference) to the tagset used in the annotation of the resource or used by the component",
    label : "Tagset"
}

export var isEvaluatedByDesc = {
    desc : "The identifier of the component used for the evaluation of the component being described",
    label : "Is evaluated by"
}

export var theoreticModelDesc = {
    desc : "Name of the theoretic model applied for the creation or enrichment of the resource, and/or a reference (URL or bibliographic reference) to informative material about the theoretic model used",
    label : "Theoretic model"
}

export var projectIdentifierDesc = {
    desc : "A unique identifier for research projects",
    label : "Label not available"
}

export var updateFrequencyDesc = {
    desc : "Specifies the frequency with which the resource is updated",
    label : "Update frequency"
}

export var lingualityTypeDesc = {
    desc : "Indicates whether the resource includes one, two or more languages",
    label : "Linguality type"
}

export var rightsStmtURLDesc = {
    desc : "Link to the URL with the text that formally explains the licensing conditions imposed by the statement",
    label : "Rights statement URL"
}

export var relatedMetadataSchemeDesc = {
    desc : "Refers to the metadata schema originally used for the description of the resource",
    label : "Original metadata scheme"
}

export var metadataCreatorDesc = {
    desc : "Groups information on the person that has created the metadata record (for records manually edited)",
    label : "Metadata creator"
}

export var volumeDesc = {
    desc : "Specifies the volume of a journal or multivolume book",
    label : "Volume"
}

export var sizePerTextClassificationDesc = {
    desc : "Provides information on size of resource parts with different text classification",
    label : "Size per text classification"
}

export var scriptIdTypeDesc = {
    desc : "Base type for scripts according to ISO 15924",
    label : "Label not available"
}

export var foreseenUseDesc = {
    desc : "Classification of the intended use of the resource",
    label : "Foreseen use"
}

export var conditionsOfUseDesc = {
    desc : "Specifies the conditions and terms of use imposed by the licence. It is an optional element and only to be taken as providing brief human readable information on the fact that the LR is provided under a specific set of conditions. These correspond to the most frequently used conditions imposed by the licensor of the LR (via the specified licence). The proper exposition of all conditions and possible exceptions is to be found inside the licence text. LR depositors should, hence, carefully choose the values of this field to match the licence chosen and users should carefully read that licence before using the LR.",
    label : "Conditions of use"
}

export var componentDocumentationInfoDesc = {
    desc : "Groups together information on the documentation of a component",
    label : "Component documentation"
}

export var relatedJournalTypeDesc = {
    desc : "Base type for related journals; choice between journal titles and identifiers",
    label : "Journal title"
}

export var actorInfoTypeDesc = {
    desc : "Base type for actors/agents; choice between person and organization",
    label : "Label not available"
}

export var annotationModeDesc = {
    desc : "Indicates whether the resource is annotated manually or by automatic processes",
    label : "Label not available"
}

export var robustnessDesc = {
    desc : "Free text statement on the robustness of the grammar (how well the grammar can cope with misspelt/unknown etc. input, i.e. whether it can produce even partial interpretations of the input)",
    label : "Robustness"
}

export var interannotatorAgreementDesc = {
    desc : "Provides information on the interannotator agreement and the methods/metrics applied ",
    label : "Interannotator agreement"
}

export var rightsStatementInfoTypeDesc = {
    desc : "Groups information on official statements indicative of licensing terms for the use of a resource (e.g. open access, free to read, all rights reserved etc.); its semantics should be clear, preferrably formally expressed and stored at a url",
    label : "Rights statement"
}

export var journalInfoTypeDesc = {
    desc : "Base type for journals",
    label : "Journal Identifier"
}

export var attachedLexiconPositionDesc = {
    desc : "Indicates the position of the lexicon, if attached to the grammar",
    label : "Attached lexicon position"
}

export var foreseenUseInfoDesc = {
    desc : "Groups information on the use for which the resource is created",
    label : "Foreseen use"
}

export var abstractDesc = {
    desc : "The abstract of the document in plain text format; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.",
    label : "Abstract"
}

export var guidelinesDocumentedInDesc = {
    desc : "A bibliographic reference or ms:httpURI link to the annotation manual",
    label : "Guidelines documented in"
}

export var contactInfoDesc = {
    desc : "Groups information on the possible sources for obtaining further information regarding the resource; at least a general email address or a landing page (website) must be supplied, although the recommended practice is to describe a contact person/group",
    label : "Contact"
}

export var languageTagDesc = {
    desc : "The identifier of the language that is included in the resource or supported by the tool/service, according to the IETF BCP47 guidelines; NOTE in the XSD there is no validation as to the validity of the id, but the system validates the input metadata and the editor produces the correct id on the basis of the subelements (language, script, region and variant)",
    label : "Language"
}

export var projectInfoDesc = {
    desc : "Groups information on a project related to the resource(e.g. a project the resource has been used in; a funded project that led to the resource creation etc.)",
    label : "Project"
}

export var lingualityInfoDesc = {
    desc : "Groups information on the number of languages of the resource part and of the way they are combined to each other",
    label : "Linguality"
}

export var affiliatedOrganizationDesc = {
    desc : "The organization to which a person is affiliated",
    label : "Affiliated organization"
}

export var revisionDesc = {
    desc : "Provides an account of the revisions in free text or a link to a document with revisions",
    label : "Revision"
}

export var annotationModeDetailsDesc = {
    desc : "Provides further information on annotation process ",
    label : "Annotation mode details"
}

export var dataFormatSpecificDesc = {
    desc : "The supplementary level of data format",
    label : "ACL anthology"
}

export var personNameDesc = {
    desc : "The name(s) of the person, preferrably in the format: surname, initials (first name) prefix",
    label : "Person name"
}

export var resourceCreatorDesc = {
    desc : "Groups information on the person or the organization that has created the resource",
    label : "Resource creator"
}

export var telephoneNumberDesc = {
    desc : "The telephone number of a person or an organization; recommended format: +_international code_city code_number",
    label : "Telephone number"
}

export var annotationStandoffDesc = {
    desc : "Indicates whether the annotation is created inline or in a stand-off fashion",
    label : "Annotation standoff"
}

export var algorithmDesc = {
    desc : "Training algorithm used for the model (e.g. maximum entropy, svm etc.)",
    label : "Label not available"
}

export var languageVarietyTypeDesc = {
    desc : "Specifies the type of the language variety that occurs in the resource or is supported by a tool/service",
    label : "Language variety type"
}

export var validatorDesc = {
    desc : "Groups information on the person(s) or the organization(s) that validated the resource",
    label : "Validator"
}

export var annotatedCorpusInfoDesc = {
    desc : "Groups together information on annotated corpora of all media types",
    label : "Annotated corpus"
}

export var componentCreationInfoDesc = {
    desc : "Groups together information on the creation of a component",
    label : "Component creation"
}


