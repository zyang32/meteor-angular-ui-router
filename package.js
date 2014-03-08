Package.describe({
    summary: "angular-ui-router, the de-facto solution to flexible routing with nested views."
});

function isPackageExists(pkgname) {
    var fs = Npm.require('fs');
    var path = Npm.require('path');
    var pkgpath = path.join('packages', pkgname);
    return fs.existsSync(pkgpath);
}

Package.on_use(function(api) {
    api.use('bower', 'client');

    if (isPackageExists('angularite')) {
        api.use('angularite', 'client');
    } else if (isPackageExists('ngMeteor')) {
        api.use('ngMeteor', 'client', {weak: true});
    }

    // Install bower components.
    api.add_files('smart.json', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});
