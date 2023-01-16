var ReturnEquipamentos = Class.create();
ReturnEquipamentos.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    retornarequipamentos: function() {

        var id = this.getParameter('sysparm_id');

        var gd = new GlideRecord('alm_hardware');
        gd.addQuery('assigned_to', id);
        gd.query();
        var obj = [];

        while (gd.next()) {
            var x = gd.asset_tag;
            obj.push(x);
			var tamanhoobj = obj.length;
			if(tamanhoobj>1){
				var mensagem = "você já possui mais de um computador";
			}
        }
        return mensagem;
    },

    type: 'ReturnEquipamentos'
});