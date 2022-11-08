export default function NationBox({ idx , opacity}) {
  return (
    <a href="." className={`nationBox`} style={{ opacity }}>{idx}</a>
  );
}

// NationBox.defaultProps = {
//   opacity: .5
// };
