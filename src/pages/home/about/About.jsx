const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20">
      <div className="grid grid-cols-2">
        <div className="left space-y-5">
          <h2 className="text-5xl font-courgette">Little About Us</h2>
          <h3 className="mb-8 text-2xl">THE HISTORY OF US</h3>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
            posuere consectetur est at lobortis. Nulla vitae elit libero, a
            pharetra augue. Donec sed odio dui.Integer posuere erat a ante
            venenatis.
          </p>
          <button className="btn btn-outline btn-warning">Learn More</button>
        </div>
        <div className="right flex justify-center gap-8">
          <div className="circle">
            <img src="https://i.ibb.co/8cWVWzG/food-circle-2.png" alt="" />
          </div>
          <div className="circle">
            <img src="https://i.ibb.co/M5DkV1N/food-circle-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
