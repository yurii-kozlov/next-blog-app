'use client';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SignInFormInputs } from 'types/SignInFormInputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { signInSchemaValidation } from 'configs/signInFormValidation';
import styles from 'components/SignInForm/SignInForm.module.scss';

export const SignInForm = (): ReactElement => {
  const [isSignInError, setIsSignInError] = useState<boolean>(false);

  const router = useRouter();
  const {
    handleSubmit, reset, watch, register, formState: { errors }
  } = useForm<SignInFormInputs>({
    resolver: yupResolver(signInSchemaValidation)
  });

  const onSubmit = async ({ email, password }: SignInFormInputs) => {
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false
    }
    );

    if (response && !response.error) {
      router.push('/');
      reset();
    } else {
      setIsSignInError(true);
    }
  }

  const enteredEmail = watch('email');
  const enteredPassword = watch('password');

  useEffect(() => {
    setIsSignInError(false);
  }, [enteredEmail, enteredPassword])

  return (
    <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <input
            autoComplete="email"
            {...register('email')}
            className={styles.input}
            type="email"
            placeholder="Please enter your email"
          />
          {errors.email && (
            <p className={styles.inputError}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <input
            autoComplete="current-password"
            {...register('password')}
            className={styles.input}
            type="password"
            placeholder="Please enter your password"
          />
          {errors.password && (
            <p className={styles.inputError}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles.submitButtonAndSignInErrorWrapper}>
          <button className={styles.buttonSubmit} type="submit">
            Submit
          </button>
          {isSignInError && (
            <p className={styles.signInError}>
              You have entered the wrong email or password.
              Please check the entered data and try again
            </p>
          )}
        </div>
      </div>
    </form>
  );
};
