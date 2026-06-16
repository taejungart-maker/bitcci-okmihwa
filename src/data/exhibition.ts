export type Lang = 'ko' | 'en' | 'fr';
export type LocalizedText = { ko: string; en: string; fr: string };

export interface Artwork {
  id: number;
  titleKo: string;
  titleEn: string;
  titleFr: string;
  material: string;
  size: string;
  year: string;
  image: string;
  /** 작품 메시지 (선택) */
  messageKo?: string;
  messageEn?: string;
  messageFr?: string;
}

export const exhibition = {
  artist: { ko: '옥미화', en: 'Ok Mihwa', fr: 'Ok Mihwa' },
  title: { ko: '위버멘쉬의 여정', en: 'The Journey of the Übermensch', fr: "Le Voyage de l'Übermensch" },
  edition: { ko: '제6회 옥미화 개인전', en: '6th Ok Mihwa Solo Exhibition', fr: "6ᵉ exposition personnelle d'Ok Mihwa" },
  venue: { ko: '인사아트센터 5F 경남갤러리', en: 'Insa Art Center 5F, Gyeongnam Gallery', fr: 'Insa Art Center 5F, Galerie Gyeongnam' },
  address: { ko: '서울특별시 종로구 인사동길 41-1', en: '41-1 Insadong-gil, Jongno-gu, Seoul', fr: '41-1 Insadong-gil, Jongno-gu, Séoul' },
  period: { ko: '2026. 05. 27 [수] — 06. 01 [월]', en: 'May 27 – Jun 1, 2026', fr: '27 mai – 1ᵉʳ juin 2026' },
  opening: { ko: '오프닝 2026. 05. 27 [수] 오후 3:30', en: 'Opening · May 27, 2026, 3:30 PM', fr: 'Vernissage · 27 mai 2026, 15h30' },
  keywords: { ko: '위버멘쉬 · 심연 · 마티에르 · 자아 초극', en: 'Übermensch · Abyss · Matière · Self-Transcendence', fr: 'Übermensch · Abîme · Matière · Dépassement de soi' },
  contact: '010-5087-7099',
  email: 'songwon21@naver.com',

  // 평론 (황의필 — 홍익대 미술평론가)
  critiqueTitle: {
    ko: '감각 여건에 기인한 심연으로서 위버멘쉬',
    en: 'Übermensch as an Abyss Originating from Sense-Data',
    fr: "L'Übermensch comme abîme issu des données sensorielles",
  },
  critiqueAuthor: {
    ko: '글 · 황의필 (홍익대학교, 미술평론가)',
    en: 'Written by Hwang Eui-pil (Hongik University, Art Critic)',
    fr: "Texte de Hwang Eui-pil (Université Hongik, critique d'art)",
  },
  critique: {
    ko: `인간의 삶이 지향하는 희구는 대체로 자아 상실마저 재창조하려는 의지를 담아낸다. 이에 따라 현대 사회에서 일어나는 자아 상실은 자신의 반성이나 조명으로 말미암아 오히려 변칙으로 재창조된다. 이로써 재창조는 인간 정신이 극복하지 못하는 한계를 이상화된 실현으로 다가선다.

오늘날 감정의 상흔에서 도피하려는 결의에는 스스로 자아낸 동정심이나 정사(情思)에 사로잡히지 않으려는데 따른다. 이처럼 인간이 느끼는 감정에는 역시 정신의 한계에 다다를 경우에 가능하다. 이러한 극복의 일환으로서 위버멘쉬(Übermensch)를 끌어들이기에 충분하다. 옥미화는 이 같은 정신이 낳은 극복의 문제를 창작으로 이해하려 든다.

무릇 인간 정신의 극복에는 감각 여건(status of sensa)의 위치를 적극 내세우기 마련이다. 곧 알프레드 노스 화이트헤드(Alfred North Whitehead, 1861~1947)의 『관념의 모험(Adventures of Ideas)』에서 언급하듯이 감각 여건의 원초 지위는 제한 조건으로 계승될 법하다. 즉 감각은 원초성의 근원을 제한함으로써 직접 조건화를 구축한다. 이를테면 감각 여건의 제한은 변환(transmutation)이 전제 조건이다. 여기에서 변환은 객체화된 지각(perception)을 맞이한다. 그런즉 지각은 파악의 주체 형식을 끊임없이 정감으로 규정짓기에 이른다.

이를 두고 옥미화는 심연의 울림으로 받아들인다. 이에 못지않게 표현 방식에서도 거친 마티에르(matière)로 인간 본연의 심상 작용을 대변한다. 그리고 강렬한 원색은 생명에 에너지를 펼치려는 심사이기도 하다. 더욱이 거친 마티에르의 도출에는 다소 심연이 개입되는데, 이는 이미 자신의 내면세계를 판단하거나 의식하는 탓이다.

이번 〈위버멘쉬의 여정〉은 인간 존재의 내면에 잠재한 불안감과 멍울을 초월하려는 욕망의 표방이다. 그가 구사하는 필획의 작동은 인간 원형의 심리를 적나라하게 펼치려는 시도이다. 곧 표면의 대변이라고 할 만큼 잠재의식에 근거한 인간 원형의 흔적을 여신하게 투영한다.

이로써 인간 내면의 불안과 긴장을 고스란히 담는 정황이 내비친다. 이는 생성과 소멸의 흐름을 무언의 환유로 암시하는 셈이다. 이러한 환유는 무의식 층위에서 발생하는 감각 여건과 원기(energy)의 흔적을 물질화한다. 그가 추구하는 원기 발생의 근저에는 감각 확장이 언제나 자리하고 있다. 더욱이 그 원천에서 무의식으로 파생되는 데에는 그의 과거 시간이 오롯이 점철된 탓이다. 으레 감각이 원기에 집중할 때는 그럴만한 사정이 반드시 자리하기 마련이다. 그런 만큼 이를 창작 수단으로써 보다 더 진중한 성격으로 접근하려고 한다.

더불어 중첩으로 긁히고 균열이 일어난 질료에서는 삶의 시간성과 심리 작용에 기인한 흔적을 함축한다. 따라서 그가 겪은 행로에 잠재된 본연의 시간 흐름을 또 다른 매체로 흔적화하기를 마다하지 않는다. 곧 흔적이 존재로 부활하는 정황에는 작가의 과거 지향의 심사(心思)가 깔리기 마련이다. 이유인즉 그 과거의 시간이 아직 미처 단절되지 않은 탓이다. 그래서 반복 행위와 우연성으로서 심연을 부단히 드러내려 한다.

그가 반복성에서 탐닉하려는 우연성은 신체 작동 행위로 드러난다. 이에 부응하여 반복이 우연성과 결부될 때는 반드시 그에 따른 사유가 내재한다. 말하자면 반복되는 데에는 우연일 수도 있겠지만 이미 반복될만한 잠재된 사정이 무의식의 감각으로 발출된 까닭이다. 이러한 감각 여건으로서 리듬 행위는 무계획으로서 반응하는 신체 작동과도 무관하지 않다.

결국 신체 작동에서 일어나는 교차성은 무의식 작용과 자연스럽게 융화로 생성된다. 이에 빛과 어둠의 대조 장면 역시 인간의 심연에 머무는 불안감이 혼돈 상태를 유발한 양상이다. 이로써 어둠이 지향되는 한에서는 생명의 존귀함을 얻으려는 작가의 관심이 담긴 셈이다.`,
    en: `The desire for return that human life aspires to generally embodies a will to recreate even loss of self. This loss of self is rather reconstructed in an irregular manner through self-reflection or illumination. Thus, it approaches an idealized realization that has not been overcome.

Today, the determination to escape from emotional vulnerability tends not to be swayed by self-induced sympathy or affection. In this way, the emotion human feels is also possible when it reaches the limits of the human mind. Introducing the Übermensch as a part of overcoming this is sufficient. Ok Mi-hwa understands this problem of overcoming, which is akin to the mind, through creation.

In overcoming the human mind, it is customary to firmly establish the position of "status of sensa" (sense-data). As Alfred North Whitehead (1861–1947) mentions in his book Adventures of Ideas, the primitive status of sense-data is inherited as a limiting condition. In other words, sensation constructs a direct conditioning by limiting the source of primitiveness. For instance, the limitation of sense-data is a prerequisite for transmutation. Here, transmutation refers to an objectified sensation. Therefore, the subjective form of prehension constantly meets perception with emotion.

Regarding this, Ok Mi-hwa accepts it as the resonance of the abyss. No less important than this, her expressive style also represents human nature through rough matière. And intense primary colors also signify a psychological operation overflowing with energy into life. Moreover, the emergence of rougher matière involves the abyss to some extent, which is due to already judging or cognizing one's own inner world.

This exhibition, The Journey of the Übermensch, is an expression of the desire to transcend the anxiety and melancholy latent within the depths of human existence. It is an attempt to realistically unfold the psychology of human archetypes through the brushwork she employs. In other words, it transparently projects the traces of the human archetype based on the subconscious, enough to be called the representation of the surface.

Through this, the context containing the anxiety and tension of the human interior is fully revealed. This implies the flow of creation and destruction through a silent return. This return objectifies the traces of sense-data and energy generated at the level of the subconscious. The expansion of sensation always resides at the root of the energy she pursues. Moreover, the reason why consciousness is derived from the subconscious at that source is because her past time is deeply imbued with it. When sensation focuses on energy, there is bound to be a reason for it to be revealed. Therefore, she attempts to approach it with a more genuine character as a creative means.

Furthermore, the materials where scraping and cracking occur in multiple layers imply traces originating from the temporality of life and psychological operations. Therefore, she does not hesitate to track the inherent flow of time latent in her behavior with another medium. In other words, in the situation where traces reappear as entities, the past direction of the artist is bound to be laid out. The reason is that the past time has not yet been completely severed. That is why she endlessly tries to reveal the abyss through repetitive actions and serendipity.

The serendipity she seeks to explore in repetition manifests as bodily action. In response to this, when repetition is combined with serendipity, there is a reason underlying it. In other words, while there may be serendipity in repetition, it has been refined through the sense of the subconscious, based on latent circumstances that are bound to be repeated. These actions of rhythm as sense-data are not unrelated to bodily actions that respond without planning.

Ultimately, the crossover that occurs in bodily action is generated by naturally harmonizing with subconscious operations. The scene contrasting light and darkness is also a manifestation that induces a state of chaos out of the anxiety residing in the abyss between humans. Through this, it means that she seeks to obtain the dignity of life within the limits where darkness is oriented.`,
    fr: `L'aspiration vers laquelle tend la vie humaine renferme généralement la volonté de recréer jusqu'à la perte même du soi. Ainsi, la perte de soi qui survient dans la société contemporaine se trouve plutôt reconstruite de manière anormale, par le biais de la réflexion ou de l'éclairage sur soi. La recréation s'approche dès lors d'une réalisation idéalisée de la limite que l'esprit humain ne parvient pas à surmonter.

Aujourd'hui, la résolution de fuir les blessures de l'émotion consiste à ne pas se laisser saisir par une compassion ou une affection que l'on a soi-même engendrées. De même, l'émotion que ressent l'être humain ne devient possible que lorsqu'elle atteint les limites de l'esprit. Pour rendre compte d'un tel dépassement, il est tout à fait justifié de convoquer l'Übermensch. Ok Mihwa cherche à comprendre par la création ce problème du dépassement né de l'esprit.

Or, le dépassement de l'esprit humain met toujours en avant la position des données sensorielles (status of sensa). Comme le mentionne Alfred North Whitehead (1861-1947) dans Aventures d'idées, le statut originaire des données sensorielles se transmet comme une condition limitante. Autrement dit, la sensation édifie un conditionnement direct en limitant la source de l'originarité. Ainsi, la limitation des données sensorielles a pour condition préalable la transmutation. Ici, la transmutation accueille une perception objectivée. La perception en vient dès lors à définir sans cesse la forme subjective de la préhension comme affect.

Ok Mihwa accueille cela comme la résonance de l'abîme. Tout aussi essentiellement, son mode d'expression représente l'activité intérieure propre à l'être humain par une matière rugueuse. Et les couleurs primaires intenses traduisent le désir de déployer l'énergie vers la vie. De plus, l'émergence de cette matière rugueuse fait intervenir une part d'abîme, parce qu'elle juge ou prend déjà conscience de son propre monde intérieur.

Cette exposition, « Le Voyage de l'Übermensch », est l'expression du désir de transcender l'inquiétude et les meurtrissures latentes au cœur de l'existence humaine. Le travail de ses traits cherche à déployer crûment la psychologie de l'archétype humain. Il projette ainsi, avec acuité, les traces de l'archétype humain fondées sur le subconscient, au point de pouvoir être appelé une représentation de la surface.

S'y révèle alors une situation qui recueille intégralement l'inquiétude et la tension intérieures de l'être humain. Cela suggère le flux de la genèse et de la disparition par une métonymie silencieuse. Cette métonymie matérialise les traces des données sensorielles et de l'énergie qui surgissent au niveau de l'inconscient. À la racine de la genèse d'énergie qu'elle poursuit se tient toujours l'expansion de la sensation. Et si, depuis cette source, quelque chose dérive vers l'inconscient, c'est parce que son temps passé y est pleinement inscrit. Lorsque la sensation se concentre sur l'énergie, il existe toujours une raison à cela. C'est pourquoi elle cherche à l'aborder comme moyen de création avec un caractère plus grave.

En outre, les matériaux griffés et fissurés en de multiples couches renferment des traces issues de la temporalité de la vie et de l'activité psychique. Aussi ne renonce-t-elle pas à inscrire, dans un autre médium, le cours du temps originel latent dans le chemin qu'elle a parcouru. Dans la situation où la trace ressuscite en tant qu'être se dépose la pensée tournée vers le passé de l'artiste. La raison en est que ce temps passé n'est pas encore tout à fait rompu. Elle cherche donc à révéler sans relâche l'abîme par la répétition et le hasard.

Le hasard qu'elle s'attache à explorer dans la répétition se manifeste par l'action du corps. Aussi, lorsque la répétition s'unit au hasard, une pensée lui est nécessairement immanente. Autrement dit, si la répétition peut relever du hasard, c'est qu'une circonstance latente, propre à se répéter, a déjà jailli comme sensation de l'inconscient. En tant que donnée sensorielle, ce geste rythmique n'est pas étranger à l'action corporelle qui répond sans plan préétabli.

Finalement, le croisement qui surgit dans l'action du corps se génère par une fusion naturelle avec l'activité de l'inconscient. Le contraste entre la lumière et l'obscurité est lui aussi une manière dont l'inquiétude tapie dans l'abîme humain provoque un état de chaos. Ainsi, tant que l'obscurité est visée, s'y dépose l'intérêt de l'artiste pour la conquête de la dignité de la vie.`,
  },

  // 축사 (도록 원문 그대로)
  foreword: [
    {
      title: '옥미화 작가 개인전을 축하하며',
      body: `본 고향인 거제(도)에서부터 지금 정착한 마산, 그리고 부산을 오가며 옥미화 작가는 참으로 바쁘고 치열한 삶의 여정을 보냈습니다. 세 곳 모두 넓은 바다가 보이고, 파란 하늘 아래 짙은 쪽빛 푸른 바탕 위로 고운 파도가 밀려오는 터입니다. 작가는 그 아름다운 자연 속에서 젊음을 보냈기에, 타인을 배려하는 바른 심성과 조화롭고 균형 잡힌 예술적 작화作畵적 토대를 다질 수 있었을 것입니다.

옥 작가는 세 곳의 화단에서 꾸준히 작품을 발표하며 역량을 인정받아 왔습니다. 수상작인 '설산(雪山)'(30F 유채, 2021)을 보면 마치 스위스의 빙산을 마주한 듯한 감동과 뛰어난 묘사력에 놀라게 됩니다. 깊고 푸른 하늘을 같은 톤으로 착색하여 눈 덮인 하얀 산영山影과 함께 설산 풍경을 돋보이게 한 표현, 그리고 '정물'(15F 유채, 2021)에서 보여준 색감 구성과 감각적 표현력은 그녀가 구상화 지향의 작가로서도 손색없는 탄탄한 기본기를 갖추었음을 증명합니다. 그랬던 옥 작가가 이번 인사아트센터 경남갤러리 개인전에서는 완전히 새로운 가령 '추상표현주의' 작품들을 선보인다고 하니, 작가의 폭넓은 작품세계에 깊은 경탄을 표하게 됩니다.

훨신 그 이전 첫 개인전인 충주 성마루미술관전, 3도의 경계선인 영동 황간역갤러리전, 또 구미 닥터지마고갤러리전 등 연 이은 전시를 통해 이미 많은 이들을 놀라게 한 바 있는 옥 작가는, 홍익대학교 미술대학원에서 얻은 예술적 영혼•영감을 바탕으로 이번 전시에서 한층 더 뜨겁고 열정적인 '용트림의 철학성'을 유감없이 선보입니다. 특히 이번 전시에 출품된 100호 이상의 대작들과 300호 대작 '생의 심연에서 건져 올린 빛'은 옥 작가가 지나온 삶의 과정과 절치탁마切磋琢磨의 시간이 마침내 완성된 예술로 피어난 결정체가 아닌가 생각합니다.

무의식의 흐름을 따르는 오토메틱이즘을 통해 생의 심연을 뚫고 나온 이 빛은, 어쩌면 인류의 앞날을 선보이는 동양 정신을 음미하듯 깊은 울림을 줍니다. 멀리 보이는 스펙터클한 절벽 풍정風情처럼 시선을 압도하는 대표작들은 가히 이번 전시의 백미라 할 수 있습니다.

일찍이 서예를 익히고 한국화韓國畵를 연마하며 다수의 전시회에서 수상한 바 있는 옥 작가는, 부산대에서 경영학 석사를 취득하고 사업가로서도 성공을 거둔 다능한 인재입니다. 그녀 특유의 순발력과 뛰어난 성취력이 어우러져, 기존의 '서연예술원'과 마산 바닷가 주도산 산기슭에 구상 중인 넓은 '옥화 수목정원'이 향후 아름다운 미술관과 인성 치유의 힐링 터로 현실화 되기를 진심으로 기원합니다.

남쪽 경상남도 창원 마산 화단의 빛나는 꽃별이 되시기를 바라며, 여러분과 함께 이번 개인전을 계기로 옥미화 작가님의 앞날을 축하 드립니다.`,
      date: '2026. 5.',
      author: '신범승',
      credential: '미술교육학 박사, 한국미술협회 상임고문, 한민족미술협회 회장',
    },
    {
      title: '축사',
      body: `모든 창작의 기본은 자기 자신의 이야기라고 생각합니다. 예술가가 미적 체험을 통해 예술 작품을 구상하고 생산하는 활동이기에 예술 제작이나 예술 창조와 같은 뜻입니다.

창작은 독창성과 개성을 중요시하므로 유사물품의 대량생산이나 그 제조 과정과는 구별되고, 또한 원작이 있는 모작(模作)이나 모사(模寫), 번안이나 개작 등과 대비되는 개념으로 미적 대상으로부터 상상력에 의해 창조된 내적 이미지를 객관적인 형식으로 정착시켜 하나의 예술 작품을 만들어내는 것이라 할 수 있습니다.

작가 옥미화는 사업을 하다가 뒤늦게 그림을 그리게 되었습니다. 그런 탓인지 일반적으로 공간 구성이라던가 색상 선택에 있어 누구보다도 자유롭고 정통적인 미학의 기준을 감히 파괴하면서 새로운 장르를 개척해 나아가는 특성이 가장 큰 장점이라 할 수 있겠고, 또한 사업과 같이 병행하면서 열심히 하는 모습이 주위의 주목을 받는 모습입니다.

아직은 미흡하지만 묵묵히 자신만의 작업 세계를 구축해온 열정에 깊은 박수를 보냅니다. 이번 전시가 많은 분들에게 사유의 시간이 되시기를 바라며, 앞날에 더욱 빛나는 예술의 결실이 있기를 믿어 의심치 않습니다.`,
      date: '2026년 5월',
      author: '임형준',
      credential: '한국미술협회 마산지부 회장 / 미술학 박사',
    },
  ],

  // 작가 노트
  noteEpigraph: {
    ko: '"심연을 들여다 보는 자가 아닌, 그 심연을 뚫고 빛을 건져 올리는 자의 초상을 그리다"',
    en: '"To paint the portrait of one who does not merely gaze into the abyss, but pierces through it to scoop up the light."',
    fr: "« Peindre le portrait de celui qui ne se contente pas de contempler l'abîme, mais le transperce pour en remonter la lumière. »",
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
    fr: `Mon travail prend sa source dans une exploration picturale de l'inquiétude, du manque et de la possibilité du dépassement de soi latents au cœur de l'existence humaine. La matière épaisse et les gestes automatistes accumulés sur la toile ne sont pas une expression visant la figuration ; ils sont le processus de matérialisation des traces de sensation et d'énergie qui surgissent au niveau de l'inconscient.

Apparaissant tantôt comme des falaises abruptes, tantôt comme la mer profonde et les montagnes, ces formes sont les temps de vie que j'ai traversés. La matière rugueuse de la toile est le poids du réel auquel j'ai fait face, et la lumière qui se brise au-dessus est la volonté humaine qui jamais ne se soumet. Sur la toile, cette vaste terre de liberté, je rêve du surhumain.

L'obscurité signifie l'abîme, l'inquiétude et le chaos de l'existence humaine, tandis que la lumière qui s'en élève symbolise une volonté de genèse qui sans cesse se dépasse. L'Übermensch n'est pas un être achevé, mais un être en devenir qui se défait et se renouvelle continuellement pour avancer vers un nouveau mode d'existence.

En définitive, mon travail est la consignation de la lumière intérieure qui naît en traversant l'abîme de l'existence humaine, au sein du processus de la matière et de l'action, du hasard et de l'accumulation.`,
  },

  // 예술 철학과 기법
  philosophyTitle: { ko: '심연의 울림', en: 'Beyond the Surface', fr: 'Au-delà de la surface' },
  philosophyIntro: {
    ko: '캔버스 위의 거친 마티에르는 삶의 투쟁이자 자기극복의 기록이다.\n나는 색과 질감을 통해 보이지 않는 영혼의 깊이를 탐구한다.',
    en: 'The rough matière on the canvas is a record of life’s struggle and self-overcoming.\nThrough color and texture, I explore the unseen depths of the soul.',
    fr: "La matière rugueuse sur la toile est le récit du combat de la vie et du dépassement de soi.\nPar la couleur et la texture, j'explore les profondeurs invisibles de l'âme.",
  },
  philosophy: [
    {
      head: { ko: '촉각의 마티에르 (Impasto)', en: 'Tactile Matière (Impasto)', fr: 'Matière tactile (Impasto)' },
      body: {
        ko: '겹겹이 쌓아 올린 물감의 층은 시간의 중첩을 의미합니다. 나이프와 혼합매체를 활용하여 입체적 생명력을 부여하며, 빛의 각도에 따라 변화하는 심도 있는 공간감을 창조합니다.',
        en: 'The layered accumulation of paint signifies the overlapping of time. Using knife and mixed media, I impart three-dimensional vitality, creating a profound sense of space that shifts with the angle of light.',
        fr: "L'accumulation en couches de la peinture signifie la superposition du temps. À l'aide du couteau et de techniques mixtes, je confère une vitalité en trois dimensions et crée une profondeur spatiale qui se transforme selon l'angle de la lumière.",
      },
    },
    {
      head: { ko: '토속적 색채와 근원', en: 'Indigenous Color and Origin', fr: 'Couleur autochtone et origine' },
      body: {
        ko: '흙, 돌, 바람과 같은 자연의 근원적인 색채를 현대적 추상으로 재해석합니다. 무채색의 조화 속에 배치된 강렬한 원색은 생의 의지와 에너지를 상징합니다.',
        en: 'I reinterpret the primordial colors of nature—earth, stone, and wind—into contemporary abstraction. Intense primary colors placed within achromatic harmony symbolize the will and energy of life.',
        fr: "Je réinterprète les couleurs primordiales de la nature — la terre, la pierre, le vent — en une abstraction contemporaine. Les couleurs primaires intenses, disposées dans une harmonie achromatique, symbolisent la volonté et l'énergie de la vie.",
      },
    },
  ],

  // 작가 약력 (도록 원문 그대로)
  bio: {
    education: {
      head: { ko: '학력', en: 'Education', fr: 'Formation' },
      items: [
        { ko: '2025  홍익대학교 미술대학원 회화학과 석사 졸업', en: '2025  M.F.A. in Painting, Hongik University Graduate School of Fine Arts', fr: '2025  Master (M.F.A.) en peinture, École supérieure des beaux-arts de l’Université Hongik' },
        { ko: '2015  부산대학교 경영대학원 MBA 석사 졸업', en: '2015  MBA, Pusan National University Graduate School of Business', fr: '2015  MBA, École supérieure de commerce de l’Université nationale de Pusan' },
        { ko: '2011  경남대학교 경영학, 사회복지학 학사 졸업', en: '2011  B.A. in Business Administration & Social Welfare, Kyungnam University', fr: '2011  Licence en gestion et en travail social, Université Kyungnam' },
      ],
    },
    exhibitions: {
      head: { ko: '주요 전시', en: 'Selected Exhibitions', fr: 'Expositions choisies' },
      items: [
        { ko: '2024. 4. 21 – 4. 25  홍익대학교 서울 현대미술관 졸업 청구전', en: '2024. 4. 21 – 4. 25  Graduation Exhibition, Hongik University Museum of Contemporary Art, Seoul', fr: '21–25 avr. 2024  Exposition de fin d’études, Musée d’art contemporain de l’Université Hongik, Séoul' },
        { ko: '2023. 9. 12 – 9. 17  (제5회) 용인특례시 문화예술원 대전시실 2층 초대부스 개인전', en: '2023. 9. 12 – 9. 17  5th Solo Exhibition (Invited Booth), Yongin Culture & Arts Center', fr: '12–17 sept. 2023  5ᵉ exposition personnelle (stand invité), Centre culturel et artistique de Yongin' },
        { ko: '2022. 10. 22 – 10. 31  (제4회) 경북 구미 닥터지바고갤러리 초대 개인전', en: '2022. 10. 22 – 10. 31  4th Solo Exhibition (Invited), Dr. Zhivago Gallery, Gumi', fr: '22–31 oct. 2022  4ᵉ exposition personnelle (sur invitation), Galerie Dr. Jivago, Gumi' },
        { ko: '2022. 10. 17 – 21  (제3회) 부산 국제종합예술진흥회 초대 개인전', en: '2022. 10. 17 – 21  3rd Solo Exhibition (Invited), Busan', fr: '17–21 oct. 2022  3ᵉ exposition personnelle (sur invitation), Busan' },
        { ko: '2022. 10. 3 – 13  (제2회) 영동 황간역 내 황간갤러리 초대 개인전', en: '2022. 10. 3 – 13  2nd Solo Exhibition (Invited), Hwanggan Gallery, Yeongdong', fr: '3–13 oct. 2022  2ᵉ exposition personnelle (sur invitation), Galerie Hwanggan, Yeongdong' },
        { ko: '2022. 9. 16 – 22  (제1회) 충북 충주시 성마루미술관 개인전', en: '2022. 9. 16 – 22  1st Solo Exhibition, Seongmaru Art Museum, Chungju', fr: '16–22 sept. 2022  1ʳᵉ exposition personnelle, Musée d’art Seongmaru, Chungju' },
        { ko: '2018 / 2026  한중수교 30주년 기념 미술교류전 (국회의원회관) 외 단체전 40여 회', en: '2018 / 2026  Korea-China Art Exchange (30th Anniversary) & 40+ group exhibitions', fr: '2018 / 2026  Échange artistique Corée-Chine (30ᵉ anniversaire) et plus de 40 expositions collectives' },
      ],
    },
    awards: {
      head: { ko: '수상', en: 'Awards', fr: 'Prix et distinctions' },
      items: [
        { ko: '2023  제42회 대한민국 미술대전 서양화 입선(비구상) 및 優秀賞(구상) 수상', en: '2023  42nd Grand Art Exhibition of Korea — Selected (Non-figurative) & Excellence Award (Figurative)', fr: '2023  42ᵉ Grand Salon d’art de Corée — Sélection (non figuratif) et Prix d’excellence (figuratif)' },
        { ko: '2023  제3회 중앙 회화대전 서양화 (입선 수상)', en: '2023  3rd Jungang Painting Exhibition, Western Painting (Selected)', fr: '2023  3ᵉ Salon de peinture Jungang, peinture occidentale (sélection)' },
        { ko: '2022  국제진흥원 한국문화예술단체 명인 명장 전 "동양화" (명인증서 수여)', en: '2022  Master Artisan Exhibition "Oriental Painting" — Master Certificate awarded', fr: '2022  Exposition des maîtres d’art « peinture orientale » — Certificat de maître décerné' },
        { ko: '2020–2022  대한민국전통 미술대전 동양화산수화 (입선 3회)', en: '2020–2022  Korea Traditional Art Exhibition, Oriental Landscape (Selected ×3)', fr: '2020–2022  Salon d’art traditionnel de Corée, paysage oriental (sélection ×3)' },
        { ko: '2022. 8. 15  광복절 특별기획전 공모전 우수작가상 수상', en: '2022. 8. 15  Liberation Day Special Exhibition — Excellent Artist Award', fr: '15 août 2022  Exposition spéciale de la Libération — Prix de l’artiste d’excellence' },
        { ko: '2021  평화예술대전 공모전 大賞 수상 "동양화 산수화" (서울시장상)', en: '2021  Peace Art Competition — Grand Prize "Oriental Landscape" (Seoul Mayor\'s Award)', fr: '2021  Concours d’art pour la paix — Grand Prix « paysage oriental » (Prix du maire de Séoul)' },
        { ko: '2019  국제종합예술대전 공모전 大賞 수상 "소나무분경" (부산시장상)', en: '2019  International Comprehensive Art Competition — Grand Prize "Pine Bonsai" (Busan Mayor\'s Award)', fr: '2019  Concours international d’art — Grand Prix « bonsaï de pin » (Prix du maire de Busan)' },
      ],
    },
    career: {
      head: { ko: '경력 · 현재 근무처', en: 'Career & Current Position', fr: 'Carrière et fonctions actuelles' },
      items: [
        { ko: '2019–2026  서연 예술원 원장 (창원시 마산 합포구 진북면 추곡1길 327)', en: '2019–2026  Director, Seoyeon Art Institute (Changwon)', fr: '2019–2026  Directrice, Institut d’art Seoyeon (Changwon)' },
        { ko: '2008–2026  옥화정원 수목원 (창원시 마산 합포구 진동면 요장리 107-1 외 9필지, 약 5,300평)', en: '2008–2026  Okhwa Garden Arboretum (Changwon, approx. 5,300 pyeong)', fr: '2008–2026  Arboretum Okhwa (Changwon, env. 17 500 m²)' },
        { ko: '2026 현재  국제종합예술대전 초대 작가 · 한민족 미술회원 정회원 · 국전작가협회 회원 · 한국미협 정회원 · 서울미협 회원 · 마산미협 정회원', en: '2026 Present  Invited Artist, International Comprehensive Art Exhibition; Full member of multiple Korean art associations', fr: '2026 à ce jour  Artiste invitée du Salon international d’art ; membre titulaire de plusieurs associations artistiques coréennes' },
        { ko: '2005–2015  ㈜마고 벤처기업 대표이사 · 송원식품 대표 (건강음료: 석류·오미자·감식초) — 발명특허(제18331310호) 획득, 제조·판매유통업', en: '2005–2015  CEO, MAGO Venture Inc. & Songwon Food — health beverages; patent No. 18331310, manufacturing & distribution', fr: '2005–2015  PDG de MAGO Venture Inc. et de Songwon Food — boissons santé ; brevet nº 18331310, fabrication et distribution' },
        { ko: '2001–2006  ㈜마고 벤처기업 대표이사 — 전자파차단기 개발·제조 및 국내외 수출 판매', en: '2001–2006  CEO, MAGO Venture Inc. — EMF-blocker development, manufacturing & global export', fr: '2001–2006  PDG de MAGO Venture Inc. — conception et fabrication de dispositifs anti-ondes, exportation mondiale' },
      ],
    },
  },

  artworks: [
    { id: 1, titleKo: '생의 심연에서 건져 올린 황금빛 열쇠', titleEn: 'The Golden Key Retrieved from the Abyss of Existence', titleFr: "La Clé dorée remontée de l'abîme de l'existence", size: '336.9×162.2cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/1.jpg', messageKo: '가장 깊은 어둠 속에서 비로소 찬란한 빛을 찾을 수 있다. 나의 심연은 끝이 아니라 또 다른 출발의 시작점이다.', messageEn: 'Only in the deepest darkness can one find radiant light. My abyss is not an end, but the beginning of another departure.', messageFr: "Ce n'est que dans l'obscurité la plus profonde que l'on peut trouver une lumière éclatante. Mon abîme n'est pas une fin, mais le commencement d'un nouveau départ." },
    { id: 2, titleKo: '고통과 환희', titleEn: 'Agony and Ecstasy', titleFr: 'Tourment et Extase', size: '387.8×130.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/2.jpg', messageKo: '고통은 환희를 잉태하는 점토가 되고, 환희는 고통을 위로하는 빛이 된다. 인간의 삶은 끊임없는 고통과 환희의 교차로이다.', messageEn: 'Agony becomes the clay that conceives ecstasy; ecstasy becomes the light that consoles agony. Human life is an endless crossroads of agony and ecstasy.', messageFr: "Le tourment devient l'argile qui enfante l'extase ; l'extase devient la lumière qui console le tourment. La vie humaine est un carrefour incessant de tourment et d'extase." },
    { id: 3, titleKo: '심연의 고동', titleEn: 'Throbbing of the Abyss', titleFr: "La Pulsation de l'abîme", size: '260.6×193.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/3.jpg', messageKo: '어두운 마티에르 속에 갇혀 있던 원초적인 힘이 깨어나는 순간을 상징한다.', messageEn: 'A symbol of the moment when the primordial force, confined within dark matière, awakens.', messageFr: "Le symbole de l'instant où la force primordiale, enfermée dans la matière sombre, s'éveille." },
    { id: 4, titleKo: '심연의 서사 no.1', titleEn: 'Narrative of the Abyss no.1', titleFr: "Récit de l'abîme nº 1", size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/4.jpg' },
    { id: 5, titleKo: '심연의 서사 no.2', titleEn: 'Narrative of the Abyss no.2', titleFr: "Récit de l'abîme nº 2", size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/5.jpg' },
    { id: 6, titleKo: '심연 속에 스며든 온기', titleEn: 'Warmth Seeping into the Abyss', titleFr: "La Chaleur infusée dans l'abîme", size: '162.2×130cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/6.jpg' },
    { id: 7, titleKo: '심연 속에 해안', titleEn: 'Shore within the Abyss', titleFr: "Le Rivage au sein de l'abîme", size: '162.2×130cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/7.jpg' },
    { id: 8, titleKo: '영원 회귀의 아침', titleEn: 'Morning of Eternal Recurrence', titleFr: "Le Matin de l'éternel retour", size: '162.2×112.1cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/8.jpg' },
    { id: 9, titleKo: '새벽의 약속', titleEn: 'Promise of Dawn', titleFr: "La Promesse de l'aube", size: '53.0×45.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/9.jpg' },
    { id: 10, titleKo: '심연의 초상화', titleEn: 'Portrait of the Abyss', titleFr: "Portrait de l'abîme", size: '45.0×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/10.jpg' },
    { id: 11, titleKo: '심연의 흐름', titleEn: 'Flow of the Abyss', titleFr: "Le Flux de l'abîme", size: '26.0×52.3cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/11.jpg' },
    { id: 12, titleKo: '심연의 침묵', titleEn: 'Silence of the Abyss', titleFr: "Le Silence de l'abîme", size: '45.0×53.0cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/12.jpg' },
    { id: 13, titleKo: '심연의 초상화 no.1', titleEn: 'Portrait of the Abyss no.1', titleFr: "Portrait de l'abîme nº 1", size: '자동기술법 연작', material: 'Mixed media on canvas', year: '2026', image: 'artworks/13.jpg' },
    { id: 14, titleKo: '심연의 초상화 no.2', titleEn: 'Portrait of the Abyss no.2', titleFr: "Portrait de l'abîme nº 2", size: '자동기술법 연작', material: 'Mixed media on canvas', year: '2026', image: 'artworks/14.jpg' },
    { id: 15, titleKo: '절벽 위에서 부르는 바람의 노래', titleEn: 'Song of the Wind on the Cliff', titleFr: 'Le Chant du vent sur la falaise', size: '90.9×72.7cm', material: 'Oil on canvas', year: '2024', image: 'artworks/15.jpg' },
    { id: 16, titleKo: '정신을 응시하다 (불굴의 자아)', titleEn: 'Gazing at the Spirit (The Indomitable Self)', titleFr: "Contempler l'esprit (le moi indomptable)", size: '35×35cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/16.jpg', messageKo: '이성이 개입할 틈 없이 무의식의 심연에서 걸어 나온 강렬한 눈빛은, 어떤 기만과 시련 앞에서도 패배하지 않겠다는 의지이다.', messageEn: 'The intense gaze that walked out of the subconscious abyss is the will never to be defeated before any deception or ordeal.', messageFr: "Le regard intense surgi de l'abîme de l'inconscient, sans que la raison ait pu s'interposer, est la volonté de ne jamais céder devant la tromperie ni l'épreuve." },
    { id: 17, titleKo: '절벽 끝에서 피어난 선', titleEn: "A Line Blooming at the Cliff's Edge", titleFr: 'La Ligne éclose au bord de la falaise', size: '45.5×37.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/17.jpg' },
    { id: 18, titleKo: '명상 no.1', titleEn: 'Meditation no.1', titleFr: 'Méditation nº 1', size: '80.3×60.6cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/18.jpg' },
    { id: 19, titleKo: '명상 no.2', titleEn: 'Meditation no.2', titleFr: 'Méditation nº 2', size: '80.3×60.6cm', material: 'Mixed media on canvas', year: '2024', image: 'artworks/19.jpg' },
    { id: 20, titleKo: '명상 no.4', titleEn: 'Meditation no.4', titleFr: 'Méditation nº 4', size: '90.9×65.1cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/20.jpg' },
    { id: 21, titleKo: '디오니소스적 도취 no.1', titleEn: 'Dionysian Rapture no.1', titleFr: 'Ivresse dionysiaque nº 1', size: '72.7×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/21.jpg' },
    { id: 22, titleKo: '디오니소스적 도취 no.2', titleEn: 'Dionysian Rapture no.2', titleFr: 'Ivresse dionysiaque nº 2', size: '72.7×53.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/22.jpg' },
    { id: 23, titleKo: '빛의 정원 no.1', titleEn: 'Garden of Light no.1', titleFr: 'Le Jardin de lumière nº 1', size: '130×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/23.jpg' },
    { id: 24, titleKo: '빛의 정원 no.2', titleEn: 'Garden of Light no.2', titleFr: 'Le Jardin de lumière nº 2', size: '130×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/24.jpg' },
    { id: 25, titleKo: '심연 위의 밧줄', titleEn: 'The Rope over the Abyss', titleFr: "La Corde au-dessus de l'abîme", size: '130.3×162.2cm', material: 'Mixed media on canvas', year: '2025', image: 'artworks/25.jpg', messageKo: '사람은 짐승과 위버멘쉬를 잇는 밧줄이다.', messageEn: 'Man is a rope tied between beast and Übermensch.', messageFr: "L'homme est une corde tendue entre la bête et l'Übermensch." },
    { id: 26, titleKo: '초월적 공존 no.4', titleEn: 'Transcendent Coexistence no.4', titleFr: 'Coexistence transcendante nº 4', size: '116.8×91.0cm', material: 'Oil on canvas', year: '2023', image: 'artworks/26.jpg' },
    { id: 27, titleKo: '초월적 공존 no.3 — 갈등과 화해', titleEn: 'Transcendent Coexistence no.3 — Conflict and Reconciliation', titleFr: 'Coexistence transcendante nº 3 — Conflit et réconciliation', size: '91.0×116.8cm', material: 'Oil on canvas', year: '2023', image: 'artworks/27.jpg' },
    { id: 28, titleKo: '영원회귀 (근원의 빛)', titleEn: 'Eternal Recurrence (The Primordial Light)', titleFr: 'Éternel retour (la lumière primordiale)', size: '72.7×116.8cm', material: 'Oil on canvas', year: '2023', image: 'artworks/28.jpg' },
    { id: 29, titleKo: '심연의 문', titleEn: 'The Gate of the Abyss', titleFr: "La Porte de l'abîme", size: '162.2×130.3cm', material: 'Mixed media on canvas', year: '2023', image: 'artworks/29.jpg' },
    { id: 30, titleKo: '암벽을 뚫고 뻗은 고결한 선 ①', titleEn: 'Noble Lines Piercing the Rock ①', titleFr: 'Lignes nobles perçant le roc ①', size: '25.8×17.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/30.jpg' },
    { id: 31, titleKo: '암벽을 뚫고 뻗은 고결한 선 ②', titleEn: 'Noble Lines Piercing the Rock ②', titleFr: 'Lignes nobles perçant le roc ②', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/31.jpg' },
    { id: 32, titleKo: '암벽을 뚫고 뻗은 고결한 선 ③', titleEn: 'Noble Lines Piercing the Rock ③', titleFr: 'Lignes nobles perçant le roc ③', size: '27.3×22.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/32.jpg' },
    { id: 33, titleKo: '암벽을 뚫고 뻗은 고결한 선 ④', titleEn: 'Noble Lines Piercing the Rock ④', titleFr: 'Lignes nobles perçant le roc ④', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/33.jpg' },
    { id: 34, titleKo: '암벽을 뚫고 뻗은 고결한 선 ⑤', titleEn: 'Noble Lines Piercing the Rock ⑤', titleFr: 'Lignes nobles perçant le roc ⑤', size: '40.9×31.8cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/34.jpg' },
    { id: 35, titleKo: '흩날리는 파편들 ①', titleEn: 'Scattering Fragments ①', titleFr: 'Fragments épars ①', size: '27.3×22.0cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/35.jpg' },
    { id: 36, titleKo: '흩날리는 파편들 ②', titleEn: 'Scattering Fragments ②', titleFr: 'Fragments épars ②', size: '34.8×27.3cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/36.jpg' },
    { id: 37, titleKo: '흩날리는 파편들 ③', titleEn: 'Scattering Fragments ③', titleFr: 'Fragments épars ③', size: '45.5×37.9cm', material: 'Mixed media on canvas', year: '2026', image: 'artworks/37.jpg' },
  ] as Artwork[],
};
