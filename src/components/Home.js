import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* Logical AND -> Jika sebelah kiri "&&" bernilai True maka yang di kanan akan dijalankan */}
      {/* Jika isPending === true, maka tulisan Loading akan tampil */}
      {/* Jika isPending === false, maka tulisan Loading tidak akan tampil */}
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
