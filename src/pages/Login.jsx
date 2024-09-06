import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/DashBoardContext";


const Login = () => {
  const navigate = useNavigate()

  const {isSignedIn,setIsSignedIn,email,setEmail,password,setPassword,state,setState} = Context()
  console.log(isSignedIn);

  // useEffect(()=>{
  //   sessionStorage.setItem("login","true")
  //   setIsSignedIn(sessionStorage.getItem("login"))
    
  // },[password])
  

  const handleLogin = ()=>{

    if (email !== "" || password !== "") {
      navigate("layout/dashboard")
      setIsSignedIn(true)
      
      
    } 

  }
  return (
    <div className="w-full flex">
      <div className="w-[50%] h-screen bg-[#176B87] relative flex justify-center place-items-center">
        <div className="absolute top-0 left-0">
          <svg
            width="94"
            height="119"
            viewBox="0 0 94 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle cx="13" cy="10" r="5" fill="white" />
              <circle cx="32" cy="10" r="5" fill="white" />
              <circle cx="51" cy="10" r="5" fill="white" />
              <circle cx="70" cy="10" r="5" fill="white" />
              <circle cx="89" cy="10" r="5" fill="white" />
              <circle cx="13" cy="36" r="5" fill="white" />
              <circle cx="32" cy="36" r="5" fill="white" />
              <circle cx="51" cy="36" r="5" fill="white" />
              <circle cx="70" cy="36" r="5" fill="white" />
              <circle cx="89" cy="36" r="5" fill="white" />
              <circle cx="13" cy="62" r="5" fill="white" />
              <circle cx="32" cy="62" r="5" fill="white" />
              <circle cx="51" cy="62" r="5" fill="white" />
              <circle cx="70" cy="62" r="5" fill="white" />
              <circle cx="89" cy="62" r="5" fill="white" />
              <circle cx="13" cy="88" r="5" fill="white" />
              <circle cx="32" cy="88" r="5" fill="white" />
              <circle cx="51" cy="88" r="5" fill="white" />
              <circle cx="70" cy="88" r="5" fill="white" />
              <circle cx="89" cy="88" r="5" fill="white" />
              <circle cx="13" cy="114" r="5" fill="white" />
              <circle cx="32" cy="114" r="5" fill="white" />
              <circle cx="51" cy="114" r="5" fill="white" />
              <circle cx="70" cy="114" r="5" fill="white" />
              <circle cx="89" cy="114" r="5" fill="white" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width="94"
            height="119"
            viewBox="0 0 94 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle cx="13" cy="10" r="5" fill="white" />
              <circle cx="32" cy="10" r="5" fill="white" />
              <circle cx="51" cy="10" r="5" fill="white" />
              <circle cx="70" cy="10" r="5" fill="white" />
              <circle cx="89" cy="10" r="5" fill="white" />
              <circle cx="13" cy="36" r="5" fill="white" />
              <circle cx="32" cy="36" r="5" fill="white" />
              <circle cx="51" cy="36" r="5" fill="white" />
              <circle cx="70" cy="36" r="5" fill="white" />
              <circle cx="89" cy="36" r="5" fill="white" />
              <circle cx="13" cy="62" r="5" fill="white" />
              <circle cx="32" cy="62" r="5" fill="white" />
              <circle cx="51" cy="62" r="5" fill="white" />
              <circle cx="70" cy="62" r="5" fill="white" />
              <circle cx="89" cy="62" r="5" fill="white" />
              <circle cx="13" cy="88" r="5" fill="white" />
              <circle cx="32" cy="88" r="5" fill="white" />
              <circle cx="51" cy="88" r="5" fill="white" />
              <circle cx="70" cy="88" r="5" fill="white" />
              <circle cx="89" cy="88" r="5" fill="white" />
              <circle cx="13" cy="114" r="5" fill="white" />
              <circle cx="32" cy="114" r="5" fill="white" />
              <circle cx="51" cy="114" r="5" fill="white" />
              <circle cx="70" cy="114" r="5" fill="white" />
              <circle cx="89" cy="114" r="5" fill="white" />
            </g>
          </svg>
        </div>

        <div>
        <svg width="161" height="119" viewBox="0 0 161 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M30.3094 67.2476L42.268 92.4769L37.2077 94.8755L32.1193 84.1404L21.3119 89.263L26.4003 99.9981L21.34 102.397L9.38135 77.1674L14.4417 74.7688L19.3587 85.1425L30.1661 80.0198L25.2491 69.6462L30.3094 67.2476ZM60.2609 83.9483L50.0345 76.7553L47.6489 77.886L52.309 87.7175L47.2487 90.1161L35.2901 64.8868L44.7601 60.398C46.7119 59.4728 48.5402 59.0341 50.245 59.0819C51.9383 59.1056 53.4022 59.5479 54.6365 60.4088C55.8836 61.2342 56.8498 62.3698 57.5351 63.8156C58.3232 65.4783 58.5551 67.2128 58.2309 69.0191C57.8952 70.8013 56.8954 72.3965 55.2317 73.8049L66.1164 81.1728L60.2609 83.9483ZM45.85 74.0908L50.079 72.0863C51.4525 71.4352 52.3224 70.6245 52.6887 69.6541C53.0436 68.6595 52.9412 67.5719 52.3816 66.3912C51.8333 65.2345 51.0734 64.5028 50.1017 64.1961C49.1186 63.8653 47.9403 64.0255 46.5668 64.6765L42.3378 66.681L45.85 74.0908ZM69.3106 55.888C68.2889 53.4212 68.2528 51.166 69.2023 49.1223C70.1645 47.0432 71.9348 45.3925 74.5131 44.1704C76.2722 43.3366 77.9267 42.936 79.4767 42.9686C81.0153 42.9771 82.3491 43.363 83.4782 44.1263C84.62 44.854 85.5049 45.8806 86.1331 47.2059C86.8527 48.724 87.0662 50.2016 86.7735 51.6388C86.4936 53.0405 85.8971 54.179 84.9841 55.0544L85.0526 55.199C86.6558 54.9703 88.1056 55.2274 89.4021 55.9704C90.7227 56.7019 91.7942 57.9352 92.6166 59.6701C93.3019 61.1159 93.5756 62.565 93.4377 64.0174C93.3239 65.4583 92.7706 66.8125 91.7778 68.0799C90.7976 69.3117 89.4039 70.356 87.5966 71.2126C84.8737 72.5033 82.3313 72.8673 79.9694 72.3047C77.6075 71.7422 75.7444 70.1464 74.3802 67.5173L79.2959 65.1873C79.9038 66.3452 80.7526 67.1085 81.8422 67.4774C82.9445 67.8107 84.1584 67.6632 85.4837 67.035C86.7126 66.4525 87.4925 65.6697 87.8233 64.6866C88.1668 63.668 88.0815 62.6165 87.5675 61.5322C86.8822 60.0864 85.9333 59.2672 84.7206 59.0747C83.508 58.8822 81.9378 59.2429 80.01 60.1566L78.9618 60.6534L76.9916 56.4968L78.0398 55.9999C81.4615 54.378 82.6299 52.4225 81.5448 50.1333C81.0537 49.0971 80.3578 48.4384 79.4571 48.157C78.5806 47.8642 77.564 47.992 76.4073 48.5402C75.2748 49.077 74.5438 49.8072 74.2142 50.7307C73.8973 51.6186 73.9134 52.5553 74.2625 53.5408L69.3106 55.888ZM104.368 38.8285C103.647 37.9306 102.865 37.3714 102.023 37.151C101.205 36.919 100.242 37.0658 99.1331 37.5912C97.4705 38.3793 96.5613 39.6365 96.4058 41.3629C96.2629 43.0537 96.8932 45.4108 98.2968 48.4344C98.4183 47.1964 98.9076 46.0496 99.7648 44.9941C100.611 43.9144 101.684 43.0662 102.985 42.4495C104.552 41.7071 106.097 41.3877 107.622 41.4913C109.146 41.5949 110.554 42.1374 111.846 43.1188C113.126 44.0762 114.194 45.4584 115.051 47.2657C115.862 48.9766 116.238 50.6723 116.179 52.353C116.132 53.9981 115.623 55.5083 114.652 56.8835C113.681 58.2587 112.279 59.3803 110.448 60.2484C107.942 61.4362 105.703 61.8186 103.732 61.3954C101.785 60.9609 100.054 59.8927 98.5391 58.1909C97.0368 56.4535 95.5947 54.127 94.2127 51.2113C92.1225 46.8016 91.3053 43.1165 91.7612 40.1559C92.2056 37.1712 94.0664 34.9022 97.3436 33.3488C99.8738 32.1496 102.163 31.9054 104.212 32.6165C106.26 33.3275 107.879 34.6558 109.066 36.6012L104.368 38.8285ZM103.799 47.1544C102.522 47.7598 101.626 48.6415 101.113 49.7997C100.6 50.9579 100.68 52.2478 101.354 53.6696C102.028 55.0913 102.956 56.0233 104.14 56.4657C105.348 56.8966 106.686 56.7637 108.156 56.067C109.457 55.4502 110.293 54.5672 110.663 53.4179C111.057 52.2572 110.935 51.0022 110.295 49.6528C109.633 48.2552 108.734 47.3237 107.598 46.8585C106.487 46.3819 105.221 46.4805 103.799 47.1544ZM116.789 40.5988C114.813 36.4301 114.012 32.8109 114.387 29.7413C114.786 26.6602 116.732 24.2916 120.226 22.6355C123.72 20.9793 126.774 20.9779 129.387 22.6312C132.025 24.2731 134.331 27.1784 136.307 31.3472C138.295 35.54 139.095 39.189 138.707 42.2942C138.344 45.3879 136.415 47.7628 132.921 49.419C129.427 51.0752 126.356 51.0702 123.707 49.4042C121.082 47.7268 118.776 44.7917 116.789 40.5988ZM131.319 33.7115C130.474 31.9283 129.645 30.4914 128.833 29.4008C128.034 28.2747 127.102 27.4917 126.038 27.0518C124.998 26.6005 123.803 26.6947 122.453 27.3343C121.104 27.9739 120.262 28.8449 119.929 29.9472C119.62 31.0381 119.636 32.2552 119.978 33.5983C120.332 34.906 120.932 36.4514 121.777 38.2345C122.645 40.0659 123.484 41.5567 124.295 42.7069C125.094 43.833 126.026 44.616 127.091 45.0559C128.144 45.4717 129.345 45.3598 130.694 44.7201C132.044 44.0805 132.891 43.2216 133.235 42.1434C133.569 41.041 133.552 39.824 133.187 38.4923C132.81 37.1364 132.187 35.5429 131.319 33.7115Z" fill="white"/>
<circle cx="131.504" cy="10.8932" r="7.5" transform="rotate(-25.3608 131.504 10.8932)" fill="#FEFEFE"/>
</g>
</svg>

        </div>

        <div className="text-center absolute bottom-5 text-white w-full">
          <span className="text-center">
            Sevenup Bottling Company 2024. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="w-[50%] h-screen flex justify-center place-items-center bg-[#F6F7FA]">
        {
          state === "login" ?
          <>
              < div className="w-[60%] h-[563px] flex flex-col gap-[80px] border-2 border-red-500">

<div className="flex flex-col gap-[30px] text-center">
    <span className="font-[600] text-[20px] leading-[30px] text-[#464646]">Welcome To HR360</span>
    <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">Please enter your email and password</span>
</div>

  <form className="flex flex-col h-[393px] justify-between" action="" onSubmit={(e)=> e.preventDefault()}>
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="loginemail">Email</label>
      <input id="loginemail" value={email} onChange={(e)=> setEmail(e.target.value)} className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="email" placeholder="Enter your email" required/>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="loginpassword">Password</label>
      <input id="loginpassword" value={password} onChange={(e)=> setPassword(e.target.value)} className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="password" placeholder="Enter your password" required/>
      </div>
      
    </div>
    <button className="h-[70px] bg-[#176B87] font-[600] text-[24px] leading-[36px] text-white rounded-[10px]" onClick={handleLogin}>Login</button>
  </form>


</div>
          </>
          :
          <>
            < div className="w-[60%] h-[700px] flex flex-col gap-5 border-2 border-red-500">


            <div className="flex flex-col gap-[10px] text-center">
    <span className="font-[600] text-[20px] leading-[30px] text-[#464646]">Welcome To HR360</span>
    <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">Please sign up for an account </span>
</div>

  <form className="flex flex-col h-[600px] justify-between" action="" onSubmit={(e)=> e.preventDefault()}>
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="name">First Name</label>
      <input id="name" className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="text" placeholder="Enter your first name" required/>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="surname">Surname</label>
      <input id="surname" className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="email" placeholder="Enter your surname" required/>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="loginemail">Email</label>
      <input id="loginemail" value={email} onChange={(e)=> setEmail(e.target.value)} className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="email" placeholder="Enter your email" required/>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="font-[500] text-[16px] leading-[24px] text-[#464646]" htmlFor="loginpassword">Password</label>
      <input id="loginpassword" value={password} onChange={(e)=> setPassword(e.target.value)} className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none" type="password" placeholder="Enter your password" required/>
      </div>
      
    </div>
    <button className="h-[70px] bg-[#176B87] font-[600] text-[24px] leading-[36px] text-white rounded-[10px]">Sign Up</button>
  </form>


</div>
          </>
        }
      </div>
    </div>
  );
};

export default Login;
