
import React, { PureComponent } from 'react';


class NormalRedux extends PureComponent {
    render() {
        return (
            <div>
                <OutBtn />
            </div>
        )
    }
}


class OutBtn extends PureComponent {
    click() {
        alert('out')
    }
    render() {
        return <div style={{background:'red',padding:'20px'}} onClick={this.click.bind(this)} className="out-btn" >
            outbtn
                    <InnerBtn />
        </div>
    }
}

class InnerBtn extends PureComponent {
    click(num, n, e) {
        console.log(num)
        console.log(n)
        alert('inner')
        e.stopPropagation();
        return false;
    }
    render() {
        return <div style={{background:'blue'}} onClick={this.click.bind(this, 1, 2)} className="inner-btn">innerbtn</div>
    }
}


export default NormalRedux