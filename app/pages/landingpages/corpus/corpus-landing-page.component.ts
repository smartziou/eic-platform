/**
 * Created by stefania on 9/7/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'corpus-landing-page',
    templateUrl: 'app/pages/landingpages/corpus/corpus-landing-page.component.html',
    styleUrls:  ['app/pages/landingpages/landing-page.component.css'],
})

export class CorpusLandingPageComponent implements OnInit {

    public corpus: OMTDCorpus;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.getCorpus(id).subscribe(
                corpus => this.corpus = corpus,
                error => this.handleError(<any>error));
        });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    handleError(error) {
        this.errorMessage = 'System error loading corpus (Server responded: ' + error + ')';
    }
}