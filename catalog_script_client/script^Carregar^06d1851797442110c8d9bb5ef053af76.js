function onLoad() {
    //Type appropriate comment here, and begin script below

    g_form.setValue('user_name', g_user.userID);
    g_form.setValue('first_name', g_user.firstName);
    g_form.setValue('last_name', g_user.lastName);
    g_form.setValue('user_id', g_user.userID);


    var ga = new GlideAjax('SIDadosUser');
    ga.addParam('sysparm_name', 'Carregardados');
	ga.addParam('sysparm_id', g_user.userID);
    ga.getXML(democall);


    function democall(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
		answer = JSON.parse(answer);
        g_form.setValue('department', answer.department);
        g_form.setValue('email', answer.email);
		g_form.setValue('aprovador', answer.mgr);
    }

}