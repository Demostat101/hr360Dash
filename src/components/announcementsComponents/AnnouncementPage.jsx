import { IoIosMore } from "react-icons/io";



const AnnouncementPage = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px] place-items-center mt-[30px]">
        {/* 1st box */}

        <div className=" w-[100%] pl-[20px] pr-[40px] h-[126px] border-l-[6px] justify-between place-items-center border-l-[#176B87] rounded-md flex border-[1.17px] bg-white border-[#ECEEF6]">
            <div>
                <div className="font-[600] text-[16.66px] leading-[24.99px]">Lorem Ipsum</div>
                <p className="font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum....  </p>
            </div>
            <div className="flex justify-between place-items-center w-[310px] h-[53.95px]">
                <div>
                <div className="font-[400] text-[16px] leading-[24.99px] text-black opacity-70">Posted</div>
                <p className="font-[400] text-[16px] leading-[24px] text-black opacity-70">15 seconds ago, at 12:00pm</p>
                </div>
                <div className="w-[40px] h-[40px] bg-[#D9D9D9] grid place-items-center rounded-lg text-[#464646]"> <IoIosMore size={20}/> </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementPage;
