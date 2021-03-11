import styled from 'styled-components';

export const Container = styled.header`

    position: fixed;
    top: 0;

    width: 100%;
    height: 68px;
    background: #e4e6e7;

    padding: 0 30px 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        margin-left: 20px;
        color:  #343a40;
        font-size: 14px;
        font-weight: 500;

        transition: color 0.8s;


        &:hover{
            color: #c93b59;
        }
    }

    svg {
        color: #c93b59;
    }

    svg + svg {
        margin-left: 20px;
    }

    
    



`;