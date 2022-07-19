import styled from "styled";
import * as React from "react";
import {ShowI} from '../../types';
import {CMS_URL} from "../../constants";

interface ShowProps extends ShowI {
}

const Article = styled.article`
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.span`
  font-size: 32px;
  line-height: 34px;
  font-weight: 700;
`;
const SubTitle = styled.span`
  font-size: 20px;
  line-height: 24px;
`;
const Image = styled.img`
  min-width: 320px;
  width: 100%;
  margin-top: 10px;
`;
export const Show: React.FC<ShowProps> = ({title, product_image_url, episodes}) => {
  return (
    <Article>
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
      <Wrapper>
        <SubTitle>Number of episodes {episodes}</SubTitle>
      </Wrapper>
      <Image src={`${CMS_URL}${product_image_url}`} />
    </Article>
  );
};
