function getPublic() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

const page = async () => {
  const Public = await getPublic();
  
  return (
    <div>
      <ul>
        {Public.slice(0,5).map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
      home
    </div>
  );
};

export default page;
