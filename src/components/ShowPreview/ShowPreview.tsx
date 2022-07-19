import {ShowI} from "../../types";
import * as React from "react";
import {CMS_URL} from "../../constants";
import styled, {withProps} from "styled";

interface ShowPreviewProps extends ShowI {
  onClick: (id: string) => void;
  selected: boolean;
}
const Wrapper = withProps<{selected: boolean}>()(styled.li)`
  margin-right: 5px;
  border:  ${props => (props.selected ? "2px solid red" : "")};
`;
const Image = styled.img`
    width: 50px;
  `;

export const ShowPreview: React.FC<ShowPreviewProps> = ({product_image_url, id, onClick, selected}) => {
  return (
    <Wrapper onClick={() => onClick(id)} selected={selected}>
      <Image src={`${CMS_URL}${product_image_url}`}></Image>
    </Wrapper>
  )
}
