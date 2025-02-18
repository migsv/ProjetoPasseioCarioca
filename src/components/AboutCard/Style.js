import styled from 'styled-components';

export const MembroArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: fit-content;

  figure {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    align-self: center;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray; /* IE */
    }
  }

  h3 {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
    align-self: center;
  }

  p {
    font-size: 16px;
    color: #666;
    align-self: center;
    width: 125px;
    overflow: hidden;
  }
`
