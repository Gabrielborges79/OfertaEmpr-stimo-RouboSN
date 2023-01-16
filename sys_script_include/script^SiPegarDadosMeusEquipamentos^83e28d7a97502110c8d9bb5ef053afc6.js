var SiPegarDadosMeusEquipamentos = Class.create();
SiPegarDadosMeusEquipamentos.prototype = Object.extendsObject(AbstractAjaxProcessor, {


    PegarDados: function() {

      var arr = [];
 var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', gs.getUserID());
        gr.query();

        while (gr.next()) {
            var loca = gr.location;
        
        }
        var gr1 = new GlideRecord('alm_hardware');
 gr1.addEncodedQuery('install_status=6^substatus=available^model_category=81feb9c137101000deeabfc8bcbe5dc4');
 gr1.addQuery('location', loca);
        gr1.query();
		
		while(gr1.next()){
			arr.push(gr1.sys_id);
		}

        return 'sys_idIN' + arr;
    },


    type: 'SiPegarDadosMeusEquipamentos'
});