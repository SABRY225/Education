import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {baseURL} from '../../../api/axiosInstance'

function ViewBook() {
    const [Book, setBook] = useState(null);
    const [BookSrc, setBookSrc] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { bookId } = useParams();
    console.log(bookId);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`${baseURL}Book/by-id?id=${bookId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                console.log(res.data);
                setBook(res.data);
                setBookSrc(`${baseURL}${res.data.bookUrl}`);
            } catch (err) {
                console.error("Error fetching book data:", err);
                setError('Failed to fetch book data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [token, bookId]);

    return (
        <div className="container text-center text-black">
            <div className="text-center bg-light rounded shadow p-5 m-4 form-container">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <div className='Box-title'>
                            <span className='Lname-title'>
                                {Book?.title || 'Loading...'}
                            </span>
                            <span className='Icon-title'>
                                <i className="fas fa-book"></i>
                            </span>
                        </div>
                        {loading ? (
                            <div className="alert alert-info" role="alert">
                                Loading...
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        ) : (
                            BookSrc && (
                                <div className="viewBook">
                                    <iframe
                                        src={`${baseURL}${BookSrc}`}
                                        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        // allowFullScreen
                                        title="Embedded Book"
                                        style={{
                                            width: '100%',
                                            height: '1000px',
                                            border: 'none'
                                        }}
                                        // sandbox="allow-forms allow-scripts allow-same-origin"
                                    ></iframe>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewBook;