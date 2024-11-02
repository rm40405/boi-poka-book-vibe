import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content gap-28 flex-col lg:flex-row-reverse">
          <img
          
            src={bannerImg}
            className="w-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Book fresh</h1>
            
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;