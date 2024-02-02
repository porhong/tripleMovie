import React from "react";

const Hero = (props = { title, content, img }) => {
  return (
    <>
      <div className="hero lg:bg-base-200 mx-auto mt-10 rounded-2xl shadow-md shadow-neutral">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              accusamus ipsam facilis nesciunt ullam quidem exercitationem quasi
              distinctio cupiditate delectus commodi ipsum enim, soluta modi?
              Non dolores tempore alias neque molestias odio quis aut atque
              ducimus recusandae laborum inventore illo est quaerat sit, tenetur
              hic doloribus cum quae. Qui magni, quasi eveniet nostrum
              praesentium vero minima optio consequuntur asperiores sed.
            </p>
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
