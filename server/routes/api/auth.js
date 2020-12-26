import express, { json } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth';
import config from '../../config/index';

const { JWT_SECRET} = config

//Model
import User from "../../models/user";
import { token } from 'morgan';
import { getDefaultDirectives } from 'helmet/dist/middlewares/content-security-policy';

const router = express.Router();

//@route    POST api/auth
//@desc     Auth user
//@access   Public
//로그인
router.post('/', (req,res)=>{
    const {email, password} = req.body;

    //Simple Validation
    if(!email || !password) {
        return res.status(400).json({msg: "계정/비밀번호를 입력해주세요."});
    }

    //user existing
    User.findOne({email})
    .then((user)=> {
        if(!user) return res.status(400).json({mst: "존재하지 않는 회원입니다."});

        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch) return res.status(400).json({msg: "비밀번호가 일치하지 않습니다."});
            jwt.sign({id:user.id}, JWT_SECRET, {expiresIn: "2 days"}, (err, token)=>{
                if(err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    },
                });
            });
        });
    });  
});

//logout
router.post('/logout', (req,res)=>{
    res.json("로그아웃 성공");
});


router.get("/user", auth, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        if(!user) throw Error("존재하지 않는 회원입니다.");
        res.json(user);
    }catch(e){
        console.log(res.status(400).json({msg: e.message}));
    }
})



export default router