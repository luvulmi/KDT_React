export default function OrderTr({ item }) {
  return (
    <tr>
      <td>{item.date}</td>
      <td><a href="/">{item.orderNum}</a></td>
      <td>{item.product}</td>
      <td>{item.count}</td>
      <td>{item.price}</td>
      <td>{item.status}</td>
      <td><button>{item.review}</button></td>
    </tr>
  )
}