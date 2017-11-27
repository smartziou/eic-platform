/**
 * Created by stefania on 10/3/16.
 */

import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import "./polyfills.ts";
import "./vendors.ts";

const platform = platformBrowserDynamic();
enableProdMode();
platform.bootstrapModule(AppModule);
