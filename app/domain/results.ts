/**
 * Created by stefania on 9/9/16.
 */
import {OMTDComponent, OMTDCorpus, Order} from "./openminted-model";

export class Results {

    components: Order<OMTDComponent>[];
    corpora: Order<OMTDCorpus>[];
}