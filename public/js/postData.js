
function postData(event){
    console.log("hello");
    event.preventDefalut();
    const form = event.target;
    //CONNECT INPUT FIELDS
    const phone = form.phone;
    const password = form.password;
    //GET INPUT FIELD VALUES
    const phone_value = form.phone.value;
    const password_value = form.password.value;

    let data = {phone_value,password_value};

    
    actionLogin(data)
}

async function actionLogin(data){
    fetch('http://localhost:3000/api/login',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result=>{
        console.log(result)
    })
}




