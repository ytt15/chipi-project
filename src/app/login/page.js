import Image from "next/image";

export default function loginPage() {
  return (
    <div
      className="flex justify-center flex-col items-center h-full bg-gradient-to-t from-white to-violet-700"
      style={{ height: "70vh" }}
    >
      <figure>
        <Image
          src="/LOGO.svg"
          alt="chipiLogo"
          className="logo"
          width={185}
          height={160}
          style={{ height: "250px" }}
        />
      </figure>
      <h3 className="font-sans text-5xl font-thin text-opacity-50 subpixel-antialiased text-purple-700">
        Login
      </h3>
      <div>
        <div className="flex flex-col items-center justify-center gap-0 divide-y h-80 divide-purple-800  ">
          <input
            type="text"
            className="bg-purple-600 bg-opacity-25 rounded-t-lg border-2 border-purple-700"
            placeholder=" Phone"
          />
          <input
            type="password"
            className="bg-purple-600 bg-opacity-25 rounded-b-lg border-2 border-purple-700"
            placeholder=" Password"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h5 className="underline text-purple-700">
            Recuperar Contraseña?
          </h5>
          <h5 className="underline text-purple-700">
            Registrate
          </h5>
          <button class="bg-purple-900 text-white hover:bg-violet-500 font-bold py-2 px-4 mt-3 rounded-full">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
