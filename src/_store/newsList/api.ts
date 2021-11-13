import { Article } from "../../_model";

import { getRequest } from "../../_network/api";

import { newsListEndPoint } from "../../_network/endpoints";

import { Network } from "../../_global/constant";



export async function getNewsList(): Promise<Article|undefined> {

 //?country=cu&language=es&apiKey=33b6de14b85345a8b0142a85128ffe59

  let params: any = {
    country: 'cu',  
    language: 'es',
    apiKey: Network.apiKey
  };


  return await getRequest(newsListEndPoint, params );
  

}


