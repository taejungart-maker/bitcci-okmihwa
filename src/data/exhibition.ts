export type Lang = 'ko' | 'en';
export type LocalizedText = { ko: string; en: string };

export interface Artwork {
  id: number;
  titleKo: string;
  titleEn: string;
  material: string;
  size: string;
  year: string;
  image: string;
  /** 작품 메시지 (선택) */
  messageKo?: string;
  messageEn?: string;
}

export const exhibition = {
  artist: { ko: '옥미화', en: 'Ok Mihwa' },
  title: { ko: '위버멘쉬의 여정', en: 'The Journey of the Übermensch' },
  edition: { ko: '제6회 옥미화 개인전', en: '6th Ok Mihwa Solo Exhibition' },
  venue: { ko: '인사아트센터 5F 경남갤러리', en: 'Insa Art Center 5F, Gyeongnam Gallery' },
  address: { ko: '서울특별시 종로구 인사동길 41-1', en: '41-1 Insadong-gil, Jongno-gu, Seoul' },
  period: { ko: '2026. 05. 27 [수] — 06. 01 [월]', en: 'May 27 – Jun 1, 2026' },
  opening: { ko: '오프닝 2026. 05. 27 [수] 오후 3:30', en: 'Opening · May 27, 2026, 3:30 PM' },
  keywords: { ko: '위버멘쉬 · 심연 · 마티에르 · 자아 초극', en: 'Übermensch · Abyss · Matière · Self-Transcendence' },
  contact: '010-5087-7099',
  email: 'songwon21@naver.com',

  // 평론 (황의필 — 홍익대 미술평론가)
  critiqueTitle: {
    ko: '감각 여건에 기인한 심연으로서 위버멘쉬',
    en: 'Übermensch as an Abyss Originating from Sense-Data',
  },
  critiqueAuthor: {
    ko: '글 · 황의필 (홍익대학교, 미술평론가)',
    en: 'Written by Hwang Eui-pil (Hongik University, Art Critic)',
  },
  critique: {
    ko: `인간의 삶이 지향하는 희구는 대체로 자아 상실마저 재창조하려는 의지를 담아낸다. 현대 사회에서 일어나는 자아 상실은 자신의 반성이나 조명으로 말미암아 오히려 변칙으로 재창조된다. 이로써 재창조는 인간 정신이 극복하지 못하는 한계를 이상화된 실현으로 다가선다.

오늘날 감정의 상흔에서 도피하려는 결의에는 스스로 자아낸 동정심이나 정사(情思)에 사로잡히지 않으려는 데 따른다. 인간이 느끼는 감정은 정신의 한계에 다다를 때 가능하다. 이러한 극복의 일환으로서 위버멘쉬(Übermensch)를 끌어들이기에 충분하다. 옥미화는 이 같은 정신이 낳은 극복의 문제를 창작으로 이해하려 든다.

옥미화는 이를 심연의 울림으로 받아들인다. 표현 방식에서도 거친 마티에르(matière)로 인간 본연의 심상 작용을 대변하며, 강렬한 원색은 생명에 에너지를 펼치려는 심사이기도 하다.

이번 〈위버멘쉬의 여정〉은 인간 존재의 내면에 잠재한 불안감과 멍울을 초월하려는 욕망의 표방이다. 중첩으로 긁히고 균열이 일어난 질료에서는 삶의 시간성과 심리 작용에 기인한 흔적을 함축한다. 빛과 어둠의 대조 장면은 인간의 심연에 머무는 불안감이 혼돈 상태를 유발한 양상이며, 그 어둠 속에서 생명의 존귀함을 얻으려는 작가의 관심이 담긴다.`,
    en: `The desire for return that human life aspires to generally embodies a will to recreate even the loss of self. This loss of self is reconstructed in an irregular manner through self-reflection or illumination, approaching an idealized realization that has not yet been overcome.

Today, the determination to escape from emotional vulnerability tends not to be swayed by self-induced sympathy or affection. The emotion a human feels is possible when it reaches the limits of the mind. Introducing the Übermensch as a part of overcoming this is sufficient. Ok Mi-hwa understands this problem of overcoming through creation.

Ok Mi-hwa accepts this as the resonance of the abyss. Her expressive style represents human nature through rough matière, and intense primary colors signify a psychological operation overflowing with energy into life.

This exhibition, The Journey of the Übermensch, is an expression of the desire to transcend the anxiety and melancholy latent within the depths of human existence. The materials—scraped and cracked in multiple layers—imply traces originating from the temporality of life. The contrast of light and darkness manifests the chaos induced by anxiety residing in the abyss, and within that darkness lies the artist's pursuit of the dignity of life.`,
  },

  // 작가 노트
  noteEpigraph: {
    ko: '"심연을 들여다 보는 자가 아닌, 그 심연을 뚫고 빛을 건져 올리는 자의 초상을 그리다"',
    en: '"To paint the portrait of one who does not merely gaze into the abyss, but pierces through it to scoop up the light."',
  },
  note: {
    ko: `나의 작업은 인간 존재 내부에 잠재된 불안과 결핍, 그리고 자기 초월의 가능성에 대한 회화적 탐구에서 출발한다. 화면 위에 축적되는 두터운 마티에르와 자동기술적 제스처는 재현적 형상을 위한 표현이 아니라, 무의식 층위에서 발생하는 감각과 에너지의 흔적을 물질화하는 과정이다.

때로는 험준한 절벽으로, 때로는 깊은 바다와 산으로 나타나는 형상들은 내가 통과해 온 삶의 시간들이다. 화면의 거친 마티에르는 내가 마주한 현실의 무게이며, 그 위로 부서지는 빛은 결코 굴복하지 않는 인간의 의지이다. 나는 캔버스라는 광활한 대지 위에 초인을 꿈꾼다.

어둠은 인간 존재의 심연과 불안, 혼돈의 상태를 의미하며, 그 속에서 떠오르는 빛은 끊임없이 자신을 넘어서는 생성의 의지를 상징한다. 위버멘쉬는 완성된 존재가 아니라 스스로를 끊임없이 해체하고 갱신하며 새로운 존재 방식으로 나아가는 과정적 존재이다.

결국 나의 작업은 물질과 행위, 우연성과 축적의 과정 속에서 인간 존재의 심연을 통과하며 생성되는 내면의 빛에 대한 기록이다.`,
    en: `My work begins with a painterly exploration of the anxiety, lack, and potential for self-transcendence inherent within human existence. The thick matière and automatist gestures accumulated on the canvas are not expressions meant for representation; rather, they are a process of materializing the traces of sensation and energy that arise from the subconscious.

Appearing at times as rugged cliffs, and at others as the deep sea or mountains, these forms represent the periods of life I have passed through. The rough matière is the weight of reality I have confronted, and the light breaking above it is the unyielding human will. Upon the canvas—a vast land of freedom—I dream of the Übermensch.

Darkness signifies the abyss, anxiety, and chaos of human existence, while the light emerging from within symbolizes a generative will that ceaselessly surpasses itself. The Übermensch is not a completed being, but a processual entity that continuously dismantles and renews itself toward a new mode of existence.

Ultimately, my work is a record of the inner light generated as it passes through the abyss of human existence, within the process of matter and action, contingency and accumulation.`,
  },

  // 예술 철학과 기법
  philosophyTitle: { ko: '심연의 울림', en: 'Beyond the Surface' },
  philosophyIntro: {
    ko: '캔버스 위의 거친 마티에르는 삶의 투쟁이자 자기극복의 기록이다.\n나는 색과 질감을 통해 보이지 않는 영혼의 깊이를 탐구한다.',
    en: 'The rough matière on the canvas is a record of life’s struggle and self-overcoming.\nThrough color and texture, I explore the unseen depths of the soul.',
  },
  philosophy: [
    {
      head: { ko: '촉각의 마티에르 (Impasto)', en: 'Tactile Matière (Impasto)' },
      body: {
        ko: '겹겹이 쌓아 올린 물감의 층은 시간의 중첩을 의미합니다. 나이프와 혼합매체를 활용하여 입체적 생명력을 부여하며, 빛의 각도에 따라 변화하는 심도 있는 공간감을 창조합니다.',
        en: 'The layered accumulation of paint signifies the overlapping of time. Using knife and mixed media, I impart three-dimensional vitality, creating a profound sense of space that shifts with the angle of light.',
      },
    },
    {
      head: { ko: '토속적 색채와 근원', en: 'Indigenous Color and Origin' },
      body: {
        ko: '흙, 돌, 바람과 같은 자연의 근원적인 색채를 현대적 추상으로 재해석합니다. 무채색의 조화 속에 배치된 강렬한 원색은 생의 의지와 에너지를 상징합니다.',
        en: 'I reinterpret the primordial colors of nature—earth, stone, and wind—into contemporary abstraction. Intense primary colors placed within achromatic harmony symbolize the will and energy of life.',
      },
    },
  ],

  // 작가 약력
  bio: {
    education: {
      head: { ko: '학력', en: 'Education' },
      items: [
        { ko: '2025  홍익대학교 미술대학원 회화학과 석사 졸업', en: '2025  M.F.A. in Painting, Hongik University' },
        { ko: '2015  부산대학교 경영대학원 MBA 석사 졸업', en: '2015  MBA, Pusan National University' },
        { ko: '2011  경남대학교 경영학·사회복지학 학사 졸업', en: '2011  B.A. in Business & Social Welfare, Kyungnam University' },
      ],
    },
    exhibitions: {
      head: { ko: '주요 전시', en: 'Selected Exhibitions' },
      items: [
        { ko: '2026  제6회 개인전 〈위버멘쉬의 여정〉 인사아트센터 경남갤러리', en: '2026  6th Solo Exhibition, Insa Art Center Gyeongnam Gallery' },
        { ko: '2024  홍익대학교 서울 현대미술관 졸업 청구전', en: '2024  Graduation Exhibition, Hongik Univ. Museum' },
        { ko: '2023  제5회 개인전 — 용인특례시 문화예술원 대전시실', en: '2023  5th Solo Exhibition, Yongin Culture & Arts Center' },
        { ko: '2022  제1~4회 개인전 (충주·영동·구미·부산)', en: '2022  1st–4th Solo Exhibitions (Chungju, Yeongdong, Gumi, Busan)' },
        { ko: '단체전 40여 회 — 한중수교 30주년 미술교류전 외', en: '40+ group exhibitions including Korea-China Art Exchange' },
      ],
    },
    awards: {
      head: { ko: '주요 수상', en: 'Selected Awards' },
      items: [
        { ko: '2023  제42회 대한민국 미술대전 입선(비구상) · 우수상(구상)', en: '2023  42nd Grand Art Exhibition of Korea — Selected & Excellence Award' },
      ],
    },
  },

  artworks: [
    { id: 1, titleKo: '생의 심연에서 건져 올린 황금빛 열쇠', titleEn: 'The Golden Key Retrieved from the Abyss of Existence', size: '336.9×162.2cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/1.jpg', messageKo: '가장 깊은 어둠 속에서 비로소 찬란한 빛을 찾을 수 있다. 나의 심연은 끝이 아니라 또 다른 출발의 시작점이다.', messageEn: 'Only in the deepest darkness can one find radiant light. My abyss is not an end, but the beginning of another departure.' },
    { id: 2, titleKo: '고통과 환희', titleEn: 'Agony and Ecstasy', size: '387.8×130.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/2.jpg', messageKo: '고통은 환희를 잉태하는 점토가 되고, 환희는 고통을 위로하는 빛이 된다. 인간의 삶은 끊임없는 고통과 환희의 교차로이다.', messageEn: 'Agony becomes the clay that conceives ecstasy; ecstasy becomes the light that consoles agony. Human life is an endless crossroads of agony and ecstasy.' },
    { id: 3, titleKo: '심연의 고동', titleEn: 'Throbbing of the Abyss', size: '260.6×193.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/3.jpg', messageKo: '어두운 마티에르 속에 갇혀 있던 원초적인 힘이 깨어나는 순간을 상징한다.', messageEn: 'A symbol of the moment when the primordial force, confined within dark matière, awakens.' },
    { id: 4, titleKo: '심연의 서사 no.1', titleEn: 'Narrative of the Abyss no.1', size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/4.jpg' },
    { id: 5, titleKo: '심연의 서사 no.2', titleEn: 'Narrative of the Abyss no.2', size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/5.jpg' },
    { id: 6, titleKo: '심연 속에 스며든 온기', titleEn: 'Warmth Seeping into the Abyss', size: '162.2×130cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/6.jpg' },
    { id: 7, titleKo: '심연 속에 해안', titleEn: 'Shore within the Abyss', size: '162.2×130cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/7.jpg' },
    { id: 8, titleKo: '영원 회귀의 아침', titleEn: 'Morning of Eternal Recurrence', size: '162.2×112.1cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/8.jpg' },
    { id: 9, titleKo: '새벽의 약속', titleEn: 'Promise of Dawn', size: '53.0×45.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/9.jpg' },
    { id: 10, titleKo: '심연의 초상화', titleEn: 'Portrait of the Abyss', size: '45.0×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/10.jpg' },
    { id: 11, titleKo: '심연의 흐름', titleEn: 'Flow of the Abyss', size: '26.0×52.3cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/11.jpg' },
    { id: 12, titleKo: '심연의 침묵', titleEn: 'Silence of the Abyss', size: '45.0×53.0cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/12.jpg' },
    { id: 13, titleKo: '심연의 초상화 no.1', titleEn: 'Portrait of the Abyss no.1', size: '자동기술법 연작', material: 'Mixed media on canvas', year: '2026', image: 'artworks/13.jpg' },
    { id: 14, titleKo: '심연의 초상화 no.2', titleEn: 'Portrait of the Abyss no.2', size: '자동기술법 연작', material: 'Mixed media on canvas', year: '2026', image: 'artworks/14.jpg' },
    { id: 15, titleKo: '절벽 위에서 부르는 바람의 노래', titleEn: 'Song of the Wind on the Cliff', size: '90.9×72.7cm', material: 'Oil on canvas', year: '2024', image: 'artworks/15.jpg' },
    { id: 16, titleKo: '정신을 응시하다 (불굴의 자아)', titleEn: 'Gazing at the Spirit (The Indomitable Self)', size: '35×35cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/16.jpg', messageKo: '이성이 개입할 틈 없이 무의식의 심연에서 걸어 나온 강렬한 눈빛은, 어떤 기만과 시련 앞에서도 패배하지 않겠다는 의지이다.', messageEn: 'The intense gaze that walked out of the subconscious abyss is the will never to be defeated before any deception or ordeal.' },
    { id: 17, titleKo: '절벽 끝에서 피어난 선', titleEn: "A Line Blooming at the Cliff's Edge", size: '45.5×37.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/17.jpg' },
    { id: 18, titleKo: '명상 no.1', titleEn: 'Meditation no.1', size: '80.3×60.6cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/18.jpg' },
    { id: 19, titleKo: '명상 no.2', titleEn: 'Meditation no.2', size: '80.3×60.6cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/19.jpg' },
    { id: 20, titleKo: '명상 no.4', titleEn: 'Meditation no.4', size: '90.9×65.1cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/20.jpg' },
    { id: 21, titleKo: '디오니소스적 도취 no.1', titleEn: 'Dionysian Rapture no.1', size: '72.7×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/21.jpg' },
    { id: 22, titleKo: '디오니소스적 도취 no.2', titleEn: 'Dionysian Rapture no.2', size: '72.7×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/22.jpg' },
    { id: 23, titleKo: '빛의 정원 no.1', titleEn: 'Garden of Light no.1', size: '130×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/23.jpg' },
    { id: 24, titleKo: '빛의 정원 no.2', titleEn: 'Garden of Light no.2', size: '130×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/24.jpg' },
    { id: 25, titleKo: '심연 위의 밧줄', titleEn: 'The Rope over the Abyss', size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/25.jpg', messageKo: '사람은 짐승과 위버멘쉬를 잇는 밧줄이다.', messageEn: 'Man is a rope tied between beast and Übermensch.' },
    { id: 26, titleKo: '초월적 공존 no.4', titleEn: 'Transcendent Coexistence no.4', size: '116.8×91.0cm', material: 'Oil on canvas', year: '2023', image: 'artworks/26.jpg' },
    { id: 27, titleKo: '초월적 공존 no.3 — 갈등과 화해', titleEn: 'Transcendent Coexistence no.3 — Conflict and Reconciliation', size: '91.0×116.8cm', material: 'Oil on canvas', year: '2023', image: 'artworks/27.jpg' },
    { id: 28, titleKo: '영원회귀 (근원의 빛)', titleEn: 'Eternal Recurrence (The Primordial Light)', size: '72.7×116.8cm', material: 'Oil on canvas', year: '2023', image: 'artworks/28.jpg' },
    { id: 29, titleKo: '심연의 문', titleEn: 'The Gate of the Abyss', size: '162.2×130.3cm', material: 'Mixed media on canvas', year: '2023', image: 'artworks/29.jpg' },
    { id: 30, titleKo: '암벽을 뚫고 뻗은 고결한 선 ①', titleEn: 'Noble Lines Piercing the Rock ①', size: '25.8×17.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/30.jpg' },
    { id: 31, titleKo: '암벽을 뚫고 뻗은 고결한 선 ②', titleEn: 'Noble Lines Piercing the Rock ②', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/31.jpg' },
    { id: 32, titleKo: '암벽을 뚫고 뻗은 고결한 선 ③', titleEn: 'Noble Lines Piercing the Rock ③', size: '27.3×22.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/32.jpg' },
    { id: 33, titleKo: '암벽을 뚫고 뻗은 고결한 선 ④', titleEn: 'Noble Lines Piercing the Rock ④', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/33.jpg' },
    { id: 34, titleKo: '암벽을 뚫고 뻗은 고결한 선 ⑤', titleEn: 'Noble Lines Piercing the Rock ⑤', size: '40.9×31.8cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/34.jpg' },
    { id: 35, titleKo: '흩날리는 파편들 ①', titleEn: 'Scattering Fragments ①', size: '27.3×22.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/35.jpg' },
    { id: 36, titleKo: '흩날리는 파편들 ②', titleEn: 'Scattering Fragments ②', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/36.jpg' },
    { id: 37, titleKo: '흩날리는 파편들 ③', titleEn: 'Scattering Fragments ③', size: '45.5×37.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/37.jpg' },
  ] as Artwork[],
};
