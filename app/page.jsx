import Link from 'next/link';
import { getContent } from '@/lib/content';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import EmailButton from '@/components/EmailButton';
import ZoomImg from '@/components/ZoomImg';
import Edit from '@/components/Edit';
import Blocks from '@/components/Blocks';
import PromoStrip from '@/components/PromoStrip';
import GuideFeature from '@/components/GuideFeature';
import PartnerStrip from '@/components/PartnerStrip';

export default async function Home() {
  const c = await getContent();
  const h = c.home;
  const pillars = [
    { key: 'content-creation', num: '01' },
    { key: 'modeling', num: '02' },
    { key: 'acting', num: '03' },
  ];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="kicker"><span className="dot"></span> <Edit path="home.kicker">{h.kicker}</Edit></div>
              <h1 className="display"><Edit as="span" path="home.h1line1">{h.h1line1}</Edit><Edit as="span" className="line2" path="home.h1line2">{h.h1line2}</Edit></h1>
              <p className="hero-sub"><b><Edit path="home.sub_bold">{h.sub_bold}</Edit></b> <Edit path="home.sub_rest">{h.sub_rest}</Edit></p>
              <div className="hero-actions">
                <a href={c.social.instagram} target="_blank" rel="noopener" className="btn btn-primary">{h.primaryCtaLabel} →</a>
                <a href={c.social.instagram} target="_blank" rel="noopener" className="btn btn-ghost">{h.ghostCtaLabel}</a>
              </div>
            </div>
            <div className="portrait-col">
              <div className="portrait">
                <ZoomImg src={h.portrait} editPath="home.portrait" alt={c.site.brand} />
                <div className="tag"><Edit path="home.portraitTag">{h.portraitTag}</Edit><small><Edit path="home.portraitTagSub">{h.portraitTagSub}</Edit></small></div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats" style={{ marginTop: 54 }}>
          <div className="wrap"><div className="stats-inner" data-edit-list="stats">
            {c.stats.map((s, i) => (
              <div className="stat" data-edit-index={i} key={i}>
                <div className="n"><Edit path={`stats.${i}.n`}>{s.n}</Edit></div>
                <div className="l"><Edit path={`stats.${i}.l`}>{s.l}</Edit></div>
              </div>
            ))}
          </div></div>
        </div>
      </section>

      <Marquee items={c.marquee} />

      <section className="block">
        <div className="wrap">
          <div className="eyebrow"><Edit path="home.workEyebrow">{h.workEyebrow}</Edit></div>
          <h2 className="display" style={{ fontSize: 'clamp(38px,6vw,76px)' }}><Edit path="home.workTitle">{h.workTitle}</Edit></h2>
          <div className="work-grid">
            {pillars.map((p, i) => {
              const pg = c.pages[p.key];
              return (
                <Reveal key={p.key} delay={i + 1}>
                  <Link href={`/${p.key}`} className="card" style={{ display: 'block' }}>
                    <div className="num">{p.num}</div>
                    <h3><Edit path={`pages.${p.key}.title`}>{pg.title}</Edit></h3>
                    <p><Edit path={`pages.${p.key}.intro`}>{pg.intro}</Edit></p>
                    <div style={{ marginTop: 16, fontWeight: 800, letterSpacing: '.06em', color: 'var(--blue-deep)', fontSize: 13, textTransform: 'uppercase' }}>Explore →</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <GuideFeature guide={c.pages.about.guide} />
      <PartnerStrip partner={c.pages.about.partner} />
      <PromoStrip promos={c.promoLinks} />

      <section className="blocks-section"><div className="wrap"><Blocks path="home.blocks" blocks={h.blocks} /></div></section>

      <section className="book">
        <div className="wrap">
          <div className="eyebrow">Booking Now</div>
          <h2 className="display">Let's <span className="accent">talk</span></h2>
          <p>Weddings and special events fill up fast. Send me your date and the look you have in mind, and we will plan your day together.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href={c.social.instagram} target="_blank" rel="noopener" className="btn btn-primary">Message me on Instagram</a>
            <Link href="/contact" className="btn btn-ghost">Book Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
