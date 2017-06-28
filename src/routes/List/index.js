import Header from "../../components/Header"
import React,{Component} from "react"
import { Icon,NavBar } from 'antd-mobile';
import "./index.css"
class List extends Component {
	state={
		listData:[]
	}
    render(){
        return (
            <div>
                <NavBar>列表</NavBar>
                <div>
                      <ul className="shop-list">
                {
                	
              this.state.listData.map((ele,index)=>{
                    	
                    	
                        return <li key={index}>
                        <a href={ele.url}>
                            <img src={ele.cover}/>
                            <p>{ele.title.substring(0,4) + "..."}</p>
                        </a>
                        </li>
                    })
                }
             
            </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
    	fetch("/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=60&page_start=1/").then(res=>res.json()).then(data=>{
    console.log(data.subjects)
        //保存在state里面
       
            this.setState({
            listData:data.subjects
        })
       
	})
    }
}
export default List