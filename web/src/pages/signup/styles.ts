import styled from 'styled-components';

export const Container = styled.div`

    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

`;

export const ContentLeft = styled.div `

    background: #34383e;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
  
    padding: 0 30px 0 30px;

    h1 {
        font-size: 48px;
        margin: 40px 0 40px 0;
        font-weight: lighter;
    }

    h2 {
        font-size: 46px;
        font-weight: lighter;       
    }

    h3 {
        font-size: 30px;
        line-height: 60px;
        font-weight: 400;
    }
    

`;

export const ContentRight = styled.div `

    background: #e5e5e5;

    display: flex;
    align-items: center;
    justify-content: center;
   
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 80px 20px 80px 20px;

    width: 480px;

    background: #fff;

    border-radius: 16px;


    h2 {
        font-weight: lighter;
        margin-bottom: 20px;
    }

    input {
        background: #f1f1f1;

        width: 100%;
        height: 58px;

        border-radius: 8px;

        padding: 0 20px 0 28px;

        margin: 20px 20px;
    }

    > button {

        width: 60%;
        height: 68px;

        background: #c93b59;
        color: #fff;
        font-size: 22px;

        border-radius: 10px;

        margin-top: 40px;
    }
`;