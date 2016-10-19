"use strict";
var router_1 = require('@angular/router');
var component_registration_component_1 = require("./component-registration.component");
var component_registration_xml_component_1 = require("./component-registration-xml.component");
var componentRegistrationRoutes = [
    {
        path: 'resourceRegistration/component',
        component: component_registration_component_1.ComponentRegistrationComponent
    },
    {
        path: 'resourceRegistration/component/xml',
        component: component_registration_xml_component_1.ComponentRegistrationXMLComponent
    }
];
exports.componentRegistrationRouting = router_1.RouterModule.forChild(componentRegistrationRoutes);
//# sourceMappingURL=component-registration.routing.js.map