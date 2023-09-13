const AsyncHandler = require("express-async-handler");
const Bcryptpass = require("../../util/bcrypt_pass").BcryptPass;
const AdmModels = require("../../models/admin/admin");
const { dateNow } = require("../../util/fun_date");
const { generateRefreshToken } = require("../../config/refreshtoken");
const { generateToken } = require("../../config/jwtToken");

// Login admin
exports.LoginAdmin = AsyncHandler(async (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;

  const checkUser = await AdmModels.findByUsername(Username);
  if (checkUser != null) {
    const deCodeData = JSON.parse(JSON.stringify(checkUser));
    const pass_verify = Bcryptpass.password_verify(
      Password,
      deCodeData.password
    );
    if (pass_verify === true) {
      const refreshToken = await generateRefreshToken(deCodeData.id);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000, //กำหนดระยะคุกกี้ที่จะหมดอายุใน 72 ชั่วโมง
      });
      return res.status(200).send({
        statusCode: 200,
        message: "ยินดีต้อนรับเข้าสู่ระบบ",
        result: {
          id: deCodeData.id,
          username: deCodeData.username,
          fullname: deCodeData.fullname,
          email: deCodeData.email,
          phone: deCodeData.phone,
          status: true,
          token: generateToken(deCodeData.id),
          refreshToken: refreshToken,
        },
      });
    } else {
      return res.status(400).send({
        message: "username หรือ password ไม่ถูกต้อง",
      });
    }
  } else {
    return res.status(400).send({
      message: "ไม่พบข้อมูลผู้ใช้โปรดใส่ข้อมูลให้ถูกต้อง",
    });
  }
});

exports.Createadmin = AsyncHandler(async (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  const Fullname = req.body.fullname;
  const Email = req.body.email;
  const Phone = req.body.phone;

  const findByUser = await AdmModels.findByUsername(Username);
  const findByEmail = await AdmModels.findByEmail(Email);
  const findByPhone = await AdmModels.findByPhone(Phone);

  if (findByUser === null && findByEmail === null && findByPhone === null) {
    const Createadmin = await AdmModels.save({
      username: Username,
      password: Bcryptpass.password_hash(Password),
      fullname: Fullname,
      email: Email,
      phone: Phone,
      create_at: dateNow(),
    });
    if (Createadmin) {
      return res.status(200).send({
        message: "Create admin Successfully",
        response: {
          Username: Username,
          Password: Password,
          Full_name: Fullname,
          Email: Email,
          Phone: Phone,
        },
      });
    } else {
      return res.status(400).send({
        message: "Create admin False",
      });
    }
  } else {
    return res.status(400).send({
      message:
        "มี username หรือ fullname  email phone ซ้ำโปรดตรวจสอบข้อมูลก่อนสร้างใหม่",
    });
  }
});


exports.EditFullname = AsyncHandler(async (req,res) => {
  const id  = req.params.id
  const findById = await AdmModels.findById(id)
  if(id !== null){
    const fullname = req.body.fullname
    if(fullname !="" || fullname !== undefined){
      const findByFullname = await AdmModels.findByFullname(fullname)
      if(findByFullname !== null){
        const Update = await AdmModels.updateFullname(fullname,id)
        if(Update){
          return res.status(200).send({
            message:"Update Password succes"
          })
        }else{
          return res.status(404).send({
            message:"Update Password false"
          })
        }
      }else{
        return res.status(404).send({
          message:"Duplicate information"
        })
      }
     
    }else{
      return res.status(400).send({
        message:"Update Password False"
      })
    }
  }else{
    return res.status(400).send({
      message:"False"
    })
  }
})

exports.EditPassword = AsyncHandler(async (req,res) => {
  const id  = req.params.id
  const Password = req.body.password
  if(Password.length <= 8){
    const Update = await AdmModels.updatePassword({password:Bcryptpass.password_hash(Password)},id)
    if(Update){
      return res.status(200).send({
        message:"Update Password succes"
      })
    }else{
      return res.status(404).send({
        message:"Update Password false"
      })
    }
  }else{
    return res.status(400).send({
      message:"Update Password False"
    })
  }
})
