export default function UserAddressList({ userData }) {
  return (
    <>
      {userData.map((item, idx) => (
        <tr key={item + idx}>
          <td></td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.number}</td>
          <td>삭제</td>
        </tr>))}
    </>
  );
}