export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.data.image || !data?.data.description ? (
    <p>No data for {name}</p>
  ) : (
    <div id="info">
      <h2>Here's a {name}</h2>
      <img src={data.data.image} alt="Legend of Zelda object" />
      <div id="description">
        <p> {data.data.description} </p>
      </div>
    </div>
  );
}
