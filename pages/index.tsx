import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import styles from '../styles/Home.module.scss'
import { projects } from '../projects_data'

export default function Home() {
  return (
    <Layout>
      <section className={styles.home} id="home">
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
        <div className={styles.home_headings}>
          <h3 className={styles.home_h3}>Hello!</h3>
          <h1 className={styles.home_h1}>I'm <em>Jonnie</em>.</h1>
          <h1 className={styles.home_h1}>Welcome to my world.</h1>
          <h3 className={styles.home_h3}>I'm a Software Engineer with a focus in web applications.</h3>
          <br/>
          <h3 className={styles.home_h3}>Scroll down for more</h3>
        </div>
      </section>

      <section id="about">
        <div className={styles.about}>
          <h1 className={styles.section_heading}>About</h1>
          <div className={styles.about_p_container}>
          <p className={styles.about_p}>
            I'm a self-taught software engineer that is ready to jump into a professional setting. I have been learning to code full-time since September 2020.<br/><br/>
            Since September, I have built many projects ranging from small analytical scripts to large fullstack web applications. I am also a passionate coder who enjoys learning new technologies.<br/><br/>
            I know:<br/>HTML, CSS, JavaScript, React, Figma, Node.js, Express.js, Oracle12c (SQL), MonogoDB (NoSQL), Mongoose, Firebase, Firestore, Git, Heroku, and Postman.<br/><br/>
            I'm currently learning:<br/>Next.js, Postgres, TypeScript and GraphQL.<br/><br/>
            Previously, I spent 5+ years as an electrical engineer where I gained skills that I feel would be valuable as a software engineer. I have lead projects and I have mentored younger engineers. I have the communication skills to thrive in a collaborative environment. I have the analytical and technical skills to be a strong member of any engineering team. I am a self-sufficient engineer that can find solutions with little guidance.<br/><br/>
            I am open to many opportunities. If you're looking to fill a Software Engineer position, please feel free to reach out via my contact page.<br/><br/>
            <h4>Scroll down for my projects</h4>
          </p>
            
          </div>
        </div>
      </section>

      <section id="projects">
        <div className={styles.projects}>
          <h1 className={styles.section_heading}>Projects</h1>

          {
            projects.map(project => (
              <div className={styles.project_container} key={project.name}>
                <div className={styles.project_left}>
                  <div className={styles.project_name}>{project.name}</div>
                  <div className={styles.project_img_container}>{project.image}</div>
                  <div className={styles.project_tech}>{project.tech}</div>
                  <div className={styles.project_links}>
                    <div className={styles.link}>{project.live}</div>
                    <div className={styles.link}>{project.source}</div>
                  </div>
                </div>
                <div className={styles.project_right}>
                  <div className={styles.project_description}>Description:</div>
                  <br/>
                  <div className={styles.project_description_text}>
                    {project.description}
                  </div>
                </div>
              </div>
            ))
          }

          <div className={styles.btn_view_more}>VIEW MORE</div>
        </div>
      </section>

      <section id="contact">
        <div className={styles.contact}>
          <h1 className={styles.section_heading}>Contact and Info</h1>
          <div className={styles.contact_p}>LinkedIn -- GitHub</div>
          <p className={styles.contact_p}>OR</p>
          <p className={styles.contact_p}>E-MAIL ME:</p>
          <p className={styles.contact_p}>jonathan.oak28@gmail.com</p>
        </div>
      </section>
    </Layout>
  )
}
