import React ,{useContext, useEffect, useState} from 'react';

// use context is like a warehouse
// provider is like a dilevery person 

export const API_Url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({show:"false", msg:""})
    const [query, setQuery] = useState("Avengers")

    const getMovies = async(url)=>{
try{
const res = await fetch(url);
const data = await res.json()
console.log(data);

if(data.Response === 'True'){
    setIsLoading(false)
    setMovie(data.Search)
}else{
setIsError({
    show: true,
    msg: data.error,
})
}
}

catch(error){
    console.log(error)
}
    }

    useEffect(() => {
     getMovies(`${API_Url}&s=${query}`);
    
    }, [query]);
    
    
    return <AppContext.Provider value= {{isError,isLoading,movie,setQuery}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider , useGlobalContext}