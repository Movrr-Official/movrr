import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { waitlistHref } from "@/lib/waitlist/prefill";
import type { AppShowcaseCopy } from "@/lib/app-showcase/copy";
import styles from "./app-showcase.module.css";

const asset = (name: string) => `/images/app/${name}.webp`;

function PhoneCapture({
  name,
  alt,
  sizes,
}: {
  name: string;
  alt: string;
  sizes: string;
}) {
  return (
    <div className={styles.phone} data-app-phone={name}>
      <div className={styles.phoneScreen}>
        <Image
          src={asset(name)}
          alt={alt}
          width={828}
          height={1792}
          sizes={sizes}
          quality={90}
        />
      </div>
      <Image
        src="/images/app/iphone-frame.svg"
        alt=""
        aria-hidden="true"
        width={884}
        height={1848}
        className={styles.phoneHardware}
        unoptimized
      />
    </div>
  );
}

export function AppShowcase({
  locale,
  copy: c,
}: {
  locale: Locale;
  copy: AppShowcaseCopy;
}) {
  const joinHref = waitlistHref(locale, "rider");
  return (
    <>
      <Navbar />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="app-title">
          <div className={`movrr-shell ${styles.heroLayout}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h1 id="app-title">
                {c.title[0]}
                <br />
                <span>{c.title[1]}</span>
              </h1>
              <p className={styles.intro}>{c.intro}</p>
              <div className={styles.actions}>
                <Link className={styles.primary} href={joinHref}>
                  {c.primary}
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <a className={styles.secondary} href="#ride-map">
                  {c.secondary}
                  <ArrowDown aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <Image
                src={asset("studio-ride")}
                alt={c.heroAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={88}
                className={styles.heroImage}
              />
            </figure>
          </div>
        </section>

        <div className={`movrr-shell ${styles.previewNote}`}>
          <p>{c.preview}</p>
        </div>

        <section
          id="ride-map"
          className={styles.map}
          aria-labelledby="map-title"
        >
          <div className="movrr-shell">
            <header className={styles.mapHeader}>
              <div>
                <h2 id="map-title">{c.map.title}</h2>
              </div>
              <p className={styles.body}>{c.map.body}</p>
            </header>
            <div className={styles.mapStage}>
              <ol className={styles.mapSteps}>
                {c.map.steps.slice(0, 2).map((step, i) => (
                  <li key={step.title}>
                    <span className={styles.index}>0{i + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
              <figure className={styles.mapCapture}>
                <PhoneCapture
                  name="ride-map"
                  alt={c.map.alt}
                  sizes="(min-width: 768px) 300px, 70vw"
                />
                <figcaption>{c.map.caption}</figcaption>
              </figure>
              <div className={styles.mapAfter}>
                <span className={styles.index}>03</span>
                <h3>{c.map.steps[2].title}</h3>
                <p>{c.map.steps[2].body}</p>
                <details className={styles.heatmap}>
                  <summary>
                    {c.map.heatmap}
                    <Plus aria-hidden="true" size={18} />
                  </summary>
                  <PhoneCapture
                    name="heatmap"
                    alt={c.map.heatmapAlt}
                    sizes="(min-width: 768px) 260px, 70vw"
                  />
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.wallet} aria-labelledby="wallet-title">
          <div className="movrr-shell">
            <header className={styles.walletHeader}>
              <h2 id="wallet-title">{c.wallet.title}</h2>
              <p className={styles.body}>{c.wallet.body}</p>
            </header>
            <div className={styles.walletSpread}>
              <figure className={styles.balance}>
                <div className={styles.walletImage}>
                  <PhoneCapture
                    name="wallet"
                    alt={c.wallet.alt}
                    sizes="(min-width: 768px) 320px, 72vw"
                  />
                </div>
                <figcaption>
                  <h3>{c.wallet.balance}</h3>
                  <p>{c.wallet.balanceBody}</p>
                </figcaption>
              </figure>
              <figure className={styles.performance}>
                <div className={styles.chartImage}>
                  <Image
                    src={asset("earnings")}
                    alt={c.wallet.chartAlt}
                    width={1080}
                    height={2424}
                    sizes="(min-width: 768px) 480px, 86vw"
                    quality={90}
                  />
                </div>
                <figcaption>
                  <h3>{c.wallet.performance}</h3>
                  <p>{c.wallet.performanceBody}</p>
                </figcaption>
              </figure>
            </div>
            <p className={styles.finePrint}>{c.wallet.note}</p>
          </div>
        </section>

        <section className={styles.campaigns} aria-labelledby="campaigns-title">
          <div className={`movrr-shell ${styles.campaignLayout}`}>
            <header className={styles.campaignHeader}>
              <h2 id="campaigns-title">{c.campaigns.title}</h2>
              <p className={styles.body}>{c.campaigns.body}</p>
            </header>
            <figure className={styles.campaignList}>
              <PhoneCapture
                name="campaigns"
                alt={c.campaigns.alt}
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 240px, 180px"
              />
            </figure>
            <figure className={styles.campaignStudio}>
              <Image
                src={asset("studio-campaign")}
                alt={c.campaigns.studioAlt}
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 100vw"
                quality={88}
              />
            </figure>
            <div className={styles.campaignTopics}>
              {c.campaigns.topics.map((topic, i) => (
                <details key={topic.title} open={i === 0}>
                  <summary>
                    {topic.title}
                    <Plus aria-hidden="true" size={18} />
                  </summary>
                  <p>{topic.body}</p>
                </details>
              ))}
            </div>
            <p className={styles.campaignCaption}>{c.campaigns.caption}</p>
          </div>
        </section>

        <section className={styles.progress} aria-labelledby="progress-title">
          <div className="movrr-shell">
            <div className={styles.progressHeading}>
              <h2 id="progress-title">{c.progress.title}</h2>
              <p className={styles.body}>{c.progress.body}</p>
            </div>
            <div className={styles.progressLayout}>
              <ol className={styles.progressSteps}>
                {c.progress.steps.map((step, i) => (
                  <li key={step.title}>
                    <span className={styles.index}>0{i + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.progressVisual}>
                <figure className={styles.progressCapture}>
                  <Image
                    src={asset("home")}
                    alt={c.progress.alt}
                    width={828}
                    height={1792}
                    sizes="(min-width: 768px) 440px, 90vw"
                    quality={90}
                  />
                </figure>
                <ul className={styles.badges}>
                  {["first-ride", "city-explorer", "streak-starter"].map(
                    (name, i) => (
                      <li key={name}>
                        <Image
                          src={`/images/app/${name}.png`}
                          alt=""
                          width={128}
                          height={128}
                          sizes="(min-width: 768px) 100px, 80px"
                        />
                        <span>{c.progress.badges[i]}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            <p className={styles.finePrint}>{c.progress.caption}</p>
          </div>
        </section>

        <section className={styles.community} aria-labelledby="community-title">
          <div className={`movrr-shell ${styles.communityLayout}`}>
            <div className={styles.communityStory}>
              <h2 id="community-title">{c.community.title}</h2>
              <p className={styles.body}>{c.community.body}</p>
              <p className={styles.communityDetail}>{c.community.detail}</p>
            </div>
            <figure className={styles.communityPhoto}>
              <Image
                src="/images/app/community-ride-together.webp"
                alt={c.community.photoAlt}
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                quality={88}
              />
            </figure>
            <figure className={styles.communityCapture}>
              <PhoneCapture
                name="community"
                alt={c.community.alt}
                sizes="(min-width: 768px) 240px, 180px"
              />
              <figcaption>{c.community.note}</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`movrr-shell ${styles.closingLayout}`}>
            <div>
              <h2 id="closing-title">{c.closing.title}</h2>
            </div>
            <div>
              <p className={styles.body}>{c.closing.body}</p>
              <Link className={styles.primary} href={joinHref}>
                {c.primary}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                className={styles.contact}
                href={withLocalePath(locale, "/contact")}
              >
                {c.closing.secondary}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer cta={false} />
    </>
  );
}
