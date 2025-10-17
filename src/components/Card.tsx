import { useState } from "react";

interface data_types {
  name: string,
  age: number,
  contact: string,
  gender: string,
  email: string,
  city: string
}


const Card = ({name, age, contact, gender, email, city} : data_types) => {

  const toggleDetails = () => {
    setDetails(!details)
  }

  const [details, setDetails]  = useState<boolean>(false)
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h1 className="text-xl font-bold">
        Name: {name}
        </h1>
      <p className="text-gray-600">
        age: {age}
        </p>
      <p className="text-gray-600">
        contact: {contact}
        </p>
      <button 
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={toggleDetails}
      >
        { details ? 'Show less' : 'View more'}
        </button>
        {details &&(
          <div>
          <p>gender: {gender}</p>
          <p>email: {email}</p>
          <p>city: {city}</p>
          </div>
        )}
    </div>
  );
};

export default Card;
