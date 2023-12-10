import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { api } from "../config";
import { fetchRecommendations } from "../apis/apis";
import { useQuery } from "react-query";

const Container = styled.div`
  margin-top: 4rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem; /* You can adjust the font size as needed */
  letter-spacing: 0.1em;
`;

const Category = styled.p`
  color: white;
  text-decoration: underline;
  letter-spacing: 0.1em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 640px) {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    ::before {
      content: "";
      width: 8px;
      flex-shrink: 0;
    }
  }
`;

const GridContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: nowrap;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`;

const GridItem = styled.div`
  padding: 2px;
  margin: 1px;
  cursor: pointer;
  &:hover {
    z-index: 50;
  }
`;

const LazyImageContainer = styled.div`
  width: 90%;
  @media (min-width: 640px) {
    width: 80%;
  }
  max-height: 300px;
  border-radius: 8px; /* or any desired value */
`;

const StyledLazyImage = styled.img`
  width: 90%;
  @media (min-width: 640px) {
    width: 80%;
  }
  max-height: 300px;
  border-radius: 8px; /* or any desired value */
`;

const RecommendationsVideo = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { currentUser } = useSelector((state) => state?.user);
  const userID = currentUser?._id;
  console.log("userid", currentUser?._id);
  console.log("jello", currentUser?._id);

  const { data } = useQuery(
    ["recommendations"],
    async () => fetchRecommendations(userID),
    {
      onSuccess: (data) => setRecommendations(data?.recommendations),
    }
  );

  console.log(data);
  // console.log("some recommendations", recommendations);

  return (
    <Container>
      <Title>Recommended videos</Title>
      <GridContainer>
        {recommendations?.map((data) => {
          return (
            <GridItem>
              <LazyImageContainer>
                <StyledLazyImage
                  src={`${data?.image}`}
                  alt="no image"
                  loading="lazy"
                />
              </LazyImageContainer>
            </GridItem>
          );
          // console.log("inside", data);
        })}
      </GridContainer>
    </Container>
  );
};

export default RecommendationsVideo;
