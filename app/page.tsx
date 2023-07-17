import Image from "next/image";
import "./style.scss";
import "./layout.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 max-w-screen">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-xl lg:flex">
        <p
          className="font-mono font-bold fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto bg-gradient-to-t from-white via-white dark:from-black
         dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
        >
          BELSITE.
        </p>

        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end
        justify-center bg-gradient-to-t from-white via-white dark:from-black
         dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
        >
          <div className="px-5">
            <Image
              src="/assets/mail_icon.png"
              alt="Mail Logo"
              width={40}
              height={50}
              priority
            />
          </div>
          <div className="lg\:p-4">
            <Image
              src="/assets/github_icon.png"
              alt="Github Logo"
              width={40}
              height={50}
              priority
            />
          </div>
          <div className="px-5">
            <Image
              src="/assets/linkedin_icon.png"
              alt="LinkedIn Logo"
              width={40}
              height={50}
              priority
            />
          </div>
          <div className="lg\:p-4">
            <Image
              src="/assets/kaggle_icon.png"
              alt="Kaggle Logo"
              width={40}
              height={50}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex-direction-col">
        <div
          className="flex p-24 flex-parent relative place-items-center before:absolute before:h-[200px] before:w-[480px]
      before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
      before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px]
      after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl
      after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700
      before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40
      before:lg:h-[360px] z-[-1]"
        >
          <Image
            className="image-round"
            src="/assets/personal_pic.jpg"
            alt="Next.js Logo"
            width={180}
            height={0}
            priority
          />

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert group rounded-lg
          border border-transparent px-5 py-4 transition-colors hover:border-gray-300
          hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-right"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-bold`}>Paulius Karpavicius </h2>
            <p className={`m-0 text-sm`}>Software Development Engineer</p>
          </a>
        </div>
      </div>

      <div className="flex p-8 relative place-items-center">
        <p className={`m-0 text-center`}>
          🌤️ Cloud Computing 🛡️ Cyber Security 🧠 Artificial Intelligence
        </p>
      </div>

      <div className="flex p-24 relative place-items-center">
        <p className={`m-0 text-sm text-center w-2 block-color`}>
          I love a challenge and competition, especially in software
          engineering. I’m currently working as software services engineer at
          Capital One.
        </p>
      </div>

      <div className="flex p-24 relative place-items-center ">
        <p className={`m-0 text-sm text-center w-2 block-color-1`}>
          I&apos;m open to freelance and speaking at events. Please don&apos;t
          hesitate to get in touch ☎️
        </p>
      </div>

      <div className="inline-block p-24 relative place-items-center font-semibold">
        <div className="block-color-1 w-2">
          <h3 className={`text-2xl w-2 text-left heading-1`}>
            Crushing Offensive Security Certified Professional
          </h3>
          <p className={` relative m-0 text-sm text-left paragraph-1`}>
            My guide on how to prepare for Amazon Web Services Cloud
            Practitioner exam
          </p>
          <p className={` relative m-0 text-sm text-left hashtag-1`}>
            #Cyber Security #Cloud #Cloud Computing #Certifications
          </p>
        </div>
        <div className="date-1 inline-block">
          <div className="inline par-1">
            {" "}
            <p>
              Dec 30, 2022 🕑
              <svg className="delete">
                <line x1="118" x2="118" y2="150" stroke="grey" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="inline-block p-24 relative place-items-center font-semibold">
        <div className="block-color-1 w-2 relative">
          <h3 className={`text-2xl w-2 text-left heading-1`}>
            What is Docker?
          </h3>
          <p className={` relative m-0 text-sm text-left paragraph-1`}>
            Demonstration on how Docker and containerisation in general works
            under the hood
          </p>
          <p className={` relative m-0 text-sm text-left hashtag-1`}>
            #CI/CD #Docker #Containers
          </p>
        </div>
        <div className="date-1 inline-block">
          <div className="inline par-1">
            {" "}
            <p>
              Sep 30, 2022 🕑
              <svg className="delete">
                <line x1="118" x2="118" y2="120" stroke="grey" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="inline-block p-24 relative place-items-center font-semibold">
        <div className="block-color-1 w-2 relative">
          <Image
            className="image-height-1 flex place-items heading-1"
            src="/assets/demonic_dogs_pic.png"
            alt="Next.js Logo"
            width={800}
            height={0}
            priority
          />

          <h3 className={`text-2xl w-2 text-left heading-1`}>
            Building belsite.co.uk
          </h3>
          <p className={` relative m-0 text-sm text-left paragraph-1`}>
            How I built this site.
          </p>
        </div>
        <div className="date-1 inline-block">
          <div className="inline par-1">
            {" "}
            <p>
              Sep 30, 2022 🕑
              <svg className="delete" height="600px">
                <line x1="118" x2="118" y2="585" stroke="grey" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="inline-block p-24 relative place-items-center font-semibold ">
        <div className="block-color-1 w-2 relative">
          <h3 className={`text-2xl w-2 text-left heading-1`}>
            Kaggle and competetive programming
          </h3>
          <p className={` relative m-0 text-sm text-left paragraph-1`}>
            I recently started participating in data science and programming
            competitions
          </p>
          <p className={` relative m-0 text-sm text-left hashtag-1`}>
            #Kaggle #Competetive Programming
          </p>
        </div>
        <div className="date-1 inline-block">
          <div className="inline par-1">
            {" "}
            <p>
              Sep 30, 2022 🕑
              <svg className="delete">
                <line />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen text-center p-24">
        <div className="drops">ア</div>
        <div className="drops">イ</div>
        <div className="drops">ウ</div>
        <div className="drops">エ</div>
        <div className="drops">オ</div>
        <div className="drops">キ</div>
        <div className="drops">ク</div>
        <div className="drops">ケ</div>
        <div className="drops">コ</div>
        <div className="drops">サ</div>
        <div className="drops">シ</div>
        <div className="drops">ス</div>
        <div className="drops">セ</div>
        <div className="drops">ソ</div>
        <div className="drops">タ</div>
        <div className="drops">チ</div>
        <div className="drops">ツ</div>
        <div className="drops">テ</div>
        <div className="drops">ト</div>
        <div className="drops">ナ</div>
        <div className="drops">ニ</div>
        <div className="drops">ヌ</div>
        <div className="drops">ネ</div>
        <div className="drops">ノ</div>
        <div className="drops">ハ</div>
        <div className="drops">ヒ</div>
        <div className="drops">フ</div>
        <div className="drops">ヘ</div>
        <div className="drops">ホ</div>
        <div className="drops">マ</div>
        <div className="drops">ミ</div>
        <div className="drops">ム</div>
        <div className="drops">メ</div>
        <div className="drops">モ</div>
        <div className="drops">ヤ</div>
        <div className="drops">ユ</div>
        <div className="drops">ヨ</div>
        <div className="drops">ラ</div>
        <div className="drops">リ</div>
        <div className="drops">ル</div>
        <div className="drops">レ</div>
        <div className="drops">ロ</div>
        <div className="drops">ワ</div>
        <div className="drops">ヲ</div>
        <div className="drops">ン</div>
        <div className="drops">あ</div>
        <div className="drops">う</div>
        <div className="drops">え</div>
        <div className="drops">え</div>
        <div className="drops">お</div>
        <div className="drops">か</div>
        <div className="drops">き</div>
        <div className="drops">く</div>
        <div className="drops">け</div>
        <div className="drops">し</div>
        <div className="drops">す</div>
        <div className="drops">せ</div>
        <div className="drops">そ</div>
        <div className="drops">た</div>
        <div className="drops">ち</div>
        <div className="drops">つ</div>
        <div className="drops">て</div>
        <div className="drops">と</div>
        <div className="drops">な</div>
        <div className="drops">に</div>
        <div className="drops">ぬ</div>
        <div className="drops">ね</div>
        <div className="drops">の</div>
        <div className="drops">は</div>
        <div className="drops">ひ</div>
        <div className="drops">ふ</div>
        <div className="drops">へ</div>
        <div className="drops">ほ</div>
        <div className="drops">ま</div>
        <div className="drops">み</div>
        <div className="drops">む</div>
        <div className="drops">め</div>
        <div className="drops">も</div>
        <div className="drops">や</div>
        <div className="drops">ゆ</div>
        <div className="drops">よ</div>
        <div className="drops">ら</div>
        <div className="drops">り</div>
        <div className="drops">る</div>
        <div className="drops">れ</div>
        <div className="drops">ろ</div>
        <div className="drops">わ</div>
        <div className="drops">を</div>
        <div className="drops">ん</div>
      </div>
    </main>
  );
}
