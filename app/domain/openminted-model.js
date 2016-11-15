"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyString = (function () {
    function MyString() {
    }
    return MyString;
}());
exports.MyString = MyString;
MyString.prototype.desc = "Base type for multilingual elements";
var Abstract = (function (_super) {
    __extends(Abstract, _super);
    function Abstract() {
        _super.apply(this, arguments);
    }
    return Abstract;
}(MyString));
exports.Abstract = Abstract;
Abstract.prototype.desc = "The abstract of the document in plain text format; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
Abstract.prototype.label = "Abstract";
var ActorInfo = (function () {
    function ActorInfo() {
    }
    return ActorInfo;
}());
exports.ActorInfo = ActorInfo;
var ActualUseInfo = (function () {
    function ActualUseInfo() {
    }
    return ActualUseInfo;
}());
exports.ActualUseInfo = ActualUseInfo;
ActualUseInfo.prototype.desc = "Groups information on how the resource has already been used";
ActualUseInfo.prototype.label = "Actual use";
var Affiliation = (function () {
    function Affiliation() {
    }
    return Affiliation;
}());
exports.Affiliation = Affiliation;
Affiliation.prototype.desc = "Groups information on organization to whom the person is affiliated";
Affiliation.prototype.label = "Affiliation";
var AnnotatedCorpusInfo = (function () {
    function AnnotatedCorpusInfo() {
    }
    return AnnotatedCorpusInfo;
}());
exports.AnnotatedCorpusInfo = AnnotatedCorpusInfo;
AnnotatedCorpusInfo.prototype.desc = "Groups together information on annotated corpora of all media types";
AnnotatedCorpusInfo.prototype.label = "Annotated corpus";
var AnnotatedDocumentInfo = (function () {
    function AnnotatedDocumentInfo() {
    }
    return AnnotatedDocumentInfo;
}());
exports.AnnotatedDocumentInfo = AnnotatedDocumentInfo;
var AnnotationInfo = (function () {
    function AnnotationInfo() {
    }
    return AnnotationInfo;
}());
exports.AnnotationInfo = AnnotationInfo;
AnnotationInfo.prototype.desc = "Groups information on the annotated part(s) of a resource";
AnnotationInfo.prototype.label = "Annotation";
var AnnotationsInfo = (function () {
    function AnnotationsInfo() {
    }
    return AnnotationsInfo;
}());
exports.AnnotationsInfo = AnnotationsInfo;
AnnotationsInfo.prototype.desc = "Groups together information on annotations";
AnnotationsInfo.prototype.label = "Annotations";
var AttributionText = (function (_super) {
    __extends(AttributionText, _super);
    function AttributionText() {
        _super.apply(this, arguments);
    }
    return AttributionText;
}(MyString));
exports.AttributionText = AttributionText;
AttributionText.prototype.desc = "The text that must be quoted for attribution purposes when using a resource - for cases where a resource is provided with a restriction on attribution; you can use a standard text such as \"Resource A by Resource Creator/Owner B used under licence C as accessed at D\"";
AttributionText.prototype.label = "Attribution text";
var Browsing = (function () {
    function Browsing() {
    }
    return Browsing;
}());
exports.Browsing = Browsing;
var CharacterEncodingInfo = (function () {
    function CharacterEncodingInfo() {
    }
    return CharacterEncodingInfo;
}());
exports.CharacterEncodingInfo = CharacterEncodingInfo;
CharacterEncodingInfo.prototype.desc = "Groups together information on character encoding of the resource";
CharacterEncodingInfo.prototype.label = "Character encoding";
var CommunicationInfo = (function () {
    function CommunicationInfo() {
    }
    return CommunicationInfo;
}());
exports.CommunicationInfo = CommunicationInfo;
CommunicationInfo.prototype.desc = "Groups information on communication details of a person or an organization";
CommunicationInfo.prototype.label = "Communication";
var OMTDComponent = (function () {
    function OMTDComponent() {
    }
    return OMTDComponent;
}());
exports.OMTDComponent = OMTDComponent;
var ComponentCreationInfo = (function () {
    function ComponentCreationInfo() {
    }
    return ComponentCreationInfo;
}());
exports.ComponentCreationInfo = ComponentCreationInfo;
ComponentCreationInfo.prototype.desc = "Groups together information on the creation of a component";
ComponentCreationInfo.prototype.label = "OMTDComponent creation";
var ComponentDependencies = (function () {
    function ComponentDependencies() {
    }
    return ComponentDependencies;
}());
exports.ComponentDependencies = ComponentDependencies;
var ComponentDistributionInfo = (function () {
    function ComponentDistributionInfo() {
    }
    return ComponentDistributionInfo;
}());
exports.ComponentDistributionInfo = ComponentDistributionInfo;
ComponentDistributionInfo.prototype.desc = "Groups information on the distribution of a component (software code, executable programme, web service/workflow)";
ComponentDistributionInfo.prototype.label = "Document distribution";
var ComponentDocumentationInfo = (function () {
    function ComponentDocumentationInfo() {
    }
    return ComponentDocumentationInfo;
}());
exports.ComponentDocumentationInfo = ComponentDocumentationInfo;
ComponentDocumentationInfo.prototype.desc = "Groups together information on the documentation of a component";
ComponentDocumentationInfo.prototype.label = "OMTDComponent documentation";
var ComponentEvaluationInfo = (function () {
    function ComponentEvaluationInfo() {
    }
    return ComponentEvaluationInfo;
}());
exports.ComponentEvaluationInfo = ComponentEvaluationInfo;
ComponentEvaluationInfo.prototype.desc = "Groups together information on the evaluation status of a component";
ComponentEvaluationInfo.prototype.label = "OMTDComponent evaluation";
var ComponentInfo = (function () {
    function ComponentInfo() {
    }
    return ComponentInfo;
}());
exports.ComponentInfo = ComponentInfo;
ComponentInfo.prototype.desc = "Groups together all information related to software components";
ComponentInfo.prototype.label = "OMTDComponent";
var ComponentOperationInfo = (function () {
    function ComponentOperationInfo() {
    }
    return ComponentOperationInfo;
}());
exports.ComponentOperationInfo = ComponentOperationInfo;
ComponentOperationInfo.prototype.desc = "Groups together information on the operation of a component";
ComponentOperationInfo.prototype.label = "OMTDComponent operation";
var ContactInfo = (function () {
    function ContactInfo() {
    }
    return ContactInfo;
}());
exports.ContactInfo = ContactInfo;
ContactInfo.prototype.desc = "Groups information on the possible sources for obtaining further information regarding the resource; at least a general email address or a landing page (website) must be supplied, although the recommended practice is to describe a contact person/group";
ContactInfo.prototype.label = "Contact";
var Contributor = (function () {
    function Contributor() {
    }
    return Contributor;
}());
exports.Contributor = Contributor;
Contributor.prototype.desc = "The identifier of the contributor, preferrably in the format: surname, initials (first name) prefix or the unique identifier of the author";
Contributor.prototype.label = "Contributor";
var CopyrightStatement = (function (_super) {
    __extends(CopyrightStatement, _super);
    function CopyrightStatement() {
        _super.apply(this, arguments);
    }
    return CopyrightStatement;
}(MyString));
exports.CopyrightStatement = CopyrightStatement;
CopyrightStatement.prototype.desc = "A free text statement that may be included with the resource, usually containing the name(s) of copyright holders and licensing terms (intended for resources that already have such a statement); the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
CopyrightStatement.prototype.label = "Copyright statement";
var OMTDCorpus = (function () {
    function OMTDCorpus() {
    }
    return OMTDCorpus;
}());
exports.OMTDCorpus = OMTDCorpus;
var CorpusInfo = (function () {
    function CorpusInfo() {
    }
    return CorpusInfo;
}());
exports.CorpusInfo = CorpusInfo;
CorpusInfo.prototype.desc = "Groups together all information related to corpora";
CorpusInfo.prototype.label = "OMTDCorpus";
var CorpusMediaParts = (function () {
    function CorpusMediaParts() {
    }
    return CorpusMediaParts;
}());
exports.CorpusMediaParts = CorpusMediaParts;
CorpusMediaParts.prototype.desc = "Used to specify the media type specific to corpora and group together the relevant information";
CorpusMediaParts.prototype.label = "Media type parts of corpus";
var CorpusMediaPartsType = (function () {
    function CorpusMediaPartsType() {
    }
    return CorpusMediaPartsType;
}());
exports.CorpusMediaPartsType = CorpusMediaPartsType;
CorpusMediaPartsType.prototype.desc = "Used to specify the media type specific to corpora and group together the relevant information";
CorpusMediaPartsType.prototype.label = "Media type component of corpus";
var CorpusSubtypeSpecificInfo = (function () {
    function CorpusSubtypeSpecificInfo() {
    }
    return CorpusSubtypeSpecificInfo;
}());
exports.CorpusSubtypeSpecificInfo = CorpusSubtypeSpecificInfo;
var CorpusTextPartInfo = (function () {
    function CorpusTextPartInfo() {
    }
    return CorpusTextPartInfo;
}());
exports.CorpusTextPartInfo = CorpusTextPartInfo;
CorpusTextPartInfo.prototype.desc = "Groups together information on the text component of a resource";
CorpusTextPartInfo.prototype.label = "OMTDCorpus text part";
var CreationInfo = (function () {
    function CreationInfo() {
    }
    return CreationInfo;
}());
exports.CreationInfo = CreationInfo;
CreationInfo.prototype.desc = "Groups together information on the resource creation (e.g. for corpora, selection of texts/audio files/ video files etc.; for lexica, construction of lemma list etc.)";
CreationInfo.prototype.label = "Creation";
var DataFormat = (function () {
    function DataFormat() {
    }
    return DataFormat;
}());
exports.DataFormat = DataFormat;
DataFormat.prototype.desc = "Specifies the format that is used since often the mime type will not be sufficient for machine processing; NOTE: normally the format should be represented as a combination of the mimetype (e.g. application/xml) and some name and link to the documentation about the supplementary conventions used (e.g xces, alvisED etc.)";
DataFormat.prototype.label = "Data format";
var DatasetDistributionInfo = (function () {
    function DatasetDistributionInfo() {
    }
    return DatasetDistributionInfo;
}());
exports.DatasetDistributionInfo = DatasetDistributionInfo;
DatasetDistributionInfo.prototype.desc = "Groups information on the distribution of a dataset resource (multiple files)";
DatasetDistributionInfo.prototype.label = "Document distribution";
var Date = (function () {
    function Date() {
    }
    return Date;
}());
exports.Date = Date;
Date.prototype.desc = "Basic format for dates, with optional day and month and obligatory year";
Date.prototype.label = "Date";
var DateCombination = (function () {
    function DateCombination() {
    }
    return DateCombination;
}());
exports.DateCombination = DateCombination;
var DateRange = (function () {
    function DateRange() {
    }
    return DateRange;
}());
exports.DateRange = DateRange;
DateRange.prototype.desc = "Basic format for date ranges, allowing combinations of years and full dates";
DateRange.prototype.label = "Date range";
var DepartmentName = (function (_super) {
    __extends(DepartmentName, _super);
    function DepartmentName() {
        _super.apply(this, arguments);
    }
    return DepartmentName;
}(MyString));
exports.DepartmentName = DepartmentName;
DepartmentName.prototype.desc = "The name of the department or unit (e.g. specific university faculty/department, department/unit of a research organization or private company etc.)";
DepartmentName.prototype.label = "Department name";
var Description = (function (_super) {
    __extends(Description, _super);
    function Description() {
        _super.apply(this, arguments);
    }
    return Description;
}(MyString));
exports.Description = Description;
Description.prototype.desc = "Provides the description of the resource in prose; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
Description.prototype.label = "Description";
var Document = (function () {
    function Document() {
    }
    return Document;
}());
exports.Document = Document;
Document.prototype.desc = "Root element for documents (single files); choice among raw publications and annotated publications";
var DocumentDistributionInfo = (function () {
    function DocumentDistributionInfo() {
    }
    return DocumentDistributionInfo;
}());
exports.DocumentDistributionInfo = DocumentDistributionInfo;
DocumentDistributionInfo.prototype.desc = "Groups information on the distribution of a document (single file)";
DocumentDistributionInfo.prototype.label = "Document distribution";
var DocumentInfo = (function () {
    function DocumentInfo() {
    }
    return DocumentInfo;
}());
exports.DocumentInfo = DocumentInfo;
var DocumentMetadataRecord = (function () {
    function DocumentMetadataRecord() {
    }
    return DocumentMetadataRecord;
}());
exports.DocumentMetadataRecord = DocumentMetadataRecord;
DocumentMetadataRecord.prototype.desc = "Root element for metadata records of single files (documents); groups metadata header and information about the document itself";
DocumentMetadataRecord.prototype.label = "Document metadata record";
var Domain = (function () {
    function Domain() {
    }
    return Domain;
}());
exports.Domain = Domain;
Domain.prototype.desc = "Specifies the application domain of the resource or the tool/service";
Domain.prototype.label = "Domain";
var DomainInfoType = (function () {
    function DomainInfoType() {
    }
    return DomainInfoType;
}());
exports.DomainInfoType = DomainInfoType;
var Facet = (function () {
    function Facet() {
    }
    return Facet;
}());
exports.Facet = Facet;
var ForeseenUseInfo = (function () {
    function ForeseenUseInfo() {
    }
    return ForeseenUseInfo;
}());
exports.ForeseenUseInfo = ForeseenUseInfo;
ForeseenUseInfo.prototype.desc = "Groups information on the use for which the resource is created";
ForeseenUseInfo.prototype.label = "Foreseen use";
var Formalisms = (function () {
    function Formalisms() {
    }
    return Formalisms;
}());
exports.Formalisms = Formalisms;
var FullText = (function (_super) {
    __extends(FullText, _super);
    function FullText() {
        _super.apply(this, arguments);
    }
    return FullText;
}(MyString));
exports.FullText = FullText;
FullText.prototype.desc = "The full text of the publication in simple text format";
var GeographicCoverageInfo = (function () {
    function GeographicCoverageInfo() {
    }
    return GeographicCoverageInfo;
}());
exports.GeographicCoverageInfo = GeographicCoverageInfo;
GeographicCoverageInfo.prototype.desc = "Groups information on geographic classification of the resource";
GeographicCoverageInfo.prototype.label = "Geographic coverage";
var GivenName = (function (_super) {
    __extends(GivenName, _super);
    function GivenName() {
        _super.apply(this, arguments);
    }
    return GivenName;
}(MyString));
exports.GivenName = GivenName;
GivenName.prototype.desc = "The given name (first name) of a person related to the resource; initials can also be used";
GivenName.prototype.label = "Given name";
var GivenNames = (function () {
    function GivenNames() {
    }
    return GivenNames;
}());
exports.GivenNames = GivenNames;
var GrammaticalPhenomenaCoverages = (function () {
    function GrammaticalPhenomenaCoverages() {
    }
    return GrammaticalPhenomenaCoverages;
}());
exports.GrammaticalPhenomenaCoverages = GrammaticalPhenomenaCoverages;
var GroupName = (function (_super) {
    __extends(GroupName, _super);
    function GroupName() {
        _super.apply(this, arguments);
    }
    return GroupName;
}(MyString));
exports.GroupName = GroupName;
GroupName.prototype.desc = "The name(s) of the group";
GroupName.prototype.label = "Group name";
var IdentificationInfo = (function () {
    function IdentificationInfo() {
    }
    return IdentificationInfo;
}());
exports.IdentificationInfo = IdentificationInfo;
IdentificationInfo.prototype.desc = "Groups together information needed to identify the resource";
IdentificationInfo.prototype.label = "Identification";
var JournalIdentifier = (function () {
    function JournalIdentifier() {
    }
    return JournalIdentifier;
}());
exports.JournalIdentifier = JournalIdentifier;
JournalIdentifier.prototype.desc = "Reference to a DOI (recommended) or any kind of identifier used for the publication";
JournalIdentifier.prototype.label = "Journal Identifier";
var JournalIdentifiers = (function () {
    function JournalIdentifiers() {
    }
    return JournalIdentifiers;
}());
exports.JournalIdentifiers = JournalIdentifiers;
var JournalInfo = (function () {
    function JournalInfo() {
    }
    return JournalInfo;
}());
exports.JournalInfo = JournalInfo;
var JournalTitle = (function (_super) {
    __extends(JournalTitle, _super);
    function JournalTitle() {
        _super.apply(this, arguments);
    }
    return JournalTitle;
}(MyString));
exports.JournalTitle = JournalTitle;
JournalTitle.prototype.desc = "The title(s) of the journal";
JournalTitle.prototype.label = "Journal title";
var Language = (function () {
    function Language() {
    }
    return Language;
}());
exports.Language = Language;
Language.prototype.desc = "A human understandable name of the language that is used in the resource or supported by the tool/service, as specified in the BCP47 guidelines (https://tools.ietf.org/html/bcp47); the guidelines includes (a) language subtag according to ISO 639-1 and for languages not covered by this, the ISO 639-3; (b) the script tag according to ISO 15924; (c) the region tag according to ISO 3166-1;  (d) the variant subtag";
Language.prototype.label = "Language";
var LanguageDescription = (function () {
    function LanguageDescription() {
    }
    return LanguageDescription;
}());
exports.LanguageDescription = LanguageDescription;
var LanguageDescriptionEncodingInfo = (function () {
    function LanguageDescriptionEncodingInfo() {
    }
    return LanguageDescriptionEncodingInfo;
}());
exports.LanguageDescriptionEncodingInfo = LanguageDescriptionEncodingInfo;
LanguageDescriptionEncodingInfo.prototype.desc = "Groups together information on the contents of the LanguageDescriptions";
LanguageDescriptionEncodingInfo.prototype.label = "Language description encoding";
var LanguageDescriptionInfo = (function () {
    function LanguageDescriptionInfo() {
    }
    return LanguageDescriptionInfo;
}());
exports.LanguageDescriptionInfo = LanguageDescriptionInfo;
LanguageDescriptionInfo.prototype.desc = "Groups together all information related to language descriptions";
LanguageDescriptionInfo.prototype.label = "Language description";
var LanguageDescriptionMediaType = (function () {
    function LanguageDescriptionMediaType() {
    }
    return LanguageDescriptionMediaType;
}());
exports.LanguageDescriptionMediaType = LanguageDescriptionMediaType;
LanguageDescriptionMediaType.prototype.desc = "Groups information on the media type-specific components for language descriptions";
LanguageDescriptionMediaType.prototype.label = "Media type component of language description";
var LanguageDescriptionOperationInfo = (function () {
    function LanguageDescriptionOperationInfo() {
    }
    return LanguageDescriptionOperationInfo;
}());
exports.LanguageDescriptionOperationInfo = LanguageDescriptionOperationInfo;
LanguageDescriptionOperationInfo.prototype.desc = "Groups together information on the operation requirements of the Language Descriptions";
LanguageDescriptionOperationInfo.prototype.label = "Language description operation";
var LanguageDescriptionPerformanceInfo = (function () {
    function LanguageDescriptionPerformanceInfo() {
    }
    return LanguageDescriptionPerformanceInfo;
}());
exports.LanguageDescriptionPerformanceInfo = LanguageDescriptionPerformanceInfo;
LanguageDescriptionPerformanceInfo.prototype.desc = "Groups together information on the performance of the Language Descriptions";
LanguageDescriptionPerformanceInfo.prototype.label = "Language description performance";
var LanguageDescriptionTextInfo = (function () {
    function LanguageDescriptionTextInfo() {
    }
    return LanguageDescriptionTextInfo;
}());
exports.LanguageDescriptionTextInfo = LanguageDescriptionTextInfo;
LanguageDescriptionTextInfo.prototype.desc = "Groups together all information relevant to the text module of a language description (e.g. format, languages, size etc.); it is obligatory for all language descriptions";
LanguageDescriptionTextInfo.prototype.label = "Language description text component";
var LanguageInfo = (function () {
    function LanguageInfo() {
    }
    return LanguageInfo;
}());
exports.LanguageInfo = LanguageInfo;
LanguageInfo.prototype.desc = "Groups information on the languages represented in the resource";
LanguageInfo.prototype.label = "Language";
var LanguageVarietyInfo = (function () {
    function LanguageVarietyInfo() {
    }
    return LanguageVarietyInfo;
}());
exports.LanguageVarietyInfo = LanguageVarietyInfo;
LanguageVarietyInfo.prototype.desc = "Groups information on language varieties occurred in the resource (e.g. dialects)";
LanguageVarietyInfo.prototype.label = "Language variety";
var Lexical = (function () {
    function Lexical() {
    }
    return Lexical;
}());
exports.Lexical = Lexical;
var LexicalConceptualResourceEncodingInfo = (function () {
    function LexicalConceptualResourceEncodingInfo() {
    }
    return LexicalConceptualResourceEncodingInfo;
}());
exports.LexicalConceptualResourceEncodingInfo = LexicalConceptualResourceEncodingInfo;
LexicalConceptualResourceEncodingInfo.prototype.desc = "Groups all information regarding the contents of lexical/conceptual resources";
LexicalConceptualResourceEncodingInfo.prototype.label = "Lexical / Conceptual resource encoding";
var LexicalConceptualResourceInfo = (function () {
    function LexicalConceptualResourceInfo() {
    }
    return LexicalConceptualResourceInfo;
}());
exports.LexicalConceptualResourceInfo = LexicalConceptualResourceInfo;
LexicalConceptualResourceInfo.prototype.desc = "Groups together all information related to lexical/conceptual resources";
LexicalConceptualResourceInfo.prototype.label = "Lexical/conceptual resource";
var LexicalConceptualResourceMediaType = (function () {
    function LexicalConceptualResourceMediaType() {
    }
    return LexicalConceptualResourceMediaType;
}());
exports.LexicalConceptualResourceMediaType = LexicalConceptualResourceMediaType;
LexicalConceptualResourceMediaType.prototype.desc = "Restriction of mediaType for lexicalConceptualResources";
LexicalConceptualResourceMediaType.prototype.label = "Media type component of lexical / conceptual resource";
var LexicalConceptualResourceTextInfo = (function () {
    function LexicalConceptualResourceTextInfo() {
    }
    return LexicalConceptualResourceTextInfo;
}());
exports.LexicalConceptualResourceTextInfo = LexicalConceptualResourceTextInfo;
LexicalConceptualResourceTextInfo.prototype.desc = "Groups information on the textual part of the lexical/conceptual resource";
LexicalConceptualResourceTextInfo.prototype.label = "Lexical / Conceptual resource text";
var LicenceInfo = (function () {
    function LicenceInfo() {
    }
    return LicenceInfo;
}());
exports.LicenceInfo = LicenceInfo;
LicenceInfo.prototype.desc = "Groups information on licences for the resource; can be repeated to allow for different modes of access and restrictions of use (e.g. free for academic use, on-a-fee basis for commercial use, download of a sample for free use etc.)";
LicenceInfo.prototype.label = "Licence";
var LicenceInfos = (function () {
    function LicenceInfos() {
    }
    return LicenceInfos;
}());
exports.LicenceInfos = LicenceInfos;
var LingualityInfo = (function () {
    function LingualityInfo() {
    }
    return LingualityInfo;
}());
exports.LingualityInfo = LingualityInfo;
LingualityInfo.prototype.desc = "Groups information on the number of languages of the resource part and of the way they are combined to each other";
LingualityInfo.prototype.label = "Linguality";
var MailingListInfo = (function () {
    function MailingListInfo() {
    }
    return MailingListInfo;
}());
exports.MailingListInfo = MailingListInfo;
MailingListInfo.prototype.desc = "Groups information on the mailing list(s) that can be used for further information regarding the resource";
MailingListInfo.prototype.label = "Mailing list";
var MetadataHeaderInfo = (function () {
    function MetadataHeaderInfo() {
    }
    return MetadataHeaderInfo;
}());
exports.MetadataHeaderInfo = MetadataHeaderInfo;
MetadataHeaderInfo.prototype.desc = "Groups information on the metadata record itself";
MetadataHeaderInfo.prototype.label = "Metadata header";
var MetadataIdentifier = (function () {
    function MetadataIdentifier() {
    }
    return MetadataIdentifier;
}());
exports.MetadataIdentifier = MetadataIdentifier;
var ModalityInfo = (function () {
    function ModalityInfo() {
    }
    return ModalityInfo;
}());
exports.ModalityInfo = ModalityInfo;
ModalityInfo.prototype.desc = "Groups information on the modalities represented in the resource";
ModalityInfo.prototype.label = "Modality";
var Model = (function () {
    function Model() {
    }
    return Model;
}());
exports.Model = Model;
var ModelInfo = (function () {
    function ModelInfo() {
    }
    return ModelInfo;
}());
exports.ModelInfo = ModelInfo;
ModelInfo.prototype.desc = "Groups together all information related to models";
ModelInfo.prototype.label = "Model";
var ModelMediaType = (function () {
    function ModelMediaType() {
    }
    return ModelMediaType;
}());
exports.ModelMediaType = ModelMediaType;
ModelMediaType.prototype.desc = "Restriction of mediaType for models";
ModelMediaType.prototype.label = "Media type component of model";
var ModelOperationInfo = (function () {
    function ModelOperationInfo() {
    }
    return ModelOperationInfo;
}());
exports.ModelOperationInfo = ModelOperationInfo;
var ModelTextInfo = (function () {
    function ModelTextInfo() {
    }
    return ModelTextInfo;
}());
exports.ModelTextInfo = ModelTextInfo;
ModelTextInfo.prototype.desc = "Groups together all information related to the textual part of models";
ModelTextInfo.prototype.label = "Model";
var Name = (function (_super) {
    __extends(Name, _super);
    function Name() {
        _super.apply(this, arguments);
    }
    return Name;
}(MyString));
exports.Name = Name;
Name.prototype.desc = "The full name of a person; the preferred format is \"family name, given name\"";
Name.prototype.label = "Name";
var Names = (function () {
    function Names() {
    }
    return Names;
}());
exports.Names = Names;
var NonStandaradLicenceTermsText = (function (_super) {
    __extends(NonStandaradLicenceTermsText, _super);
    function NonStandaradLicenceTermsText() {
        _super.apply(this, arguments);
    }
    return NonStandaradLicenceTermsText;
}(MyString));
exports.NonStandaradLicenceTermsText = NonStandaradLicenceTermsText;
NonStandaradLicenceTermsText.prototype.desc = "Used for inputting the text of licences (that are not included in the pre-defined list) and terms of use or terms of service (for web services)";
NonStandaradLicenceTermsText.prototype.label = "Text (for non-standard licences / terms of use / terms of service)";
var NonStandardLicenceName = (function (_super) {
    __extends(NonStandardLicenceName, _super);
    function NonStandardLicenceName() {
        _super.apply(this, arguments);
    }
    return NonStandardLicenceName;
}(MyString));
exports.NonStandardLicenceName = NonStandardLicenceName;
NonStandardLicenceName.prototype.desc = "The name with which a licence is known; to be used for licences not included in the pre-defined list of recommended licences";
NonStandardLicenceName.prototype.label = "Name (for non-standard licences)";
var ObjectFactory = (function () {
    function ObjectFactory() {
    }
    return ObjectFactory;
}());
exports.ObjectFactory = ObjectFactory;
var OrganizationAlternativeName = (function (_super) {
    __extends(OrganizationAlternativeName, _super);
    function OrganizationAlternativeName() {
        _super.apply(this, arguments);
    }
    return OrganizationAlternativeName;
}(MyString));
exports.OrganizationAlternativeName = OrganizationAlternativeName;
OrganizationAlternativeName.prototype.desc = "An alternative name (e.g. abbreviation, acronym, translation etc.) used for an organization";
OrganizationAlternativeName.prototype.label = "Organization alternative name";
var OrganizationIdentifier = (function () {
    function OrganizationIdentifier() {
    }
    return OrganizationIdentifier;
}());
exports.OrganizationIdentifier = OrganizationIdentifier;
OrganizationIdentifier.prototype.desc = "Reference to any kind of identifier used for an organization; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)";
OrganizationIdentifier.prototype.label = "Identifier";
var OrganizationIdentifiers = (function () {
    function OrganizationIdentifiers() {
    }
    return OrganizationIdentifiers;
}());
exports.OrganizationIdentifiers = OrganizationIdentifiers;
var OrganizationInfo = (function () {
    function OrganizationInfo() {
    }
    return OrganizationInfo;
}());
exports.OrganizationInfo = OrganizationInfo;
OrganizationInfo.prototype.desc = "Groups information on organizations related to the resource";
OrganizationInfo.prototype.label = "Organization";
var OrganizationName = (function (_super) {
    __extends(OrganizationName, _super);
    function OrganizationName() {
        _super.apply(this, arguments);
    }
    return OrganizationName;
}(MyString));
exports.OrganizationName = OrganizationName;
OrganizationName.prototype.desc = "The name(s) of the organization";
OrganizationName.prototype.label = "Organization name";
var OrganizationNames = (function () {
    function OrganizationNames() {
    }
    return OrganizationNames;
}());
exports.OrganizationNames = OrganizationNames;
var OriginalDataProviderInfo = (function () {
    function OriginalDataProviderInfo() {
    }
    return OriginalDataProviderInfo;
}());
exports.OriginalDataProviderInfo = OriginalDataProviderInfo;
OriginalDataProviderInfo.prototype.desc = "Refers to the original data provider, in case the metadata record carries information taken from previous repositories/journals/publishers (e.g. in case the record's last source is an aggregator)";
OriginalDataProviderInfo.prototype.label = "Original data provider";
var PersonIdentifier = (function () {
    function PersonIdentifier() {
    }
    return PersonIdentifier;
}());
exports.PersonIdentifier = PersonIdentifier;
PersonIdentifier.prototype.desc = "Reference to any kind of identifier used for a person; the attribute should be used to specify the type of identifier (e.g. ORCID, LinkedIn etc.)";
PersonIdentifier.prototype.label = "Identifier";
var PersonIdentifiers = (function () {
    function PersonIdentifiers() {
    }
    return PersonIdentifiers;
}());
exports.PersonIdentifiers = PersonIdentifiers;
var PersonInfo = (function () {
    function PersonInfo() {
    }
    return PersonInfo;
}());
exports.PersonInfo = PersonInfo;
PersonInfo.prototype.desc = "Groups information relevant to personsrelated to the resource; to be used mainly for contact persons, resource creators, validators, annotators etc. for whom personal data can be provided";
PersonInfo.prototype.label = "Person";
var PersonName = (function (_super) {
    __extends(PersonName, _super);
    function PersonName() {
        _super.apply(this, arguments);
    }
    return PersonName;
}(MyString));
exports.PersonName = PersonName;
PersonName.prototype.desc = "The name(s) of the person, preferrably in the format: surname, initials (first name) prefix";
PersonName.prototype.label = "Person name";
var PersonNames = (function () {
    function PersonNames() {
    }
    return PersonNames;
}());
exports.PersonNames = PersonNames;
var PostalAddress = (function () {
    function PostalAddress() {
    }
    return PostalAddress;
}());
exports.PostalAddress = PostalAddress;
var ProcessingResourceInfo = (function () {
    function ProcessingResourceInfo() {
    }
    return ProcessingResourceInfo;
}());
exports.ProcessingResourceInfo = ProcessingResourceInfo;
var ProjectIdentifier = (function () {
    function ProjectIdentifier() {
    }
    return ProjectIdentifier;
}());
exports.ProjectIdentifier = ProjectIdentifier;
ProjectIdentifier.prototype.desc = "A unique identifier for research projects";
var ProjectIdentifiers = (function () {
    function ProjectIdentifiers() {
    }
    return ProjectIdentifiers;
}());
exports.ProjectIdentifiers = ProjectIdentifiers;
var ProjectInfo = (function () {
    function ProjectInfo() {
    }
    return ProjectInfo;
}());
exports.ProjectInfo = ProjectInfo;
ProjectInfo.prototype.desc = "Groups information on a project related to the resource(e.g. a project the resource has been used in; a funded project that led to the resource creation etc.)";
ProjectInfo.prototype.label = "Project";
var ProjectName = (function (_super) {
    __extends(ProjectName, _super);
    function ProjectName() {
        _super.apply(this, arguments);
    }
    return ProjectName;
}(MyString));
exports.ProjectName = ProjectName;
ProjectName.prototype.desc = "The name(s) of the project";
ProjectName.prototype.label = "Project name";
var ProjectNames = (function () {
    function ProjectNames() {
    }
    return ProjectNames;
}());
exports.ProjectNames = ProjectNames;
var ProjectShortName = (function (_super) {
    __extends(ProjectShortName, _super);
    function ProjectShortName() {
        _super.apply(this, arguments);
    }
    return ProjectShortName;
}(MyString));
exports.ProjectShortName = ProjectShortName;
ProjectShortName.prototype.desc = "A short name, abbreviation or acronym of a project related to the resource";
ProjectShortName.prototype.label = "Project short name";
var PublicationIdentifier = (function () {
    function PublicationIdentifier() {
    }
    return PublicationIdentifier;
}());
exports.PublicationIdentifier = PublicationIdentifier;
PublicationIdentifier.prototype.desc = "Reference to a DOI (recommended) or any kind of identifier used for the publication";
PublicationIdentifier.prototype.label = "Publication identifier";
var PublicationIdentifiers = (function () {
    function PublicationIdentifiers() {
    }
    return PublicationIdentifiers;
}());
exports.PublicationIdentifiers = PublicationIdentifiers;
var RawCorpusInfo = (function () {
    function RawCorpusInfo() {
    }
    return RawCorpusInfo;
}());
exports.RawCorpusInfo = RawCorpusInfo;
RawCorpusInfo.prototype.desc = "Groups together information on corpora of all media types";
RawCorpusInfo.prototype.label = "Raw corpus";
var Register = (function () {
    function Register() {
    }
    return Register;
}());
exports.Register = Register;
Register.prototype.desc = "For corpora that have already been using register classification";
Register.prototype.label = "Register";
var RelatedDocumentInfo = (function () {
    function RelatedDocumentInfo() {
    }
    return RelatedDocumentInfo;
}());
exports.RelatedDocumentInfo = RelatedDocumentInfo;
var RelatedGroup = (function () {
    function RelatedGroup() {
    }
    return RelatedGroup;
}());
exports.RelatedGroup = RelatedGroup;
var RelatedJournal = (function () {
    function RelatedJournal() {
    }
    return RelatedJournal;
}());
exports.RelatedJournal = RelatedJournal;
var RelatedLexiconInfo = (function () {
    function RelatedLexiconInfo() {
    }
    return RelatedLexiconInfo;
}());
exports.RelatedLexiconInfo = RelatedLexiconInfo;
RelatedLexiconInfo.prototype.desc = "Groups together information on requirements for lexica set by the LanguageDescriptions";
RelatedLexiconInfo.prototype.label = "Related lexicon";
var RelatedOrganization = (function () {
    function RelatedOrganization() {
    }
    return RelatedOrganization;
}());
exports.RelatedOrganization = RelatedOrganization;
var RelatedPerson = (function () {
    function RelatedPerson() {
    }
    return RelatedPerson;
}());
exports.RelatedPerson = RelatedPerson;
var RelatedProject = (function () {
    function RelatedProject() {
    }
    return RelatedProject;
}());
exports.RelatedProject = RelatedProject;
var RelatedRepository = (function () {
    function RelatedRepository() {
    }
    return RelatedRepository;
}());
exports.RelatedRepository = RelatedRepository;
var RelatedResource = (function () {
    function RelatedResource() {
    }
    return RelatedResource;
}());
exports.RelatedResource = RelatedResource;
var RelationInfo = (function () {
    function RelationInfo() {
    }
    return RelationInfo;
}());
exports.RelationInfo = RelationInfo;
RelationInfo.prototype.desc = "Groups together information on relations between resources";
RelationInfo.prototype.label = "Annotations";
var RepositoryIdentifier = (function () {
    function RepositoryIdentifier() {
    }
    return RepositoryIdentifier;
}());
exports.RepositoryIdentifier = RepositoryIdentifier;
var RepositoryIdentifiers = (function () {
    function RepositoryIdentifiers() {
    }
    return RepositoryIdentifiers;
}());
exports.RepositoryIdentifiers = RepositoryIdentifiers;
var RepositoryName = (function (_super) {
    __extends(RepositoryName, _super);
    function RepositoryName() {
        _super.apply(this, arguments);
    }
    return RepositoryName;
}(MyString));
exports.RepositoryName = RepositoryName;
RepositoryName.prototype.desc = "The name(s) of the repository";
RepositoryName.prototype.label = "Repository name";
var RepositoryNames = (function () {
    function RepositoryNames() {
    }
    return RepositoryNames;
}());
exports.RepositoryNames = RepositoryNames;
var ResourceCreationInfo = (function () {
    function ResourceCreationInfo() {
    }
    return ResourceCreationInfo;
}());
exports.ResourceCreationInfo = ResourceCreationInfo;
ResourceCreationInfo.prototype.desc = "Groups information on the creation procedure of a resource";
ResourceCreationInfo.prototype.label = "Resource creation";
var ResourceDocumentationInfo = (function () {
    function ResourceDocumentationInfo() {
    }
    return ResourceDocumentationInfo;
}());
exports.ResourceDocumentationInfo = ResourceDocumentationInfo;
ResourceDocumentationInfo.prototype.desc = "Groups together information on any document describing the resource";
ResourceDocumentationInfo.prototype.label = "Resource documentation";
var ResourceIdentifier = (function () {
    function ResourceIdentifier() {
    }
    return ResourceIdentifier;
}());
exports.ResourceIdentifier = ResourceIdentifier;
var ResourceIdentifiers = (function () {
    function ResourceIdentifiers() {
    }
    return ResourceIdentifiers;
}());
exports.ResourceIdentifiers = ResourceIdentifiers;
var ResourceName = (function (_super) {
    __extends(ResourceName, _super);
    function ResourceName() {
        _super.apply(this, arguments);
    }
    return ResourceName;
}(MyString));
exports.ResourceName = ResourceName;
ResourceName.prototype.desc = "The full name by which the resource is known; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language";
var ResourceNames = (function () {
    function ResourceNames() {
    }
    return ResourceNames;
}());
exports.ResourceNames = ResourceNames;
var ResourceShortName = (function (_super) {
    __extends(ResourceShortName, _super);
    function ResourceShortName() {
        _super.apply(this, arguments);
    }
    return ResourceShortName;
}(MyString));
exports.ResourceShortName = ResourceShortName;
ResourceShortName.prototype.desc = "The short form (abbreviation, acronym etc.) used to identify the resource; the element can be repeated for the different language versions using the \"lang\" attribute to specify the language.";
ResourceShortName.prototype.label = "Resource short name";
var Result = (function () {
    function Result() {
    }
    return Result;
}());
exports.Result = Result;
var RightsInfo = (function () {
    function RightsInfo() {
    }
    return RightsInfo;
}());
exports.RightsInfo = RightsInfo;
var RightsStatementInfo = (function () {
    function RightsStatementInfo() {
    }
    return RightsStatementInfo;
}());
exports.RightsStatementInfo = RightsStatementInfo;
RightsStatementInfo.prototype.desc = "Groups information on official statements indicative of licensing terms for the use of a resource (e.g. open access, free to read, all rights reserved etc.); its semantics should be clear, preferrably formally expressed and stored at a url";
RightsStatementInfo.prototype.label = "Rights statement";
var RunningEnvironmentInfo = (function () {
    function RunningEnvironmentInfo() {
    }
    return RunningEnvironmentInfo;
}());
exports.RunningEnvironmentInfo = RunningEnvironmentInfo;
RunningEnvironmentInfo.prototype.desc = "Groups together information on the running environment of a tool or a language description";
RunningEnvironmentInfo.prototype.label = "Running environment";
var SizeInfo = (function () {
    function SizeInfo() {
    }
    return SizeInfo;
}());
exports.SizeInfo = SizeInfo;
SizeInfo.prototype.desc = "Groups information on the size of the resource or of resource parts";
SizeInfo.prototype.label = "Size";
var SourceOfMetadataRecord = (function () {
    function SourceOfMetadataRecord() {
    }
    return SourceOfMetadataRecord;
}());
exports.SourceOfMetadataRecord = SourceOfMetadataRecord;
SourceOfMetadataRecord.prototype.desc = "Refers to the catalog or repository from which the metadata record has been originated (for harvested records)";
SourceOfMetadataRecord.prototype.label = "Source of metadata record";
var StructuralEncoding = (function () {
    function StructuralEncoding() {
    }
    return StructuralEncoding;
}());
exports.StructuralEncoding = StructuralEncoding;
StructuralEncoding.prototype.desc = "Information on whether the structure of the corpus documents is formally encoded and the scheme used for this";
StructuralEncoding.prototype.label = "Structural encoding";
var StructuralEncodingInfo = (function () {
    function StructuralEncodingInfo() {
    }
    return StructuralEncodingInfo;
}());
exports.StructuralEncodingInfo = StructuralEncodingInfo;
StructuralEncodingInfo.prototype.desc = "Groups information on the encoding of the structure of the contents of the corpus";
StructuralEncodingInfo.prototype.label = "Text format";
var Subject = (function () {
    function Subject() {
    }
    return Subject;
}());
exports.Subject = Subject;
Subject.prototype.desc = "For resources that are using subject / topic classification";
Subject.prototype.label = "Subject";
var Surname = (function (_super) {
    __extends(Surname, _super);
    function Surname() {
        _super.apply(this, arguments);
    }
    return Surname;
}(MyString));
exports.Surname = Surname;
Surname.prototype.desc = "The surname (family name) of a person related to the resource";
Surname.prototype.label = "Surname";
var Surnames = (function () {
    function Surnames() {
    }
    return Surnames;
}());
exports.Surnames = Surnames;
var Text = (function () {
    function Text() {
    }
    return Text;
}());
exports.Text = Text;
var TextClassificationInfo = (function () {
    function TextClassificationInfo() {
    }
    return TextClassificationInfo;
}());
exports.TextClassificationInfo = TextClassificationInfo;
TextClassificationInfo.prototype.desc = "Groups together information on text type/genre of the resource";
TextClassificationInfo.prototype.label = "Text classification";
var TextFormatInfo = (function () {
    function TextFormatInfo() {
    }
    return TextFormatInfo;
}());
exports.TextFormatInfo = TextFormatInfo;
TextFormatInfo.prototype.desc = "Groups information on the text format(s) of a resource";
TextFormatInfo.prototype.label = "Text format";
var TextGenre = (function () {
    function TextGenre() {
    }
    return TextGenre;
}());
exports.TextGenre = TextGenre;
TextGenre.prototype.desc = "Genre: The conventionalized discourse or text types of the content of the resource, based on extra-linguistic and internal linguistic criteria";
TextGenre.prototype.label = "Text genre";
var TimeCoverageInfo = (function () {
    function TimeCoverageInfo() {
    }
    return TimeCoverageInfo;
}());
exports.TimeCoverageInfo = TimeCoverageInfo;
TimeCoverageInfo.prototype.desc = "Groups together information on time classification of the resource";
TimeCoverageInfo.prototype.label = "Time coverage";
var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        _super.apply(this, arguments);
    }
    return Title;
}(MyString));
exports.Title = Title;
Title.prototype.desc = "The title of the publication";
Title.prototype.label = "Title";
var UsageInfo = (function () {
    function UsageInfo() {
    }
    return UsageInfo;
}());
exports.UsageInfo = UsageInfo;
UsageInfo.prototype.desc = "Groups information on usage of the resource (both intended and actual use)";
UsageInfo.prototype.label = "Usage";
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Utils = (function () {
    function Utils() {
    }
    return Utils;
}());
exports.Utils = Utils;
var ValidationInfo = (function () {
    function ValidationInfo() {
    }
    return ValidationInfo;
}());
exports.ValidationInfo = ValidationInfo;
ValidationInfo.prototype.desc = "Groups information on validation of a resource; it can be repeated to allow for different validations (e.g. formal validation of the whole resource; content validation of one part of the resource etc.). ";
ValidationInfo.prototype.label = "Validation";
var Comparable = (function () {
    function Comparable() {
    }
    return Comparable;
}());
exports.Comparable = Comparable;
var Value = (function (_super) {
    __extends(Value, _super);
    function Value() {
        _super.apply(this, arguments);
    }
    return Value;
}(Comparable));
exports.Value = Value;
var VersionInfo = (function () {
    function VersionInfo() {
    }
    return VersionInfo;
}());
exports.VersionInfo = VersionInfo;
VersionInfo.prototype.desc = "Groups information on a specific version or release of the resource";
VersionInfo.prototype.label = "Version";
var Cloneable = (function () {
    function Cloneable() {
    }
    return Cloneable;
}());
exports.Cloneable = Cloneable;
(function (ActualUseEnum) {
    ActualUseEnum[ActualUseEnum["HUMAN_USE"] = 0] = "HUMAN_USE";
    ActualUseEnum[ActualUseEnum["NLP_APPLICATIONS"] = 1] = "NLP_APPLICATIONS";
})(exports.ActualUseEnum || (exports.ActualUseEnum = {}));
var ActualUseEnum = exports.ActualUseEnum;
(function (AnnotationLevelEnum) {
    AnnotationLevelEnum[AnnotationLevelEnum["ALIGNMENT"] = 0] = "ALIGNMENT";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION"] = 1] = "DISCOURSE_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION_ARGUMENTATION"] = 2] = "DISCOURSE_ANNOTATION_ARGUMENTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION_AUDIENCE_REACTIONS"] = 3] = "DISCOURSE_ANNOTATION_AUDIENCE_REACTIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION_COREFERENCE"] = 4] = "DISCOURSE_ANNOTATION_COREFERENCE";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION_DIALOGUE_ACTS"] = 5] = "DISCOURSE_ANNOTATION_DIALOGUE_ACTS";
    AnnotationLevelEnum[AnnotationLevelEnum["DISCOURSE_ANNOTATION_DISCOURSE_RELATIONS"] = 6] = "DISCOURSE_ANNOTATION_DISCOURSE_RELATIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["LEMMATIZATION"] = 7] = "LEMMATIZATION";
    AnnotationLevelEnum[AnnotationLevelEnum["MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING"] = 8] = "MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING";
    AnnotationLevelEnum[AnnotationLevelEnum["MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING"] = 9] = "MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING";
    AnnotationLevelEnum[AnnotationLevelEnum["SEGMENTATION"] = 10] = "SEGMENTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION"] = 11] = "SEMANTIC_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_CERTAINTY_LEVEL"] = 12] = "SEMANTIC_ANNOTATION_CERTAINTY_LEVEL";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_EMOTIONS"] = 13] = "SEMANTIC_ANNOTATION_EMOTIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_EVENTS"] = 14] = "SEMANTIC_ANNOTATION_EVENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_NAMED_ENTITIES"] = 15] = "SEMANTIC_ANNOTATION_NAMED_ENTITIES";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_POLARITY"] = 16] = "SEMANTIC_ANNOTATION_POLARITY";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_QUESTION_TOPICAL_TARGET"] = 17] = "SEMANTIC_ANNOTATION_QUESTION_TOPICAL_TARGET";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_READABILTY"] = 18] = "SEMANTIC_ANNOTATION_READABILTY";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_SEMANTIC_CLASSES"] = 19] = "SEMANTIC_ANNOTATION_SEMANTIC_CLASSES";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_SEMANTIC_RELATIONS"] = 20] = "SEMANTIC_ANNOTATION_SEMANTIC_RELATIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_SEMANTIC_ROLES"] = 21] = "SEMANTIC_ANNOTATION_SEMANTIC_ROLES";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_SPEECH_ACTS"] = 22] = "SEMANTIC_ANNOTATION_SPEECH_ACTS";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_SUBJECTIVITY"] = 23] = "SEMANTIC_ANNOTATION_SUBJECTIVITY";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_TEMPORAL_EXPRESSIONS"] = 24] = "SEMANTIC_ANNOTATION_TEMPORAL_EXPRESSIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_TEXTUAL_ENTAILMENT"] = 25] = "SEMANTIC_ANNOTATION_TEXTUAL_ENTAILMENT";
    AnnotationLevelEnum[AnnotationLevelEnum["SEMANTIC_ANNOTATION_WORD_SENSES"] = 26] = "SEMANTIC_ANNOTATION_WORD_SENSES";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTIC_ANNOTATION_SEMANTIC_FRAMES"] = 27] = "SYNTACTIC_ANNOTATION_SEMANTIC_FRAMES";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION"] = 28] = "SPEECH_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_ORTHOGRAPHIC_TRANSCRIPTION"] = 29] = "SPEECH_ANNOTATION_ORTHOGRAPHIC_TRANSCRIPTION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_PARALANGUAGE_ANNOTATION"] = 30] = "SPEECH_ANNOTATION_PARALANGUAGE_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_PHONETIC_TRANSCRIPTION"] = 31] = "SPEECH_ANNOTATION_PHONETIC_TRANSCRIPTION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_PROSODIC_ANNOTATION"] = 32] = "SPEECH_ANNOTATION_PROSODIC_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_SOUND_EVENTS"] = 33] = "SPEECH_ANNOTATION_SOUND_EVENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_SOUND_TO_TEXT_ALIGNMENT"] = 34] = "SPEECH_ANNOTATION_SOUND_TO_TEXT_ALIGNMENT";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_SPEAKER_IDENTIFICATION"] = 35] = "SPEECH_ANNOTATION_SPEAKER_IDENTIFICATION";
    AnnotationLevelEnum[AnnotationLevelEnum["SPEECH_ANNOTATION_SPEAKER_TURNS"] = 36] = "SPEECH_ANNOTATION_SPEAKER_TURNS";
    AnnotationLevelEnum[AnnotationLevelEnum["STEMMING"] = 37] = "STEMMING";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION"] = 38] = "STRUCTURAL_ANNOTATION";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION_DOCUMENT_DIVISIONS"] = 39] = "STRUCTURAL_ANNOTATION_DOCUMENT_DIVISIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION_SENTENCES"] = 40] = "STRUCTURAL_ANNOTATION_SENTENCES";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION_CLAUSES"] = 41] = "STRUCTURAL_ANNOTATION_CLAUSES";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION_PHRASES"] = 42] = "STRUCTURAL_ANNOTATION_PHRASES";
    AnnotationLevelEnum[AnnotationLevelEnum["STRUCTURAL_ANNOTATION_WORDS"] = 43] = "STRUCTURAL_ANNOTATION_WORDS";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTIC_ANNOTATION_SUBCATEGORIZATION_FRAMES"] = 44] = "SYNTACTIC_ANNOTATION_SUBCATEGORIZATION_FRAMES";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTIC_ANNOTATION_DEPENDENCY_TREES"] = 45] = "SYNTACTIC_ANNOTATION_DEPENDENCY_TREES";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTIC_ANNOTATION_CONSTITUENCY_TREES"] = 46] = "SYNTACTIC_ANNOTATION_CONSTITUENCY_TREES";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTIC_ANNOTATION_CHUNKS"] = 47] = "SYNTACTIC_ANNOTATION_CHUNKS";
    AnnotationLevelEnum[AnnotationLevelEnum["SYNTACTICOSEMANTIC_ANNOTATION_LINKS"] = 48] = "SYNTACTICOSEMANTIC_ANNOTATION_LINKS";
    AnnotationLevelEnum[AnnotationLevelEnum["TRANSLATION"] = 49] = "TRANSLATION";
    AnnotationLevelEnum[AnnotationLevelEnum["TRANSLITERATION"] = 50] = "TRANSLITERATION";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_BODY_MOVEMENTS"] = 51] = "MODALITY_ANNOTATION_BODY_MOVEMENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_FACIAL_EXPRESSIONS"] = 52] = "MODALITY_ANNOTATION_FACIAL_EXPRESSIONS";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_GAZE_EYE_MOVEMENTS"] = 53] = "MODALITY_ANNOTATION_GAZE_EYE_MOVEMENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_HAND_ARM_GESTURES"] = 54] = "MODALITY_ANNOTATION_HAND_ARM_GESTURES";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_HAND_MANIPULATION_OF_OBJECTS"] = 55] = "MODALITY_ANNOTATION_HAND_MANIPULATION_OF_OBJECTS";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_HEAD_MOVEMENTS"] = 56] = "MODALITY_ANNOTATION_HEAD_MOVEMENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["MODALITY_ANNOTATION_LIP_MOVEMENTS"] = 57] = "MODALITY_ANNOTATION_LIP_MOVEMENTS";
    AnnotationLevelEnum[AnnotationLevelEnum["OTHER"] = 58] = "OTHER";
})(exports.AnnotationLevelEnum || (exports.AnnotationLevelEnum = {}));
var AnnotationLevelEnum = exports.AnnotationLevelEnum;
(function (CharacterEncodingEnum) {
    CharacterEncodingEnum[CharacterEncodingEnum["US_ASCII"] = 0] = "US_ASCII";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1250"] = 1] = "WINDOWS_1250";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1251"] = 2] = "WINDOWS_1251";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1252"] = 3] = "WINDOWS_1252";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1253"] = 4] = "WINDOWS_1253";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1254"] = 5] = "WINDOWS_1254";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1257"] = 6] = "WINDOWS_1257";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_1"] = 7] = "ISO_8859_1";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_2"] = 8] = "ISO_8859_2";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_4"] = 9] = "ISO_8859_4";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_5"] = 10] = "ISO_8859_5";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_7"] = 11] = "ISO_8859_7";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_9"] = 12] = "ISO_8859_9";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_13"] = 13] = "ISO_8859_13";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_15"] = 14] = "ISO_8859_15";
    CharacterEncodingEnum[CharacterEncodingEnum["KOI_8_R"] = 15] = "KOI_8_R";
    CharacterEncodingEnum[CharacterEncodingEnum["UTF_8"] = 16] = "UTF_8";
    CharacterEncodingEnum[CharacterEncodingEnum["UTF_16"] = 17] = "UTF_16";
    CharacterEncodingEnum[CharacterEncodingEnum["UTF_16_BE"] = 18] = "UTF_16_BE";
    CharacterEncodingEnum[CharacterEncodingEnum["UTF_16_LE"] = 19] = "UTF_16_LE";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1255"] = 20] = "WINDOWS_1255";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1256"] = 21] = "WINDOWS_1256";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_1258"] = 22] = "WINDOWS_1258";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_3"] = 23] = "ISO_8859_3";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_6"] = 24] = "ISO_8859_6";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_8859_8"] = 25] = "ISO_8859_8";
    CharacterEncodingEnum[CharacterEncodingEnum["WINDOWS_31_J"] = 26] = "WINDOWS_31_J";
    CharacterEncodingEnum[CharacterEncodingEnum["EUC_JP"] = 27] = "EUC_JP";
    CharacterEncodingEnum[CharacterEncodingEnum["X_EUC_JP_LINUX"] = 28] = "X_EUC_JP_LINUX";
    CharacterEncodingEnum[CharacterEncodingEnum["SHIFT_JIS"] = 29] = "SHIFT_JIS";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_2022_JP"] = 30] = "ISO_2022_JP";
    CharacterEncodingEnum[CharacterEncodingEnum["X_MSWIN_936"] = 31] = "X_MSWIN_936";
    CharacterEncodingEnum[CharacterEncodingEnum["GB_18030"] = 32] = "GB_18030";
    CharacterEncodingEnum[CharacterEncodingEnum["X_EUC_CN"] = 33] = "X_EUC_CN";
    CharacterEncodingEnum[CharacterEncodingEnum["GBK"] = 34] = "GBK";
    CharacterEncodingEnum[CharacterEncodingEnum["ISCII_91"] = 35] = "ISCII_91";
    CharacterEncodingEnum[CharacterEncodingEnum["X_WINDOWS_949"] = 36] = "X_WINDOWS_949";
    CharacterEncodingEnum[CharacterEncodingEnum["EUC_KR"] = 37] = "EUC_KR";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_2022_KR"] = 38] = "ISO_2022_KR";
    CharacterEncodingEnum[CharacterEncodingEnum["X_WINDOWS_950"] = 39] = "X_WINDOWS_950";
    CharacterEncodingEnum[CharacterEncodingEnum["X_MS_950_HKSCS"] = 40] = "X_MS_950_HKSCS";
    CharacterEncodingEnum[CharacterEncodingEnum["X_EUC_TW"] = 41] = "X_EUC_TW";
    CharacterEncodingEnum[CharacterEncodingEnum["BIG_5"] = 42] = "BIG_5";
    CharacterEncodingEnum[CharacterEncodingEnum["BIG_5_HKSCS"] = 43] = "BIG_5_HKSCS";
    CharacterEncodingEnum[CharacterEncodingEnum["TIS_620"] = 44] = "TIS_620";
    CharacterEncodingEnum[CharacterEncodingEnum["BIG_5_SOLARIS"] = 45] = "BIG_5_SOLARIS";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_037"] = 46] = "CP_037";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_273"] = 47] = "CP_273";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_277"] = 48] = "CP_277";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_278"] = 49] = "CP_278";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_280"] = 50] = "CP_280";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_284"] = 51] = "CP_284";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_285"] = 52] = "CP_285";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_297"] = 53] = "CP_297";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_420"] = 54] = "CP_420";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_424"] = 55] = "CP_424";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_437"] = 56] = "CP_437";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_500"] = 57] = "CP_500";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_737"] = 58] = "CP_737";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_775"] = 59] = "CP_775";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_838"] = 60] = "CP_838";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_850"] = 61] = "CP_850";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_852"] = 62] = "CP_852";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_855"] = 63] = "CP_855";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_856"] = 64] = "CP_856";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_857"] = 65] = "CP_857";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_858"] = 66] = "CP_858";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_860"] = 67] = "CP_860";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_861"] = 68] = "CP_861";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_862"] = 69] = "CP_862";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_863"] = 70] = "CP_863";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_864"] = 71] = "CP_864";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_865"] = 72] = "CP_865";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_866"] = 73] = "CP_866";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_868"] = 74] = "CP_868";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_869"] = 75] = "CP_869";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_870"] = 76] = "CP_870";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_871"] = 77] = "CP_871";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_874"] = 78] = "CP_874";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_875"] = 79] = "CP_875";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_918"] = 80] = "CP_918";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_921"] = 81] = "CP_921";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_922"] = 82] = "CP_922";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_930"] = 83] = "CP_930";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_933"] = 84] = "CP_933";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_935"] = 85] = "CP_935";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_937"] = 86] = "CP_937";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_939"] = 87] = "CP_939";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_942"] = 88] = "CP_942";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_942_C"] = 89] = "CP_942_C";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_943"] = 90] = "CP_943";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_943_C"] = 91] = "CP_943_C";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_948"] = 92] = "CP_948";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_949"] = 93] = "CP_949";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_949_C"] = 94] = "CP_949_C";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_950"] = 95] = "CP_950";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_964"] = 96] = "CP_964";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_970"] = 97] = "CP_970";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1006"] = 98] = "CP_1006";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1025"] = 99] = "CP_1025";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1026"] = 100] = "CP_1026";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1046"] = 101] = "CP_1046";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1047"] = 102] = "CP_1047";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1097"] = 103] = "CP_1097";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1098"] = 104] = "CP_1098";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1112"] = 105] = "CP_1112";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1122"] = 106] = "CP_1122";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1123"] = 107] = "CP_1123";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1124"] = 108] = "CP_1124";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1140"] = 109] = "CP_1140";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1141"] = 110] = "CP_1141";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1142"] = 111] = "CP_1142";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1143"] = 112] = "CP_1143";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1144"] = 113] = "CP_1144";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1145"] = 114] = "CP_1145";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1146"] = 115] = "CP_1146";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1147"] = 116] = "CP_1147";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1148"] = 117] = "CP_1148";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1149"] = 118] = "CP_1149";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1381"] = 119] = "CP_1381";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_1383"] = 120] = "CP_1383";
    CharacterEncodingEnum[CharacterEncodingEnum["CP_33722"] = 121] = "CP_33722";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_2022_CN_CNS"] = 122] = "ISO_2022_CN_CNS";
    CharacterEncodingEnum[CharacterEncodingEnum["ISO_2022_CN_GB"] = 123] = "ISO_2022_CN_GB";
    CharacterEncodingEnum[CharacterEncodingEnum["JIS_AUTO_DETECT"] = 124] = "JIS_AUTO_DETECT";
    CharacterEncodingEnum[CharacterEncodingEnum["MS_874"] = 125] = "MS_874";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_ARABIC"] = 126] = "MAC_ARABIC";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_CENTRAL_EUROPE"] = 127] = "MAC_CENTRAL_EUROPE";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_CROATIAN"] = 128] = "MAC_CROATIAN";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_CYRILLIC"] = 129] = "MAC_CYRILLIC";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_DINGBAT"] = 130] = "MAC_DINGBAT";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_GREEK"] = 131] = "MAC_GREEK";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_HEBREW"] = 132] = "MAC_HEBREW";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_ICELAND"] = 133] = "MAC_ICELAND";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_ROMAN"] = 134] = "MAC_ROMAN";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_ROMANIA"] = 135] = "MAC_ROMANIA";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_SYMBOL"] = 136] = "MAC_SYMBOL";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_THAI"] = 137] = "MAC_THAI";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_TURKISH"] = 138] = "MAC_TURKISH";
    CharacterEncodingEnum[CharacterEncodingEnum["MAC_UKRAINE"] = 139] = "MAC_UKRAINE";
})(exports.CharacterEncodingEnum || (exports.CharacterEncodingEnum = {}));
var CharacterEncodingEnum = exports.CharacterEncodingEnum;
(function (ClassificationSchemeName) {
    ClassificationSchemeName[ClassificationSchemeName["DDC"] = 0] = "DDC";
    ClassificationSchemeName[ClassificationSchemeName["UDC"] = 1] = "UDC";
    ClassificationSchemeName[ClassificationSchemeName["EURO_VOC"] = 2] = "EURO_VOC";
    ClassificationSchemeName[ClassificationSchemeName["LCSH"] = 3] = "LCSH";
    ClassificationSchemeName[ClassificationSchemeName["DK_5"] = 4] = "DK_5";
    ClassificationSchemeName[ClassificationSchemeName["ME_SH"] = 5] = "ME_SH";
    ClassificationSchemeName[ClassificationSchemeName["ANC_CLASSIFICATION"] = 6] = "ANC_CLASSIFICATION";
    ClassificationSchemeName[ClassificationSchemeName["BNC_CLASSIFICATION"] = 7] = "BNC_CLASSIFICATION";
    ClassificationSchemeName[ClassificationSchemeName["NLK_CLASSIFICATION"] = 8] = "NLK_CLASSIFICATION";
    ClassificationSchemeName[ClassificationSchemeName["PAROLE_TOPIC_CLASSIFICATION"] = 9] = "PAROLE_TOPIC_CLASSIFICATION";
    ClassificationSchemeName[ClassificationSchemeName["PAROLE_GENRE_CLASSIFICATION"] = 10] = "PAROLE_GENRE_CLASSIFICATION";
    ClassificationSchemeName[ClassificationSchemeName["OTHER"] = 11] = "OTHER";
})(exports.ClassificationSchemeName || (exports.ClassificationSchemeName = {}));
var ClassificationSchemeName = exports.ClassificationSchemeName;
(function (CompatibleLexiconTypeEnum) {
    CompatibleLexiconTypeEnum[CompatibleLexiconTypeEnum["WORDNET"] = 0] = "WORDNET";
    CompatibleLexiconTypeEnum[CompatibleLexiconTypeEnum["WORDLIST"] = 1] = "WORDLIST";
    CompatibleLexiconTypeEnum[CompatibleLexiconTypeEnum["MORPHOLOGICAL_LEXICON"] = 2] = "MORPHOLOGICAL_LEXICON";
    CompatibleLexiconTypeEnum[CompatibleLexiconTypeEnum["OTHER"] = 3] = "OTHER";
})(exports.CompatibleLexiconTypeEnum || (exports.CompatibleLexiconTypeEnum = {}));
var CompatibleLexiconTypeEnum = exports.CompatibleLexiconTypeEnum;
(function (ComponentDistributionMediumEnum) {
    ComponentDistributionMediumEnum[ComponentDistributionMediumEnum["WEB_SERVICE"] = 0] = "WEB_SERVICE";
    ComponentDistributionMediumEnum[ComponentDistributionMediumEnum["SOURCE_CODE"] = 1] = "SOURCE_CODE";
    ComponentDistributionMediumEnum[ComponentDistributionMediumEnum["EXECUTABLE_CODE"] = 2] = "EXECUTABLE_CODE";
})(exports.ComponentDistributionMediumEnum || (exports.ComponentDistributionMediumEnum = {}));
var ComponentDistributionMediumEnum = exports.ComponentDistributionMediumEnum;
(function (ComponentTypeEnum) {
    ComponentTypeEnum[ComponentTypeEnum["ACCESS_COMPONENT"] = 0] = "ACCESS_COMPONENT";
    ComponentTypeEnum[ComponentTypeEnum["READER"] = 1] = "READER";
    ComponentTypeEnum[ComponentTypeEnum["WRITER"] = 2] = "WRITER";
    ComponentTypeEnum[ComponentTypeEnum["SUPPORT_COMPONENT"] = 3] = "SUPPORT_COMPONENT";
    ComponentTypeEnum[ComponentTypeEnum["VISUALISER"] = 4] = "VISUALISER";
    ComponentTypeEnum[ComponentTypeEnum["DEBUGGER"] = 5] = "DEBUGGER";
    ComponentTypeEnum[ComponentTypeEnum["VALIDATOR"] = 6] = "VALIDATOR";
    ComponentTypeEnum[ComponentTypeEnum["VIEWER"] = 7] = "VIEWER";
    ComponentTypeEnum[ComponentTypeEnum["CORPUS_VIEWER"] = 8] = "CORPUS_VIEWER";
    ComponentTypeEnum[ComponentTypeEnum["LEXICON_VIEWER"] = 9] = "LEXICON_VIEWER";
    ComponentTypeEnum[ComponentTypeEnum["EDITOR"] = 10] = "EDITOR";
    ComponentTypeEnum[ComponentTypeEnum["ML_TRAINER"] = 11] = "ML_TRAINER";
    ComponentTypeEnum[ComponentTypeEnum["ML_PREDICTOR"] = 12] = "ML_PREDICTOR";
    ComponentTypeEnum[ComponentTypeEnum["FEATURE_EXTRACTOR"] = 13] = "FEATURE_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["DATA_SPLITTER"] = 14] = "DATA_SPLITTER";
    ComponentTypeEnum[ComponentTypeEnum["DATA_MERGER"] = 15] = "DATA_MERGER";
    ComponentTypeEnum[ComponentTypeEnum["CONVERTER"] = 16] = "CONVERTER";
    ComponentTypeEnum[ComponentTypeEnum["EVALUATOR"] = 17] = "EVALUATOR";
    ComponentTypeEnum[ComponentTypeEnum["FLOW_CONTROLLER"] = 18] = "FLOW_CONTROLLER";
    ComponentTypeEnum[ComponentTypeEnum["SCRIPT_BASED_ANALYSER"] = 19] = "SCRIPT_BASED_ANALYSER";
    ComponentTypeEnum[ComponentTypeEnum["MATCHER"] = 20] = "MATCHER";
    ComponentTypeEnum[ComponentTypeEnum["GAZETEER_BASED_MATCHER"] = 21] = "GAZETEER_BASED_MATCHER";
    ComponentTypeEnum[ComponentTypeEnum["CROWD_SOURCING_COMPONENT"] = 22] = "CROWD_SOURCING_COMPONENT";
    ComponentTypeEnum[ComponentTypeEnum["DATA_COLLECTOR"] = 23] = "DATA_COLLECTOR";
    ComponentTypeEnum[ComponentTypeEnum["CRAWLER"] = 24] = "CRAWLER";
    ComponentTypeEnum[ComponentTypeEnum["PROCESSOR"] = 25] = "PROCESSOR";
    ComponentTypeEnum[ComponentTypeEnum["ANNOTATOR"] = 26] = "ANNOTATOR";
    ComponentTypeEnum[ComponentTypeEnum["SEGMENTER"] = 27] = "SEGMENTER";
    ComponentTypeEnum[ComponentTypeEnum["STEMMER"] = 28] = "STEMMER";
    ComponentTypeEnum[ComponentTypeEnum["LEMMATIZER"] = 29] = "LEMMATIZER";
    ComponentTypeEnum[ComponentTypeEnum["MORPHOLOGICAL_TAGGER"] = 30] = "MORPHOLOGICAL_TAGGER";
    ComponentTypeEnum[ComponentTypeEnum["CHUNKER"] = 31] = "CHUNKER";
    ComponentTypeEnum[ComponentTypeEnum["PARSER"] = 32] = "PARSER";
    ComponentTypeEnum[ComponentTypeEnum["COREFERENCE_ANNOTATOR"] = 33] = "COREFERENCE_ANNOTATOR";
    ComponentTypeEnum[ComponentTypeEnum["NAMED_ENTITY_RECOGNIZER"] = 34] = "NAMED_ENTITY_RECOGNIZER";
    ComponentTypeEnum[ComponentTypeEnum["SEMANTICS_ANNOTATOR"] = 35] = "SEMANTICS_ANNOTATOR";
    ComponentTypeEnum[ComponentTypeEnum["SRL_ANNOTATOR"] = 36] = "SRL_ANNOTATOR";
    ComponentTypeEnum[ComponentTypeEnum["READABILITY_ANNOTATOR"] = 37] = "READABILITY_ANNOTATOR";
    ComponentTypeEnum[ComponentTypeEnum["ALIGNER"] = 38] = "ALIGNER";
    ComponentTypeEnum[ComponentTypeEnum["GENERATOR"] = 39] = "GENERATOR";
    ComponentTypeEnum[ComponentTypeEnum["SUMMARIZER"] = 40] = "SUMMARIZER";
    ComponentTypeEnum[ComponentTypeEnum["SIMPLIFIER"] = 41] = "SIMPLIFIER";
    ComponentTypeEnum[ComponentTypeEnum["PRE_OR_POST_PROCESSING_COMPONENT"] = 42] = "PRE_OR_POST_PROCESSING_COMPONENT";
    ComponentTypeEnum[ComponentTypeEnum["SPELLING_CHECKER"] = 43] = "SPELLING_CHECKER";
    ComponentTypeEnum[ComponentTypeEnum["GRAMMAR_CHECKER"] = 44] = "GRAMMAR_CHECKER";
    ComponentTypeEnum[ComponentTypeEnum["NORMALIZER"] = 45] = "NORMALIZER";
    ComponentTypeEnum[ComponentTypeEnum["FILTERS"] = 46] = "FILTERS";
    ComponentTypeEnum[ComponentTypeEnum["ANALYZER"] = 47] = "ANALYZER";
    ComponentTypeEnum[ComponentTypeEnum["TOPIC_EXTRACTOR"] = 48] = "TOPIC_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["DOCUMENT_CLASSIFIER"] = 49] = "DOCUMENT_CLASSIFIER";
    ComponentTypeEnum[ComponentTypeEnum["LANGUAGE_IDENTIFIER"] = 50] = "LANGUAGE_IDENTIFIER";
    ComponentTypeEnum[ComponentTypeEnum["SENTIMENT_ANALYZER"] = 51] = "SENTIMENT_ANALYZER";
    ComponentTypeEnum[ComponentTypeEnum["KEYWORDS_EXTRACTOR"] = 52] = "KEYWORDS_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["TERM_EXTRACTOR"] = 53] = "TERM_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["CONTRADICTION_DETECTOR"] = 54] = "CONTRADICTION_DETECTOR";
    ComponentTypeEnum[ComponentTypeEnum["EVENT_EXTRACTOR"] = 55] = "EVENT_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["PERSUASIVE_EXPRESSION_MINER"] = 56] = "PERSUASIVE_EXPRESSION_MINER";
    ComponentTypeEnum[ComponentTypeEnum["INFORMATION_EXTRACTOR"] = 57] = "INFORMATION_EXTRACTOR";
    ComponentTypeEnum[ComponentTypeEnum["LEXICON_EXTRACTOR_FROM_CORPORA"] = 58] = "LEXICON_EXTRACTOR_FROM_CORPORA";
    ComponentTypeEnum[ComponentTypeEnum["LEXICON_EXTRACTOR_FROM_LEXICA"] = 59] = "LEXICON_EXTRACTOR_FROM_LEXICA";
    ComponentTypeEnum[ComponentTypeEnum["WORD_SENSE_DISAMBIGUATOR"] = 60] = "WORD_SENSE_DISAMBIGUATOR";
    ComponentTypeEnum[ComponentTypeEnum["QUALITATIVE_ANALYZER"] = 61] = "QUALITATIVE_ANALYZER";
    ComponentTypeEnum[ComponentTypeEnum["PLATFORM"] = 62] = "PLATFORM";
    ComponentTypeEnum[ComponentTypeEnum["INFRASTRUCTURE"] = 63] = "INFRASTRUCTURE";
    ComponentTypeEnum[ComponentTypeEnum["ARCHITECTURE"] = 64] = "ARCHITECTURE";
    ComponentTypeEnum[ComponentTypeEnum["NLP_DEVELOPMENT_ENVIRONMENT"] = 65] = "NLP_DEVELOPMENT_ENVIRONMENT";
    ComponentTypeEnum[ComponentTypeEnum["OTHER"] = 66] = "OTHER";
})(exports.ComponentTypeEnum || (exports.ComponentTypeEnum = {}));
var ComponentTypeEnum = exports.ComponentTypeEnum;
(function (ConditionsOfUseEnum) {
    ConditionsOfUseEnum[ConditionsOfUseEnum["ATTRIBUTION"] = 0] = "ATTRIBUTION";
    ConditionsOfUseEnum[ConditionsOfUseEnum["NON_COMMERCIAL_USE"] = 1] = "NON_COMMERCIAL_USE";
    ConditionsOfUseEnum[ConditionsOfUseEnum["COMMERCIAL_USE"] = 2] = "COMMERCIAL_USE";
    ConditionsOfUseEnum[ConditionsOfUseEnum["SHARE_ALIKE"] = 3] = "SHARE_ALIKE";
    ConditionsOfUseEnum[ConditionsOfUseEnum["NO_DERIVATIVES"] = 4] = "NO_DERIVATIVES";
    ConditionsOfUseEnum[ConditionsOfUseEnum["NO_REDISTRIBUTION"] = 5] = "NO_REDISTRIBUTION";
    ConditionsOfUseEnum[ConditionsOfUseEnum["EVALUATION_USE"] = 6] = "EVALUATION_USE";
    ConditionsOfUseEnum[ConditionsOfUseEnum["RESEARCH"] = 7] = "RESEARCH";
    ConditionsOfUseEnum[ConditionsOfUseEnum["LANGUAGE_ENGINEERING_RESEARCH"] = 8] = "LANGUAGE_ENGINEERING_RESEARCH";
    ConditionsOfUseEnum[ConditionsOfUseEnum["EDUCATION"] = 9] = "EDUCATION";
    ConditionsOfUseEnum[ConditionsOfUseEnum["INFORM_LICENSOR"] = 10] = "INFORM_LICENSOR";
    ConditionsOfUseEnum[ConditionsOfUseEnum["REDEPOSIT"] = 11] = "REDEPOSIT";
    ConditionsOfUseEnum[ConditionsOfUseEnum["COMPENSATE"] = 12] = "COMPENSATE";
    ConditionsOfUseEnum[ConditionsOfUseEnum["PERSONAL_DATA_INCLUDED"] = 13] = "PERSONAL_DATA_INCLUDED";
    ConditionsOfUseEnum[ConditionsOfUseEnum["SENSITIVE_DATA_INCLUDED"] = 14] = "SENSITIVE_DATA_INCLUDED";
    ConditionsOfUseEnum[ConditionsOfUseEnum["REQUEST_PLAN"] = 15] = "REQUEST_PLAN";
    ConditionsOfUseEnum[ConditionsOfUseEnum["SPATIAL_CONSTRAINT"] = 16] = "SPATIAL_CONSTRAINT";
    ConditionsOfUseEnum[ConditionsOfUseEnum["USER_IDENTIFIED"] = 17] = "USER_IDENTIFIED";
    ConditionsOfUseEnum[ConditionsOfUseEnum["ACADEMIC_USERS"] = 18] = "ACADEMIC_USERS";
    ConditionsOfUseEnum[ConditionsOfUseEnum["COMMERCIAL_USERS"] = 19] = "COMMERCIAL_USERS";
    ConditionsOfUseEnum[ConditionsOfUseEnum["MEMBERS_OF_GROUP"] = 20] = "MEMBERS_OF_GROUP";
    ConditionsOfUseEnum[ConditionsOfUseEnum["OTHER"] = 21] = "OTHER";
})(exports.ConditionsOfUseEnum || (exports.ConditionsOfUseEnum = {}));
var ConditionsOfUseEnum = exports.ConditionsOfUseEnum;
(function (ConformanceToStandardsBestPractices) {
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["AGRO_VOC"] = 0] = "AGRO_VOC";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ALVIS"] = 1] = "ALVIS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ARGO"] = 2] = "ARGO";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["BML"] = 3] = "BML";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["CES"] = 4] = "CES";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["DK_PRO_CORE"] = 5] = "DK_PRO_CORE";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["EAGLES"] = 6] = "EAGLES";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["EDA_MONTOLOGY"] = 7] = "EDA_MONTOLOGY";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ELSST"] = 8] = "ELSST";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["EML"] = 9] = "EML";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["EMMA"] = 10] = "EMMA";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["GATE"] = 11] = "GATE";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["GESIS"] = 12] = "GESIS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["GMX"] = 13] = "GMX";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["GR_AF"] = 14] = "GR_AF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["HAM_NO_SYS"] = 15] = "HAM_NO_SYS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["HASSET"] = 16] = "HASSET";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["INK_ML"] = 17] = "INK_ML";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ILSP_NLP"] = 18] = "ILSP_NLP";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_12620"] = 19] = "ISO_12620";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_16642"] = 20] = "ISO_16642";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_1987"] = 21] = "ISO_1987";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_26162"] = 22] = "ISO_26162";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_30042"] = 23] = "ISO_30042";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["ISO_704"] = 24] = "ISO_704";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["JATS"] = 25] = "JATS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["LAF"] = 26] = "LAF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["LAPPS"] = 27] = "LAPPS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["LEMON"] = 28] = "LEMON";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["LMF"] = 29] = "LMF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MAF"] = 30] = "MAF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MLIF"] = 31] = "MLIF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MOSES"] = 32] = "MOSES";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MULTEXT"] = 33] = "MULTEXT";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MUMIN"] = 34] = "MUMIN";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["MULTIMODAL_INTERACTION_FRAMEWORK"] = 35] = "MULTIMODAL_INTERACTION_FRAMEWORK";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["OAXAL"] = 36] = "OAXAL";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["OLIA"] = 37] = "OLIA";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["OWL"] = 38] = "OWL";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["PANACEA"] = 39] = "PANACEA";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["PENN_TREE_BANK"] = 40] = "PENN_TREE_BANK";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["PRAGUE_TREEBANK"] = 41] = "PRAGUE_TREEBANK";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["RDF"] = 42] = "RDF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SEM_AF"] = 43] = "SEM_AF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SEM_AF_DA"] = 44] = "SEM_AF_DA";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SEM_AF_NE"] = 45] = "SEM_AF_NE";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SEM_AF_SRL"] = 46] = "SEM_AF_SRL";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SEM_AF_DS"] = 47] = "SEM_AF_DS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SKOS"] = 48] = "SKOS";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SRX"] = 49] = "SRX";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["SYN_AF"] = 50] = "SYN_AF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TBX"] = 51] = "TBX";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TMX"] = 52] = "TMX";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TEI"] = 53] = "TEI";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TEI_P_3"] = 54] = "TEI_P_3";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TEI_P_4"] = 55] = "TEI_P_4";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TEI_P_5"] = 56] = "TEI_P_5";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["TIME_ML"] = 57] = "TIME_ML";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["XCES"] = 58] = "XCES";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["XLIFF"] = 59] = "XLIFF";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["UD"] = 60] = "UD";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["WORD_NET"] = 61] = "WORD_NET";
    ConformanceToStandardsBestPractices[ConformanceToStandardsBestPractices["OTHER"] = 62] = "OTHER";
})(exports.ConformanceToStandardsBestPractices || (exports.ConformanceToStandardsBestPractices = {}));
var ConformanceToStandardsBestPractices = exports.ConformanceToStandardsBestPractices;
(function (ContributorTypeEnum) {
    ContributorTypeEnum[ContributorTypeEnum["EDITOR"] = 0] = "EDITOR";
    ContributorTypeEnum[ContributorTypeEnum["TRANSLATOR"] = 1] = "TRANSLATOR";
    ContributorTypeEnum[ContributorTypeEnum["OTHER"] = 2] = "OTHER";
})(exports.ContributorTypeEnum || (exports.ContributorTypeEnum = {}));
var ContributorTypeEnum = exports.ContributorTypeEnum;
(function (DataFormatSpecificEnum) {
    DataFormatSpecificEnum[DataFormatSpecificEnum["ACL_ANTHOLOGY"] = 0] = "ACL_ANTHOLOGY";
    DataFormatSpecificEnum[DataFormatSpecificEnum["ALVIS_ENRICHED_DOCUMENT"] = 1] = "ALVIS_ENRICHED_DOCUMENT";
    DataFormatSpecificEnum[DataFormatSpecificEnum["BNC"] = 2] = "BNC";
    DataFormatSpecificEnum[DataFormatSpecificEnum["BIO_NLP"] = 3] = "BIO_NLP";
    DataFormatSpecificEnum[DataFormatSpecificEnum["BIONLP_FORMAT_VARIANT_ST2013A1_A2"] = 4] = "BIONLP_FORMAT_VARIANT_ST2013A1_A2";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CADIXE_JSON"] = 5] = "CADIXE_JSON";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2000"] = 6] = "CONLL_2000";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2002"] = 7] = "CONLL_2002";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2006"] = 8] = "CONLL_2006";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2007"] = 9] = "CONLL_2007";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2009"] = 10] = "CONLL_2009";
    DataFormatSpecificEnum[DataFormatSpecificEnum["CONLL_2012"] = 11] = "CONLL_2012";
    DataFormatSpecificEnum[DataFormatSpecificEnum["DATA_SIFT"] = 12] = "DATA_SIFT";
    DataFormatSpecificEnum[DataFormatSpecificEnum["FACTORED_TAG_LEM"] = 13] = "FACTORED_TAG_LEM";
    DataFormatSpecificEnum[DataFormatSpecificEnum["GATE"] = 14] = "GATE";
    DataFormatSpecificEnum[DataFormatSpecificEnum["GENIA"] = 15] = "GENIA";
    DataFormatSpecificEnum[DataFormatSpecificEnum["GRAF"] = 16] = "GRAF";
    DataFormatSpecificEnum[DataFormatSpecificEnum["HTML_5_MICRODATA"] = 17] = "HTML_5_MICRODATA";
    DataFormatSpecificEnum[DataFormatSpecificEnum["I_2_B_2"] = 18] = "I_2_B_2";
    DataFormatSpecificEnum[DataFormatSpecificEnum["IMS_CWB"] = 19] = "IMS_CWB";
    DataFormatSpecificEnum[DataFormatSpecificEnum["JDBC"] = 20] = "JDBC";
    DataFormatSpecificEnum[DataFormatSpecificEnum["KEA_CORPUS"] = 21] = "KEA_CORPUS";
    DataFormatSpecificEnum[DataFormatSpecificEnum["LLL"] = 22] = "LLL";
    DataFormatSpecificEnum[DataFormatSpecificEnum["NEGRA_EXPORT"] = 23] = "NEGRA_EXPORT";
    DataFormatSpecificEnum[DataFormatSpecificEnum["PTB_FORMAT_VARIANT_CHUNKED"] = 24] = "PTB_FORMAT_VARIANT_CHUNKED";
    DataFormatSpecificEnum[DataFormatSpecificEnum["PTB_FORMAT_VARIANT_COMBINED"] = 25] = "PTB_FORMAT_VARIANT_COMBINED";
    DataFormatSpecificEnum[DataFormatSpecificEnum["PML"] = 26] = "PML";
    DataFormatSpecificEnum[DataFormatSpecificEnum["RELP"] = 27] = "RELP";
    DataFormatSpecificEnum[DataFormatSpecificEnum["AIMED_CORPUS"] = 28] = "AIMED_CORPUS";
    DataFormatSpecificEnum[DataFormatSpecificEnum["TIGER"] = 29] = "TIGER";
    DataFormatSpecificEnum[DataFormatSpecificEnum["TUPP_DZ"] = 30] = "TUPP_DZ";
    DataFormatSpecificEnum[DataFormatSpecificEnum["TWITTER"] = 31] = "TWITTER";
    DataFormatSpecificEnum[DataFormatSpecificEnum["XCES_FORMAT_VARIANT_ILSP"] = 32] = "XCES_FORMAT_VARIANT_ILSP";
    DataFormatSpecificEnum[DataFormatSpecificEnum["WEB_1_T"] = 33] = "WEB_1_T";
    DataFormatSpecificEnum[DataFormatSpecificEnum["UIMA_CAS_DUMP"] = 34] = "UIMA_CAS_DUMP";
    DataFormatSpecificEnum[DataFormatSpecificEnum["UIMA_BINARY_CAS"] = 35] = "UIMA_BINARY_CAS";
})(exports.DataFormatSpecificEnum || (exports.DataFormatSpecificEnum = {}));
var DataFormatSpecificEnum = exports.DataFormatSpecificEnum;
(function (DistributionMediumEnum) {
    DistributionMediumEnum[DistributionMediumEnum["WEB_EXECUTABLE"] = 0] = "WEB_EXECUTABLE";
    DistributionMediumEnum[DistributionMediumEnum["PAPER_COPY"] = 1] = "PAPER_COPY";
    DistributionMediumEnum[DistributionMediumEnum["HARD_DISK"] = 2] = "HARD_DISK";
    DistributionMediumEnum[DistributionMediumEnum["BLU_RAY"] = 3] = "BLU_RAY";
    DistributionMediumEnum[DistributionMediumEnum["DVD_R"] = 4] = "DVD_R";
    DistributionMediumEnum[DistributionMediumEnum["CD_ROM"] = 5] = "CD_ROM";
    DistributionMediumEnum[DistributionMediumEnum["DOWNLOADABLE"] = 6] = "DOWNLOADABLE";
    DistributionMediumEnum[DistributionMediumEnum["ACCESSIBLE_THROUGH_INTERFACE"] = 7] = "ACCESSIBLE_THROUGH_INTERFACE";
    DistributionMediumEnum[DistributionMediumEnum["OTHER"] = 8] = "OTHER";
})(exports.DistributionMediumEnum || (exports.DistributionMediumEnum = {}));
var DistributionMediumEnum = exports.DistributionMediumEnum;
(function (DocumentTypeEnum) {
    DocumentTypeEnum[DocumentTypeEnum["BIBLIOGRAPHIC_RECORD_ONLY"] = 0] = "BIBLIOGRAPHIC_RECORD_ONLY";
    DocumentTypeEnum[DocumentTypeEnum["ABSTRACT"] = 1] = "ABSTRACT";
    DocumentTypeEnum[DocumentTypeEnum["FULL_TEXT"] = 2] = "FULL_TEXT";
})(exports.DocumentTypeEnum || (exports.DocumentTypeEnum = {}));
var DocumentTypeEnum = exports.DocumentTypeEnum;
(function (EncodingLevelEnum) {
    EncodingLevelEnum[EncodingLevelEnum["PHONETICS"] = 0] = "PHONETICS";
    EncodingLevelEnum[EncodingLevelEnum["PHONOLOGY"] = 1] = "PHONOLOGY";
    EncodingLevelEnum[EncodingLevelEnum["SEMANTICS"] = 2] = "SEMANTICS";
    EncodingLevelEnum[EncodingLevelEnum["MORPHOLOGY"] = 3] = "MORPHOLOGY";
    EncodingLevelEnum[EncodingLevelEnum["SYNTAX"] = 4] = "SYNTAX";
    EncodingLevelEnum[EncodingLevelEnum["PRAGMATICS"] = 5] = "PRAGMATICS";
    EncodingLevelEnum[EncodingLevelEnum["OTHER"] = 6] = "OTHER";
})(exports.EncodingLevelEnum || (exports.EncodingLevelEnum = {}));
var EncodingLevelEnum = exports.EncodingLevelEnum;
(function (EvaluationCriterionEnum) {
    EvaluationCriterionEnum[EvaluationCriterionEnum["EXTRINSIC"] = 0] = "EXTRINSIC";
    EvaluationCriterionEnum[EvaluationCriterionEnum["INTRINSIC"] = 1] = "INTRINSIC";
})(exports.EvaluationCriterionEnum || (exports.EvaluationCriterionEnum = {}));
var EvaluationCriterionEnum = exports.EvaluationCriterionEnum;
(function (EvaluationLevelEnum) {
    EvaluationLevelEnum[EvaluationLevelEnum["TECHNOLOGICAL"] = 0] = "TECHNOLOGICAL";
    EvaluationLevelEnum[EvaluationLevelEnum["USAGE"] = 1] = "USAGE";
    EvaluationLevelEnum[EvaluationLevelEnum["IMPACT"] = 2] = "IMPACT";
    EvaluationLevelEnum[EvaluationLevelEnum["DIAGNOSTIC"] = 3] = "DIAGNOSTIC";
})(exports.EvaluationLevelEnum || (exports.EvaluationLevelEnum = {}));
var EvaluationLevelEnum = exports.EvaluationLevelEnum;
(function (EvaluationMeasureEnum) {
    EvaluationMeasureEnum[EvaluationMeasureEnum["HUMAN"] = 0] = "HUMAN";
    EvaluationMeasureEnum[EvaluationMeasureEnum["AUTOMATIC"] = 1] = "AUTOMATIC";
})(exports.EvaluationMeasureEnum || (exports.EvaluationMeasureEnum = {}));
var EvaluationMeasureEnum = exports.EvaluationMeasureEnum;
(function (EvaluationTypeEnum) {
    EvaluationTypeEnum[EvaluationTypeEnum["GLASS_BOX"] = 0] = "GLASS_BOX";
    EvaluationTypeEnum[EvaluationTypeEnum["BLACK_BOX"] = 1] = "BLACK_BOX";
})(exports.EvaluationTypeEnum || (exports.EvaluationTypeEnum = {}));
var EvaluationTypeEnum = exports.EvaluationTypeEnum;
(function (ExtraTextualInformationUnitEnum) {
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["WORD"] = 0] = "WORD";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["LEMMA"] = 1] = "LEMMA";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["SEMANTICS"] = 2] = "SEMANTICS";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["EXAMPLE"] = 3] = "EXAMPLE";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["SYNTAX"] = 4] = "SYNTAX";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["LEXICAL_UNIT"] = 5] = "LEXICAL_UNIT";
    ExtraTextualInformationUnitEnum[ExtraTextualInformationUnitEnum["OTHER"] = 6] = "OTHER";
})(exports.ExtraTextualInformationUnitEnum || (exports.ExtraTextualInformationUnitEnum = {}));
var ExtraTextualInformationUnitEnum = exports.ExtraTextualInformationUnitEnum;
(function (ExtratextualInformationEnum) {
    ExtratextualInformationEnum[ExtratextualInformationEnum["IMAGES"] = 0] = "IMAGES";
    ExtratextualInformationEnum[ExtratextualInformationEnum["VIDEOS"] = 1] = "VIDEOS";
    ExtratextualInformationEnum[ExtratextualInformationEnum["SOUND_RECORDINGS"] = 2] = "SOUND_RECORDINGS";
    ExtratextualInformationEnum[ExtratextualInformationEnum["OTHER"] = 3] = "OTHER";
})(exports.ExtratextualInformationEnum || (exports.ExtratextualInformationEnum = {}));
var ExtratextualInformationEnum = exports.ExtratextualInformationEnum;
(function (ForeseenUseEnum) {
    ForeseenUseEnum[ForeseenUseEnum["HUMAN_USE"] = 0] = "HUMAN_USE";
    ForeseenUseEnum[ForeseenUseEnum["NLP_APPLICATIONS"] = 1] = "NLP_APPLICATIONS";
})(exports.ForeseenUseEnum || (exports.ForeseenUseEnum = {}));
var ForeseenUseEnum = exports.ForeseenUseEnum;
(function (FrameworkEnum) {
    FrameworkEnum[FrameworkEnum["UIMA"] = 0] = "UIMA";
    FrameworkEnum[FrameworkEnum["GATE"] = 1] = "GATE";
    FrameworkEnum[FrameworkEnum["OTHER"] = 2] = "OTHER";
})(exports.FrameworkEnum || (exports.FrameworkEnum = {}));
var FrameworkEnum = exports.FrameworkEnum;
(function (FundingTypeEnum) {
    FundingTypeEnum[FundingTypeEnum["OTHER"] = 0] = "OTHER";
    FundingTypeEnum[FundingTypeEnum["OWN_FUNDS"] = 1] = "OWN_FUNDS";
    FundingTypeEnum[FundingTypeEnum["NATIONAL_FUNDS"] = 2] = "NATIONAL_FUNDS";
    FundingTypeEnum[FundingTypeEnum["EU_FUNDS"] = 3] = "EU_FUNDS";
})(exports.FundingTypeEnum || (exports.FundingTypeEnum = {}));
var FundingTypeEnum = exports.FundingTypeEnum;
(function (GrammaticalPhenomenaCoverageEnum) {
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["CLAUSE_STRUCTURE"] = 0] = "CLAUSE_STRUCTURE";
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["PP_ATTACHMENT"] = 1] = "PP_ATTACHMENT";
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["NP_STRUCTURE"] = 2] = "NP_STRUCTURE";
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["COORDINATION"] = 3] = "COORDINATION";
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["ANAPHORA"] = 4] = "ANAPHORA";
    GrammaticalPhenomenaCoverageEnum[GrammaticalPhenomenaCoverageEnum["OTHER"] = 5] = "OTHER";
})(exports.GrammaticalPhenomenaCoverageEnum || (exports.GrammaticalPhenomenaCoverageEnum = {}));
var GrammaticalPhenomenaCoverageEnum = exports.GrammaticalPhenomenaCoverageEnum;
(function (JournalIdentifierSchemeNameEnum) {
    JournalIdentifierSchemeNameEnum[JournalIdentifierSchemeNameEnum["DOI"] = 0] = "DOI";
    JournalIdentifierSchemeNameEnum[JournalIdentifierSchemeNameEnum["HDL"] = 1] = "HDL";
    JournalIdentifierSchemeNameEnum[JournalIdentifierSchemeNameEnum["ISSN"] = 2] = "ISSN";
    JournalIdentifierSchemeNameEnum[JournalIdentifierSchemeNameEnum["OTHER"] = 3] = "OTHER";
})(exports.JournalIdentifierSchemeNameEnum || (exports.JournalIdentifierSchemeNameEnum = {}));
var JournalIdentifierSchemeNameEnum = exports.JournalIdentifierSchemeNameEnum;
(function (LanguageDescriptionTypeEnum) {
    LanguageDescriptionTypeEnum[LanguageDescriptionTypeEnum["GRAMMAR"] = 0] = "GRAMMAR";
    LanguageDescriptionTypeEnum[LanguageDescriptionTypeEnum["OTHER"] = 1] = "OTHER";
})(exports.LanguageDescriptionTypeEnum || (exports.LanguageDescriptionTypeEnum = {}));
var LanguageDescriptionTypeEnum = exports.LanguageDescriptionTypeEnum;
(function (LanguageVarietyTypeEnum) {
    LanguageVarietyTypeEnum[LanguageVarietyTypeEnum["DIALECT"] = 0] = "DIALECT";
    LanguageVarietyTypeEnum[LanguageVarietyTypeEnum["JARGON"] = 1] = "JARGON";
    LanguageVarietyTypeEnum[LanguageVarietyTypeEnum["OTHER"] = 2] = "OTHER";
})(exports.LanguageVarietyTypeEnum || (exports.LanguageVarietyTypeEnum = {}));
var LanguageVarietyTypeEnum = exports.LanguageVarietyTypeEnum;
(function (LexicalConceptualResourceTypeEnum) {
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["WORD_LIST"] = 0] = "WORD_LIST";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["COMPUTATIONAL_LEXICON"] = 1] = "COMPUTATIONAL_LEXICON";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["ONTOLOGY"] = 2] = "ONTOLOGY";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["WORDNET"] = 3] = "WORDNET";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["THESAURUS"] = 4] = "THESAURUS";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["FRAMENET"] = 5] = "FRAMENET";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["TERMINOLOGICAL_RESOURCE"] = 6] = "TERMINOLOGICAL_RESOURCE";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["MACHINE_READABLE_DICTIONARY"] = 7] = "MACHINE_READABLE_DICTIONARY";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["LEXICON"] = 8] = "LEXICON";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["TYPESYSTEM"] = 9] = "TYPESYSTEM";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["TAGSET"] = 10] = "TAGSET";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["MAPPING_OF_RESOURCES"] = 11] = "MAPPING_OF_RESOURCES";
    LexicalConceptualResourceTypeEnum[LexicalConceptualResourceTypeEnum["OTHER"] = 12] = "OTHER";
})(exports.LexicalConceptualResourceTypeEnum || (exports.LexicalConceptualResourceTypeEnum = {}));
var LexicalConceptualResourceTypeEnum = exports.LexicalConceptualResourceTypeEnum;
(function (LicenceEnum) {
    LicenceEnum[LicenceEnum["CC_BY"] = 0] = "CC_BY";
    LicenceEnum[LicenceEnum["CC_BY_NC"] = 1] = "CC_BY_NC";
    LicenceEnum[LicenceEnum["CC_BY_NC_ND"] = 2] = "CC_BY_NC_ND";
    LicenceEnum[LicenceEnum["CC_BY_NC_SA"] = 3] = "CC_BY_NC_SA";
    LicenceEnum[LicenceEnum["CC_BY_ND"] = 4] = "CC_BY_ND";
    LicenceEnum[LicenceEnum["CC_BY_SA"] = 5] = "CC_BY_SA";
    LicenceEnum[LicenceEnum["CC_ZERO"] = 6] = "CC_ZERO";
    LicenceEnum[LicenceEnum["PDDL"] = 7] = "PDDL";
    LicenceEnum[LicenceEnum["ODC_BY"] = 8] = "ODC_BY";
    LicenceEnum[LicenceEnum["O_DB_L"] = 9] = "O_DB_L";
    LicenceEnum[LicenceEnum["MS_NO_RE_D"] = 10] = "MS_NO_RE_D";
    LicenceEnum[LicenceEnum["MS_NO_RE_D_FF"] = 11] = "MS_NO_RE_D_FF";
    LicenceEnum[LicenceEnum["MS_NO_RE_D_ND"] = 12] = "MS_NO_RE_D_ND";
    LicenceEnum[LicenceEnum["MS_NO_RE_D_ND_FF"] = 13] = "MS_NO_RE_D_ND_FF";
    LicenceEnum[LicenceEnum["MS_NC_NO_RE_D"] = 14] = "MS_NC_NO_RE_D";
    LicenceEnum[LicenceEnum["MS_NC_NO_RE_D_FF"] = 15] = "MS_NC_NO_RE_D_FF";
    LicenceEnum[LicenceEnum["MS_NC_NO_RE_D_ND"] = 16] = "MS_NC_NO_RE_D_ND";
    LicenceEnum[LicenceEnum["MS_NC_NO_RE_D_ND_FF"] = 17] = "MS_NC_NO_RE_D_ND_FF";
    LicenceEnum[LicenceEnum["ELRA_END_USER"] = 18] = "ELRA_END_USER";
    LicenceEnum[LicenceEnum["ELRA_EVALUATION"] = 19] = "ELRA_EVALUATION";
    LicenceEnum[LicenceEnum["ELRA_VAR"] = 20] = "ELRA_VAR";
    LicenceEnum[LicenceEnum["CLARIN_PUB"] = 21] = "CLARIN_PUB";
    LicenceEnum[LicenceEnum["CLARIN_ACA"] = 22] = "CLARIN_ACA";
    LicenceEnum[LicenceEnum["CLARIN_ACA_NC"] = 23] = "CLARIN_ACA_NC";
    LicenceEnum[LicenceEnum["CLARIN_RES"] = 24] = "CLARIN_RES";
    LicenceEnum[LicenceEnum["AGPL"] = 25] = "AGPL";
    LicenceEnum[LicenceEnum["APACHELICENCE_2_0"] = 26] = "APACHELICENCE_2_0";
    LicenceEnum[LicenceEnum["BSD_4_CLAUSE"] = 27] = "BSD_4_CLAUSE";
    LicenceEnum[LicenceEnum["BSD_3_CLAUSE"] = 28] = "BSD_3_CLAUSE";
    LicenceEnum[LicenceEnum["FREE_BSD"] = 29] = "FREE_BSD";
    LicenceEnum[LicenceEnum["GFDL"] = 30] = "GFDL";
    LicenceEnum[LicenceEnum["GPL"] = 31] = "GPL";
    LicenceEnum[LicenceEnum["LGPL"] = 32] = "LGPL";
    LicenceEnum[LicenceEnum["MIT"] = 33] = "MIT";
    LicenceEnum[LicenceEnum["PRINCETON_WORDNET"] = 34] = "PRINCETON_WORDNET";
    LicenceEnum[LicenceEnum["PROPRIETARY"] = 35] = "PROPRIETARY";
    LicenceEnum[LicenceEnum["UNDER_NEGOTIATION"] = 36] = "UNDER_NEGOTIATION";
    LicenceEnum[LicenceEnum["NON_STANDARD_LICENCE_TERMS"] = 37] = "NON_STANDARD_LICENCE_TERMS";
})(exports.LicenceEnum || (exports.LicenceEnum = {}));
var LicenceEnum = exports.LicenceEnum;
(function (LingualityTypeEnum) {
    LingualityTypeEnum[LingualityTypeEnum["MONOLINGUAL"] = 0] = "MONOLINGUAL";
    LingualityTypeEnum[LingualityTypeEnum["BILINGUAL"] = 1] = "BILINGUAL";
    LingualityTypeEnum[LingualityTypeEnum["MULTILINGUAL"] = 2] = "MULTILINGUAL";
})(exports.LingualityTypeEnum || (exports.LingualityTypeEnum = {}));
var LingualityTypeEnum = exports.LingualityTypeEnum;
(function (LinguisticInformationEnum) {
    LinguisticInformationEnum[LinguisticInformationEnum["ACCENTUATION"] = 0] = "ACCENTUATION";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA"] = 1] = "LEMMA";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA_MULTI_WORD_UNITS"] = 2] = "LEMMA_MULTI_WORD_UNITS";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA_VARIANTS"] = 3] = "LEMMA_VARIANTS";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA_ABBREVIATIONS"] = 4] = "LEMMA_ABBREVIATIONS";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA_COMPOUNDS"] = 5] = "LEMMA_COMPOUNDS";
    LinguisticInformationEnum[LinguisticInformationEnum["LEMMA_CLITIC_FORMS"] = 6] = "LEMMA_CLITIC_FORMS";
    LinguisticInformationEnum[LinguisticInformationEnum["PART_OF_SPEECH"] = 7] = "PART_OF_SPEECH";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_FEATURES"] = 8] = "MORPHO_FEATURES";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_CASE"] = 9] = "MORPHO_CASE";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_GENDER"] = 10] = "MORPHO_GENDER";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_NUMBER"] = 11] = "MORPHO_NUMBER";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_DEGREE"] = 12] = "MORPHO_DEGREE";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_IRREGULAR_FORMS"] = 13] = "MORPHO_IRREGULAR_FORMS";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_MOOD"] = 14] = "MORPHO_MOOD";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_TENSE"] = 15] = "MORPHO_TENSE";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_PERSON"] = 16] = "MORPHO_PERSON";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_ASPECT"] = 17] = "MORPHO_ASPECT";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_VOICE"] = 18] = "MORPHO_VOICE";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_AUXILIARY"] = 19] = "MORPHO_AUXILIARY";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_INFLECTION"] = 20] = "MORPHO_INFLECTION";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_REFLEXIVITY"] = 21] = "MORPHO_REFLEXIVITY";
    LinguisticInformationEnum[LinguisticInformationEnum["SYNTAX_SUBCAT_FRAME"] = 22] = "SYNTAX_SUBCAT_FRAME";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_TRAITS"] = 23] = "SEMANTICS_TRAITS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_SEMANTIC_CLASS"] = 24] = "SEMANTICS_SEMANTIC_CLASS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_CROSS_REFERENCES"] = 25] = "SEMANTICS_CROSS_REFERENCES";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS"] = 26] = "SEMANTICS_RELATIONS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_HYPONYMS"] = 27] = "SEMANTICS_RELATIONS_HYPONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_HYPERONYMS"] = 28] = "SEMANTICS_RELATIONS_HYPERONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_SYNONYMS"] = 29] = "SEMANTICS_RELATIONS_SYNONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_ANTONYMS"] = 30] = "SEMANTICS_RELATIONS_ANTONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_TROPONYMS"] = 31] = "SEMANTICS_RELATIONS_TROPONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_RELATIONS_MERONYMS"] = 32] = "SEMANTICS_RELATIONS_MERONYMS";
    LinguisticInformationEnum[LinguisticInformationEnum["USAGE_FREQUENCY"] = 33] = "USAGE_FREQUENCY";
    LinguisticInformationEnum[LinguisticInformationEnum["USAGE_REGISTER"] = 34] = "USAGE_REGISTER";
    LinguisticInformationEnum[LinguisticInformationEnum["USAGE_COLLOCATIONS"] = 35] = "USAGE_COLLOCATIONS";
    LinguisticInformationEnum[LinguisticInformationEnum["USAGE_EXAMPLES"] = 36] = "USAGE_EXAMPLES";
    LinguisticInformationEnum[LinguisticInformationEnum["USAGE_NOTES"] = 37] = "USAGE_NOTES";
    LinguisticInformationEnum[LinguisticInformationEnum["DEFINITION_GLOSS"] = 38] = "DEFINITION_GLOSS";
    LinguisticInformationEnum[LinguisticInformationEnum["TRANSLATION_EQUIVALENT"] = 39] = "TRANSLATION_EQUIVALENT";
    LinguisticInformationEnum[LinguisticInformationEnum["PHONETICS_TRANSCRIPTION"] = 40] = "PHONETICS_TRANSCRIPTION";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_DOMAIN"] = 41] = "SEMANTICS_DOMAIN";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_EVENT_TYPE"] = 42] = "SEMANTICS_EVENT_TYPE";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_SEMANTIC_ROLES"] = 43] = "SEMANTICS_SEMANTIC_ROLES";
    LinguisticInformationEnum[LinguisticInformationEnum["STATISTICAL_PROPERTIES"] = 44] = "STATISTICAL_PROPERTIES";
    LinguisticInformationEnum[LinguisticInformationEnum["MORPHO_DERIVATION"] = 45] = "MORPHO_DERIVATION";
    LinguisticInformationEnum[LinguisticInformationEnum["SEMANTICS_QUALIA_STRUCTURE"] = 46] = "SEMANTICS_QUALIA_STRUCTURE";
    LinguisticInformationEnum[LinguisticInformationEnum["SYNTACTICO_SEMANTIC_LINKS"] = 47] = "SYNTACTICO_SEMANTIC_LINKS";
    LinguisticInformationEnum[LinguisticInformationEnum["OTHER"] = 48] = "OTHER";
})(exports.LinguisticInformationEnum || (exports.LinguisticInformationEnum = {}));
var LinguisticInformationEnum = exports.LinguisticInformationEnum;
(function (MediaTypeEnum) {
    MediaTypeEnum[MediaTypeEnum["TEXT"] = 0] = "TEXT";
    MediaTypeEnum[MediaTypeEnum["AUDIO"] = 1] = "AUDIO";
    MediaTypeEnum[MediaTypeEnum["VIDEO"] = 2] = "VIDEO";
    MediaTypeEnum[MediaTypeEnum["IMAGE"] = 3] = "IMAGE";
    MediaTypeEnum[MediaTypeEnum["TEXT_NUMERICAL"] = 4] = "TEXT_NUMERICAL";
})(exports.MediaTypeEnum || (exports.MediaTypeEnum = {}));
var MediaTypeEnum = exports.MediaTypeEnum;
(function (MetadataIdentifierSchemeNameEnum) {
    MetadataIdentifierSchemeNameEnum[MetadataIdentifierSchemeNameEnum["HDL"] = 0] = "HDL";
    MetadataIdentifierSchemeNameEnum[MetadataIdentifierSchemeNameEnum["PURL"] = 1] = "PURL";
    MetadataIdentifierSchemeNameEnum[MetadataIdentifierSchemeNameEnum["URL"] = 2] = "URL";
    MetadataIdentifierSchemeNameEnum[MetadataIdentifierSchemeNameEnum["URN"] = 3] = "URN";
    MetadataIdentifierSchemeNameEnum[MetadataIdentifierSchemeNameEnum["OTHER"] = 4] = "OTHER";
})(exports.MetadataIdentifierSchemeNameEnum || (exports.MetadataIdentifierSchemeNameEnum = {}));
var MetadataIdentifierSchemeNameEnum = exports.MetadataIdentifierSchemeNameEnum;
(function (MimeTypeEnum) {
    MimeTypeEnum[MimeTypeEnum["TEXT_PLAIN"] = 0] = "TEXT_PLAIN";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_VND_XMI_XML"] = 1] = "APPLICATION_VND_XMI_XML";
    MimeTypeEnum[MimeTypeEnum["TEXT_XML"] = 2] = "TEXT_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_X_TMX_XML"] = 3] = "APPLICATION_X_TMX_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_X_XCES_XML"] = 4] = "APPLICATION_X_XCES_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_TEI_XML"] = 5] = "APPLICATION_TEI_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_RDF_XML"] = 6] = "APPLICATION_RDF_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_XHTML_XML"] = 7] = "APPLICATION_XHTML_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_EMMA_XML"] = 8] = "APPLICATION_EMMA_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_PLS_XML"] = 9] = "APPLICATION_PLS_XML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_POSTSCRIPT"] = 10] = "APPLICATION_POSTSCRIPT";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_VOICEXML_XML"] = 11] = "APPLICATION_VOICEXML_XML";
    MimeTypeEnum[MimeTypeEnum["TEXT_SGML"] = 12] = "TEXT_SGML";
    MimeTypeEnum[MimeTypeEnum["TEXT_HTML"] = 13] = "TEXT_HTML";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_X_TEX"] = 14] = "APPLICATION_X_TEX";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_RTF"] = 15] = "APPLICATION_RTF";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_X_LATEX"] = 16] = "APPLICATION_X_LATEX";
    MimeTypeEnum[MimeTypeEnum["TEXT_CSV"] = 17] = "TEXT_CSV";
    MimeTypeEnum[MimeTypeEnum["TEXT_TAB_SEPARATED_VALUES"] = 18] = "TEXT_TAB_SEPARATED_VALUES";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_PDF"] = 19] = "APPLICATION_PDF";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_X_MSACCESS"] = 20] = "APPLICATION_X_MSACCESS";
    MimeTypeEnum[MimeTypeEnum["AUDIO_MP_4"] = 21] = "AUDIO_MP_4";
    MimeTypeEnum[MimeTypeEnum["AUDIO_MPEG"] = 22] = "AUDIO_MPEG";
    MimeTypeEnum[MimeTypeEnum["AUDIO_WAV"] = 23] = "AUDIO_WAV";
    MimeTypeEnum[MimeTypeEnum["IMAGE_BMP"] = 24] = "IMAGE_BMP";
    MimeTypeEnum[MimeTypeEnum["IMAGE_GIF"] = 25] = "IMAGE_GIF";
    MimeTypeEnum[MimeTypeEnum["IMAGE_JPEG"] = 26] = "IMAGE_JPEG";
    MimeTypeEnum[MimeTypeEnum["IMAGE_PNG"] = 27] = "IMAGE_PNG";
    MimeTypeEnum[MimeTypeEnum["IMAGE_SVG_XML"] = 28] = "IMAGE_SVG_XML";
    MimeTypeEnum[MimeTypeEnum["IMAGE_TIFF"] = 29] = "IMAGE_TIFF";
    MimeTypeEnum[MimeTypeEnum["VIDEO_JPEG"] = 30] = "VIDEO_JPEG";
    MimeTypeEnum[MimeTypeEnum["VIDEO_MP_4"] = 31] = "VIDEO_MP_4";
    MimeTypeEnum[MimeTypeEnum["VIDEO_MPEG"] = 32] = "VIDEO_MPEG";
    MimeTypeEnum[MimeTypeEnum["VIDEO_X_FLV"] = 33] = "VIDEO_X_FLV";
    MimeTypeEnum[MimeTypeEnum["VIDEO_X_MSVIDEO"] = 34] = "VIDEO_X_MSVIDEO";
    MimeTypeEnum[MimeTypeEnum["VIDEO_X_MS_WMV"] = 35] = "VIDEO_X_MS_WMV";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_MSWORD"] = 36] = "APPLICATION_MSWORD";
    MimeTypeEnum[MimeTypeEnum["APPLICATION_VND_MS_EXCEL"] = 37] = "APPLICATION_VND_MS_EXCEL";
    MimeTypeEnum[MimeTypeEnum["AUDIO_MPEG_3"] = 38] = "AUDIO_MPEG_3";
    MimeTypeEnum[MimeTypeEnum["TEXT_TURTLE"] = 39] = "TEXT_TURTLE";
    MimeTypeEnum[MimeTypeEnum["OTHER"] = 40] = "OTHER";
    MimeTypeEnum[MimeTypeEnum["AUDIO_PCMA"] = 41] = "AUDIO_PCMA";
    MimeTypeEnum[MimeTypeEnum["AUDIO_FLAC"] = 42] = "AUDIO_FLAC";
    MimeTypeEnum[MimeTypeEnum["AUDIO_SPEEX"] = 43] = "AUDIO_SPEEX";
    MimeTypeEnum[MimeTypeEnum["AUDIO_VORBIS"] = 44] = "AUDIO_VORBIS";
    MimeTypeEnum[MimeTypeEnum["VIDEO_MP_2_T"] = 45] = "VIDEO_MP_2_T";
})(exports.MimeTypeEnum || (exports.MimeTypeEnum = {}));
var MimeTypeEnum = exports.MimeTypeEnum;
(function (ModalityTypeEnum) {
    ModalityTypeEnum[ModalityTypeEnum["BODY_GESTURE"] = 0] = "BODY_GESTURE";
    ModalityTypeEnum[ModalityTypeEnum["FACIAL_EXPRESSION"] = 1] = "FACIAL_EXPRESSION";
    ModalityTypeEnum[ModalityTypeEnum["VOICE"] = 2] = "VOICE";
    ModalityTypeEnum[ModalityTypeEnum["COMBINATION_OF_MODALITIES"] = 3] = "COMBINATION_OF_MODALITIES";
    ModalityTypeEnum[ModalityTypeEnum["SIGN_LANGUAGE"] = 4] = "SIGN_LANGUAGE";
    ModalityTypeEnum[ModalityTypeEnum["SPOKEN_LANGUAGE"] = 5] = "SPOKEN_LANGUAGE";
    ModalityTypeEnum[ModalityTypeEnum["WRITTEN_LANGUAGE"] = 6] = "WRITTEN_LANGUAGE";
    ModalityTypeEnum[ModalityTypeEnum["OTHER"] = 7] = "OTHER";
})(exports.ModalityTypeEnum || (exports.ModalityTypeEnum = {}));
var ModalityTypeEnum = exports.ModalityTypeEnum;
(function (MultilingualityTypeEnum) {
    MultilingualityTypeEnum[MultilingualityTypeEnum["PARALLEL"] = 0] = "PARALLEL";
    MultilingualityTypeEnum[MultilingualityTypeEnum["COMPARABLE"] = 1] = "COMPARABLE";
    MultilingualityTypeEnum[MultilingualityTypeEnum["MULTILINGUAL_SINGLE_TEXT"] = 2] = "MULTILINGUAL_SINGLE_TEXT";
    MultilingualityTypeEnum[MultilingualityTypeEnum["ORIGINAL_TRANSLATIONS_IN_SAME_TEXT"] = 3] = "ORIGINAL_TRANSLATIONS_IN_SAME_TEXT";
    MultilingualityTypeEnum[MultilingualityTypeEnum["OTHER"] = 4] = "OTHER";
})(exports.MultilingualityTypeEnum || (exports.MultilingualityTypeEnum = {}));
var MultilingualityTypeEnum = exports.MultilingualityTypeEnum;
(function (NameTypeEnum) {
    NameTypeEnum[NameTypeEnum["SHORT_NAME"] = 0] = "SHORT_NAME";
    NameTypeEnum[NameTypeEnum["ALTERNATIVE_NAME"] = 1] = "ALTERNATIVE_NAME";
    NameTypeEnum[NameTypeEnum["TRANSLATED_NAME"] = 2] = "TRANSLATED_NAME";
})(exports.NameTypeEnum || (exports.NameTypeEnum = {}));
var NameTypeEnum = exports.NameTypeEnum;
(function (OperatingSystemEnum) {
    OperatingSystemEnum[OperatingSystemEnum["OS_INDEPENDENT"] = 0] = "OS_INDEPENDENT";
    OperatingSystemEnum[OperatingSystemEnum["WINDOWS"] = 1] = "WINDOWS";
    OperatingSystemEnum[OperatingSystemEnum["LINUX"] = 2] = "LINUX";
    OperatingSystemEnum[OperatingSystemEnum["UNIX"] = 3] = "UNIX";
    OperatingSystemEnum[OperatingSystemEnum["MAC_OS"] = 4] = "MAC_OS";
    OperatingSystemEnum[OperatingSystemEnum["GOOGLE_CHROME_OS"] = 5] = "GOOGLE_CHROME_OS";
    OperatingSystemEnum[OperatingSystemEnum["I_OS"] = 6] = "I_OS";
    OperatingSystemEnum[OperatingSystemEnum["ANDROID"] = 7] = "ANDROID";
    OperatingSystemEnum[OperatingSystemEnum["OTHER"] = 8] = "OTHER";
    OperatingSystemEnum[OperatingSystemEnum["BLANK"] = 9] = "BLANK";
})(exports.OperatingSystemEnum || (exports.OperatingSystemEnum = {}));
var OperatingSystemEnum = exports.OperatingSystemEnum;
(function (OrganizationIdentifierSchemeNameEnum) {
    OrganizationIdentifierSchemeNameEnum[OrganizationIdentifierSchemeNameEnum["ISNI"] = 0] = "ISNI";
    OrganizationIdentifierSchemeNameEnum[OrganizationIdentifierSchemeNameEnum["FUNDREF"] = 1] = "FUNDREF";
    OrganizationIdentifierSchemeNameEnum[OrganizationIdentifierSchemeNameEnum["OTHER"] = 2] = "OTHER";
})(exports.OrganizationIdentifierSchemeNameEnum || (exports.OrganizationIdentifierSchemeNameEnum = {}));
var OrganizationIdentifierSchemeNameEnum = exports.OrganizationIdentifierSchemeNameEnum;
(function (OriginalDataProviderTypeEnum) {
    OriginalDataProviderTypeEnum[OriginalDataProviderTypeEnum["REPOSITORY"] = 0] = "REPOSITORY";
    OriginalDataProviderTypeEnum[OriginalDataProviderTypeEnum["JOURNAL"] = 1] = "JOURNAL";
    OriginalDataProviderTypeEnum[OriginalDataProviderTypeEnum["PUBLISHER"] = 2] = "PUBLISHER";
})(exports.OriginalDataProviderTypeEnum || (exports.OriginalDataProviderTypeEnum = {}));
var OriginalDataProviderTypeEnum = exports.OriginalDataProviderTypeEnum;
(function (PersonIdentifierSchemeNameEnum) {
    PersonIdentifierSchemeNameEnum[PersonIdentifierSchemeNameEnum["ORCID"] = 0] = "ORCID";
    PersonIdentifierSchemeNameEnum[PersonIdentifierSchemeNameEnum["ISNI"] = 1] = "ISNI";
    PersonIdentifierSchemeNameEnum[PersonIdentifierSchemeNameEnum["RESEARCHER_ID"] = 2] = "RESEARCHER_ID";
    PersonIdentifierSchemeNameEnum[PersonIdentifierSchemeNameEnum["SCOPUS_ID"] = 3] = "SCOPUS_ID";
    PersonIdentifierSchemeNameEnum[PersonIdentifierSchemeNameEnum["OTHER"] = 4] = "OTHER";
})(exports.PersonIdentifierSchemeNameEnum || (exports.PersonIdentifierSchemeNameEnum = {}));
var PersonIdentifierSchemeNameEnum = exports.PersonIdentifierSchemeNameEnum;
(function (ProcessMode) {
    ProcessMode[ProcessMode["MANUAL"] = 0] = "MANUAL";
    ProcessMode[ProcessMode["AUTOMATIC"] = 1] = "AUTOMATIC";
    ProcessMode[ProcessMode["MIXED"] = 2] = "MIXED";
    ProcessMode[ProcessMode["INTERACTIVE"] = 3] = "INTERACTIVE";
})(exports.ProcessMode || (exports.ProcessMode = {}));
var ProcessMode = exports.ProcessMode;
(function (PublicationIdentifierSchemeNameEnum) {
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["DOI"] = 0] = "DOI";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["HDL"] = 1] = "HDL";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["ARK"] = 2] = "ARK";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["AR_XIV"] = 3] = "AR_XIV";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["BIBCODE"] = 4] = "BIBCODE";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["EAN_13"] = 5] = "EAN_13";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["EISSN"] = 6] = "EISSN";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["ISBN"] = 7] = "ISBN";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["ISSN"] = 8] = "ISSN";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["ISTC"] = 9] = "ISTC";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["LISSN"] = 10] = "LISSN";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["LSID"] = 11] = "LSID";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["PURL"] = 12] = "PURL";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["UPC"] = 13] = "UPC";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["URL"] = 14] = "URL";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["URN"] = 15] = "URN";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["FCT"] = 16] = "FCT";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["OAI"] = 17] = "OAI";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["PMC"] = 18] = "PMC";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["PMID"] = 19] = "PMID";
    PublicationIdentifierSchemeNameEnum[PublicationIdentifierSchemeNameEnum["OTHER"] = 20] = "OTHER";
})(exports.PublicationIdentifierSchemeNameEnum || (exports.PublicationIdentifierSchemeNameEnum = {}));
var PublicationIdentifierSchemeNameEnum = exports.PublicationIdentifierSchemeNameEnum;
(function (PublicationTypeEnum) {
    PublicationTypeEnum[PublicationTypeEnum["ARTICLE"] = 0] = "ARTICLE";
    PublicationTypeEnum[PublicationTypeEnum["BACHELOR_THESIS"] = 1] = "BACHELOR_THESIS";
    PublicationTypeEnum[PublicationTypeEnum["MASTER_THESIS"] = 2] = "MASTER_THESIS";
    PublicationTypeEnum[PublicationTypeEnum["DOCTORAL_THESIS"] = 3] = "DOCTORAL_THESIS";
    PublicationTypeEnum[PublicationTypeEnum["BOOK"] = 4] = "BOOK";
    PublicationTypeEnum[PublicationTypeEnum["BOOK_PART"] = 5] = "BOOK_PART";
    PublicationTypeEnum[PublicationTypeEnum["REVIEW"] = 6] = "REVIEW";
    PublicationTypeEnum[PublicationTypeEnum["CONFERENCE_OBJECT"] = 7] = "CONFERENCE_OBJECT";
    PublicationTypeEnum[PublicationTypeEnum["LECTURE"] = 8] = "LECTURE";
    PublicationTypeEnum[PublicationTypeEnum["WORKING_PAPER"] = 9] = "WORKING_PAPER";
    PublicationTypeEnum[PublicationTypeEnum["PRE_PRINT"] = 10] = "PRE_PRINT";
    PublicationTypeEnum[PublicationTypeEnum["REPORT"] = 11] = "REPORT";
    PublicationTypeEnum[PublicationTypeEnum["ANNOTATION"] = 12] = "ANNOTATION";
    PublicationTypeEnum[PublicationTypeEnum["CONTRIBUTION_TO_PERIODICAL"] = 13] = "CONTRIBUTION_TO_PERIODICAL";
    PublicationTypeEnum[PublicationTypeEnum["PATENT"] = 14] = "PATENT";
    PublicationTypeEnum[PublicationTypeEnum["IN_PROCEEDINGS"] = 15] = "IN_PROCEEDINGS";
    PublicationTypeEnum[PublicationTypeEnum["BOOKLET"] = 16] = "BOOKLET";
    PublicationTypeEnum[PublicationTypeEnum["MANUAL"] = 17] = "MANUAL";
    PublicationTypeEnum[PublicationTypeEnum["TECH_REPORT"] = 18] = "TECH_REPORT";
    PublicationTypeEnum[PublicationTypeEnum["IN_COLLECTION"] = 19] = "IN_COLLECTION";
    PublicationTypeEnum[PublicationTypeEnum["UNPUBLISHED"] = 20] = "UNPUBLISHED";
    PublicationTypeEnum[PublicationTypeEnum["OTHER"] = 21] = "OTHER";
})(exports.PublicationTypeEnum || (exports.PublicationTypeEnum = {}));
var PublicationTypeEnum = exports.PublicationTypeEnum;
(function (RegionIdType) {
    RegionIdType[RegionIdType["AA"] = 0] = "AA";
    RegionIdType[RegionIdType["AC"] = 1] = "AC";
    RegionIdType[RegionIdType["AD"] = 2] = "AD";
    RegionIdType[RegionIdType["AE"] = 3] = "AE";
    RegionIdType[RegionIdType["AF"] = 4] = "AF";
    RegionIdType[RegionIdType["AG"] = 5] = "AG";
    RegionIdType[RegionIdType["AI"] = 6] = "AI";
    RegionIdType[RegionIdType["AL"] = 7] = "AL";
    RegionIdType[RegionIdType["AM"] = 8] = "AM";
    RegionIdType[RegionIdType["AO"] = 9] = "AO";
    RegionIdType[RegionIdType["AQ"] = 10] = "AQ";
    RegionIdType[RegionIdType["AR"] = 11] = "AR";
    RegionIdType[RegionIdType["AS"] = 12] = "AS";
    RegionIdType[RegionIdType["AT"] = 13] = "AT";
    RegionIdType[RegionIdType["AU"] = 14] = "AU";
    RegionIdType[RegionIdType["AW"] = 15] = "AW";
    RegionIdType[RegionIdType["AX"] = 16] = "AX";
    RegionIdType[RegionIdType["AZ"] = 17] = "AZ";
    RegionIdType[RegionIdType["BA"] = 18] = "BA";
    RegionIdType[RegionIdType["BB"] = 19] = "BB";
    RegionIdType[RegionIdType["BD"] = 20] = "BD";
    RegionIdType[RegionIdType["BE"] = 21] = "BE";
    RegionIdType[RegionIdType["BF"] = 22] = "BF";
    RegionIdType[RegionIdType["BG"] = 23] = "BG";
    RegionIdType[RegionIdType["BH"] = 24] = "BH";
    RegionIdType[RegionIdType["BI"] = 25] = "BI";
    RegionIdType[RegionIdType["BJ"] = 26] = "BJ";
    RegionIdType[RegionIdType["BL"] = 27] = "BL";
    RegionIdType[RegionIdType["BM"] = 28] = "BM";
    RegionIdType[RegionIdType["BN"] = 29] = "BN";
    RegionIdType[RegionIdType["BO"] = 30] = "BO";
    RegionIdType[RegionIdType["BQ"] = 31] = "BQ";
    RegionIdType[RegionIdType["BR"] = 32] = "BR";
    RegionIdType[RegionIdType["BS"] = 33] = "BS";
    RegionIdType[RegionIdType["BT"] = 34] = "BT";
    RegionIdType[RegionIdType["BV"] = 35] = "BV";
    RegionIdType[RegionIdType["BW"] = 36] = "BW";
    RegionIdType[RegionIdType["BY"] = 37] = "BY";
    RegionIdType[RegionIdType["BZ"] = 38] = "BZ";
    RegionIdType[RegionIdType["CA"] = 39] = "CA";
    RegionIdType[RegionIdType["CC"] = 40] = "CC";
    RegionIdType[RegionIdType["CD"] = 41] = "CD";
    RegionIdType[RegionIdType["CF"] = 42] = "CF";
    RegionIdType[RegionIdType["CG"] = 43] = "CG";
    RegionIdType[RegionIdType["CH"] = 44] = "CH";
    RegionIdType[RegionIdType["CI"] = 45] = "CI";
    RegionIdType[RegionIdType["CK"] = 46] = "CK";
    RegionIdType[RegionIdType["CL"] = 47] = "CL";
    RegionIdType[RegionIdType["CM"] = 48] = "CM";
    RegionIdType[RegionIdType["CN"] = 49] = "CN";
    RegionIdType[RegionIdType["CO"] = 50] = "CO";
    RegionIdType[RegionIdType["CP"] = 51] = "CP";
    RegionIdType[RegionIdType["CR"] = 52] = "CR";
    RegionIdType[RegionIdType["CU"] = 53] = "CU";
    RegionIdType[RegionIdType["CV"] = 54] = "CV";
    RegionIdType[RegionIdType["CW"] = 55] = "CW";
    RegionIdType[RegionIdType["CX"] = 56] = "CX";
    RegionIdType[RegionIdType["CY"] = 57] = "CY";
    RegionIdType[RegionIdType["CZ"] = 58] = "CZ";
    RegionIdType[RegionIdType["DE"] = 59] = "DE";
    RegionIdType[RegionIdType["DG"] = 60] = "DG";
    RegionIdType[RegionIdType["DJ"] = 61] = "DJ";
    RegionIdType[RegionIdType["DK"] = 62] = "DK";
    RegionIdType[RegionIdType["DM"] = 63] = "DM";
    RegionIdType[RegionIdType["DO"] = 64] = "DO";
    RegionIdType[RegionIdType["DZ"] = 65] = "DZ";
    RegionIdType[RegionIdType["EA"] = 66] = "EA";
    RegionIdType[RegionIdType["EC"] = 67] = "EC";
    RegionIdType[RegionIdType["EE"] = 68] = "EE";
    RegionIdType[RegionIdType["EG"] = 69] = "EG";
    RegionIdType[RegionIdType["EH"] = 70] = "EH";
    RegionIdType[RegionIdType["ER"] = 71] = "ER";
    RegionIdType[RegionIdType["ES"] = 72] = "ES";
    RegionIdType[RegionIdType["ET"] = 73] = "ET";
    RegionIdType[RegionIdType["EU"] = 74] = "EU";
    RegionIdType[RegionIdType["FI"] = 75] = "FI";
    RegionIdType[RegionIdType["FJ"] = 76] = "FJ";
    RegionIdType[RegionIdType["FK"] = 77] = "FK";
    RegionIdType[RegionIdType["FM"] = 78] = "FM";
    RegionIdType[RegionIdType["FO"] = 79] = "FO";
    RegionIdType[RegionIdType["FR"] = 80] = "FR";
    RegionIdType[RegionIdType["GA"] = 81] = "GA";
    RegionIdType[RegionIdType["GB"] = 82] = "GB";
    RegionIdType[RegionIdType["GD"] = 83] = "GD";
    RegionIdType[RegionIdType["GE"] = 84] = "GE";
    RegionIdType[RegionIdType["GF"] = 85] = "GF";
    RegionIdType[RegionIdType["GG"] = 86] = "GG";
    RegionIdType[RegionIdType["GH"] = 87] = "GH";
    RegionIdType[RegionIdType["GI"] = 88] = "GI";
    RegionIdType[RegionIdType["GL"] = 89] = "GL";
    RegionIdType[RegionIdType["GM"] = 90] = "GM";
    RegionIdType[RegionIdType["GN"] = 91] = "GN";
    RegionIdType[RegionIdType["GP"] = 92] = "GP";
    RegionIdType[RegionIdType["GQ"] = 93] = "GQ";
    RegionIdType[RegionIdType["GR"] = 94] = "GR";
    RegionIdType[RegionIdType["GS"] = 95] = "GS";
    RegionIdType[RegionIdType["GT"] = 96] = "GT";
    RegionIdType[RegionIdType["GU"] = 97] = "GU";
    RegionIdType[RegionIdType["GW"] = 98] = "GW";
    RegionIdType[RegionIdType["GY"] = 99] = "GY";
    RegionIdType[RegionIdType["HK"] = 100] = "HK";
    RegionIdType[RegionIdType["HM"] = 101] = "HM";
    RegionIdType[RegionIdType["HN"] = 102] = "HN";
    RegionIdType[RegionIdType["HR"] = 103] = "HR";
    RegionIdType[RegionIdType["HT"] = 104] = "HT";
    RegionIdType[RegionIdType["HU"] = 105] = "HU";
    RegionIdType[RegionIdType["IC"] = 106] = "IC";
    RegionIdType[RegionIdType["ID"] = 107] = "ID";
    RegionIdType[RegionIdType["IE"] = 108] = "IE";
    RegionIdType[RegionIdType["IL"] = 109] = "IL";
    RegionIdType[RegionIdType["IM"] = 110] = "IM";
    RegionIdType[RegionIdType["IN"] = 111] = "IN";
    RegionIdType[RegionIdType["IO"] = 112] = "IO";
    RegionIdType[RegionIdType["IQ"] = 113] = "IQ";
    RegionIdType[RegionIdType["IR"] = 114] = "IR";
    RegionIdType[RegionIdType["IS"] = 115] = "IS";
    RegionIdType[RegionIdType["IT"] = 116] = "IT";
    RegionIdType[RegionIdType["JE"] = 117] = "JE";
    RegionIdType[RegionIdType["JM"] = 118] = "JM";
    RegionIdType[RegionIdType["JO"] = 119] = "JO";
    RegionIdType[RegionIdType["JP"] = 120] = "JP";
    RegionIdType[RegionIdType["KE"] = 121] = "KE";
    RegionIdType[RegionIdType["KG"] = 122] = "KG";
    RegionIdType[RegionIdType["KH"] = 123] = "KH";
    RegionIdType[RegionIdType["KI"] = 124] = "KI";
    RegionIdType[RegionIdType["KM"] = 125] = "KM";
    RegionIdType[RegionIdType["KN"] = 126] = "KN";
    RegionIdType[RegionIdType["KP"] = 127] = "KP";
    RegionIdType[RegionIdType["KR"] = 128] = "KR";
    RegionIdType[RegionIdType["KW"] = 129] = "KW";
    RegionIdType[RegionIdType["KY"] = 130] = "KY";
    RegionIdType[RegionIdType["KZ"] = 131] = "KZ";
    RegionIdType[RegionIdType["LA"] = 132] = "LA";
    RegionIdType[RegionIdType["LB"] = 133] = "LB";
    RegionIdType[RegionIdType["LC"] = 134] = "LC";
    RegionIdType[RegionIdType["LI"] = 135] = "LI";
    RegionIdType[RegionIdType["LK"] = 136] = "LK";
    RegionIdType[RegionIdType["LR"] = 137] = "LR";
    RegionIdType[RegionIdType["LS"] = 138] = "LS";
    RegionIdType[RegionIdType["LT"] = 139] = "LT";
    RegionIdType[RegionIdType["LU"] = 140] = "LU";
    RegionIdType[RegionIdType["LV"] = 141] = "LV";
    RegionIdType[RegionIdType["LY"] = 142] = "LY";
    RegionIdType[RegionIdType["MA"] = 143] = "MA";
    RegionIdType[RegionIdType["MC"] = 144] = "MC";
    RegionIdType[RegionIdType["MD"] = 145] = "MD";
    RegionIdType[RegionIdType["ME"] = 146] = "ME";
    RegionIdType[RegionIdType["MF"] = 147] = "MF";
    RegionIdType[RegionIdType["MG"] = 148] = "MG";
    RegionIdType[RegionIdType["MH"] = 149] = "MH";
    RegionIdType[RegionIdType["MK"] = 150] = "MK";
    RegionIdType[RegionIdType["ML"] = 151] = "ML";
    RegionIdType[RegionIdType["MM"] = 152] = "MM";
    RegionIdType[RegionIdType["MN"] = 153] = "MN";
    RegionIdType[RegionIdType["MO"] = 154] = "MO";
    RegionIdType[RegionIdType["MP"] = 155] = "MP";
    RegionIdType[RegionIdType["MQ"] = 156] = "MQ";
    RegionIdType[RegionIdType["MR"] = 157] = "MR";
    RegionIdType[RegionIdType["MS"] = 158] = "MS";
    RegionIdType[RegionIdType["MT"] = 159] = "MT";
    RegionIdType[RegionIdType["MU"] = 160] = "MU";
    RegionIdType[RegionIdType["MV"] = 161] = "MV";
    RegionIdType[RegionIdType["MW"] = 162] = "MW";
    RegionIdType[RegionIdType["MX"] = 163] = "MX";
    RegionIdType[RegionIdType["MY"] = 164] = "MY";
    RegionIdType[RegionIdType["MZ"] = 165] = "MZ";
    RegionIdType[RegionIdType["NA"] = 166] = "NA";
    RegionIdType[RegionIdType["NC"] = 167] = "NC";
    RegionIdType[RegionIdType["NE"] = 168] = "NE";
    RegionIdType[RegionIdType["NF"] = 169] = "NF";
    RegionIdType[RegionIdType["NG"] = 170] = "NG";
    RegionIdType[RegionIdType["NI"] = 171] = "NI";
    RegionIdType[RegionIdType["NL"] = 172] = "NL";
    RegionIdType[RegionIdType["NO"] = 173] = "NO";
    RegionIdType[RegionIdType["NP"] = 174] = "NP";
    RegionIdType[RegionIdType["NR"] = 175] = "NR";
    RegionIdType[RegionIdType["NU"] = 176] = "NU";
    RegionIdType[RegionIdType["NZ"] = 177] = "NZ";
    RegionIdType[RegionIdType["OM"] = 178] = "OM";
    RegionIdType[RegionIdType["PA"] = 179] = "PA";
    RegionIdType[RegionIdType["PE"] = 180] = "PE";
    RegionIdType[RegionIdType["PF"] = 181] = "PF";
    RegionIdType[RegionIdType["PG"] = 182] = "PG";
    RegionIdType[RegionIdType["PH"] = 183] = "PH";
    RegionIdType[RegionIdType["PK"] = 184] = "PK";
    RegionIdType[RegionIdType["PL"] = 185] = "PL";
    RegionIdType[RegionIdType["PM"] = 186] = "PM";
    RegionIdType[RegionIdType["PN"] = 187] = "PN";
    RegionIdType[RegionIdType["PR"] = 188] = "PR";
    RegionIdType[RegionIdType["PS"] = 189] = "PS";
    RegionIdType[RegionIdType["PT"] = 190] = "PT";
    RegionIdType[RegionIdType["PW"] = 191] = "PW";
    RegionIdType[RegionIdType["PY"] = 192] = "PY";
    RegionIdType[RegionIdType["QA"] = 193] = "QA";
    RegionIdType[RegionIdType["QM__QZ"] = 194] = "QM__QZ";
    RegionIdType[RegionIdType["RE"] = 195] = "RE";
    RegionIdType[RegionIdType["RO"] = 196] = "RO";
    RegionIdType[RegionIdType["RS"] = 197] = "RS";
    RegionIdType[RegionIdType["RU"] = 198] = "RU";
    RegionIdType[RegionIdType["RW"] = 199] = "RW";
    RegionIdType[RegionIdType["SA"] = 200] = "SA";
    RegionIdType[RegionIdType["SB"] = 201] = "SB";
    RegionIdType[RegionIdType["SC"] = 202] = "SC";
    RegionIdType[RegionIdType["SD"] = 203] = "SD";
    RegionIdType[RegionIdType["SE"] = 204] = "SE";
    RegionIdType[RegionIdType["SG"] = 205] = "SG";
    RegionIdType[RegionIdType["SH"] = 206] = "SH";
    RegionIdType[RegionIdType["SI"] = 207] = "SI";
    RegionIdType[RegionIdType["SJ"] = 208] = "SJ";
    RegionIdType[RegionIdType["SK"] = 209] = "SK";
    RegionIdType[RegionIdType["SL"] = 210] = "SL";
    RegionIdType[RegionIdType["SM"] = 211] = "SM";
    RegionIdType[RegionIdType["SN"] = 212] = "SN";
    RegionIdType[RegionIdType["SO"] = 213] = "SO";
    RegionIdType[RegionIdType["SR"] = 214] = "SR";
    RegionIdType[RegionIdType["SS"] = 215] = "SS";
    RegionIdType[RegionIdType["ST"] = 216] = "ST";
    RegionIdType[RegionIdType["SV"] = 217] = "SV";
    RegionIdType[RegionIdType["SX"] = 218] = "SX";
    RegionIdType[RegionIdType["SY"] = 219] = "SY";
    RegionIdType[RegionIdType["SZ"] = 220] = "SZ";
    RegionIdType[RegionIdType["TA"] = 221] = "TA";
    RegionIdType[RegionIdType["TC"] = 222] = "TC";
    RegionIdType[RegionIdType["TD"] = 223] = "TD";
    RegionIdType[RegionIdType["TF"] = 224] = "TF";
    RegionIdType[RegionIdType["TG"] = 225] = "TG";
    RegionIdType[RegionIdType["TH"] = 226] = "TH";
    RegionIdType[RegionIdType["TJ"] = 227] = "TJ";
    RegionIdType[RegionIdType["TK"] = 228] = "TK";
    RegionIdType[RegionIdType["TL"] = 229] = "TL";
    RegionIdType[RegionIdType["TM"] = 230] = "TM";
    RegionIdType[RegionIdType["TN"] = 231] = "TN";
    RegionIdType[RegionIdType["TO"] = 232] = "TO";
    RegionIdType[RegionIdType["TR"] = 233] = "TR";
    RegionIdType[RegionIdType["TT"] = 234] = "TT";
    RegionIdType[RegionIdType["TV"] = 235] = "TV";
    RegionIdType[RegionIdType["TW"] = 236] = "TW";
    RegionIdType[RegionIdType["TZ"] = 237] = "TZ";
    RegionIdType[RegionIdType["UA"] = 238] = "UA";
    RegionIdType[RegionIdType["UG"] = 239] = "UG";
    RegionIdType[RegionIdType["UM"] = 240] = "UM";
    RegionIdType[RegionIdType["US"] = 241] = "US";
    RegionIdType[RegionIdType["UY"] = 242] = "UY";
    RegionIdType[RegionIdType["UZ"] = 243] = "UZ";
    RegionIdType[RegionIdType["VA"] = 244] = "VA";
    RegionIdType[RegionIdType["VC"] = 245] = "VC";
    RegionIdType[RegionIdType["VE"] = 246] = "VE";
    RegionIdType[RegionIdType["VG"] = 247] = "VG";
    RegionIdType[RegionIdType["VI"] = 248] = "VI";
    RegionIdType[RegionIdType["VN"] = 249] = "VN";
    RegionIdType[RegionIdType["VU"] = 250] = "VU";
    RegionIdType[RegionIdType["WF"] = 251] = "WF";
    RegionIdType[RegionIdType["WS"] = 252] = "WS";
    RegionIdType[RegionIdType["XA__XZ"] = 253] = "XA__XZ";
    RegionIdType[RegionIdType["YE"] = 254] = "YE";
    RegionIdType[RegionIdType["YT"] = 255] = "YT";
    RegionIdType[RegionIdType["ZA"] = 256] = "ZA";
    RegionIdType[RegionIdType["ZM"] = 257] = "ZM";
    RegionIdType[RegionIdType["ZW"] = 258] = "ZW";
    RegionIdType[RegionIdType["ZZ"] = 259] = "ZZ";
    RegionIdType[RegionIdType["V001"] = 260] = "V001";
    RegionIdType[RegionIdType["V002"] = 261] = "V002";
    RegionIdType[RegionIdType["V003"] = 262] = "V003";
    RegionIdType[RegionIdType["V005"] = 263] = "V005";
    RegionIdType[RegionIdType["V009"] = 264] = "V009";
    RegionIdType[RegionIdType["V011"] = 265] = "V011";
    RegionIdType[RegionIdType["V013"] = 266] = "V013";
    RegionIdType[RegionIdType["V014"] = 267] = "V014";
    RegionIdType[RegionIdType["V015"] = 268] = "V015";
    RegionIdType[RegionIdType["V017"] = 269] = "V017";
    RegionIdType[RegionIdType["V018"] = 270] = "V018";
    RegionIdType[RegionIdType["V019"] = 271] = "V019";
    RegionIdType[RegionIdType["V021"] = 272] = "V021";
    RegionIdType[RegionIdType["V029"] = 273] = "V029";
    RegionIdType[RegionIdType["V030"] = 274] = "V030";
    RegionIdType[RegionIdType["V034"] = 275] = "V034";
    RegionIdType[RegionIdType["V035"] = 276] = "V035";
    RegionIdType[RegionIdType["V039"] = 277] = "V039";
    RegionIdType[RegionIdType["V053"] = 278] = "V053";
    RegionIdType[RegionIdType["V054"] = 279] = "V054";
    RegionIdType[RegionIdType["V057"] = 280] = "V057";
    RegionIdType[RegionIdType["V061"] = 281] = "V061";
    RegionIdType[RegionIdType["V142"] = 282] = "V142";
    RegionIdType[RegionIdType["V143"] = 283] = "V143";
    RegionIdType[RegionIdType["V145"] = 284] = "V145";
    RegionIdType[RegionIdType["V150"] = 285] = "V150";
    RegionIdType[RegionIdType["V151"] = 286] = "V151";
    RegionIdType[RegionIdType["V154"] = 287] = "V154";
    RegionIdType[RegionIdType["V155"] = 288] = "V155";
    RegionIdType[RegionIdType["V419"] = 289] = "V419";
})(exports.RegionIdType || (exports.RegionIdType = {}));
var RegionIdType = exports.RegionIdType;
(function (RelatedLexiconTypeEnum) {
    RelatedLexiconTypeEnum[RelatedLexiconTypeEnum["INCLUDED"] = 0] = "INCLUDED";
    RelatedLexiconTypeEnum[RelatedLexiconTypeEnum["ATTACHED"] = 1] = "ATTACHED";
    RelatedLexiconTypeEnum[RelatedLexiconTypeEnum["COMPATIBLE"] = 2] = "COMPATIBLE";
    RelatedLexiconTypeEnum[RelatedLexiconTypeEnum["NONE"] = 3] = "NONE";
})(exports.RelatedLexiconTypeEnum || (exports.RelatedLexiconTypeEnum = {}));
var RelatedLexiconTypeEnum = exports.RelatedLexiconTypeEnum;
(function (RelationTypeEnum) {
    RelationTypeEnum[RelationTypeEnum["IS_PART_OF"] = 0] = "IS_PART_OF";
    RelationTypeEnum[RelationTypeEnum["IS_PART_WITH"] = 1] = "IS_PART_WITH";
    RelationTypeEnum[RelationTypeEnum["HAS_PART"] = 2] = "HAS_PART";
    RelationTypeEnum[RelationTypeEnum["HAS_OUTCOME"] = 3] = "HAS_OUTCOME";
    RelationTypeEnum[RelationTypeEnum["IS_COMBINED_WITH"] = 4] = "IS_COMBINED_WITH";
    RelationTypeEnum[RelationTypeEnum["REQUIRES_LR"] = 5] = "REQUIRES_LR";
    RelationTypeEnum[RelationTypeEnum["REQUIRES_SOFTWARE"] = 6] = "REQUIRES_SOFTWARE";
    RelationTypeEnum[RelationTypeEnum["ISEXACT_MATCH"] = 7] = "ISEXACT_MATCH";
    RelationTypeEnum[RelationTypeEnum["IS_SIMILAR_TO"] = 8] = "IS_SIMILAR_TO";
    RelationTypeEnum[RelationTypeEnum["IS_CONTINUATION_OF"] = 9] = "IS_CONTINUATION_OF";
    RelationTypeEnum[RelationTypeEnum["IS_VERSION_OF"] = 10] = "IS_VERSION_OF";
    RelationTypeEnum[RelationTypeEnum["REPLACES"] = 11] = "REPLACES";
    RelationTypeEnum[RelationTypeEnum["IS_REPLACED_WITH"] = 12] = "IS_REPLACED_WITH";
    RelationTypeEnum[RelationTypeEnum["IS_CREATED_BY"] = 13] = "IS_CREATED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_ELICITED_BY"] = 14] = "IS_ELICITED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_RECORDED_BY"] = 15] = "IS_RECORDED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_EDITED_BY"] = 16] = "IS_EDITED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_ANALYSED_BY"] = 17] = "IS_ANALYSED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_EVALUATED_BY"] = 18] = "IS_EVALUATED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_QUERIED_BY"] = 19] = "IS_QUERIED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_ACCESSED_BY"] = 20] = "IS_ACCESSED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_ARCHIVED_BY"] = 21] = "IS_ARCHIVED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_DISPLAYED_BY"] = 22] = "IS_DISPLAYED_BY";
    RelationTypeEnum[RelationTypeEnum["IS_COMPATIBLE_WITH"] = 23] = "IS_COMPATIBLE_WITH";
})(exports.RelationTypeEnum || (exports.RelationTypeEnum = {}));
var RelationTypeEnum = exports.RelationTypeEnum;
(function (RepositoryIdentifierSchemeNameEnum) {
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["DOI"] = 0] = "DOI";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["HDL"] = 1] = "HDL";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["URL"] = 2] = "URL";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["OAI"] = 3] = "OAI";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["OPENDOAR"] = 4] = "OPENDOAR";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["RE_3_D"] = 5] = "RE_3_D";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["ROAR"] = 6] = "ROAR";
    RepositoryIdentifierSchemeNameEnum[RepositoryIdentifierSchemeNameEnum["OTHER"] = 7] = "OTHER";
})(exports.RepositoryIdentifierSchemeNameEnum || (exports.RepositoryIdentifierSchemeNameEnum = {}));
var RepositoryIdentifierSchemeNameEnum = exports.RepositoryIdentifierSchemeNameEnum;
(function (RequiresHardwareEnum) {
    RequiresHardwareEnum[RequiresHardwareEnum["GRAPHIC_CARD"] = 0] = "GRAPHIC_CARD";
    RequiresHardwareEnum[RequiresHardwareEnum["MICROPHONE"] = 1] = "MICROPHONE";
    RequiresHardwareEnum[RequiresHardwareEnum["OCR_SYSTEM"] = 2] = "OCR_SYSTEM";
    RequiresHardwareEnum[RequiresHardwareEnum["SPECIAL_HARDWARE_EQUIPMENT"] = 3] = "SPECIAL_HARDWARE_EQUIPMENT";
    RequiresHardwareEnum[RequiresHardwareEnum["NONE"] = 4] = "NONE";
    RequiresHardwareEnum[RequiresHardwareEnum["OTHER"] = 5] = "OTHER";
})(exports.RequiresHardwareEnum || (exports.RequiresHardwareEnum = {}));
var RequiresHardwareEnum = exports.RequiresHardwareEnum;
(function (ResourceIdentifierSchemeNameEnum) {
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["DOI"] = 0] = "DOI";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["ISLRN"] = 1] = "ISLRN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["HDL"] = 2] = "HDL";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["ARK"] = 3] = "ARK";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["AR_XIV"] = 4] = "AR_XIV";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["BIBCODE"] = 5] = "BIBCODE";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["EAN_13"] = 6] = "EAN_13";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["EISSN"] = 7] = "EISSN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["ISBN"] = 8] = "ISBN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["ISSN"] = 9] = "ISSN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["ISTC"] = 10] = "ISTC";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["LISSN"] = 11] = "LISSN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["LSID"] = 12] = "LSID";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["PURL"] = 13] = "PURL";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["UPC"] = 14] = "UPC";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["URL"] = 15] = "URL";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["URN"] = 16] = "URN";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["FCT"] = 17] = "FCT";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["OAI"] = 18] = "OAI";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["PMC"] = 19] = "PMC";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["PMID"] = 20] = "PMID";
    ResourceIdentifierSchemeNameEnum[ResourceIdentifierSchemeNameEnum["OTHER"] = 21] = "OTHER";
})(exports.ResourceIdentifierSchemeNameEnum || (exports.ResourceIdentifierSchemeNameEnum = {}));
var ResourceIdentifierSchemeNameEnum = exports.ResourceIdentifierSchemeNameEnum;
(function (ResourceTypeEnum) {
    ResourceTypeEnum[ResourceTypeEnum["CORPUS"] = 0] = "CORPUS";
    ResourceTypeEnum[ResourceTypeEnum["DOCUMENT"] = 1] = "DOCUMENT";
    ResourceTypeEnum[ResourceTypeEnum["USER_INPUT_TEXT"] = 2] = "USER_INPUT_TEXT";
    ResourceTypeEnum[ResourceTypeEnum["LEXICAL_CONCEPTUAL_RESOURCE"] = 3] = "LEXICAL_CONCEPTUAL_RESOURCE";
    ResourceTypeEnum[ResourceTypeEnum["LANGUAGE_DESCRIPTION"] = 4] = "LANGUAGE_DESCRIPTION";
})(exports.ResourceTypeEnum || (exports.ResourceTypeEnum = {}));
var ResourceTypeEnum = exports.ResourceTypeEnum;
(function (RightsStmtNameEnum) {
    RightsStmtNameEnum[RightsStmtNameEnum["OPEN_ACCESS"] = 0] = "OPEN_ACCESS";
    RightsStmtNameEnum[RightsStmtNameEnum["CLOSED_ACCESS"] = 1] = "CLOSED_ACCESS";
    RightsStmtNameEnum[RightsStmtNameEnum["EMBARGOED_ACCESS"] = 2] = "EMBARGOED_ACCESS";
    RightsStmtNameEnum[RightsStmtNameEnum["RESTRICTED_ACCESS"] = 3] = "RESTRICTED_ACCESS";
})(exports.RightsStmtNameEnum || (exports.RightsStmtNameEnum = {}));
var RightsStmtNameEnum = exports.RightsStmtNameEnum;
(function (SchemeNameEnum) {
    SchemeNameEnum[SchemeNameEnum["JATS"] = 0] = "JATS";
    SchemeNameEnum[SchemeNameEnum["TEI_P_5"] = 1] = "TEI_P_5";
    SchemeNameEnum[SchemeNameEnum["OTHER"] = 2] = "OTHER";
})(exports.SchemeNameEnum || (exports.SchemeNameEnum = {}));
var SchemeNameEnum = exports.SchemeNameEnum;
(function (ScriptIdType) {
    ScriptIdType[ScriptIdType["AFAK"] = 0] = "AFAK";
    ScriptIdType[ScriptIdType["AGHB"] = 1] = "AGHB";
    ScriptIdType[ScriptIdType["AHOM"] = 2] = "AHOM";
    ScriptIdType[ScriptIdType["ARAB"] = 3] = "ARAB";
    ScriptIdType[ScriptIdType["ARMI"] = 4] = "ARMI";
    ScriptIdType[ScriptIdType["ARMN"] = 5] = "ARMN";
    ScriptIdType[ScriptIdType["AVST"] = 6] = "AVST";
    ScriptIdType[ScriptIdType["BALI"] = 7] = "BALI";
    ScriptIdType[ScriptIdType["BAMU"] = 8] = "BAMU";
    ScriptIdType[ScriptIdType["BASS"] = 9] = "BASS";
    ScriptIdType[ScriptIdType["BATK"] = 10] = "BATK";
    ScriptIdType[ScriptIdType["BENG"] = 11] = "BENG";
    ScriptIdType[ScriptIdType["BLIS"] = 12] = "BLIS";
    ScriptIdType[ScriptIdType["BOPO"] = 13] = "BOPO";
    ScriptIdType[ScriptIdType["BRAH"] = 14] = "BRAH";
    ScriptIdType[ScriptIdType["BRAI"] = 15] = "BRAI";
    ScriptIdType[ScriptIdType["BUGI"] = 16] = "BUGI";
    ScriptIdType[ScriptIdType["BUHD"] = 17] = "BUHD";
    ScriptIdType[ScriptIdType["CAKM"] = 18] = "CAKM";
    ScriptIdType[ScriptIdType["CANS"] = 19] = "CANS";
    ScriptIdType[ScriptIdType["CARI"] = 20] = "CARI";
    ScriptIdType[ScriptIdType["CHAM"] = 21] = "CHAM";
    ScriptIdType[ScriptIdType["CHER"] = 22] = "CHER";
    ScriptIdType[ScriptIdType["CIRT"] = 23] = "CIRT";
    ScriptIdType[ScriptIdType["COPT"] = 24] = "COPT";
    ScriptIdType[ScriptIdType["CPRT"] = 25] = "CPRT";
    ScriptIdType[ScriptIdType["CYRL"] = 26] = "CYRL";
    ScriptIdType[ScriptIdType["CYRS"] = 27] = "CYRS";
    ScriptIdType[ScriptIdType["DEVA"] = 28] = "DEVA";
    ScriptIdType[ScriptIdType["DSRT"] = 29] = "DSRT";
    ScriptIdType[ScriptIdType["DUPL"] = 30] = "DUPL";
    ScriptIdType[ScriptIdType["EGYD"] = 31] = "EGYD";
    ScriptIdType[ScriptIdType["EGYH"] = 32] = "EGYH";
    ScriptIdType[ScriptIdType["EGYP"] = 33] = "EGYP";
    ScriptIdType[ScriptIdType["ELBA"] = 34] = "ELBA";
    ScriptIdType[ScriptIdType["ETHI"] = 35] = "ETHI";
    ScriptIdType[ScriptIdType["GEOK"] = 36] = "GEOK";
    ScriptIdType[ScriptIdType["GEOR"] = 37] = "GEOR";
    ScriptIdType[ScriptIdType["GLAG"] = 38] = "GLAG";
    ScriptIdType[ScriptIdType["GOTH"] = 39] = "GOTH";
    ScriptIdType[ScriptIdType["GRAN"] = 40] = "GRAN";
    ScriptIdType[ScriptIdType["GREK"] = 41] = "GREK";
    ScriptIdType[ScriptIdType["GUJR"] = 42] = "GUJR";
    ScriptIdType[ScriptIdType["GURU"] = 43] = "GURU";
    ScriptIdType[ScriptIdType["HANG"] = 44] = "HANG";
    ScriptIdType[ScriptIdType["HANI"] = 45] = "HANI";
    ScriptIdType[ScriptIdType["HANO"] = 46] = "HANO";
    ScriptIdType[ScriptIdType["HANS"] = 47] = "HANS";
    ScriptIdType[ScriptIdType["HANT"] = 48] = "HANT";
    ScriptIdType[ScriptIdType["HATR"] = 49] = "HATR";
    ScriptIdType[ScriptIdType["HEBR"] = 50] = "HEBR";
    ScriptIdType[ScriptIdType["HIRA"] = 51] = "HIRA";
    ScriptIdType[ScriptIdType["HLUW"] = 52] = "HLUW";
    ScriptIdType[ScriptIdType["HMNG"] = 53] = "HMNG";
    ScriptIdType[ScriptIdType["HRKT"] = 54] = "HRKT";
    ScriptIdType[ScriptIdType["HUNG"] = 55] = "HUNG";
    ScriptIdType[ScriptIdType["INDS"] = 56] = "INDS";
    ScriptIdType[ScriptIdType["ITAL"] = 57] = "ITAL";
    ScriptIdType[ScriptIdType["JAVA"] = 58] = "JAVA";
    ScriptIdType[ScriptIdType["JPAN"] = 59] = "JPAN";
    ScriptIdType[ScriptIdType["JURC"] = 60] = "JURC";
    ScriptIdType[ScriptIdType["KALI"] = 61] = "KALI";
    ScriptIdType[ScriptIdType["KANA"] = 62] = "KANA";
    ScriptIdType[ScriptIdType["KHAR"] = 63] = "KHAR";
    ScriptIdType[ScriptIdType["KHMR"] = 64] = "KHMR";
    ScriptIdType[ScriptIdType["KHOJ"] = 65] = "KHOJ";
    ScriptIdType[ScriptIdType["KNDA"] = 66] = "KNDA";
    ScriptIdType[ScriptIdType["KORE"] = 67] = "KORE";
    ScriptIdType[ScriptIdType["KPEL"] = 68] = "KPEL";
    ScriptIdType[ScriptIdType["KTHI"] = 69] = "KTHI";
    ScriptIdType[ScriptIdType["LANA"] = 70] = "LANA";
    ScriptIdType[ScriptIdType["LAOO"] = 71] = "LAOO";
    ScriptIdType[ScriptIdType["LATF"] = 72] = "LATF";
    ScriptIdType[ScriptIdType["LATG"] = 73] = "LATG";
    ScriptIdType[ScriptIdType["LATN"] = 74] = "LATN";
    ScriptIdType[ScriptIdType["LEPC"] = 75] = "LEPC";
    ScriptIdType[ScriptIdType["LIMB"] = 76] = "LIMB";
    ScriptIdType[ScriptIdType["LINA"] = 77] = "LINA";
    ScriptIdType[ScriptIdType["LINB"] = 78] = "LINB";
    ScriptIdType[ScriptIdType["LISU"] = 79] = "LISU";
    ScriptIdType[ScriptIdType["LOMA"] = 80] = "LOMA";
    ScriptIdType[ScriptIdType["LYCI"] = 81] = "LYCI";
    ScriptIdType[ScriptIdType["LYDI"] = 82] = "LYDI";
    ScriptIdType[ScriptIdType["MAHJ"] = 83] = "MAHJ";
    ScriptIdType[ScriptIdType["MAND"] = 84] = "MAND";
    ScriptIdType[ScriptIdType["MANI"] = 85] = "MANI";
    ScriptIdType[ScriptIdType["MAYA"] = 86] = "MAYA";
    ScriptIdType[ScriptIdType["MEND"] = 87] = "MEND";
    ScriptIdType[ScriptIdType["MERC"] = 88] = "MERC";
    ScriptIdType[ScriptIdType["MERO"] = 89] = "MERO";
    ScriptIdType[ScriptIdType["MLYM"] = 90] = "MLYM";
    ScriptIdType[ScriptIdType["MODI"] = 91] = "MODI";
    ScriptIdType[ScriptIdType["MONG"] = 92] = "MONG";
    ScriptIdType[ScriptIdType["MOON"] = 93] = "MOON";
    ScriptIdType[ScriptIdType["MROO"] = 94] = "MROO";
    ScriptIdType[ScriptIdType["MTEI"] = 95] = "MTEI";
    ScriptIdType[ScriptIdType["MULT"] = 96] = "MULT";
    ScriptIdType[ScriptIdType["MYMR"] = 97] = "MYMR";
    ScriptIdType[ScriptIdType["NARB"] = 98] = "NARB";
    ScriptIdType[ScriptIdType["NBAT"] = 99] = "NBAT";
    ScriptIdType[ScriptIdType["NKGB"] = 100] = "NKGB";
    ScriptIdType[ScriptIdType["NKOO"] = 101] = "NKOO";
    ScriptIdType[ScriptIdType["NSHU"] = 102] = "NSHU";
    ScriptIdType[ScriptIdType["OGAM"] = 103] = "OGAM";
    ScriptIdType[ScriptIdType["OLCK"] = 104] = "OLCK";
    ScriptIdType[ScriptIdType["ORKH"] = 105] = "ORKH";
    ScriptIdType[ScriptIdType["ORYA"] = 106] = "ORYA";
    ScriptIdType[ScriptIdType["OSMA"] = 107] = "OSMA";
    ScriptIdType[ScriptIdType["PALM"] = 108] = "PALM";
    ScriptIdType[ScriptIdType["PAUC"] = 109] = "PAUC";
    ScriptIdType[ScriptIdType["PERM"] = 110] = "PERM";
    ScriptIdType[ScriptIdType["PHAG"] = 111] = "PHAG";
    ScriptIdType[ScriptIdType["PHLI"] = 112] = "PHLI";
    ScriptIdType[ScriptIdType["PHLP"] = 113] = "PHLP";
    ScriptIdType[ScriptIdType["PHLV"] = 114] = "PHLV";
    ScriptIdType[ScriptIdType["PHNX"] = 115] = "PHNX";
    ScriptIdType[ScriptIdType["PLRD"] = 116] = "PLRD";
    ScriptIdType[ScriptIdType["PRTI"] = 117] = "PRTI";
    ScriptIdType[ScriptIdType["QAAA__QABX"] = 118] = "QAAA__QABX";
    ScriptIdType[ScriptIdType["RJNG"] = 119] = "RJNG";
    ScriptIdType[ScriptIdType["RORO"] = 120] = "RORO";
    ScriptIdType[ScriptIdType["RUNR"] = 121] = "RUNR";
    ScriptIdType[ScriptIdType["SAMR"] = 122] = "SAMR";
    ScriptIdType[ScriptIdType["SARA"] = 123] = "SARA";
    ScriptIdType[ScriptIdType["SARB"] = 124] = "SARB";
    ScriptIdType[ScriptIdType["SAUR"] = 125] = "SAUR";
    ScriptIdType[ScriptIdType["SGNW"] = 126] = "SGNW";
    ScriptIdType[ScriptIdType["SHAW"] = 127] = "SHAW";
    ScriptIdType[ScriptIdType["SHRD"] = 128] = "SHRD";
    ScriptIdType[ScriptIdType["SIDD"] = 129] = "SIDD";
    ScriptIdType[ScriptIdType["SIND"] = 130] = "SIND";
    ScriptIdType[ScriptIdType["SINH"] = 131] = "SINH";
    ScriptIdType[ScriptIdType["SORA"] = 132] = "SORA";
    ScriptIdType[ScriptIdType["SUND"] = 133] = "SUND";
    ScriptIdType[ScriptIdType["SYLO"] = 134] = "SYLO";
    ScriptIdType[ScriptIdType["SYRC"] = 135] = "SYRC";
    ScriptIdType[ScriptIdType["SYRE"] = 136] = "SYRE";
    ScriptIdType[ScriptIdType["SYRJ"] = 137] = "SYRJ";
    ScriptIdType[ScriptIdType["SYRN"] = 138] = "SYRN";
    ScriptIdType[ScriptIdType["TAGB"] = 139] = "TAGB";
    ScriptIdType[ScriptIdType["TAKR"] = 140] = "TAKR";
    ScriptIdType[ScriptIdType["TALE"] = 141] = "TALE";
    ScriptIdType[ScriptIdType["TALU"] = 142] = "TALU";
    ScriptIdType[ScriptIdType["TAML"] = 143] = "TAML";
    ScriptIdType[ScriptIdType["TANG"] = 144] = "TANG";
    ScriptIdType[ScriptIdType["TAVT"] = 145] = "TAVT";
    ScriptIdType[ScriptIdType["TELU"] = 146] = "TELU";
    ScriptIdType[ScriptIdType["TENG"] = 147] = "TENG";
    ScriptIdType[ScriptIdType["TFNG"] = 148] = "TFNG";
    ScriptIdType[ScriptIdType["TGLG"] = 149] = "TGLG";
    ScriptIdType[ScriptIdType["THAA"] = 150] = "THAA";
    ScriptIdType[ScriptIdType["THAI"] = 151] = "THAI";
    ScriptIdType[ScriptIdType["TIBT"] = 152] = "TIBT";
    ScriptIdType[ScriptIdType["TIRH"] = 153] = "TIRH";
    ScriptIdType[ScriptIdType["UGAR"] = 154] = "UGAR";
    ScriptIdType[ScriptIdType["VAII"] = 155] = "VAII";
    ScriptIdType[ScriptIdType["VISP"] = 156] = "VISP";
    ScriptIdType[ScriptIdType["WARA"] = 157] = "WARA";
    ScriptIdType[ScriptIdType["WOLE"] = 158] = "WOLE";
    ScriptIdType[ScriptIdType["XPEO"] = 159] = "XPEO";
    ScriptIdType[ScriptIdType["XSUX"] = 160] = "XSUX";
    ScriptIdType[ScriptIdType["YIII"] = 161] = "YIII";
    ScriptIdType[ScriptIdType["ZINH"] = 162] = "ZINH";
    ScriptIdType[ScriptIdType["ZMTH"] = 163] = "ZMTH";
    ScriptIdType[ScriptIdType["ZSYM"] = 164] = "ZSYM";
    ScriptIdType[ScriptIdType["ZXXX"] = 165] = "ZXXX";
    ScriptIdType[ScriptIdType["ZYYY"] = 166] = "ZYYY";
    ScriptIdType[ScriptIdType["ZZZZ"] = 167] = "ZZZZ";
})(exports.ScriptIdType || (exports.ScriptIdType = {}));
var ScriptIdType = exports.ScriptIdType;
(function (SexEnum) {
    SexEnum[SexEnum["MALE"] = 0] = "MALE";
    SexEnum[SexEnum["FEMALE"] = 1] = "FEMALE";
    SexEnum[SexEnum["UNKNOWN"] = 2] = "UNKNOWN";
})(exports.SexEnum || (exports.SexEnum = {}));
var SexEnum = exports.SexEnum;
(function (SizeUnitEnum) {
    SizeUnitEnum[SizeUnitEnum["TERMS"] = 0] = "TERMS";
    SizeUnitEnum[SizeUnitEnum["ENTRIES"] = 1] = "ENTRIES";
    SizeUnitEnum[SizeUnitEnum["TURNS"] = 2] = "TURNS";
    SizeUnitEnum[SizeUnitEnum["UTTERANCES"] = 3] = "UTTERANCES";
    SizeUnitEnum[SizeUnitEnum["ARTICLES"] = 4] = "ARTICLES";
    SizeUnitEnum[SizeUnitEnum["FILES"] = 5] = "FILES";
    SizeUnitEnum[SizeUnitEnum["ITEMS"] = 6] = "ITEMS";
    SizeUnitEnum[SizeUnitEnum["SECONDS"] = 7] = "SECONDS";
    SizeUnitEnum[SizeUnitEnum["ELEMENTS"] = 8] = "ELEMENTS";
    SizeUnitEnum[SizeUnitEnum["UNITS"] = 9] = "UNITS";
    SizeUnitEnum[SizeUnitEnum["MINUTES"] = 10] = "MINUTES";
    SizeUnitEnum[SizeUnitEnum["HOURS"] = 11] = "HOURS";
    SizeUnitEnum[SizeUnitEnum["TEXTS"] = 12] = "TEXTS";
    SizeUnitEnum[SizeUnitEnum["SENTENCES"] = 13] = "SENTENCES";
    SizeUnitEnum[SizeUnitEnum["BYTES"] = 14] = "BYTES";
    SizeUnitEnum[SizeUnitEnum["TOKENS"] = 15] = "TOKENS";
    SizeUnitEnum[SizeUnitEnum["WORDS"] = 16] = "WORDS";
    SizeUnitEnum[SizeUnitEnum["KEYWORDS"] = 17] = "KEYWORDS";
    SizeUnitEnum[SizeUnitEnum["IDIOMATIC_EXPRESSIONS"] = 18] = "IDIOMATIC_EXPRESSIONS";
    SizeUnitEnum[SizeUnitEnum["TRIPLES"] = 19] = "TRIPLES";
    SizeUnitEnum[SizeUnitEnum["NEOLOGISMS"] = 20] = "NEOLOGISMS";
    SizeUnitEnum[SizeUnitEnum["MULTI_WORD_UNITS"] = 21] = "MULTI_WORD_UNITS";
    SizeUnitEnum[SizeUnitEnum["EXPRESSIONS"] = 22] = "EXPRESSIONS";
    SizeUnitEnum[SizeUnitEnum["SYNSETS"] = 23] = "SYNSETS";
    SizeUnitEnum[SizeUnitEnum["CLASSES"] = 24] = "CLASSES";
    SizeUnitEnum[SizeUnitEnum["CONCEPTS"] = 25] = "CONCEPTS";
    SizeUnitEnum[SizeUnitEnum["LEXICAL_TYPES"] = 26] = "LEXICAL_TYPES";
    SizeUnitEnum[SizeUnitEnum["PHONETIC_UNITS"] = 27] = "PHONETIC_UNITS";
    SizeUnitEnum[SizeUnitEnum["SYNTACTIC_UNITS"] = 28] = "SYNTACTIC_UNITS";
    SizeUnitEnum[SizeUnitEnum["SEMANTIC_UNITS"] = 29] = "SEMANTIC_UNITS";
    SizeUnitEnum[SizeUnitEnum["PREDICATES"] = 30] = "PREDICATES";
    SizeUnitEnum[SizeUnitEnum["PHONEMES"] = 31] = "PHONEMES";
    SizeUnitEnum[SizeUnitEnum["DIPHONES"] = 32] = "DIPHONES";
    SizeUnitEnum[SizeUnitEnum["T_H_PAIRS"] = 33] = "T_H_PAIRS";
    SizeUnitEnum[SizeUnitEnum["SYLLABLES"] = 34] = "SYLLABLES";
    SizeUnitEnum[SizeUnitEnum["FRAMES"] = 35] = "FRAMES";
    SizeUnitEnum[SizeUnitEnum["IMAGES"] = 36] = "IMAGES";
    SizeUnitEnum[SizeUnitEnum["KB"] = 37] = "KB";
    SizeUnitEnum[SizeUnitEnum["MB"] = 38] = "MB";
    SizeUnitEnum[SizeUnitEnum["GB"] = 39] = "GB";
    SizeUnitEnum[SizeUnitEnum["RB"] = 40] = "RB";
    SizeUnitEnum[SizeUnitEnum["SHOTS"] = 41] = "SHOTS";
    SizeUnitEnum[SizeUnitEnum["UNIGRAMS"] = 42] = "UNIGRAMS";
    SizeUnitEnum[SizeUnitEnum["BIGRAMS"] = 43] = "BIGRAMS";
    SizeUnitEnum[SizeUnitEnum["TRIGRAMS"] = 44] = "TRIGRAMS";
    SizeUnitEnum[SizeUnitEnum["V4_GRAMS"] = 45] = "V4_GRAMS";
    SizeUnitEnum[SizeUnitEnum["V5_GRAMS"] = 46] = "V5_GRAMS";
    SizeUnitEnum[SizeUnitEnum["RULES"] = 47] = "RULES";
    SizeUnitEnum[SizeUnitEnum["QUESTIONS"] = 48] = "QUESTIONS";
    SizeUnitEnum[SizeUnitEnum["OTHER"] = 49] = "OTHER";
})(exports.SizeUnitEnum || (exports.SizeUnitEnum = {}));
var SizeUnitEnum = exports.SizeUnitEnum;
(function (TaskEnum) {
    TaskEnum[TaskEnum["ANAPHORA_RESOLUTION"] = 0] = "ANAPHORA_RESOLUTION";
    TaskEnum[TaskEnum["CHUNKING"] = 1] = "CHUNKING";
    TaskEnum[TaskEnum["PARSING"] = 2] = "PARSING";
    TaskEnum[TaskEnum["NP_RECOGNITION"] = 3] = "NP_RECOGNITION";
    TaskEnum[TaskEnum["TITLES_PARSING"] = 4] = "TITLES_PARSING";
    TaskEnum[TaskEnum["DEFINITIONS_PARSING"] = 5] = "DEFINITIONS_PARSING";
    TaskEnum[TaskEnum["ANALYSIS"] = 6] = "ANALYSIS";
    TaskEnum[TaskEnum["GENERATION"] = 7] = "GENERATION";
    TaskEnum[TaskEnum["OTHER"] = 8] = "OTHER";
})(exports.TaskEnum || (exports.TaskEnum = {}));
var TaskEnum = exports.TaskEnum;
(function (TitleTypeEnum) {
    TitleTypeEnum[TitleTypeEnum["ALTERNATIVE_TITLE"] = 0] = "ALTERNATIVE_TITLE";
    TitleTypeEnum[TitleTypeEnum["SUBTITLE"] = 1] = "SUBTITLE";
    TitleTypeEnum[TitleTypeEnum["TRANSLATED_TITLE"] = 2] = "TRANSLATED_TITLE";
    TitleTypeEnum[TitleTypeEnum["OTHER"] = 3] = "OTHER";
})(exports.TitleTypeEnum || (exports.TitleTypeEnum = {}));
var TitleTypeEnum = exports.TitleTypeEnum;
(function (UseNLPSpecificEnum) {
    UseNLPSpecificEnum[UseNLPSpecificEnum["ALIGNMENT"] = 0] = "ALIGNMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["ANNOTATION"] = 1] = "ANNOTATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["AVATAR_SYNTHESIS"] = 2] = "AVATAR_SYNTHESIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["BILINGUAL_LEXICON_INDUCTION"] = 3] = "BILINGUAL_LEXICON_INDUCTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["CONTRADICTION_DETECTION"] = 4] = "CONTRADICTION_DETECTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["COREFERENCE_RESOLUTION"] = 5] = "COREFERENCE_RESOLUTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["DEPENDENCY_PARSING"] = 6] = "DEPENDENCY_PARSING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["DERIVATIONAL_MORPHOLOGICAL_ANALYSIS"] = 7] = "DERIVATIONAL_MORPHOLOGICAL_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["DISCOURSE_ANALYSIS"] = 8] = "DISCOURSE_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["DOCUMENT_CLASSIFICATION"] = 9] = "DOCUMENT_CLASSIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["EMOTION_GENERATION"] = 10] = "EMOTION_GENERATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["EMOTION_RECOGNITION"] = 11] = "EMOTION_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["ENTITY_MENTION_RECOGNITION"] = 12] = "ENTITY_MENTION_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["EVENT_EXTRACTION"] = 13] = "EVENT_EXTRACTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["EXPRESSION_RECOGNITION"] = 14] = "EXPRESSION_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["FACE_RECOGNITION"] = 15] = "FACE_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["FACE_VERIFICATION"] = 16] = "FACE_VERIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["HUMANOID_AGENT_SYNTHESIS"] = 17] = "HUMANOID_AGENT_SYNTHESIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["INFORMATION_EXTRACTION"] = 18] = "INFORMATION_EXTRACTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["INFORMATION_RETRIEVAL"] = 19] = "INFORMATION_RETRIEVAL";
    UseNLPSpecificEnum[UseNLPSpecificEnum["INTRA_DOCUMENT_COREFERENCE_RESOLUTION"] = 20] = "INTRA_DOCUMENT_COREFERENCE_RESOLUTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["KNOWLEDGE_DISCOVERY"] = 21] = "KNOWLEDGE_DISCOVERY";
    UseNLPSpecificEnum[UseNLPSpecificEnum["KNOWLEDGE_REPRESENTATION"] = 22] = "KNOWLEDGE_REPRESENTATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LANGUAGE_IDENTIFICATION"] = 23] = "LANGUAGE_IDENTIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LANGUAGE_MODELLING"] = 24] = "LANGUAGE_MODELLING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LANGUAGE_MODELS_TRAINING"] = 25] = "LANGUAGE_MODELS_TRAINING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEMMATIZATION"] = 26] = "LEMMATIZATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_ACCESS"] = 27] = "LEXICON_ACCESS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_ACQUISITION_FROM_CORPORA"] = 28] = "LEXICON_ACQUISITION_FROM_CORPORA";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_ENHANCEMENT"] = 29] = "LEXICON_ENHANCEMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_EXTRACTION_FROM_LEXICA"] = 30] = "LEXICON_EXTRACTION_FROM_LEXICA";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_FORMAT_CONVERSION"] = 31] = "LEXICON_FORMAT_CONVERSION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_MERGING"] = 32] = "LEXICON_MERGING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LEXICON_VISUALIZATION"] = 33] = "LEXICON_VISUALIZATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LINGUISTIC_RESEARCH"] = 34] = "LINGUISTIC_RESEARCH";
    UseNLPSpecificEnum[UseNLPSpecificEnum["LIP_TRACKING_ANALYSIS"] = 35] = "LIP_TRACKING_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MACHINE_TRANSLATION"] = 36] = "MACHINE_TRANSLATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MORPHOLOGICAL_ANALYSIS"] = 37] = "MORPHOLOGICAL_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING"] = 38] = "MORPHOSYNTACTIC_ANNOTATION_B_POS_TAGGING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING"] = 39] = "MORPHOSYNTACTIC_ANNOTATION_POS_TAGGING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MULTIMEDIA_DEVELOPMENT"] = 40] = "MULTIMEDIA_DEVELOPMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["MULTIMEDIA_DOCUMENT_PROCESSING"] = 41] = "MULTIMEDIA_DOCUMENT_PROCESSING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["NAMED_ENTITY_RECOGNITION"] = 42] = "NAMED_ENTITY_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["NATURAL_LANGUAGE_GENERATION"] = 43] = "NATURAL_LANGUAGE_GENERATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["NATURAL_LANGUAGE_UNDERSTANDING"] = 44] = "NATURAL_LANGUAGE_UNDERSTANDING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["OPINION_MINING"] = 45] = "OPINION_MINING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["OTHER"] = 46] = "OTHER";
    UseNLPSpecificEnum[UseNLPSpecificEnum["PERSON_IDENTIFICATION"] = 47] = "PERSON_IDENTIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["PERSON_RECOGNITION"] = 48] = "PERSON_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["PERSUASIVE_EXPRESSION_MINING"] = 49] = "PERSUASIVE_EXPRESSION_MINING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["PHRASE_ALIGNMENT"] = 50] = "PHRASE_ALIGNMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["QUALITATIVE_ANALYSIS"] = 51] = "QUALITATIVE_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["QUESTION_ANSWERING"] = 52] = "QUESTION_ANSWERING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["READING_AND_WRITING_AID_APPLICATIONS"] = 53] = "READING_AND_WRITING_AID_APPLICATIONS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SEMANTIC_ROLE_LABELLING"] = 54] = "SEMANTIC_ROLE_LABELLING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SEMANTIC_WEB"] = 55] = "SEMANTIC_WEB";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SENTENCE_ALIGNMENT"] = 56] = "SENTENCE_ALIGNMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SENTENCE_SPLITTING"] = 57] = "SENTENCE_SPLITTING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SENTIMENT_ANALYSIS"] = 58] = "SENTIMENT_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SHALLOW_PARSING"] = 59] = "SHALLOW_PARSING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SIGN_LANGUAGE_GENERATION"] = 60] = "SIGN_LANGUAGE_GENERATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SIGN_LANGUAGE_RECOGNITION"] = 61] = "SIGN_LANGUAGE_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEAKER_IDENTIFICATION"] = 62] = "SPEAKER_IDENTIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEAKER_VERIFICATION"] = 63] = "SPEAKER_VERIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_ANALYSIS"] = 64] = "SPEECH_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_ASSISTED_VIDEO_CONTROL"] = 65] = "SPEECH_ASSISTED_VIDEO_CONTROL";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_LIPS_CORRELATION_ANALYSIS"] = 66] = "SPEECH_LIPS_CORRELATION_ANALYSIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_RECOGNITION"] = 67] = "SPEECH_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_SYNTHESIS"] = 68] = "SPEECH_SYNTHESIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_TO_SPEECH_TRANSLATION"] = 69] = "SPEECH_TO_SPEECH_TRANSLATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_UNDERSTANDING"] = 70] = "SPEECH_UNDERSTANDING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPEECH_VERIFICATION"] = 71] = "SPEECH_VERIFICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPELL_CHECKING"] = 72] = "SPELL_CHECKING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SPOKEN_DIALOGUE_SYSTEMS"] = 73] = "SPOKEN_DIALOGUE_SYSTEMS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["SUMMARIZATION"] = 74] = "SUMMARIZATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TALKING_HEAD_SYNTHESIS"] = 75] = "TALKING_HEAD_SYNTHESIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEMPORAL_EXPRESSION_RECOGNITION"] = 76] = "TEMPORAL_EXPRESSION_RECOGNITION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TERMINOLOGY_EXTRACTION"] = 77] = "TERMINOLOGY_EXTRACTION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEXT_CATEGORISATION"] = 78] = "TEXT_CATEGORISATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEXT_GENERATION"] = 79] = "TEXT_GENERATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEXT_MINING"] = 80] = "TEXT_MINING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEXT_TO_SPEECH_SYNTHESIS"] = 81] = "TEXT_TO_SPEECH_SYNTHESIS";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TEXTUAL_ENTAILMENT"] = 82] = "TEXTUAL_ENTAILMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TOKENIZATION"] = 83] = "TOKENIZATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TOKENIZATION_AND_SENTENCE_SPLITTING"] = 84] = "TOKENIZATION_AND_SENTENCE_SPLITTING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["TOPIC_DETECTION_TRACKING"] = 85] = "TOPIC_DETECTION_TRACKING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["USER_AUTHENTICATION"] = 86] = "USER_AUTHENTICATION";
    UseNLPSpecificEnum[UseNLPSpecificEnum["VISUAL_SCENE_UNDERSTANDING"] = 87] = "VISUAL_SCENE_UNDERSTANDING";
    UseNLPSpecificEnum[UseNLPSpecificEnum["VOICE_CONTROL"] = 88] = "VOICE_CONTROL";
    UseNLPSpecificEnum[UseNLPSpecificEnum["WORD_ALIGNMENT"] = 89] = "WORD_ALIGNMENT";
    UseNLPSpecificEnum[UseNLPSpecificEnum["WORD_SENSE_DISAMBIGUATION"] = 90] = "WORD_SENSE_DISAMBIGUATION";
})(exports.UseNLPSpecificEnum || (exports.UseNLPSpecificEnum = {}));
var UseNLPSpecificEnum = exports.UseNLPSpecificEnum;
(function (UserTypeEnum) {
    UserTypeEnum[UserTypeEnum["ACADEMIC"] = 0] = "ACADEMIC";
    UserTypeEnum[UserTypeEnum["COMMERCIAL"] = 1] = "COMMERCIAL";
    UserTypeEnum[UserTypeEnum["MEMBERS_OF_GROUP"] = 2] = "MEMBERS_OF_GROUP";
})(exports.UserTypeEnum || (exports.UserTypeEnum = {}));
var UserTypeEnum = exports.UserTypeEnum;
(function (ValidationExtentEnum) {
    ValidationExtentEnum[ValidationExtentEnum["FULL"] = 0] = "FULL";
    ValidationExtentEnum[ValidationExtentEnum["PARTIAL"] = 1] = "PARTIAL";
})(exports.ValidationExtentEnum || (exports.ValidationExtentEnum = {}));
var ValidationExtentEnum = exports.ValidationExtentEnum;
(function (ValidationTypeEnum) {
    ValidationTypeEnum[ValidationTypeEnum["FORMAL"] = 0] = "FORMAL";
    ValidationTypeEnum[ValidationTypeEnum["CONTENT"] = 1] = "CONTENT";
})(exports.ValidationTypeEnum || (exports.ValidationTypeEnum = {}));
var ValidationTypeEnum = exports.ValidationTypeEnum;
(function (VariantIdType) {
    VariantIdType[VariantIdType["V1606NICT"] = 0] = "V1606NICT";
    VariantIdType[VariantIdType["ALALC_97"] = 1] = "ALALC_97";
    VariantIdType[VariantIdType["FONIPA"] = 2] = "FONIPA";
    VariantIdType[VariantIdType["FONUPA"] = 3] = "FONUPA";
    VariantIdType[VariantIdType["FONXSAMP"] = 4] = "FONXSAMP";
    VariantIdType[VariantIdType["V1694ACAD"] = 5] = "V1694ACAD";
    VariantIdType[VariantIdType["V1901"] = 6] = "V1901";
    VariantIdType[VariantIdType["V1959ACAD"] = 7] = "V1959ACAD";
    VariantIdType[VariantIdType["V1994"] = 8] = "V1994";
    VariantIdType[VariantIdType["V1996"] = 9] = "V1996";
    VariantIdType[VariantIdType["ALUKU"] = 10] = "ALUKU";
    VariantIdType[VariantIdType["AREVELA"] = 11] = "AREVELA";
    VariantIdType[VariantIdType["AREVMDA"] = 12] = "AREVMDA";
    VariantIdType[VariantIdType["BAKU_1926"] = 13] = "BAKU_1926";
    VariantIdType[VariantIdType["BALANKA"] = 14] = "BALANKA";
    VariantIdType[VariantIdType["BARLA"] = 15] = "BARLA";
    VariantIdType[VariantIdType["BAUDDHA"] = 16] = "BAUDDHA";
    VariantIdType[VariantIdType["BISCAYAN"] = 17] = "BISCAYAN";
    VariantIdType[VariantIdType["BISKE"] = 18] = "BISKE";
    VariantIdType[VariantIdType["BOHORIC"] = 19] = "BOHORIC";
    VariantIdType[VariantIdType["BOONT"] = 20] = "BOONT";
    VariantIdType[VariantIdType["DAJNKO"] = 21] = "DAJNKO";
    VariantIdType[VariantIdType["EKAVSK"] = 22] = "EKAVSK";
    VariantIdType[VariantIdType["EMODENG"] = 23] = "EMODENG";
    VariantIdType[VariantIdType["HEPBURN"] = 24] = "HEPBURN";
    VariantIdType[VariantIdType["HOGNORSK"] = 25] = "HOGNORSK";
    VariantIdType[VariantIdType["IJEKAVSK"] = 26] = "IJEKAVSK";
    VariantIdType[VariantIdType["ITIHASA"] = 27] = "ITIHASA";
    VariantIdType[VariantIdType["JAUER"] = 28] = "JAUER";
    VariantIdType[VariantIdType["JYUTPING"] = 29] = "JYUTPING";
    VariantIdType[VariantIdType["KKCOR"] = 30] = "KKCOR";
    VariantIdType[VariantIdType["KSCOR"] = 31] = "KSCOR";
    VariantIdType[VariantIdType["LAUKIKA"] = 32] = "LAUKIKA";
    VariantIdType[VariantIdType["LIPAW"] = 33] = "LIPAW";
    VariantIdType[VariantIdType["LUNA_1918"] = 34] = "LUNA_1918";
    VariantIdType[VariantIdType["METELKO"] = 35] = "METELKO";
    VariantIdType[VariantIdType["MONOTON"] = 36] = "MONOTON";
    VariantIdType[VariantIdType["NDYUKA"] = 37] = "NDYUKA";
    VariantIdType[VariantIdType["NEDIS"] = 38] = "NEDIS";
    VariantIdType[VariantIdType["NJIVA"] = 39] = "NJIVA";
    VariantIdType[VariantIdType["NULIK"] = 40] = "NULIK";
    VariantIdType[VariantIdType["OSOJS"] = 41] = "OSOJS";
    VariantIdType[VariantIdType["PAMAKA"] = 42] = "PAMAKA";
    VariantIdType[VariantIdType["PETR_1708"] = 43] = "PETR_1708";
    VariantIdType[VariantIdType["PINYIN"] = 44] = "PINYIN";
    VariantIdType[VariantIdType["POLYTON"] = 45] = "POLYTON";
    VariantIdType[VariantIdType["PUTER"] = 46] = "PUTER";
    VariantIdType[VariantIdType["RIGIK"] = 47] = "RIGIK";
    VariantIdType[VariantIdType["ROZAJ"] = 48] = "ROZAJ";
    VariantIdType[VariantIdType["RUMGR"] = 49] = "RUMGR";
    VariantIdType[VariantIdType["SCOTLAND"] = 50] = "SCOTLAND";
    VariantIdType[VariantIdType["SCOUSE"] = 51] = "SCOUSE";
    VariantIdType[VariantIdType["SOLBA"] = 52] = "SOLBA";
    VariantIdType[VariantIdType["SOTAV"] = 53] = "SOTAV";
    VariantIdType[VariantIdType["SURMIRAN"] = 54] = "SURMIRAN";
    VariantIdType[VariantIdType["SURSILV"] = 55] = "SURSILV";
    VariantIdType[VariantIdType["SUTSILV"] = 56] = "SUTSILV";
    VariantIdType[VariantIdType["TARASK"] = 57] = "TARASK";
    VariantIdType[VariantIdType["UCCOR"] = 58] = "UCCOR";
    VariantIdType[VariantIdType["UCRCOR"] = 59] = "UCRCOR";
    VariantIdType[VariantIdType["ULSTER"] = 60] = "ULSTER";
    VariantIdType[VariantIdType["UNIFON"] = 61] = "UNIFON";
    VariantIdType[VariantIdType["VAIDIKA"] = 62] = "VAIDIKA";
    VariantIdType[VariantIdType["VALENCIA"] = 63] = "VALENCIA";
    VariantIdType[VariantIdType["VALLADER"] = 64] = "VALLADER";
    VariantIdType[VariantIdType["WADEGILE"] = 65] = "WADEGILE";
})(exports.VariantIdType || (exports.VariantIdType = {}));
var VariantIdType = exports.VariantIdType;
(function (VersionEnum) {
    VersionEnum[VersionEnum["V1_0_0"] = 0] = "V1_0_0";
    VersionEnum[VersionEnum["V2_0"] = 1] = "V2_0";
    VersionEnum[VersionEnum["V3_0"] = 2] = "V3_0";
    VersionEnum[VersionEnum["V4_0"] = 3] = "V4_0";
})(exports.VersionEnum || (exports.VersionEnum = {}));
var VersionEnum = exports.VersionEnum;
(function (WebServiceTypeEnum) {
    WebServiceTypeEnum[WebServiceTypeEnum["SOAP"] = 0] = "SOAP";
    WebServiceTypeEnum[WebServiceTypeEnum["REST"] = 1] = "REST";
    WebServiceTypeEnum[WebServiceTypeEnum["OTHER"] = 2] = "OTHER";
})(exports.WebServiceTypeEnum || (exports.WebServiceTypeEnum = {}));
var WebServiceTypeEnum = exports.WebServiceTypeEnum;
//# sourceMappingURL=openminted-model.js.map