import tw from 'twin.macro';

// *************** Global ********************
export const MainContainer = tw.div` md:px-10 mx-auto px-5 py-10`;

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
export const HeaderRightVideo = tw.video`h-full w-full rounded-lg`;
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

export const AboutOverview = tw.div`text-center  uppercase `;
export const AboutSubTitle = tw.h2`tracking-tighter text-red-600 text-xl font-bold `;
export const AboutSubTitleBottom = tw.h2`tracking-tighter text-gray-900 text-2xl font-extrabold `;
export const Underline = tw.div` border-dashed  border-b-2 border-red-600 rounded w-2/12   mb-10 `;

export const AboutArrow = tw.span`h-20 w-10 `;
export const AboutArrowImg = tw.img` w-8/12 h-32`;


export const AboutRightContent = tw.div`pl-5 text-left bg-gray-50`;
export const AboutSubTitleRight = tw.h2`tracking-tighter capitalize text-gray-800 text-xl font-bold px-3 border-l-2 border-red-600 pb-1`;
export const AboutTitle = tw.h2`tracking-tighter text-red-600 text-5xl font-extrabold px-3 uppercase`;
export const AboutSubTitleHeading = tw.span`tracking-tighter text-gray-700 text-4xl font-extrabold px-3`;
export const AboutBlockQuote = tw.blockquote`tracking-tighter px-5 text-lg font-semibold text-gray-600 `;



// *************** Overlay ********************
export const OverlayMain = tw.div`grid md:grid-cols-4 grid-cols-2`;
export const OverlayContent = tw.div`pt-5 flex items-center text-gray-50 font-semibold `;
export const OverlayStrongContent = tw.strong`tracking-tighter text-gray-50 text-3xl font-extrabold `;
export const OverlayItems = tw.div`text-center`;
