
import img1 from ".././media/image.png";  

const subjects = [
  {
    name: "تفاضل وتكامل",
    price: "$311",
    teacher: "احمد صبري",
    image: img1
  },
  {
    name: "فيزياء",
    price: "$250",
    teacher: "محمد علي",
    image: img1
  },
  {
    name: "كيمياء",
    price: "$280",
    teacher: "سارة أحمد",
    image: img1
  }
   
  ,
  {
    name: "كيمياء",
    price: "$280",
    teacher: "سارة أحمد",
    image: img1
  }
   
];

function AllStuSubjects() {
  return (

    <div className="row   rtl   fw-normal " style={{height:'100%'}}>
      {subjects.map((subject, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3   " >
            <div className=" p-5 border border-4   border-info rounded  m-4  ">

          <div className="img row">
            <img src={subject.image} className="w-100" alt={subject.name} />
          </div>
          <p className="subName row justify-content-center py-2 my-2">{subject.name}</p>
          <div className="row justify-content-around py-2 my-2">
            <div className="col-4 fs-md-4 fs-xl-2">{subject.price}</div>
            <div className="col-8 fs-md-4 fs-xl-2">{subject.teacher}</div>
          </div>
          <div className="row">
            <button className="btn btn-success rounded-5 py-2 my-2">متاح|ادفع</button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default AllStuSubjects;