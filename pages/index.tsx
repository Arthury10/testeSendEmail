import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import logo from "../public/assets/logo.png";
import onda from "../public/assets/onda.png";

import { FormContact } from "../app/components/FormContact";
import { GoogleMaps } from "../app/components/GoogleMaps";
import { Header } from "../app/components/Header";
import Script from "next/script";

// const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DS Saúde - Convênio Empresarial</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      {/* <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      /> */}
      <div style={{ display: "none" }}>
        <Image src={logo} alt="logo" />
        <Image src={onda} alt="onda" />
      </div>

      <div id="home" className={styles.header}>
        <div className={styles.contentheader}>
          <Header />
          <div className={styles.banner}>
            <div className={styles.textbanner}>
              <p className={styles.textwelcome}>Bem vindo à DS Saúde</p>
              <h1 className={styles.titlebanner}>
                O melhor convênio de saúde e segurança do trabalho para sua
                empresa.
              </h1>
              <p className={styles.descriptionbanner}>
                Aqui você encontrará o plano com os melhores benefícios para
                seus colaboradores
              </p>
            </div>
            <div className={styles.imagebanner}>
              <Image
                src={require("../public/assets/banner-medico-colaboradores.png")}
                alt="imagem de medico e colaboradores"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <section id="exam" className={styles.sectioncards}>
          <div className={styles.contentsection}>
            <p className={styles.subtitlesectionexam}>Medicina Ocupacional</p>
            <h2 className={styles.titlesection}>
              Tranquilidade através de um amplo gerenciamento dos eventos
              eSocial
            </h2>
            <div className={styles.listcards}>
              <div className={styles.card}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#DEA650" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>ASO</h3>
                <p className={styles.descriptioncard}>
                  Exame admissional, Demissional, Periódico, Troca de Funções e
                  Retorno ao trabalho.
                </p>
              </div>
              <div className={styles.card}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#DEA650" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>Exames</h3>
                <p className={styles.descriptioncard}>
                  Realizamos os exames de Acuidade Visual, Audiometria,
                  Eletrocardiograma, Eletroencefalograma, Exames laboratoriais,
                  Raio-X, entre outros..
                </p>
              </div>
              <div className={styles.card}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#DEA650" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>eSocial</h3>
                <p className={styles.descriptioncard}>
                  Transmissão dos eventos S2210, S2220 e S2240
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="report" className={styles.sectioncards}>
          <div className={styles.contentsection}>
            <p className={styles.subtitlesectionreport}>Laudos</p>
            <h2 className={styles.titlesection}>
              Elaboramos os documentos abaixo
            </h2>
            <div className={styles.listcards}>
              {/* <div className={styles.card cardreport}> */}
              <div className={styles.cardreport}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#008F59" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>LTCAT</h3>
                <p className={styles.descriptioncard}>
                  É o Laudo Técnico das Condições Ambientais do Trabalho
                  elaborado pelo engenheiro do trabalho com intuito de
                  documentar os agentes nocivos existentes e concluir se estes
                  podem gerar insalubridade.
                </p>
              </div>
              <div className={styles.cardreport}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#008F59" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>PGR</h3>
                <p className={styles.descriptioncard}>
                  O Programa de Gerenciamento de Risco é um conjunto de
                  procedimentos, técnicas de gestão, métodos de avaliação,
                  registros e controles de monitoramento. Para a prevenção de
                  acidentes de trabalho.
                </p>
              </div>
              <div className={styles.cardreport}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#008F59" />
                  <path
                    d="M17.091 8.18195L10.091 15.1819L6.90918 12.0001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.titlecard}>PCMSO</h3>
                <p className={styles.descriptioncard}>
                  É o Programa de Controle Médico de Saúde Ocupacional elaborado
                  pelo médico do trabalho visando proteger a saúde dos
                  trabalhadores através de exames complementares. Visa
                  identificar riscos aos colaboradores
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="esocial" className={styles.sectionesocial}>
          <p className={styles.subtitlesectionreport}>2022 - 2023</p>
          <h2 className={styles.titlesection}>Fluxo do eSocial</h2>
          <div className={styles.listesocial}>
            <div className={styles.itemlistesocial}>
              <h4 className={styles.titlelistesocial}>s2210</h4>
              <p className={styles.descriptionlistesocial}>
                Comunicação do acidente de trabalho
              </p>
              <p className={styles.initialslistesocial}>cat</p>
            </div>
            <div className={styles.itemlistesocial}>
              <h4 className={styles.titlelistesocial}>s2220</h4>
              <p className={styles.descriptionlistesocial}>
                Monitoramento de Saúde do trabalhador
              </p>
              <p className={styles.initialslistesocial}>aso</p>
            </div>
            <div className={styles.itemlistesocial}>
              <h4 className={styles.titlelistesocial}>s2240</h4>
              <p className={styles.descriptionlistesocial}>
                Fator de risco agente nocivo
              </p>
              <p className={styles.initialslistesocial}>ltcat</p>
            </div>
          </div>
          <Link href="https://login.esocial.gov.br/login.aspx" target="_blank">
            <div className={styles.logoesocial}>
              <Image
                src={require("../public/assets/logo-e-social.png")}
                alt="logo do esocial"
              />
            </div>
          </Link>
          <div className={styles.listlogoesocial}>
            <div className={styles.contentlistesocial}>
              <Link
                href="https://www.caixa.gov.br/Paginas/home-caixa.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.itemlogoesocial}>
                  <Image
                    src={require("../public/assets/logo-caixa.png")}
                    alt="caixa economica federal"
                  />
                </div>
              </Link>
              <Link
                href="https://www.gov.br/trabalho-e-previdencia/pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.itemlogoesocial}>
                  <Image
                    src={require("../public/assets/logo-previdencia-social.png")}
                    alt="previcencial social"
                  />
                </div>
              </Link>
              <Link
                href="https://www.gov.br/receitafederal/pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.itemlogoesocial}>
                  <Image
                    src={require("../public/assets/logo-receita-federal.png")}
                    alt="receita federal"
                  />
                </div>
              </Link>
              <Link
                href="https://empregabrasil.mte.gov.br/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.itemlogoesocial}>
                  <Image
                    src={require("../public/assets/logo-mte.png")}
                    alt="ministerio do trabalho e emprego"
                  />
                </div>
              </Link>
              <Link
                href="https://www.gov.br/trabalho-e-previdencia/pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.itemlogoesocial}>
                  <Image
                    src={require("../public/assets/logo-inss.png")}
                    alt="Inss"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="plan" className={styles.sectionplan}>
          <p className={styles.subtitlesectionreport}>Valores</p>
          <h2 className={styles.titlesection}>
            Contrate a DS Saúde para a sua empresa
          </h2>
          <div className={styles.contentplan}>
            <div className={styles.infoplan}>
              <h5 className={styles.titleplan}>Plano SST</h5>
              <p className={styles.descriptionplan}>
                Saúde e Segurança do Trabalho
              </p>
              <div className={styles.contentprice}>
                <p className={styles.adicionaltextplan}>Valores a partir</p>
                <p className={styles.priceplan}>
                  <strong>R$ 30</strong>/mensais
                </p>
                <p className={styles.adicionaltextplan}>Por colaborador</p>
                <Link href="#contact">
                  <p className={styles.buttonplan}>Entrar em contato</p>
                </Link>
              </div>
            </div>
            <div style={{ padding: 30 }}>
              <Image
                src={require("../public/assets/image-plan.png")}
                alt="medico feliz atendendo"
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionform} id="contact">
          <div className={styles.titlecontainer}>
            <p className={styles.subtitle}>ENTRAR EM CONTATO</p>
            <h2 className={styles.title}>Formulário de Contato</h2>
          </div>
          <FormContact />
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
                    alt="whatsapp"
                  />

                  <Link
                    href="https://wa.me/5553997005000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className={styles.textsocialmanager}>(53) 9 9700.5000</p>
                  </Link>
                </div>
                <div className={styles.socialmail}>
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
                <GoogleMaps />
                <div className={styles.listsocialcompany}>
                  <a
                    href="https://www.google.com/maps/place/R.+Maj.+C%C3%ADcero+de+G%C3%B3es+Monteiro,+405+-+Centro,+Pelotas+-+RS,+96015-190/@-31.7636572,-52.342234,17z/data=!3m1!4b1!4m5!3m4!1s0x9511b598faccec7b:0xbe5c5e1d73e59e0e!8m2!3d-31.7636572!4d-52.342234"
                    className={styles.socialcompany}
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
                    className={styles.socialcompany}
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
                      Whatsapp(53) <br /> 3028.5300
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
