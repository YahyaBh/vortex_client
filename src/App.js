import React, { Fragment } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Admin from "./Front_side/Admin/Components/Admin";
import Show from "./Front_side/Admin/Components/Show";
import Services from "./Front_side/Admin/Components/Services";
import Orders from "./Front_side/Admin/Components/Orders";
import CreateWebsite from "./Front_side/Admin/Components/CreateWebsite";
import Chat from "./Front_side/Admin/Components/Chat";
import Users from "./Front_side/Admin/Components/Users";
import SignIn from "./Front_side/client/Components/SignIn";
import SignUp from "./Front_side/client/Components/SignUp";
import Navbar from "./Front_side/client/Components/Navbar";
import videoHeader from './Assets/Videos/Blurred Video of Scripts Being Typed.mp4';
import ImageAbout from './Assets/Images/vector_about.png';
import YahyaBouhsine from './Assets/Images/profile.b5697fde8b8a45586598.png';
import Youness from './Assets/Images/youness.png';
import Moujahid from './Assets/Images/FRAZZIX.png';


import { AiFillHtml5 , AiOutlineCamera  , AiOutlineDatabase , AiOutlineCloudServer} from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaLaravel } from 'react-icons/fa';
import { DiMysql , DiNodejsSmall ,  DiReact , DiCss3 , DiSass , DiPhp , DiPhotoshop , DiIllustrator , DiVisualstudio} from 'react-icons/di';
import { SiTypescript , SiAdobepremierepro , SiAdobeaftereffects } from 'react-icons/si';
import { MdOutlineDesignServices , MdOutlineMiscellaneousServices} from 'react-icons/md';
import { RiCustomerServiceLine } from 'react-icons/ri';

import './App.scss'


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { CgWebsite } from 'react-icons/cg'
import { VscDebugAll } from 'react-icons/vsc'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import AOS from "aos";



function App() {


  AOS.init();


  return (
    <Fragment>

      <header className="app__header" id="home">
        <Navbar />


        <div className="app__header__content">

          <div className="app__header__title">
            {/* <div className="app__header__title__container">
              <h1>Make Your Sales </h1>
              <div className="words">
                <span className="span-word">Easier</span>
                <span className="span-word">Better</span>
                <span className="span-word">Safer</span>
                <span className="span-word">Faster</span>
              </div>
            </div> */}

            <div class="wrapper">
              <h1>Make Your Sales </h1>
              <div class="words">
                <span>Easier</span>
                <span>Better</span>
                <span>Safer</span>
                <span>Faster</span>
              </div>
            </div>


            <p>We will help you react your dreams by <br /> making you the most professional website among the market</p>

            <Link to='/signup' class="app__header__title__sign">
              <span className="app__header__title__sign__get">GET STARTED</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>

          <video className="app__video" loop autoPlay={true}>
            <source src={videoHeader} type="video/mp4" />
            <source src={videoHeader} type="video/ogg" />
          </video>
        </div>


      </header>


      <section className="app__about" id="about">
        <div className="app__about__content">
          <h2>What Is WebIna ?</h2>
          <p>WebIna is a website that helps you make your dreams
            easier and build you a full appliaction for your business , you can easly choose any website
            from our lists and we will finish it as soon as possible to make your work go easier on you.</p>
        </div>

        <div className="app__about__image">
          <img src={ImageAbout} alt="about_us" width='500px' />
        </div>
      </section>



      <section className="app__more__about">
        <div className="app__more__about__image"></div>
        <div className="app__more__about__content">
          <h2>More About WebIna</h2>
          <p>WebIna is a website that helps you make your dreams
            easier and build you a full appliaction for your business , you can easly choose any website
            from our lists and we will finish it as soon as possible to make your work go easier on you.</p>
          <div className="app__more__about__card" data-aos="fade-right">
            <CgWebsite /> <h2>Website Development</h2>
          </div>

          <div className="app__more__about__card" data-aos="fade-right">
            <VscDebugAll /> <h2>Websites Debugging</h2>
          </div>

          <div className="app__more__about__card" data-aos="fade-right">
            <AiOutlineDeploymentUnit /> <h2>Website Deployment</h2>
          </div>
        </div>
      </section>


      <section className="app__categories mt-5">
        <div className="app__categories__content">
          <div className="app__categories__title"><h2>WebIna_Categories</h2></div>
        </div>


        <div className="app__categories__cards">
          <div className="app__categories__cards__sep">
            <div className="app__categories__card">
              <div className="app__categories__card__content">
                <div className="app__categories__card__content__image">
                  <img className="app__categories__card__content" src="./Images/e-commerce.jpg" alt="e-commerce" />
                  <div className="app__categories__card__content__title">E-Commerce Website</div>
                  <div className="app__categories__card__content__description">Make an e-ceommerce website for your produts to make it easier for customers</div>

                </div>
              </div>
            </div>
            <div className="app__categories__card">
              <div className="app__categories__card__content">
                <div className="app__categories__card__content__image">
                  <img className="app__categories__card__content" src="./Images/landing.jpg" alt="landing-page" />
                  <div className="app__categories__card__content__title">Landing Page</div>
                  <div className="app__categories__card__content__description">Make single web page that appears marketing promotion, marketing email or an online advertisement.</div>
                </div>
              </div>
            </div>

            <div className="app__categories__card">
              <div className="app__categories__card__content">
                <div className="app__categories__card__content__image">
                  <img className="app__categories__card__content" src="./Images/blog.jpg" alt="blog" />
                  <div className="app__categories__card__content__title">Blog/News Page</div>
                  <div className="app__categories__card__content__description"></div>
                </div>
              </div>
            </div>

            <div className="app__categories__card">
              <div className="app__categories__card__content">
                <div className="app__categories__card__content__image">
                  <img className="app__categories__card__content" src="./Images/portfolio.jpg" alt="portfolio" />
                  <div className="app__categories__card__content__title">Portfolio Website</div>
                  <div className="app__categories__card__content__description"></div>
                </div>
              </div>
            </div>



            {/* <SwiperCategories /> */}
          </div>

          <div className="show__container">
            <button className="app__categories__show__button">Show All</button>
          </div>
        </div>

      </section>

      <section className="app__skills mt-5">

        <div className="app__skills__content">
          <div className="app__skills__title"><h2>WebIna_Founders</h2></div>
        </div>

        <div className="app__skills__cards">
          <div className="app__skills__card">
            <div className="app__skills__card__img">
              <img src={YahyaBouhsine} alt="founders" />
            </div>

            <div className="app__skills__card__content">
              <h3 className="app__skills__card__content__title">Yahya Bouhsine</h3>
              <p className="app__skills__card__content__description">Developer And Programmer of WebIna Company</p>
              <AiFillHtml5/><TbBrandJavascript/><FaLaravel/><DiMysql/><DiNodejsSmall/><DiReact/>
              <DiCss3/><DiSass/><DiPhp/><SiTypescript/>
              <hr/>
            </div>
          </div>

          <hr/>

          <div className="app__skills__card">
            <div className="app__skills__card__img">
              <img className="moujahid" src={Moujahid} alt="founders" />
            </div>

            <div className="app__skills__card__content">
              <h3 className="app__skills__card__content__title">Moujahid Nejjar</h3>
              <p className="app__skills__card__content__description">Designer & UX/UI Designer of WebIna Company</p>
              <AiOutlineCamera/><DiPhotoshop/><DiIllustrator/><SiAdobepremierepro/><SiAdobeaftereffects/><DiReact/>
              <MdOutlineDesignServices/>
              <hr/>
            </div>
          </div>

          <hr/>

          <div className="app__skills__card">
            <div className="app__skills__card__img">
              <img src={Youness} alt="founders" />
            </div>

            <div className="app__skills__card__content">
              <h3 className="app__skills__card__content__title">Youness Mekki</h3>
              <p className="app__skills__card__content__description">Security & Database Managment</p>
              <AiOutlineDatabase/><AiOutlineCloudServer/><DiVisualstudio/><MdOutlineMiscellaneousServices/><RiCustomerServiceLine/>
              <hr/>
            </div>
          </div>

          <hr/>
        </div>

        
      </section >

      <Routes>

        {/* Admin Space */}
        {/* <Route exact path='/' element={<Client />} /> */}
        <Route exact path='/admin' element={<Admin />} />



        <Route exact path='/admin/services' element={<Services />} />

        <Route exact path='/admin/orders' element={<Orders />} />
        <Route exact path='/admin/order/:id' element={<Orders />} />



        <Route exact path='/admin/users' element={<Users />} />
        <Route exact path='/admin/user/:id' element={<Users />} />



        <Route exact path='/admin/createWebsite' element={<CreateWebsite />} />


        {/* Client Space */}
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path='/websites' element={<Show />} />
        <Route exact path='/website/:id' element={<Show />} />
        <Route exact path='/admin/chats' element={<Chat />} />
        <Route exact path='/admin/chat/:id' element={<Chat />} />


      </Routes>
    </Fragment >
  );
}

export default App;




function SwiperCategories() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swipper-category"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}