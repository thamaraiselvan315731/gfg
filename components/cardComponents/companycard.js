import { ProgressBar } from "../../components/Progresbar/Progresbar";
import { InfoTool } from "../../components/InfoTool/InfoTool"
export const CompanyCard = () => {
    return (<>
        <div class="overflow-hidden rounded-lg shadow-lg border mt-5  ml-2 divide-y grid grid-cols-1">
            <div class="divide-y ">
                <header class="flex items-center justify-start mb-2 ">
                    <h1 class="font-semibold ml-5 mt-4">
                        My Company Page
                    </h1>
                </header>

                <div class=" flex justify-center flex-col justify-items-center divide-y">
                    <div class="flex flex-row mt-4">
                        <article class="flex items-center justify-center ">
                            <img

                                className="block h-8 w-auto ml-2 mr-2"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </article>
                        <div class="flex flex-col ">
                            <header class="flex items-center justify-start ">
                                <h1 class="font-bold">
                                    Indium Software
                                </h1>
                                <div class="ml-1">
                                    <InfoTool />
                                </div>


                            </header>
                            <div class="flex items-center justify-start ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h5 class="font-normal ml-1 text-sm">
                                    Califonia, London
                                </h5>
                            </div>
                            <div class="flex items-center justify-start ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>

                                <h6 class="font-light ml-1 text-sm">
                                    5000+, Employees.
                                </h6>
                            </div>

                            <div class="flex items-center justify-start mr-2 ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>

                                <h6 class="font-light italic ml-1 text-sm">
                                    Digital and QA services
                                </h6>

                            </div>

                            <div class="flex items-center justify-center mt-3 mb-5">
                                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border-sky-500 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 border-sky-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Manage Company</button>
                            </div>

                            <div class="flex items-center justify-center mt-3 mb-5">
                                <h3 class="font-semibold underline ">
                                    Promote
                                </h3>
                            </div>

                        </div> </div>

                </div>
                <div class=" flex justify-center flex-col justify-items-center divide-y">
                    <div class="flex flex-row mt-4">
                        <article class="flex items-center justify-center ">
                            <img

                                className="block h-8 w-auto ml-2 mr-2"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </article>
                        <div class="flex flex-col ">
                            <header class="flex items-center justify-start ">
                                <h1 class="font-bold">
                                    Texcomms
                                </h1>
                                <div class="ml-1">
                                    <InfoTool />
                                </div>


                            </header>
                            <div class="flex items-center justify-start ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h5 class="font-normal ml-1 text-sm">
                                    Coimbatore, India
                                </h5>
                            </div>
                            <div class="flex items-center justify-start ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>

                                <h6 class="font-light ml-1 text-sm">
                                    5000+, Employees.
                                </h6>
                            </div>

                            <div class="flex items-center justify-start  ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>

                                <h6 class="font-light italic ml-1 text-sm">
                                    Digital and QA services
                                </h6>

                            </div>

                            <div class="flex items-center justify-center mt-3 mb-5">
                                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Manage Company</button>
                            </div>

                            <div class="flex items-center justify-center mt-3 mb-5">
                                <h3 class="font-semibold underline ">
                                    Promote
                                </h3>
                            </div>

                        </div> </div>

                </div>
            </div>
            <div>

            </div>

        </div>

    </>)
}