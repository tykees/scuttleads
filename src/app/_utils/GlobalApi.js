import { gql, request } from 'graphql-request'

const MASTER_URL ="https://eu-west-2.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master"

const getAllAdsPlan=async()=>{
    const query=gql`
    query MyQuery {
      adsplans {
        cost
        id
        name
      }
    }
    `
    const result=await request(MASTER_URL, query)
    return result;
}

const createAds = async (email, name) => {
  const query = gql`
    mutation CreateUserAdsPlan($email: String!, $name: String!) {
      createUseradsplan(data: {name: $name, userEmail: $email}) {
        id
        name
        userEmail
      }
    }
  `;

  const variables = {
    email: email,
    name: name
  };

  const result = await request(MASTER_URL, query, variables);
  return result;
};

const createSite = async (email, name) => {
  const query = gql`
    mutation CreateUsersiteRequest($email: String!, $name: String!) {
      createUsersiterequest(data: {name: $name, userEmail: $email}) {
        id
        name
        userEmail
      }
    }
  `;

  const variables = {
    email: email,
    name: name
  };

  const result = await request(MASTER_URL, query, variables);
  return result;
};


const getUserAllAdsPlan=async(email)=>{
  const query=gql`
  query MyQuery {
    useradsplans(where: {userEmail: "`+email+`"}) {
      userEmail
      id
      name
    }
  }
  `
  const result=await request(MASTER_URL, query)
  return result;
}



export default {
  getAllAdsPlan,
  createAds,
  getUserAllAdsPlan,
  createSite
}


