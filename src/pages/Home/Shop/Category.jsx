const Category = () => {
  const data = [
    {
      cateImg: "./category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./category/cat-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="hidden lg:block category p-[30px] h-auto shadow w-[23%] rounded-md mt-1 bg-[#fff]">
        {/* <div className="category p-[30px] h-auto shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] w-[23%] rounded-md mt-1 bg-[#fff]"> */}
        <div className="chead flex justify-between items-center">
          <h1 className="text-xl">Brands </h1>
          <div className=" border-l-[3px] h-7 border-[rgba(0,0,0,0.23)]"></div>
          {/* <div className="-ml-[4.5rem] border-l-[3px] h-8 border-[rgba(0,0,0,0.23)]"></div> */}
          <h1 className="text-xl opacity-50 ">Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div
              className="box f_flex bg-background my-[15px] mx-0 py-1.5 px-2.5 transition duration-[0.5s] rounded-md flex"
              key={index}
            >
              <img
                className="mt-[10px] object-contain"
                src={value.cateImg}
                alt=""
              />
              <span className="my-[10px] mx-5 capitalize text-base">
                {value.cateName}
              </span>
            </div>
          );
        })}
        <div className="box box2 bg-background my-4 py-[5px] px-2.5 rounded mt-[100px] text-center">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Category;
