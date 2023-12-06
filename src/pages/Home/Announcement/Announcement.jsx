const Announcement = () => {
  return (
    <>
      <section className="annocument background bg-background py-12">
        <div className="max-w-[90%] m-auto d_flex flex justify-between flex-col md:flex-row items-center">
          <div className="img w-1/3 min-h-80 max-h-80 ">
            <img src="./banner-1.png"  />
          </div>
          <div className="img h-80 2/3 min-h-80 max-h-80 ">
            <img src="./banner-2.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
