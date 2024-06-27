import axios from 'axios';
const axiosInstance= axios.create({
    baseURL:'https://kkem-blog-test-mern-nodu-deou8gkbi-jayces-projects-f5b147c5.vercel.app'
})

axiosInstance.interceptors.request.use((config)=>{
  const accessToken=sessionStorage.getItem('userToken');
  if(accessToken){
    if(config) config.headers.token=accessToken; 
  }
  return config;},
(error)=>{
    return Promise.reject(error);
}
)
export default axiosInstance;






// import axios from 'axios';
// const axiosInstance=axios.create({
//     baseURL:'http://localhost:4000'
// });
// //Request Interceptor

// axiosInstance.interceptors.request.use((config)=>{
//     const accessToken= sessionStorage.getItem("userToken");
//     if(accessToken){
//         if(config) config.headers.token=accessToken;
//     }
//     return config;},
//     (error)=>{
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance