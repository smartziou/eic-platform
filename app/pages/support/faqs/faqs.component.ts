/**
 * Created by stefania on 6/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FAQService } from "../../../services/faq.service";
import { ActiveTopicQuestions } from "../../../domain/faq-active-topic-questions";

@Component({
    selector: 'faqs',
    templateUrl: './faqs.component.html',
    styles: ['h3.uk-accordion-title { text-transform: none; }']

})

export class FAQsComponent implements OnInit {

    private activeTopicQuestions: ActiveTopicQuestions[] = [];
    private errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private faqService: FAQService) {}

    ngOnInit() {
        this.faqService.getActiveTopicQuestions().subscribe(
            activeTopicQuestions => this.activeTopicQuestions = activeTopicQuestions,
            error => this.handleError(<any>error));
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving FAQs (Server responded: ' + error + ')';
    }
}