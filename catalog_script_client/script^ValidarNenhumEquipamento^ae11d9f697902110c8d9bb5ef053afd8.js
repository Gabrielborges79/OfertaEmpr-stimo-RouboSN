function onLoad() {
    //Type appropriate comment here, and begin script below

    var clap = new GlideAjax("SiPegarDadosMeusEquipamentos");
    clap.addParam('sysparm_name', 'PegarDados');
    clap.getXML(democall);

    function democall(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer =='sys_idIN') {
            //alert(answer);
            g_form.setValue('nenhum_equipamento_dispon_vel', true);
			g_form.showFieldMsg('equipamentos_dispon_veis','O fluxo seguirá para análise do time de Governança de TI (ITAM) para agilizar o processo de compra', 'error');
        }

    }
}