var config = {
    baseNodeApiUrl: 'http://localhost:4000/api/'
}

const callApi = async function(path){
    const response = await fetch( `${config.baseNodeApiUrl}${path}`,  {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const body = await response.json();  
    if (response.status !== 200) throw Error(body.message); 
    return body;
};

export default callApi;
