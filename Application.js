Ext.define('apps.Application', {
    extend: 'Ext.app.Application',

    name: 'apps',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {

        
        var loggedIn;

        loggedIn = localStorage.getItem("TutorialLoggedIn");

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