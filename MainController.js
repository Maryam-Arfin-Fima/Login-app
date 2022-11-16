Ext.define('apps.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButton: function () {


        this.getView().destroy();

                    Ext.Msg.alert('','Logged out successfully', function() {



                    localStorage.removeItem("TutorialLoggedIn", true);


                    window.location.reload();             
                        
                    });

        
        
    }
});