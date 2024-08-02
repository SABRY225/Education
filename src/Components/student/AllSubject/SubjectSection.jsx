import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";

const SubjectSection = ({ materialName, courses }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      };
    return (
        <div className="container material-section">
            <h2 className="row text-black">
                <div className="col-md-12 text-end">{materialName}</div>
            </h2>
            <div className='slider-container'>
                <Slider {...settings}>
                    {courses.map((course) => (
                        <>
                        <div key={course.id} className="CardCourseSection" >
                            <img src={course.image} alt={`Image of ${course.name}`} />
                            <h3>{course.name}</h3>
                            <div className="teacher-info">
                                <p>{course.teacher.firstName} {course.teacher.lastName}</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>{course.level}</p>
                                    <p>{course.semester}</p>
                                </div>
                                <div className="col-md-6">
                                    <p>{course.price} &pound;</p>
                                </div>
                            </div>
                        </div>                            
                        </>

                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default SubjectSection;
