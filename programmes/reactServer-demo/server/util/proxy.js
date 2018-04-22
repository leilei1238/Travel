//把所有发向cnode的请求，都代理出去;
const axios=require('axios');
const queryString=require('query-string');

const baseUrl='https://cnodejs.org/api/v1';
//登陆后，代理发送其他请求
module.exports=(req,res,next)=>{
    const path=req.path;//拿到接口地址
    const user=req.session.user || [];//拿到session
    const needAccessToken=req.query.needAccessToken;

    if(needAccessToken && !user.accesstoken){//如果需要token，但用户没有，让用户先登录
        res.status(401).send({
            success:false,
            msg:'need login'
        })
    }else{//不需要token的情况下，代用户发起请求(用户的token最好传过去，万一需要就直接用)
        const query=Object.assign({},req.query);
        if(query.needAccessToken) delete query.needAccessToken;
        axios(`${baseUrl}${path}`,{
            method:req.method,
            params:query,
            data:queryString.stringify(Object.assign({},req.body,{
                accesstoken:user.accesstoken
            })),
            header:{//区分1)format数据格式key=val&key=val 2)application/json数据 {k:v,k:v}
                "content-Type":"application/x-www-form-urlencoded" //server用format数据请求的方式发送，这样cnode api都能接收
            }
        })
            .then(resp=>{
                if(resp.status===200){
                    res.send(resp.data)
                }else{
                    res.status(resp.status).send(resp.data)
                }
            })
            .catch(err=>{
                if(err.response){
                    res.status(500).send(err.response.data)
                }else{
                    res.status(500).send({
                        success:false,
                        msg:'未知错误'
                    })
                }
            })
    }
};