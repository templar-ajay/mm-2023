import Image from "next/image";

const Background = ({ children, backgroundImages }) => {
  const bgImages = backgroundImages.map((x) => x.image.url);
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      {bgImages[0] && (
        <div className="absolute hero-arrow hidden tablet:block -top-[42rem] tablet:-left-[15rem] largeTablet:block largeTablet:left-[-15rem] desktop:-left-[0rem]">
          <Image
            alt="Doodles"
            width={500}
            height={500}
            style={{ marginTop: 550 }}
            src={bgImages[0]}
            loading="eager"
          />
        </div>
      )}

      {bgImages[1] && (
        <div
          className={`background-stroke-left absolute right-[-15rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem] top-[30rem] largeTablet:top-[10rem]`}
        >
          <Image
            alt="Doodles"
            width={500}
            height={500}
            src={bgImages[1]}
            loading="eager"
          />
        </div>
      )}

      {bgImages
        .filter((_, i) => i + 1 > 2)
        .map((img, index) => {
          const top = 60 * (index + 1);
          const topTablet = top - 20;
          if ((index + 1) % 2) {
            return (
              <div
                key={index}
                className={`background-stroke-left absolute  left-[-15rem] tablet:-left-[8rem]  largeTablet:laptop:-left-[6rem] laptop:-left-[4rem] desktop:-left-[3rem] top-[${top}rem] largeTablet:top-[${topTablet}rem]`}
              >
                <Image alt="Doodles" width={500} height={500} src={img} />
              </div>
            );
          }
          return (
            <div
              key={index}
              className={`background-stroke-left absolute right-[-15rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem] top-[${top}rem] largeTablet:top-[${topTablet}rem]`}
            >
              <Image alt="Doodles" width={500} height={500} src={img} />
            </div>
          );
        })}

      <div className="relative">{children}</div>
      <div className="top-[30rem] top-[10rem] top-[60rem] top-[40rem] top-[90rem] top-[70rem] top-[120rem] top-[100rem] top-[150rem] top-[130rem] top-[180rem] top-[160rem] top-[210rem] top-[190rem] top-[240rem] top-[220rem] top-[270rem] top-[250rem] top-[300rem] top-[280rem] top-[330rem] top-[310rem] top-[360rem] top-[340rem] top-[390rem] top-[370rem] top-[420rem] top-[400rem] top-[450rem] top-[430rem] top-[480rem] top-[460rem] top-[510rem] top-[490rem] top-[540rem] top-[520rem] top-[570rem] top-[550rem] top-[600rem] top-[580rem] top-[630rem] top-[610rem] top-[660rem] top-[640rem] top-[690rem] top-[670rem] top-[720rem] top-[700rem] top-[750rem] top-[730rem] top-[780rem] top-[760rem] top-[810rem] top-[790rem] top-[840rem] top-[820rem] top-[870rem] top-[850rem] top-[900rem] top-[880rem] top-[930rem] top-[910rem] top-[960rem] top-[950rem] top-[990rem] top-[970rem] top-[1020rem] top-[1000rem]" />
    </div>
  );
};

export default Background;
