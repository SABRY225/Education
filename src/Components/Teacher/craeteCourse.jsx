import React, { useState } from 'react';
import './EditCourse.css';
import imgCourseNew from "../../assets/9829626.jpg";

function CraeteCourse() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    courseName: '',
    level: '',
    subject: '',
    price: '',
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the form submission logic here, for example:
    // Send the formData to your API or server
    console.log('Form submitted:', formData);
    // Reset the form
    setFormData({
      courseName: '',
      level: ' ',
      subject: ' ',
      price: ''
    });
    setSelectedImage(null);
    console.log('Form submitted:', formData);

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
              <label htmlFor="imgCourse" className="form-label animated-input">تحميل صورة الكورس</label>
              <input type="file" className="form-control animated-input" id="imgCourse" name="imgCourse" onChange={handleImageChange} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label animated-input">اسم الكورس</label>
              <input
                type="text"
                className="form-control animated-input"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label animated-input">المستوى الدراسي</label>
              <select
                className="form-select animated-input"
                id="level"
                name="level"
                value={formData.level}
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
              <label htmlFor="subject" className="form-label animated-input">المادة الدراسية</label>
              <select
                className="form-select animated-input"
                id="subject"
                name="subject"
                value={formData.subject}
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
          <button type="submit" className="btn btn-primary animated-input" style={{
            width:"250px"
          }}>انشاء كورس</button>
        </div>
      </form>
    </div>
  );
}


export default CraeteCourse