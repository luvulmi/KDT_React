export default function PointTr({ item }) {
  return (
    <tr>
      <td>{item.sdate}</td>
      <td>{item.category}</td>
      <td>{item.content}</td>
      <td>{item.edate}</td>
      <td>{item.plusp}</td>
      <td>{item.usep}</td>
      <td>{item.restp}</td>
    </tr>
  )
}