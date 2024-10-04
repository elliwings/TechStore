import './speciality.css';

function Speciality({ data }) {
  return (
    <div className='specialty'>
      <h2>Top trends</h2>
      <img src={data.img} alt={data.title} className='bg-image' />
      <p>{data.description}</p>
    </div>
  );
}

export default Speciality;
