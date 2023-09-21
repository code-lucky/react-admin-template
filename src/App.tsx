
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import './App.css'
import Test from './views/index'
import Home from './views/home'

function App() {
  const RouteList = [
    {
      name: '首页',
      path: '/',  
      exact:true,
      component:Home
    },
    {
      name: 'Test',
      path: '/test',  
      exact:true,
      component:Test
    }
  ]

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
