import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { sendEmail } from "../services/hello";
// import { sendEmailContact } from "../services/emailSend";
// import { MobileNavbar } from "../public/mobileNavbar";

const Home: NextPage = () => {
  sendEmail();
  // sendEmailContact();
  // console.log(emailParams);
  // console.log(mailersend);

  // new MobileNavbar();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div id="home" className={styles.header}>
        <div className={styles.contentHeader}>
          <div className={styles.menuFixo}>
            <nav className={styles.nav}>
              <Image
                src={require("../public/assets/logo-ds-saude.png")}
                alt="logo ds saude"
                className={styles.logo}
              />
              <div className={styles.mobileMenu}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
              </div>
              <ul className={styles.navList}>
                <li>
                  <a href="#home">Início</a>
                </li>
                <li>
                  <a href="#exam">Exames</a>
                </li>
                <li>
                  <a href="#report">Laudos</a>
                </li>
                <li>
                  <a href="#plan">Planos</a>
                </li>
                <li>
                  <a href="#contact">Contatos</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.banner}>
            <div className={styles.textBanner}>
              <p className={styles.textWelcome}>Bem vindo à DS Saúde</p>
              <h1 className={styles.titleBanner}>
                O melhor convênio de saúde e segurança do trabalho para sua
                empresa.
              </h1>
              <p className={styles.descriptionBanner}>
                Aqui você encontrará o plano com os melhores benefícios para
                seus colaboradores
              </p>
            </div>
            <Image
              src={require("../public/assets/banner-medico-colaboradores.png")}
              alt="imagem de medico e colaboradores"
              className={styles.imageBanner}
            />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <section className={styles.sectionform}>
          <div className={styles.titlecontainer}>
            <p className={styles.subtitle}>ENTRAR EM CONTATO</p>
            <h2 className={styles.title}>Formulário de Contato</h2>
          </div>
          <form className={styles.form} id="formContact" method="post">
            <div className={styles.inputscontainer}>
              <div className={styles.formstack}>
                <div className={styles.formgroup}>
                  <label htmlFor="name">Nome do responsável *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="name"
                    placeholder="Nome"
                  />
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="name">Nome da empresa *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="nameCompany"
                    placeholder="Empresa Tal LTDA"
                  />
                </div>
              </div>
              <div className={styles.formstack}>
                <div className={styles.formgroup}>
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="email"
                    placeholder="Fulano@email.com"
                  />
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="telephone">Telefone *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="telephone"
                    placeholder="(53) 0000.0000"
                  />
                </div>
              </div>
              <div className={styles.formstack}>
                <div className={styles.formgroup}>
                  <label htmlFor="phone">Celular *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="phone"
                    placeholder="(53) 9 0000.0000"
                  />
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="subject">Assunto *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="subject"
                    placeholder="ex: Assinatura do Plano"
                  />
                </div>
              </div>
              <div className={styles.formstack}>
                <div className={styles.formgroup}>
                  <label htmlFor="numberCollaborators">
                    Número de Colaboradores *
                  </label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="numberCollaborators"
                    placeholder="ex: 50"
                  />
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="cnpj">CNPJ *</label>
                  <input
                    type="text"
                    className={styles.forminput}
                    id="cnpj"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
              </div>
              <div className={styles.formtextarea}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escreva aqui o que deseja saber sobre o plano DS Saúde"
                ></textarea>
              </div>
              <div className={styles.formcheck}>
                <input type="checkbox" id="checkTerms" name="terms" />
                <label htmlFor="checkTerms">
                  Eu concordo em compartilhar os meus dados com a DS Saúde e
                  aceito entrarem em contato comigo.
                </label>
              </div>
              <div className={styles.btnform}>
                <button
                  className={styles.btnformsubmit}
                  id="btnSubmitForm"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </section>

        <div className={styles.sectioncontact}>
          <div className={styles.contentcontact}>
            <div className={styles.contactmanager}>
              <h5 className={styles.titlecontact}>Entre em contato conosco</h5>
              <p className={styles.namemanager}>Fernando Restone</p>
              <p className={styles.functionmanager}>Gerente Comercial</p>

              <div className={styles.listsocialmanager}>
                <div className={styles.socialmanager}>
                  <Image
                    src={require("../public/assets/whatsapp.svg")}
                    alt="Email"
                  />

                  <Link
                    href="https://wa.me/5553997005000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className={styles.textsocialmanager}>(53) 9 9700.5000</p>
                  </Link>
                </div>
                <div className={(styles.socialmanager, styles.socialmail)}>
                  <Image
                    src={require("../public/assets/email.svg")}
                    alt="Email"
                  />
                  <Link
                    href="mailto:fernando@dssaude.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className={styles.textsocialmanager}>
                      fernando@dssaude.com.br
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.contactcompany}>
              <div className={styles.listmapsocial}>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.250346799296!2d-52.34223399999999!3d-31.7636572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b598faccec7b%3A0xbe5c5e1d73e59e0e!2sR.%20Maj.%20C%C3%ADcero%20de%20G%C3%B3es%20Monteiro%2C%20405%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096015-190!5e0!3m2!1spt-PT!2sbr!4v1654613046247!5m2!1spt-PT!2sbr"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}

                <div className={styles.listsocialcompany}>
                  <a
                    href="https://www.google.com/maps/place/R.+Maj.+C%C3%ADcero+de+G%C3%B3es+Monteiro,+405+-+Centro,+Pelotas+-+RS,+96015-190/@-31.7636572,-52.342234,17z/data=!3m1!4b1!4m5!3m4!1s0x9511b598faccec7b:0xbe5c5e1d73e59e0e!8m2!3d-31.7636572!4d-52.342234"
                    className="social-company"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.5C9.81275 1.50258 7.71583 2.3726 6.16921 3.91922C4.6226 5.46584 3.75257 7.56276 3.74999 9.75C3.74737 11.5374 4.33123 13.2763 5.41199 14.7C5.41199 14.7 5.63699 14.9963 5.67374 15.039L12 22.5L18.3292 15.0353C18.3622 14.9955 18.588 14.7 18.588 14.7L18.5887 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1872 1.50258 12 1.5ZM12 12.75C11.4066 12.75 10.8266 12.5741 10.3333 12.2444C9.83994 11.9148 9.45542 11.4462 9.22835 10.8981C9.00129 10.3499 8.94188 9.74667 9.05764 9.16473C9.17339 8.58279 9.45912 8.04824 9.87867 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.148 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.824 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7953 12.749 12 12.75Z"
                        fill="white"
                      />
                    </svg>
                    <p className={styles.textsocialcompany}>
                      Rua, Major Cícero, 405 - Centro, Pelotas
                    </p>
                  </a>
                  <a
                    href="https://wa.me/555330285300"
                    className="social-company"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.16 6.84C17.28 2.4 11.4 1.08 6.84001 3.84C2.40001 6.6 0.96001 12.6 3.84001 17.04L4.08001 17.4L3.12001 21L6.72001 20.04L7.08001 20.28C8.64001 21.12 10.32 21.6 12 21.6C13.8 21.6 15.6 21.12 17.16 20.16C21.6 17.28 22.92 11.4 20.16 6.84ZM17.64 16.08C17.16 16.8 16.56 17.28 15.72 17.4C15.24 17.4 14.64 17.64 12.24 16.68C10.2 15.72 8.52001 14.16 7.32001 12.36C6.60001 11.52 6.24001 10.44 6.12001 9.36C6.12001 8.4 6.48001 7.56 7.08001 6.96C7.32001 6.72 7.56001 6.6 7.80001 6.6H8.40001C8.64001 6.6 8.88001 6.6 9.00001 7.08C9.24001 7.68 9.84001 9.12 9.84001 9.24C9.96001 9.36 9.96001 9.6 9.84001 9.72C9.96001 9.96 9.84001 10.2 9.72001 10.32C9.60001 10.44 9.48001 10.68 9.36001 10.8C9.12001 10.92 9.00001 11.16 9.12001 11.4C9.60001 12.12 10.2 12.84 10.8 13.44C11.52 14.04 12.24 14.52 13.08 14.88C13.32 15 13.56 15 13.68 14.76C13.8 14.52 14.4 13.92 14.64 13.68C14.88 13.44 15 13.44 15.24 13.56L17.16 14.52C17.4 14.64 17.64 14.76 17.76 14.88C17.88 15.24 17.88 15.72 17.64 16.08Z"
                        fill="white"
                      />
                    </svg>

                    <p className={styles.textsocialcompany}>
                      Whatsapp(53) 3028.5300
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerCompany}>
            <p className={styles.textFooter}>Desenvolvido por: </p>
            <a href="https://brainny.cc" target="_blank" rel="noreferrer">
              <Image
                src={require("../public/assets/logo-brainny.svg")}
                alt="Logo Brainny Smart Solutions"
              />
            </a>
          </div>
          <div className={styles.footerRights}>
            <p className={styles.textFooter}>
              TODOS OS DIREITOS RESERVADOS © DS SAÚDE – 2022.
            </p>
            <p className={styles.textFooter}>
              DS SAÚDE CONVÊNIOS LTDA. | CNPJ: 28.778.941/0001-70
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
