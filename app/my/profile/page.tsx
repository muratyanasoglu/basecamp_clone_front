import React from "react";

const MyProfile: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 shadow-lg rounded-lg">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="block">
              <img
                src="https://bc3-production-assets-cdn.basecamp-static.com/5321781/people/BAhpBIISoQI=--54400445fe389a1609c1981816b42fd6f04890d5/avatar/in/260/3a3ea00cfc35332cedf6e5e9a32e94da.avif?v=1"
                alt=""
                className="mx-auto h-32 w-auto rounded-full"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <label
                htmlFor="fileInput"
                className="text-xs font-light p-2 border rounded-full cursor-pointer border-neutral-300"
              >
                Upload a photo…
                <input type="file" id="fileInput" className="sr-only" />
              </label>
            </div>
            <div className="mt-0 flex justify-center items-center">
              <div className="flex justify-center items-center text-base mt-5 h-10 w-72 bg-amber-50 border-dashed border-2 border-yellow-300 rounded-lg from-neutral-600 text-slate-600">
                Upload a photo to show your 😃!
              </div>
            </div>

            {/* name */}
            <label
              htmlFor="email"
              className="mt-5 block text-base font-bold leading-6 text-slate-700"
            >
              Name
              <span className="text-sm font-light"> required</span>
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="block w-full rounded-md border-2 p-2 text-slate-700 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Location */}
            <label
              htmlFor="email"
              className="mt-5 block text-base font-bold leading-6 text-slate-700"
            >
              Location
            </label>
            <div>
              <input
                id="location"
                name="location"
                type="location"
                autoComplete="location"
                required
                className="block w-full rounded-md border-2 p-2 text-slate-700 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Short bio or current status*/}
            <label
              htmlFor="email"
              className="mt-5 block text-base font-bold leading-6 text-slate-700"
            >
              Short bio or current status
            </label>
            <div>
              <input
                id="bio"
                name="bio"
                type="bio"
                autoComplete="bio"
                required
                className="block w-full rounded-md border-2 p-2 text-slate-700 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Email address required*/}
            <label
              htmlFor="email"
              className="mt-5 block text-base font-bold leading-6 text-slate-700"
            >
              Email address required
              <span className="text-xs font-light"> required</span>
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-2 p-2 text-slate-700 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          {/* Login info*/}
          <p className="mt-2 text-md text-slate-700">
            <b>Login info</b>
            <br />
            You log in with a password.
          </p>
          <a href="#" className="underline text-blue-700">
            Set up 2FA or change your login info here.
          </a>


           {/* Save Button*/}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center text-white px-3 py-2 text-base rounded-full leading-6 shadow-sm border border-black-100 bg-green-600"
            >
              Save my changes
            </button>
          </div>
          <hr />
        </form>

         {/* Remove Button*/}
        <div>
          <p className="mt-2 text-base text-slate-700">
            <b>
              Want to leave the <i>Fırat DİKMEN</i> Basecamp account?
            </b>
            <br />
          </p>
          <a href="#" className="underline text-blue-700">
            Remove me from this account…
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
