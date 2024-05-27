import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { useRef, useState } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const passwordRef = useRef(null);
  const [errorInfo, setErrorInfo] = useState({
    password: ''
  })

  const validate = (password: string) => {
    let error = {
      password: ''
    };

    let errorFlag = false;

    if (password == '') {
      error.password = "Please input the password!!";
      errorFlag = true;
    } else if (password.length < 6) {
      error.password = "Please input password at least 6 letters";
      errorFlag = true;
    } else if (password != 'Createyourgalactickingdomandruleovertheuniverse') {
      error.password = "Password is incorrect, please try with correct one";
      errorFlag = true;
    }

    if (!errorFlag) {
      console.log('successfully!!');
      // toast.success("Saved Successfully!");
      // setContactVisible(false);

      window.location.href = "https://docs.galactickingdom.io/docs/introduction";
      // window.location.href = "http://146.19.215.121:3000/docs/introduction";
      localStorage.setItem("temp", 'allow');
      //Email JS
      // TODO: ADD Email to store
    }
    return error;
  };

  const checkPassword = () => {
    // console.log(passwordRef.current['value'])

    // let password = passwordRef.current ? passwordRef.current['value'] : '';

    // setErrorInfo(validate(password));
    window.location.href = "https://docs.galactickingdom.io/docs/introduction"
  }
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="tagline-style">{siteConfig.tagline}</p>
        
        <div className='passwrd-checking-btn' onClick={() => checkPassword()}>
          AllBlue Paper
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
