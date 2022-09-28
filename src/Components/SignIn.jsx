import React from 'react';
import styles from "./SignIn.module.css";
import {UserAuth} from "../Context/AuthContext";
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';



function SignIn() {

    const {googleSignIn} = UserAuth();


    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={styles.main} >
    <Link to='/' >
        <div className={styles.logo} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/2560px-Indeed_logo.svg.png" alt="logo" />
        </div>
    </Link>
        
        <div className={styles.container} >
            <h3 className={styles.container_h3} >Ready to take the next step?</h3>
            <h4 className={styles.container_h4} >Create an account or sign in.</h4>
            <p style={{fontSize:"0.75rem",lineHeight:"1.5",color:"rgb(89, 89, 89)",marginTop:"-10px"}} >
            By creating an account or logging in, you understand and agree to Indeed's Terms.
            You also acknowledge our Cookie and Privacy policies. You will receive marketing messages
            from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.
            </p>
            <div className={styles.button_container} >
                <div className={styles.buttons} onClick={handleGoogleSignIn} >
                    <div style={{marginTop:"4px"}} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt='google' width="20px" /></div>
                    <div style={{fontWeight:"bolder",marginTop:"2px"}} >Continue with google</div>
                    <div><p>  </p></div>
                </div>
                <div className={styles.buttons}>
                    <div style={{marginTop:"4px"}}><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt='apple' width="20px" /></div>
                    <div style={{fontWeight:"bolder",marginTop:"2px"}}>Continue with apple</div>
                    <div><p>  </p></div>
                </div>
                <div className={styles.buttons}>
                    <div style={{marginTop:"4px"}}><img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt='facebook' width="20px" /></div>
                    <div style={{fontWeight:"bolder",marginTop:"2px"}}>Continue with facebook</div>
                    <div><p>  </p></div>
                </div>
                <div className={styles.horizontal_line} >
                    <p><span>or</span></p>
                </div>
                <div className={styles.inputTag} >
                    <p>Email address *</p>
                    <input type="text" />
                </div>
                <div className={styles.continue} >
                    Continue <EastIcon/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SignIn