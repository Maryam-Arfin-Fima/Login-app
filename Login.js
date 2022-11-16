Ext.define('apps.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',



    requires: [
        'apps.view.main.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login',
    closable: false,
    autoShow: true,


    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'user',
            fieldLabel: 'Username',
            emptyText: 'Enter fima',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'pass',
            inputType: 'password',
            fieldLabel: 'Password',
            emptyText: 'Enter 123',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            scope: this,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});