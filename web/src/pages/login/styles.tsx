import styled from 'styled-components';


export const Container = styled.div`
    
    background: #f1f1f1;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

`;

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 20px;

    width: 600px;

    background: #fff;

    border-radius: 16px;

    > h2 {

        margin: 30px 30px;
    }

    input {
        background: #f1f1f1;

        width: 100%;
        height: 46px;

        border-radius: 16px;

        padding: 0 20px 0 28px;
    }

    > input {
        margin-bottom: 26px;
    }

    button[type=submit]{
        background: #c93b59;

        font-size: 20px;
        color: #fff;

        width: 100%;
        height: 46px;

        border-radius: 16px;

        
    }

    footer {
        margin-top: 10px;
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        
        

        button {
            
            
            background: #343a40;

            font-size: 20px;
            color: #fff;

            height: 46px;
        
            border-radius: 16px;
        }
    }

`;