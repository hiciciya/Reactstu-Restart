/* eslint-disable no-param-reassign, operator-assignment */

// step1 定义ProductList组件

// 1. 类组件得形式
// class ProductList extends React.Component {
//     render() {
//       return 
//       <div>
//           ProductList父组件：类组件
//       </div>
//     }
//   }
// 1. 函数组件
function ProductList(props){
  return(
    <div className='ui unstackable items'>
      
    </div>
  )
}


//step2:告诉React需要把组件内容渲染到指定的Dom元素中
render方法 2个参数  
// 第一个是需要渲染的组件 what 要渲染谁
// 渲染到什么位置 在index.html 可以找到对应的id的div
  ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
  );
