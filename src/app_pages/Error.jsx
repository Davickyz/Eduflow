const Error = () =>{
  return(
    <>
      <section class="bg-primary antialiased h-screen w-screen flex items-center justify-center font-sans">

        <div class="p-8 md:p-12 text-center bg-secondary rounded-3xl shadow-lg mx-4">
            
            <div class="flex items-center justify-center w-16 h-16 bg-secondary-light rounded-full mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l4 4m0-4l-4 4"></path>
                </svg>
            </div>

            <h1 class="text-9xl font-extrabold text-gray-500 opacity-20 mb-[-20px]">404</h1>

            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                User Not Found
            </h2>

            <div class="space-y-4 mb-12">
                <p class="text-lg text-purple-accent max-w-md mx-auto">
                    We couldn't find a user matching that ID. It's possible the link is outdated or broken.
                </p>
                <p class="text-md text-primary font-medium bg-primary/10 px-4 py-2 rounded-full inline-block border border-primary/20">
                    Action: Please check the URL carefully for typos.
                </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/" class="w-full sm:w-auto px-8 py-3 text-gray-800 rounded-xl font-semibold transition-all duration-150 active:scale-95">
                    Back to Homepage
                </a>
                
                <a href="/signup" class="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow-md shadow-primary/30 hover:bg-primary/90 transition-all duration-150 active:scale-95">
                    Register New User
                </a>
            </div>
        </div>

      </section>
    </>
  )
}

export default Error;