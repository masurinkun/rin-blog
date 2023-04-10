import Image from "next/image";
import Meta from "@components/meta";
import Hero from "@components/layouts/hero";
import Contact from "@components/layouts/contact";
import TwoColumn from "@components/layouts/two-column";
import Container from "@components/layouts/container";
import PostBody from "@components/posts/post-body";
import eyecatch from "images/about.jpg";
import Accordion from "@components/modules/accordion";
import React from "react";
// import BlueFrame from "@/components/blue-frame";

const About: React.FC = () => {
  const microCMSLoader = ({ src, width }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="私について"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="私について" imageOn/>
      <figure>
        <Image
          loader={microCMSLoader}
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px), 100vw"
        />
      </figure>
      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>
              Web制作・コーディング業務をメインでフリーランスとして働いています。
            </p>
            <h2>私のストロングポイントについて</h2>
            <p>
              私は、HTMLやCSSを用いてデザインカンプを再現し、レスポンシブ対応も行うことができます。また、WordPressを使用して、ゼロからサイトを構築することも可能です。業務提携を結んでいる制作会社と共に、既に3件の案件をこなしています。
              タスクランナーの利用や、ファイル分割によるCSS設計など、業務効率化のための環境構築にも力を入れており、スピーディな制作が可能です。また、チーム開発の経験もあり、プロのコードを学んでいるため、品質にも自信があります。
              さらに、GitやGitHubを使用した開発経験もあります。コミュニケーションや納期管理にも優れたビジネススキルを持っており、過去には2年間、会社員として現場で働いた経験もあります。
            </p>
            <h3> 新しいことへのチャレンジ </h3>
            <p>
              私は、今後Webサイトの構築において、セキュリティ面で優れたヘッドレスCMSを採用することを検討しています。このために、React（Next.js）やTypescriptなどの技術を使って、高品質なサイトを制作することを目指しています。
              また、サイト制作だけでなく、お客様のビジネス目標を達成するためには、Webマーケティングの知識も必要だと考えています。そのため、積極的にそういった側面のスキルの習得にも励み、お客様にとって最適なWebサイトを提供することを目指しています。
              これにより、お客様が求める高品質なWebサイトを、セキュリティやビジネス目標を考慮しながら構築することが可能になります。私は、引き続き技術力の向上とWebマーケティングの勉強に努め、お客様にとって最適なWebサイトを提供していくことを目指します。
            </p>

            <h2>FAQ</h2>
            <Accordion heading="制作のスピード感について">
              <p>
                例として、LP1ページのコーディングは3日間、コーポレートサイトのトップページと下層ページ15ページは10日ほどで制作しました。納品後の修正対応は含まれておりません。
              </p>
            </Accordion>
            <Accordion heading="制作の費用について">
              <p>
                レスポンシブ対応とWordPress化を含めた価格として、トップページは35,000円、下層ページは20,000円、LPサイトは50,000円となります。ただし、これらは参考価格であり、最低価格ではありません。
              </p>
            </Accordion>
            <Accordion heading="お問い合わせについて">
              <p>
                お仕事の依頼などに関するお問い合わせは、このサイト内にあるTwitterからのDMまたは、Googleアイコンをタップしていただきメールにてお問い合わせをお願いします。
              </p>
            </Accordion>
            <Accordion heading="経歴について">
              <dl>
                <dt>2021/04</dt>
                <dd>
                  SEとしてIT企業に入社・研修開始。JavaやRuby on railsを使用。
                </dd>
              </dl>
              <dl>
                <dt>2021/12</dt>
                <dd>
                  客先常駐で金融系企業のシステム開発のプロジェクトに参画し、設計フェーズ、テストフェーズなどを担当。Excelでの資料作成がメイン。
                </dd>
              </dl>
              <dl>
                <dt>2022/07</dt>
                <dd>
                  SES（System Engineering
                  Service）の会社に転職し、客先のプロジェクトに参画。大手オンラインクリニックサービスサイトの改修作業がメイン。Next.js、Typescript、Githubなどを使用。
                </dd>
              </dl>
              <dl>
                <dt>2022/09</dt>
                <dd>
                  Webサイトのコーディング、WordPressでのカスタマイズがメイン。制作会社から直案件も数件遂行。
                  ※副業
                </dd>
              </dl>
              <p>詳細な履歴書はお問い合わせいただいた際に資料として別途共有します。</p>
            </Accordion>
            <Accordion heading="掲載できない実績について">
              <p>
                お問い合わせいただいた際にこちらで用意しているスキルシートをお渡しします。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
};

// About.getLayout = function getLayout(page) {
//   return <BlueFrame>{page}</BlueFrame>
// }

export default About;
