class ProductList extends React.Component {
     //期望点击一下向上箭头 可以实现票数的增加
      // 1. 一个点击事件 点击一下 vote+1
      // vote的值写在props中 如何实现子组件点击一下 让props的votes值增加
      // props 数组父组件
      //product组件 有一种点击后需要让父组件知道它点击了的方法
      // ProductList 收到点击的通知后 更新props的值
      // 更新后 数据从父组件流向子组件 
    // 定义一个函数作为子组件的props 来传递事件

    // constructor(props){
    //   super(props)
    //   this.handleProductUpVote = this.handleProductUpVote.bind(this)
    //   this.state = {
    //     products:[]
    //   }
    // }

    state={
      products:[]
    }
    componentDidMount(){
      //把数据挂在到 ProductList state上
      this.setState({
        products:Seed.products
      })
    }
    handleProductUpVote = (productId)=>{
      //1. 找到state中的对应的数据 不要修改原来的state默认值 需要给state复一个新值
      // let data = this.state.products;
      let nextProduct = this.state.products.map((item,index)=>{
        if(item.id === productId){
          return Object.assign({},item,{
            votes:item.votes+1
          })
        }else{
          return item
        }
      })
      this.setState({
        products:nextProduct
      })
    }
    
  render () {
    //数据按照降序排序 Array sort方法
    //数据排序
    let products = this.state.products.sort((a,b)=>{
      b.votes-a.votes
    })

    let componentsList = this.state.products.map((item,index)=>{
      return(
        <Product
        key = {'product'+index}
        id={item.id}
        title={item.title}
        description={item.description}
        url={item.url}
        votes={item.votes}
        submitterAvatarUrl={item.submitterAvatarUrl}
        productImageUrl={item.productImageUrl}
        onVote = {this.handleProductUpVote}
      ></Product>
      )
    })
    return (
      <div className='ui unstackable items'>
       {componentsList}
      </div>
    )
  }
}
class Product extends React.Component {
  //constructor可注释的原因 babel插件 transform-class-properties 
  // constructor(props){
  //   super(props);
  //    this.handleUpVote = this.handleUpVote.bind(this);
  // }
  //接受 父组件的投票事件

  handleUpVote=()=>{
    this.props.onVote(this.props.id)
  }
  render () {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} alt=''></img>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>出品人:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            ></img>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<ProductList />, document.getElementById('content'))
