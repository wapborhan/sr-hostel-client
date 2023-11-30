const Secret = () => {
  return (
    <div className="max-w-7xl  mx-5 lg:mx-auto mt-20 mb-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="left flex justify-center items-center gap-8">
          <div className="circle">
            <img src="https://i.ibb.co/D1NbwCr/service-1.jpg" alt="" />
          </div>
          <div className="circle">
            <img src="https://i.ibb.co/z5q4Pg0/service-2.jpg" alt="" />
          </div>
        </div>
        <div className="right text-center mt-12 space-y-5">
          <h2 className="text-5xl font-courgette">Perfect Ingredients</h2>
          <h3 className="mb-8 text-2xl">THIS IS OUR SECRET</h3>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
            posuere consectetur est at lobortis. Nulla vitae elit libero, a
            pharetra augue. Donec sed odio dui.Integer posuere erat a ante
            venenatis.
          </p>
          {/* <button className="btn btn-outline btn-warning">Learn More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Secret;
