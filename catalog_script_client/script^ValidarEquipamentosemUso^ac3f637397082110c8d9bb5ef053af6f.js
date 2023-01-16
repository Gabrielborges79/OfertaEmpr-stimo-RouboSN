function onLoad() {
    //Type appropriate comment here, and begin script below

    var ga = new GlideAjax('ReturnEquipamentos');
    ga.addParam('sysparm_name', 'retornarequipamentos');
    ga.addParam('sysparm_id', g_form.getValue('user_name'));
    ga.getXML(democall);


    function democall(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer) {
            g_form.showFieldMsg('equipamentos_dispon_veis', answer, 'error');
            g_form.setReadOnly('equipamentos_dispon_veis', true);
        }
    }


}