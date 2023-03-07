/* eslint-disable @next/next/no-img-element */

import styles from "./AccountItem.module.css";

function AccountItem() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="AvatarAccount" />
      <div className={styles.info}>
        <p className={styles.name}>
          <span>Nguyễn văn Binh</span>
        </p>
        <span className={styles.username}>Tonton.pnv</span>
      </div>
    </div>
  );
}

export default AccountItem;