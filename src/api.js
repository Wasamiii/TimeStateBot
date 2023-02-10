const axios = require('axios');
class Api{
    constructor(){
        this.url = "https://api.warframestat.us/pc/";
    }
    async callApi(){
        let api = await axios.get(this.url,
            { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
            });
        return api;
    }
}

this.GetAllApi = () => {
    let api = new Api();
    //call api
    let responseApi = api.callApi();
    responseApi.then(res =>{
        console.log(res.data);
        console.log('je suis dans le if');
    })
    .catch(err =>{
        console.log(err);
        console.log(err.status);
        console.log('je suis dans le else');
    })
};
this.GetAllApi();