import { gql, request } from 'graphql-request'

const MASTER_URL ="https://eu-west-2.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllAdsPlan=async()=>{
    const query=gql`
    query MyQuery {
        adsplans {
          id
          name
        }
      }
    `
    const result=await request(MASTER_URL, query)
    return result;
}

export default {
  getAllAdsPlan
}