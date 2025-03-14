import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import {useEffect} from "react"
import { getApiConfiguration, getGenres  } from "./store/homeSlice";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


import Home from "./pages/home/Home";
import Details from "./pages/details/Details"
import PageNotFound from "./pages/404/pageNotFound"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from "./pages/explore/Explore";

function App() {


  const dispatch=useDispatch();
  const url=useSelector((state)=>state.home.url)


  useEffect(()=>{
    fetchapiConfig();
    genresCall();
  },[]);
 
  const fetchapiConfig=()=>{
    fetchDataFromApi("/configuration").then((res)=>{
      const url={
        backdrop:res.images.secure_base_url +"original",
        poster:res.images.secure_base_url +"original",
        profile:res.images.secure_base_url +"original",
      }
      dispatch(getApiConfiguration(url))
    })
  }
  const genresCall=async ()=>{
    let promises=[];
    let endPoints=["tv","movie"];
    let allGenres={};

    endPoints.forEach((url)=>{
       promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data=await Promise.all(promises);
    data&&data.map(({genres})=>{
      return genres&&genres.map((item)=>(allGenres[item.id]=item))
    })
    dispatch(getGenres(allGenres));
  }

  return (
     <BrowserRouter>
      <Header/>
      <Routes> 
       <Route path="/" element={<Home/>}/>
       <Route path="/:mediaType/:id" element={<Details/>}/>
       <Route path="/search/:query" element={<SearchResult/>}/>
       <Route path="/explore/:mediaType" element={<Explore/>}/>
       <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
  );
}

export default App;
