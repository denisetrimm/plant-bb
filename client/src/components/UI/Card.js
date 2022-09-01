import styled from "styled-components";

const Card = ({children, handleFunction, id}) => {
    return(
        <Wrapper onClick={() => {handleFunction(id)}}>
            {children}
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    background-color: whitesmoke;
    border: 2px solid var(--color-creamAccent);
    border-radius: 10px;
    /* margin-top: 1%; */
    padding: 20px;
    width: 30%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition-property: background-color, scale;
    transition: ease-in-out 200ms;

    &:hover {
        /* background-color: var(--color-primaryHighlightThin); */
        background-color: #ededed;
        transform: scale(1.01);
        cursor: pointer;
    }
`