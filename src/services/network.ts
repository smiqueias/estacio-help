import axios from 'axios';

const calledUrl = 'https://appestacioapi.herokuapp.com/api/called/findAllByStatus?status=A';

export const getRequests = async (status : string) => {
    const response = await axios.get(`https://appestacioapi.herokuapp.com/api/called/findAllByStatus?status=A`);
    console.log( response.data.results + " AQUIIII");
    return response.data.results;
  };
