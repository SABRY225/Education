import { useEffect, useState } from 'react';
import './EditCourse.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function EditCourse() {
  const token = useSelector((state) => state.auth.token);
  const { courseId } = useParams();

  const [selectedImage, setSelectedImage] = useState('');
  const [formData, setFormData] = useState({
    Name: '',
    Level: '',
    MaterialName: '',
    Price: '',
    Semester: '',
    courseImage: '',
    Id:''
  });
  useEffect(()=>{
    const fatechCourse=async()=>{
      const response = await axios.get(`http://lms.tryasp.net/Course/by-id?id=${courseId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });
    setFormData({
      Name: response.data.name,
    Level: response.data.level,
    MaterialName: response.data.materialName,
    Price: response.data.price,
    Semester: response.data.semester,
    courseImage: response.data.image,
    Id:response.data.id
    });
    }
    fatechCourse();
    setSelectedImage(formData.courseImage);

  },[courseId])
  console.log(selectedImage);
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
      const imageFile = formData.courseImage ;
      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append('CourseImage', imageFile);
      Object.keys(formData).forEach(key => {
        if (key !== 'courseImage') {
          formDataToSend.append(key, formData[key]);
        }
      });
      Object.keys(formData).forEach(key => {
          console.log(key, formData[key]);
      });
      // Send the data to the backend
      const res = await axios.put('http://lms.tryasp.net/Course', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res);
      if (res.status ==200) {
        alert(res.data)
  
      }else{
        alert("حاول تاني ")
      }
      
    } catch (error) {
      console.log("Error submitting form:", error.message);
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
                  <img src={`http://lms.tryasp.net${selectedImage}`} alt="Selected" className="img-fluid rounded" />
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
                placeholder='اسم الكورس'
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
              <label htmlFor="Price" className="form-label animated-input">سعر الكورس</label>
              <input
                type="number"
                className="form-control animated-input"
                id="Price"
                name="Price"
                placeholder='سعر الكورس'
                value={formData.Price}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <button type="submit" className="btn btn-primary animated-input" style={{ width: "250px" }}>
            تعديل كورس
          </button>
        </div>
      </form>
    </div>
  );
}


export default EditCourse;
