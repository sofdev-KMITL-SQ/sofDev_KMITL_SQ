const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getUser,updateUser,deleteUser,repassword,checkEmail_repass} = require('../controllers/userController')
const {protect} = require('../middleware/authenMiddleware')
const multer = require('multer')


//! ใช้ระบุตำแหน่งจัดเก็บไฟล์
const storage = multer.diskStorage({  
    destination:function(req,file,cb){
        // cb(null, __dirname +'./images/Users') //*ตำแหน่งจัดเก็บ
        cb(null,'./backend/images/Users')
    },
    filename:function(req,file,cb){  //* เปลี่ยนชื่อไฟล์ โดยเปลี่ยนเป็นเวลา ป้องกันการซ้ำกัน ชนิดไฟล์ jpg
        cb(null,Date.now()+".jpg")
    }
})

//! อัพโหลดไฟล์ 
const upload = multer({
    storage:storage
})


router.post('/register',upload.single('userProfilePic'),registerUser)
// router.post('/',registerUser)
router.post('/login',loginUser)
router.post('/editprofile/:id',upload.single('userProfilePic'),updateUser)
// router.put('/editprofile/:id',updateUser)
router.get('/me',protect,getUser)   //! protect โดยต้องเข้าถึงโดย token ;ซึ่งทำงาน protect เสร็จแล้วค่อยไปทำ getUser
router.delete('/deleteme',deleteUser)

router.post('/checkEmail_repass',checkEmail_repass)
router.post('/rePassword/:id',repassword)

module.exports = router

