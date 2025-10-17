import { useEffect, useState } from "react";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loading";
import SearchBar from "../components/SearchBar";

interface patient {
  dob: {
    date: string;
    age: number;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: null | string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
  };
  phone: string;
  registered: {
    date: string;
    age: number;
  };
}

const Patients = () => {
  const [patientInfo, setPatientInfo] = useState<patient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchPatient, setSearchPatient] = useState<patient[]>([])

  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data.results)
        setPatientInfo(data.results);
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    };
    handleData();
  }, []);

   const handleSearch = (search_patient_name : string) => {
     const lowerCasePatientName = search_patient_name.toLowerCase();
     const result = patientInfo.filter(item => 
      item.name.first.toLowerCase().includes(lowerCasePatientName) ||
      item.name.last.toLowerCase().includes(lowerCasePatientName)
     )
     setSearchPatient(result)
   }

  if (isLoading) {
    return (
      <>
        <LoadingSpinner />{" "}
      </>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-red-600 font-bold">Error: {error}</p>
      </div>
    );
  }
  

  return (
    <>
      <div className="flex justify-end items-center border-blue-400 m-2 ">
        <SearchBar onSearch={handleSearch}/>
      </div>
      {searchPatient && (
        searchPatient.map((patient, index) => (
          <Card
            key={index}
            name={`${patient.name.first} ${patient.name.last}`}
            age={patient.dob.age}
            contact={patient.phone}
            gender={patient.gender}
            email={patient.email}
            city={patient.location.city}
          />
        ))
      ) }
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {patientInfo.map((patient, index) => (
          <Card
            key={index}
            name={`${patient.name.first} ${patient.name.last}`}
            age={patient.dob.age}
            contact={patient.phone}
            gender={patient.gender}
            email={patient.email}
            city={patient.location.city}
          />
        ))}
      </div>
    </>
  );
};

export default Patients;
