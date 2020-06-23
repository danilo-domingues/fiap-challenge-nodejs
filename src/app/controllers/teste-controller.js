

class TesteController{
    constructor(){}

async getTest(request, response){

    try{

    return response.status(201).send("funcionou");

    }
    catch(error){
        return response.status(500).send(error);
    }
  }   
}

module.exports = new TesteController();