const styles = {
  boxWidth: "xl:max-w-[1112px] w-full mx-auto",

  heading:
    "text-4xl ss:text-5xl md:text-6xl lg:text-7xl font-tinos font-bold text-dark",
  paragraph: "text-sm sm:text-base font-normal text-brown",

  flexStart: "flex justify-start items-start",
  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  ItemStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-24 py-8",
  padding: "sm:px-16 px-6 sm:py-16 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImg: `w-full flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionInfo: `w-full flex-1 ${styles.ItemStart} flex-col`,
};

export default styles;
