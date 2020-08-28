import React from "react";
import styled from "styled-components";
import { IoMdHeart, IoIosText } from "react-icons/io";
import { Link } from "react-router-dom";

const PFpostContainer = styled.section`
  width: 50%;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 20px;
  margin-bottom: 5em;
`;

const PFpost = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  cursor: pointer;
  &:hover .hover {
    display: flex;
  }
`;
const PFpostHover = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: #0000008c;

  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.95rem;
  font-weight: bold;
  .Icon {
    font-size: 1.5rem;
  }
`;
const PFpostLike = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
const PFpostComment = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

function ProfilePost({
  id,
  poster,
  likeConut,
  commentCount,
  setDetailId,
  setDetail,
}) {
  const onDetail = (ev) => {
    const postId = ev.currentTarget.attributes.id.nodeValue;
    console.log(ev.currentTarget.attributes.id);
    setDetailId(postId);
    setDetail(true);
  };
  return (
    <PFpostContainer>
      {poster?.map((img) => (
        <PFpost key={img.id} id={id} onClick={onDetail}>
          <PFpostHover className="hover">
            <PFpostLike>
              <IoMdHeart className="Icon" /> {likeConut}
            </PFpostLike>
            <PFpostComment>
              <IoIosText className="Icon" /> {commentCount}
            </PFpostComment>
          </PFpostHover>
        </PFpost>
      ))}
    </PFpostContainer>
  );
}

export default ProfilePost;
