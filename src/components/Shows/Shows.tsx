import * as React from 'react';
import styled, {withProps} from "styled";
import {Show} from '../Show/Show';
import {ShowPreview} from "../ShowPreview/ShowPreview";
import {ShowI} from '../../types';
import {API_URL} from "../../constants";
import {useNavigate, useLocation} from "react-router-dom";

interface ShowsProps {
  showsApi?: string;
}

const Wrapper = withProps()(styled.main)`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props => props.theme.media.min.tablet`
      flex-direction: row;
    `}
`;
const ShowPreviewWrapper = styled.ul`
   display: flex;
   margin-top: 10px;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   list-style-type: none;
   padding: 0;

   ${props => props.theme.media.min.tablet`
      flex-direction: column;
      margin-left: 10px;
      margin-top: 30px;
   `}
`;

export const Shows: React.FC<ShowsProps> = ({showsApi}) => {
  const [data, setData] = React.useState<ShowI []>([]);
  const [selected, setSelected] = React.useState<ShowI | null>(null);
  const [error, setError] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedShow = (showId: string) => {
    const newSelected = data.find(s => s.id === showId);
    if (!newSelected) return;
    setSelected(newSelected);
  }
  React.useEffect(() => {
    if (showsApi) fetch(`${API_URL}/shows`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => {
        setError(err);
      })
  }, [showsApi, setError, setData]);
  React.useEffect(() => {
    if (data && data[0]) {
      if (location && location.search.includes('show_id=')) {
        const showId = location.search.split('show_id=')[1];
        setSelectedShow(showId);
      } else {
        setSelected(data[0]);
      }
    }
  }, [data]);
  React.useEffect(() => {
    if (location && location.search.includes('show_id=')) {
      const showId = location.search.split('show_id=')[1];
      setSelectedShow(showId);
    }
  }, [location]);

  const handleChangeShow = (id: string) => {
    setSelectedShow(id);

    const nextURL = `?show_id=${id}`;
    navigate(nextURL);
  }

  if (error) {
    return (
      <div>
        <span>Data fetching error. Please start the API server.</span>
      </div>)
  }

  if (!data) {
    return null;
  }

  return (
    <Wrapper>
      {selected ? <Show {...selected} /> : null}
      <nav>
        <ShowPreviewWrapper style={{display: 'flex'}}>
          {data.map((s, idx) => (
            <ShowPreview key={idx} {...s} onClick={handleChangeShow} selected={!!selected && (s.id === selected.id)}/>
          ))}
        </ShowPreviewWrapper>
      </nav>
    </Wrapper>
  )
}
