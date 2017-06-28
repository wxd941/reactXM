import React,{Component} from "react"
import "./index.css"
//无状态的组件，存组件（views）

const ShopList = function(props){
    //props 给组件传递参数
   // const {listData} = {listdata:[]}//props (结构赋值)
   //props.listData 商品数据

    return (
        <div class="shop-kuang">
            <ul className="shop-list">
                {
                	
                    props.listData.map((ele,index)=>{
                    	
                    	
                        return index<8?<li key={index}>
                        <a href={ele.url}>
                            <img src={ele.cover}/>
                            <p>{ele.title.substring(0,4) + "..."}</p>
                        </a>
                        </li>:''
                    })
                }
             
            </ul>
        </div>
         
    )
}

export default ShopList