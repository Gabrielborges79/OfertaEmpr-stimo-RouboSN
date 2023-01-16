(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here

    var gd = new GlideRecord('sys_user');
    gd.addEncodedQuery('u_grupo_userINanalistas,coordenadores,gerentes,diretores');
    gd.query();

    while (gd.next()) {
        var grrole = new GlideRecord("sys_user_has_role");
        grrole.initialize();
        grrole.user = gd.sys_id;
		
        if (gd.u_grupo_user == 'analistas') {
            grrole.role = 'f51c927f97802110c8d9bb5ef053afd1';
			grrole.insert();
        } else if (gd.u_grupo_user == 'coordenadores') {
            grrole.role = 'e19c1a7f97802110c8d9bb5ef053af70';
			grrole.insert();
        } else if (gd.u_grupo_user == 'gerentes') {
            grrole.role = 'd03fb93397402110c8d9bb5ef053afdd';
			grrole.insert();
        } else if (gd.u_grupo_user == 'diretores') {
            grrole.role = '7cdc9e7f97802110c8d9bb5ef053af1a';
			grrole.insert();
        }

    }


})(current, previous);