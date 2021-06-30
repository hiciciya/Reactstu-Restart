// declare let Seed:any;
interface Product {
  id: string,
  title: string,
  description: string,
  url: string,
  votes: number,
  submitterAvatarUrl:string,
  productImageUrl: string,
  onVote:(id:string)=>{}
}
function ProductList () {
  //2. 拿到seed中的mock数据
  let productsData = Seed.products
  //3. 放到state中 Hook 中state该如何去定义
  //有一个hook叫 useState
  //state的初始参数只有在第一次渲染的时候会用到
  let [products, setVotes] = React.useState(productsData);
  const handleProductUpVote  = (productId:string):any=> {
    let nextProduct = products.map((item:Product,index:number)=>{
        if(item.id === productId){
            return Object.assign({},item,{
              votes:item.votes+1
            })
          }else{
            return item
          }
      })
    setVotes(nextProduct)
  }

  let componentsList = products.map((item:Product,index:number) => {
    return (
      <Product
        key={'product' + index}
        id={item.id}
        title={item.title}
        description={item.description}
        url={item.url}
        votes={item.votes}
        submitterAvatarUrl={item.submitterAvatarUrl}
        productImageUrl={item.productImageUrl}
        onVote={handleProductUpVote}
      ></Product>
    )
  })
  return <div className='ui unstackable items'>{componentsList}</div>
}
// React.FC React ts 的一个泛型
//泛型 创建可重用的组件 一个组件支持多种类型的数据 用户根据自己的数据类型使用组件
//解决的问题：如果都用any去定义 就是去了检查的意义
//解决方案： 返回值的类型与传入参数的类型是相同的 
const Product:React.FC<Product> = (props) =>{
  function handleUpVote (id:string) {
    // console.log(id)
    props.onVote(id)
  }
  return (
    <div className='item'>
      <div className='image'>
        <img src={props.productImageUrl} alt=''></img>
      </div>
      <div className='middle aligned content'>
        <div className='header'>
          <a
            onClick={() => {
              handleUpVote(props.id)
            }}
          >
            <i className='large caret up icon' />
          </a>
          {props.votes}
        </div>
        <div className='description'>
          <a>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className='extra'>
          <span>出品人:</span>
          <img className='ui avatar image' src={props.submitterAvatarUrl}></img>
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(
  <ProductList />, 
  document.getElementById('content') as HTMLElement 
  )
