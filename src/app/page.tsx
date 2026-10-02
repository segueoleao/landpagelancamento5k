import Image from "next/image";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

const CHECKOUT_URL = "https://pay.hotmart.com/P83010337R";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 12 5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const benefits = [
  { number: "01", title: "Saia do lugar", text: "Comece a correr com um objetivo claro e um caminho que respeita o seu ponto de partida.", icon: "↗" },
  { number: "02", title: "Evolua com segurança", text: "Troque a pressa por uma evolução consistente e eficiente, semana após semana.", icon: "◉" },
  { number: "03", title: "Cruze a linha de chegada", text: "Construa confiança para completar seus primeiros 5 km e celebrar cada conquista.", icon: "⚑" },
];

const steps = [
  { number: "01", title: "Você começa de onde está", text: "Não importa se ainda não consegue correr por muito tempo. O primeiro passo é começar no seu ritmo." },
  { number: "02", title: "Encontra consistência", text: "Com um objetivo definido e um programa estruturado, cada semana ganha direção." },
  { number: "03", title: "Chega aos seus 5 km", text: "Em 12 semanas, o foco é evoluir com confiança para conquistar sua primeira distância." },
];

const faqs = [
  { question: "Preciso já saber correr para participar?", answer: "Não. O programa é voltado para quem quer conquistar seus primeiros 5 km. Você começa a partir do seu ponto atual e acompanha uma proposta de evolução ao longo de 12 semanas." },
  { question: "O programa é presencial ou online?", answer: "O Corra Mais é um programa online. Você pode acessar as orientações e organizar sua rotina de treino de onde estiver." },
  { question: "Quanto tempo dura o programa?", answer: "O programa foi pensado como uma jornada de 12 semanas para a conquista dos primeiros 5 km." },
  { question: "Como faço para me inscrever?", answer: "Clique no botão de inscrição e finalize a compra na página de pagamento segura da Hotmart. Esta página apresenta somente a opção de 5 km." },
];

export default async function HomePage() {
  await db.execute(sql`select 1`);

  return (
    <main id="topo">
      <div className="topbar"><span className="topbar-dot" /> INSCRIÇÕES ABERTAS · TURMA 5 KM</div>
      <header className="site-header container">
        <a className="wordmark" href="#topo" aria-label="Corra Mais, voltar ao início"><span className="wordmark-symbol">c<span>+</span></span><span className="wordmark-name">CORRA<span>MAIS</span><small>SEU PRIMEIRO 5K COMEÇA AQUI</small></span></a>
        <nav aria-label="Navegação principal"><a href="#programa">O programa</a><a href="#jornada">A jornada</a><a href="#profissionais">Quem te ajuda</a></nav>
        <a className="header-button" href="#inscricao">QUERO COMEÇAR <ArrowIcon /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> CORRA MAIS · PROGRAMA ONLINE</div>
            <h1 id="hero-title">Seus primeiros <span>5 km</span> começam com o primeiro passo.</h1>
            <p>Conquiste seus primeiros 5 km em <strong>apenas 12 semanas</strong> e corra com confiança, consistência e segurança.</p>
            <div className="hero-actions"><a className="button button-lime" href="#inscricao">QUERO CORRER MEUS 5 KM <ArrowIcon /></a><a className="hero-secondary" href="#programa">Conheça o programa <span>↘</span></a></div>
            <div className="hero-foot"><span className="hero-foot-icon">✳</span><span>O seu ritmo. A sua jornada.<br /><strong>A sua linha de chegada.</strong></span></div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-bg" />
            <div className="hero-photo">
              <Image src="/images/hero-dupla.jpg" alt="Duas profissionais sorrindo juntas em um estúdio, representando a equipe do programa" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-image" />
            </div>
            <div className="hero-sticker"><span>12</span><small>SEMANAS PARA<br />SEUS PRIMEIROS 5K</small></div>
            <div className="photo-caption"><span className="caption-icon">↗</span><span>JUNTAS, MAIS LONGE.</span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>ROLE PARA DESCOBRIR</span><span className="vertical-line" /><span>01 / 05</span></div>
      </section>

      <div className="marquee" aria-label="Evolua com consistência e segurança"><div>SEU PRIMEIRO 5K <span>✳</span> NO SEU RITMO <span>✳</span> COM CONFIANÇA <span>✳</span> SEU PRIMEIRO 5K <span>✳</span> NO SEU RITMO <span>✳</span> COM CONFIANÇA <span>✳</span></div></div>

      <section className="intro section-pad" id="programa">
        <div className="container intro-grid">
          <div className="intro-side"><span className="section-label"><span>01 /</span> O PROGRAMA</span><div className="orbit-art" aria-hidden="true"><div className="orbit-circle"><span>5<span>KM</span></span></div><span className="orbit-small">COMECE<br />AQUI ↗</span></div></div>
          <div className="intro-main"><span className="micro-label">UM PASSO DE CADA VEZ. UMA CONQUISTA DE CADA VEZ.</span><h2>Você não precisa correr rápido. <em>Precisa começar.</em></h2><p>O <strong>Corra Mais</strong> é um programa online de treinamento de corrida que combina estratégias para ajudar você a sair do lugar em que se encontra e evoluir com segurança e eficiência.</p><p>Não é sobre acompanhar o ritmo de ninguém. É sobre descobrir do que <strong>você</strong> é capaz.</p><a className="underlined-link" href="#jornada">VEJA COMO FUNCIONA <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="benefits section-pad">
        <div className="container">
          <div className="section-head"><span className="section-label"><span>02 /</span> O QUE VOCÊ CONQUISTA</span><h2>O Corra Mais<br /><em>te leva mais longe.</em></h2><p>Um caminho possível para transformar a vontade de correr em uma conquista real.</p></div>
          <div className="benefit-grid">{benefits.map((item) => <article className="benefit-card" key={item.number}><div className="benefit-top"><span>{item.number} / 03</span><span className="benefit-icon">{item.icon}</span></div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="benefit-rule" /></article>)}</div>
        </div>
      </section>

      <section className="journey section-pad" id="jornada">
        <div className="container journey-grid"><div className="journey-heading"><span className="section-label light"><span>03 /</span> A SUA JORNADA</span><h2>Passo a passo para evoluir com <em>consistência e segurança.</em></h2><p>Dos primeiros treinos à sensação de cruzar a linha de chegada: uma jornada construída para os seus 5 km.</p><a className="button button-lime" href="#inscricao">EU QUERO COMEÇAR <ArrowIcon /></a></div><div className="steps">{steps.map((step) => <article className="step" key={step.number}><span className="step-num">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="step-arrow">↗</span></article>)}</div></div>
      </section>

      <section className="included section-pad">
        <div className="container included-grid"><div className="included-head"><span className="section-label"><span>04 /</span> A EXPERIÊNCIA</span><h2>O que você vai receber no <em>Corra Mais?</em></h2><p>Uma direção clara para deixar o “um dia eu começo” para trás.</p></div><div className="included-list"><div><span className="included-check"><CheckIcon /></span><span>Programa online de corrida para seus primeiros 5 km</span></div><div><span className="included-check"><CheckIcon /></span><span>Uma jornada de evolução ao longo de 12 semanas</span></div><div><span className="included-check"><CheckIcon /></span><span>Um caminho para treinar com mais consistência</span></div><div><span className="included-check"><CheckIcon /></span><span>Estratégias para evoluir com segurança e eficiência</span></div></div></div>
      </section>

      <section className="offer section-pad" id="inscricao">
        <div className="container offer-grid"><div className="offer-intro"><span className="section-label light"><span>05 /</span> SUA INSCRIÇÃO</span><h2>A sua próxima conquista tem <em>5 km.</em></h2><p>Escolha dar o primeiro passo hoje. A turma de 5 km foi pensada para acompanhar sua jornada até essa conquista.</p><div className="offer-aside"><span>↗</span><p>O começo não precisa ser perfeito.<br /><strong>Só precisa acontecer.</strong></p></div></div><div className="price-card"><div className="price-card-top"><span>PROGRAMA CORRA MAIS</span><span className="price-badge">TURMA 5 KM</span></div><div className="price-card-content"><div className="price-big">5<span>KM</span></div><p className="price-desc">12 semanas para conquistar seus primeiros 5 km com confiança.</p><div className="price-divider" /><span className="price-caption">TUDO ISSO POR APENAS 10X DE</span><div className="price-value"><small>R$</small>29<sup>,70</sup></div><p className="price-cash">ou <strong>R$ 297,00</strong> à vista</p><a className="button button-dark" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">QUERO ME INSCREVER <ArrowIcon /></a><p className="price-safe">↗ Você será direcionada para o pagamento seguro.</p></div></div></div>
      </section>

      <section className="team section-pad" id="profissionais"><div className="container team-grid"><div className="team-photo"><Image src="/images/hero-dupla.jpg" alt="Retrato ilustrativo de duas profissionais do programa Corra Mais" fill sizes="(max-width: 800px) 100vw, 40vw" className="team-image" /><span className="team-photo-label">MOVIMENTO TRANSFORMA. ↗</span></div><div className="team-content"><span className="section-label"><span>06 /</span> QUEM VAI TE AJUDAR</span><h2>Mais do que uma meta. <em>Uma jornada acompanhada.</em></h2><p>Ao longo dessa jornada, você conta com a proposta do Corra Mais para dar seus próximos passos com mais confiança.</p><div className="team-person"><span>01</span><div><small>FISIOTERAPEUTA</small><h3>Bárbara Mendoça</h3></div><span className="person-arrow">↗</span></div><div className="team-person"><span>02</span><div><small>ENFERMEIRA</small><h3>Tatiana Galliett</h3></div><span className="person-arrow">↗</span></div></div></div></section>

      <section className="faq section-pad" id="duvidas"><div className="container faq-grid"><div><span className="section-label"><span>07 /</span> DÚVIDAS FREQUENTES</span><h2>Ainda tem alguma <em>dúvida?</em></h2><p>Confira as respostas antes de dar o seu primeiro passo.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="closing"><div className="container closing-inner"><span className="section-label light">O SEU PRIMEIRO PASSO É AGORA</span><h2>Nos vemos na<br /><em>linha de chegada.</em></h2><p>12 semanas. Um objetivo. Os seus primeiros 5 km.</p><a className="button button-lime" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">GARANTIR MINHA VAGA NO 5 KM <ArrowIcon /></a></div><span className="closing-ghost" aria-hidden="true">5K</span></section>
      <footer><div className="container footer-content"><a className="wordmark footer-logo" href="#topo"><span className="wordmark-symbol">c<span>+</span></span><span className="wordmark-name">CORRA<span>MAIS</span><small>SEU PRIMEIRO 5K COMEÇA AQUI</small></span></a><p>© {new Date().getFullYear()} Corra Mais. Todos os direitos reservados.</p><a href="#topo">VOLTAR AO TOPO ↑</a></div></footer>
      <a className="mobile-cta" href="#inscricao">QUERO CORRER 5 KM <ArrowIcon /></a>
    </main>
  );
}
