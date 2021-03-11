import styled from 'styled-components';

export const Container = styled.div`

    background: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1;
    margin-top: 60px;

    h2 {
        margin-top: 100px;
        font-weight: lighter;
    }

`;

export const Content = styled.div`

    margin-top: 30px;

    width: 80%;
    background: #fff;

    padding: 40px;

    border: 1px outset;
    border-radius: 8px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    section.section-left {

        display: flex;
        flex-direction: column;
        justify-content: center;

        h1{
            margin-bottom: 25px;
         }

        p{
            font-size: 20px;
        }
    }

    section.section-right{
        input {
            width: 80%;
            height: 40px;

            margin: 10px 0 10px 0;
            padding-left: 20px;

            border: 1px solid #d5cfca;
            border-radius: 6px;
       }

       p {
           font-size: 20px;

           span {
               color: red;
           }
       }

    }

    
`;

export const ButtonSubmit = styled.button`
   
    background: #c93b59;
    color: #ffffff;
    font-size: 18px;

    height: 56px;
    width: 140px;

    margin: 16px 0 60px 0;

    border-radius: 8px;

`;
