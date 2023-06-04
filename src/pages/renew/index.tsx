import EnterEmail from '@/components/sign/setPassword/enterEmail';
import SignInPic from '@/components/sign/signInPic/signInPic';
import SignInText from '@/components/sign/signInText/signInText';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';

export default function Renew(): JSX.Element {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Container as="section" className="mx-auto w-75">
      <main className="page-wrapper">
        <div className="container-fluid h-100 align-items-center justify-content-center">
          <div
            className="card card-body"
            style={{ maxWidth: '1040', border: 'none' }}
          >
            <div className="row mx-0 align-items-center">
              <div className="col-lg-6 border-end-lg p-2 pe-lg-5">
                <SignInPic />
              </div>
              <div className="mx-auto max-lg-0 col-lg-6 px-2 pt-2 pb-4 px-sm-6 pt-md-5 ps-lg-5">
                {!isSent && (
                  <EnterEmail
                    setIsSent={setIsSent}
                    setEmail={setEmail}
                    email={email}
                  />
                )}
                {isSent && <SignInText email={email} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
