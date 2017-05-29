/**
 * Created by stefania on 9/9/16.
 */
import {Component, Corpus, Order, Lexical, Model, LanguageDescription} from "./openminted-model";

export class Results {

    components: Order<Component>[];
    corpora: Order<Corpus>[];
    lexicalConceptualResources: Order<Lexical>[];
    models: Order<Model>[];
    languageDescriptions: Order<LanguageDescription>[];
}