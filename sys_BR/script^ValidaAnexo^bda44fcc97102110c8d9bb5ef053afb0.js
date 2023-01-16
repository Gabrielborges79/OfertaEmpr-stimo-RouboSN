(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here

    if (current.variables.equipamento_furtado == 'true') {
		//gs.addErrorMessage('teste');

        var attachment = new GlideSysAttachment();
        var agr = attachment.getAttachments('ZZ_YYsc_req_item', current.sys_id);
        while (agr.next()) {
            var pegarcontenttype = agr.getValue('content_type');
			//gs.addInfoMessage(pegarcontenttype);
            if (pegarcontenttype != 'application/pdf') {
				//gs.addInfoMessage('Anexo não está em pdf');
                current.state = 4;
                current.comments = "Requisição sem autorização em PDF";
				
            }

        }



    }


})(current, previous);