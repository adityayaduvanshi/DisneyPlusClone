const Viewers = () => {
  const viewerData = [
    {
      imgSrc: '/images/viewers-disney.png',
      videoSrc: '/vidoes/1564674844-disney.mp4',
    },
    {
      imgSrc: '/images/viewers-marvel.png',
      videoSrc: '/vidoes/1564676115-marvel.mp4',
    },
    {
      imgSrc: '/images/viewers-pixar.png',
      videoSrc: '/vidoes/1564676714-pixar.mp4',
    },
    {
      imgSrc: '/images/viewers-starwars.png',
      videoSrc: '/vidoes/1608229455-star-wars.mp4',
    },
    {
      imgSrc: '/images/viewers-national.png',
      videoSrc: '/vidoes/1564676296-national-geographic.mp4',
    },
  ];

  return (
    <div className="pt-20  px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {viewerData.map((item, index) => (
        <div
          key={index}
          className=" pt-[56.25%] rounded-md shadow-neutral-900  shadow-2xl	 cursor-pointer overflow-hidden relative duration-500  transition-all border-[3px] border-gray-700 hover:border-white hover:scale-110"
        >
          <img
            className="absolute inset-0 object-cover w-full h-full opacity-100 transition-opacity duration-75 ease-in-out  z-10 top-0"
            src={item.imgSrc}
            alt=""
          />
          <video
            className="w-[100%] h-[100%] absolute top-0 opacity-0 hover:opacity-100  z-10 object-contain"
            autoPlay
            loop
            playsInline
            src={item.videoSrc}
            muted
          ></video>
        </div>
      ))}
    </div>
  );
};

export default Viewers;
