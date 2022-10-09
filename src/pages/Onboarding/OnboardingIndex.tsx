import { useAppSelector } from "../../hooks/hooks";
import Final from "./Final";
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
      {position < 4 ? (
        <Onboarding
          img={
            position === 1 ? (
              <ImgOne />
            ) : position === 2 ? (
              <ImgTwo />
            ) : (
              <ImgThree />
            )
          }
          headerText={
            position === 1 ? (
              <HeaderTextOne />
            ) : position === 2 ? (
              <HeaderTextTwo />
            ) : (
              <HeaderTextThree />
            )
          }
          contentText={
            position === 1 ? (
              <ContentTextOne />
            ) : position === 2 ? (
              <ContentTextTwo />
            ) : (
              <ContentTextThree />
            )
          }
          long={position === 3 && true}
        />
      ) : (
        <Final />
      )}
    </>
  );
};

export default OnboardingIndex;
