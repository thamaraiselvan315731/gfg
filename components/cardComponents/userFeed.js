import { ProgressBar } from "../../components/Progresbar/Progresbar";
import { InfoTool } from "../../components/InfoTool/InfoTool"
export const UserFeed = () => {
    return (<>
        <div class=" flex-1 overflow-hidden rounded-lg shadow-lg border ml-2 lg:w-3/4 xl:w-3/4 xxl:w-3/4">

            <div class=" flex justify-center flex-col justify-items-center">
                <div>
                    <article class="flex items-center justify-center ">

                        <img
                            class=" h-20 rounded-full flex items-center justify-center leading-tight mt-5 "

                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        /> </article>
                    <header class="flex items-center justify-center ">
                        <h1 class="font-bold">
                            John Doe
                        </h1>
                    </header>
                    <div class="flex items-center justify-center ">
                        <h6 class="font-normal text-sm">
                            Application Engineer at ABC Corp
                        </h6>
                    </div>
                    <div class="flex items-center justify-center ">
                        <h6 class="font-light text-sm">
                            Chennai, Tamil Nadu, India.
                        </h6>
                    </div>

                    <div class="flex flex-row  justify-center mt-5 ">
                        <div>
                            <h6 class="font-light italic text-sm">
                                Profile strength: Intermediate
                            </h6>
                        </div>
                        <div class="ml-1">
                            <InfoTool />
                        </div>

                    </div>

                    <footer class="flex items-center justify-center leading-none p-2 md:p-4">

                    </footer>

                    <div class="flex items-center justify-center mt-3 mb-5">
                        <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white border-sky-500 dark:hover:bg-gray-700">Update Profile</button>
                    </div>
                </div>

            </div>
        </div>

    </>)
}