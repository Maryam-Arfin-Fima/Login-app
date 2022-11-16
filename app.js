/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'apps.Application',

    name: 'apps',

    requires: [
        // This will automatically load all classes in the apps namespace
        // so that application classes do not need to require each other.
        'apps.*'
    ],

    // The name of the initial view to create.
    mainView: 'apps.view.main.Login'
});
