/* eslint-disable no-param-reassign, operator-assignment */
// 定义ProductList组件
// 1. 类组件得形式
// class ProductList extends React.Component {
//     render() {
//       return 
//       <div>
//           ProductList父组件
//       </div>
//     }
//   }
const ProductList = React.CreateClass({
    render(){
        <div>
          ProductList父组件
      </div>
    }
})
//2. CreateClass
  const element = <ProductList />;
  ReactDOM.render(
    element,
    document.getElementById('content')
  );
