import clsx from 'clsx';
import styles from "./Head.module.css"
import { AiFillInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";


export default function Head() {

  return <div  className={clsx(styles.text, styles.string)}>
    <div>
      <ul >
        <li>Kênh Người Bán</li>
        <li>Trờ Thành Người Bán Shopee</li>
        <li>Tải Ứng Dụng</li>
        <li >Kết Nối <AiFillInstagram /> <BsFacebook /></li>
      </ul>
      <ul>
        <li ><IoMdNotificationsOutline />Thông Báo</li>
        <li ><BiHelpCircle />Hỗ Trợ</li>
        <li><a href='/login' >Đăng Ký</a></li>
        <li>Đăng Nhập</li>
      </ul>
    </div>
    <div>
      <div></div>
      <div ><AiOutlineShoppingCart /><span>5</span></div>
    </div>
  </div>

}
