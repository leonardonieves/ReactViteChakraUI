const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches() {
    try{
        let response = await fetch(`${API_URL}/launches`);
        let data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }    
}

export async function getLaunchByFlightNumber(fligthNumber) {
    try{
        const response = await fetch(`${API_URL}/launches/${fligthNumber}`);
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error);
    }  
}

export async function getRocketByID(rocketId) {
    try{
        const response = await fetch(`${API_URL}/rockets/${rocketId}`);
        const data = await response.json();
        return data;
    }catch(err){
        console.error(error);
    }
}