import { IoIosMore } from "react-icons/io";
import { UsePagination } from "./AnnouncementPaginationFunction";
import { useEffect, useMemo, useState } from "react";
import { PaginationItem, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import axios from "axios";





const AnnouncementPage = () => {

  const [initialRowLength, setInitialRowLength] = useState (5);
  const [data,setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  console.log(initialRowLength);
  console.log(typeof(initialRowLength));

  
  
  
  
  
//   const date = new Date();
// const hour = date.getHours()-1;
// let period = ""
// console.log(hour);
  
//   const amPm = ()=>{


  
    

//     if(hour == 0 || hour < 12){
//       hour = 12;
//       period = "AM"
      
//   } else{
//       hour = hour - 12;
//       period = "PM"
    
      
//   }

//   return period


//   }

//   console.log(amPm);
const [
  totalPages,
  startPageIndex,
  endPageIndex,
  currentPageIndex,
  setStartPageIndex,
  setEndPageIndex
  
] = UsePagination(initialRowLength, data.length);

  

  const fetchData = async ()=> {
    setIsLoading(true);
    try {
      const response = await axios.get("https://blogappbackend-vhkj.onrender.com/users");
      setData(response.data);
      
      
      
    } catch (error) {
      setFetchError(error.message)
      
    } finally {
      setIsLoading(false);
    }
  }

 

 
  console.log(startPageIndex);
  console.log(endPageIndex);
  console.log(totalPages);
  
  
  
  
  

  const filteredEmployeeList = useMemo(
    () =>
      data
        .slice(
          startPageIndex * endPageIndex,
          startPageIndex * endPageIndex + endPageIndex
        ),
        
    [startPageIndex, data,endPageIndex,initialRowLength]
  );

  console.log(filteredEmployeeList);

  useEffect (()=>{
    setEndPageIndex(initialRowLength)
  },[initialRowLength])

  const handleChange = (e)=>{
    
    
    setInitialRowLength(Number(e.target.value))  
    
  }

  useEffect(()=>{
    fetchData()
    
},[])
  

  

  return (
    <>

    {isLoading && (
        <div className="w-full h-screen flex flex-col place-items-center justify-center">
          <div className="loader"></div>
        </div>
      )}

      {!isLoading && fetchError && (
        <div className="w-full h-screen flex flex-col place-items-center justify-center">
          <div className="text-red-600">{fetchError}</div>
        </div>
      )}

      <>

        {
          !isLoading && !fetchError && filteredEmployeeList.length ? 

          filteredEmployeeList.map(({title,body,created, _id})=>{
            return <div key={_id} className="flex flex-col gap-[20px] place-items-center mt-[30px]">
        
    
            <div className=" w-[100%] pl-[20px] pr-[40px] h-[126px] border-l-[6px] justify-between place-items-center border-l-[#176B87] rounded-md flex border-[1.17px] bg-white border-[#ECEEF6]">
                <div>
                    <div className="font-[600] text-[16.66px] leading-[24.99px]">{title}</div>
                    <div className="font-[400] text-[16px] leading-[24px]">
                    {body.length > 70 ? (
                  <div>{body.slice(0, 71)}...</div>
                ) : (
                  <div>{body}</div>
                )}
                    </div>
                </div>
                <div className="flex justify-between place-items-center w-[310px] h-[53.95px]">
                    <div>
                    <div className="font-[400] text-[16px] leading-[24.99px] text-black opacity-70">Posted</div>
                    <div className="font-[400] text-[16px] leading-[24px] text-black opacity-70 flex gap-[10px]">
                    {created.slice(0,10)} <span>{created.slice(11,20)} {/* {hour===0 ? hour=12 : hour > 12 ? hour=hour-12} */}</span>
                    </div>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#D9D9D9] grid place-items-center rounded-lg text-[#464646]"> <IoIosMore size={20}/> </div>
                </div>
            </div>
          </div>
          }) : !isLoading && !fetchError && !filteredEmployeeList.length ? (
            <p className=" text-center">No Announcement to display</p>
          ) : (
            ""
          )
        }
      </>

      <div className=" w-full flex justify-between">
        <div>
          <select onChange={handleChange} name="" id="">
            <option value="5">5</option>
            <option value="10" >10</option>
            <option value="15">15</option>
          </select>
        </div>
      <Pagination
        // className="flex flex-col place-items-end pt-[15px] pb-[15px]"
        color="primary"
        count={totalPages}
        onChange={(event, value) => setStartPageIndex(value - 1)}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: () => <Typography variant="label">Prev</Typography>,
              next: () => <Typography variant="label">Next</Typography>,
            }}
            {...item}
          />
        )}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
      />
      </div>
    </>
  );
};

export default AnnouncementPage;
