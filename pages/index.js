import path from "path";
import fs from "fs/promises";

function HomePage({ data }) {
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
