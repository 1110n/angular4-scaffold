// SystemJS is the module loader for the application. 
// It loads the libraries and our modules and then catches and logs errors, 
// that may occur during the app launch.
System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    'app': 'scripts',
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles//platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    'rxjs': 'node_modules/rxjs',

  },
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }

  }
});
System.import('scripts/boot')
  .then(null, console.error.bind(console));