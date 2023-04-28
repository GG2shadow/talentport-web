export default function CreateAccount() {
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="../" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-44 mr-2" src="talentport-logo.png" alt="logo"/>  
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            {/* Learn about Talentport */}
                            <label for="learn-about-tp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How did you learn about Talentport?</label>
                            <select id="learn-about-tp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option>Approached by Talentport Team</option>
                                <option>Colleague</option>
                                <option>KitaLulus App</option>
                                <option>Instagram</option>
                                <option>TikTok</option>
                                <option>Twitter</option>
                                <option>Talentport&apos;s Partner (Community/ Organization)</option>
                                <option>Indeed</option>
                                <option>LinkedIn</option>
                                <option>Grabjobs</option>
                            </select>
                            <h2 class="text-tp-primary font-bold">Login Details</h2>
                            {/* Email */}
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. name@company.com" required=""/>
                            </div>
                            {/* Password */}
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" required=""/>
                            </div>
                            {/* Confirm Password */}
                            <div>
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" required=""/>
                            </div>
                            {/*}
                            <h2 class="text-tp-primary font-bold">Personal Details</h2>
                            {/ First Name /}
                            <div>
                                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="first-name" name="first-name" id="first-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Tony" required=""/>
                            </div>
                            */}
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 text-tp-primary bg-gray-100 border-gray-300 rounded focus:ring-tp-primary dark:focus:ring-tp-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-tp-primary hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-tp-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-tp-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="../" class="font-medium text-tp-primary hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}