import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-6xl bg-white p-8 shadow-lg rounded-lg h-full">
        <div>
        <img
          src="https://bc3-production-assets-cdn.basecamp-static.com/5321781/people/BAhpBIISoQI=--54400445fe389a1609c1981816b42fd6f04890d5/avatar/in/260/3a3ea00cfc35332cedf6e5e9a32e94da.avif?v=1"
          alt=""
          className="mx-auto h-20 w-auto rounded-full"
        />
        <h1 className="text-center font-bold text-slate-700 text-4xl">
          Get Basecamp on your mobile device
        </h1>
        </div>
        <div className="w-full h-0.5 bg-gray-100 mt-6"></div>
        <div>
          <p className="text-center px-40 py-8">
          Basecamp works great on the go! Download our free apps for iOS and Android to get notifications about what’s happening in your Basecamp wherever you are.
          </p>
          <div className="flex justify-center items-center mb-6">
            <img
              src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/app_store_ios-47da2a2f17d0ffd3faa9a86598460040c352906ab7ba3a7ff123d6e5aa21516b.png"
              alt=""
              className="mx-1 h-11 w-auto"
            />
            <img
              src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/app_store_android-443248f2c61596d07d906fe612354e1ae774ee80462ff809918645b3a9ffec5d.png"
              alt=""
              className="mx-1 h-11 w-auto"
            />
          </div>
          <label className="mx-28">
              <b>If your device isn’t listed you’ll need to </b>
              <a href="#" className="text-blue-500 hover:text-blue-700 underline"><b>enable notifications.</b>
              </a>
              <br />
              <li className="mx-32">
                <a href="#" className="text-blue-500 hover:text-blue-700 underline">Install the Android app </a>
                then
                <a href="#" className="text-blue-500 hover:text-blue-700 underline"> enable notifications.</a>
              </li>
              <li className="mx-32">
                <a href="#" className="text-blue-500 hover:text-blue-700 underline">Install the iOS app </a>
                then
                <a href="#" className="text-blue-500 hover:text-blue-700 underline"> enable notifications.</a>
              </li>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
