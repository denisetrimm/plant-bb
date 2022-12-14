// STYLING
import styled from "styled-components";
// ICONS
import { MdAdd } from "react-icons/md";
import { IoIosArrowDown} from "react-icons/io";
import { IoIosArrowUp} from "react-icons/io";
// HOOKS & CONTEXT
import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const AddPlantForm = ({currentPlant})=> {

    const {plantUser, addPlantToHome} = useContext(UserContext);
    const [newPlantInfo, setNewPlantInfo] = useState(currentPlant)
    const [formOpen, setFormOpen] = useState(false)
    const roomArray = Object.entries(plantUser.home)

    // UPDATE NEW PLANT STATE WITH PROVIDED INFO
    const handleChange = (key, value) => {
        setNewPlantInfo({
            ...newPlantInfo,
            [key]: value
        })
    }

    // ADD PLANT TO HOME
    const handleSubmit = (e) => {
        e.preventDefault();
        addPlantToHome(newPlantInfo);
        setFormOpen(false)
    }

    return (

        <>
            <Wrapper>

                {/* BUTTON OPENS/CLOSES FORM */}
                <ExpandBtn 
                    formOpen={formOpen}
                    onClick={()=> {setFormOpen(!formOpen)}}
                >
                    Add me to your home! 
                    <FrequencySpan>
                        {
                            formOpen   
                                ? <IoIosArrowUp /> 
                                : <IoIosArrowDown/>
                        }
                    </FrequencySpan>
                </ExpandBtn>

                {/* ADD OPTIONAL DETAILS FOR PLANT */}
                <PlantForm onSubmit={(e)=> {handleSubmit(e)}}>
                    {formOpen &&
                    <>
                        <InputDiv>
                            <Label htmlFor="nickname">Nickname:</Label>
                            <Input
                                type="text" 
                                placeholder="Add a nickname"
                                id="nickname"
                                name="nickname"
                                value={newPlantInfo.nickname}
                                onChange={(e) => handleChange("nickname", e.target.value)}
                            />
                        </InputDiv>

                        <InputDiv>
                            <Label htmlFor="lastWatered">Last Watered:</Label>
                            <Input
                                type="date"
                                id="lastWatered"
                                name="lastWatered"
                                value={newPlantInfo.lastWatered}
                                onChange={(e) => handleChange("lastWatered", e.target.value)}
                            />
                        </InputDiv>

                        <InputDiv>
                            <Label htmlFor="wateringFrequency">Water:</Label>
                            <FrequencySpan>
                                Every
                                <InputFrequency
                                    type="number"
                                    id="wateringFrequency"
                                    name="wateringFrequency"
                                    value={newPlantInfo.wateringFrequency}
                                    onChange={(e) => handleChange("wateringFrequency", e.target.value)}
                                />
                                days
                            </FrequencySpan>
                        </InputDiv>

                        <InputDiv>
                            <Label htmlFor="room">Room:</Label>
                            <Select 
                                id="room"
                                name="room"
                                onChange={(e) => handleChange("room", e.target.value)}
                            >
                                <Option value="">Where will she live...</Option>
                                {plantUser &&
                                    roomArray.map(room => {
                                        return <Option value={room[0]}>{room[1]}</Option>
                                    })
                                }
                            </Select>
                        </InputDiv>

                        <AddBtn type="submit">
                            <MdAdd />Add plant 
                        </AddBtn>
                    </>
                    }
                </PlantForm>
            </Wrapper>
            
        </>
    );
};

const Wrapper = styled.div`
    width: 90%;
`
const ExpandBtn = styled.button`
    align-self: center;
    margin: 20px 0 10px;
    width: fit-content;
    background-color: ${props => props.formOpen? "hsla(182, 22% , 47%, 0.5)":"hsl(182, 22%, 47%)"};
    &:hover{
        transform: none;
        background-color: ${props => props.formOpen && "hsl(182, 22% , 47%)"};
    }
`
const InputDiv = styled.div`
    margin: 10px;
`
const PlantForm = styled.form`
    background-color: var(--color-primaryHighlightThin);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
`
const Label = styled.label`
    font-weight: bold;
    color: hsl(220, 10% , 49%);
`
const FrequencySpan = styled.span`
    margin-left: 10px;
`
const Input = styled.input`
    position: relative;
    font-size: 16px;
    height: 35px;
    padding-left: 12px;
    margin: 0 10px;
    border: 2px solid var(--color-creamAccent);
    border-radius: 40px;
    &:focus-visible {
        outline: 2px solid var(--color-creamAccent);
        border: 2px solid var(--color-creamAccent);
    }
`
const InputFrequency = styled.input`
    position: relative;
    font-size: 16px;
    height: 35px;
    width: 50px;
    padding-left: 12px;
    margin: 0 5px;
    border: 2px solid var(--color-creamAccent);
    border-radius: 40px;
    &:focus-visible {
        outline: 2px solid var(--color-creamAccent);
        border: 2px solid var(--color-creamAccent);
    }
`
const Select = styled.select`
    position: relative;
    font-size: 16px;
    height: 35px;
    padding-left: 12px;
    margin: 0 10px;
    border: 2px solid var(--color-creamAccent);
    border-radius: 40px;
    &:focus-visible {
        outline: 2px solid var(--color-creamAccent);
        border: 2px solid var(--color-creamAccent);
    }
`
const Option = styled.option`
`
const AddBtn = styled.button`
    background-color: hsl(182, 22% , 47%);
    padding: 10px 20px;
    z-index: 80;
    align-self: center;
`
export default AddPlantForm;