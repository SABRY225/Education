import { useState } from 'react';
import './EditCourse.css';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Course } from '../../Redux/actions/courseActions';
// import imgCourseNew from "../../assets/9829626.jpg";

function CreateCourse() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    Name: '',
    Level: '',
    MaterialName: '',
    price: '',
    Semester: '',
    courseImage: '',
    Token:token
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setFormData({
        ...formData,
        courseImage: e.target.files[0]
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageFile = formData.courseImage;
  
      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append('courseImage', imageFile);
      Object.keys(formData).forEach(key => {
        if (key !== 'courseImage') {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      // Send the data to the backend
      const res = await fetch('http://localhost:5177/Course', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });
  
      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(`Error: ${errorResponse.title} - ${JSON.stringify(errorResponse.errors)}`);
      }
  
      const result = await res.json();
      console.log('Form submitted:', result);
  
      // Reset the form
      setFormData({
        Name: '',
        Level: '',
        MaterialName: '',
        price: '',
        Semester: '',
        courseImage: '',
      });
      setSelectedImage(null);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="container my-5">
      <form className="text-center bg-light p-4 rounded shadow" onSubmit={handleSubmit}>
        <div className="row justify-content-center align-items-center g-3">
          <div className="col-md-4">
            <div className="mb-3">
              {selectedImage && (
                <div className="img-preview mb-3">
                  <img src={selectedImage} alt="Selected" className="img-fluid rounded" />
                </div>
              )}
              <label htmlFor="courseImage" className="form-label animated-input">تحميل صورة الكورس</label>
              <input type="file" className="form-control animated-input" id="courseImage" name="courseImage" onChange={handleImageChange} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label animated-input">اسم الكورس</label>
              <input
                type="text"
                className="form-control animated-input"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Level" className="form-label animated-input">المستوى الدراسي</label>
              <select
                className="form-select animated-input"
                id="Level"
                name="Level"
                value={formData.Level}
                onChange={handleInputChange}
              >
                <option value=""> الرجاء اختيار مستوي دراسي</option>
                <option value="الأول الابتدائي">الأول الابتدائي</option>
                <option value="الثاني الابتدائي">الثاني الابتدائي</option>
                <option value="الثالث الابتدائي">الثالث الابتدائي</option>
                <option value="الرابع الابتدائي">الرابع الابتدائي</option>
                <option value="الخامس الابتدائي">الخامس الابتدائي</option>
                <option value="السادس الابتدائي">السادس الابتدائي</option>
                <option value="الأول الإعدادي">الأول الإعدادي</option>
                <option value="الثاني الإعدادي">الثاني الإعدادي</option>
                <option value="الثالث الإعدادي">الثالث الإعدادي</option>
                <option value="الأول الثانوي">الأول الثانوي</option>
                <option value="الثاني الثانوي">الثاني الثانوي</option>
                <option value="الثالث الثانوي">الثالث الثانوي</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Semester" className="form-label animated-input">الفصل الدراسي</label>
              <select
                className="form-select animated-input"
                id="Semester"
                name="Semester"
                value={formData.Semester}
                onChange={handleInputChange}
              >
                <option value=""> الرجاء اختيار الفصل دراسي</option>
                <option value="الفصل الأول">الفصل الأول</option>
                <option value="الفصل الثاني">الفصل الثاني</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="MaterialName" className="form-label animated-input">المادة الدراسية</label>
              <select
                className="form-select animated-input"
                id="MaterialName"
                name="MaterialName"
                value={formData.MaterialName}
                onChange={handleInputChange}
              >
                <option value=""> الرجاء اختيار مادة دراسية</option>
                <option value="اللغة العربية">اللغة العربية</option>
                <option value="الرياضيات">الرياضيات</option>
                <option value="العلوم">العلوم</option>
                <option value="الدراسات الاجتماعية">الدراسات الاجتماعية</option>
                <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label animated-input">سعر الكورس</label>
              <input
                type="number"
                className="form-control animated-input"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <button type="submit" className="btn btn-primary animated-input" style={{ width: "250px" }}>
            انشاء كورس
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
