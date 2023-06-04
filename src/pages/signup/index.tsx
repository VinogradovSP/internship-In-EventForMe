import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import React from 'react';
import SignUpForm from '../../components/sign/signUpForm/signUpForm';
import SignUpText from '../../components/sign/signUpText/signUpText';
import SocialMedia from '../../components/sign/socialMedia/socialMedia';
import SignUpPic from '../../components/sign/signUpPic/signUpPic';
import { CreateUserData } from '@/types/forms';

export default function SignUp(): JSX.Element {
  const [signUpForm, setSignUpForm] = useState(false);
  const [signUpIsDone, setSignUpIsDone] = useState(false);

  //нужно в SignUpForm и SignUpText
  const [data, setData] = useState<CreateUserData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container as="section" className="mx-auto w-75 w-md-50 w-lg-75">
      <>
        {/* Page wrapper */}
        <main className="page-wrapper">
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center">
            {/* Sign up card */}
            <div
              className="card card-body"
              style={{ maxWidth: '1040px', border: 'none' }}
            >
              <div className="row mx-0 align-items-center">
                <div className="col-lg-6 border-end-lg p-2 pe-lg-5">
                  <SignUpPic />
                </div>
                <div className="col-lg-6 px-2 pt-2 pb-4 px-sm-6 pt-lg-5 ps-lg-5">
                  {!signUpForm && <SocialMedia />}
                  {!signUpIsDone ? (
                    <SignUpForm
                      signUpForm={signUpForm}
                      setSignUpForm={setSignUpForm}
                      setSignUpIsDone={setSignUpIsDone}
                      data={data}
                      setData={setData}
                    />
                  ) : (
                    <div className="ps-lg-5">
                      <SignUpText data={data} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </Container>
  );
}
