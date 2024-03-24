import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = React.useState(null);

  React.useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBookData(data);
        } else {
          throw new Error('Failed to fetch book data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };

  }, [id]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const { title, imageUrl } = bookData;

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageUrl} alt=""  className='h-96'/>
      <h2>{title}</h2>
    </div>
  );
};

export default SingleBook;
