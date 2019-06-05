import React, { PureComponent } from 'react';
import { connectRedux } from "../reducers/tool";
import { ConnectScroll } from "@lib/loadmore";

class ScrollLoadPage extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return <ScrollList { ...this.props } />
    }
}

class ScrollList extends PureComponent{
    constructor(props){
        super(props)
    }
    opts = {
        api : { url: 'https://easy-mock.com/mock/5c1670f94bc5e34fe40b2a7e/example/products/list' ,type:'get'},
        params : { pageIndex : "1", pageSize : "3", type: '华为' },  //(可选)默认值无
        elemt : "test",
        pSize : "pageSize",     //(可选)默认值 pageSize
        pIndex : "pageIndex",   //(可选)默认值 pageIndex
        str : "data.list",
        namespace : "product.list",
    }
    render(){
        return (
            <div id="test" style={{ height: "670px", overflow: "scroll" }}>
                <ConnectScroll { ...this.opts } >
                    <ProductList />
                </ConnectScroll>
            </div>
        )
    }
}

const ProductList = connectRedux([
    "product.list.data:list"
])(
    class Container extends PureComponent{
        constructor(props){
            super(props);
            this.state = {
                selectShow:false
            }
        }
        productType = ['华为','小米','苹果','三星','索尼'] 
        selectShow(){
            this.setState({
                selectShow: true
            })
        }
        screen(type,e){
            e.stopPropagation();
            this.props.destoryClear();
            this.props.request({ pageSize: 10, pageIndex: 1, type: type });
            this.setState({
                selectShow: false
            })
        }
        render(){
            const { list = [ ] } = this.props;
            return (
                <div className="">
                    <div style={{ backgroundColor: "#cfcfcf", position: "fixed", top: '0', left: '0' }} onClick={ this.selectShow.bind(this) }>
                        点我筛选
                        {
                            this.state.selectShow && 
                            <ul>
                                {
                                    this.productType.map((type,index)=><li key={index} onClick={ this.screen.bind(this,type) }>{type}</li>)
                                }
                            </ul>
                        }
                        
                    </div>
                    {
                        list.map(( item, index ) => {
                            return <div style={{ height: "240px", marginBottom: "10px", backgroundColor: "#e2e2e2" }} key={ item.id + index }>{item.id}</div>
                        })
                    }
                </div>
            )
        }
    }
)

export default ScrollLoadPage;