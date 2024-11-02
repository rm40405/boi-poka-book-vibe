import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const {bookId}= useParams();

    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    console.log(book);

   const {bookId: currentBookId,image} = book;


    // console.log(bookId);
    return (
        <div>
            <h3>BoookId:{bookId}</h3>
            <img className="w-44 mb-6" src={image} alt="Book Cover" />

            <button className="btn btn-accent btn-outline mr-4">Read</button>
            <button className="btn btn-accent btn-outline">Wish</button>
        </div>
    );
};

export default BookDetails;