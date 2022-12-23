import Image from "next/image";
import Meta from "@/components/meta";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import TwoColumn  from "@/components/two-column";
import Container from "components/container";
import PostBody from "components/post-body";
import eyecatch from 'images/about.jpg'

export default function About() {
    const microCMSLoader = ({ src, width, quality }) => {
      return `${src}?auto=format&fit=max&w=${width}`;
    };

  return (
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities." />
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
              CUBEが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2> ものづくりで目指していること </h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れてます。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分に中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3> 新しいことへのチャレンジ </h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  );
}