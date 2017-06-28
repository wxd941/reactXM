import React,{Component} from "react"
import {Link} from "react-router"
import "./index.css"
//无状态的组件，存组件（views）
const Tabs = function(props){

    return (
        <div>
            {props.children}
            <ul className="tabs">
               <li key={0}><Link to="/">首页</Link></li>
               <li key={1}><Link to="/cart">购物车</Link></li>
               <li key={2}><Link to="/list">列表</Link></li>
            </ul>
       </div>
    )
}

export default Tabs