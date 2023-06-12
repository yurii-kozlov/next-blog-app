import { NextPage } from 'next';
import { GoogleButton } from 'components/GoogleButton';
import { SignInForm } from 'components/SignInForm';
import styles from 'styles/pages/Signin.module.scss';

const SigninPage: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Sign in</h1>
      <div className={styles.signinContentWrapper}>
        <GoogleButton />
          <p className={styles.additionalOption}>or</p>
        <SignInForm />
      </div>
    </div>
  );
};

export default SigninPage;
