import person1 from "../../../assets/images/about_us/person.jpg";
import person2 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-8 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 h-[400px] pl-14 relative">
          <img src={person1} className="w-3/4 max-w-sm rounded-lg shadow-2xl" />
          <img src={person2} className="w-1/2 absolute right-12 top-1/2 max-w-sm rounded-lg shadow-2xl border-4 border-sky-500" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-green-500">About Us</h1>
          <p className="py-6 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aperiam, dicta eum rem deserunt velit quos soluta. Ipsam magnam quod, minus itaque nobis molestiae et, aspernatur repellendus perferendis voluptatibus quas aut asperiores amet architecto delectus error eveniet dolores odio autem earum quibusdam alias praesentium quo! Adipisci vel iure quas dolorem veniam quo asperiores maiores, saepe earum. Cum esse nemo laboriosam aliquam dolorem soluta labore dolore doloremque optio aliquid ea, dicta magnam praesentium expedita saepe veritatis quia nam ut commodi aspernatur id enim, accusantium aperiam sint. Nam veritatis minima non provident voluptate, ab sint deleniti ipsa quibusdam! Tempore alias dolorem maiores!
          </p>
          <button className="btn btn-error">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
