import { useState, useEffect } from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const nations = useSelector((state) => 
  {
    return state.nations;
  });


  useEffect(() => {
    users.length = 0;
    fetchUsers();
  }, [nations]);


  
  useEffect(() => {
    fetchUsers();
  }, []);

  
  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api`,{
      params: {
        results: 25,
        page: 1,
        nat: nations.length !== 0 ? nations.join() : '',
      },
    })
    setIsLoading(false);
    setUsers([...users, ...response.data.results]);
  }

  return { users, isLoading };
};
