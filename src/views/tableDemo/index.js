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

   formatPrice=(price)=>{
     console.log(price)
     if (typeof price !== "number"){
      price = Number(price) || 0
     }
    return "￥"+price.toFixed(2)
  }

  getTotalPrice=()=>{
    let totalPrice = 0
    for (let book of this.state.books){
      totalPrice+=book.count*book.price
    }
    return "总价格"
  }

  render() {
    const {books} =this.state
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
                        <button>-</button>
                        <span className="counter">{item.count}</span>
                        <button>+</button>
                      </td>
                      <td><button>移除</button></td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    )
  }
}

export default TableDemo
