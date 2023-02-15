import RegisterForm from "@/components/RegisterForm";


export default function Page() {

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="mb-6 font-extralight text-2xl text-">
                REGISTER
            </h1>
            <div className="w-full max-w-sm bg-white shadow-md px-8 pt-8 pb-6 mb-12">
                <RegisterForm />
            </div>
            <p className="text-center text-gray-500 text-xs">
                &copy; 2023. All rights reserved.
            </p>
        </div>
    );
}
