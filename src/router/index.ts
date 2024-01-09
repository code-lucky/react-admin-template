import Test from '../views/index'
import Home from '../views/home'
import Aaa from '../views/aaa'

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
    },{
        name: 'Aaa',
        path: '/aaa',
        component: Aaa
    }
]

export default RouteList