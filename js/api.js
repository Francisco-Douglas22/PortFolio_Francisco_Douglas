async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/Eng-Francisco-Douglas/PortFolio-FranciscoDouglas/main/profile.json";
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

