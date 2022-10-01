import React from 'react';
import styles from "./PostJob.module.css"

const PostJob = () => {
  return (
    <div className={styles.PostJob} >
      <div className={styles.PostNav} >
        <div>
          <img src="https://img.etb2bimg.com/files/retail_files/wc_logo_thumb_1636363701_temp.png" alt="post" />
        </div>
        <div className={styles.help}>
          <p>Help Center</p>
        </div>
      </div>
      <div className={styles.PostBody} >
        <div>
          <img src="https://d4y70tum9c2ak.cloudfront.net/contentImage/hTo7gSYSeQ0LrVAwnCWHB6w2kp6F5Gv2IQuuBQRX8io/resized.jpeg" alt="" />
          <h2>Looking for a job?</h2>
          <div className={styles.button}>Find Jobs</div>
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=2000" alt="" />
          <h2>Hiring an employee?</h2>
          <div className={styles.button} >Post a job</div>
        </div>
      </div>
    </div>
  )
}

export default PostJob