export const ProgressBar = () => {
    return (
        <>
            {/* <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-1/2 rounded-full" ></div>
            </div> */}
            <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: "45%" }} ></div>
            </div>
        </>

    );
};