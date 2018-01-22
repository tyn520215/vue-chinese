/**
 * Created by Administrator on 2017/10/11.
 */
import axios from 'axios';
export  const getUtils = (url)=>{
  let promise = new Promise(function(resolve,reject){
    axios.get(url).then((res)=>{
      if(res.state =200){
        resolve(res);
      }else{
        reject(res);
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
        resolve(res);
      }else{
        reject(res);
      }
  }).catch((e)=>{
      reject(e);
    });
})
  return pro
};
