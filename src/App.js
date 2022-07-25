import { useEffect, useState } from "react";
import Filter from "./components/filter";
import Header from "./components/header";
import List from "./components/list";
import list from "./data/data.json";

console.log(list.data.nodes);

function App() {
  const [data, setData] = useState(list.data.nodes);
  const [catFilter, setCatFilter] = useState("");
  const [nameFilter,setNameFilter]= useState("");
  const [genderFilter,setGenderFilter]= useState("");
  const [state,isSelected]=useState("")
  const setSelected = () =>{
    console.log('funfando');
      if(!state){
        isSelected(true)
        return
      }
      isSelected("")
      
  }
  const desSelect = () =>{
      isSelected(false)
  }

  const filterCat = fillData =>{
    if(!catFilter) return fillData
    const filteredCat = fillData.filter(dataCat => dataCat.category.name === catFilter);
    return filteredCat;
  }

  const filterString = (fillData,filterHook) =>{
    if(!filterHook) return fillData
    const filteredName = fillData.filter(dataName =>dataName.name.toLowerCase().includes(filterHook.toLowerCase()));
    return filteredName;
  }

  const selectChange = (evt)=>{
    setCatFilter(evt.target.value);
  }

  const nameChange = (evt)=>{
    setNameFilter(evt.target.value);
  }
  const genderChange = (evt)=>{
    setGenderFilter(evt.target.value);
  }

  useEffect(() => {
    let fillDat = filterCat(list.data.nodes);
    fillDat = filterString(fillDat,nameFilter);
    fillDat = filterString(fillDat,genderFilter);
    setData(fillDat);
  }, [catFilter,nameFilter,genderFilter])
  
  
  return (
    <>
      <h1>Listagem de items - app_v1</h1>
      <Header button={{state,setSelected,desSelect}}>
        <Filter data={list.data.nodes} teste="teste" show={state} functions={{selectChange,nameChange,genderChange}} />
      </Header>
      <div className="container">
        <List data={data}/>
      </div>
    </>
  );
}

export default App;
