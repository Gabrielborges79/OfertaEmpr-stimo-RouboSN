var SIDadosUser = Class.create();
SIDadosUser.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    Carregardados: function() {

        var arr = [];
 

       
        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', gs.getUserID());
        gr.query();

        // gs.print(gs.getUserID());
        while (gr.next()) {

            var mgr = gr.getValue('manager');
            var email = gr.getValue('email');
			var department = gr.getValue('department');
			var obj = {}; // define the array
		obj["mgr"] = mgr; //set the manager in the array
		obj["email"] = email; //set the location in the array
			obj["department"] = department;
        }
        // var arr = JSON.parse(obj);

       return JSON.stringify(obj);

    },

    type: 'SIDadosUser'
});