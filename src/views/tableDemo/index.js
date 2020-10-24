import React, {Component} from 'react';

class TableDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[
        {
          id:1,
          name:"《算法导论》",
          date:"2005-9",
          price:85.00000,
          count:1
        },
        {
          id:2,
          name:"《UNIX编程技术》",
          date:"2006-2",
          price:59.8554,
          count:1
        },
        {
          id:3,
          name:"《编程珠玑》",
          date:"2008-10",
          price:39.9875,
          count:1
        },
        {
          id:4,
          name:"《代码大全》",
          date:"2006-3",
          price:128.1247,
          count:1
        },
      ]
    }
  }
   //格式化价格
   formatPrice=(price)=>{
     if (typeof price !== "number"){
      price = Number(price) || 0
     }
    return "￥"+price.toFixed(2)
  }
  //获取总价格
  getTotalPrice=()=>{
    let totalPrice = 0
    for (let book of this.state.books){
      totalPrice+=book.count*book.price
    }
    return "总价格"+this.formatPrice(totalPrice)
  }
  //改变书籍的数量
  changeItem=(index,counter)=>{
    const books=[...this.state.books]
    this.setState({
      books:books.map((item,indey)=>{
        if(indey === index){
          item.count +=counter
        }
        return item
      })
    })
  }

  //移除书籍
  removeItem=(index)=>{
    const books=[...this.state.books]
    this.setState({
      books:books.filter((item,indey)=>index !== indey)
    })
  }
  //空数据
  renderEmpty=()=>{
    return <h2>购物车为空</h2>
  }
  //有数据
  renderBooks=()=>{
    const {books}=this.state
    return (
        <div>
          <table>
            <thead>
            <tr>
              <th></th>
              <th>书籍名称</th>
              <th>出版日期</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {books.map((item,index)=>{
              return (
                  <tr key={index}>
                    <td>{index +1}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{this.formatPrice(item.price)}</td>
                    <td>
                      <button onClick={this.changeItem(index,-1)}>-</button>
                      <span className="counter">{item.count}</span>
                      <button onClick={this.changeItem(index,+1)}>+</button>
                    </td>
                    <td><button onClick={this.removeItem(index)}>移除</button></td>
                  </tr>
              )
            })}
            </tbody>
          </table>
          <h2>{this.getTotalPrice()}</h2>
        </div>
    )
  }

  render() {
    const {books} =this.state
    console.log(books)
    return (
        books.length?this.renderBooks():this.renderEmpty()
    )
  }
}

export default TableDemo
