const { query } = require("../../util/dbQuery");

module.exports = {
    async findByUsername(username){
        const result = await query('SELECT * FROM tbl_admin WHERE username = ?', [username]);
        if (result.length === 0) {
          return null; // หรือส่งข้อมูลที่แสดงว่าไม่พบข้อมูล
        }
        return result[0]; // หรือข้อมูลที่ค้นพบ
    },
    async findByEmail(email){
        const result = await query('SELECT email FROM tbl_admin WHERE email = ?', [email]);
        if (result.length === 0) {
          return null; // หรือส่งข้อมูลที่แสดงว่าไม่พบข้อมูล
        }
        return result[0]; // หรือข้อมูลที่ค้นพบ
    },
    async findByPhone(phone){
        const result = await query('SELECT phone FROM tbl_admin WHERE phone = ?', [phone]);
        if (result.length === 0) {
          return null; // หรือส่งข้อมูลที่แสดงว่าไม่พบข้อมูล
        }
        return result[0]; // หรือข้อมูลที่ค้นพบ
    },
    async findById(id) {
      const result = await query('SELECT id FROM tbl_admin WHERE id = ?', [id]);
      if (result.length === 0) {
        return null; // หรือส่งข้อมูลที่แสดงว่าไม่พบข้อมูล
      }
      return result[0]; // หรือข้อมูลที่ค้นพบ
    },
    async save(data) {
        const insertQuery = 'INSERT INTO tbl_admin (username, password, fullname, email,phone, create_at) VALUES (?, ?, ? , ? ,? ,?)';
        try {
            const result = await query(insertQuery, [data.username, data.password, data.fullname, data.email,data.phone,data.create_at]);
            // ทำสิ่งที่คุณต้องการหลังจากการ INSERT ข้อมูลเสร็จสมบูรณ์
            return true;
        } catch (error) {
            // จัดการข้อผิดพลาดที่เกิดขึ้นในกรณีที่ไม่สามารถ INSERT ข้อมูลได้
            console.error('เกิดข้อผิดพลาดในการ INSERT ข้อมูล:', error);
            return null;
        }
     }
}