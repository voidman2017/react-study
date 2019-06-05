import React, { PureComponent } from 'react';
import { connectRedux } from "../../reducers/tool";
import { ConnectScroll } from "../component/listScroll";
import API from '../../api';

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
        api : API.USER.PRODUCT.LIST,
        params : { pageIndex : "1", pageSize : "3" },  //(可选)默认值无
        elemt : "test",
        pSize : "pageSize",     //(可选)默认值 pageSize
        pIndex : "pageIndex",   //(可选)默认值 pageIndex
        str : "data.list",
        namespace : "product.list",
    }
    render(){
        return (
            <div id="test" style={{ height:"670px", overflow : "scroll" }}>
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
            super(props)
        }
        screen(){
            this.props.destoryClear();
            this.props.request({ pageSize : 10, pageIndex : 1 })
        }
        render(){
            const { list = [ ] } = this.props;
            return (
                <div className="">
                    <div style={{ width : "60px", height : "60px", backgroundColor : "#cfcfcf" }} onClick={ this.screen.bind(this) }>点我筛选</div>
                    {
                        list.map(( item, index ) => {
                            return <div style={{ height:"240px", marginBottom : "10px", backgroundColor : "#e2e2e2" }} key={ item.id + index }>{item.id}</div>
                        })
                    }
                </div>
            )
        }
    }
)

export default ScrollLoadPage;