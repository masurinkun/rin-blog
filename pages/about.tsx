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
import { getAllLanguages } from "lib/api";
import { GetStaticProps } from "next";
import { languageType } from "@components/types";
// import BlueFrame from "@/components/blue-frame";

type FieldProps = {
  content: {
    career: languageType[];
  };
};


const About: React.FC<FieldProps> = ({ content }) => {
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
      <Hero title="About" subtitle="私について" />
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
              Web制作のコーディング業務、Webアプリの開発をメインでフリーランスとして働いています。
            </p>
            <h2>私のストロングポイントについて</h2>
            <p>
              私は、HTMLやCSSを用いてデザインカンプを再現し、レスポンシブ対応も行うことができます。また、WordPressを使用して、ゼロからサイトを構築することも可能です。業務提携を結んでいる制作会社と共に、既に3件の案件をこなしています。
              タスクランナーの利用や、ファイル分割によるCSS設計など、業務効率化のための環境構築にも力を入れており、スピーディな制作が可能です。また、チーム開発の経験もあり、プロのコードを学んでいるため、品質にも自信があります。
              さらに、GitやGitHubを使用した開発経験もあります。コミュニケーションや納期管理にも優れたビジネススキルを持っており、過去には2年間、会社員として現場で働いた経験もあります。
            </p>
            <h2>職務経歴</h2>
            <div>
            <table>
              <tbody>
                {content.career.map((career, index) => {
                  return (
                    <tr key={index}>
                      <td>{career.name}</td>
                      <td>{career.experience}</td>
                      <td>{career.detail}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllLanguages();

  return {
    props: {
      content: data,
    },
  };
};