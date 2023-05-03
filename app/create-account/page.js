export default function CreateAccount() {
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <a href="../" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-44 mr-2" src="talentport-logo.png" alt="logo"/>  
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
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
                            <h2 class="text-tp-primary font-bold">Personal Details</h2>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                            {/* First Name */}
                            <div>
                                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="first-name" name="first-name" id="first-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Tony" required=""/>
                            </div>
                            {/* Last Name */}
                            <div>
                                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="last-name" name="last-name" id="last-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Stark" required=""/>
                            </div>
                            </div>
                            {/* Phone Number */}
                            <div>
                                <label for="phone-num" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input type="phone-num" name="phone-num" id="phone-num" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. +65 9999 9999" required=""/>
                            </div>
                            {/* Nationality */}
                            <label for="nationality" class="block text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
                            <select id="nationality" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
                                <option>Singapore</option>
                                <option>Malaysia</option>
                                <option>Indonesia</option>
                                <option>Philippines</option>
                                <option>Others</option>
                            </select>
                            <h2 class="text-tp-primary font-bold">Education</h2>
                            {/* Current/Last Education Level */}
                            <label for="c-l-education-level" class="block text-sm font-medium text-gray-900 dark:text-white">Current/Last Education Level</label>
                            <select id="c-l-education-level" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
                                <option>High School (i.e., SMA, SMK, MAN)</option>
                                <option>D1 (Diploma)</option>
                                <option>D2 (Diploma)</option>
                                <option>D3 (Diploma)</option>
                                <option>D4 (Diploma)</option>
                                <option>S1 (Undergraduate/Bachelor Degree)</option>
                                <option>S2 (Post-Graduate/Master Degree)</option>
                                <option>S3 (Doctoral Degree)</option>
                            </select>
                            {/* Graduation Status */}
                            <label for="graduation-status" class="block text-sm font-medium text-gray-900 dark:text-white">Graduation Status</label>
                            <select id="graduation-status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
                                <option>Graduated</option>
                                <option>Active student</option>
                                <option>Not currently a student, but I enrolled to university</option>
                                <option>Not currently a student, because I did not go to university</option>
                            </select>
                            {/* Current/Last School */}
                            <div>
                                <label for="c-l-school" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current/Last School</label>
                                <input type="c-l-school" name="c-l-school" id="c-l-school" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Universitas Bina Nusantara" required=""/>
                            </div>
                            {/* Major */}
                            <div>
                                <label for="major" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Major</label>
                                <input type="major" name="major" id="major" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Computer Science" required=""/>
                            </div>
                            {/* Graduation Date */}
                            <label for="graduation-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduation Date</label>
                            <div class="relative max-w-sm" id="graduation-date">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                            </div>
                            <h2 class="text-tp-primary font-bold">Experience</h2>
                            {/* LinkedIn */}
                            <div>
                                <label for="linkedin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link to Your LinkedIn</label>
                                <input type="linkedin" name="linkedin" id="linkedin" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. www.linkedin.com/in/yaojiex" required=""/>
                            </div>
                            {/* GitHub */}
                            <div>
                                <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link to Your GitHub</label>
                                <input type="github" name="github" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. https://github.com/GG2shadow/" required=""/>
                            </div>
                            {/* Technologies You Use */}
                            <div>
                                <label for="tech-you-use" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies You Use</label>
                                <input type="tech-you-use" name="tech-you-use" id="tech-you-use" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Google Ads, SEMrush" required=""/>
                            </div>
                            {/* CV/Resume */}
                            <label for="cv-resume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CV/Resume</label>
                            <div class="flex items-center justify-center w-full" id="cv-resume">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div> 
                            <input type="cv-resume-link" name="cv-resume-link" id="cv-resume-link" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Google Drive Link" required=""/>
                            {/* Portfolio */}
                            <label for="portfolio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio</label>
                            <div class="flex items-center justify-center w-full" id="cv-resume">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div> 
                            <input type="cv-resume-link" name="cv-resume-link" id="cv-resume-link" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. Google Drive Link" required=""/>
                            {/* Jobsearch Activity */}
                            <label for="jobsearch-activity" class="block text-sm font-medium text-gray-900 dark:text-white">Are you actively looking for a role?</label>
                            <select id="jobsearch-activity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
                                <option>Yes, I need to find my next job ASAP</option>
                                <option>I am currently employed but open to learning about other opportunities</option>
                                <option>Only open to part-time arrangements</option>
                                <option>No</option>
                            </select>
                            {/* Notice Period with Current Employer */}
                            <label for="notice-period" class="block text-sm font-medium text-gray-900 dark:text-white">Notice Period with Current Employer</label>
                            <select id="notice-period" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
                                <option>I am currently not working</option>
                                <option>Less than 1 week</option>
                                <option>1 - 2 weeks</option>
                                <option>2 weeks - 1 month</option>
                                <option>More than 1 month</option>
                            </select>
                            <h2 class="text-tp-primary font-bold">Expectations</h2>
                            {/* Preferred Employment Type */}
                            <label for="preferred-employment-type" class="block text-sm font-medium text-gray-900 dark:text-white">Preferred Employment Type</label>
                            <div class="flex items-start checkbox-vertical-list">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 text-tp-primary bg-gray-100 border-gray-300 rounded focus:ring-tp-primary dark:focus:ring-tp-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Full-Time (40 hours/week without limited period)</label>
                                </div>
                            </div>
                            <div class="flex items-start checkbox-vertical-list">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 text-tp-primary bg-gray-100 border-gray-300 rounded focus:ring-tp-primary dark:focus:ring-tp-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Internship (40 hours/week with limited period)</label>
                                </div>
                            </div>
                            <div class="flex items-start checkbox-vertical-list">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 text-tp-primary bg-gray-100 border-gray-300 rounded focus:ring-tp-primary dark:focus:ring-tp-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Part-Time/Freelance (working hours & period varied)</label>
                                </div>
                            </div>
                            {/* Current Salary */}
                            <div>
                                <label for="current-salary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Salary (in IDR)</label>
                                <input type="current-salary" name="current-salary" id="current-salary" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. 5.000.000" required=""/>
                            </div>
                            {/* Expected Salary */}
                            <div>
                                <label for="expected-salary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Salary (in IDR)</label>
                                <input type="expected-salary" name="expected-salary" id="expected-salary" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. 5.000.000" required=""/>
                            </div>
                            {/* Expected Start Date */}
                            <label for="expected-start-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Start Date</label>
                            <div class="relative max-w-sm" id="expected-start-date">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                            </div>
                            <h2 class="text-tp-primary font-bold">Others</h2>
                            {/* Learn about Talentport */}
                            <label for="learn-about-tp" class="block text-sm font-medium text-gray-900 dark:text-white">How did you learn about Talentport?</label>
                            <select id="learn-about-tp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary">
                                <option value="" disabled selected></option>
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
                            {/* Referral Code */}
                            <div>
                                <label for="referral-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referral Code</label>
                                <input type="referral-code" name="referral-code" id="referral-code" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tp-primary focus:border-tp-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tp-primary dark:focus:border-tp-primary" placeholder="eg. XY123" required=""/>
                            </div>
                            {/* T&C Checkbox */}
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