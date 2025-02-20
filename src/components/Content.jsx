import styled from "styled-components";

const textColor = "#d7fa00";
const fontBig = "18px";
const fontSmall = "12px";
const Bold = "600";
const Medium = "400";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const ContentImage = styled.img`
  width: ${(props) => props.width || "300px"};
  border-radius: ${(props) => props.radius || "10px"};
  margin-bottom: ${(props) => props.bottom || "3px"};
`;

const ContentSpan = styled.span`
  font-size: ${(props) => props.textSize || fontSmall}; 
  color: ${(props) => props.textColor || "white"};
  border-radius: ${(props) => props.radius || "0"};
  border: 1px solid ${textColor}; 
  padding: 4px 5px;
`;

const ContentTitle = styled.div`
  font-size: ${(props) => props.textSize || fontBig}; 
  font-weight: ${(props) => props.textWeight || Bold}; 
`;

const ContentSubTitle = styled(ContentTitle)`
  color: ${(props) => props.textColor || textColor}; 
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <ContentImage
        width="300px"
        radius="10px"
        bottom="3px"
        src={content.img}
        alt={content.title}
      />
      <ContentSpan textSize={fontSmall} textColor={textColor} radius="3px">
        모집중
      </ContentSpan>
      <ContentTitle textSize={fontBig} textWeight={Bold}>
        {content.title}
      </ContentTitle>
      <ContentSubTitle
        textSize={fontSmall}
        textWeight={Medium}
        textColor="rgb(160,160,160)" 
      >
        {content.subtitle}
      </ContentSubTitle>
    </ContentContainer>
  );
}
