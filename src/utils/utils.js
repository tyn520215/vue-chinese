/**
 * Created by Administrator on 2017/10/11.
 */
import axios from 'axios';
export  const getUtils = (url)=>{
  let promise = new Promise(function(resolve,reject){
    axios.get(url).then((res)=>{
      if(res.state =200){
        resolve(res.data);
      }else{
        reject(res.data);
      }
    }).catch((e)=>{
      reject(e);
    })
  });
  return promise
};

export const postUtils = (url)=>{
  let pro = new Promise(function(resolve,reject){
    axios.post(url).then((res)=>{
      if(res.state =200){
        resolve(res.data);
      }else{
        reject(res.data);
      }
  }).catch((e)=>{
      reject(e);
    });
})
  return pro
};

// async function bar(){
//   try {
//     const res = await postUtils(url)
//   }catch (e){
//     console.log(e)
//   }
// }
