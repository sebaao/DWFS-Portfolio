import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillMessage,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import coding from '../public/coding.png';
import designing from '../public/designing.png';
import Image from 'next/legacy/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useDownloader from 'react-use-downloader';
import deployment from '../public/deployment.png';
import support from '../public/support.png';
import joseg from '../public/avatar.jpg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Detectar si el usuario tiene la preferencia de modo oscuro configurada en su sistema operativo
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Establecer el modo oscuro según la preferencia del sistema operativo
    setDarkMode(prefersDarkMode);
  }, []);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/Sebastián Aburto - CV  EN.pdf';
  const filename = 'Sebastián Aburto - CV  EN.pdf';
  
  const [index, setIndex] = useState(0);
  const images = [
    { src: '/p1.PNG', url: 'https://sebaao.github.io/DWFS-Proyecto-1/' },
    { src: '/p2.PNG', url: 'https://sebaao.github.io/DWFS-Proyecto-2/' },
    { src: '/p3.PNG', url: 'https://sebaao.github.io/DWFS-Proyecto-3/' },
    { src: '/p4.PNG', url: 'https://ratitagamer.netlify.app/' },
    { src: '/p5.PNG', url: 'https://devclanproject.netlify.app/' },
  ];
  
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Sebastián A. López - Portfolio</title>
        <meta name="description" content="Soy Sebastián, desarrollador web y publicista de la UDD. Contactáme!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-grey px-10 dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-poppins text-xl">My Portfolio</h1>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-red-500 text- to-blue-900  text-white px-4 py-2 border-none rounded-md ml-8 "
                  onClick={() => download(fileUrl, filename)}
                >
                  Save my CV
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 mt-[-150px]">
          <div className=" flex justify-center mx-auto bg-gradient-to-b shadow-2xl from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-60 md:w-60">
              <Image
                src={joseg}
                layout="fill"
                objectFit="cover"
                alt="profile picture"
              />
            </div>
            <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-yellow-500 md:text-6xl">
              Sebastián A. López
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Developer Full Stack and Publicist.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2x1 mx-auto md:text-xl">
            Hey! I'm a publicist and developer offering programming and content design services, using web development technologies and marketing strategies.
             <p>Take a look at my projects, and let's make digital magic together.✏️</p>
            </p>

      
          </div>
        </section>
        <section>
    
        <div className="text-center py-8">
  <h2 className="text-lg font-medium mb-4 text-black dark:text-gray-200 ">Send to me a WhatsApp!💬</h2>
  <a href="https://wa.me/56975467484" target="_blank">
  <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 border-none rounded-md">
    Go to WhatsApp
  </button>
</a>

</div>


        
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">🪀About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I'm a really Junior web developer who is still learning the new technologies required to solve problems in the design, Development and deployment of Web application. With a lot of motivation to still learn a little bit more.
              <span className="text-teal-500"> A Full-Stack developer </span> who
              has expertise in
              <span className="text-teal-500"> Javascript, </span>
              <span className="text-teal-500"> Next.Js, </span>
              <span className="text-teal-500"> React.Js, </span>
              <span className="text-teal-500"> Node.Js, </span>
              <span className="text-teal-500"> MongoDb </span> and
              <span className="text-teal-500"> Firebase </span> and more. I have collaborated with talented people to create digital products for both business and consumer use, using the latest web technologies.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including web design, development/programming and deployment, marketing support and digital campaign strategies.
            </p>
          </div>
          <div className="lg:flex gap-3">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={designing}
                width={50}
                height={50}
                alt="Beautiful Designs"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Design for your Web Application
              </h3>
              <p className="py-2">
              If you can dream it, you can create it.
              </p>
            
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Adobe Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe Illustrator</p>
         
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={coding}
                width={50}
                height={50}
                alt="Code your dream project"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your project
              </h3>
              <p className="py-2">
               by the use of API's.
                intergrated with databases like MongoDB and Firebase.
              </p>
              <h4 className="py-4 text-teal-600">Programming Tools I Use</h4>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">Mongo Compass</p>
              <p className="text-gray-800 py-1">Visual Studio Code</p>

             

            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={deployment}
                width={50}
                height={50}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Project Deployment and Maintenance
              </h3>
              <p className="py-2">
              You're never alone; you're with me. Always, when you need it.              </p>
              <h4 className="py-4 text-teal-600">Support Tools I Use</h4>
       
              <p className="text-gray-800 py-1">Teamviewer</p>
              <p className="text-gray-800 py-1">Cpanel</p>
              <p className="text-gray-800 py-1">Filezilla</p>
              <p className="text-gray-800 py-1">Github</p>


            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 bg-beige">
              <Image
                src={support}
                width={50}
                height={50}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Coming Soon...
              </h3>
              <p className="py-2">
              Are you interested in deploying a marketing campaign based on your web? Accounts? Legal?              </p>
              <h4 className="py-4 text-teal-600">My partners</h4>
              <p className="text-gray-800 py-1">Profesional Accountant</p>
              <p className="text-gray-800 py-1">Lawyer expert on digital law</p>
              <p className="text-gray-800 py-1">Marketing Team</p>
              <p className="text-gray-800 py-1">Profesional Designers</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              💻Projects completed and proposals
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            In my constant work to develop new sites with different paradigms, i made a lot of different projects for really different businesses and people. Working with
              <span className="text-teal-500"> startups </span>
              guided another <span className="text-teal-500">business </span>
              and collaborated with talented people to create digital products for any.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design, programming and assistant.
            </p>
          </div>

          <div className="text-center py-10">
  <h2 className="text-lg font-medium mb-4 text-black dark:text-gray-200 ">Look at my Github!👀</h2>
  <a href="https://github.com/sebaao" target="_blank">
  <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-2 border-none rounded-md">
    Seba's Github Profile
  </button>
</a>

</div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="lg:flex gap-3">
              <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                <h3 className="text-2xl py-1 dark:text-black ">
                Something that I do.

                </h3>
                <div>
                  <img
                    src={images[index].src}
                    onClick={() => window.open(images[index].url)}
                    alt='Projects Carrousel '
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center gap-16 text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl ">
            <a href="mailto:saburto11@gmail.com">
              {' '}
              <AiFillMail className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Email
              </span>
            </a>
            <a href="tel:+56975467484">
              {' '}
              <AiFillPhone className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Call{' '}
              </span>
            </a>
     
            <a href="https://www.linkedin.com/in/sebastian-a-lopez/">
              {' '}
              <AiFillLinkedin className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce " />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Linkedin
              </span>
            </a>
            <a href="https://www.instagram.com/sebaao.o/">
              {' '}
              <AiFillInstagram className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Instagram
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
