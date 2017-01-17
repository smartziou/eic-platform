/**
 * Created by stefania on 9/9/16.
 */
import {OMTDComponent, OMTDCorpus, Order, Lexical, Model, LanguageDescription} from "./openminted-model";

export class Results {

    components: Order<OMTDComponent>[];
    corpora: Order<OMTDCorpus>[];
    lexicalConceptualResources: Order<Lexical>[];
    models: Order<Model>[];
    languageDescriptions: Order<LanguageDescription>[];
}