function getcookie()
{
    const cookie = document.cookie;
    return cookie;
    
}
function anything()
{
    let cookie = getcookie()
    let cookievalue = cookie.split('=')[2]
    console.log(cookie);
    let datapase = {}
    datapase.cookie = cookievalue;
    console.log(datapase);
    if(cookie)
    {
        fetch(`http://localhost:8000/home`, {
        method: "post", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(datapase) 
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
}
anything()