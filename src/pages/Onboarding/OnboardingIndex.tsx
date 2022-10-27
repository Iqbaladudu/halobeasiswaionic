import { useAppSelector } from "../../hooks/hooks";
import Final from "./Final";
import { ContentTextFour, HeaderTextFour, ImgFour } from "./Four";
import Onboarding from "./Onboarding";
import { ContentTextOne, HeaderTextOne, ImgOne } from "./One";
import { ContentTextThree, HeaderTextThree, ImgThree } from "./Three";
import { ContentTextTwo, HeaderTextTwo, ImgTwo } from "./Two";

const OnboardingIndex = () => {
  const { position } = useAppSelector(({ positions }) => {
    return positions;
  });

  return (
    <>
      {position < 5 ? (
        <Onboarding
          img={
            position === 1 ? (
              <ImgOne />
            ) : position === 2 ? (
              <ImgTwo />
            ) : position === 3 ? (
              <ImgThree />
            ) : (
              <ImgFour />
            )
          }
          headerText={
            position === 1 ? (
              <HeaderTextOne />
            ) : position === 2 ? (
              <HeaderTextTwo />
            ) : position === 3 ? (
              <HeaderTextThree />
            ) : (
              <HeaderTextFour />
            )
          }
          contentText={
            position === 1 ? (
              <ContentTextOne />
            ) : position === 2 ? (
              <ContentTextTwo />
            ) : position === 3 ? (
              <ContentTextThree />
            ) : (
              <ContentTextFour />
            )
          }
          long={position >= 3 && true}
          submit={position === 3 && true}
          writeData={position === 4 && true}
          register={position === 3 && true}
        />
      ) : (
        <Final />
      )}
    </>
  );
};

export default OnboardingIndex;
