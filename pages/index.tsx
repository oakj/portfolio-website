import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <section id="home">
        <div className={styles.bg}>
          <Image
            priority
            src="/images/los-angeles.jpg"
            height={2136}
            width={1424}
            alt="los_angeles"
            className={styles.content}
          />
        </div>
        <h3>Hello!</h3>
        <h1>I'm Jonnie</h1>
        <h1>Welcome to my world.</h1>
        <h3>I'm a Software Engineer with a focus in web applications.</h3>
        <h3>Scroll down for more</h3>
      </section>

      <section id="about">
        <h1 className={styles.section_heading}>About</h1>
        <p className={styles.about_p}>I'm a self-taught software engineer that is ready to jump into a professional setting. I have been learning to code full-time since September 2020.</p>
        <p className={styles.about_p}>Since September, I have built many projects ranging from small analytical scripts to large fullstack web applications. I am also a passionate coder who enjoys learning new technologies.</p>
        <p className={styles.about_p}>I know:<br/>HTML, CSS, JavaScript, React, Figma, Node.js, Express.js, Oracle12c (SQL), MonogoDB (NoSQL), Mongoose, Firebase, Firestore, Git, Heroku, and Postman.</p>
        <p className={styles.about_p}>I'm currently learning:<br/>Next.js, Postgres, TypeScript and GraphQL.</p>
        <p className={styles.about_p}>Previously, I spent 5+ years as an electrical engineer where I gained skills that I feel would be valuable as a software engineer. I have lead projects and I have mentored younger engineers. I have the communication skills to thrive in a collaborative environment. I have the analytical and technical skills to be a strong member of any engineering team. I am a self-sufficient engineer that can find solutions with little guidance.</p>
        <p className={styles.about_p}>I am open to many opportunities. If you're looking to fill a Software Engineer position, please feel free to reach out via my contact page.</p>
        <h4>Scroll down for my projects</h4>
      </section>

      <section id="projects">
        <h1 className={styles.section_heading}>Projects</h1>

        <div className={styles.project_container}>
          <div className={styles.project_left}>
            <div className={styles.project_name}>Project Name</div>
            <div className={styles.project_img_container}>Image</div>
            <div className={styles.project_tech}>Tech Stack</div>
            <div className={styles.project_links}>
              <div className={styles.link}>Live Link</div>
              <div className={styles.link}>Source Code</div>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={styles.project_description}>Description:</div>
            <div className={styles.project_description_text}>
              Quis occaecat nulla tempor officia incididunt consequat fugiat elit mollit. Elit fugiat cupidatat aute mollit excepteur labore. Proident id cillum qui non elit commodo enim officia qui qui occaecat.
            </div>
          </div>
        </div>

        <div className={styles.project_container}>
          <div className={styles.project_left}>
            <div className={styles.project_name}>Project Name</div>
            <div className={styles.project_img_container}>Image</div>
            <div className={styles.project_tech}>Tech Stack</div>
            <div className={styles.project_links}>
              <div className={styles.link}>Live Link</div>
              <div className={styles.link}>Source Code</div>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={styles.project_description}>Description:</div>
            <div className={styles.project_description_text}>
              Quis occaecat nulla tempor officia incididunt consequat fugiat elit mollit. Elit fugiat cupidatat aute mollit excepteur labore. Proident id cillum qui non elit commodo enim officia qui qui occaecat.
            </div>
          </div>
        </div>

        <div className={styles.project_container}>
          <div className={styles.project_left}>
            <div className={styles.project_name}>Project Name</div>
            <div className={styles.project_img_container}>Image</div>
            <div className={styles.project_tech}>Tech Stack</div>
            <div className={styles.project_links}>
              <div className={styles.link}>Live Link</div>
              <div className={styles.link}>Source Code</div>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={styles.project_description}>Description:</div>
            <div className={styles.project_description_text}>
              Quis occaecat nulla tempor officia incididunt consequat fugiat elit mollit. Elit fugiat cupidatat aute mollit excepteur labore. Proident id cillum qui non elit commodo enim officia qui qui occaecat.
            </div>
          </div>
        </div>

        <div className={styles.btn_view_more}>VIEW MORE</div>
      </section>

      <section id="contact">
        <h1 className={styles.section_heading}>Contact and Info</h1>
        <div className={styles.contact_p}>LinkedIn -- GitHub</div>
        <p className={styles.contact_p}>OR</p>
        <p className={styles.contact_p}>E-MAIL ME:</p>
        <p className={styles.contact_p}>jonathan.oak28@gmail.com</p>
      </section>
    </Layout>
  )
}
