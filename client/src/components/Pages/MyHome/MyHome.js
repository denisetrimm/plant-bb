//STYLING
import styled from "styled-components";
// ICONS

//HOOKS & CONTEXT
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useContext } from "react";
import { PlantContext } from "../../../context/PlantContext";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
//COMPONENTS
import Card from "../../UI/Card";
import HouseplantCard from "./HouseplantCard";
import BackArrow from "../../UI/BackArrow";


const MyHome = () => {

    const { user, isAuthenticated, isLoading} = useAuth0();
    const {plantUser} = useContext(UserContext);
    const { allPlants, filteredPlants, handleClear }= useContext(PlantContext);
    const navigate = useNavigate();

    const handlePlantClick = (plantId) => {
        // console.log("clicked!");
        // console.log(`plantId`)
        handleClear();
        navigate(`/plants/${plantId}`);
    }

    return (
        <>

        <h2>My Home</h2>
        {plantUser &&
            <BackArrow/>
        }
        {allPlants && 
        <>  
            <p>You have {plantUser.housePlants.length} plants in your home.</p>
            <PlantGrid>
                {plantUser.housePlants.map(plant => {
                    return (
                        <Card key={plant._id} id={plant.plantId} handleFunction={handlePlantClick}>
                            <HouseplantCard plant={plant}/>
                        </Card>
                    )
                })}
            </PlantGrid>
        </>
        }
        </>
    );
}

const PlantGrid = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 1%;
    margin-top: 40px;
    width: 100%;
`

export default MyHome;