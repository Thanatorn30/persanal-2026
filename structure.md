โครงสร้างการ coding
1.การสร้างแต่ละหน้าให้แยกแต่และส่วนเป็น component และค่อยเรียกใช้ในหน้าหลัก
2.การสร้างปุ่ม form ต่างๆ ทำเป็น component รับ props เพื่อให้ custom ได้
3.ส่วนไหนที่มี design ซ้ำสามารถเอา component มา reuse ได้
4.ถ้าต้องมีการแก้ไข style ให้ใช้ style component โดย ให้แยกไฟล์ style component เป็นอีกไฟล์และเรียกใช้
5.ไม่ใช้ typescript
6.แต่ละหน้าต้องรองรับ responsive เช่น mobile(440) ipad(1032) desktop(1440)