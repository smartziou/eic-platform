"use strict";
var router_1 = require('@angular/router');
var component_landing_page_component_1 = require("./component/component-landing-page.component");
var corpus_landing_page_component_1 = require("./corpus/corpus-landing-page.component");
var landingPageRoutes = [
    {
        path: 'landingPage/component/:id',
        component: component_landing_page_component_1.ComponentLandingPageComponent,
    },
    {
        path: 'landingPage/corpus/:id',
        component: corpus_landing_page_component_1.CorpusLandingPageComponent,
    },
];
exports.landingPageRouting = router_1.RouterModule.forChild(landingPageRoutes);
//# sourceMappingURL=landing-page.routing.js.map