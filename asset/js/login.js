$(function () {
    // 用户名输入框
    const usernameInput = $(".username");

    // 密码输入框
    const passwordInput = $(".password");

    // 登录按钮
    const loginButton = $(".login-button");

    // 登录按钮事件
    loginButton.click(function (e) {
        e.preventDefault();

        // 用户名
        const username = usernameInput.val();

        // 密码
        const password = passwordInput.val();

        // 登录
        login(username, password);
    });

    // 登录函数
    function login(username, password) {
        // 判断信息
        if (username == null || username == '') {
            alert("请输入用户名");
        }
        else if (password == null || password == '') {
            alert("请输入密码");
        }
        else if (username == 'gnc' && password == '20240110'){
            alert("登陆成功");
            window.location.href = "heart.html";
        }
        else{
            alert("用户名或密码错误，请重新输入");
        }
    }
});
