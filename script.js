function equal()
{
    d=document
    var a = Number(d.form1.A.value);
    var b = Number(d.form1.B.value);
    var q;
    if (a===b)
    {
        q="Числа равны";
    }
    else {q="Числа не равны";}
    d.form1.q.value=q;
}


function Show()
{
    d=document
    var admin, name;
    name = "SHLYAPA";
    admin = name;
    alert(admin);
}

function Age()
{
    d=document
    do {age = +prompt("Укажите ваш возраст");}
    while 
    (confirm("Вы уверены, что вам " +age)===false)
    alert("Вам " +age);
}

function Com()
{
    d=document
    let ok = confirm('Отправить данные на сервер')
    if (ok) {
        alert('Данные успешно отправлены на сервер');
    } else {
        alert('Отправка на сервер прервана!');
    }
}