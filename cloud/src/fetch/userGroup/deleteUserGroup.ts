
import { getBaaSF } from '../../utils/utils'



//
function fetchDeleteUserGroup(groupIDList: number[]){
  let BaaS_F = getBaaSF()
  return new Promise((resolve, reject) => {
    let userGroup = new BaaS_F.UserGroup()
    userGroup.delete(groupIDList).then((res: any) => {
      // success
      resolve(res)
    }, (err: any) => {
      // err
      reject(err)
    })
  })
}


function initFetchDeleteUserGroup(){
  return fetchDeleteUserGroup
}

export default initFetchDeleteUserGroup