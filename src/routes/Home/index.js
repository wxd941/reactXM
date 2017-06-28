import React,{Component} from 'react';
import { Carousel,WingBlank,Icon,NavBar } from 'antd-mobile';
import ShopList from "../../components/Shoplist"
import './index.css'





class Home extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
    listData:[]
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    
    fetch("/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=40&page_start=0/").then(res=>res.json()).then(data=>{
    console.log(data.subjects)
        //保存在state里面
       
            this.setState({
            listData:data.subjects
        })
       
	})
    
    
  }
  
  
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
    	<div className="home-page">
    	<NavBar 
      mode="dark"     
      iconName={null}
    >首页</NavBar>
      <WingBlank>
        
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
//        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//        afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <ShopList listData={this.state.listData} />
      </div>
    );
  }
}

export default Home