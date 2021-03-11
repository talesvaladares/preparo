import styled from 'styled-components';

export const Container = styled.div`

    background: #f2f2f2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex: 1;
    margin-top: 60px;

    > button.upload-button {
        background: #c93b59;
        color: #ffffff;
        font-size: 18px;

        height: 46px;
        width: 160px;

        margin: 16px 0 60px 0;

        border-radius: 8px;
        
    }

    section {

        background: #ffffff;
        width: 80%;
        border: 1px outset;
        border-radius: 8px;

        padding: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;

              
    }

    > section {
        margin-top: 100px;
    }

    section + section {
        margin-top: 4px;
    }
`;

export const LeftContainer = styled.div`

    display: flex;
    flex: 1;
    flex-direction: column;

    justify-content: center;


    h1{
     margin-bottom: 25px;
    }

    p{
        font-size: 20px;
    }



`;

export const RightContainer = styled.div`

    display: flex;
    flex: 1;
    flex-direction: column;

    justify-content: center;

    font-size: 18px;

    input {
        width: 80%;
        height: 40px;

        margin: 10px 0 10px 0;
        padding-left: 20px;

        border: 1px solid #d5cfca;
        border-radius: 6px;


    }

    button.update-email{
        background-color: #3498db;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        width: 180px;
        height: 40px;
    }
    


`;

export const AvatarInput= styled.div`

    display: flex;
    flex-direction: column;

    input[type='file'] {
        display: none
    }

    /* Aparência que terá o seletor de arquivo */
    label {
        background-color: #3498db;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        width: 180px;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        

        margin-top: 40px;
    }
   

    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

`;
