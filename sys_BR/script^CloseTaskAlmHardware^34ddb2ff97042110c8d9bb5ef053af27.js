(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var gr = new GlideRecord('sc_task');
    var gr1 = new GlideRecord('alm_hardware');
    gr.addQuery('request_item', current.sys_id);
    gr.query();

    while (gr.next()) {

        if (current.variables.equipamento_furtado == 'false' && gr.state == 3) {
            gr1 = new GlideRecord('alm_hardware');
            gr1.addQuery('display_name', current.variables.equipamentos_dispon_veis.display_name);
            gr1.query();
            while (gr1.next()) {
                gr1.install_status = 1;
                gr1.assigned_to = current.requested_for;
                gr1.update();
            }
        } else if(current.variables.equipamento_furtado == 'true' && gr.state == 3) {
  
            gr1 = new GlideRecord('alm_hardware');
            gr1.addQuery('display_name', current.variables.meus_equipamentos.display_name);
            gr1.query();
            while (gr1.next()) {
                gr1.install_status = 8;
                gr1.substatus = 'stolen';
                gr1.update();
            }
        }

    }


})(current, previous);