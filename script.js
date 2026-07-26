/* =====================================================
   コンテンツデータ
   ここを書き換えるだけで表示内容を更新できます。

   ポイント:
   ・date は "YYYY-MM-DD" 形式で入力してください（新しい順に自動で並び替わります）
   ・新しい作品を配列に追加するだけで、一覧に自動で反映されます
     （新しい方が自動で先頭に来ます）
   ・category は左メニューのカテゴリ絞り込みに使われます。
     ORIGINAL: "mv" / "releases" / "design" / "others" のいずれか
     WORKS   : "video" / "music" / "design" / "others" のいずれか
     複数のカテゴリに出したい場合は category: ["video", "music"] のように配列でもOKです
   ===================================================== */

// ORIGINAL（オリジナル楽曲のMV）
// id: 一意のID（英数字。詳細ビューの表示に使うので他と被らないようにしてください）
// youtubeId: 動画URLの v= のあとの11文字
// thumbnail: サムネイル画像を自分で指定したい場合はこちらに画像のパスを書いてください（省略可）
//            指定した場合はそちらが優先され、省略した場合はYouTubeのサムネイルが自動で使われます
//            画像は assets/original/ フォルダに置くのがおすすめです（WORKSのassets/works/と同じ考え方です）
// link: 指定すると、サムネイルをクリックしたときに詳細ビューを開く代わりに、このURLへ直接移動します（省略可・新しいタブで開きます）



const mv = [
  { id: "mv-01", 
   title: "ブラックボックス！", 
   artist: "重音テト、ナースロボ＿タイプＴ", 
   youtubeId: "UFaKNqnwgHg", 
   category: "mv",       
   date: "2024-03-22" 
  },
  { id: "mv-02", 
   title: "ロスト・デリュージョン - 椎野乃々Remix", 
   artist: "原曲：Frog96",       
   youtubeId: "3AKOwXCqfYw", 
   category: "mv", 
   date: "2024-08-10" }, 
  { id: "mv-03", 
   title: "9月10日", 
   artist: "カゼヒキ、ナースロボ＿タイプT",          
   youtubeId: "Dx4NTEzPDbg", 
   category: "mv", 
   date: "2024-09-10" 
  },
  { id: "mv-04", 
   title: "まねた命ね",  artist: "裏命",          
   youtubeId: "C8aVSv_FZGk", 
   category: "mv",   
   date: "2024-12-30" 
  },
  { id: "mv-05", 
   title: "転がるくせ", 
   artist: "ナースロボ＿タイプT、転音セラ",       
   youtubeId: "p0gfjEGm-Bc", 
   category: "mv",   
   date: "2025-01-24" },
  { id: "mv-06", 
   title: "rkgk", 
   artist: "重音テト",       
   youtubeId: "qsY1Y1h1Z2o", 
   category: "mv",  
   date: "2025-02-25" },
  { id: "mv-07", 
   title: "生産者ら", 
   artist: "ナースロボ＿タイプT、花隈千冬",     
   youtubeId: "2RS8SWt7ZDo", category: "mv",     
   date: "2025-06-07" },
  { id: "mv-08", 
   title: "不こうにしちゃう", 
   artist: "donor.", 
   youtubeId: "r-34NclcrAI",
   category: "mv",      
   date: "2025-07-02" },
  { id: "mv-09", 
   title: "ヘヴンね", 
   artist: "ネヂェム、ナースロボ＿タイプT",      
   youtubeId: "WfSoWz0xs-s",
   category: "mv",
   date: "2025-07-26" },
  { id: "mv-10", 
   title: "にゃ",
   artist: "重音テト、ナースロボ＿タイプT",        
   youtubeId: "Kf9osaPyMmA", 
   category: "mv", 
   date: "2025-09-06" },
  { id: "mv-11",
   title: "mosaique",
   artist: "カゼヒキ、ナースロボ＿タイプT",       
   youtubeId: "ioAZ-Yce-Ic",
   category: "mv",  
   date: "2025-11-01" },
  { id: "mv-12",
   title: "ホワイトスペースにおいで", 
   artist: "ナースロボ_タイプT、重音テト",    
   youtubeId: "t05zomb6MEY", 
   category: "mv",   
   date: "2025-12-26" },
  { id: "mv-13", 
   title: "なりますように！",
   artist: "70D",     
   youtubeId: "3T6iq0DYREM", 
   category: "mv",  
   date: "2026-01-31" },
  { id: "mv-14", 
   title: "放送委員", 
   artist: "ナースロボ_タイプT",       
   youtubeId: "38j_-GrNPoU", 
   category: "mv",  
   date: "2026-05-03" },
  { id: "mv-15", 
   title: "やみまじょがふってきた",
   artist: "donor.",   
   youtubeId: "-65alg-fWtY", 
   category: "mv",    
   date: "2026-06-20" },
  {  
  id: "mv-16", 
  title: "イガクが→フィギュアになっちゃうヨ Remix♭",
  artist: "原曲：原口沙輔",     
  youtubeId: "iil1RAI1XlI", 
  category: "mv",      
  date: "2025-08-26" 
  },
];

const releases = [

  {
  id: "releases-01",
  title: "転がるくせ",
  artist: "ナースロボ＿タイプT、転音セラ",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/転がるくせジャケット.png",
  link: "https://big-up.style/Foe6wALhZS",
  category: "releases",
  date: "2025-10-10" 
  },
  {
  id: "releases-02",
  title: "ブラックボックス！",
  artist: "重音テト、ナースロボ＿タイプT",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/ブラックボックス！ジャケット.png",
  link: "https://big-up.style/oABzXyO9Ji",
  category: "releases",
  date: "2025-11-11" 
  },
  {
  id: "releases-03",
  title: "ホワイトスペースにおいで",
  artist: "ナースロボ＿タイプT、重音テト",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/ホワイトスペースにおいでジャケット.png",
  link: "https://big-up.style/1XjSLEWe87",
  category: "releases",
  date: "2025-12-13" 
  },
  {
  id: "releases-04",
  title: "なりますように！",
  artist: "70D",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/なりますように！ジャケット.png",
  link: "https://big-up.style/zBjMrYcRIk",
  category: "releases",
  date: "2026-02-26" 
  },
  {
  id: "releases-05",
  title: "不こうにしちゃう",
  artist: "donor.",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/不こうにしちゃうジャケット.jpeg",
  link: "https://big-up.style/osqhAuFWOH",
  category: "releases",
  date: "2026-03-22" 
  },
  {
  id: "releases-06",
  title: "mosaique",
  artist: "カゼヒキ、ナースロボ＿タイプT",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/mosaiqueジャケット.png",
  link: "https://big-up.style/MR0xenrYVt",
  category: "releases",
  date: "2026-06-24" 
  },
  {
  id: "releases-07",
  title: "むすんで、ひらいて",
  artist: "ボカロPx歌い手7組によるコンピレーションアルバム",
  youtubeId: "動画ID",
  thumbnail: "assets/original/jacket/むすんで、ひらいてジャケット.jpg",
  link: "https://euhi2525.booth.pm/items/8273782",
  category: "releases",
  date: "2026-04-26" 
  },
];

const originalDesign = [

  {
  id: "design-01",
  title: "日常系",
  artist: "「がっこうぐらし！」第一話より",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/日常系.png",
  category: "design",
  date: "2025-1-31" 
  },
  {
  id: "design-02",
  title: "青",
  artist: "初音ミク",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/初音ミク青2.png",
  category: "design",
  date: "2024-08-20" 
  },
  {
  id: "design-03",
  title: "バレてたらどうしよう",
  artist: "Auauo「バレてたらどうしよう」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/バレてたらどうしよう.png",
  category: "design",
  date: "2025-02-15" 
  },
  {
  id: "design-04",
  title: "不良品回収",
  artist: "オリジナル",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/ごめんなさい.png",
  category: "design",
  date: "2024-08-18" 
  },
  {
  id: "design-05",
  title: "塩水",
  artist: "感情線「コトノネ」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/塩水.png",
  category: "design",
  date: "2025-10-10" 
  },
  {
  id: "design-06",
  title: "電線",
  artist: "オリジナル",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/電線.jpg",
  category: "design",
  date: "2025-10-29" 
  },
  {
  id: "design-07",
  title: "黄金数",
  artist: "いよわ「黄金数」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/黄金数1.jpg",
  category: "design",
  date: "2025-11-18" 
  },
  {
  id: "design-08",
  title: "生活は簡単じゃないね",
  artist: "式浦躁吾「生活は簡単じゃないね」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/生活は簡単じゃないね.jpg",
  category: "design",
  date: "2025-11-22" 
  },
  {
  id: "design-09",
  title: "珊瑚",
  artist: "ピンク髪のアニメキャラたち",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/珊瑚.png",
  category: "design",
  date: "2026-05-05" 
  },
  {
  id: "design-10",
  title: "過ぎていく",
  artist: "初音ミク",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/過ぎていく.gif",
  category: "design",
  date: "2025-05-18" 
  },
  {
  id: "design-11",
  title: "通学路",
  artist: "donor.チームカード",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/donor.チームカード.png",
  category: "design",
  date: "2026-06-25" 
  },
  {
  id: "design-12",
  title: "謝ってますじゃんね",
  artist: "椎野乃々「私の生活感」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/私の生活感jyake１.png",
  category: "design",
  date: "2026-01-09" 
  },
  {
  id: "design-13",
  title: "男児創造",
  artist: "Ç¢Çª「makeaboy」",
  youtubeId: "動画ID",
  thumbnail: "assets/original/design/makeaboygif.gif",
  category: "design",
  date: "2026-04-11" 
  },
];
// ORIGINALの「others」カテゴリの作品はまだ無いので、空の配列にしています
// （中身を追加すれば「others」カテゴリに表示されます。書き方はmv・releases・originalDesignと同じです）
const originalOthers = [
  {  
  id: "others-01", 
  title: "ヒロイン",
  artist: "重音テト",     
  youtubeId: "1wCb_dUL8QE", 
  category: "others",      
  date: "2024-08-04" 
  },
  {  
  id: "others-02", 
  title: "会話記録",
  artist: "ナースロボ＿タイプT",     
  youtubeId: "jOgPZFkrJdA", 
  category: "others",      
  date: "2024-09-03" 
  },
  {  
  id: "others-03", 
  title: "アレシボメッセージなう",
  artist: "ナースロボ＿タイプT",     
  youtubeId: "j6ZyrQuX1es", 
  category: "others",      
  date: "2024-11-03" 
  },
  {  
  id: "others-04", 
  title: "大雨症候群(remake)",
  artist: "デフォ子",     
  youtubeId: "iput0DL6kpQ", 
  category: "others",      
  date: "2025-01-04" 
  },
  {  
  id: "others-05", 
  title: "特定班(remake)",
  artist: "ナースロボ＿タイプT",     
  youtubeId: "mkTXIsoXGaE", 
  category: "others",      
  date: "2025-04-04" 
  },
  {  
  id: "others-06", 
  title: "文字、ノート上の",
  artist: "ナースロボ＿タイプT",     
  youtubeId: "GponJnt0eOI", 
  category: "others",      
  date: "2025-05-24" 
  },
  {  
  id: "others-07", 
  title: "「なりますように！」メイキング動画",
  artist: "作曲から映像制作までのメイキング",     
  youtubeId: "8y5xmxVM5zQ", 
  category: "others",      
  date: "2026-02-14" 
  },
  {  
  id: "others-08", 
  title: "REEL 2025",
  artist: "2025年に作った制作物まとめ",     
  youtubeId: "zVnUdcKjlCo", 
  category: "others",      
  date: "2026-05-11" 
  },
  {  
  id: "others-09", 
  title: "雨のなか　歩いてみた",
  artist: "はじめてのVlog風動画",     
  youtubeId: "cV9jKpZZrw0", 
  category: "others",      
  date: "2026-06-12" 
  },

];

const mvWorks = [...mv, ...releases, ...originalDesign, ...originalOthers];

// MV以外の制作物
// id: 一意のID(英数字。詳細ビューの表示に使うので他と被らないようにしてください)
// thumbnail: サムネイル画像のパス（assets/works/ フォルダに画像を置いて指定してください）
// youtubeId: 動画がある作品の場合のみ指定してください（省略可）。指定すると詳細ビューでその場で動画が再生できます
// desc: 一覧に出す短い説明（ひとこと）
// detail: 詳細ビューに出す長めの説明（省略した場合は desc がそのまま使われます）
// link: 指定すると、サムネイルをクリックしたときに詳細ビューを開く代わりに、このURLへ直接移動します（省略可・新しいタブで開きます）
const works_video = [
{
    id: "video01",
    title: "新兎わい様 配信OP「カオス☆ニート」",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "rqqlpDPVNk4",
    desc: "配信用OPアニメーションを制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2024-02-11"
  },
{
    id: "video02",
    title: "ミギハヤミ・コハク様 配信OP「放浪者を強くしてあげよう」",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "eXzCiyMD5AU",
    desc: "配信用OPアニメーションを制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2024-08-05"
  },
{
    id: "video03",
    title: "コトノネ - 感情線",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "kN6jMmZXN94",
    desc: "映像と絵を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2025-06-27"
  },
{
    id: "video04",
    title: "さよならエリクサー - 感情市街記録",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "uP-AofENa_k",
    desc: "映像を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2025-10-15"
  },
{
    id: "video05",
    title: "熱異常 - 百軒カナリcover",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "z2YZLFyP2NM",
    desc: "映像と絵を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2025-11-20"
  },
{
    id: "video06",
    title: "メルカリで愛が買える時代になったら - はしメロ",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "KT603xYXNIA",
    desc: "映像を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2025-10-15"
  },
{
    id: "video07",
    title: "NEO愛桜宣言 - 櫻坂46 佐藤愛桜",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "c1_-qKAA6I4",
    desc: "MVのモーションデザインを制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2026-02-26"
  },
{
    id: "video08",
    title: "あした地球がこなごなになっても - kaza×日あさ寝×桃寝ちのい×N×恋白るな×エリモ・クドリャフカcover",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "k1qvo9tH1QQ",
    desc: "映像を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2026-03-11"
  },
{
    id: "video09",
    title: "キルミーダーリン - 灰色ねむり×null",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "06K_77uaUNk",
    desc: "映像を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: "video",
    date: "2026-03-28"
  }
];

const works_music = [
{
    id: "w_music01",
    title: "VOID - ﾀﾄ",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "LqAWnhfqJCw",
    desc: "曲と映像を制作しました。",
    detail: "チャンネル用のオープニングロゴモーションです。短い尺の中でブランドの世界観を伝えられるよう、動きとタイミングを調整しました。",
    category: ["video", "music"],
    date: "2026-3-14"
  },

];

const works_design = [
{
    id: "w-design-01",
    title: "トキワの森「あんしん」Tシャツデザイン(背面)",
    thumbnail: "assets/works/w-design/あんしんジャケット.png",
    desc: "ロックバンド「トキワの森」様のTシャツデザイン(背面)を制作しました。",
    detail: "MVのサムネイルやSNS用ビジュアルを制作しました。キャラクターの表情や色使いにこだわり、楽曲の雰囲気が一目で伝わるようなビジュアルを目指しました。",
    category: "design",
    date: "2025-08-14"
  },
{
    id: "w-design-02",
    title: "ﾀﾄ「VOID」ジャケットデザイン",
    thumbnail: "assets/works/w-design/VOIDジャケット.png",
    desc: "ﾀﾄ様のオリジナル楽曲「VOID」及びそのジャケットデザインを制作しました。",
    detail: "MVのサムネイルやSNS用ビジュアルを制作しました。キャラクターの表情や色使いにこだわり、楽曲の雰囲気が一目で伝わるようなビジュアルを目指しました。",
    category: "design",
    date: "2026-03-16"
  },
{
    id: "w-design-03",
    title: "「Who’s the Witch」ジャケットデザイン",
    thumbnail: "assets/works/w-design/桜羽エマジャケット1.png",
    desc: "`bootleg‘まのさばコンピ「Who’s the Witch」のジャケットデザインを制作しました。",
    detail: "MVのサムネイルやSNS用ビジュアルを制作しました。キャラクターの表情や色使いにこだわり、楽曲の雰囲気が一目で伝わるようなビジュアルを目指しました。",
    category: "design",
    date: "2026-06-27"
  },

];

const works_others = [
{
    id: "w-others-01",
    title: "ラメリィ「メズマライザー」Cover動画サムネイル",
    thumbnail: "assets/works/motion-01.jpg",
    youtubeId: "vltGaTpJiC4",
    desc: "ラメリィ様の「メズマライザー」cover動画のサムネイルを制作しました。",
    detail: "MVのサムネイルやSNS用ビジュアルを制作しました。キャラクターの表情や色使いにこだわり、楽曲の雰囲気が一目で伝わるようなビジュアルを目指しました。",
    category: "others",
    date: "2024-07-06"
  },
];

const otherWorks = [...works_video, ...works_music, ...works_design, ...works_others];


// ブログ記事
// excerpt: 一覧に出す短い説明（ひとこと）
// body: 詳細ページに出す本文（省略した場合はexcerptがそのまま使われます）
const blogPosts = [
  { date: "2026-06-20", title: "新曲MVの制作について", excerpt: "今回の制作で工夫したポイントをまとめました。", body: "今回の制作で工夫したポイントをまとめました。" },
  { date: "2026-05-02", title: "使用しているソフトと機材", excerpt: "普段の制作環境を紹介します。", body: "普段の制作環境を紹介します。" },
  { date: "2026-03-15", title: "自己紹介", excerpt: "はじめまして、制作を始めたきっかけについて。", body: "はじめまして、制作を始めたきっかけについて。" },
];

// 「椎野が最近聴いている曲！」ページ（アイコンをクリックすると表示）。ちょうど4曲になるようにしてください
const listeningSongs = [
  { title: "もう二度と会えないといいね！- kaza", youtubeId: "BhheEkdarXI" },
  { title: "発育とマニエリスム - EMA×ぎゅる子", youtubeId: "0afgaQg9Dt8" },
  { title: "アンテナ - 感情市街記録", youtubeId: "bThH7UfzeuY" },
  { title: "遺書 - キタニタツヤ", youtubeId: "bcEDagHXQEU" },
];

/* =====================================================
   共通ユーティリティ
   ===================================================== */
function byNewest(a, b){ return new Date(b.date) - new Date(a.date); }
function formatDate(dateStr){ return dateStr.replace(/-/g, '.'); }

/* =====================================================
   LISTENING（アイコンをクリックした時のページ）
   サムネイルをクリックすると、その場で動画に差し替わって再生できます
   ===================================================== */
function renderListening(){
  const grid = document.getElementById('listeningGrid');
  if(!grid) return;

  grid.innerHTML = listeningSongs.map((song, i) => `
    <div class="listening-item" data-index="${i}">
      <div class="listening-item__thumb">
        <img src="https://img.youtube.com/vi/${song.youtubeId}/maxresdefault.jpg" alt="${song.title}" loading="lazy">
        <span class="listening-item__play"></span>
      </div>
      <p class="listening-item__title">${song.title}</p>
    </div>
  `).join('');

  grid.querySelectorAll('.listening-item').forEach(item => {
    item.addEventListener('click', () => {
      const song = listeningSongs[item.dataset.index];
      if(!song) return;
      const thumb = item.querySelector('.listening-item__thumb');
      thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${song.youtubeId}?autoplay=1" title="${song.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }, { once: true });
  });
}

/* =====================================================
   サムネイル一覧の描画（ORIGINAL・WORKS共通）
   type: 'original' または 'work'
   ===================================================== */
function renderThumbList(containerId, items, type){
  const container = document.getElementById(containerId);
  if(!container) return;

  container.innerHTML = items.map(item => {
    if(type === 'original'){
      const thumbSrc = item.thumbnail ? item.thumbnail : `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;
      const isDesign = matchesCategory(item, 'design');
      const isLink = !isDesign && !!item.link;
      const tag = isLink ? 'a' : 'div';
      const linkAttrs = isLink ? ` href="${item.link}" target="_blank" rel="noopener"` : '';
      const designAttr = isDesign ? ' data-design="true"' : '';
      return `
        <${tag} class="thumb-item" data-item-id="${item.id}"${linkAttrs}${designAttr}>
          <div class="thumb-item__thumb">
            <img src="${thumbSrc}" alt="${item.title}" loading="lazy" onerror="this.remove()">
          </div>
          <p class="thumb-item__title">${item.title}</p>
          <div class="thumb-item__row">
            <p class="thumb-item__desc">${item.artist}</p>
            <span class="thumb-item__date">${formatDate(item.date)}</span>
          </div>
        </${tag}>`;
    }
    const thumbSrc = item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg` : item.thumbnail;
    const isLink = !!item.link;
    const tag = isLink ? 'a' : 'div';
    const linkAttrs = isLink ? ` href="${item.link}" target="_blank" rel="noopener"` : '';
    return `
      <${tag} class="thumb-item" data-item-id="${item.id}"${linkAttrs}>
        <div class="thumb-item__thumb">
          <img src="${thumbSrc}" alt="${item.title}" loading="lazy" onerror="this.remove()">
        </div>
        <p class="thumb-item__title">${item.title}</p>
        <div class="thumb-item__row">
          <p class="thumb-item__desc">${item.desc}</p>
          <span class="thumb-item__date">${formatDate(item.date)}</span>
        </div>
      </${tag}>`;
  }).join('');

  container.querySelectorAll('.thumb-item').forEach(el => {
    if(el.hasAttribute('href')) return; // 外部リンクの作品はブラウザ標準の遷移に任せる
    el.addEventListener('click', () => {
      if(type === 'original'){
        if(el.dataset.design === 'true') openDesignLightbox(el.dataset.itemId);
        else openOriginalDetail(el.dataset.itemId);
      }else{
        openWorkDetail(el.dataset.itemId);
      }
    });
  });
}

function renderBlog(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;

  const sorted = [...blogPosts].sort(byNewest);
  const limit = container.dataset.limit ? parseInt(container.dataset.limit, 10) : sorted.length;
  const items = sorted.slice(0, limit);

  container.innerHTML = items.map(p => `
    <li class="blog-item">
      <span class="blog-item__date">${formatDate(p.date)}</span>
      <span class="blog-item__body">
        <span class="blog-item__title">${p.title}</span>
        <span class="blog-item__excerpt">${p.excerpt}</span>
      </span>
    </li>
  `).join('');

  container.querySelectorAll('.blog-item').forEach((el, i) => {
    el.addEventListener('click', () => openBlogDetail(items[i]));
  });
}

/* =====================================================
   BLOG 詳細ビュー（クリックした記事の内容を差し込む）
   ===================================================== */
function openBlogDetail(post){
  document.getElementById('blogDetailDate').textContent = formatDate(post.date);
  document.getElementById('blogDetailTitle').textContent = post.title;
  document.getElementById('blogDetailBody').textContent = post.body || post.excerpt;

  switchPanel('blog-detail');
}

/* =====================================================
   ORIGINAL 詳細ビュー（サムネイルクリックで動画を差し込む）
   ===================================================== */
function openOriginalDetail(id){
  const w = mvWorks.find(x => x.id === id);
  if(!w) return;

  const media = document.getElementById('originalDetailMedia');
  if(w.youtubeId){
    media.innerHTML = `<iframe src="https://www.youtube.com/embed/${w.youtubeId}" title="${w.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }else{
    media.innerHTML = `<img src="${w.thumbnail}" alt="${w.title}" onerror="this.remove()">`;
  }
  document.getElementById('originalDetailTitle').textContent = w.title;
  document.getElementById('originalDetailBody').textContent = w.artist;

  switchPanel('original-detail');
}

/* =====================================================
   ORIGINAL「design」カテゴリ用のライトボックス
   画像をクリックすると拡大表示され、左右の矢印で同じカテゴリの
   他の画像に移動できます（シンプルなフェードで切り替わります）
   ===================================================== */
let lightboxItems = [];
let lightboxIndex = 0;

function openDesignLightbox(clickedId){
  lightboxItems = mvWorks.filter(w => matchesCategory(w, 'design')).sort(byNewest);
  const foundIndex = lightboxItems.findIndex(w => w.id === clickedId);
  lightboxIndex = foundIndex === -1 ? 0 : foundIndex;

  const lightbox = document.getElementById('designLightbox');
  if(!lightbox) return;

  showLightboxImage(lightboxIndex, false);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');

  const multiple = lightboxItems.length > 1;
  document.getElementById('lightboxPrev').style.display = multiple ? '' : 'none';
  document.getElementById('lightboxNext').style.display = multiple ? '' : 'none';
}

function showLightboxImage(index, animate){
  const item = lightboxItems[index];
  if(!item) return;
  const img = document.getElementById('designLightboxImg');
  const title = document.getElementById('designLightboxTitle');

  const src = item.thumbnail ? item.thumbnail : `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

  resetLightboxZoom(); // 画像を切り替えたら拡大率を元に戻す

  if(animate){
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = src;
      img.alt = item.title;
      img.style.opacity = '1';
    }, 150);
  }else{
    img.src = src;
    img.alt = item.title;
    img.style.opacity = '1';
  }
  title.textContent = item.title;
}

function closeDesignLightbox(){
  const lightbox = document.getElementById('designLightbox');
  if(!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  resetLightboxZoom(); // 次に開いたときのために拡大率を元に戻す
}

function showPrevLightboxImage(){
  if(lightboxItems.length === 0) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
  showLightboxImage(lightboxIndex, true);
}

function showNextLightboxImage(){
  if(lightboxItems.length === 0) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
  showLightboxImage(lightboxIndex, true);
}

document.getElementById('designLightboxClose')?.addEventListener('click', closeDesignLightbox);
document.getElementById('designLightboxBackdrop')?.addEventListener('click', closeDesignLightbox);
document.getElementById('lightboxPrev')?.addEventListener('click', showPrevLightboxImage);
document.getElementById('lightboxNext')?.addEventListener('click', showNextLightboxImage);
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('designLightbox');
  if(!lightbox || !lightbox.classList.contains('is-open')) return;
  if(e.key === 'Escape') closeDesignLightbox();
  if(e.key === 'ArrowLeft') showPrevLightboxImage();
  if(e.key === 'ArrowRight') showNextLightboxImage();
});

// マウスホイールで拡大縮小、拡大しているときはクリックしてつまんで画像を動かせる
const LIGHTBOX_MIN_ZOOM = 1;
const LIGHTBOX_MAX_ZOOM = 4;   // 画面いっぱいくらいまで拡大できるようにする
const LIGHTBOX_ZOOM_STEP = 0.25;
let lightboxZoomScale = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;

function applyLightboxTransform(){
  const img = document.getElementById('designLightboxImg');
  if(img) img.style.transform = `translate(${lightboxPanX}px, ${lightboxPanY}px) scale(${lightboxZoomScale})`;
}

function resetLightboxZoom(){
  lightboxZoomScale = 1;
  lightboxPanX = 0;
  lightboxPanY = 0;
  applyLightboxTransform();
  const wrap = document.getElementById('designLightboxImgWrap');
  if(wrap) wrap.style.cursor = 'zoom-in';
}

(function initLightboxZoom(){
  const wrap = document.getElementById('designLightboxImgWrap');
  const img = document.getElementById('designLightboxImg');
  if(!wrap || !img) return;

  img.style.transformOrigin = 'center center';

  wrap.addEventListener('wheel', (e) => {
    e.preventDefault(); // ページ自体がスクロールしてしまわないようにする

    lightboxZoomScale += e.deltaY < 0 ? LIGHTBOX_ZOOM_STEP : -LIGHTBOX_ZOOM_STEP;
    lightboxZoomScale = Math.max(LIGHTBOX_MIN_ZOOM, Math.min(LIGHTBOX_MAX_ZOOM, lightboxZoomScale));

    if(lightboxZoomScale <= LIGHTBOX_MIN_ZOOM){
      lightboxPanX = 0;
      lightboxPanY = 0;
    }
    applyLightboxTransform();
    wrap.style.cursor = lightboxZoomScale > LIGHTBOX_MIN_ZOOM ? 'grab' : 'zoom-in';
  }, { passive: false });

  // 拡大しているときだけ、クリックしてつまんで画像を動かせる
  let isDragging = false;
  let dragStartX = 0, dragStartY = 0;
  let panStartX = 0, panStartY = 0;

  wrap.addEventListener('mousedown', (e) => {
    if(lightboxZoomScale <= LIGHTBOX_MIN_ZOOM) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = lightboxPanX;
    panStartY = lightboxPanY;
    wrap.style.cursor = 'grabbing';
    img.style.transition = 'opacity .15s ease'; // ドラッグ中は移動のtransitionを切って追従を良くする
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    lightboxPanX = panStartX + (e.clientX - dragStartX);
    lightboxPanY = panStartY + (e.clientY - dragStartY);
    applyLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    if(!isDragging) return;
    isDragging = false;
    wrap.style.cursor = lightboxZoomScale > LIGHTBOX_MIN_ZOOM ? 'grab' : 'zoom-in';
    img.style.transition = 'opacity .15s ease, transform .1s ease';
  });
})();

/* =====================================================
   WORKS 詳細ビュー（サムネイルクリックで内容を差し込む）
   ===================================================== */
function openWorkDetail(id){
  const w = otherWorks.find(x => x.id === id);
  if(!w) return;

  const media = document.getElementById('workDetailMedia');
  if(w.youtubeId){
    media.innerHTML = `<iframe src="https://www.youtube.com/embed/${w.youtubeId}" title="${w.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }else{
    media.innerHTML = `<img src="${w.thumbnail}" alt="${w.title}" onerror="this.remove()">`;
  }

  document.getElementById('workDetailTitle').textContent = w.title;
  document.getElementById('workDetailBody').textContent = w.detail || w.desc;

  switchPanel('work-detail');
}

/* =====================================================
   左メニューのカテゴリ絞り込み（ORIGINAL・WORKS）
   category を省略した場合は、最後に見ていたカテゴリ（初回は先頭のカテゴリ）を表示します。
   これにより「original」を押すだけで、そのままカテゴリの中身が表示されます。
   ===================================================== */
const lastCategory = { original: 'mv', works: 'video' };

// category は "video" のような文字列でも、["video","music"]のような配列でもOK
function matchesCategory(item, cat){
  if(Array.isArray(item.category)) return item.category.includes(cat);
  return item.category === cat;
}

function openCategoryView(section, category){
  const cat = category || lastCategory[section];
  lastCategory[section] = cat;

  // メニュー内のカテゴリ項目のハイライトを更新（PC・スマホ両方まとめて）
  document.querySelectorAll(`.nav-pane__cat[data-section="${section}"]`).forEach(a => {
    a.classList.toggle('is-active', a.dataset.category === cat);
  });

  if(section === 'original'){
    const items = mvWorks.filter(w => matchesCategory(w, cat)).sort(byNewest);
    renderThumbList('originalCategoryGrid', items, 'original');
    document.getElementById('originalCategoryLabel').textContent = cat;
    switchPanel('original-category');
  }else{
    const items = otherWorks.filter(w => matchesCategory(w, cat)).sort(byNewest);
    renderThumbList('worksCategoryGrid', items, 'work');
    document.getElementById('worksCategoryLabel').textContent = cat;
    switchPanel('works-category');
  }

  // カテゴリをクリックしたときは常に一番上から表示する
  // （詳細ビューの「戻る」から来たときだけ、switchPanel側の仕組みでスクロール位置が保たれる）
  if(viewPane) viewPane.scrollTop = 0;
}

function setupCategoryNav(){
  // カテゴリ項目（mv / releases / design ... など）
  document.querySelectorAll('.nav-pane__cat').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openCategoryView(a.dataset.section, a.dataset.category);
      closeMobileNav();
    });
  });

  // メニュータイトル本体（original / works）：押すと直前に見ていたカテゴリの中身が開く
  document.querySelectorAll('.nav-pane__link[data-section]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openCategoryView(a.dataset.section, '');
      closeMobileNav();
    });
  });
}

/* =====================================================
   パネル切り替え（左メニュー・戻る → 右側の表示を瞬時に切り替え）
   左メニューは常に表示されたままで、右側の中身だけが切り替わります。
   ===================================================== */
const navListItems = document.querySelectorAll('#navList li');
const views = document.querySelectorAll('.view');
const viewPane = document.getElementById('viewPane');

// 動画(iframe)を差し込む可能性があるパネルと、そのメディア要素IDの対応表
const VIDEO_PANELS = {
  'view-original-detail': 'originalDetailMedia',
  'view-work-detail': 'workDetailMedia',
};

// 各パネルのスクロール位置を覚えておいて、戻ってきたときに続きから見られるようにする
const scrollPositions = {};

function switchPanel(panelName){
  const currentActive = document.querySelector('.view.is-active');

  if(currentActive){
    // 離れるパネルのスクロール位置を保存
    // PCではviewPaneが、スマホでは画面(ウィンドウ)全体がスクロールするので、
    // 実際に動いている方の値を保存する
    const currentScroll = (viewPane ? viewPane.scrollTop : 0) || window.scrollY || 0;
    scrollPositions[currentActive.id] = currentScroll;

    // 動画を再生しているパネルから離れるときは、再生を止めるために中身を空にする
    if(VIDEO_PANELS[currentActive.id] && currentActive.id !== `view-${panelName}`){
      const media = document.getElementById(VIDEO_PANELS[currentActive.id]);
      if(media && media.querySelector('iframe')) media.innerHTML = '';
    }

    // LISTENINGページから離れるときも、再生中の動画があれば止めてサムネイルに戻す
    if(currentActive.id === 'view-listening' && currentActive.id !== `view-${panelName}`){
      if(currentActive.querySelector('iframe')) renderListening();
    }
  }

  const targetView = document.getElementById(`view-${panelName}`);
  views.forEach(v => v.classList.toggle('is-active', v === targetView));
  const navGroup = (targetView && targetView.dataset.navGroup) || panelName;
  navListItems.forEach(li => li.classList.toggle('is-active', li.dataset.panel === navGroup));

  // TOPを表示中かどうかをbodyに反映する（縦型スマホでのmenuボタン点滅に使う）
  document.body.classList.toggle('is-viewing-top', panelName === 'top');

  // 戻ってきたパネルは、前回見ていたスクロール位置を復元（初回は0）
  // PC・スマホどちらでも正しい方に反映されるよう、両方に対して設定する
  const restoreScroll = (targetView && scrollPositions[targetView.id]) || 0;
  if(viewPane) viewPane.scrollTop = restoreScroll;
  window.scrollTo(0, restoreScroll);

  // パネルが変わると中身の高さも変わるので、スクロールバーの表示・つまみの位置を更新する
  requestAnimationFrame(updateNavScrollbar);
}

document.querySelectorAll('a[data-panel]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(el.dataset.panel);
    closeMobileNav();
  });
});

/* =====================================================
   モバイルメニュー
   ===================================================== */
const menuToggle = document.getElementById('menuToggle');
let mobileNav;

function buildMobileNav(){
  mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = `
    <a href="#" data-panel="top" class="nav-pane__link">top</a>
    <div class="mobile-nav__group">
      <a href="#" data-section="original" class="nav-pane__link">original</a>
      <div class="mobile-nav__cats">
        <a href="#" class="nav-pane__cat" data-section="original" data-category="mv">mv</a>
        <a href="#" class="nav-pane__cat" data-section="original" data-category="releases">releases</a>
        <a href="#" class="nav-pane__cat" data-section="original" data-category="design">design</a>
        <a href="#" class="nav-pane__cat" data-section="original" data-category="others">others</a>
      </div>
    </div>
    <div class="mobile-nav__group">
      <a href="#" data-section="works" class="nav-pane__link">works</a>
      <div class="mobile-nav__cats">
        <a href="#" class="nav-pane__cat" data-section="works" data-category="video">video</a>
        <a href="#" class="nav-pane__cat" data-section="works" data-category="music">music</a>
        <a href="#" class="nav-pane__cat" data-section="works" data-category="design">design</a>
        <a href="#" class="nav-pane__cat" data-section="works" data-category="others">others</a>
      </div>
    </div>
    <a href="#" data-panel="blog" class="nav-pane__link">blog</a>
    <a href="#" data-panel="contact" class="nav-pane__link">contact</a>
  `;
  document.body.appendChild(mobileNav);
  mobileNav.querySelectorAll('a[data-panel]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      switchPanel(a.dataset.panel);
      closeMobileNav();
    });
  });
  // original/worksとカテゴリ項目はsetupCategoryNav()側でまとめて登録されます
}

function openMobileNav(){
  document.body.classList.add('nav-open');
  if(menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
}
function closeMobileNav(){
  document.body.classList.remove('nav-open');
  if(menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}
const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
if(mobileMenuTrigger){
  mobileMenuTrigger.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('nav-open');
    isOpen ? closeMobileNav() : openMobileNav();
  });
}

/* =====================================================
   初期化
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderBlog('blogList');
  renderListening();
  if(menuToggle) buildMobileNav();
  setupCategoryNav();
  initCursorTrail();
  initNavScrollbar();
});

/* =====================================================
   左メニュー右端のミニスクロールバー
   ・道（トラック）は透明のまま、正方形のつまみだけを表示する
   ・つまみをドラッグ（マウス・タッチ両対応）すると右側コンテンツがスクロールする
   ===================================================== */
let updateNavScrollbar = () => {};

function initNavScrollbar(){
  const track = document.getElementById('navScrollbar');
  const thumb = document.getElementById('navScrollbarThumb');
  const list = document.getElementById('navList');
  if(!track || !thumb || !viewPane || !list) return;

  // トラックの縦幅を「topの項目〜contactの項目」の実際の高さに合わせる
  function positionTrack(){
    const navPane = track.parentElement;
    const paneRect = navPane.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    track.style.top = `${listRect.top - paneRect.top}px`;
    track.style.height = `${listRect.height}px`;
  }

  function update(){
    positionTrack();

    const activeView = document.querySelector('.view.is-active');
    const hiddenOn = ['view-top', 'view-contact'];
    const scrollable = viewPane.scrollHeight > viewPane.clientHeight + 2;
    const shouldShow = scrollable && !(activeView && hiddenOn.includes(activeView.id));

    track.classList.toggle('is-visible', shouldShow);
    if(!shouldShow) return;

    const maxTravel = track.clientHeight - thumb.offsetHeight;
    const progress = viewPane.scrollTop / (viewPane.scrollHeight - viewPane.clientHeight);
    thumb.style.transform = `translateY(${Math.max(0, Math.min(1, progress)) * maxTravel}px)`;
  }
  updateNavScrollbar = update;

  function scrollToPointer(clientY){
    const trackRect = track.getBoundingClientRect();
    const maxTravel = trackRect.height - thumb.offsetHeight;
    let y = clientY - trackRect.top - thumb.offsetHeight / 2;
    y = Math.max(0, Math.min(y, maxTravel));
    const progress = maxTravel > 0 ? y / maxTravel : 0;
    viewPane.scrollTop = progress * (viewPane.scrollHeight - viewPane.clientHeight);
  }

  let dragging = false;
  thumb.addEventListener('pointerdown', (e) => {
    dragging = true;
    thumb.setPointerCapture(e.pointerId); // 指がつまみの外に出ても追従し続けるようにする
    e.preventDefault();
  });
  thumb.addEventListener('pointermove', (e) => {
    if(!dragging) return;
    scrollToPointer(e.clientY);
  });
  thumb.addEventListener('pointerup', () => { dragging = false; });
  thumb.addEventListener('pointercancel', () => { dragging = false; });

  viewPane.addEventListener('scroll', update);
  window.addEventListener('resize', update);
  update();
}

/* =====================================================
   カーソル追従の線
   ・カーソルの軌跡に沿って、四角くつながる線を描く
   ・置かれてから1秒経った点から、古いものの方から1つずつ消えていく
   ===================================================== */
function initCursorTrail(){
  const canvas = document.getElementById('cursorTrail');
  if(!canvas) return;

  // 動きを抑えたい設定（OS側の「視差効果を減らす」等）では表示しない
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;

  const ctx = canvas.getContext('2d');
  const LIFETIME = 1000;      // 点が消えるまでの時間(ms)
  const LINE_WIDTH = 6;       // ↓ここが線の太さです(px)。数字を変えるだけで調整できます
  const LINE_COLOR = '#F8ABA6';
  const MIN_DISTANCE = 12;    // 点を打つ間隔(px)

  let points = [];
  let lastX = null;
  let lastY = null;

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function addPoint(x, y){
    if(lastX === null){
      lastX = x;
      lastY = y;
    }
    const dx = x - lastX;
    const dy = y - lastY;
    if(Math.sqrt(dx * dx + dy * dy) >= MIN_DISTANCE){
      points.push({ x, y, t: performance.now() });
      lastX = x;
      lastY = y;
    }
  }

  // マウス操作（PC）
  window.addEventListener('mousemove', (e) => {
    addPoint(e.clientX, e.clientY);
  });

  // タッチ操作（スマホ・タブレット）：スワイプした軌跡にも同じ線を描く
  window.addEventListener('touchstart', () => {
    lastX = null;
    lastY = null;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    if(!touch) return;
    addPoint(touch.clientX, touch.clientY);
  }, { passive: true });

  function render(){
    const now = performance.now();

    // 1秒経った点を、古いものから1つずつ取り除く
    while(points.length && now - points[0].t > LIFETIME){
      points.shift();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(points.length > 1){
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = 'square';
      ctx.lineJoin = 'miter';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for(let i = 1; i < points.length; i++){
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}