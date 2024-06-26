const styles = {
  boxWidth: "xl:max-w-[1140px] w-full mx-auto",

  heading: "text-2xl sm:text-3xl font-bold text-dark",
  paragraph: "text-sm font-normal text-dark",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  ItemStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

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
