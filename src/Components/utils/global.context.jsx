import { createContext, useReducer, useState, useContext, useEffect} from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'

//  const initialState = {theme: "", data: []}
 const CharStates = createContext();

const localFavs = JSON.parse(localStorage.getItem('favs'));
const initiaFavState = localFavs ? localFavs : [] 

 const Context = ({ children }) => {
  const [medicos, setMedico] = useState([])
  const [favs, setFavs] = useState(initiaFavState)
  const [theme, setTheme] = useState(true)
  const url='https://jsonplaceholder.typicode.com/users/'
  

    useEffect(()=> {
      axios(url)
      .then(res => setMedico(res.data))
      .catch(err => console(err))
    },[])

    useEffect(()=> {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])



  return (
    <CharStates.Provider value={{medicos, favs, setFavs}}>
      {children}
    </CharStates.Provider>
  );
};
export default Context

export const useCharStates = () => useContext(CharStates)