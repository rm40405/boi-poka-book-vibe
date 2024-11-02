import { Link } from "react-router-dom";


const Book = ({book}) => {

    const {bookId,bookName,image,author , review} = book
    return (
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-72 shadow-xl p-4 border border-stone-700">
  <figure className="bg-gray-600">
    <img
     className="w-32 p-8"
      src={image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By:{author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
     </Link>
    );
};

export default Book;