import Link from "next/link";

const HIGHLIGHT_NAMES = ["Chenfeng Gao", "Chenfeng (Jesse) Gao"];

type PubLink = { label: string; url: string };

type Publication = {
  title: string;
  teaser?: string;
  teaserVideo?: string;
  authors: string[];
  venue?: string;
  award?: string;
  comingSoon?: boolean;
  links: PubLink[];
};

const publications: Publication[] = [
  {
    title:
      "FlowAvatar: Real-Time Full-Body Avatars from Sparse Egocentric Inputs on Consumer XR Devices",
    teaser: "/pubs/FlowAvatar.png",
    authors: [
      "Chenfeng Gao",
      "Taeyoung Yeon",
      "Sungheon Park",
      "Vasco Xu",
      "Anish Prabhu",
      "Mar Gonzalez-Franco",
      "Karan Ahuja",
    ],
    venue: "ISMAR '26",
    comingSoon: true,
    links: [],
  },
  {
    title:
      "FabDreamer: Exploring the Image-to-Physical Workflow Through AI-Assisted Layered Fabrication",
    teaser: "/pubs/FabDreamer.png",
    authors: ["Chenfeng Gao", "Zeya Chen", "Anjie Yang", "Karan Ahuja", "Danli Luo"],
    venue: "UIST '26",
    comingSoon: true,
    links: [],
  },
  {
    title: "MARIO: Motion-Augmented Real-Time Multi-Sensor Inertial Odometry",
    teaser: "/pubs/MARIO.png",
    authors: [
      "Yiquan Li",
      "Taeyoung Yeon",
      "Chenfeng Gao",
      "Vasco Xu",
      "Xuanyou Liu",
      "Karan Ahuja",
    ],
    venue: "CVPR '26 Findings",
    links: [{ label: "paper", url: "https://spice-lab.org/papers/MARIO.pdf" }],
  },
  {
    title: "Shape-Kit: A Design Toolkit for Crafting On-Body Expressive Haptics",
    teaser: "/pubs/ShapeKit.png",
    teaserVideo: "/pubs/ShapeKit.mp4",
    authors: [
      "Ran Zhou",
      "Jianru Ding",
      "Chenfeng (Jesse) Gao",
      "Wanli (Michael) Qian",
      "Benjamin Erickson",
      "Madeline Balaam",
      "Daniel Leithinger",
      "Ken Nakagaki",
    ],
    venue: "CHI '25",
    award: "Honorable Mention",
    links: [
      { label: "paper", url: "/papers/ShapeKit.pdf" },
      { label: "video", url: "https://youtu.be/W_rZg8f6lZM" },
      { label: "code", url: "https://github.com/AxLab-UofC/Shape-Kit" },
      {
        label: "project",
        url: "https://www.axlab.cs.uchicago.edu/projects/shape-kit",
      },
    ],
  },
  {
    title:
      "SHAPE-IT: Exploring Text-to-Shape-Display for Generative Shape-Changing Behaviors with LLMs",
    teaser: "/pubs/Shapeit.png",
    teaserVideo: "/pubs/Shapeit.mp4",
    authors: [
      "Chenfeng (Jesse) Gao*",
      "Wanli (Michael) Qian*",
      "Anup Sathya",
      "Ryo Suzuki",
      "Ken Nakagaki",
    ],
    venue: "UIST '24",
    links: [
      { label: "paper", url: "/papers/Shapeit.pdf" },
      { label: "video", url: "https://youtu.be/2NxzOBc7AdQ" },
      { label: "code", url: "https://github.com/AxLab-UofC/SHAPE-IT" },
      {
        label: "project",
        url: "https://www.axlab.cs.uchicago.edu/projects/shape-it",
      },
    ],
  },
  {
    title:
      "MobilePoser: Real-Time Full-Body Pose Estimation and 3D Human Translation from IMUs in Mobile Consumer Devices",
    teaser: "/pubs/MobilePoser.png",
    teaserVideo: "/pubs/MobilePoser.mp4",
    authors: ["Vasco Xu", "Chenfeng (Jesse) Gao", "Henry Hoffmann", "Karan Ahuja"],
    venue: "UIST '24",
    links: [
      { label: "paper", url: "https://dl.acm.org/doi/10.1145/3654777.3676461" },
      { label: "video", url: "https://www.youtube.com/watch?v=cN75eFHdCyE" },
      { label: "code", url: "https://github.com/SPICExLAB/MobilePoser" },
      {
        label: "project",
        url: "https://spice-lab.org/projects/MobilePoser/",
      },
    ],
  },
  {
    title: "Towards Multimodal Interaction with AI-Infused Shape-Changing Interfaces",
    teaser: "/pubs/Towards.png",
    teaserVideo: "/pubs/Towards.mp4",
    authors: [
      "Chenfeng (Jesse) Gao*",
      "Wanli (Michael) Qian*",
      "Richard Liu",
      "Rana Hanocka",
      "Ken Nakagaki",
    ],
    venue: "UIST '24 Poster",
    links: [
      { label: "paper", url: "/papers/Towards.pdf" },
      { label: "video", url: "https://youtu.be/ed5gHUzqIjg" },
    ],
  },
  {
    title:
      "AeroRigUI: Actuated TUIs for Spatial Interaction using Rigging Swarm Robots on Ceilings in Everyday Space",
    teaser: "/pubs/AeroRig.png",
    teaserVideo: "/pubs/AeroRig.mp4",
    authors: ["Chenfeng (Jesse) Gao*", "Lilith Yu*", "David Wu", "Ken Nakagaki"],
    venue: "CHI '23",
    links: [
      { label: "paper", url: "/papers/AeroRig.pdf" },
      { label: "video", url: "https://www.youtube.com/watch?v=7hScViqkR84" },
      { label: "code", url: "https://github.com/AxLab-UofC/CHI2023_AeroRigUI" },
      {
        label: "project",
        url: "https://www.axlab.cs.uchicago.edu/projects/aerorigui",
      },
    ],
  },
  {
    title:
      "ShadowAstro: Levitating Constellation Silhouette for Spatial Exploration and Learning",
    teaser: "/pubs/ShadowAstro.png",
    teaserVideo: "/pubs/ShadowAstro.mp4",
    authors: ["Chenfeng (Jesse) Gao*", "Jiatong Li*", "Ken Nakagaki"],
    venue: "UIST '22 SIC",
    award: "Jury Honorable Mention",
    links: [
      { label: "paper", url: "/papers/ShadowAstro.pdf" },
      { label: "video", url: "https://youtu.be/9d8QrDRKCgg" },
      {
        label: "project",
        url: "https://www.axlab.cs.uchicago.edu/projects/shadowastro",
      },
    ],
  },
];

const heroLinks: PubLink[] = [
  { label: "CV", url: "/docs/jesse-gao-cv.pdf" },
  { label: "EMAIL", url: "mailto:chenfenggao2029@u.northwestern.edu" },
  {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/chenfeng-jesse-gao-a40229110/",
  },
];

function Authors({ authors }: { authors: string[] }) {
  return (
    <div className="mt-2 text-gray-600 font-light">
      {authors.map((author, i) => {
        const isMe = HIGHLIGHT_NAMES.some((n) => author.startsWith(n));
        return (
          <span key={author}>
            {isMe ? (
              <span className="font-medium text-gray-900">{author}</span>
            ) : (
              author
            )}
            {i < authors.length - 1 && ", "}
          </span>
        );
      })}
    </div>
  );
}

function BracketLink({ link, lowercase }: { link: PubLink; lowercase?: boolean }) {
  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      className={`whitespace-nowrap text-[#8970A7] font-semibold hover:text-[#6f5a8c] hover:underline hover:underline-offset-8 hover:decoration-1 hover:decoration-[#6f5a8c] ${
        lowercase ? "text-sm" : ""
      }`}
    >
      [&nbsp;{link.label}&nbsp;]
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex-grow">
      <nav className="bg-white">
        <div className="mx-auto max-w-5xl mt-6 px-6">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-3xl font-bold">
                  CHENFENG (JESSE) GAO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Intro */}
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <img
              src="/images/me.png"
              alt="Chenfeng (Jesse) Gao"
              className="w-64 h-64 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I am a PhD student in Technology and Social Behavior at
                Northwestern University, advised by{" "}
                <a
                  href="https://karan-ahuja.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-gray"
                >
                  Prof. Karan Ahuja
                </a>{" "}
                in the{" "}
                <a
                  href="https://spice-lab.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-gray"
                >
                  SPICE Lab
                </a>
                . Previously, I earned an M.S. in Computer Science at the
                University of Chicago working with{" "}
                <a
                  href="https://www.axlab.cs.uchicago.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-gray"
                >
                  Prof. Ken Nakagaki
                </a>{" "}
                (AxLab), an M.Des. in Human-Computer Interaction from the IIT
                Institute of Design, and a B.S. in Mathematics from Renmin
                University of China.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                My research centers on human digitization: building real-time
                systems that recover human pose and motion from the sparse
                inertial sensors already embedded in phones, watches, earbuds,
                and AR glasses. I work across on-device machine learning,
                multi-sensor fusion, and XR systems to turn these signals into
                full-body avatars and embodied input for spatial computing.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Before moving into research, I trained and worked as a product
                / UX designer — you can explore that side of my work in my{" "}
                <a
                  href="https://jessegao.online"
                  target="_blank"
                  rel="noreferrer"
                  className="link-gray"
                >
                  design portfolio
                </a>
                .
              </p>
              <div className="flex flex-row flex-wrap items-center gap-4">
                {heroLinks.map((link) => (
                  <BracketLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="container mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Selected Publications</h2>
            </div>
            <hr className="my-1 border-gray-200" />
            <div className="bg-white overflow-hidden">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="flex flex-col md:flex-row md:items-center bg-white mt-8"
                >
                  <div className="md:w-1/3 mt-1">
                    {pub.teaserVideo ? (
                      <video
                        src={pub.teaserVideo}
                        poster={pub.teaser}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-contain mx-auto max-h-44"
                      />
                    ) : pub.teaser ? (
                      <img
                        src={pub.teaser}
                        alt={`${pub.title} teaser`}
                        className="object-contain mx-auto max-h-44"
                      />
                    ) : (
                      <div className="mx-auto flex h-40 w-full items-center justify-center rounded-md bg-gray-100 text-sm text-gray-400">
                        cover coming soon
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <h2 className="text-lg font-semibold text-gray-900 mt-4 md:mt-0">
                      {pub.title}
                    </h2>
                    <Authors authors={pub.authors} />
                    <div className="uppercase text-base mt-1 text-gray-600 font-bold">
                      {pub.venue}
                      {pub.award && (
                        <span className="text-[#8970A7] normal-case font-semibold">
                          {" "}
                          · {pub.award}
                        </span>
                      )}
                      {pub.comingSoon && (
                        <span className="normal-case font-semibold text-[#8970A7]">
                          {pub.venue ? " · " : ""}Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-row flex-wrap items-center gap-3">
                      {pub.links.map((link) => (
                        <BracketLink key={link.label} link={link} lowercase />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto max-w-5xl px-6 py-12 text-sm text-gray-400">
        © {new Date().getFullYear()} Chenfeng (Jesse) Gao
      </footer>
    </div>
  );
}
