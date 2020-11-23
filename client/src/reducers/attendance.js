export const attendance = (attendance=[], action)=>{
    switch(action.type){
        case "ATTENDANCE":
            return action.payload ;
        default:
            return attendance
    }
}