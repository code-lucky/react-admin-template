
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import './App.css'
import RouteList from './router/index'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("模拟componentDidMount，即只运行一次该函数");
  }, [])

  return <div>
    <Router>
      <Routes>
        {RouteList.map((item,index)=>{
          return(
            <Route key={index} path={item.path} Component={item.component}/>
          )
        })}
      </Routes>
    </Router>
  </div>
}

export default App
