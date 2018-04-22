const router=require('express').Router();
const axios=require('axios');

const baseUrl='https://cnodejs.org/api/v1';

//用户登陆请求接口
router.post('/login',(req,res,next)=>{
    //验证access正确性，然后存在session中，以后有请求，判断是否需要access，决定是否给数据；
    axios.post(`${baseUrl}/accesstoken`,{
        accesstoken:req.body.accessToken
    })
        .then(resp=>{
            if(resp.status===200 && resp.data.success){
                //存到session，同时给用户返回数据;
                req.session.user={
                    accesstoken:req.body.accessToken,
                    loginname: resp.data.loginname,
                    id: resp.data.id,
                    avatar_url: resp.data.avatar_url
                };
                res.json({
                    success:true,
                    data:resp.data
                })
            }
        })
        .catch(err=>{
            if(err.response){
                res.json({
                    success:false,
                    data:err.response.data
                })
            }else{
                next(err);//抛给全局错误器处理；
            }
        })
});
module.exports=router;