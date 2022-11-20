export default function ReviewTr({ item }) {
  return (
    <tr>
      <td>{item.item}</td>
      <td>{item.date}</td>
      <td><button>{item.write}</button></td>
    </tr>
  )
}