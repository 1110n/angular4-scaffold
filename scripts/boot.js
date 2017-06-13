// We need to reference a type definition (or 'typings') file 
// to let TypeScript recognize the Angular "promise" function
// (we'll need this later on) otherwise we'll get compile errors.
//  <reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register(["@angular/platform-browser-dynamic", "./app.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {// We need to reference a type definition (or 'typings') file 
            // to let TypeScript recognize the Angular "promise" function
            // (we'll need this later on) otherwise we'll get compile errors.
            //  <reference path="../node_modules/angular2/typings/browser.d.ts" />
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=boot.js.map