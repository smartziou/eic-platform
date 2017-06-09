/**
 * Created by stefania on 6/7/17.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from "../../../services/resource.service";
import { URLParameter } from "../../../domain/url-parameter";
import { Subscription } from "rxjs/Subscription";
import { transform } from "../../../domain/utils";
import { Component as OMTDComponent} from "../../../domain/openminted-model";
import { Corpus as OMTDCorpus} from "../../../domain/openminted-model";

@Component({
    selector: 'run-application',
    templateUrl: './run-application.component.html',
    styleUrls:  ['./run-application.component.css'],
})

export class RunApplicationComponent {

    private errorMessage: string;
    private sub: Subscription;

    private urlParameters: URLParameter[] = [];

    private foundResults = true;

    public corpus: OMTDCorpus;
    public component: OMTDComponent;

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {

    }

    ngOnInit() {

        this.sub = this.activatedRoute
            .params
            .subscribe(params => {

                this.urlParameters.splice(0,this.urlParameters.length);
                this.foundResults = true;

                for (var obj in params) {
                    if (params.hasOwnProperty(obj)) {
                        var urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };
                        this.urlParameters.push(urlParameter);
                        // console.log(urlParameter);
                    }
                }

                console.log(this.urlParameters);

                //request selected resources from the registry
                for (let urlParameter of this.urlParameters) {
                    if(urlParameter.key === 'corpus') {
                        sessionStorage.setItem(urlParameter.key, urlParameter.values[0]);
                        this.resourceService.getCorpus(urlParameter.values[0]).subscribe(
                            corpus => this.corpus = corpus,
                            error => this.handleError(<any>error));
                    }
                    if(urlParameter.key === 'application') {
                        sessionStorage.setItem(urlParameter.key, urlParameter.values[0]);
                        this.resourceService.getComponent(urlParameter.values[0]).subscribe(
                            component => {this.component = component; transform(this.component)},
                            error => this.handleError(<any>error));
                    }
                }
            });
    }

    handleError(error) {
        this.errorMessage = 'System error loading resource (Server responded: ' + error + ')';
    }
}