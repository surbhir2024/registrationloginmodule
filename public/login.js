function validatelogin()
{
    let err = true;
    let loginputclass = document.querySelectorAll('.reqifield');
    let logspanclass = document.querySelectorAll('.reqerr');
    if (loginputclass.length > 0) {
        for (var i = 0; i < loginputclass.length; i++) {
            if (loginputclass[i].value.length == 0) {
                logspanclass[i].innerHTML = "* required";
                err = false;
            }
        }
    }
    if(err)
    {
        logindatacheck()
    }
}
function logindatacheck(){
    let logindataobj = {}
    logindataobj.uname = document.getElementById('uname').value;
    logindataobj.pass = document.getElementById('pass').value;

    fetch(`http://localhost:8000/logindata`, {
        method: "post", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(logindataobj)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(dataobj => {
            console.log(dataobj);
            showresult(dataobj.error);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}
function showresult(resobj)
{
    console.log(resobj);
    if(resobj === "Success")
    {
       document.getElementById('myModal').style.display = "block";
    }
    if(resobj === "Error")
    {
        alert("Login is not Success")
    }
    if(resobj === "user wrong")
    {
        alert("Login is not Success")
    }
}