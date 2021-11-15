import tw from 'twin.macro';

// *************** Global ********************
export const MainContainer = tw.div` md:px-10 mx-auto px-5 py-16`;

// *************** Navbar ********************
export const NavbarMain = tw.nav`mx-auto px-5`;
export const NavbarContainer = tw.nav`capitalize  flex justify-between items-center h-16 `;

export const NavbarUl = tw.ul`text-white text-center md:flex items-center hidden`;
export const NavbarLi = tw.li`flex items-center `;

export const SocialMediaUl = tw.ul`md:flex text-white text-center hidden`;
export const SocialMediaLi = tw.li`transition-all duration-500 hover:text-red-600 pr-5`;

export const NavbarLogo = tw.strong`uppercase text-gray-200 font-bold  md:font-bold md:text-xl`;

export const NavbarToggle = tw.div`px-4 cursor-pointer md:hidden`;
export const NavbarToggleContainer = tw.div`grid grid-rows-4  items-center text-white pb-10`;





// *************** Bottom bar ********************
export const BottomContainer = tw.div`md:hidden bottom-0 left-0 right-0 fixed z-50 flex justify-center items-center w-full`;
export const BottomBtnContainer = tw.div`relative flex-1 items-center flex justify-center `;
export const BottomBtn= tw.button`w-10 h-10 hover:bg-red-600 px-1 text-white`;





// *************** Header section ********************

export const HeaderContainer = tw.div`grid md:grid-cols-2 grid-cols-1 pt-14 pb-52 md:px-10 md:my-10 mx-auto px-5`;
export const HeaderLeftContent = tw.div`uppercase text-white `;
export const HeaderSpan = tw.span`text-xl font-extrabold`;
export const HeaderTitle = tw.h1`tracking-tighter text-6xl font-extrabold `;

export const HeaderTitleSpan = tw.span`tracking-tighter capitalize text-gray-50 text-5xl font-extrabold`;

export const HeaderRightContent = tw.div`h-full w-full`;
export const HeaderRightVideo = tw.video`h-full w-full rounded-lg my-5 md:mt-0`;
// *************** Header section Location ********************

export const LocationContainer = tw.div`w-8/12 flex justify-between items-center pt-5`;
export const Location = tw.div`flex justify-between items-center`;

// *************** Header section countdown ********************

export const CountdownContainer = tw.div`pb-8 pt-4`;
export const CountdownTitle = tw.h4`capitalize  text-lg font-bold py-2`;
export const CountdownTimerContainer = tw.div`flex  text-center text-red-400 `;
export const CountdownTimer = tw.div`flex-1`;
export const CountdownTime = tw.h4`text-6xl font-bold items-center uppercase`;
export const CountdownTimerTitle = tw.p`font-semibold text-gray-400`;

// *************** About page ********************

export const AboutContainer = tw.div`grid md:grid-cols-2 grid-cols-1  py-10 rounded shadow-lg `;
export const AboutLeftContent = tw.div``;

export const AboutOverview = tw.div`text-center  uppercase mb-20`;
export const AboutSubTitle = tw.h2`tracking-tight text-red-600 text-xl font-bold `;
export const AboutSubTitleBottom = tw.h2`tracking-tight text-gray-700 text-3xl font-extrabold `;
export const Underline = tw.div` border-dashed  border-b-2 border-red-600 rounded w-2/12   mb-20 `;

export const AboutArrow = tw.span`h-20 w-10 `;
export const AboutArrowImg = tw.img` w-8/12 h-32`;


export const AboutRightContent = tw.div`pl-5 text-left bg-gray-50 mt-10 md:mt-0`;
export const AboutSubTitleRight = tw.h2`tracking-tighter capitalize text-gray-800 text-xl font-bold px-3 border-l-2 border-red-600 pb-1`;
export const AboutTitle = tw.h2`tracking-tighter text-red-600 text-5xl font-extrabold px-3 uppercase`;
export const AboutSubTitleHeading = tw.span`tracking-tighter text-gray-700 text-4xl font-extrabold px-3`;
export const AboutBlockQuote = tw.blockquote`tracking-tighter px-5 text-lg font-semibold text-gray-600 `;



// *************** Overlay ********************
export const OverlayMain = tw.div`grid md:grid-cols-4 grid-cols-2`;
export const OverlayContent = tw.div`pt-5 flex items-center text-gray-50 font-semibold `;
export const OverlayStrongContent = tw.strong`tracking-tighter text-gray-50 text-3xl font-extrabold `;
export const OverlayItems = tw.div`text-center`;



// *************** GALLERY ********************
export const GALLERYMain = tw.div`grid md:grid-cols-4 grid-cols-2 `;
export const GALLERYImg = tw.div`w-8/12 bg-red-600`;



// *************** TESTIMONIAL ********************
export const TESTIMONIALMain = tw.div`py-4 md:py-12 rounded`;
export const TESTIMONIALContainer = tw.div`container mx-auto `;
export const TESTIMONIALWrap = tw.div`flex flex-wrap md:-mx-4 mb-4 w-full`;
export const TESTIMONIALContent = tw.div`w-full md:px-4 mt-6`;
export const TESTIMONIALContentWrap = tw.div`rounded p-6 border-2 border-solid flex hover:border-gray-400 hover:bg-indigo-100 transition-colors duration-300 w-full`;

export const TESTIMONIALImgContainer = tw.div`h-20 rounded-full overflow-hidden  flex-shrink-0`;
export const TESTIMONIALImg = tw.img`w-full h-full object-cover`;

export const TESTIMONIALMobileImgContainer = tw.div`w-12 h-12  rounded-full overflow-hidden  flex-shrink-0  hidden block mr-2`;


export const TESTIMONIALContentArea = tw.div`mt-6 md:mt-0 flex items-center`;
export const TESTIMONIALContentText = tw.p`text-gray-600 h-60 hover:overflow-y-auto overflow-hidden cursor-pointer`;
export const TESTIMONIALWriter = tw.div`text-gray-900 font-bold uppercase `;
export const TESTIMONIALWriterTitle = tw.div`text-gray-600`;



// *************** Blog ********************
export const BlogContainer = tw.div`grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10`;

export const BlogPost = tw.div`rounded overflow-hidden shadow-lg`;
export const BlogPostTitle = tw.div`hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25`;
export const BlogPostsCategory = tw.div`cursor-pointer absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out`;
export const BlogPostsDate = tw.div`text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out`;
export const BlogPostsDescriptionContainer = tw.div`px-6 py-4`;
export const BlogPostsDescription = tw.h3`cursor-pointer font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out`;
export const BlogPostsShortDescription = tw.p`text-gray-500 text-sm`;
export const BlogPostsReadingContainer = tw.div`px-6 py-4 flex flex-row items-center`;
export const BlogPostsReading= tw.span`py-1 text-sm font-normal text-gray-900 mr-1 flex items-center`;


// *************** Home page banner ********************
export const BannerSection = tw.div`my-16 hidden md:block`;
export const BannerContainer = tw.div`relative container mx-auto`;
export const BannerRow = tw.div`flex justify-between items-center`;
export const BannerCol = tw.div`flex-1`;
export const BannerColImg = tw.div`absolute -top-16`;
export const BannerColTitle = tw.div`text-center py-12`;
export const BannerColTitleHeading = tw.h2`font-bold text-3xl md:text-3xl lg:text-4xl font-bold  text-white`;

export const BannerImgContainer = tw.div`w-96 h-96  rounded-lg overflow-hidden  flex-shrink-0  hidden block mr-2`;


// Footer

export const FooterRow = tw.div`grid md:grid-cols-4 grid-cols-2 py-5`;
export const FooterColumn = tw.div`md:grid-cols-4 grid-cols-2 py-5`;
export const Copyright = tw.div`text-center pb-3`;
