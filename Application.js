Ext.define('apps.Application', {
    extend: 'Ext.app.Application',

    name: 'apps',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {

        
        var loggedIn;

        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'loginform' : 'loginform'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});