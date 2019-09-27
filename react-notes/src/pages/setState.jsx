import React, { Component, PureComponent } from 'react';

class SetState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comp: State1
        }
        this.buttonlist = [
            {
                comp: State1,
                str: 'Component + componentWillMount + this.setState({  num : this.state.num + 1  })'
            },
            {
                comp: State2,
                str: 'PureComponent + componentWillMount + this.setState({  num : this.state.num + 1  })'
            },
            {
                comp: State3,
                str: 'Component + componentDidMount + this.setState({  num : this.state.num + 1  })'
            },
            {
                comp: State4,
                str: 'PureComponent + componentDidMount + this.setState({  num : this.state.num + 1  })'
            },
            {
                comp: State5,
                str: 'Component + componentWillMount + this.setState({  num : this.state.num ++  })'
            },
            {
                comp: State6,
                str: 'PureComponent + componentWillMount + this.setState({  num : this.state.num ++  })'
            },
            {
                comp: State7,
                str: 'Component + componentDidMount + this.setState({  num : this.state.num ++  }) '
            },
            {
                comp: State8,
                str: 'PureComponent + componentDidMount + this.setState({  num : this.state.num ++  }) '
            },
            {
                comp: State9,
                str: 'Component + componentWillMount + this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State10,
                str: 'PureComponent + componentWillMount + this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State11,
                str: 'Component + componentDidMount + this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State12,
                str: 'PureComponent + componentDidMount + this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State13,
                str: 'Component + componentWillMount + setTimeout +  this.setState({  num : this.state.num+1 }) '
            },
            {
                comp: State14,
                str: 'PureComponent + componentWillMount + setTimeout +  this.setState({  num : this.state.num+1 }) '
            },
            {
                comp: State15,
                str: 'Component + componentDidMount + setTimeout +  this.setState({  num : this.state.num+1   }) '
            },
            {
                comp: State16,
                str: 'PureComponent + componentDidMount + setTimeout +  this.setState({  num : this.state.num+1   }) '
            },
            {
                comp: State17,
                str: 'Component + componentWillMount + setTimeout +  this.setState({  num : this.state.num++ })'
            },
            {
                comp: State18,
                str: 'PureComponent + componentWillMount + setTimeout +  this.setState({  num : this.state.num++ })'
            },
            {
                comp: State19,
                str: 'Component + componentDidMount + setTimeout +  this.setState({  num : this.state.num++   })'
            },
            {
                comp: State20,
                str: 'PureComponent + componentDidMount + setTimeout +  this.setState({  num : this.state.num++   })'
            },
            {
                comp: State21,
                str: 'Component + componentWillMount + setTimeout +  this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State22,
                str: 'PureComponent + componentWillMount + setTimeout +  this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State23,
                str: 'Component + componentDidMount + setTimeout +  this.setState({  num : ++this.state.num   }) '
            },
            {
                comp: State24,
                str: 'PureComponent + componentDidMount + setTimeout +  this.setState({  num : ++this.state.num   }) '
            },
        ]
    }

    changeComp(comp) {
        this.setState({
            comp: comp
        })
    }
    render() {
        return (
            <div>
                <this.state.comp />
                {
                    this.buttonlist.map((item, index) => <Button key={index} changeComp={this.changeComp.bind(this)}  {...item} />)
                }
            </div>
        )
    }
}

class Button extends Component {
    render() {
        const { changeComp, str, comp } = this.props
        return (
            <div><button onClick={() => changeComp(comp)}>{str}</button></div>
        )
    }
}

// Component + componentWillMount + this.setState({  num : this.state.num + 1  })  
class State1 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: this.state.num + 1
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// PureComponent + componentWillMount + this.setState({  num : this.state.num + 1  })  
class State2 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: this.state.num + 1
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {

    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentDidMount + this.setState({  num : this.state.num + 1  })
class State3 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.setState({
            num: this.state.num + 1
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentDidMount + this.setState({  num : this.state.num + 1  })
class State4 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({
            num: this.state.num + 1
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentWillMount + this.setState({  num : this.state.num ++  })  
class State5 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: this.state.num++
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentWillMount + this.setState({  num : this.state.num ++  })  
class State6 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: this.state.num++
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// Component + componentDidMount + this.setState({  num : this.state.num ++  }) 
class State7 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({
            num: this.state.num++
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// PureComponent + componentDidMount + this.setState({  num : this.state.num ++  }) 
class State8 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({
            num: this.state.num++
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// Component + componentWillMount + this.setState({  num : ++this.state.num   }) 
class State9 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: ++this.state.num
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentWillMount + this.setState({  num : ++this.state.num   }) 
class State10 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        this.setState({
            num: ++this.state.num
        })
        console.log('after-changestate', this.state)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentDidMount + this.setState({  num : ++this.state.num   }) 
class State11 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({
            num: ++this.state.num
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentDidMount + this.setState({  num : ++this.state.num   }) 
class State12 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.setState({
            num: ++this.state.num
        })
        console.log('after-changestate', this.state)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// Component + componentWillMount + setTimeout +  this.setState({  num : this.state.num+1 }) 
class State13 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentWillMount + setTimeout +  this.setState({  num : this.state.num+1 }) 
class State14 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// Component + componentDidMount + setTimeout +  this.setState({  num : this.state.num+1   }) 
class State15 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentDidMount + setTimeout +  this.setState({  num : this.state.num+1   }) 
class State16 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentWillMount + setTimeout +  this.setState({  num : this.state.num++   }) 
class State17 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num++
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// PureComponent + componentWillMount + setTimeout +  this.setState({  num : this.state.num++   }) 
class State18 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num++
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}


// Component + componentDidMount + setTimeout +  this.setState({  num : this.state.num++   }) 
class State19 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num++
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentDidMount + setTimeout +  this.setState({  num : this.state.num++   }) 
class State20 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: this.state.num++
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentWillMount + setTimeout +  this.setState({  num : ++this.state.num   }) 
class State21 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: ++this.state.num
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {

    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentWillMount + setTimeout +  this.setState({  num : ++this.state.num   }) 
class State22 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                num: ++this.state.num
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    componentDidMount() {

    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// Component + componentDidMount + setTimeout +  this.setState({  num : ++this.state.num   }) 
class State23 extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: ++this.state.num
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}

// PureComponent + componentDidMount + setTimeout +  this.setState({  num : ++this.state.num   }) 
class State24 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }
    componentWillMount() {
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                num: ++this.state.num
            })
            console.log('after-changestate', this.state)
        }, 1000)
    }
    render() {
        console.log('render', this.state)
        return (
            <div>
                {this.state.num}
            </div>
        );
    }
}
export default SetState;


