import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-10 space-y-5">
        <h1 className="text-4xl text-[#FF574A] font-bold">Services</h1>
        <p className="text-white ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          numquam ab consequatur <br /> praesentium iusto esse necessitatibus
          sunt impedit perspiciatis quaerat!
        </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
              {
                  services.map(service => <ServiceCard
                      key={service._id}
                      service={service}
                  ></ServiceCard>)
              }
          </div>
    </div>
  );
};

export default Services;
