"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home/home.component');
var search_component_1 = require("./pages/search/search.component");
var support_component_1 = require("./pages/support/support.component");
var component_landing_page_component_1 = require("./pages/landingpages/component/component-landing-page.component");
var corpus_landing_page_component_1 = require("./pages/landingpages/corpus/corpus-landing-page.component");
var login_component_1 = require("./pages/user/signin/login.component");
var register_component_1 = require("./pages/user/register/register.component");
var edit_profile_component_1 = require("./pages/user/editprofile/edit-profile.component");
var can_activate_auth_guard_service_1 = require("./services/can-activate-auth-guard.service");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'support',
        component: support_component_1.SupportComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'editProfile',
        component: edit_profile_component_1.EditProfileComponent,
        canActivate: [
            can_activate_auth_guard_service_1.CanActivateViaAuthGuard
        ]
    },
    {
        path: 'landingPage/component/:id',
        component: component_landing_page_component_1.ComponentLandingPageComponent,
    },
    {
        path: 'landingPage/corpus/:id',
        component: corpus_landing_page_component_1.CorpusLandingPageComponent,
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map