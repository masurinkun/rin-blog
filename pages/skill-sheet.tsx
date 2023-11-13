import Meta from "@components/meta";
import ConvertBody from "@components/converts/convert-body";
import Hero from "@components/layouts/hero";
import TwoColumn from "@components/layouts/two-column";
import Container from "@components/layouts/container";
import PostBody from "@components/posts/post-body";
import eyecatch from "images/about.jpg";
import React from "react";
import { getAllLanguages } from "lib/api";
import { GetStaticProps } from "next";
import { languageType } from "@components/types";

type FieldProps = {
  content: {
    language: languageType[];
    tool: languageType[];
    career: languageType[];
    work: languageType[];
  }
};

const SkillSheet: React.FC<FieldProps> = ({content}) => {

  return (
    <Container>
      <Meta
        pageTitle="skill sheet"
        pageDesc="スキルシート"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="Skill Sheet" subtitle="スキルシート" />
      <TwoColumn>
        <PostBody>
          <table>
            <thead>
              <tr>
                <th>氏名(ふりがな)</th>
                <th>出生年</th>
                <th>所在地</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  桝田麟太郎
                  <br />
                  （ますだりんたろう）
                </td>
                <td>1997年</td>
                <td>東京</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>使用言語</th>
                <th>経験年数</th>
                <th>詳細</th>
              </tr>
            </thead>

            <tbody>
              {content.language.map((language, index) => {
                return (
                  <tr key={index}>
                    <td>{language.name}</td>
                    <td>{language.experience}</td>
                    <td>{language.detail}</td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th>その他ツールなど</th>
                <th>経験年数</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              {content.tool.map((tool, index) => {
                return (
                  <tr key={index}>
                    <td>{tool.name}</td>
                    <td>{tool.experience}</td>
                    <td>{tool.detail}</td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th colSpan={3}>職務経歴</th>
              </tr>
            </thead>
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
            <thead>
              <tr>
                <th colSpan={3}>制作実績</th>
              </tr>
            </thead>
            <tbody>
              {content.work.map((work, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <ConvertBody contentHTML={work.name} />
                    </td>
                    <td>{work.experience}</td>
                    <td>{work.detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </PostBody>
      </TwoColumn>
    </Container>
  );
};


export default SkillSheet;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllLanguages();

  return {
    props: {
      content: data,
    },
  };
};