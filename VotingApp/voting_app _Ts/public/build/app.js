function ProductList() {
    //2. 拿到seed中的mock数据
    var productsData = Seed.products;
    //3. 放到state中 Hook 中state该如何去定义
    //有一个hook叫 useState
    //state的初始参数只有在第一次渲染的时候会用到
    var _a = React.useState(productsData), products = _a[0], setVotes = _a[1];
    var handleProductUpVote = function (productId) {
        var nextProduct = products.map(function (item, index) {
            if (item.id === productId) {
                return Object.assign({}, item, {
                    votes: item.votes + 1
                });
            }
            else {
                return item;
            }
        });
        setVotes(nextProduct);
    };
    var componentsList = products.map(function (item, index) {
        return (React.createElement(Product, { key: 'product' + index, id: item.id, title: item.title, description: item.description, url: item.url, votes: item.votes, submitterAvatarUrl: item.submitterAvatarUrl, productImageUrl: item.productImageUrl, onVote: handleProductUpVote }));
    });
    return React.createElement("div", { className: 'ui unstackable items' }, componentsList);
}
// React.FC React ts 的一个泛型
//泛型 创建可重用的组件 一个组件支持多种类型的数据 用户根据自己的数据类型使用组件
//解决的问题：如果都用any去定义 就是去了检查的意义
//解决方案： 返回值的类型与传入参数的类型是相同的 
var Product = function (props) {
    function handleUpVote(id) {
        // console.log(id)
        props.onVote(id);
    }
    return (React.createElement("div", { className: 'item' },
        React.createElement("div", { className: 'image' },
            React.createElement("img", { src: props.productImageUrl, alt: '' })),
        React.createElement("div", { className: 'middle aligned content' },
            React.createElement("div", { className: 'header' },
                React.createElement("a", { onClick: function () {
                        handleUpVote(props.id);
                    } },
                    React.createElement("i", { className: 'large caret up icon' })),
                props.votes),
            React.createElement("div", { className: 'description' },
                React.createElement("a", null, props.title),
                React.createElement("p", null, props.description)),
            React.createElement("div", { className: 'extra' },
                React.createElement("span", null, "\u51FA\u54C1\u4EBA:"),
                React.createElement("img", { className: 'ui avatar image', src: props.submitterAvatarUrl })))));
};
ReactDOM.render(React.createElement(ProductList, null), document.getElementById('content'));
//# sourceMappingURL=app.js.map