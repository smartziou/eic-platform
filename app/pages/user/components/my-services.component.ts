/**
 * Created by stefania on 7/10/17.
 */
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component as OMTDComponent } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";

@Component({
    selector: 'my-services',
    templateUrl: './my-services.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyServicesComponent {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal : ConfirmationDialogComponent;

    public searchResults: SearchResults;
    public components: OMTDComponent[] = [];
    public errorMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {
        this.resourceService.getMyComponents().subscribe(
            searchResults => this.updateMyComponents(searchResults),
            error => this.handleError(<any>error));
    }

    updateMyComponents(searchResults: SearchResults) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.components.length = 0;

        for (let component of this.searchResults.results) {
            this.components.push(<OMTDComponent> component.resource);
        }

        // //update form values using URLParameters
        // for (let urlParameter of this.urlParameters) {
        //     if(urlParameter.key === 'query') {
        //         this.searchCorporaForm.get('query').setValue(urlParameter.values[0]);
        //     } else {
        //         for(let facet of this.searchResults.facets) {
        //             if(facet.field === urlParameter.key) {
        //                 //
        //                 for(let parameterValue of urlParameter.values) {
        //                     for(let facetValue of facet.values) {
        //                         if(parameterValue === facetValue.value)
        //                             facetValue.isChecked = true;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        this.pageSize = 10;
        this.currentPage = (searchResults.from / this.pageSize) + 1;
        this.totalPages = Math.ceil(searchResults.total / this.pageSize);

        if(this.currentPage == 1) {
            this.isFirstPageDisabled = true;
            this.isPreviousPageDisabled = true;
        }

        if(this.currentPage == this.totalPages) {
            this.isLastPageDisabled = true;
            this.isNextPageDisabled = true;
        }
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving user services (Server responded: ' + error + ')';
    }

    editComponent(component: OMTDComponent) {

    }

    deleteConfirmationComponent(component: OMTDComponent) {
        // this.deleteConfirmationModal.ids = [id];
        this.deleteConfirmationModal.showModal();
    }

    makePublicConfirmation(component: OMTDComponent) {

    }

    // process() {
    //
    //     sessionStorage.setItem('runApplication.application', this.component.metadataHeaderInfo.metadataRecordIdentifier.value);
    //
    //     var map: { [name: string]: string; } = { };
    //
    //     if(sessionStorage.getItem('runApplication.input')) {
    //         map['input'] = sessionStorage.getItem('runApplication.input');
    //     }
    //     if(sessionStorage.getItem('runApplication.application')) {
    //         map['application'] = sessionStorage.getItem('runApplication.application');
    //     }
    //
    //     this.router.navigate(['/runApplication', map]);
    // }
}