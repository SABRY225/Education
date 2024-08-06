import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {baseURL} from '../../../api/axiosInstance'

function ViewLectures() {
    const [lecture, setLecture] = useState('تفاضل وتكامل');
    const { lectureId } = useParams();
    console.log(lectureId);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchFun = async () => {
            const res = await axios.get(`${baseURL}Lecture/by-id?id=${lectureId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            setLecture(res.data);
        }
        fetchFun();

    }, [token, lectureId]);
    return (
        <div className="container text-center text-black">
            <div className="text-center bg-light rounded shadow p-5 m-4 form-container">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <div className='Box-title'>
                            <span className='Lname-title'>
                                {lecture.name}
                            </span>
                            <span className='Icon-title'>
                                <i className="fas fa-book-open"></i>
                            </span>
                        </div>
                        {lecture.lectureUrl && (
                            <div className="viewVideo-2">
                                <iframe
                                    src={`${baseURL}${lecture.lectureUrl}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube video player"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewLectures;
