// import React, { useState } from 'react';
//1. 定义组件建构 ProductList 父组件  Product 子组件
function useProducts(value){
    const ref = React.useRef();
    React.useEffect(() => {
       ref.current = value
    })
    return ref.current;
}
function ProductList () {
  //2. 拿到seed中的mock数据
  let productsData = Seed.products
  //3. 放到state中 Hook 中state该如何去定义
  //有一个hook叫 useState
  //state的初始参数只有在第一次渲染的时候会用到
  let [products, setVotes] = React.useState(productsData);
  const prevProducts = useProducts(products);
  function handleProductUpVote (productId) {
    let nextProduct = products.map((item,index)=>{
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

  let componentsList = products.map((item, index) => {
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
function Product (props) {
  function handleUpVote (id) {
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
ReactDOM.render(<ProductList />, document.getElementById('content'))
