import listelogement  from '@/Assets/Api/Logement.json';


let getAllLogement = () => {
    return listelogement
}

let getLogement = async (id) => {
   const logement = await listelogement.find(logement => logement.id === id)
   return logement
}


export const LogementService = {
    getAllLogement,getLogement
}

export default LogementService