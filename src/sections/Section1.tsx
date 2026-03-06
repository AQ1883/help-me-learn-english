
function Section1() {
  return (
    <>

<section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
  <div className="flex justify-center items-center md:grid-cols-2">
    <div>
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Hey 👋 I am <br className="block sm:hidden" />
        Ahmed
      </h2>
      <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
        I’m Ahmed, and I’m working on a personal project to learn
        English alongside programming. Through this project, I’m
        combining language skills with practical coding applications to
        enhance my learning experience in both fields. My goal is to
        continuously improve and eventually share this project with
        others.
      </p>

      <p className="mt-4 text-xl text-gray-600 md:mt-8">
        <span className="relative inline-block">
          <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
          <span className="relative"> Have a question? </span>
        </span>
        <br className="block sm:hidden" />
        Ask me on{" "}
        <a target="_blank"
          href="https://www.linkedin.com/in/ahmed-alqurashi-72198020b/"
          title=""
          className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
        >
          Linkedin
        </a>
      </p>
    </div>

   
  </div>
</div>
</section>
    </>
  )
}

export default Section1

